# Vercel Deployment Setup Guide

This guide walks through setting up a Vercel account and deploying your website. Choose between **GitHub Integration** (recommended) or **Manual Upload**.

---

## What is Vercel?

Vercel is a cloud platform for hosting static websites and web applications. It offers:

- ✅ **Free tier** for small projects (100GB bandwidth/month)
- ✅ **Custom domain support** (e.g., `yourname.com`)
- ✅ **Automatic HTTPS** (free SSL certificate)
- ✅ **Global CDN** with India edge servers (fast loading in Mumbai, Bangalore, Chennai)
- ✅ **Zero server maintenance** required

---

## Part 1: Create a Vercel Account

### Step 1: Sign Up

1. Visit **https://vercel.com/**

2. Click **"Sign Up"** in the top-right corner

3. Choose one of these options:
   - **Continue with GitHub** (Recommended if your code is on GitHub)
   - **Continue with GitLab** (if using GitLab)
   - **Continue with Bitbucket** (if using Bitbucket)
   - **Continue with Email** (manual login)

4. **Recommended:** Choose **"Continue with GitHub"**  
   - Click **"Authorize Vercel"** when GitHub asks for permission
   - This allows Vercel to auto-deploy when you push code changes

5. Complete the signup flow (name, team name optional)

---

### Step 2: Choose a Plan

After signing up, Vercel will ask you to choose a plan:

- Select **"Hobby"** (Free)
- This is sufficient for small business websites

**Note:** Vercel's terms say Hobby is for "non-commercial" use, but enforcement is rare for small sites. If you prefer guaranteed commercial use, select **"Pro"** ($20/month) or use Cloudflare Pages (see alternative section at the end).

---

## Part 2: Deploy Your Website

Vercel offers two deployment methods. Choose the one that fits your workflow.

---

## Method A: GitHub Integration (Recommended)

**Best for:** Ongoing updates, automatic deployments, easy maintenance

### Prerequisites

- Your website code is already on GitHub
- You signed up with "Continue with GitHub" (or connect GitHub later in settings)

---

### Step 1: Import Your Repository

1. From the Vercel dashboard, click **"Add New..."** → **"Project"**

2. Vercel shows your GitHub repositories. Find your website repo:  
   Example: `akshayshahce/blizzful-eventt-web`

3. Click **"Import"** next to the repository name

---

### Step 2: Configure Build Settings

Vercel auto-detects Next.js projects. Verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js (auto-detected) |
| **Build Command** | `npm run build` (auto-filled) |
| **Output Directory** | `out` (auto-filled) |
| **Install Command** | `npm install` (auto-filled) |

**Leave these as default** — don't change them.

---

### Step 3: Add Environment Variables

Expand the **"Environment Variables"** section and add these two secrets:

1. **Variable Name:** `GOOGLE_API_KEY`  
   **Value:** (paste your Google API key from the previous setup)

2. **Variable Name:** `GOOGLE_DRIVE_GALLERY_FOLDER_ID`  
   **Value:** (paste your Google Drive folder ID)

Make sure both are set for **"Production"** environment (checkboxes).

---

### Step 4: Deploy

1. Click **"Deploy"** at the bottom

2. Vercel starts building your site. Watch the build logs:
   - ✅ Installing dependencies
   - ✅ Running `npm run build` (which runs gallery sync + Next.js build)
   - ✅ Look for: `[sync-gallery] found X categories, Y images`

3. Wait 2-3 minutes for the first deploy

4. When finished, Vercel shows:  
   **"Your project has been deployed!"**

5. Click **"Visit"** to see your live site

---

### Step 5: Test the Gallery

1. Open the deployed site URL (e.g., `https://your-project.vercel.app`)

2. Navigate to the `/gallery` page

3. Confirm photos from Google Drive appear

**If photos don't show:**
- Check the build logs for sync errors
- Verify environment variables are set correctly (Settings → Environment Variables)
- Re-deploy: Deployments tab → "..." menu → "Redeploy"

---

### Step 6: Automatic Updates

From now on:

- **Code changes:** Push to GitHub → Vercel auto-deploys in ~2 minutes
- **Photo uploads:** Client uploads to Drive → Photos appear in ~30 minutes (or redeploy manually)
- **No manual uploads needed** — everything is automated

---

## Method B: Manual Upload (Without GitHub)

**Best for:** One-time deployment, no GitHub account, or testing

### Prerequisites

- Node.js and npm installed on your computer
- Website source code downloaded as a folder

---

### Step 1: Install Vercel CLI

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
npm install -g vercel
```

This installs the Vercel command-line tool globally.

---

### Step 2: Login to Vercel

In the terminal, run:

```bash
vercel login
```

Follow the prompts:
- Enter your email
- Check your email for the verification code
- Enter the code in the terminal

---

### Step 3: Build the Project Locally

Navigate to your website folder in the terminal:

```bash
cd /path/to/blizzful-eventt-web
```

Run the build (this requires the environment variables):

```bash
export GOOGLE_API_KEY="your-api-key-here"
export GOOGLE_DRIVE_GALLERY_FOLDER_ID="your-folder-id-here"
npm install
npm run build
```

**Windows (Command Prompt):** Use `set` instead of `export`:
```cmd
set GOOGLE_API_KEY=your-api-key-here
set GOOGLE_DRIVE_GALLERY_FOLDER_ID=your-folder-id-here
npm install
npm run build
```

This creates an `out/` folder with the built website.

---

### Step 4: Deploy to Vercel

Run:

```bash
vercel --prod
```

The CLI will ask questions:
- **Set up and deploy?** → Yes
- **Which scope?** → Choose your account
- **Link to existing project?** → No (first time)
- **Project name?** → `blizzful-eventt-web` (or any name)
- **Directory?** → `./out` (the build output)
- **Override settings?** → No

Vercel uploads the `out/` folder and deploys. You'll get a live URL when finished.

---

### Step 5: Update Environment Variables (Important)

Manual deployment doesn't include environment variables. You need to add them in the dashboard:

1. Go to **https://vercel.com/dashboard**

2. Click your project name

3. Go to **Settings** → **Environment Variables**

4. Add:
   - `GOOGLE_API_KEY` → (your key)
   - `GOOGLE_DRIVE_GALLERY_FOLDER_ID` → (your folder ID)

5. **Redeploy:** Deployments tab → "..." → "Redeploy"

---

### Step 6: Future Updates (Manual Method)

Every time you make changes:

1. Rebuild locally: `npm run build`
2. Run: `vercel --prod`
3. Wait for upload to complete

**Downside:** No automatic sync for Drive photo updates. Client needs to ask you to redeploy manually.

---

## Part 3: Add a Custom Domain

### Prerequisites

- Your client has purchased a domain name (e.g., `blizzfulpinkeventt.in`)
- You have access to the domain registrar (GoDaddy, Hostinger, Namecheap, etc.)

---

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel dashboard

2. Click **Settings** → **Domains**

3. Enter the domain name: `blizzfulpinkeventt.in`

4. Click **"Add"**

5. Vercel shows DNS records you need to add

---

### Step 2: Configure DNS Records

Vercel typically asks for one of these:

**Option A: CNAME Record (most common)**
| Type | Name | Value |
|------|------|-------|
| CNAME | `@` (or leave blank) | `cname.vercel-dns.com` |

**Option B: A Record (if registrar doesn't support CNAME for root domain)**
| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |

---

### Step 3: Add Records to Your Domain Registrar

1. Log in to your domain registrar (e.g., GoDaddy, Hostinger)

2. Find **DNS Settings** or **DNS Management**

3. Add the records shown by Vercel (copy exactly)

4. Save changes

5. **Wait 10-60 minutes** for DNS propagation

---

### Step 4: Verify Domain

1. Return to Vercel → Settings → Domains

2. The domain shows **"Valid Configuration"** when DNS propagates

3. Vercel automatically issues a free SSL certificate (HTTPS)

4. Visit `https://blizzfulpinkeventt.in` to confirm

---

### Step 5: Redirect www (Optional)

If you want `www.blizzfulpinkeventt.in` to also work:

1. In Vercel, add a second domain: `www.blizzfulpinkeventt.in`

2. Add another CNAME record in your registrar:
   | Type | Name | Value |
   |------|------|-------|
   | CNAME | `www` | `cname.vercel-dns.com` |

3. Vercel auto-redirects `www` to the main domain

---

## Part 4: Client Photo Updates

### How It Works

When your client uploads photos to Google Drive:

1. **Automatic sync (if using GitHub integration):**
   - Every 30 minutes, Vercel automatically rebuilds and syncs
   - Client does nothing — photos appear automatically

2. **Manual trigger (for immediate updates):**
   - Go to Vercel dashboard
   - Deployments tab → Click "..." next to latest deployment
   - Select **"Redeploy"**
   - Photos update in ~2 minutes

### Client Instructions (Simple Version)

Give your client this process:

1. **Upload photos** to Google Drive gallery folder (organize by subfolder)
2. **Wait 30 minutes**, OR ask you to redeploy manually
3. **Refresh the website** — new photos appear

**Client never needs:**
- Vercel account
- GitHub account
- Technical knowledge

---

## Comparison: GitHub Integration vs Manual Upload

| Feature | GitHub Integration | Manual Upload |
|---------|-------------------|---------------|
| **Initial setup** | Easier (click import) | Requires CLI installation |
| **Code updates** | Auto-deploy on push | Manual rebuild + upload |
| **Photo updates** | Auto-sync every 30 min | Manual redeploy needed |
| **Best for** | Ongoing maintenance | One-time deployment |
| **Recommended** | ✅ Yes | Only for testing |

---

## Alternative: Cloudflare Pages (100% Free Commercial Use)

If you prefer a platform that explicitly allows commercial use on the free tier:

### Why Cloudflare Pages?

- ✅ **Unlimited bandwidth** (vs Vercel's 100GB)
- ✅ **Unlimited builds**
- ✅ **Commercial use explicitly allowed** (no ToS concerns)
- ✅ **Email routing** included (forward `hello@yourdomain.com` for free)

### Quick Setup

1. Sign up at **https://pages.cloudflare.com/**

2. Connect GitHub (same process as Vercel)

3. Import project → Same build settings as Vercel

4. Add environment variables (same two secrets)

5. Deploy

**The rest is identical to Vercel.** Choose based on preference.

---

## Troubleshooting

### Build fails with "Module not found" error
- Check that all dependencies are in `package.json`
- Run `npm install` locally first to verify

### Gallery shows "Gallery in progress" placeholder
- Environment variables not set → Add them in Settings
- Folder not public → Check Google Drive sharing (see GOOGLE_DRIVE_API_SETUP.md)

### Domain shows "This site can't be reached"
- DNS not propagated yet → Wait 1 hour
- Wrong DNS records → Double-check CNAME/A record values

### "Forbidden" or "Access denied" error in build logs
- API key restrictions wrong → Check Google Cloud Console (see GOOGLE_DRIVE_API_SETUP.md)

---

## Summary Checklist

Before going live:

- ✅ Vercel account created
- ✅ Project deployed (via GitHub or manual upload)
- ✅ Environment variables added (`GOOGLE_API_KEY`, `GOOGLE_DRIVE_GALLERY_FOLDER_ID`)
- ✅ Gallery page shows photos from Drive
- ✅ Custom domain configured (optional but recommended)
- ✅ SSL certificate active (site uses HTTPS)
- ✅ Test photo upload → sync workflow

---

**End of Guide**
