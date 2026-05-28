import { cn } from "@/lib/utils";

// Pre-computed scatter of sparkles within the 240x320 viewBox. Hand-tuned so
// the cluster reads as a soft constellation without obvious grid spacing,
// and stable across renders so SSR + hydration match.
type Sparkle = {
  x: number;
  y: number;
  /** Outer radius of the 4-point star, in viewBox units. */
  size: number;
  /** Soft halo radius behind the star. */
  glow: number;
  /** Halo gradient id — drives the tint (purple / gold / ivory). */
  gradient: "sparkleGlowPurple" | "sparkleGlowGold" | "sparkleGlowIvory";
  /** Star opacity (the halo handles its own falloff). */
  opacity: number;
};

const SPARKLES: Sparkle[] = [
  { x: 30,  y: 40,  size: 13, glow: 22, gradient: "sparkleGlowPurple", opacity: 1 },
  { x: 80,  y: 22,  size: 7,  glow: 11, gradient: "sparkleGlowIvory",  opacity: 0.9 },
  { x: 140, y: 58,  size: 17, glow: 28, gradient: "sparkleGlowPurple", opacity: 1 },
  { x: 200, y: 34,  size: 9,  glow: 14, gradient: "sparkleGlowGold",   opacity: 0.9 },
  { x: 48,  y: 108, size: 6,  glow: 9,  gradient: "sparkleGlowIvory",  opacity: 0.75 },
  { x: 102, y: 128, size: 15, glow: 24, gradient: "sparkleGlowPurple", opacity: 1 },
  { x: 178, y: 98,  size: 11, glow: 17, gradient: "sparkleGlowGold",   opacity: 0.95 },
  { x: 62,  y: 178, size: 9,  glow: 14, gradient: "sparkleGlowIvory",  opacity: 0.85 },
  { x: 132, y: 198, size: 19, glow: 30, gradient: "sparkleGlowPurple", opacity: 1 },
  { x: 196, y: 178, size: 7,  glow: 11, gradient: "sparkleGlowGold",   opacity: 0.75 },
  { x: 26,  y: 238, size: 11, glow: 18, gradient: "sparkleGlowPurple", opacity: 0.95 },
  { x: 96,  y: 268, size: 8,  glow: 12, gradient: "sparkleGlowIvory",  opacity: 0.85 },
  { x: 156, y: 278, size: 13, glow: 20, gradient: "sparkleGlowGold",   opacity: 0.9 },
  { x: 212, y: 248, size: 10, glow: 16, gradient: "sparkleGlowPurple", opacity: 0.95 },
  { x: 78,  y: 80,  size: 5,  glow: 7,  gradient: "sparkleGlowIvory",  opacity: 0.65 },
  { x: 116, y: 32,  size: 5,  glow: 7,  gradient: "sparkleGlowGold",   opacity: 0.65 },
  { x: 166, y: 158, size: 6,  glow: 9,  gradient: "sparkleGlowIvory",  opacity: 0.7 },
  { x: 222, y: 130, size: 6,  glow: 9,  gradient: "sparkleGlowIvory",  opacity: 0.6 },
  { x: 14,  y: 160, size: 5,  glow: 7,  gradient: "sparkleGlowGold",   opacity: 0.6 },
];

// 4-pointed star ("sparkle") path centred at the origin. Inner indent at
// 18% of outer radius keeps the spikes sharp without going needle-thin.
function sparklePath(s: number): string {
  const i = +(s * 0.18).toFixed(2);
  return `M0 ${-s} L${i} ${-i} L${s} 0 L${i} ${i} L0 ${s} L${-i} ${i} L${-s} 0 L${-i} ${-i} Z`;
}

type WisteriaProps = {
  className?: string;
  variant?: "left" | "right";
  opacity?: number;
};

/**
 * Decorative corner ornament — a soft constellation of sparkles. Drops into
 * the same slot the older wisteria-vine artwork lived in (kept the
 * component/prop names so call sites don't have to change).
 */
export function Wisteria({ className, variant = "left", opacity = 0.32 }: WisteriaProps) {
  const flipClass = variant === "right" ? "-scale-x-100" : "";

  return (
    <svg
      viewBox="0 0 240 320"
      className={cn(
        "pointer-events-none hidden select-none md:block",
        flipClass,
        className,
      )}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="sparkleGlowPurple" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor="#e0d4f7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sparkleGlowGold" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor="#fde68a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sparkleGlowIvory" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#e4ecff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {SPARKLES.map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y})`}>
          <circle r={s.glow} fill={`url(#${s.gradient})`} />
          <path d={sparklePath(s.size)} fill="#ffffff" opacity={s.opacity} />
        </g>
      ))}
    </svg>
  );
}
