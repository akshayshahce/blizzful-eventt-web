import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HomeHero } from "@/components/sections/home-hero";
import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import {
  company,
  coreOfferings,
  featuredExperiences,
  galleryItems,
  reasonsToChooseUs,
  stats,
  testimonials,
} from "@/data/site-data";

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#090807,#14100d)] py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(221,205,182,0.08),transparent_18%),radial-gradient(circle_at_86%_24%,rgba(127,76,46,0.18),transparent_24%)]" />
        <Container className="relative space-y-16">
          <SectionHeading
            eyebrow="Selected Experiences"
            title="Large-format event storytelling, shaped more like a portfolio than a brochure."
            description="The new composition borrows from premium creative studios: fewer boxed sections, more cinematic rhythm, stronger image dominance, and a clearer sense of authored visual direction."
            theme="dark"
          />
          <div className="space-y-8">
            {[
              {
                label: "01",
                title: featuredExperiences[0].title,
                description: featuredExperiences[0].description,
                meta: "Roka, Mehendi, Haldi, Sangeet, Wedding",
                image: galleryItems[0].src,
              },
              {
                label: "02",
                title: featuredExperiences[1].title,
                description: featuredExperiences[1].description,
                meta: "Conferences, Summits, AGMs, Conclaves",
                image: galleryItems[4].src,
              },
              {
                label: "03",
                title: featuredExperiences[2].title,
                description: featuredExperiences[2].description,
                meta: "Exhibitions, Government Events, Festivals",
                image: galleryItems[5].src,
              },
            ].map((story, index) => (
              <Reveal key={story.title} delay={index * 0.06}>
                <article className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
                  <div className={cn("space-y-5", index % 2 === 1 && "lg:order-2")}>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                      {story.label}
                    </p>
                    <h2 className="max-w-xl font-display text-5xl leading-[0.92] sm:text-6xl lg:text-[4.8rem]">
                      {story.title}
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-white/64">{story.description}</p>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">{story.meta}</p>
                  </div>
                  <div
                    className={cn(
                      "group relative min-h-[24rem] overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5",
                      index % 2 === 1 && "lg:order-1",
                    )}
                  >
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="scale-110 object-cover opacity-36 blur-[6px] saturate-0 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.14]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.1),rgba(8,8,8,0.78))]" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8f1e9,#f2e7da)] py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Positioning"
            title="Two distinct event worlds, composed under one premium visual language."
            description="The company profile documents clearly show two strengths: celebration-driven wedding experiences and structured corporate execution. Instead of flattening those into a generic event-company site, the redesign treats them as complementary creative disciplines."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredExperiences.map((experience, index) => (
              <Reveal
                key={experience.title}
                delay={index * 0.08}
                className="rounded-[2.2rem] border border-white/70 bg-[rgba(255,252,247,0.76)] p-7 shadow-[0_26px_90px_rgba(34,25,16,0.06)] backdrop-blur-xl"
              >
                <h3 className="font-display text-4xl leading-none">{experience.title}</h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">{experience.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#0c0a09,#16110e)] py-24 text-white sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.44em] text-[var(--accent-soft)]">Services</p>
            <h2 className="font-display text-6xl leading-[0.92] sm:text-7xl">
              Design-led planning, technical execution, and guest experience in one studio.
            </h2>
            <p className="max-w-lg text-base leading-8 text-white/66">
              The decks reference planning, decor, floral styling, venue selection, LED and audiovisuals, photography, videography, manpower, catering, hospitality, and branded event infrastructure. This section gives those capabilities a more luxurious narrative rhythm.
            </p>
          </Reveal>
          <div className="space-y-5">
            {coreOfferings.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.05}
                className="group border-b border-white/10 py-6 transition hover:border-white/22"
              >
                <div className="grid gap-5 md:grid-cols-[7rem_1fr]">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-display text-5xl leading-none text-white transition group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-white/62">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#120f0d,#0a0807)] py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(224,208,181,0.08),transparent_22%),radial-gradient(circle_at_80%_38%,rgba(138,82,54,0.18),transparent_24%)]" />
        <Container className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-soft)]">Proof of Scale</p>
            <h2 className="font-display text-6xl leading-[0.92] sm:text-7xl">
              Event volume and partner trust, presented with more restraint.
            </h2>
            <p className="max-w-lg text-base leading-8 text-white/62">
              Rather than using dashboard-style metric cards, the numbers now sit inside a darker cinematic section with more breathing room and less visual noise.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.05}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md"
            >
              <p className="font-display text-6xl text-[var(--accent-soft)]">{stat.value}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/56">{stat.label}</p>
              <p className="mt-4 text-sm leading-7 text-white/62">{stat.detail}</p>
            </Reveal>
          ))}
          </div>
        </Container>
      </section>

      <GalleryShowcase preview />

      <section className="bg-[linear-gradient(180deg,#f7f1e9,#f2e8dc)] py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Creative warmth, premium aesthetics, and serious operational control."
            description="The source material repeatedly emphasizes precision, creativity, partner coordination, customisation, and hassle-free execution. This version gives those points a more elevated, decision-ready treatment."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {reasonsToChooseUs.map((reason, index) => (
              <Reveal
                key={reason}
                delay={index * 0.06}
                className="rounded-[2rem] border border-white/60 bg-[rgba(255,251,246,0.72)] p-7 shadow-[0_20px_70px_rgba(34,25,16,0.05)] backdrop-blur-xl"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft-strong)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-4xl leading-none text-[var(--foreground)]">
                  {index === 0 ? "Quality" : index === 1 ? "Reliability" : index === 2 ? "Customization" : index === 3 ? "Support" : index === 4 ? "Versatility" : "Trust"}
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">{reason}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#15110f,#0a0807)] py-24 text-white sm:py-28">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Placeholder testimonials staged more like editorial pull-quotes."
            description="Phase 1 still keeps these as placeholders, but the UI treatment now feels closer to a luxury portfolio than a standard business slider."
            align="center"
            theme="dark"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.author}
                delay={index * 0.08}
                className="rounded-[2.1rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md"
              >
                <p className="font-display text-4xl leading-none text-[var(--accent-strong)]">“</p>
                <p className="mt-4 text-base leading-8 text-white/82">{testimonial.quote}</p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/50">
                  {testimonial.author}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/8 bg-[linear-gradient(135deg,#171210,#090807)] py-24 text-white sm:py-28">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-soft)]">Contact</p>
            <h2 className="font-display text-6xl leading-[0.92] sm:text-7xl">Bring your wedding, conference, or celebration into focus.</h2>
            <p className="text-base leading-8 text-white/68">
              Call {company.phone[0]} or email {company.email} to begin with venue planning, gallery curation, or a tailored event proposal.
            </p>
          </div>
          <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-full border border-white/14 px-6 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/8">
            Start a Conversation <FiArrowRight />
          </Link>
        </Container>
      </section>
    </>
  );
}
