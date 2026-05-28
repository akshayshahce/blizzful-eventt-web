import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { EventCardMarquee } from "@/components/sections/event-card-marquee";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Wisteria } from "@/components/ui/wisteria";
import { company, featuredExperiences, stats } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
};

const heroImage = "/images/events/about-hero-wedding.png";

const experienceImages = [
  "/images/events/about-wedding-weekends-attached.png",
  "/images/events/about-corporate-productions.jpg",
  "/images/events/exhibitions-public-events.png",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Crafting timeless weddings and trusted corporate productions."
        italicWord="timeless"
        description={company.description}
        image={heroImage}
        meta="Est. 2014 — Mumbai"
      />

      <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Wisteria className="absolute -right-12 -top-10 h-72 w-52" opacity={0.32} />
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Identity"
                title={
                  <>
                    <span className="glow-white">Emotion-led</span> for celebrations.
                    <br />
                    <span className="italic glow-blue">Process-led</span> for productions.
                  </>
                }
                description="The studio carries dual fluency — equally at home shaping family rituals and orchestrating boardroom-scale events. The result is a partner who can switch registers without losing taste."
              />
            </div>
            <Reveal className="lg:col-span-5" delay={0.15}>
              <div className="space-y-6 rounded-[1.8rem] border border-[var(--ivory)]/8 bg-[rgba(255,255,255,0.03)] p-9">
                <p className="text-[1rem] leading-[1.9] text-[var(--ivory)]/80">
                  Wedding work draws from rituals, fashion, floral language,
                  and emotional staging. Corporate work draws from technical
                  programming, vendor empanelment, and brand hospitality. The
                  shared layer is taste — every detail composed.
                </p>
                <p className="text-[0.95rem] leading-[1.85] text-[var(--ivory)]/60">
                  We collaborate with discerning families, leading institutions,
                  and brands who treat their events as part of their identity.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <EventCardMarquee />


      <section className="relative overflow-hidden bg-[var(--sky-soft)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="By the numbers"
            title={
              <>
                Trusted across{" "}
                <span className="font-script italic text-[var(--wisteria-deep)] glow-purple">150+ brands</span>{" "}
                and counting.
              </>
            }
            description="A decade of celebrations and corporate productions — quietly shaping one of Mumbai's most trusted event execution rosters."
          />
          <div className="mt-16 grid gap-px border border-[var(--ivory)]/8 bg-[var(--ivory)]/4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.06}
                className="relative bg-[rgba(255,255,255,0.03)] p-9 sm:p-11"
              >
                <p className="text-[0.58rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)] glow-purple">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-7 font-display text-5xl tracking-tight text-[var(--ivory)] glow-white sm:text-6xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.36em] text-[var(--forest-soft)]">
                  {stat.label}
                </p>
                <p className="mt-4 text-sm leading-[1.8] text-[var(--ivory)]/75">
                  {stat.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="Event Spectrum"
            title={
              <>
                Three event{" "}
                <span className="italic text-[var(--wisteria-deep)] glow-purple">disciplines</span>,
                <br /> composed under one studio.
              </>
            }
            description="From intimate ceremonies to public productions, the studio's range allows it to work across emotional, professional, and large-format formats with the same level of polish."
          />
          <div className="mt-20 space-y-20 lg:space-y-24">
            {featuredExperiences.map((experience, index) => {
              const reverse = index % 2 === 1;
              return (
                <Reveal
                  key={experience.title}
                  className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14"
                  delay={index * 0.04}
                >
                  <div
                    className={
                      reverse
                        ? "lg:order-2 lg:col-span-5 lg:col-start-8"
                        : "lg:col-span-5"
                    }
                  >
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)] glow-purple">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 font-display text-4xl leading-[1.04] tracking-tight text-[var(--ivory)] glow-white sm:text-5xl">
                      {experience.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[1rem] leading-[1.9] text-[var(--ivory)]/65">
                      {experience.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {experience.points.map((point) => (
                        <span
                          key={point}
                          className="glow-chip cursor-default rounded-full border border-[var(--ivory)]/18 px-4 py-2 text-[0.6rem] uppercase tracking-[0.34em] text-[var(--ivory)]/60"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={reverse ? "lg:order-1 lg:col-span-7" : "lg:col-span-7"}>
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-[var(--ivory)]/8">
                      <Image
                        src={experienceImages[index] ?? experienceImages[0]}
                        alt={experience.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,11,20,0.6))]" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
