# Blizzful Pink Eventt

Premium event management website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Embla Carousel ready
- Yet Another React Lightbox
- Reusable JSON-driven gallery architecture

## Content Source

Business positioning, service scope, event categories, and contact details were derived from:

- `/Users/akshay/Downloads/Blizzful.pdf`
- `/Users/akshay/Downloads/BLIZZFULPINKEVENTT_COMPANYPROFILE2.pdf`

## Local Development

```bash
source ~/.nvm/nvm.sh
nvm use 22
npm install
npm run dev
```

## Build

```bash
source ~/.nvm/nvm.sh
nvm use 22
npm run build
```

## Structure

- `src/app`: App Router pages
- `src/components`: reusable layout, motion, UI, and gallery components
- `src/data/site-data.ts`: company content, navigation, services, stats, and gallery JSON
- `public/images`: local editorial and gallery placeholders for Phase 1

## Phase 2 Ready

The gallery and content structure are prepared for future media integrations such as Cloudinary or Google Drive without changing the presentation layer.
