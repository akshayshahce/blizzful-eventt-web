import type { Metadata } from "next";
import {
  FiAward,
  FiClock,
  FiSliders,
  FiHeart,
  FiUsers,
  FiLayers,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { Wisteria } from "@/components/ui/wisteria";
import { reasonsToChooseUs } from "@/data/site-data";

// One icon per reason — matches the index of `reasonsToChooseUs`.
const reasonIcons: IconType[] = [
  FiAward,    // Premium Quality
  FiClock,    // On-time Execution
  FiSliders,  // Fully Customisable
  FiHeart,    // Client Satisfaction
  FiUsers,    // Expert Team
  FiLayers,   // Full Spectrum
];

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
        image="/images/events/engagement.jpg"
        meta="Six commitments"
      />

      <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
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

          <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {reasonsToChooseUs.map((reason, index) => {
              const Icon = reasonIcons[index] ?? FiAward;
              return (
                <Reveal key={reason.title} delay={index * 0.05}>
                  <article
                    className={[
                      // Base card: white surface, subtle border, rounded
                      "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-[#0a4d5c]/15 bg-white p-8 sm:p-10",
                      // Resting shadow + smooth lift + shadow transition
                      "shadow-[0_10px_30px_-12px_rgba(26,40,66,0.18)]",
                      "transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      // Lift + coral-tinted shadow on hover
                      "hover:-translate-y-1.5",
                      "hover:border-transparent",
                      "hover:shadow-[0_22px_55px_-14px_rgba(255,77,109,0.55)]",
                    ].join(" ")}
                  >
                    {/*
                      Coral gradient OVERLAY — sits behind the content.
                      CSS can't tween `background-image: linear-gradient(...)`,
                      so we fade an absolutely-positioned overlay's opacity
                      from 0 → 1 on hover for a real smooth transition.
                    */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ff8c42_0%,#ff4d6d_100%)] opacity-0 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                    />

                    {/* Icon chip */}
                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        "border border-[#0a4d5c]/10 bg-[#fff5ef] text-[#ff6b35]",
                        "transition-[background-color,border-color,color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white",
                      ].join(" ")}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <p className="mt-6 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#ff6b35] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/85">
                      Reason {String.fromCharCode(65 + index)}
                    </p>

                    <h3 className="mt-3 font-display text-3xl leading-[1.06] tracking-tight text-[#0a4d5c] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white sm:text-[2.2rem]">
                      {reason.title}
                    </h3>

                    <p className="mt-4 text-[0.95rem] leading-[1.8] text-[#0a4d5c]/70 transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/90">
                      {reason.description}
                    </p>
                  </article>
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
