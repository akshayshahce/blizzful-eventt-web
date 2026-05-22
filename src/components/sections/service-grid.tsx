import { Service } from "@/data/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type ServiceGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
};

export function ServiceGrid({ eyebrow, title, description, services }: ServiceGridProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#f8f2eb,#f1e6d9)] py-24 sm:py-28">
      <Container className="space-y-14">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              className="rounded-[2.2rem] border border-white/60 bg-[rgba(255,251,246,0.76)] p-8 shadow-[0_28px_90px_rgba(34,25,16,0.06)] backdrop-blur-xl"
            >
              <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[var(--accent-soft-strong)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-4xl leading-none text-[var(--foreground)]">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
