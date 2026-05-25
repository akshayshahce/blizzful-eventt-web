import { HomeHero } from "@/components/sections/home-hero";
import { Manifesto } from "@/components/sections/manifesto";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { FeaturedStories } from "@/components/sections/featured-stories";
import { ServicesList } from "@/components/sections/services-list";
import { ProofBand } from "@/components/sections/proof-band";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

const marqueeItems = [
  "Weddings",
  "Mehendi",
  "Haldi",
  "Sangeet",
  "Roka",
  "Engagement",
  "Conferences",
  "Summits",
  "Exhibitions",
  "Hospitality",
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarqueeStrip items={marqueeItems} theme="ivory" />
      <Manifesto />
      <FeaturedStories />
      <ServicesList />
      <ProofBand />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
