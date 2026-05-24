import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { Wisteria } from "@/components/ui/wisteria";
import { reasonsToChooseUs } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Why Choose Us",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Premium aesthetics, dependable execution."
        italicWord="dependable"
        description="Creating timeless memories for your happily ever after — the studio is built around six commitments that define every project, regardless of scale."
        image="/images/events/wedding-shaadi.jpg"
        meta="Six commitments"
      />

      <section className="relative overflow-hidden bg-[var(--ivory)] py-24 text-[var(--ink)] sm:py-32 lg:py-36">
        <Wisteria className="absolute -right-12 -top-10 h-80 w-60" opacity={0.3} />
        <Container>
          <SectionHeading
            eyebrow="Decision Drivers"
            title={
              <>
                Designed for real{" "}
                <span className="font-script italic text-[var(--wisteria-deep)]">client decisions</span>.
              </>
            }
            description="Each principle is rooted in evidence from our portfolio — recurring strengths that clients consistently point to as reasons to return."
          />

          <div className="mt-16 grid gap-px border border-[var(--navy)]/12 bg-[var(--navy)]/12 sm:grid-cols-2 lg:grid-cols-3">
            {reasonsToChooseUs.map((reason, index) => (
              <Reveal
                key={reason.title}
                delay={index * 0.05}
                className="group bg-[var(--ivory)] p-9 transition-colors duration-500 hover:bg-[var(--sky-soft)] sm:p-11"
              >
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)]">
                  {String.fromCharCode(65 + index)}
                </p>
                <p className="mt-8 font-display text-3xl leading-[1.04] text-[var(--navy)] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                  {reason.title}
                </p>
                <p className="mt-5 text-[0.95rem] leading-[1.85] text-[var(--ink)]/72">
                  {reason.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
