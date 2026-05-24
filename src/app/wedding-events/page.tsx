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
import { featuredExperiences, weddingServices } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Wedding Events",
};

const functionGallery = [
  { src: "/images/events/roka.jpg", title: "Roka / God Dhana", caption: "An auspicious beginning, floral garlands, and Ganesh blessings." },
  { src: "/images/events/engagement.jpg", title: "Engagement", caption: "Personalised ring plate styling and floral hoops." },
  { src: "/images/events/mehendi-decor-1.jpg", title: "Mehendi", caption: "Marigold tents, jewel-tone drapes, and lounge seating." },
  { src: "/images/events/haldi-decor-1.jpg", title: "Haldi", caption: "Sun-lit haldi staging with floral hoops and golden accents." },
  { src: "/images/events/sangeet-decor-1.jpg", title: "Sangeet", caption: "High-energy stage with LED, chandeliers, and lighting design." },
  { src: "/images/events/wedding-stage-1.jpg", title: "Wedding / Shaadi", caption: "Ivory and blush mandap with cascading florals and candles." },
];

export default function WeddingEventsPage() {
  const weddingExperience = featuredExperiences[0];

  return (
    <>
      <PageHero
        eyebrow="Wedding Events"
        title="Ritual-led celebrations with a timeless finish."
        italicWord="timeless"
        description="From Roka and Engagement to Mehendi, Haldi, Sangeet, and Shaadi — each function is composed for emotion, photography, and family flow."
        image="/images/events/wedding-stage-1.jpg"
        meta="A complete wedding weekend"
      />

      <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ink)] sm:py-32 lg:py-36">
        <Wisteria className="absolute -right-10 -top-6 h-80 w-60" opacity={0.32} />
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Wedding Functions"
                title={
                  <>
                    Functions composed as an{" "}
                    <span className="font-script italic text-[var(--wisteria-deep)]">unbroken story</span>.
                  </>
                }
                description={weddingExperience.description}
              />
            </div>
            <div className="grid gap-3 lg:col-span-6 lg:grid-cols-2">
              {weddingExperience.points.map((point, index) => (
                <Reveal
                  key={point}
                  delay={index * 0.05}
                  className="group flex flex-col gap-5 rounded-[1.5rem] border border-[var(--navy)]/12 bg-[var(--sky-soft)] p-6 transition-colors duration-500 hover:bg-[var(--wisteria-soft)]/40"
                >
                  <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-display text-2xl leading-tight text-[var(--navy)] sm:text-3xl">
                    {point}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--sky-soft)] py-20 sm:py-28">
        <Container size="wide">
          <SectionHeading
            eyebrow="Wedding Gallery"
            title={
              <>
                A glimpse from{" "}
                <span className="font-script italic text-[var(--wisteria-deep)]">recent weddings</span>.
              </>
            }
            align="center"
            description="Curated stages and ceremonies built with our families and floral teams."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
            {functionGallery.map((item, index) => (
              <Reveal
                key={item.src}
                delay={index * 0.05}
                className="group overflow-hidden rounded-[1.4rem] ring-1 ring-[var(--navy)]/10"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,36,70,0.7))]" />
                  <div className="absolute bottom-4 left-4 right-4 text-[var(--ivory)]">
                    <p className="text-[0.55rem] uppercase tracking-[0.42em] text-[var(--sky)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[var(--ivory)]/86">{item.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MarqueeStrip
        items={["Roka", "Engagement", "Mehendi", "Haldi", "Sangeet", "Shaadi", "Reception"]}
        theme="ivory"
      />

      <ServiceGrid
        eyebrow="Wedding Services"
        title={
          <>
            Planning, styling, hospitality,
            <br />
            and <span className="italic">memory-making</span> details.
          </>
        }
        description="Attire and make-up, decor and florals, photography, tent/venue, catering, and entertainment — delivered as one calm system."
        services={weddingServices}
      />

      <ContactCta />
    </>
  );
}
