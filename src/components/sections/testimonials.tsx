"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/site-data";
import { Wisteria } from "@/components/ui/wisteria";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-[var(--sky-soft)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
      <Wisteria className="absolute -left-16 -top-6 h-80 w-60" opacity={0.4} />
      <Wisteria variant="right" className="absolute -right-16 -top-6 h-80 w-60" opacity={0.4} />

      <div className="relative mx-auto w-full max-w-[72rem] px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
            <span className="editorial-rule" />
            In Their Words
            <span className="editorial-rule" />
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="relative min-h-[16rem] sm:min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.author}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="mx-auto max-w-3xl font-display text-2xl italic leading-[1.32] tracking-tight text-[var(--ivory)] sm:text-3xl lg:text-[2.6rem]">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <p className="mt-9 text-[0.66rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
                  — {active.author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((item, idx) => (
              <button
                key={item.author}
                type="button"
                onClick={() => setIndex(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={cn(
                  "h-px transition-all duration-500",
                  idx === index ? "w-20 bg-[var(--wisteria-deep)]" : "w-12 bg-[var(--ivory)]/25",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
