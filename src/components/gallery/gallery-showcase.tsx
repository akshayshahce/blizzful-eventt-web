"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiX } from "react-icons/fi";
import { galleryCategories, galleryItems } from "@/data/site-data";
import { cn } from "@/lib/utils";

const allCategories = ["All", ...galleryCategories] as const;

type GalleryShowcaseProps = {
  preview?: boolean;
};

export function GalleryShowcase({ preview = false }: GalleryShowcaseProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof allCategories)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const filteredItems = useMemo(() => {
    const items =
      selectedCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory);

    return preview ? items.slice(0, 6) : items;
  }, [preview, selectedCategory]);

  const slides = filteredItems.map((item) => ({
    src: item.src,
    alt: item.title,
    title: item.title,
    description: `${item.category} · ${item.location} · ${item.description}`,
  }));

  const isLightboxOpen = openIndex >= 0;
  const activeSlide = isLightboxOpen ? slides[openIndex] : null;

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenIndex(-1);
        return;
      }

      if (!slides.length) {
        return;
      }

      if (event.key === "ArrowRight") {
        setOpenIndex((current) => (current + 1) % slides.length);
      }

      if (event.key === "ArrowLeft") {
        setOpenIndex((current) => (current - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen, slides.length]);

  const showPreviousSlide = () => {
    if (!slides.length) {
      return;
    }
    setOpenIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    if (!slides.length) {
      return;
    }
    setOpenIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--ivory)] py-24 text-[var(--ink)] sm:py-32 lg:py-36">
      <div className="relative mx-auto w-full max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
              <span className="editorial-rule" />
              {preview ? "The Portfolio" : "The Archive"}
            </div>
            <h2 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--navy)] sm:text-5xl lg:text-[4.4rem]">
              {preview ? (
                <>
                  Selected moments from the{" "}
                  <span className="font-script italic text-[var(--wisteria-deep)]">visual archive</span>.
                </>
              ) : (
                <>
                  A curated{" "}
                  <span className="font-script italic text-[var(--wisteria-deep)]">visual archive</span>{" "}
                  of weddings and productions.
                </>
              )}
            </h2>
          </div>
          <p className="max-w-md text-[1rem] leading-[1.9] text-[var(--ink)]/68 lg:col-span-5">
            Filter by ritual — Roka, Engagement, Mehendi, Haldi, Sangeet, Wedding, or
            Corporate — or open any frame to view it full screen.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2.5 sm:mt-14">
          {allCategories.map((category) => {
            const activeFilter = selectedCategory === category;
            return (
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.3em] transition-all duration-300",
                  activeFilter
                    ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--ivory)]"
                    : "border-[var(--navy)]/20 text-[var(--navy)]/70 hover:border-[var(--navy)]/45 hover:text-[var(--navy)]",
                )}
              >
                {category}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={selectedCategory + String(preview)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {filteredItems.map((item, index) => (
            <motion.button
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: Math.min(index * 0.04, 0.4),
                ease: [0.22, 1, 0.36, 1],
              }}
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block w-full overflow-hidden rounded-[1.4rem] text-left ring-1 ring-[var(--navy)]/8"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sky-soft)]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(20,36,70,0.78))] transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.4em] text-[var(--ivory)]/85">
                      <span className="text-[var(--sky)]">{item.category}</span>
                      <span>{item.location}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-tight text-[var(--ivory)] sm:text-3xl">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.36em] text-[var(--ivory)]/72 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      View frame
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {preview ? (
          <div className="mt-14 flex justify-center sm:mt-16">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--navy)]/30 bg-transparent px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[var(--navy)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--ivory)]"
            >
              View the full gallery
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ) : null}
      </div>

      {activeSlide ? (
        <div
          className="fixed inset-0 z-[120] flex bg-[rgba(20,36,70,0.96)] text-[var(--ivory)]"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery slideshow"
        >
          <button
            type="button"
            aria-label="Close slideshow"
            onClick={() => setOpenIndex(-1)}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--ivory)]/86 transition hover:bg-white/10 hover:text-[var(--ivory)] sm:right-6 sm:top-6"
          >
            <FiX className="h-7 w-7" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={showPreviousSlide}
            className="absolute left-2 top-1/2 z-20 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full text-[var(--ivory)]/82 transition hover:bg-white/10 hover:text-[var(--ivory)] sm:left-5"
          >
            <FiArrowLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={showNextSlide}
            className="absolute right-2 top-1/2 z-20 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full text-[var(--ivory)]/82 transition hover:bg-white/10 hover:text-[var(--ivory)] sm:right-5"
          >
            <FiArrowRight className="h-7 w-7" />
          </button>

          <div
            className="flex min-w-0 flex-1 flex-col"
            onClick={() => setOpenIndex(-1)}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center px-14 py-8 sm:px-20 sm:py-10">
              <div
                className="flex h-full w-full items-center justify-center"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="block max-h-[82vh] max-w-[92vw] object-contain"
                  draggable={false}
                />
              </div>
            </div>

            <div
              className="px-6 pb-6 text-center sm:px-10"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[var(--ivory)]/66">
                {openIndex + 1} / {slides.length}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--ivory)] sm:text-4xl">
                {activeSlide.title}
              </h3>
              <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-[var(--ivory)]/72 sm:text-base">
                {activeSlide.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
