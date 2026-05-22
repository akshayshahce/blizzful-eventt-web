"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { galleryCategories, galleryItems } from "@/data/site-data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const allCategories = ["All", ...galleryCategories] as const;

export function GalleryShowcase({ preview = false }: { preview?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<(typeof allCategories)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const filteredItems = useMemo(() => {
    const items = selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

    return preview ? items.slice(0, 6) : items;
  }, [preview, selectedCategory]);

  const slides = filteredItems.map((item) => ({
    src: item.src,
    alt: item.title,
    title: item.title,
    description: `${item.category} • ${item.location} • ${item.description}`,
  }));

  return (
    <section className={cn("relative overflow-hidden py-24 sm:py-28", preview ? "bg-[linear-gradient(180deg,#0f0d0b,#191412)] text-white" : "bg-[linear-gradient(180deg,#090807,#15110e)] text-white")}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(224,209,182,0.10),transparent_22%),radial-gradient(circle_at_88%_28%,rgba(127,76,46,0.22),transparent_26%),linear-gradient(180deg,transparent,rgba(255,255,255,0.03))]" />
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual library designed to feel slower, richer, and more cinematic."
          description="The gallery is the core experience. It now uses a darker exhibition-style stage, refined filtering, editorial overlays, and a fullscreen viewing mode tuned for premium event imagery."
          theme="dark"
        />

        <div className="flex flex-wrap gap-3">
          {allCategories.map((category) => (
            <motion.button
              whileTap={{ scale: 0.98 }}
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.28em] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                selectedCategory === category
                  ? "border-[rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,rgba(243,229,205,0.92),rgba(196,142,102,0.95))] text-[#18120e] shadow-[0_16px_60px_rgba(164,112,73,0.22)]"
                  : "border-white/10 bg-white/6 text-white/76 backdrop-blur-sm hover:border-white/18 hover:bg-white/10 hover:text-white",
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="columns-1 gap-6 md:columns-2 xl:columns-3"
          >
            {filteredItems.map((item, index) => (
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                key={item.id}
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-[2.2rem] border border-white/8 bg-white/6 text-left shadow-[0_34px_120px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    item.ratio === "portrait" && "aspect-[4/5]",
                    item.ratio === "square" && "aspect-square",
                    item.ratio === "landscape" && "aspect-[5/3]",
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.70))]" />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft)]">{item.category}</p>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-white/52">{item.location}</span>
                  </div>
                  <h3 className="font-display text-[2.4rem] leading-none text-white">{item.title}</h3>
                  <p className="max-w-sm text-sm leading-7 text-white/62">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={slides}
        plugins={[Zoom, Captions, Counter]}
        zoom={{ maxZoomPixelRatio: 2.4, scrollToZoom: true }}
        captions={{ descriptionTextAlign: "center" }}
        counter={{ separator: " / " }}
        styles={{
          container: { backgroundColor: "rgba(6,6,6,0.94)", backdropFilter: "blur(24px)" },
        }}
      />
    </section>
  );
}
