"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site-data";
import { CountUp } from "@/components/ui/count-up";
import { Wisteria } from "@/components/ui/wisteria";

export function ProofBand() {
  return (
    <section className="bg-section-gradient relative overflow-hidden py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--wisteria-deep)]/[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[var(--navy)]/[0.18] blur-[100px]" />
      <Wisteria className="absolute -left-12 -top-10 h-72 w-52" opacity={0.12} />
      <Wisteria variant="right" className="absolute -right-12 -bottom-10 h-72 w-52" opacity={0.12} />

      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--forest-soft)]">
              <span className="editorial-rule" />
              By the Numbers
            </div>
            <h2 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--ivory)] sm:text-5xl lg:text-[4.4rem]">
              A decade of celebrations, summits, and{" "}
              <span className="font-script italic text-[var(--wisteria-deep)]">signature</span> events.
            </h2>
          </div>
          <p className="max-w-md text-[1rem] leading-[1.9] text-[var(--ivory)]/60 lg:col-span-5">
            The studio has shaped intimate ceremonies and audience-first
            spectacles in equal measure — quietly building one of Mumbai&apos;s
            most trusted event execution rosters.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-[var(--ivory)]/8 bg-[var(--ivory)]/5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.95, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[rgba(255,255,255,0.03)] p-8 sm:p-10 lg:p-12"
            >
              <p className="text-[0.58rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-7 font-display text-5xl tracking-tight text-[var(--ivory)] sm:text-6xl lg:text-[4.4rem]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-3 text-[0.66rem] uppercase tracking-[0.36em] text-[var(--forest-soft)]">
                {stat.label}
              </p>
              <p className="mt-4 text-sm leading-[1.8] text-[var(--ivory)]/75">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
