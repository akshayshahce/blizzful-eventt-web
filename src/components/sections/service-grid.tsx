"use client";

import { motion } from "framer-motion";
import { Service } from "@/data/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type ServiceGridProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  services: Service[];
  theme?: "dark" | "light";
};

export function ServiceGrid({
  eyebrow,
  title,
  description,
  services,
  theme = "light",
}: ServiceGridProps) {
  const dark = theme === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 sm:py-32 lg:py-36",
        dark
          ? "bg-[linear-gradient(135deg,#0d0620_0%,#0a1230_40%,#14082a_100%)] text-[var(--ivory)]"
          : "bg-[var(--surface)] text-[var(--ink)]",
      )}
    >
      {dark ? (
        <>
          <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--navy)]/[0.15] blur-[120px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[var(--wisteria-deep)]/[0.12] blur-[100px]" />
        </>
      ) : null}
      <div className="relative mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          theme={theme}
        />
        <div
          className={cn(
            "mt-16 grid gap-px sm:grid-cols-2 lg:mt-20",
            dark ? "border border-[var(--ivory)]/8 bg-[var(--ivory)]/5" : "border border-[var(--ivory)]/8 bg-[var(--ivory)]/5",
          )}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative p-9 transition-colors duration-500 sm:p-12",
                dark
                  ? "bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(168,85,247,0.07)]"
                  : "bg-[var(--surface)] hover:bg-[var(--paper)]",
              )}
            >
              <div className="flex items-baseline justify-between text-[0.6rem] uppercase tracking-[0.4em]">
                <span className={dark ? "text-[var(--wisteria-deep)] glow-purple" : "text-[var(--wisteria-deep)]"}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={dark ? "text-[var(--ivory)]/25" : "text-[var(--ivory)]/25"}>
                  Service
                </span>
              </div>
              <h3
                className={cn(
                  "mt-10 font-display text-3xl leading-[1.04] tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl",
                  dark ? "text-[var(--ivory)] glow-white" : "text-[var(--ivory)]",
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  "mt-5 max-w-md text-[0.95rem] leading-[1.85]",
                  dark ? "text-[var(--ivory)]/60" : "text-[var(--ivory)]/60",
                )}
              >
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
