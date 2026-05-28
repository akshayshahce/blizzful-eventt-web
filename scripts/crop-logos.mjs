#!/usr/bin/env node
// Crops individual brand logos out of the two composite partner-board images
// (image (3).png + image (4).png) into public/images/partners/logos/{slug}.png
//
// Each entry: { slug, src, x, y, w, h }
//   src   = source PNG basename in public/images/partners/
//   x/y   = top-left pixel of the crop region
//   w/h   = width/height of the crop region

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PARTNERS = join(__dirname, "..", "public", "images", "partners");
const OUT = join(PARTNERS, "logos");
mkdirSync(OUT, { recursive: true });

// image (3).png is 1354x862 — institutional/corporate/luxury composite
// image (4).png is 1238x719 — additional brands composite
// Coordinates measured by inspecting each composite

const A = "image (3).png";
const B = "image (4).png";

const crops = [
  // ====== image (3).png  (1354 x 862) ======
  // Row 1 — top ~y 0..175 — 7 institutional emblems (measured)
  { slug: "maharashtra-shasan",        src: A, x:    5, y:   0, w: 200, h: 175 },
  { slug: "sndtw",                     src: A, x:  210, y:   0, w: 195, h: 175 },
  { slug: "women-child-development",   src: A, x:  415, y:   0, w: 210, h: 175 },
  { slug: "kvic",                      src: A, x:  630, y:   0, w: 195, h: 175 },
  { slug: "msme-startups-forum",       src: A, x:  830, y:   0, w: 195, h: 175 },
  { slug: "mavim",                     src: A, x: 1030, y:   0, w: 170, h: 175 },
  { slug: "wise-sndtwu-incubation",    src: A, x: 1200, y:   0, w: 150, h: 175 },

  // Row 2 — y ~230..390 — 5 logos (skip caption row at y=180-220)
  { slug: "edi-ahmedabad",             src: A, x:   10, y: 230, w: 290, h: 155 },
  { slug: "mahalaxmi-saras",           src: A, x:  345, y: 230, w: 175, h: 155 },
  { slug: "ratan-tata-skills-uni",     src: A, x:  540, y: 230, w: 235, h: 155 },
  { slug: "nse",                       src: A, x:  815, y: 230, w: 200, h: 155 },
  { slug: "bse",                       src: A, x: 1085, y: 230, w: 235, h: 155 },

  // Row 3 — y ~415..570 — 5 logos
  { slug: "mssu-ispark-foundation",    src: A, x:   30, y: 415, w: 170, h: 155 },
  { slug: "tata-motors",               src: A, x:  245, y: 415, w: 215, h: 155 },
  { slug: "morningstar",               src: A, x:  475, y: 415, w: 320, h: 155 },
  { slug: "mentormyboard",             src: A, x:  840, y: 415, w: 215, h: 155 },
  { slug: "kotak-mahindra",            src: A, x: 1075, y: 415, w: 250, h: 155 },

  // Row 4 — y ~585..725 — 5 logos
  { slug: "tisser",                    src: A, x:   40, y: 575, w: 260, h: 150 },
  { slug: "global-inclusion-summit",   src: A, x:  315, y: 575, w: 215, h: 150 },
  { slug: "vyapaarjagat",              src: A, x:  555, y: 575, w: 240, h: 150 },
  { slug: "news-india",                src: A, x:  815, y: 575, w: 220, h: 150 },
  { slug: "laja",                      src: A, x: 1070, y: 575, w: 215, h: 150 },

  // Row 5 — y ~740..862 — 5 logos
  { slug: "gia",                       src: A, x:   15, y: 730, w: 340, h: 132 },
  { slug: "senco-gold",                src: A, x:  365, y: 730, w: 275, h: 132 },
  { slug: "neha-lulla",                src: A, x:  650, y: 730, w: 195, h: 132 },
  { slug: "beau-jewels",               src: A, x:  870, y: 730, w: 220, h: 132 },
  { slug: "sap-jlp",                   src: A, x: 1100, y: 730, w: 230, h: 132 },

  // ====== image (4).png  (1238 x 719) ======
  // Row 1 — y ~5..140 — 5 brands
  { slug: "oracle",                    src: B, x:    0, y:   5, w: 235, h: 135 },
  { slug: "amazon",                    src: B, x:  255, y:   5, w: 215, h: 135 },
  { slug: "times-now",                 src: B, x:  490, y:   5, w: 215, h: 135 },
  { slug: "alt-balaji",                src: B, x:  720, y:   5, w: 200, h: 135 },
  { slug: "adobe",                     src: B, x:  945, y:   5, w: 215, h: 135 },

  // Row 2 — y ~165..300 — 5 brands
  { slug: "adani",                     src: B, x:    0, y: 165, w: 215, h: 135 },
  { slug: "ntpc",                      src: B, x:  235, y: 165, w: 225, h: 135 },
  { slug: "ifad",                      src: B, x:  480, y: 165, w: 235, h: 135 },
  { slug: "ola",                       src: B, x:  735, y: 165, w: 205, h: 135 },
  { slug: "aircto",                    src: B, x:  960, y: 165, w: 235, h: 135 },

  // Row 3 — y ~320..460 — 4 brands
  { slug: "ibm",                       src: B, x:    0, y: 320, w: 230, h: 145 },
  { slug: "xlri",                      src: B, x:  245, y: 320, w: 245, h: 145 },
  { slug: "cii",                       src: B, x:  650, y: 320, w: 295, h: 145 },
  { slug: "franklin-templeton",        src: B, x:  990, y: 320, w: 215, h: 145 },

  // Row 4 — y ~485..600 — 4 brands
  { slug: "razorpay",                  src: B, x:    0, y: 485, w: 270, h: 120 },
  { slug: "dbs-bank",                  src: B, x:  295, y: 485, w: 260, h: 120 },
  { slug: "unacademy",                 src: B, x:  600, y: 485, w: 305, h: 120 },
  { slug: "rcbs",                      src: B, x:  945, y: 485, w: 230, h: 120 },

  // Row 5 — y ~620..719 — 3 brands
  { slug: "towers-watson",             src: B, x:    0, y: 620, w: 280, h: 95  },
  { slug: "zolve",                     src: B, x:  320, y: 620, w: 305, h: 95  },
  { slug: "flipkart",                  src: B, x:  765, y: 620, w: 320, h: 95  },
];

let ok = 0;
let fail = 0;
for (const c of crops) {
  const inPath = join(PARTNERS, c.src);
  const outPath = join(OUT, `${c.slug}.png`);
  try {
    const meta = await sharp(inPath).metadata();
    // Clamp values to image bounds
    const w = Math.min(c.w, (meta.width  ?? c.w) - c.x);
    const h = Math.min(c.h, (meta.height ?? c.h) - c.y);
    await sharp(inPath)
      .extract({ left: c.x, top: c.y, width: w, height: h })
      .png({ quality: 95 })
      .toFile(outPath);
    console.log(`✓ ${c.slug}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${c.slug}: ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} ok, ${fail} failed`);
