#!/usr/bin/env node
// Helper: extract a horizontal band of the partner board so we can visually
// measure the x positions of each logo within a known row.

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PARTNERS = join(__dirname, "..", "public", "images", "partners");
const OUT = join(PARTNERS, "logos", "_measure");
mkdirSync(OUT, { recursive: true });

const src = "image (3).png";
const inPath = join(PARTNERS, src);

// Slice each row band so we can see exact positions
const rows = [
  { name: "row1", y:   0, h: 175 },
  { name: "row4", y: 575, h: 150 },
];

for (const r of rows) {
  await sharp(inPath)
    .extract({ left: 0, top: r.y, width: 1354, height: r.h })
    .png()
    .toFile(join(OUT, `${r.name}.png`));
  console.log(`✓ ${r.name}`);
}
