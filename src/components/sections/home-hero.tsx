"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { company } from "@/data/site-data";
import { Wisteria } from "@/components/ui/wisteria";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--sky-soft)] pt-28 sm:pt-32">
      {/* Decorative wisteria corners — hidden on small for legibility */}
      <Wisteria className="absolute -left-12 -top-8 hidden h-[26rem] w-72 md:block" opacity={0.5} />
      <Wisteria variant="right" className="absolute -right-12 -top-8 hidden h-[26rem] w-72 md:block" opacity={0.5} />

      <div className="relative mx-auto w-full max-w-[100rem] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left text block */}
          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.62rem] uppercase tracking-[0.46em] text-[var(--forest-soft)]"
            >
              Event Management · Mumbai
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-[clamp(2.4rem,7.2vw,6.8rem)] font-medium leading-[0.98] tracking-tight text-[var(--ivory)]"
            >
              Crafting
              <br />
              <span className="font-script text-[1.15em] font-normal italic text-[var(--wisteria-deep)]">
                extraordinary
              </span>{" "}
              events
              <br />
              that leave you <span className="italic text-[var(--wisteria-deep)]">speechless</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 max-w-xl text-[1.02rem] leading-[1.9] text-[var(--ivory)]/72 sm:text-[1.08rem]"
            >
              From grand weddings and intimate celebrations to high-energy
              corporate events and cultural gatherings — Blizzful Pink Eventt
              brings creativity, precision, and passion to every occasion,
              pan-India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--navy)] px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[var(--ivory)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--navy-deep)]"
              >
                Plan your event
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 rounded-full border border-[var(--ivory)]/25 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[var(--ivory)]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--wisteria-deep)] hover:bg-[var(--wisteria-deep)] hover:text-[var(--ivory)]"
              >
                Explore the gallery
              </Link>
              <a
                href={`tel:${company.phone[0].replace(/\s+/g, "")}`}
                className="ml-1 inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.28em] text-[var(--wisteria-deep)] transition-colors hover:text-[var(--ivory)]"
              >
                <FiPhone className="h-3.5 w-3.5" />
                {company.phone[0]}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.85 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--ivory)]/10 pt-7 lg:max-w-md"
            >
              {[
                { value: "10+", label: "Years" },
                { value: "200+", label: "Events" },
                { value: "150+", label: "Brands" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-[var(--ivory)] glow-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--ivory)]/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right image collage */}
          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(20,36,70,0.18)] ring-1 ring-[var(--ivory)]/10"
            >
              <Image
                src="/images/events/hero-main.jpg"
                alt="Corporate event production by Blizzful Pink Eventt"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,36,70,0.32))]" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[var(--ivory)]">
                <div>
                  
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[0.55rem] uppercase tracking-[0.34em] backdrop-blur-md">
                  Mumbai
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-10 -left-6 hidden aspect-square w-44 overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(20,36,70,0.22)] ring-1 ring-[var(--ivory)]/10 lg:block lg:-bottom-12 lg:w-56"
            >
              <Image
                src="/images/events/hero-accent.jpg"
                alt="Event by Blizzful Pink Eventt"
                fill
                quality={90}
                sizes="(max-width: 1024px) 176px, 224px"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-3 top-6 hidden w-40 overflow-hidden rounded-[1.4rem] shadow-[0_20px_60px_rgba(20,36,70,0.18)] ring-1 ring-[var(--ivory)]/10 lg:block lg:w-48"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/events/hero-social.jpg"
                  alt="Social event decoration"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 160px, 192px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
