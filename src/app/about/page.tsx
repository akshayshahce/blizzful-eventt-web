import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, featuredExperiences, galleryItems, stats } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A refined event studio shaped by weddings, hospitality, and large-format experiences."
        description="The attached company profiles position Blizzful Pink Eventt as both a wedding planner and a broader event management partner. This version frames that dual identity more like a creative event house than a standard service company."
      />
      <section className="bg-[linear-gradient(180deg,#090807,#15110e)] py-24 text-white sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Identity"
            title="Emotion-led for private celebrations. Process-led for professional events."
            description={company.description}
            theme="dark"
          />
          <Reveal className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_28px_100px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <p className="text-lg leading-9 text-white/86">
              The wedding deck highlights romance, celebration rituals, decor, entries, and family-facing services. The corporate deck adds conferences, summits, exhibitions, institutional events, LED and AV infrastructure, hospitality, premium vendor empanelment, and structured delivery.
            </p>
            <p className="mt-6 text-base leading-8 text-white/62">
              The resulting brand position is stronger than either PDF on its own: a luxury event partner able to design emotionally resonant moments while still operating with commercial-grade execution standards.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8f1e9,#f1e6d8)] py-24 sm:py-28">
        <Container className="grid gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="rounded-[2rem] border border-white/70 bg-[rgba(255,252,247,0.76)] p-7 backdrop-blur-xl">
              <p className="font-display text-6xl">{stat.value}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-soft-strong)]">{stat.label}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{stat.detail}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#100d0b,#080706)] py-24 text-white sm:py-28">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="Event Spectrum"
            title="A broader event range than a typical wedding-only planner."
            description="The company materials explicitly mention social functions, corporate and professional gatherings, government and institutional events, exhibitions, trade shows, concerts, and festivals."
            theme="dark"
          />
          <div className="space-y-8">
            {featuredExperiences.map((experience, index) => (
              <Reveal key={experience.title} delay={index * 0.08}>
                <article className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-display text-5xl leading-[0.92] sm:text-6xl">{experience.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-white/62">{experience.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative min-h-[20rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/6">
                      <Image
                        src={galleryItems[index === 0 ? 0 : index === 1 ? 4 : 5].src}
                        alt={experience.title}
                        fill
                        className="scale-110 object-cover opacity-32 blur-[6px] saturate-0"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.08),rgba(8,8,8,0.76))]" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
