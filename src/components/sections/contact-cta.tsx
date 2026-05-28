"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { company } from "@/data/site-data";
import { Wisteria } from "@/components/ui/wisteria";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
      <Wisteria className="absolute -left-12 -top-10 h-80 w-60" opacity={0.42} />
      <Wisteria variant="right" className="absolute -right-12 -top-10 h-80 w-60" opacity={0.42} />

      <div className="relative mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-12">
        <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,var(--wisteria-soft),var(--charcoal))] px-8 py-16 text-center ring-1 ring-[var(--navy)]/25 sm:px-16 sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
            <span className="editorial-rule" />
            Contact Us
            <span className="editorial-rule" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-tight text-[var(--ivory)]"
          >
            Let&apos;s plan something{" "}
            <span className="font-script italic text-[var(--wisteria-deep)]">unforgettable</span>.
          </motion.h2>
          <p className="mx-auto mt-7 max-w-xl text-[1rem] leading-[1.9] text-[var(--ivory)]/60">
            Share your vision — a wedding, a corporate summit, or an
            exhibition. We&apos;ll help shape the story, scope, and a calm path to execution.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--navy)] px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--navy-deep)]"
            >
              Start the conversation
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={`tel:${company.phone[0].replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ivory)]/25 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[var(--ivory)] transition-all duration-300 hover:border-[var(--ivory)]/50 hover:bg-[var(--ivory)]/8"
            >
              {company.phone[0]}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--ivory)]/60">
            <a href={`mailto:${company.email}`} className="link-underline">
              {company.email}
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--ivory)]/20 sm:inline-block" />
            <a
              href={`https://instagram.com/${company.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              @{company.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
