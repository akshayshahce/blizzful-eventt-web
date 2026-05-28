"use client";

import {
  FiAward,
  FiBriefcase,
  FiCoffee,
  FiGift,
  FiHeart,
  FiHome,
  FiLayers,
  FiMusic,
  FiStar,
  FiSun,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Carousel3D, type Carousel3DItem } from "@/components/ui/carousel-3d";

type EventCard = {
  label: string;
  Icon: IconType;
  tint: string; // brand-coloured icon + glow tint
};

const eventCards: EventCard[] = [
  { label: "Proposal",     Icon: FiHeart,       tint: "#ff7a8a" },
  { label: "God Dhana",    Icon: FiStar,        tint: "#ffd166" },
  { label: "Engagement",   Icon: FiAward,       tint: "#ffb84d" },
  { label: "Mehendi",      Icon: FiStar,        tint: "#ff6b6b" },
  { label: "Haldi",        Icon: FiSun,         tint: "#fcd34d" },
  { label: "Sangeet",      Icon: FiMusic,       tint: "#c084fc" },
  { label: "Wedding",      Icon: FiGift,        tint: "#ff8c42" },
  { label: "Reception",    Icon: FiCoffee,      tint: "#ff4d6d" },
  { label: "Ghar Parvesh", Icon: FiHome,        tint: "#a78bfa" },
  { label: "Conferences",  Icon: FiUsers,       tint: "#60a5fa" },
  { label: "Summits",      Icon: FiTrendingUp,  tint: "#34d399" },
  { label: "Exhibitions",  Icon: FiLayers,      tint: "#fb7185" },
  { label: "Hospitality",  Icon: FiBriefcase,   tint: "#67e8f9" },
];

function Card({ card }: { card: EventCard }) {
  const { Icon } = card;
  return (
    <div
      className="pointer-events-none relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-[1.4rem] border border-[var(--event-card-border)] bg-[var(--event-card-bg)] shadow-[var(--event-card-shadow)]"
    >
      {/* Top accent line — thin colored edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-0 h-[2px] rounded-full"
        style={{
          background: `linear-gradient(90deg,transparent,${card.tint},transparent)`,
          boxShadow: `0 0 12px ${card.tint}88`,
        }}
      />
      {/* Soft tinted halo from the top */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-16 w-28 -translate-x-1/2 rounded-full blur-2xl"
        style={{ background: card.tint, opacity: 0.18 }}
      />

      {/* Icon chip */}
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--event-card-border)] bg-[var(--event-card-icon-bg)]"
        style={{ boxShadow: `inset 0 0 0 1px ${card.tint}33` }}
      >
        <Icon className="h-7 w-7" style={{ color: card.tint }} />
      </div>

      {/* Label */}
      <span className="px-4 text-center font-display text-[1.15rem] italic leading-tight tracking-tight text-[var(--event-card-fg)]">
        {card.label}
      </span>

      {/* Bottom rule */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 bottom-5 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${card.tint}77,transparent)` }}
      />
    </div>
  );
}

export function EventCardMarquee() {
  const carouselItems: Carousel3DItem[] = eventCards.map((c) => ({
    id: c.label,
    content: <Card card={c} />,
  }));

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-20 sm:py-24">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[var(--wisteria-deep)]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[var(--navy)]/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.46em] text-[var(--wisteria)]">
            Every Occasion
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.8vw,3.4rem)] leading-[1.05] tracking-tight text-[var(--ivory)] glow-white">
            From sacred rituals to{" "}
            <span className="font-script italic text-[var(--wisteria)]">grand stages</span>.
          </h2>
        </div>

        <div className="mt-12">
          <Carousel3D
            items={carouselItems}
            cardWidth={220}
            cardHeight={260}
            radius={920}
            autoplayMs={2200}
            showCounter={false}
            hideControls
            draggable
            label="Event types showcase"
          />
        </div>
      </div>
    </section>
  );
}
