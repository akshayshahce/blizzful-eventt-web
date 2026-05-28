"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  items: string[];
  className?: string;
  theme?: "navy" | "sky" | "ivory";
  italic?: boolean;
};

export function MarqueeStrip({
  items,
  className,
  theme = "sky",
  italic = true,
}: MarqueeStripProps) {
  // Theme-aware strip surface (flips with [data-theme="dark"])
  const surface = "bg-marquee-strip border-y border-[var(--border)] text-[var(--ivory)]";

  // Dot color varies subtly per theme
  const dotColor =
    theme === "navy"
      ? "bg-[var(--navy)]"
      : theme === "ivory"
        ? "bg-[var(--wisteria-deep)]"
        : "bg-[var(--sky)]";

  const nodes = items.map((item, index) => (
    <span
      key={`${item}-${index}`}
      className={cn(
        "flex items-center gap-10 font-display text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl",
        italic && "italic",
      )}
    >
      {item}
      <span className={cn("h-2 w-2 rounded-full", dotColor)} />
    </span>
  ));

  return (
    <div className={cn("py-9 sm:py-12", surface, className)}>
      <Marquee items={nodes} itemClassName="!px-6" />
    </div>
  );
}
