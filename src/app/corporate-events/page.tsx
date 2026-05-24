import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Wisteria } from "@/components/ui/wisteria";
import { corporateServices, featuredExperiences } from "@/data/site-data";

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
        image="/images/events/corporate-stage.jpg"
        meta="Trusted by BSE, NSE & 150+ brands"
      />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0620_0%,#0a1230_40%,#14082a_100%)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--navy)]/[0.15] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[var(--wisteria-deep)]/[0.10] blur-[100px]" />
        <Wisteria className="absolute -left-10 -top-10 h-80 w-60" opacity={0.12} />
        <Container>
          <SectionHeading
            eyebrow="Professional Formats"
            title={
              <>
                Built for stakeholder{" "}
                <span className="italic text-[var(--wisteria-deep)] glow-purple">confidence</span> and brand presence.
              </>
            }
            description={corporateExperience.description}
            theme="dark"
          />
          <div className="mt-16 grid gap-px border border-[var(--ivory)]/8 bg-[var(--ivory)]/4 sm:grid-cols-2 lg:grid-cols-3">
            {corporateExperience.points.map((point, index) => (
              <Reveal
                key={point}
                delay={index * 0.05}
                className="bg-[rgba(255,255,255,0.03)] p-9 transition-colors duration-500 hover:bg-[rgba(168,85,247,0.07)] sm:p-11"
              >
                <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)] glow-purple">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-8 font-display text-3xl leading-tight text-[var(--ivory)] glow-white sm:text-4xl">
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

      <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="Partners in Success"
            title={
              <>
                Trusted by{" "}
                <span className="font-script italic text-[var(--wisteria-deep)] glow-purple">India&apos;s most respected</span>{" "}
                institutions and brands.
              </>
            }
            description="Empanelled and partnered with leading institutions like BSE, NSE, Maharashtra Shasan, plus marquee corporate offices including Tata Motors, Kotak, and many more."
          />
          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--ivory)]/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-6 lg:p-8">
              <Image
                src="/images/partners/partner-board.png"
                alt="Partner logos from the Blizzful Pink Eventt company profile, including BSE, NSE, Tata Motors, Kotak Mahindra Bank, Morningstar, MentorMyBoard, GIA, Senco Gold & Diamonds, and other institutional and corporate partners."
                width={1360}
                height={880}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                className="h-auto w-full rounded-[1.5rem] object-contain"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
