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
          ? "bg-[var(--navy)] text-[var(--ivory)]"
          : "bg-[var(--surface)] text-[var(--ink)]",
      )}
    >
      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          theme={theme}
        />
        <div
          className={cn(
            "mt-16 grid gap-px sm:grid-cols-2 lg:mt-20",
            dark ? "border border-[var(--ivory)]/12 bg-[var(--ivory)]/10" : "border border-[var(--navy)]/12 bg-[var(--navy)]/10",
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
                  ? "bg-[var(--navy)] hover:bg-[var(--navy-deep)]"
                  : "bg-[var(--surface)] hover:bg-[var(--paper)]",
              )}
            >
              <div className="flex items-baseline justify-between text-[0.6rem] uppercase tracking-[0.4em]">
                <span className={dark ? "text-[var(--sky)]" : "text-[var(--wisteria-deep)]"}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={dark ? "text-[var(--ivory)]/40" : "text-[var(--navy)]/40"}>
                  Service
                </span>
              </div>
              <h3
                className={cn(
                  "mt-10 font-display text-3xl leading-[1.04] tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl",
                  dark ? "text-[var(--ivory)]" : "text-[var(--navy)]",
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  "mt-5 max-w-md text-[0.95rem] leading-[1.85]",
                  dark ? "text-[var(--ivory)]/68" : "text-[var(--ink)]/72",
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
