"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export type WeddingChapterData = {
  index: number;
  name: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
  alt: string;
};

type WeddingChapterProps = {
  chapter: WeddingChapterData;
};

export function WeddingChapter({ chapter }: WeddingChapterProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax for the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.04, 1.1]);

  // Counter parallax for the giant number
  const numberY = useTransform(scrollYProgress, [0, 1], ["6%", "-12%"]);

  const reverse = chapter.index % 2 === 0;
  const padded = String(chapter.index).padStart(2, "0");

  return (
    <section
      ref={ref}
      id={`chapter-${chapter.index}`}
      className="relative overflow-hidden border-b border-[var(--ivory)]/[0.06] bg-[var(--background)] py-20 text-[var(--ivory)] sm:py-28 lg:py-32"
    >
      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-12 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            {/* Background big number, behind text */}
            <motion.span
              style={{ y: numberY }}
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-6 select-none font-display text-[12rem] leading-none text-[var(--wisteria)]/[0.07] sm:text-[16rem] lg:-top-16 lg:text-[18rem]"
            >
              {padded}
            </motion.span>

            <div className="relative">
              <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
                <span>Chapter {padded}</span>
                <span className="editorial-rule" />
                <span className="text-[var(--ivory)]/70">{chapter.subtitle}</span>
              </div>

              <h2 className="mt-8 font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.98] tracking-tight text-[var(--ivory)] glow-white">
                <span className="italic text-[var(--wisteria)]">{chapter.name}</span>
              </h2>

              <p className="mt-7 max-w-xl text-[1rem] leading-[1.9] text-[var(--ivory)]/72 sm:text-[1.05rem]">
                {chapter.description}
              </p>

              <div className="mt-9 border-l-2 border-[var(--wisteria-deep)]/40 pl-5">
                <p className="font-script text-2xl italic leading-snug text-[var(--wisteria)]/90 sm:text-3xl">
                  &ldquo;{chapter.quote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.8rem] ring-1 ring-[var(--ivory)]/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[2rem]">
              <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
                <Image
                  src={chapter.image}
                  alt={chapter.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,11,20,0.45))]" />

              {/* Floating label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[var(--ivory)]">
                <span className="font-display text-[3.4rem] leading-none text-[var(--ivory)]/75 sm:text-[5rem]">
                  {padded}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[0.56rem] uppercase tracking-[0.36em] backdrop-blur-md">
                  {chapter.name}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
