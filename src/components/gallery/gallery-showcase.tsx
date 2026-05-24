"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { FiArrowUpRight } from "react-icons/fi";
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

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={slides}
        plugins={[Zoom, Captions, Counter]}
        zoom={{ maxZoomPixelRatio: 2.4, scrollToZoom: true }}
        captions={{ descriptionTextAlign: "center" }}
        counter={{ separator: " / " }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 400, swipe: 600 }}
      />
    </section>
  );
}
