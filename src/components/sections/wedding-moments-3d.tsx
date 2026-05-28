"use client";

import Image from "next/image";
import { Carousel3D, type Carousel3DItem } from "@/components/ui/carousel-3d";

type Moment = {
  index: number;
  name: string;
  subtitle: string;
  image: string;
  alt: string;
};

// Same nine functions used on the wedding-events page, repurposed for the
// 3D carousel demo so this section visually showcases the whole wedding arc.
const moments: Moment[] = [
  { index: 1, name: "Proposal",     subtitle: "Where it all begins",   image: "/images/weddings/proposal.jpg",     alt: "Beach proposal scene with white floral heart arch and candles" },
  { index: 2, name: "God Dhana",    subtitle: "An auspicious blessing", image: "/images/weddings/god-dhana.jpg",    alt: "Ganesh idol with pink and white floral garland for the God Dhana ritual" },
  { index: 3, name: "Engagement",   subtitle: "Rings, vows, promise",  image: "/images/weddings/engagement.jpg",   alt: "Engagement rings on white linen with baby's breath" },
  { index: 4, name: "Mehendi",      subtitle: "Colour and laughter",   image: "/images/weddings/mehendi.jpg",      alt: "Mehendi photobooth setup with yellow parasols and marigold strings" },
  { index: 5, name: "Haldi",        subtitle: "Sunlight and turmeric", image: "/images/weddings/haldi.jpg",        alt: "Outdoor Haldi setup with yellow drapes and marigold pillars" },
  { index: 6, name: "Sangeet",      subtitle: "The night to dance",    image: "/images/weddings/sangeet.jpg",      alt: "Sangeet stage with pink floral chandelier and gold sofa" },
  { index: 7, name: "Wedding",      subtitle: "The moment of forever", image: "/images/weddings/wedding.jpg",      alt: "Palace wedding ceremony at night under candlelight" },
  { index: 8, name: "Reception",    subtitle: "An evening for everyone", image: "/images/weddings/reception.jpg",  alt: "Reception stage with cream drapery and cascading floral chandeliers" },
  { index: 9, name: "Ghar Parvesh", subtitle: "Welcome home",          image: "/images/weddings/ghar-parvesh.jpg", alt: "Front door styled with pink and purple floral torans for Ghar Parvesh" },
];

function MomentCard({ moment }: { moment: Moment }) {
  return (
    <article
      className="pointer-events-none relative h-full w-full overflow-hidden rounded-[1.4rem] border border-white/12 bg-[var(--charcoal)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
    >
      <Image
        src={moment.image}
        alt={moment.alt}
        fill
        sizes="320px"
        className="object-cover"
      />
      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(180deg,transparent_0%,rgba(8,11,20,0.92)_85%)]" />
      {/* Subtle top glow rim */}
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.6),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
        <p className="text-[0.55rem] uppercase tracking-[0.42em] text-[var(--wisteria)]">
          Chapter {String(moment.index).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-[1.7rem] italic leading-tight text-white">
          {moment.name}
        </h3>
        <p className="mt-1.5 text-[0.74rem] text-white/72">{moment.subtitle}</p>
      </div>
    </article>
  );
}

export function WeddingMoments3D() {
  const carouselItems: Carousel3DItem[] = moments.map((m) => ({
    id: m.index,
    content: <MomentCard moment={m} />,
  }));

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--wisteria-deep)]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--navy)]/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.46em] text-[var(--wisteria)]">
            Nine Moments
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[1.02] tracking-tight text-[var(--ivory)] glow-white">
            Spin through the{" "}
            <span className="font-script italic text-[var(--wisteria)]">forever story</span>.
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.85] text-[var(--ivory)]/68">
            Each card is a chapter of the wedding arc — proposal through Ghar Parvesh.
            Drag to spin, use your keyboard, or click any side card to bring it to the front.
          </p>
        </div>

        <div className="mt-16">
          <Carousel3D
            items={carouselItems}
            cardWidth={300}
            cardHeight={420}
            radius={920}
            cardAngleDeg={28}
            autoplayMs={2200}
            draggable
            hideControls
            showCounter={false}
            label="Wedding moments showcase"
          />
        </div>
      </div>
    </section>
  );
}
