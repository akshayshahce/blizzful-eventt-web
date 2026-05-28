"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { coreOfferings } from "@/data/site-data";
import { cn } from "@/lib/utils";

// Six accent photos — one per `coreOfferings` entry. Every photo is
// detail-focused (no clearly visible faces) and HD, picked to literally
// illustrate the corresponding service description.
const accents = [
  {
    // 01 — Event Planning — end-to-end management, schedules, run sheets
    src: "/images/events/wedding-stage-2.jpg",
    alt: "Decorated mandap stage with floral pillars and drapes — the orchestrated end-result of full event planning",
  },
  {
    // 02 — Designing & Concept — theme, floral palette, guest touchpoints, visual consistency
    // (Replaces sangeet-decor-2 / bridal feet — table dressing speaks to
    // floral palette + linen + place-setting consistency across touchpoints.)
    src: "/images/events/wedding-decor-2.jpg",
    alt: "Designed banquet table with floral centrepiece, linen, glassware and tablescape — theme creation, floral palette and visual consistency across guest touchpoints",
  },
  {
    // 03 — Co-ordination & Management — on-day choreography, command centre, running every cue
    // (Replaces wedding-stage-1 / intimate hands — an event in full motion
    // better represents the "command-centre running every cue" idea.)
    src: "/images/events/about-corporate-productions.jpg",
    alt: "Live event in motion — twin LED screens, lit stage, full seated audience — the command-centre running every cue",
  },
  {
    // 04 — Marketing & Exposure — branding zones, sponsor visibility, exhibition presentation
    src: "/images/events/corporate-gala.jpg",
    alt: "Aerial view of an exhibition hall with branded booths and aisles — sponsor visibility and exhibition presentation",
  },
  {
    // 05 — Vendor Co-ordination — LED audio visuals, photographers, florals, manpower, catering, linen, furniture
    // (Replaces mehendi-decor-2 / single vendor type — confetti + stage
    // lighting better represents the LED + AV vendor coordination the
    // description leads with.)
    src: "/images/events/sangeet-night.jpg",
    alt: "Confetti shower over a lit live-event crowd with stage lighting and rigging — LED, AV and audio vendor coordination in action",
  },
  {
    // 06 — Venue Selection — premium hotel partnerships, capacity-matched venues
    src: "/images/events/exhibitions-public-events.png",
    alt: "Capacity audience seated in a premium auditorium under patterned ceiling lighting — a capacity-matched, premium venue",
  },
];

export function ServicesList() {
  const [active, setActive] = useState(0);
  const activeAccent = accents[active % accents.length];

  return (
    <section className="relative overflow-hidden bg-[var(--sky-soft)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
              <span className="editorial-rule" />
              Core Services
            </div>
            <h2 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--ivory)] sm:text-5xl lg:text-[3.8rem]">
              Your one-stop partner for{" "}
              <span className="font-script italic text-[var(--wisteria-deep)]">inspired</span>{" "}
              events.
            </h2>
            <p className="mt-7 max-w-md text-[1rem] leading-[1.9] text-[var(--ivory)]/65">
              From event planning and design concepts to vendor coordination and
              venue selection — we deliver a complete service spectrum under a
              single, meticulously composed studio.
            </p>

            <div className="mt-12 hidden h-[26rem] w-full overflow-hidden rounded-[1.8rem] ring-1 ring-[var(--navy)]/10 lg:block">
              <motion.div
                key={activeAccent.src}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full"
              >
                <Image
                  src={activeAccent.src}
                  alt={activeAccent.alt}
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
                  "group block w-full border-b border-[var(--ivory)]/10 py-9 text-left transition-colors duration-500",
                  active === index ? "text-[var(--ivory)]" : "text-[var(--ivory)]/75 hover:text-[var(--ivory)]",
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
                    <p className="mt-4 max-w-xl text-[0.96rem] leading-[1.85] text-[var(--ivory)]/75">
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
