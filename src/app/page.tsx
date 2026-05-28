import { HomeHero } from "@/components/sections/home-hero";
import { Manifesto } from "@/components/sections/manifesto";
import { FeaturedStories } from "@/components/sections/featured-stories";
import { ServicesList } from "@/components/sections/services-list";
import { ProofBand } from "@/components/sections/proof-band";
import { WeddingMoments3D } from "@/components/sections/wedding-moments-3d";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WeddingMoments3D />
      <Manifesto />
      <FeaturedStories />
      <ServicesList />
      <ProofBand />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
