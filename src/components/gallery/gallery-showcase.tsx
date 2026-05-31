"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiX } from "react-icons/fi";
import {
  formatImageTitle,
  galleryCategories,
  galleryImages,
  hasGalleryData,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

const ALL_FILTER = "All";

type GalleryShowcaseProps = {
  preview?: boolean;
};

export function GalleryShowcase({ preview = false }: GalleryShowcaseProps) {
  // Build the chip nav from whatever categories the Drive snapshot exposes.
  // Falls back to just ["All"] when the snapshot is empty (first deploy, sync
  // failure, etc.) — the empty-state UI takes over below.
  const filterOptions = useMemo(
    () => [ALL_FILTER, ...galleryCategories.map((cat) => cat.name)],
    [],
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_FILTER);
  const [openIndex, setOpenIndex] = useState<number>(-1);

  // If the snapshot regenerates and the persisted category disappears, fall
  // back to "All" so the grid never goes blank.
  useEffect(() => {
    if (!filterOptions.includes(selectedCategory)) {
      setSelectedCategory(ALL_FILTER);
    }
  }, [filterOptions, selectedCategory]);

  const filteredItems = useMemo(() => {
    const items =
      selectedCategory === ALL_FILTER
        ? galleryImages
        : galleryImages.filter((img) => img.category === selectedCategory);
    return preview ? items.slice(0, 6) : items;
  }, [preview, selectedCategory]);

  const slides = useMemo(
    () =>
      filteredItems.map((item) => ({
        src: item.fullSrc,
        thumbSrc: item.thumbnailSrc,
        alt: formatImageTitle(item.name),
        title: formatImageTitle(item.name),
        category: item.category,
      })),
    [filteredItems],
  );

  const isLightboxOpen = openIndex >= 0 && openIndex < slides.length;
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
      if (!slides.length) return;
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
    if (!slides.length) return;
    setOpenIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    if (!slides.length) return;
    setOpenIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
      <div className="relative mx-auto w-full max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
              <span className="editorial-rule" />
              {preview ? "The Portfolio" : "The Archive"}
            </div>
            <h2 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-[var(--ivory)] sm:text-5xl lg:text-[4.4rem]">
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
          <p className="max-w-md text-[1rem] leading-[1.9] text-[var(--ivory)]/60 lg:col-span-5">
            Filter by ritual, or open any frame to view it full screen. Categories and
            images are managed directly from the studio&apos;s Google Drive — updates
            appear here on each scheduled sync.
          </p>
        </div>

        {hasGalleryData ? (
          <>
            <div className="mt-12 flex flex-wrap gap-2.5 sm:mt-14">
              {filterOptions.map((category) => {
                const activeFilter = selectedCategory === category;
                return (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "rounded-full border px-5 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.3em] transition-all duration-300",
                      activeFilter
                        ? "border-[var(--wisteria-deep)] bg-[var(--wisteria-deep)] text-white shadow-[0_8px_22px_rgba(10,147,150,0.28)]"
                        : "glow-chip border-[var(--ivory)]/25 text-[var(--ivory)]/65",
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
                      src={item.thumbnailSrc}
                      alt={formatImageTitle(item.name)}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(20,36,70,0.78))] transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute inset-0 flex items-end p-6 text-white">
                      <div className="w-full">
                        <div className="flex items-center justify-between text-[0.58rem] font-semibold uppercase tracking-[0.4em] text-white/90">
                          <span className="text-[#e9d5ff]">{item.category}</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.36em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
                  className="group inline-flex items-center gap-3 rounded-full border border-[var(--ivory)]/25 bg-transparent px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[var(--ivory)]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--wisteria-deep)] hover:bg-[var(--wisteria-deep)] hover:text-[var(--ivory)]"
                >
                  View the full gallery
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            ) : null}
          </>
        ) : (
          <GalleryEmptyState />
        )}
      </div>

      {activeSlide ? (
        <div
          className="fixed inset-0 z-[120] flex bg-[rgba(20,36,70,0.96)] text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery slideshow"
        >
          <button
            type="button"
            aria-label="Close slideshow"
            onClick={() => setOpenIndex(-1)}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
          >
            <FiX className="h-7 w-7" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={showPreviousSlide}
            className="absolute left-2 top-1/2 z-20 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white sm:left-5"
          >
            <FiArrowLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={showNextSlide}
            className="absolute right-2 top-1/2 z-20 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white sm:right-5"
          >
            <FiArrowRight className="h-7 w-7" />
          </button>

          <div
            className="flex min-w-0 flex-1 flex-col"
            onClick={() => setOpenIndex(-1)}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center px-14 py-8 sm:px-20 sm:py-10">
              <div
                className="relative flex h-full w-full items-center justify-center"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative h-[82vh] w-full max-w-[92vw]">
                  <Image
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    fill
                    sizes="92vw"
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            <div
              className="px-6 pb-6 text-center sm:px-10"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/80">
                {openIndex + 1} / {slides.length}
              </p>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
                {activeSlide.category}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function GalleryEmptyState() {
  return (
    <div className="mt-16 flex flex-col items-center rounded-[1.6rem] border border-dashed border-[var(--border-strong)] bg-[var(--surface)]/40 px-8 py-16 text-center sm:py-20">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
        Gallery in progress
      </p>
      <h3 className="mt-5 max-w-xl font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-[var(--ivory)]">
        New frames are being prepared.
      </h3>
      <p className="mt-4 max-w-md text-sm leading-[1.85] text-[var(--ivory)]/70">
        The visual archive syncs from Google Drive on a schedule. If a folder
        was just published, please check back shortly — fresh imagery appears
        automatically after the next sync.
      </p>
    </div>
  );
}
