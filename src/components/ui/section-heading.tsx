import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.42em]",
          theme === "light" ? "text-[var(--accent-soft-strong)]" : "text-[var(--accent-soft)]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-5xl leading-[0.92] sm:text-6xl lg:text-[4.6rem]",
          theme === "light" ? "text-[var(--foreground)]" : "text-white",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "max-w-2xl text-base leading-8 sm:text-lg",
          theme === "light" ? "text-[var(--muted-foreground)]" : "text-white/64",
        )}
      >
        {description}
      </p>
    </div>
  );
}
