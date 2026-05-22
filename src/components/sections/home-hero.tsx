"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { company, editorialImages, stats } from "@/data/site-data";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 900], [0, -90]);
  const yTwo = useTransform(scrollY, [0, 900], [0, -130]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#090807_0%,#120f0d_38%,#0c0a09_100%)] pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(231,212,181,0.10),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(127,76,46,0.28),transparent_26%),radial-gradient(circle_at_50%_88%,rgba(79,55,38,0.22),transparent_28%)]" />
      <motion.div style={{ y: yOne, opacity }} className="absolute -left-20 top-40 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(198,160,122,0.2),transparent_68%)] blur-3xl" />
      <motion.div style={{ y: yTwo }} className="absolute right-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(132,82,54,0.24),transparent_72%)] blur-3xl" />

      <Container className="relative grid min-h-[calc(100vh-8rem)] gap-14 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:pb-24">
        <motion.div style={{ y: yOne }} className="space-y-8 pb-6 lg:pb-14">
          <p className="text-[11px] uppercase tracking-[0.52em] text-[var(--accent-soft)]">
            Luxury Weddings. Corporate Experiences. Signature Moments.
          </p>
          <div className="space-y-6">
            <h1 className="max-w-5xl font-display text-[4.2rem] leading-[0.88] sm:text-[5.8rem] lg:text-[8.3rem]">
              A cinematic event house for celebrations that need to feel unforgettable.
            </h1>
            <p className="max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              {company.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/gallery" className={cn(buttonVariants({ size: "lg" }))}>
              Explore Gallery
            </Link>
            <Link href="/contact-us" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Plan Your Event
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 pt-4">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="min-w-[9rem]">
                <p className="font-display text-5xl text-[var(--accent-soft)]">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.74fr_1fr]">
          <motion.article
            style={{ y: yTwo }}
            className="relative min-h-[24rem] overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/6 sm:min-h-[38rem]"
          >
            <Image
              src={editorialImages[0]}
              alt="Wedding editorial placeholder"
              fill
              className="scale-110 object-cover opacity-26 blur-[5px] saturate-0"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.06),rgba(8,8,8,0.82))]" />
            <div className="absolute bottom-0 left-0 right-0 space-y-3 p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.36em] text-[var(--accent-soft)]">Wedding Functions</p>
              <p className="max-w-sm font-display text-4xl leading-none sm:text-5xl">
                Mehendi, Haldi, Sangeet, and Shaadi with atmosphere and emotional range.
              </p>
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              style={{ y: yOne }}
              className="relative min-h-[15rem] overflow-hidden rounded-[2.1rem] border border-white/10 bg-white/6"
            >
              <Image
                src={editorialImages[1]}
                alt="Corporate event editorial placeholder"
                fill
                className="scale-110 object-cover opacity-24 blur-[5px] saturate-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.04),rgba(8,8,8,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 space-y-3 p-7">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">Corporate Precision</p>
                <p className="max-w-sm font-display text-4xl leading-none">
                  Conferences, exhibitions, and leadership forums staged with polish.
                </p>
              </div>
            </motion.article>

            <motion.article
              style={{ y: yTwo }}
              className="rounded-[2.1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-7 backdrop-blur-md"
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">Signature Promise</p>
              <p className="mt-4 max-w-lg text-2xl leading-relaxed text-white/88">
                Creative direction, floral design, hospitality, staging, AV, photography, and guest experience under one meticulous studio.
              </p>
              <Link href="/services" className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/86">
                View services <FiArrowUpRight />
              </Link>
            </motion.article>
          </div>
        </div>
      </Container>
    </section>
  );
}
