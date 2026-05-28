#!/usr/bin/env node
// scripts/sync-gallery.mjs
//
// Build-time gallery sync. Reads the configured root "Gallery" folder on
// Google Drive, enumerates its subfolders (each becomes a gallery category),
// lists every image inside, and writes the result as a JSON snapshot at
// src/data/gallery-snapshot.json. The Next.js build then imports that JSON.
//
// Designed to run in CI before `next build`. Local devs can run
// `npm run sync-gallery` if they have credentials; without credentials the
// script logs a warning and exits cleanly so the build keeps whatever
// snapshot is already on disk.
//
// Required env:
//   GOOGLE_API_KEY                       — Drive API v3 key
//   GOOGLE_DRIVE_GALLERY_FOLDER_ID       — Root "Gallery" folder ID
// Optional env:
//   GOOGLE_DRIVE_REQUEST_TIMEOUT_MS      — per-request timeout, default 15000
//   GOOGLE_DRIVE_THUMB_WIDTH             — grid-thumb width, default 1200
//   GOOGLE_DRIVE_FULL_WIDTH              — lightbox width, default 2400

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const SNAPSHOT_PATH = resolve(REPO_ROOT, "src/data/gallery-snapshot.json");

const apiKey = process.env.GOOGLE_API_KEY;
const rootFolderId = process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;
const requestTimeoutMs = Number(process.env.GOOGLE_DRIVE_REQUEST_TIMEOUT_MS ?? 15_000);
const thumbWidth = Number(process.env.GOOGLE_DRIVE_THUMB_WIDTH ?? 1200);
const fullWidth = Number(process.env.GOOGLE_DRIVE_FULL_WIDTH ?? 2400);

const log = (...args) => console.log("[sync-gallery]", ...args);
const warn = (...args) => console.warn("[sync-gallery]", ...args);

if (!apiKey || !rootFolderId) {
  warn("Missing GOOGLE_API_KEY or GOOGLE_DRIVE_GALLERY_FOLDER_ID — skipping sync.");
  warn("Build will use the snapshot currently at src/data/gallery-snapshot.json.");
  process.exit(0);
}

const DRIVE_API = "https://www.googleapis.com/drive/v3/files";
const PAGE_SIZE = 100;
// Drive subjects new files to brief eventual-consistency lag; one retry on
// transient 5xx / network blips is plenty for build CI without masking real
// problems.
const MAX_ATTEMPTS = 2;

async function fetchWithTimeout(url, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), requestTimeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function driveListPage(query, pageToken) {
  const params = new URLSearchParams({
    q: query,
    key: apiKey,
    fields:
      "nextPageToken, files(id, name, mimeType, modifiedTime, imageMediaMetadata(width,height))",
    pageSize: String(PAGE_SIZE),
    orderBy: "name",
  });
  if (pageToken) params.set("pageToken", pageToken);
  const url = `${DRIVE_API}?${params.toString()}`;

  let lastErr;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetchWithTimeout(url);
      if (res.status === 429 || res.status >= 500) {
        // Rate-limit / server error — back off and retry once.
        lastErr = new Error(`Drive API ${res.status} ${res.statusText}`);
        await new Promise((r) => setTimeout(r, 600 * attempt));
        continue;
      }
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Drive API ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
      }
      return res.json();
    } catch (err) {
      lastErr = err;
      if (attempt >= MAX_ATTEMPTS) break;
      await new Promise((r) => setTimeout(r, 600 * attempt));
    }
  }
  throw lastErr;
}

async function listChildren(parentId, mimeFilter) {
  const items = [];
  let pageToken;
  do {
    const json = await driveListPage(
      `'${parentId}' in parents and trashed = false and ${mimeFilter}`,
      pageToken,
    );
    items.push(...(json.files ?? []));
    pageToken = json.nextPageToken;
  } while (pageToken);
  return items;
}

// Drive's documented public-preview endpoint. Stable for "Anyone with the
// link" files; honours `sz=w<width>` reliably up to ~1600 (and works for
// larger widths on most files).
function thumbnailUrl(fileId, width) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}

async function main() {
  log("syncing categories under root folder", rootFolderId);

  const subfolders = await listChildren(
    rootFolderId,
    "mimeType = 'application/vnd.google-apps.folder'",
  );

  if (subfolders.length === 0) {
    warn(`No subfolders found in folder ${rootFolderId}. Snapshot will be empty.`);
  }

  const categories = [];
  for (const folder of subfolders) {
    log(`  • ${folder.name} (${folder.id})`);
    const images = await listChildren(folder.id, "mimeType contains 'image/'");
    categories.push({
      id: folder.id,
      name: folder.name,
      images: images.map((file) => ({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        modifiedTime: file.modifiedTime ?? null,
        width: file.imageMediaMetadata?.width ?? null,
        height: file.imageMediaMetadata?.height ?? null,
        thumbnailSrc: thumbnailUrl(file.id, thumbWidth),
        fullSrc: thumbnailUrl(file.id, fullWidth),
      })),
    });
  }

  const snapshot = {
    generatedAt: new Date().toISOString(),
    rootFolderId,
    categories,
  };

  mkdirSync(dirname(SNAPSHOT_PATH), { recursive: true });
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + "\n");

  const totalImages = categories.reduce((sum, c) => sum + c.images.length, 0);
  log(`✔ wrote ${categories.length} categories, ${totalImages} images → ${SNAPSHOT_PATH}`);
}

main().catch((err) => {
  console.error("[sync-gallery] failed:", err);
  // Exit non-zero so CI surfaces the failure. The previously committed
  // snapshot stays on disk untouched so the build can still proceed if the
  // workflow chooses to ignore the failure (current default: fail loudly).
  process.exit(1);
});
