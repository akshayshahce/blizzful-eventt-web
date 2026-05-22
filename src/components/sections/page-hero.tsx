import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-[linear-gradient(180deg,#090807,#15110e)] py-32 text-white sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(226,210,181,0.10),transparent_22%),radial-gradient(circle_at_84%_22%,rgba(127,76,46,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_36%)]" />
      <Container className="relative">
        <div className="max-w-5xl space-y-7">
          <p className="text-[11px] uppercase tracking-[0.44em] text-[var(--accent-soft)]">{eyebrow}</p>
          <h1 className="font-display text-6xl leading-[0.9] sm:text-7xl lg:text-[5.8rem]">{title}</h1>
          <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
