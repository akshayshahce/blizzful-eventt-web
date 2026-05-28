import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesList } from "@/components/sections/services-list";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { EventCardMarquee } from "@/components/sections/event-card-marquee";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Wisteria } from "@/components/ui/wisteria";
import { corporateServices, otherServices, weddingServices } from "@/data/site-data";
import {
  FiBookOpen,
  FiCircle,
  FiGift,
  FiHeart,
  FiMail,
  FiPackage,
  FiSliders,
  FiTruck,
} from "react-icons/fi";
import type { IconType } from "react-icons";

function iconForOtherService(title: string): IconType {
  const t = title.toLowerCase();
  if (t.includes("invitation")) return FiMail;
  if (t.includes("baraat") || t.includes("entry") || t.includes("car")) return FiTruck;
  if (t.includes("ring")) return FiCircle;
  if (t.includes("gift")) return FiGift;
  if (t.includes("door") || t.includes("house")) return FiHeart;
  if (t.includes("album") || t.includes("book")) return FiBookOpen;
  if (t.includes("design") || t.includes("selection")) return FiSliders;
  return FiPackage;
}

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
        image="/images/events/engagement.jpg"
        meta="Six core disciplines + curated extras"
      />
      <ServicesList />
      <EventCardMarquee />
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
          <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {otherServices.map((service, index) => {
              const Icon = iconForOtherService(service.title);
              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.04}
                  className={[
                    "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-[#0a4d5c]/15 bg-white p-7",
                    "shadow-[0_10px_30px_-12px_rgba(26,40,66,0.18)]",
                    "transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_22px_55px_-14px_rgba(255,77,109,0.55)]",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ff8c42_0%,#ff4d6d_100%)] opacity-0 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0a4d5c]/10 bg-[#fff5ef] text-[#ff6b35] transition-[background-color,border-color,color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.4em] text-[#ff6b35] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/85">
                    Extra {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2.5 font-display text-2xl leading-tight text-[#0a4d5c] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white sm:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.8] text-[#0a4d5c]/70 transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/90">
                    {service.description}
                  </p>
                </Reveal>
              );
            })}
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
