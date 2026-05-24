import { LogoMark } from "@/components/ui/logo";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--background)] text-[var(--ivory)]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16">
          <LogoMark />
        </div>
        <p className="font-script text-3xl text-[var(--ivory)] glow-white">Blizzful Pink Eventt</p>
        <div className="relative h-px w-40 overflow-hidden bg-[var(--ivory)]/10">
          <div className="absolute inset-y-0 left-0 w-1/3 animate-[shimmer_2s_ease_infinite] bg-[linear-gradient(90deg,transparent,var(--wisteria-deep),transparent)]" />
        </div>
        <p className="text-[0.58rem] uppercase tracking-[0.42em] text-[var(--ivory)]/40">
          Composing the experience
        </p>
      </div>
    </div>
  );
}
