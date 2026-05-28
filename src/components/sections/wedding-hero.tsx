"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

export function WeddingHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] min-h-[640px] max-h-[1080px] overflow-hidden bg-black text-white"
    >
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/weddings/hero.jpg"
          alt="Royal palace wedding at night with candles and the couple"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(8,11,20,0.15),rgba(8,11,20,0.55)_55%,rgba(8,11,20,0.92))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,20,0.55)_0%,rgba(8,11,20,0.15)_38%,rgba(8,11,20,0.95)_100%)]" />
      </motion.div>

      {/* Decorative side rails */}
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden flex-col items-center justify-between py-32 text-[0.55rem] uppercase tracking-[0.5em] text-white/70 lg:flex">
        <span className="origin-top -rotate-90 whitespace-nowrap">
          Est. 2014 — Mumbai
        </span>
        <span className="origin-bottom -rotate-90 whitespace-nowrap">
          Scroll to discover
        </span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden flex-col items-center justify-between py-32 text-[0.55rem] uppercase tracking-[0.5em] text-white/70 lg:flex">
        <span className="origin-top rotate-90 whitespace-nowrap">
          A Forever Story
        </span>
        <span className="origin-bottom rotate-90 whitespace-nowrap">
          Proposal · Mandap · Reception
        </span>
      </div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.62rem] font-semibold uppercase tracking-[0.6em] text-[#c084fc]"
        >
          Weddings By
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[0.96] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
        >
          <span className="block font-script italic text-[#e9d5ff]">
            Blizzful Pink
          </span>
          <span className="mt-1 block uppercase tracking-[0.04em]">Eventt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-[0.95rem] leading-[1.85] text-white/85 sm:text-[1.05rem]"
        >
          A nine-chapter celebration — from the first &lsquo;yes&rsquo; on a quiet evening
          to the lamp lit at your forever home. Every function is designed
          with emotion, photography, and family flow at the centre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#chapter-1"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--wisteria-deep)] px-7 py-4 text-[0.66rem] font-medium uppercase tracking-[0.34em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-[var(--wisteria)] hover:shadow-[0_18px_60px_rgba(10,147,150,0.45)]"
          >
            Read our story
            <FiArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 text-[0.66rem] font-medium uppercase tracking-[0.34em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            Plan your wedding
            <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-[0.58rem] uppercase tracking-[0.5em] text-white/80"
        >
          <span className="h-9 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.8))]" />
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
