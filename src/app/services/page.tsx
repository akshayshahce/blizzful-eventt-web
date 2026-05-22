import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { coreOfferings } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full-spectrum event service stack, reframed like a creative production system."
        description="The PDFs list planning, coordination, decor, photography, catering, furniture, venue support, hospitality, floral services, technical production, and custom event enhancements. This page presents them with a more premium, editorial service language."
      />
      <ServiceGrid
        eyebrow="Offerings"
        title="Designed to scale from family rituals to branded event environments."
        description="Every service component is reusable across future case studies, package pages, or CMS-backed content without redesigning the presentation system."
        services={coreOfferings}
      />
    </>
  );
}
