# Google Drive API Setup Guide

This guide walks through creating a Google Drive API key and finding your gallery folder ID. This is a **one-time setup** completed by the developer.

---

## Prerequisites

- A Google account (the same one where the gallery photos are stored)
- The gallery folder must already exist in Google Drive

---

## Part 1: Create Google Cloud Project & API Key

### Step 1: Go to Google Cloud Console

Open your browser and visit:  
**https://console.cloud.google.com/**

Sign in with your Google account.

---

### Step 2: Create a New Project

1. Click the **project dropdown** at the top of the page (next to "Google Cloud")
2. Click **"New Project"** in the popup
3. Enter project name: `Blizzful Gallery API` (or any name you prefer)
4. Click **"Create"**
5. Wait for the project to be created (takes ~10 seconds)
6. Click **"Select Project"** when prompted, or manually switch to it from the project dropdown

---

### Step 3: Enable Google Drive API

1. In the left sidebar, click **"APIs & Services"** → **"Library"**
   - Or use the search bar at the top: search for "APIs & Services"

2. In the API Library search box, type: `Google Drive API`

3. Click on **"Google Drive API"** from the results

4. Click the blue **"Enable"** button

5. Wait for it to enable (~5 seconds). You'll see a dashboard page when done.

---

### Step 4: Create an API Key

1. In the left sidebar, click **"Credentials"**

2. Click **"+ Create Credentials"** at the top

3. Select **"API key"** from the dropdown

4. A popup appears with your new API key. **Copy it** and save it temporarily in a text file.

---

### Step 5: Restrict the API Key (Important for Security)

1. In the API key popup, click **"Restrict Key"** (or click "Edit" next to the key in the credentials list)

2. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check only **"Google Drive API"** from the dropdown list
   - Uncheck any other APIs

3. Under **"Application restrictions"**:
   - Leave as **"None"** (allows Vercel to use it)
   - Do NOT select "HTTP referrers" or "IP addresses"

4. Click **"Save"** at the bottom

5. **Keep this API key safe** — you'll add it to Vercel in the next section.

---

## Part 2: Get Your Gallery Folder ID

### Step 1: Open Google Drive

Visit **https://drive.google.com/** and sign in with the same Google account.

---

### Step 2: Locate Your Gallery Folder

Navigate to the folder where all wedding/event photos are stored. This folder should contain **subfolders** for each category:

```
Gallery/
├── Wedding/
├── Mehendi/
├── Haldi/
├── Sangeet/
├── Corporate/
└── ...
```

**Note:** The folder can be named anything (doesn't have to be "Gallery"). Subfolders automatically become category names on the website.

---

### Step 3: Copy the Folder ID

1. **Click on the folder** to open it (you should see the subfolders inside)

2. Look at the **browser address bar**. The URL will look like:
   ```
   https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz0123456789
   ```

3. **Copy the long ID** after `/folders/` (everything after the last slash, before any `?` character)

   Example folder ID:  
   `1AbCdEfGhIjKlMnOpQrStUvWxYz0123456789`

4. **Paste and save this ID** in your text file next to the API key.

---

### Step 4: Make the Folder Public (Required)

The API key can only access **public files**. You must share the folder:

1. **Right-click** the gallery folder in Google Drive

2. Click **"Share"** from the menu

3. In the sharing popup, click **"General access"** (or "Change" next to "Restricted")

4. Select **"Anyone with the link"**

5. Set the role to **"Viewer"**

6. Click **"Done"**

**Important:** Without this step, the API will return "404 File not found" errors.

---

## Part 3: Test Your Setup (Optional but Recommended)

Before adding secrets to Vercel, verify everything works:

1. Open a new browser tab

2. Paste this URL, replacing `YOUR_FOLDER_ID` and `YOUR_API_KEY` with your actual values:

   ```
   https://www.googleapis.com/drive/v3/files/YOUR_FOLDER_ID?key=YOUR_API_KEY&fields=id,name,mimeType
   ```

3. Press Enter

**Expected result:**  
You should see JSON text showing the folder name and ID:
```json
{
  "id": "1AbCd...",
  "name": "Gallery",
  "mimeType": "application/vnd.google-apps.folder"
}
```

**If you see an error:**
- **404 "File not found"** → Folder is not shared publicly (repeat Step 4 above)
- **403 "Permission denied"** → API key restriction issue (check Step 5 above)
- **400 "API key not valid"** → Wrong API key copied, or Drive API not enabled

---

## Summary: What You Need

After completing this guide, you should have:

| Item | Example | Where to use it |
|------|---------|----------------|
| **API Key** | `AIzaSyA1b2C3d4E5f6G7h8I9j0K1L2M3N4O5P6Q` | Vercel environment variable: `GOOGLE_API_KEY` |
| **Folder ID** | `1AbCdEfGhIjKlMnOpQrStUvWxYz0123456789` | Vercel environment variable: `GOOGLE_DRIVE_GALLERY_FOLDER_ID` |

**Next Step:** Add these to Vercel (see `VERCEL_SETUP.md`)

---

## Security Notes

✅ **Safe to use in Vercel:**  
The API key is restricted to Google Drive API only and has no write permissions (folder is shared as Viewer). Even if leaked, attackers can only *read* public files.

✅ **Client never sees these secrets:**  
The sync runs during build-time on Vercel's servers, not in the browser. The website code doesn't contain API keys.

❌ **Do not commit to GitHub:**  
Never paste the API key or folder ID directly into code files. Always use environment variables.

---

## Troubleshooting

### "File not found" error during sync
- Folder is not shared publicly → Right-click folder → Share → Anyone with the link → Viewer

### "API key not valid" error
- API key was regenerated or deleted → Create a new one (Step 4)
- API key has IP/referrer restrictions → Change to "None" (Step 5)

### "Permission denied" error
- Google Drive API is not enabled → Enable it (Step 3)
- API key is restricted to wrong API → Edit key restrictions (Step 5)

### Gallery shows old photos after client uploads new ones
- Wait 30 minutes for automatic sync (if cron is set to 30 min)
- Or manually trigger: Go to Vercel dashboard → Project → Deployments → Click "..." menu → "Redeploy"

---

## Maintenance

**No ongoing maintenance required.**  
Once set up, the API key and folder ID work indefinitely unless:
- You delete the Google Cloud project
- You regenerate the API key
- You delete/move the gallery folder

If the client needs to reorganize folders:
- ✅ Renaming subfolders → Updates automatically on next sync
- ✅ Adding new subfolders → Automatically becomes a new category
- ✅ Moving images between subfolders → Updates on next sync
- ❌ Moving the root "Gallery" folder → You'll need to update the folder ID in Vercel

---

**End of Guide**
