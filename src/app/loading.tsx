export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-[linear-gradient(180deg,#120f0d,#090807)] text-white">
      <div className="space-y-5 text-center">
        <p className="text-[11px] uppercase tracking-[0.44em] text-[var(--accent-soft)]">
          Blizzful Pink Eventt
        </p>
        <div className="mx-auto h-px w-28 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-pulse bg-[linear-gradient(90deg,transparent,var(--accent-soft),transparent)]" />
        </div>
      </div>
    </div>
  );
}
