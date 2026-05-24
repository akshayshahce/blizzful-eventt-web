"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Story = {
  index: string;
  category: string;
  title: string;
  italicWord: string;
  description: string;
  meta: string;
  image: string;
  href: string;
};

const stories: Story[] = [
  {
    index: "01",
    category: "Weddings · Rituals",
    title: "Wedding Weekends",
    italicWord: "Wedding",
    description:
      "A multi-day arc — Roka, Engagement, Mehendi, Haldi, Sangeet, and Shaadi — composed for emotion, photography, and effortless family flow.",
    meta: "Roka · Mehendi · Haldi · Sangeet · Shaadi",
    image: "/images/events/wedding-stage-1.jpg",
    href: "/wedding-events",
  },
  {
    index: "02",
    category: "Corporate · Institutional",
    title: "Corporate Productions",
    italicWord: "Corporate",
    description:
      "Summits, conferences, AGMs, and conclaves built with technical discipline, brand hospitality, and stage-grade execution across India's marquee venues.",
    meta: "Conferences · Summits · AGMs · Conclaves",
    image: "/images/events/sangeet-decor-1.jpg",
    href: "/corporate-events",
  },
  {
    index: "03",
    category: "Mehendi · Haldi · Sangeet",
    title: "Pre-wedding Functions",
    italicWord: "Pre-wedding",
    description:
      "Curated mehendi, haldi, and sangeet experiences with custom stages, floral storytelling, and lighting designed for the social camera.",
    meta: "Mehendi · Haldi · Sangeet · Engagement",
    image: "/images/events/mehendi-decor-1.jpg",
    href: "/services",
  },
];

function StoryRow({ story, index }: { story: Story; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
    >
      <div
        className={cn(
          "lg:col-span-5",
          reverse && "lg:order-2 lg:col-start-8",
        )}
      >
        <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
          <span>{story.index}</span>
          <span className="editorial-rule" />
          <span>{story.category}</span>
        </div>
        <h3 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--navy)] sm:text-5xl lg:text-6xl">
          {story.title.split(story.italicWord).map((part, idx, arr) => (
            <span key={idx}>
              {part}
              {idx < arr.length - 1 ? (
                <span className="italic text-[var(--wisteria-deep)]">{story.italicWord}</span>
              ) : null}
            </span>
          ))}
        </h3>
        <p className="mt-6 max-w-md text-[1rem] leading-[1.9] text-[var(--ink)]/70">
          {story.description}
        </p>
        <p className="mt-6 text-[0.6rem] uppercase tracking-[0.38em] text-[var(--ink)]/50">
          {story.meta}
        </p>
        <Link
          href={story.href}
          className="group mt-8 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-[var(--navy)] transition-colors hover:text-[var(--wisteria-deep)]"
        >
          Explore {story.title}
          <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div
        className={cn(
          "relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-[var(--navy)]/10 lg:col-span-7 lg:aspect-[5/3.4]",
          reverse && "lg:order-1 lg:col-start-1",
        )}
      >
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(20,36,70,0.45))]" />
        <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-[var(--ivory)]">
          <span className="font-display text-[5rem] leading-none opacity-25 sm:text-[7rem]">
            {story.index}
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.38em] text-[var(--ivory)]/80 sm:inline-block">
            Featured
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedStories() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ink)] sm:py-32 lg:py-36">
      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
              <span className="editorial-rule" />
              Selected Works
            </div>
            <h2 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--navy)] sm:text-5xl lg:text-[4.4rem]">
              Three disciplines.
              <br />
              One <span className="italic font-script text-[var(--wisteria-deep)]">visual language</span>.
            </h2>
          </div>
          <p className="max-w-md text-[1rem] leading-[1.9] text-[var(--ink)]/68 lg:col-span-5">
            Every project is an authored composition — emotionally calibrated for
            private celebrations and operationally engineered for corporate scale.
          </p>
        </div>

        <div className="mt-20 space-y-20 sm:mt-24 lg:mt-28 lg:space-y-28">
          {stories.map((story, index) => (
            <StoryRow key={story.title} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
