# Google Drive Gallery Sync

The gallery on `/gallery` (and the home-page preview) is powered by a single
**Google Drive folder**. Subfolders become categories, and the images inside
each subfolder become the items shown for that category.

```
Gallery/             ← root folder you pass to the sync script
├── Wedding/         ← becomes a category
├── Mehendi/         ← becomes a category
├── Haldi/
├── Sangeet/
├── Corporate/
└── …                ← any new folder you add becomes a new category
```

Adding, renaming, or removing folders/images in Drive is the **only** thing
the client has to do. The site picks up the changes automatically on its
next sync.

---

## How updates reach the site

The site is statically exported and hosted on GitHub Pages — there is no
runtime API on the live site. So the data flow is:

```
Google Drive (source of truth)
         │
         ▼  (scripts/sync-gallery.mjs — runs in GitHub Actions)
src/data/gallery-snapshot.json
         │
         ▼  (next build)
out/  →  deployed to GitHub Pages
```

The sync re-runs in three situations:

1. **Every 6 hours** — `schedule: cron: "0 */6 * * *"` in `.github/workflows/deploy.yml`.
2. **On every push to `main`** — normal deploy.
3. **On manual trigger** — go to the repo's **Actions** tab → *Deploy to GitHub Pages* → *Run workflow*. This is what to use right after a Drive upload if you want the change live in ~2 minutes instead of waiting for the next cron tick.

---

## One-time setup

Done once by the developer. The client never has to touch any of this.

### 1. Make the Drive folder public

In Drive, right-click the `Gallery` folder → **Share** → **General access** →
**Anyone with the link** → **Viewer**. The sync script reads the folder with
an API key, which only works for files marked public.

Copy the folder ID from the URL —
`https://drive.google.com/drive/folders/<THIS_IS_THE_ID>`.

### 2. Create a Google Cloud project + Drive API key

1. Open <https://console.cloud.google.com/>.
2. Create a new project (or reuse an existing one).
3. Open **APIs & Services → Library**, search **Google Drive API**, click **Enable**.
4. **APIs & Services → Credentials → Create Credentials → API key**.
5. Click **Restrict key** on the new key:
   - **API restrictions**: select **Google Drive API** only.
   - **Application restrictions**: leave as *None* (the key is used by GitHub Actions, not in the browser).
6. Copy the key value.

### 3. Add the secrets to GitHub

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret name | Value |
| --- | --- |
| `GOOGLE_API_KEY` | The API key from step 2. |
| `GOOGLE_DRIVE_GALLERY_FOLDER_ID` | The folder ID from step 1. |

### 4. Trigger the first sync

Either push a commit to `main`, or go to **Actions → Deploy to GitHub Pages → Run workflow**.
After the run finishes, the live site shows whatever was in Drive at sync time.

---

## Local development

Without any setup, `npm run dev` works — it just shows whatever is in
`src/data/gallery-snapshot.json` (committed). If you want to refresh the
snapshot locally:

```bash
export GOOGLE_API_KEY=…
export GOOGLE_DRIVE_GALLERY_FOLDER_ID=…
npm run sync-gallery
```

The script overwrites `src/data/gallery-snapshot.json`. Commit the file (or
discard it) — your call.

---

## What the snapshot looks like

```jsonc
{
  "generatedAt": "2026-05-28T08:00:00.123Z",
  "rootFolderId": "1AbCDeFg…",
  "categories": [
    {
      "id": "1XyZ…",            // Drive folder ID
      "name": "Wedding",        // Drive folder name → category label
      "images": [
        {
          "id": "1Img…",        // Drive file ID
          "name": "shot-01.jpg",
          "mimeType": "image/jpeg",
          "modifiedTime": "2026-05-28T07:55:00.000Z",
          "width": 4032,
          "height": 3024,
          "thumbnailSrc": "https://drive.google.com/thumbnail?id=1Img…&sz=w1200",
          "fullSrc":      "https://drive.google.com/thumbnail?id=1Img…&sz=w2400"
        }
      ]
    }
  ]
}
```

---

## Behaviour at edge cases

| Situation | What happens on the site |
| --- | --- |
| Drive folder is empty | "Gallery in progress" placeholder card replaces the grid. |
| One subfolder has no images | That category is hidden from the filter chips. |
| Non-image file is in a subfolder (`.mov`, `.pdf`, …) | Filtered out at sync time — Drive query uses `mimeType contains 'image/'`. |
| Sync API call rate-limits (HTTP 429) or hits 5xx | Script retries once with backoff. If still failing, the workflow run fails loudly — the previously deployed snapshot stays live. |
| Drive permissions revoked | Same as above — workflow fails, last good snapshot stays live. |
| API key / folder ID missing in CI | Script logs a warning, exits 0, build uses the committed snapshot. |
| File renamed in Drive | New name surfaces on next sync (Drive file ID stays the same). |
| File deleted + re-uploaded with same name | Drive issues a new ID → snapshot updates on next sync. |

---

## When to move beyond build-time sync

The current architecture trades real-time freshness for resilience: it
keeps the API key off the client, costs nothing per visitor, and survives
Drive outages by serving the last good snapshot. If the studio ever needs
**immediate** Drive→site reflection (sub-minute):

1. Move the deploy target from GitHub Pages to a runtime host (Vercel / Cloudflare Pages with Functions).
2. Replace the build-time snapshot with a server route (`/api/gallery`) that calls Drive on demand, with caching.
3. Optionally swap the API key for a service-account JSON for higher quota.

Not needed today; documented here so a future maintainer doesn't have to
re-derive the trade-off.
