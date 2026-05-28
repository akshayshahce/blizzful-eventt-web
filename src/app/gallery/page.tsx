import type { Metadata } from "next";
import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual archive — staged like a film."
        italicWord="archive"
        description="Filter by ritual or format, then expand any frame into a fullscreen viewing mode tuned for the imagery."
        image="/images/events/gallery-hero-weddings-by.jpg"
        meta="Open any frame · Fullscreen viewing"
      />
      <GalleryShowcase />
      <ContactCta />
    </>
  );
}
