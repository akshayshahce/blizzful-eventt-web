import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Wisteria } from "@/components/ui/wisteria";
import { corporateServices, featuredExperiences, partners } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Corporate Events",
};

export default function CorporateEventsPage() {
  const corporateExperience = featuredExperiences[1];

  return (
    <>
      <PageHero
        eyebrow="Corporate Events"
        title="Business productions with premium staging and operational rigor."
        italicWord="premium"
        description="Conferences, summits, AGMs, conclaves, exhibitions, and brand experiences — engineered with technical precision and brand-grade hospitality."
        image="/images/events/sangeet-decor-1.jpg"
        meta="Trusted by BSE, NSE & 150+ brands"
      />

      <section className="relative overflow-hidden bg-[var(--navy)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Wisteria className="absolute -left-10 -top-10 h-80 w-60" opacity={0.16} />
        <Container>
          <SectionHeading
            eyebrow="Professional Formats"
            title={
              <>
                Built for stakeholder{" "}
                <span className="italic text-[var(--sky)]">confidence</span> and brand presence.
              </>
            }
            description={corporateExperience.description}
            theme="dark"
          />
          <div className="mt-16 grid gap-px border border-[var(--ivory)]/12 bg-[var(--ivory)]/8 sm:grid-cols-2 lg:grid-cols-3">
            {corporateExperience.points.map((point, index) => (
              <Reveal
                key={point}
                delay={index * 0.05}
                className="bg-[var(--navy)] p-9 sm:p-11"
              >
                <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--sky)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-8 font-display text-3xl leading-tight text-[var(--ivory)] sm:text-4xl">
                  {point}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MarqueeStrip
        items={["Stage", "LED", "AV", "Hospitality", "Manpower", "Catering", "Production"]}
        theme="ivory"
      />

      <ServiceGrid
        eyebrow="Corporate Services"
        title={
          <>
            Execution systems for
            <br />
            <span className="italic">conferences and institutions</span>.
          </>
        }
        description="From stage architecture and LED walls to vendor empanelment, manpower planning, and brand-side hospitality across India's leading venues."
        services={corporateServices}
      />

      <section className="relative overflow-hidden bg-[var(--sky-soft)] py-24 text-[var(--navy)] sm:py-32 lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="Partners in Success"
            title={
              <>
                Trusted by{" "}
                <span className="font-script italic text-[var(--wisteria-deep)]">India&apos;s most respected</span>{" "}
                institutions and brands.
              </>
            }
            description="Empanelled and partnered with leading institutions like BSE, NSE, Maharashtra Shasan, plus marquee corporate offices including Tata Motors, Kotak, and many more."
          />
          <div className="mt-14 flex flex-wrap gap-3">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-[var(--navy)]/15 bg-[var(--ivory)] px-5 py-2.5 text-[0.74rem] font-medium text-[var(--navy)]/85"
              >
                {partner}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
