import type { Metadata } from "next";
import { WeddingHero } from "@/components/sections/wedding-hero";
import { WeddingChapter, type WeddingChapterData } from "@/components/sections/wedding-chapter";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Container } from "@/components/ui/container";
import { weddingServices } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Wedding Events",
};

const chapters: WeddingChapterData[] = [
  {
    index: 1,
    name: "Proposal",
    subtitle: "Where it all begins",
    description:
      "A private, hand-crafted setting where the question is asked — heart arches, candle paths, sparklers, and a backdrop calibrated to the couple. The first photograph of forever.",
    quote: "And in that one yes, a lifetime began.",
    image: "/images/weddings/proposal.jpg",
    alt: "Sunset beach proposal with a white heart-shaped floral arch, Will You Marry Me neon sign, and candles in the sand",
  },
  {
    index: 2,
    name: "God Dhana",
    subtitle: "An auspicious blessing",
    description:
      "The first ritual of the family — Ganesh blessings, floral garlands, sweets, and the gentle prayer that sets the tone for every function that follows.",
    quote: "Begin with grace, and every chapter follows.",
    image: "/images/weddings/god-dhana.jpg",
    alt: "Ganesh idol with white and pink rose floral garland for God Dhana ritual",
  },
  {
    index: 3,
    name: "Engagement",
    subtitle: "Rings, vows, and a quiet promise",
    description:
      "Designer ring plate styling, floral hoops, signature monograms, and an intimate ceremony staged to honour the families and the moment between two hearts.",
    quote: "Two rings, one promise — the rest is just love finding its rhythm.",
    image: "/images/weddings/engagement.jpg",
    alt: "Diamond engagement rings on white textile with baby's breath florals",
  },
  {
    index: 4,
    name: "Mehendi",
    subtitle: "Colour, laughter, and family",
    description:
      "Vibrant tents, marigold canopies, jewel-tone drapes, parasols and floor seating — the loudest, most joyful day of the celebration.",
    quote: "Every line of mehendi tells a story of the days ahead.",
    image: "/images/weddings/mehendi.jpg",
    alt: "Mehendi photobooth setup with yellow parasols, marigold strings, pink cushions and green drapes",
  },
  {
    index: 5,
    name: "Haldi",
    subtitle: "Sunlight and turmeric",
    description:
      "Open-air yellow tents, marigold canopies, brass urlis, and golden-hour lighting — a ritual designed to glow on every camera in the room.",
    quote: "A little turmeric, a lot of love — and a glow that lasts a lifetime.",
    image: "/images/weddings/haldi.jpg",
    alt: "Outdoor Haldi setup with yellow drapes, marigold pillars, and ceremonial thrones",
  },
  {
    index: 6,
    name: "Sangeet",
    subtitle: "The night to dance",
    description:
      "A glamorous stage built for performance — cascading florals, chandeliers, LED, and lighting design that holds every family act, every solo, every couple dance.",
    quote: "Music, family, and the dance floor between two families becoming one.",
    image: "/images/weddings/sangeet.jpg",
    alt: "Sangeet stage with pink and peach floral chandelier, gold sofa, and pastel drapery",
  },
  {
    index: 7,
    name: "Wedding",
    subtitle: "The moment of forever",
    description:
      "Palace-grade mandap architecture, candle paths, floral storytelling, and a ceremony composed for emotion, photography, and pheras that the family will replay forever.",
    quote: "And so, two became one — beneath fire, flowers and forever.",
    image: "/images/weddings/wedding.jpg",
    alt: "Royal palace wedding ceremony at night with bride and groom on circular rangoli surrounded by candles",
  },
  {
    index: 8,
    name: "Reception",
    subtitle: "An evening for everyone",
    description:
      "A grand stage built for the first dance, the speeches, the toast — cascading florals, chandeliers, monograms, and hospitality choreography for hundreds.",
    quote: "Tonight, the world we love meets the one we just promised.",
    image: "/images/weddings/reception.jpg",
    alt: "Reception stage with cream draping and cascading floral chandeliers",
  },
  {
    index: 9,
    name: "Ghar Parvesh",
    subtitle: "Welcome home",
    description:
      "The final, most tender chapter — the bride entering her new home, marigold and rose torans framing the door, a lamp lit, and a family welcoming her in.",
    quote: "And in that one step, a forever home became home.",
    image: "/images/weddings/ghar-parvesh.jpg",
    alt: "Wooden front door decorated with pink, white, and purple floral torans for Ghar Parvesh",
  },
];

export default function WeddingEventsPage() {
  return (
    <>
      <WeddingHero />

      {/* Index / chapter overview */}
      <section className="relative overflow-hidden border-y border-[var(--ivory)]/[0.06] bg-[var(--surface)] py-20 text-[var(--ivory)] sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
                <span className="editorial-rule" />
                Nine Chapters
              </div>
              <h2 className="mt-7 font-display text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[1.02] tracking-tight text-[var(--ivory)] glow-white">
                A wedding designed as an{" "}
                <span className="font-script italic text-[var(--wisteria)]">
                  unbroken story
                </span>.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[1rem] leading-[1.9] text-[var(--ivory)]/68 sm:text-[1.05rem]">
                Every Blizzful Pink wedding moves through nine carefully shaped
                chapters. Each function has its own visual language, but
                they share one feeling — emotion-led, calmly executed, beautifully framed.
              </p>
              <ol className="mt-9 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.95rem] sm:grid-cols-3">
                {chapters.map((c) => (
                  <li key={c.index}>
                    <a
                      href={`#chapter-${c.index}`}
                      className="group flex items-baseline gap-3 border-b border-[var(--ivory)]/10 py-3 transition-colors hover:border-[var(--wisteria)]/40"
                    >
                      <span className="text-[0.58rem] uppercase tracking-[0.36em] text-[var(--wisteria-deep)]">
                        {String(c.index).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl italic text-[var(--ivory)] transition-colors group-hover:text-[var(--wisteria)] sm:text-[1.4rem]">
                        {c.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Nine chapter stories — alternating layout */}
      <div className="relative bg-[var(--background)]">
        {chapters.map((chapter) => (
          <WeddingChapter key={chapter.index} chapter={chapter} />
        ))}
      </div>

      <ServiceGrid
        eyebrow="Wedding Services"
        title={
          <>
            Planning, styling, hospitality,
            <br />
            and <span className="italic">memory-making</span> details.
          </>
        }
        description="Attire and make-up, decor and florals, photography, tent/venue, catering, and entertainment — delivered as one calm system across every one of the nine chapters."
        services={weddingServices}
      />

      <ContactCta />
    </>
  );
}
