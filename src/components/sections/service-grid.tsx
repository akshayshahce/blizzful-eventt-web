"use client";

import { motion } from "framer-motion";
import {
  FiAperture,
  FiBriefcase,
  FiCamera,
  FiCircle,
  FiClipboard,
  FiCoffee,
  FiGift,
  FiGrid,
  FiHeart,
  FiHome,
  FiMail,
  FiMusic,
  FiPackage,
  FiSliders,
  FiTruck,
  FiUser,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";
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

// Pick an icon from the service title using lightweight keyword matching.
// Keeps the design data-light — the Service type stays { title, description }.
function iconForService(title: string): IconType {
  const t = title.toLowerCase();
  if (t.includes("attire") || t.includes("make up") || t.includes("styling")) return FiUser;
  if (t.includes("floral") || t.includes("decor")) return FiAperture;
  if (t.includes("photograph") || t.includes("videograph")) return FiCamera;
  if (t.includes("tent") || t.includes("venue") || t.includes("stage")) return FiHome;
  if (t.includes("catering") || t.includes("hospitality")) return FiCoffee;
  if (t.includes("entertainment") || t.includes("photobooth") || t.includes("music")) return FiMusic;
  if (t.includes("conference") || t.includes("summit")) return FiUsers;
  if (t.includes("exhibition") || t.includes("trade") || t.includes("expo")) return FiGrid;
  if (t.includes("led") || t.includes("audio") || t.includes("technical") || t.includes("av")) return FiZap;
  if (t.includes("vendor") || t.includes("manpower")) return FiClipboard;
  if (t.includes("invitation")) return FiMail;
  if (t.includes("baraat") || t.includes("entry") || t.includes("car")) return FiTruck;
  if (t.includes("ring")) return FiCircle;
  if (t.includes("gift")) return FiGift;
  if (t.includes("design") || t.includes("selection")) return FiSliders;
  if (t.includes("house") || t.includes("door")) return FiHeart;
  if (t.includes("corporate") || t.includes("business")) return FiBriefcase;
  return FiPackage;
}

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
          ? "bg-section-gradient text-[var(--ivory)]"
          : "bg-[var(--surface)] text-[var(--ivory)]",
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
        <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => {
            const Icon = iconForService(service.title);
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={[
                  "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-[#0a4d5c]/15 bg-white p-8 sm:p-10",
                  "shadow-[0_10px_30px_-12px_rgba(26,40,66,0.18)]",
                  "transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_22px_55px_-14px_rgba(255,77,109,0.55)]",
                ].join(" ")}
              >
                {/* Coral gradient overlay — fades in on hover, sits behind content */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ff8c42_0%,#ff4d6d_100%)] opacity-0 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0a4d5c]/10 bg-[#fff5ef] text-[#ff6b35] transition-[background-color,border-color,color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <p className="mt-6 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#ff6b35] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/85">
                  Service {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 font-display text-3xl leading-[1.06] tracking-tight text-[#0a4d5c] transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white sm:text-[2.2rem]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[0.95rem] leading-[1.8] text-[#0a4d5c]/70 transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/90">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
