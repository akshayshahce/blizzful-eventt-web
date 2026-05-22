import type { Metadata } from "next";
import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The visual center of the site, staged more like a cinematic portfolio."
        description="Phase 1 still uses reusable local placeholders and structured JSON data, but the experience is now positioned like a premium image-led showcase with darker mood, stronger hierarchy, and quieter browsing controls."
      />
      <GalleryShowcase />
    </>
  );
}
