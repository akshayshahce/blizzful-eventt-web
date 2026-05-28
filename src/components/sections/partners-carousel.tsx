"use client";

import { motion } from "framer-motion";
import { partnerGroups, type Partner, type PartnerGroup } from "@/data/site-data";
import { cn } from "@/lib/utils";

// Logos are referenced with absolute `/images/...` paths in the data, which
// works under the dev server (root) but breaks on GitHub Pages where the site
// is served from `/blizzful-eventt-web/`. `next/image` handles this via the
// custom loader, but the partner cards use a plain <img> for full SVG / PNG
// control, so we prefix manually here.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
function withBasePath(src: string): string {
  if (!src) return src;
  if (src.startsWith("http") || src.startsWith("//") || src.startsWith("data:")) return src;
  return `${BASE_PATH}${src}`;
}

function autoMonogram(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function PartnerCard({ partner }: { partner: Partner }) {
  const monogram = partner.monogram ?? autoMonogram(partner.name);
  const bg = partner.color ?? "#1f3a78";

  return (
    <div className="flex h-[112px] w-[240px] shrink-0 flex-col items-center justify-center gap-2 rounded-[1rem] border border-[var(--ivory)]/10 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(168,85,247,0.22)] sm:h-[124px] sm:w-[250px]">
      {partner.logo ? (
        <div className="relative flex h-[68px] w-full items-center justify-center px-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(partner.logo)}
            alt={`${partner.name} logo`}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : (
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.75rem] font-bold tracking-tight text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.12)]"
          style={{
            background: `linear-gradient(135deg, ${bg} 0%, ${bg}cc 100%)`,
            fontSize: monogram.length >= 3 ? "0.78rem" : monogram.length === 2 ? "1rem" : "1.2rem",
          }}
        >
          <span>{monogram.slice(0, 3)}</span>
        </div>
      )}
      <span className="line-clamp-1 text-center text-[0.72rem] font-medium leading-tight text-[#0a4d5c]/80 sm:text-[0.76rem]">
        {partner.name}
      </span>
    </div>
  );
}

function PartnerRow({
  group,
  accent,
  reverse = false,
  speed = 60,
}: {
  group: PartnerGroup;
  accent: "wisteria" | "sky" | "rose";
  reverse?: boolean;
  speed?: number;
}) {
  const accentClass =
    accent === "wisteria"
      ? "text-[var(--wisteria)]"
      : accent === "sky"
        ? "text-[var(--sky)]"
        : "text-[#fb7185]";

  // Duplicate to enable seamless looping
  const loop = [...group.partners, ...group.partners];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="pb-5">
        <p className={cn("text-[0.62rem] font-medium uppercase tracking-[0.42em]", accentClass)}>
          {group.label}
        </p>
        <p className="mt-1 text-sm text-[var(--ivory)]/75">{group.subtitle}</p>
      </div>

      <div className="group/marquee relative overflow-hidden">
        <div
          className="flex w-max items-center gap-4 marquee-track partner-marquee"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {loop.map((partner, i) => (
            <PartnerCard key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
        {/* Fade edges so cards fade in/out smoothly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,var(--surface),transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,var(--surface),transparent)]" />
      </div>
    </motion.div>
  );
}

export function PartnersCarousel() {
  const accents: Array<"wisteria" | "sky" | "rose"> = ["wisteria", "sky", "rose"];
  // Vary speeds slightly per row for visual interest, and alternate directions
  const config: Array<{ speed: number; reverse: boolean }> = [
    { speed: 70, reverse: false },
    { speed: 90, reverse: true },
    { speed: 55, reverse: false },
  ];

  return (
    <div className="relative">
      {/* Category chip nav (anchor-only, decorative) */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {partnerGroups.map((g, i) => (
          <a
            key={g.id}
            href={`#partner-${g.id}`}
            className="glow-chip inline-flex items-center gap-2 rounded-full border border-[var(--ivory)]/25 px-5 py-2.5 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-[var(--ivory)]/75"
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                i === 0 && "bg-[var(--wisteria)]",
                i === 1 && "bg-[var(--sky)]",
                i === 2 && "bg-[#fb7185]",
              )}
            />
            {g.label}
          </a>
        ))}
      </div>

      <div className="space-y-14 sm:space-y-16">
        {partnerGroups.map((group, i) => (
          <div key={group.id} id={`partner-${group.id}`}>
            <PartnerRow
              group={group}
              accent={accents[i]}
              speed={config[i].speed}
              reverse={config[i].reverse}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
