import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredExperiences, weddingServices } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Wedding Events",
};

export default function WeddingEventsPage() {
  const weddingExperience = featuredExperiences[0];

  return (
    <>
      <PageHero
        eyebrow="Wedding Events"
        title="Ritual-led celebrations with a cinematic, luxury finish."
        description="From Roka and Engagement to Mehendi, Haldi, Sangeet, and Shaadi, the wedding profile deck provides the foundation. This page now reads more like a premium wedding portfolio than a standard services page."
      />
      <section className="bg-[linear-gradient(180deg,#090807,#14100d)] py-24 text-white sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Wedding Journey"
            title={weddingExperience.title}
            description={weddingExperience.description}
            theme="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {weddingExperience.points.map((point, index) => (
              <Reveal key={point} delay={index * 0.06} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-soft)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-3xl text-white">{point}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ServiceGrid
        eyebrow="Wedding Services"
        title="Planning, styling, entries, hospitality, and memory-making details."
        description="Built from the attached wedding profile content: attire support, makeup, catering, photography, videography, venue coordination, decor, entertainment, photobooths, invitation design, gifting, and family-facing styling details."
        services={weddingServices}
      />
    </>
  );
}
