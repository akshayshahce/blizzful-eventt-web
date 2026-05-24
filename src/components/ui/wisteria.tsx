import { cn } from "@/lib/utils";

const CLUSTERS = [
  { x: 35, y: 70 },
  { x: 75, y: 130 },
  { x: 115, y: 60 },
  { x: 150, y: 150 },
  { x: 190, y: 80 },
  { x: 210, y: 180 },
  { x: 60, y: 220 },
  { x: 130, y: 260 },
  { x: 175, y: 240 },
] as const;

const PETALS = Array.from({ length: 14 }).map((_, j) => ({
  cx: Math.round(Math.sin(j * 0.9) * 300) / 100,
  cy: j * 7,
  r: Math.max(Math.round((6 - j * 0.25) * 100) / 100, 2),
}));

type WisteriaProps = {
  className?: string;
  variant?: "left" | "right";
  opacity?: number;
};

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
        <radialGradient id="leafGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#5a8463" />
          <stop offset="100%" stopColor="#2e5d3c" />
        </radialGradient>
        <radialGradient id="petalLight" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#d6c6ec" />
          <stop offset="100%" stopColor="#a48bcb" />
        </radialGradient>
        <radialGradient id="petalDeep" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#b3a2d2" />
          <stop offset="100%" stopColor="#6c58a0" />
        </radialGradient>
      </defs>

      {/* Vine */}
      <path d="M30 0 Q60 40 50 90 Q40 140 70 190 Q90 230 80 280" stroke="#6a8a52" strokeWidth="2" fill="none" />
      <path d="M110 0 Q90 60 120 110 Q150 160 130 220 Q120 260 140 310" stroke="#6a8a52" strokeWidth="2" fill="none" />
      <path d="M180 0 Q160 50 200 100 Q220 150 190 210" stroke="#6a8a52" strokeWidth="2" fill="none" />

      {/* Leaves */}
      <g fill="url(#leafGrad)">
        <ellipse cx="48" cy="50" rx="14" ry="7" transform="rotate(-30 48 50)" />
        <ellipse cx="65" cy="88" rx="16" ry="8" transform="rotate(20 65 88)" />
        <ellipse cx="90" cy="40" rx="14" ry="7" transform="rotate(10 90 40)" />
        <ellipse cx="138" cy="80" rx="16" ry="8" transform="rotate(-15 138 80)" />
        <ellipse cx="172" cy="58" rx="14" ry="7" transform="rotate(-40 172 58)" />
        <ellipse cx="210" cy="110" rx="16" ry="8" transform="rotate(25 210 110)" />
        <ellipse cx="100" cy="180" rx="14" ry="7" transform="rotate(-10 100 180)" />
      </g>

      {/* Wisteria clusters - chains of tiny petals (pre-computed for SSR stability) */}
      {CLUSTERS.map((cluster, i) => (
        <g key={i} transform={`translate(${cluster.x} ${cluster.y})`}>
          {PETALS.map((p, j) => (
            <circle
              key={j}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={j % 2 === 0 ? "url(#petalLight)" : "url(#petalDeep)"}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
