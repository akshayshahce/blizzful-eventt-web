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
  const navy = theme === "navy";

  const surface =
    theme === "navy"
      ? "bg-[var(--navy)] text-[var(--ivory)] border-y border-[var(--navy-deep)]"
      : theme === "ivory"
        ? "bg-[var(--ivory)] text-[var(--navy)] border-y border-[var(--navy)]/15"
        : "bg-[var(--sky-soft)] text-[var(--navy)] border-y border-[var(--navy)]/12";

  const nodes = items.map((item, index) => (
    <span
      key={`${item}-${index}`}
      className={cn(
        "flex items-center gap-10 font-display text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl",
        italic && "italic",
      )}
    >
      {item}
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          navy ? "bg-[var(--sky)]" : "bg-[var(--wisteria-deep)]",
        )}
      />
    </span>
  ));

  return (
    <div className={cn("py-9 sm:py-12", surface, className)}>
      <Marquee items={nodes} itemClassName="!px-6" />
    </div>
  );
}
