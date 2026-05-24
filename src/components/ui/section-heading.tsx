"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  index?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  index,
}: SectionHeadingProps) {
  const dark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-6",
        align === "center" && "mx-auto text-center",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex items-center gap-4 text-[0.62rem] font-medium uppercase tracking-[0.46em]",
          align === "center" && "justify-center",
          dark ? "text-[var(--wisteria-deep)]" : "text-[var(--wisteria-deep)]",
        )}
      >
        {index ? <span className="opacity-70">{index}</span> : null}
        <span className="editorial-rule" />
        <span>{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        className={cn(
          "font-display text-4xl leading-[1.02] sm:text-5xl lg:text-[4.2rem]",
          dark ? "text-[var(--ivory)]" : "text-[var(--ivory)]",
        )}
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className={cn(
            "max-w-2xl text-base leading-[1.85] sm:text-[1.02rem]",
            align === "center" && "mx-auto",
            dark ? "text-[var(--ivory)]/68" : "text-[var(--ivory)]/60",
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
