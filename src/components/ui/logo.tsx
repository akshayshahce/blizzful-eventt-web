import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  variant?: "navy" | "ivory";
};

export function LogoMark({ className, variant = "navy" }: LogoMarkProps) {
  const navy = variant === "navy";
  const bg = navy ? "#0d1a3d" : "#e4ecff";
  const triangle = navy ? "#1a4a28" : "#1f5a3a";
  const strokes = navy ? "#60a5fa" : "#4f72f5";
  const leaves = navy ? "#4ade80" : "#22c55e";

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect x="14" y="14" width="172" height="172" rx="10" fill={bg} />
      <path d="M22 22 L108 22 L108 108 Z" fill={triangle} />
      <g stroke={strokes} strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M68 56 Q116 56 116 92 Q116 114 80 114 Q116 114 116 142 Q116 178 60 178" />
        <path d="M68 56 L68 178" />
      </g>
      <g fill={leaves}>
        <ellipse cx="100" cy="100" rx="9" ry="22" transform="rotate(-32 100 100)" />
        <ellipse cx="100" cy="100" rx="9" ry="22" transform="rotate(32 100 100)" />
        <ellipse cx="100" cy="100" rx="6" ry="16" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  variant?: "navy" | "ivory";
  withText?: boolean;
};

export function Logo({ className, variant = "navy", withText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="block h-11 w-11 shrink-0 sm:h-12 sm:w-12">
        <LogoMark variant={variant} />
      </span>
      {withText ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-script text-[1.4rem] leading-[1] sm:text-[1.6rem]",
              variant === "navy" ? "text-[var(--ivory)]" : "text-[var(--ivory)]",
            )}
          >
            Blizzful Pink
          </span>
          <span
            className={cn(
              "mt-0.5 text-[0.62rem] uppercase tracking-[0.4em]",
              variant === "navy" ? "text-[var(--forest-soft)]" : "text-[var(--forest)]",
            )}
          >
            Eventt
          </span>
        </span>
      ) : null}
    </div>
  );
}
