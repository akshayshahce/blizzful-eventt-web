# Blizzful Pink Eventt

Premium event management website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

**Live site:** https://akshayshahce.github.io/blizzful-eventt-web/

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Embla Carousel
- Yet Another React Lightbox

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build (local test)

```bash
npm run build
```

The static output is written to `out/`.

## GitHub Pages Deployment

Deployment is **fully automatic** via GitHub Actions on every push to `main`.

**Workflow:** `.github/workflows/deploy.yml`

**How it works:**
1. Push to `main` branch
2. GitHub Actions installs dependencies and runs `npm run build` with `GITHUB_PAGES=true`
3. The `out/` folder is deployed to GitHub Pages
4. Live at: https://akshayshahce.github.io/blizzful-eventt-web/

**One-time GitHub setup (do once):**
1. Go to the repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

After that, every push to `main` triggers a new deployment automatically.

## Structure

- `src/app` — App Router pages
- `src/components` — reusable layout, motion, UI, and gallery components
- `src/data/site-data.ts` — company content, navigation, services, stats, and gallery JSON
- `public/images` — event photos and assets
- `.github/workflows/deploy.yml` — GitHub Actions CI/CD pipeline
