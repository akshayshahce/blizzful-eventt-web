import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { PartnersCarousel } from "@/components/sections/partners-carousel";
import { Wisteria } from "@/components/ui/wisteria";
import { corporateServices, featuredExperiences } from "@/data/site-data";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiGrid,
  FiLayers,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// Lightweight title → icon mapping for the "Built for stakeholder confidence"
// point cards. Falls back to a sensible default so unfamiliar copy still has
// an icon chip.
function iconForPoint(point: string): IconType {
  const t = point.toLowerCase();
  if (t.includes("exhibition") || t.includes("expo")) return FiGrid;
  if (t.includes("summit") || t.includes("conclave")) return FiTrendingUp;
  if (t.includes("conference")) return FiUsers;
  if (t.includes("launch") || t.includes("product")) return FiZap;
  if (t.includes("calendar") || t.includes("agm")) return FiCalendar;
  if (t.includes("stage") || t.includes("led")) return FiLayers;
  if (t.includes("vendor") || t.includes("manpower")) return FiClipboard;
  if (t.includes("check") || t.includes("compliance")) return FiCheckCircle;
  return FiBriefcase;
}

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

      <section className="bg-section-gradient relative overflow-hidden py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
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
          <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {corporateExperience.points.map((point, index) => {
              const Icon = iconForPoint(point);
              return (
                <Reveal
                  key={point}
                  delay={index * 0.05}
                  className={[
                    "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-[#0a4d5c]/15 bg-white p-8 sm:p-10",
                    "shadow-[0_10px_30px_-12px_rgba(26,40,66,0.18)]",
                    "transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_22px_55px_-14px_rgba(255,77,109,0.55)]",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ff8c42_0%,#ff4d6d_100%)] opacity-0 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0a4d5c]/10 bg-[#fff5ef] text-[#ff6b35] transition-[background-color,border-color,color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#ff6b35] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/85">
                    Format {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-display text-3xl leading-[1.06] tracking-tight text-[#0a4d5c] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white sm:text-[2.2rem]">
                    {point}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

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
            <PartnersCarousel />
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
