"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { coreOfferings, galleryItems } from "@/data/site-data";
import { cn } from "@/lib/utils";

const accents = [
  "/images/events/wedding-stage-1.jpg",
  "/images/events/mehendi-decor-1.jpg",
  "/images/events/sangeet-decor-1.jpg",
  "/images/events/haldi-decor-1.jpg",
  "/images/events/wedding-stage-2.jpg",
  "/images/events/mehendi-decor-2.jpg",
];
// imported galleryItems just to ensure type safety — silence unused warning
void galleryItems;

export function ServicesList() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[var(--sky-soft)] py-24 text-[var(--ink)] sm:py-32 lg:py-36">
      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
              <span className="editorial-rule" />
              Core Services
            </div>
            <h2 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--navy)] sm:text-5xl lg:text-[3.8rem]">
              Your one-stop partner for{" "}
              <span className="font-script italic text-[var(--wisteria-deep)]">inspired</span>{" "}
              events.
            </h2>
            <p className="mt-7 max-w-md text-[1rem] leading-[1.9] text-[var(--ink)]/72">
              From event planning and design concepts to vendor coordination and
              venue selection — we deliver a complete service spectrum under a
              single, meticulously composed studio.
            </p>

            <div className="mt-12 hidden h-[26rem] w-full overflow-hidden rounded-[1.8rem] ring-1 ring-[var(--navy)]/10 lg:block">
              <motion.div
                key={accents[active % accents.length]}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full"
              >
                <Image
                  src={accents[active % accents.length]}
                  alt="Service preview"
                  fill
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,36,70,0.45))]" />
              </motion.div>
            </div>
          </div>

          <div>
            {coreOfferings.map((service, index) => (
              <motion.button
                type="button"
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.85, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "group block w-full border-b border-[var(--navy)]/15 py-9 text-left transition-colors duration-500",
                  active === index ? "text-[var(--navy)]" : "text-[var(--ink)]/72 hover:text-[var(--navy)]",
                )}
              >
                <div className="grid gap-5 sm:grid-cols-[5rem_1fr]">
                  <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl leading-[1.02] tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[0.96rem] leading-[1.85] text-[var(--ink)]/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
