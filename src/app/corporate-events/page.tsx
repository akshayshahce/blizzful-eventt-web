import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredExperiences, corporateServices } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Corporate Events",
};

export default function CorporateEventsPage() {
  const corporateExperience = featuredExperiences[1];

  return (
    <>
      <PageHero
        eyebrow="Corporate Events"
        title="Business events with premium staging and operational rigor."
        description="The corporate profile shows conferences, summits, boardroom meetings, AGMs, conclaves, employee engagement, exhibitions, premium hotel partnerships, LED walls, audiovisual support, manpower, floral services, and hospitality."
      />
      <section className="bg-[linear-gradient(180deg,#0b0908,#14100d)] py-24 text-white sm:py-28">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Professional Formats"
            title="Built for stakeholder confidence and brand presence."
            description={corporateExperience.description}
            theme="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {corporateExperience.points.map((point, index) => (
              <Reveal key={point} delay={index * 0.05} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <p className="font-display text-3xl text-white">{point}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ServiceGrid
        eyebrow="Corporate Services"
        title="Execution systems for conferences, exhibitions, and institutional events."
        description="The architecture is designed to scale into future case studies and proposal-led pages for specific event formats without changing the underlying components."
        services={corporateServices}
      />
    </>
  );
}
