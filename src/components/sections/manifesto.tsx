"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wisteria } from "@/components/ui/wisteria";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ink)] sm:py-32 lg:py-36">
      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]"
            >
              <span className="editorial-rule" />
              About Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-display text-[clamp(2.4rem,4.6vw,4.6rem)] leading-[1.02] tracking-tight text-[var(--ivory)]"
            >
              We design events that feel{" "}
              <span className="font-script italic text-[var(--wisteria-deep)]">
                extraordinary
              </span>
              <br />
              and run with{" "}
              <span className="italic text-[var(--sky)]">quiet precision</span>.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid gap-7 text-[1.02rem] leading-[1.9] text-[var(--ivory)]/60 sm:grid-cols-2 sm:gap-12"
            >
              <p>
                A wedding planner is a professional who assists with the design,
                planning, and management of every detail of your celebration.
                Weddings are significant events — and Blizzful Pink Eventt
                ensures yours is well-organized, beautifully styled, and
                completely stress-free.
              </p>
              <p>
                Beyond weddings, we deliver corporate conferences, exhibitions,
                and brand events with the same standard of taste and execution.
                Partner with us to turn your event into an unforgettable brand
                experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-[0.66rem] uppercase tracking-[0.36em] text-[var(--ivory)]/50"
            >
              <span>— Mumbai, India</span>
              <span className="hidden h-px w-12 bg-[var(--ivory)]/20 sm:block" />
              <span>Founded 2014</span>
              <span className="hidden h-px w-12 bg-[var(--ivory)]/20 sm:block" />
              <span>Pan-India productions</span>
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <Wisteria className="absolute -right-8 -top-12 h-72 w-52" opacity={0.4} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-[var(--navy)]/10"
            >
              <Image
                src="/images/events/wedding-stage-1.jpg"
                alt="Wedding stage details"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 rounded-[1.6rem] border border-[var(--ivory)]/10 bg-[rgba(255,255,255,0.04)] p-7"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.44em] text-[var(--wisteria-deep)]">
                Studio promise
              </p>
              <p className="mt-4 font-display text-2xl italic leading-snug text-[var(--ivory)]">
                &ldquo;Every detail handled with creativity, perfection, and attention to detail to make your day truly magical.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
