"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wisteria } from "@/components/ui/wisteria";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  image?: string;
  meta?: string;
};

const DEFAULT_IMAGE = "/images/events/wedding-stage-2.jpg";

function renderTitle(title: string, italicWord?: string) {
  if (!italicWord) return title;
  const parts = title.split(italicWord);
  return (
    <>
      {parts[0]}
      <span className="italic text-[var(--wisteria-deep)]">{italicWord}</span>
      {parts[1]}
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  italicWord,
  description,
  image,
  meta,
}: PageHeroProps) {
  const src = image ?? DEFAULT_IMAGE;

  return (
    <section className="relative overflow-hidden bg-[var(--sky-soft)] pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pb-24">
      <Wisteria className="absolute -left-10 -top-6 hidden h-[22rem] w-60 md:block" opacity={0.4} />
      <Wisteria variant="right" className="absolute -right-10 -top-6 hidden h-[22rem] w-60 md:block" opacity={0.4} />

      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]"
            >
              <span className="editorial-rule" />
              {eyebrow}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-[clamp(2.1rem,6vw,5.6rem)] leading-[1.04] tracking-tight text-[var(--ivory)]"
            >
              {renderTitle(title, italicWord)}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-[1rem] leading-[1.9] text-[var(--ivory)]/65 sm:text-[1.05rem]"
            >
              {description}
            </motion.p>
            {meta ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-8 text-[0.6rem] uppercase tracking-[0.42em] text-[var(--ivory)]/70"
              >
                {meta}
              </motion.p>
            ) : null}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.8rem] shadow-[0_30px_70px_rgba(0,0,0,0.45)] ring-1 ring-[var(--ivory)]/10">
              <Image
                src={src}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(20,36,70,0.35))]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
