import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasonsToChooseUs } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Why Choose Us",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Premium aesthetics backed by dependable execution."
        description="The source documents repeatedly point to quality, timing, customization, client satisfaction, support teams, and partner strength. This page reframes those messages with more authority and visual polish."
      />
      <section className="bg-[linear-gradient(180deg,#090807,#14100d)] py-24 text-white sm:py-28">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Decision Drivers"
            title="Reasons designed for real client decision-making."
            description="Instead of generic sales copy, the website uses the strongest proof points available in the PDFs: service range, event volume, brand exposure, operational reliability, and partner depth."
            theme="dark"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {reasonsToChooseUs.map((reason, index) => (
              <Reveal key={reason} delay={index * 0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-display text-4xl text-white">Why it matters</p>
                <p className="mt-4 text-base leading-8 text-white/62">{reason}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
