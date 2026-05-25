import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesList } from "@/components/sections/services-list";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Wisteria } from "@/components/ui/wisteria";
import { corporateServices, otherServices, weddingServices } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A full event studio, planned end to end."
        italicWord="planned"
        description="Planning, design, hospitality, floral language, technical production, and guest experience — delivered as a single editorial system rather than a list of line items."
        image="/images/events/services-hero-conference.png"
        meta="Six core disciplines + curated extras"
      />
      <ServicesList />
      <MarqueeStrip
        items={["Decor", "Floral", "Lighting", "Production", "Hospitality", "Catering", "AV"]}
        theme="navy"
      />
      <ServiceGrid
        eyebrow="Wedding Services"
        title={
          <>
            Wedding planning —
            <br />
            <span className="italic">styling, rituals, hospitality</span>.
          </>
        }
        description="Built from the wedding profile: attire and make-up, decor and floral, photography and videography, venue and stage, catering, entertainment, and family-side coordination."
        services={weddingServices}
      />
      <ServiceGrid
        eyebrow="Corporate Services"
        title={
          <>
            Corporate production —
            <br />
            <span className="italic text-[var(--wisteria-deep)]">stage, AV, brand presence</span>.
          </>
        }
        description="Conferences, summits, AGMs, exhibitions, and trade shows engineered with technical discipline, premium hospitality, and stakeholder-facing presentation."
        services={corporateServices}
        theme="dark"
      />

      <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Wisteria className="absolute -left-10 -top-6 h-72 w-52" opacity={0.2} />
        <Wisteria variant="right" className="absolute -right-10 -top-6 h-72 w-52" opacity={0.2} />
        <Container>
          <SectionHeading
            eyebrow="Other Services"
            title={
              <>
                The small details that{" "}
                <span className="font-script italic text-[var(--wisteria-deep)] glow-purple">complete</span>{" "}
                the picture.
              </>
            }
            description="From invitation card designing and ring plate decor to baraat car styling, gifting, and house door decor — we provide services for every event."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.04}
                className="group rounded-[1.5rem] border border-[var(--ivory)]/8 bg-[rgba(255,255,255,0.03)] p-7 transition-all duration-500 hover:border-[var(--wisteria-deep)]/40 hover:bg-[rgba(168,85,247,0.06)] hover:-translate-y-1"
              >
                <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)] glow-purple">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 font-display text-2xl leading-tight text-[var(--ivory)] glow-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-[1.8] text-[var(--ivory)]/55">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 rounded-full border border-[var(--wisteria-deep)]/25 bg-[rgba(168,85,247,0.08)] px-6 py-3 text-center text-[0.7rem] uppercase tracking-[0.34em] text-[var(--ivory)]/70">
            We provide services for all events — weddings, corporate, exhibitions, and beyond.
          </p>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
