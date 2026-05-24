export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Experience = {
  title: string;
  description: string;
  points: string[];
};

export type GalleryCategory =
  | "Wedding"
  | "Mehendi"
  | "Haldi"
  | "Sangeet"
  | "Engagement"
  | "Roka"
  | "Corporate";

export type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory;
  location: string;
  src: string;
  ratio: "portrait" | "square" | "landscape";
  description: string;
};

export const company = {
  name: "Blizzful Pink Eventt",
  shortName: "Blizzful Pink Eventt",
  tagline:
    "Creating timeless memories for your happily ever after.",
  description:
    "A wedding planner is a professional who assists with the design, planning, and management of a client's wedding. Blizzful Pink Eventt curates beautiful celebrations designed with elegance, love, and unforgettable moments — from traditional ceremonies to grand celebrations.",
  phone: ["+91 98703 59555", "+91 85919 61749"],
  email: "blizzfulpinkeventt@gmail.com",
  instagram: "blizzfulpinkeventt",
  location: "Mumbai, India",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/wedding-events", label: "Weddings" },
  { href: "/corporate-events", label: "Corporate" },
  { href: "/gallery", label: "Gallery" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/contact-us", label: "Contact" },
];

export const stats: Stat[] = [
  { value: "10+", label: "Years Legacy", detail: "A decade of crafting celebrations and corporate experiences." },
  { value: "200+", label: "Events Executed", detail: "From intimate ceremonies to full-scale corporate productions." },
  { value: "150+", label: "Brands Served", detail: "Including institutions like BSE, NSE, and marquee corporate offices." },
  { value: "10+", label: "Premium Partners", detail: "Empanelled hotels and vendors for seamless delivery." },
];

export const weddingServices: Service[] = [
  {
    title: "Attire & Make Up",
    description: "Bridal and groom styling, designer-led trousseau coordination, and on-day make-up artistry curated for the camera and the moment.",
  },
  {
    title: "Decor & Floral Styling",
    description: "Statement mandaps, floral installations, house entrances, ring plate decor, baraat car styling, and atmospheric venue detailing.",
  },
  {
    title: "Photography & Videography",
    description: "Cinematic capture teams, candid storytelling, drone shoots, multi-camera setups, live editing, and after-movie production.",
  },
  {
    title: "Tent, Venue & Stage",
    description: "Premium hotel partnerships, custom stage builds, backdrops, lighting and sound, with easy set-up and impactful reveals.",
  },
  {
    title: "Catering & Hospitality",
    description: "Veg catering, family coordination, gifting, room drops, arrival planning, and hospitality desk management.",
  },
  {
    title: "Entertainment & Photobooths",
    description: "Curated artists, sangeet performances, DJs, photobooth design, and signature touches for guests.",
  },
];

export const corporateServices: Service[] = [
  {
    title: "Corporate Conferences & Summits",
    description: "Boardroom meetings, annual general meetings, conclaves, summits, and leadership forums designed for clarity and impact.",
  },
  {
    title: "Exhibitions & Trade Shows",
    description: "Expos, exhibition booths, walk-through journeys, stage programming, and brand-first visitor experiences.",
  },
  {
    title: "Stage, LED, Audio & Technical",
    description: "Stage architecture, LED walls, audiovisual systems, light design, technicians, drone shoots, and cue-based event delivery.",
  },
  {
    title: "Vendor & Manpower Coordination",
    description: "Venue sourcing, premium hotel coordination, manpower planning, catering, hospitality, and execution control.",
  },
];

export const otherServices: Service[] = [
  { title: "Invitation Card Designing", description: "Custom invitation suites — paper, video, and digital — designed to set the tone of the celebration." },
  { title: "Couple & Baraat Entry", description: "Choreographed couple entries, baraat sequences, and dramatic reveal moments for the celebration's most-shared frames." },
  { title: "Ring Plate Decor", description: "Detailed ring plate styling and ceremony props that translate beautifully on camera." },
  { title: "Baraat Car Decor", description: "Floral car styling for baraat entries and post-wedding sendoffs." },
  { title: "Gifting Services", description: "Curated welcome boxes, hospitality gifting, and family-side hampers." },
  { title: "House Door Decor", description: "Floral arches, traditional torans, and home entrance styling for pre-wedding rituals." },
  { title: "Design Selection", description: "Theme curation, moodboards, palette direction, and family alignment across the wedding journey." },
];

export const featuredExperiences: Experience[] = [
  {
    title: "Wedding Weekends",
    description: "Multi-function celebrations built around family rituals, fashion, music, floral styling, and emotional staging.",
    points: ["Roka / God Dhana", "Engagement", "Mehendi", "Haldi", "Sangeet", "Wedding / Shaadi"],
  },
  {
    title: "Corporate Productions",
    description: "Professional environments where production discipline, stakeholder coordination, and brand presentation matter.",
    points: ["Conferences", "Summits", "AGMs", "Conclaves", "Employee Engagement", "Boardroom Meetings"],
  },
  {
    title: "Exhibitions & Public Events",
    description: "Scalable environments for visibility, footfall, and audience engagement with strong spatial storytelling.",
    points: ["Exhibitions", "Expos", "Government Events", "Concerts", "Festivals", "Hospitality Activations"],
  },
];

export const coreOfferings: Service[] = [
  {
    title: "Event Planning",
    description: "End-to-end management covering schedules, permissions, run sheets, family or stakeholder coordination, and production oversight.",
  },
  {
    title: "Designing & Concept",
    description: "Theme creation, moodboards, stage language, floral palette, guest touchpoints, and visual consistency across every moment.",
  },
  {
    title: "Co-ordination & Management",
    description: "On-day choreography, vendor management, family hospitality, and a calm command-centre running every cue.",
  },
  {
    title: "Marketing & Exposure",
    description: "For corporate formats: branding zones, sponsor visibility, exhibition presentation, and audience-facing event polish.",
  },
  {
    title: "Vendor Co-ordination",
    description: "LED audio visuals, photographers, florals, manpower, catering, linen, furniture, and specialist coordination.",
  },
  {
    title: "Venue Selection",
    description: "Premium hotel partnerships, banquet sourcing, outdoor venues, and capacity-matched site recommendations.",
  },
];

export const reasonsToChooseUs = [
  { title: "Premium Quality", description: "Premium quality at competitive rates — we never compromise on finish, fabric, or finesse." },
  { title: "On-time Execution", description: "On-time, hassle-free installation and smooth execution from setup to wrap-up." },
  { title: "Fully Customisable", description: "Custom colours, sizes, shapes, and branding options to suit every theme and event." },
  { title: "Client Satisfaction", description: "150+ brands, institutions, and families who return because the result felt effortless." },
  { title: "Expert Team", description: "An experienced in-house team plus a vetted network of support vendors on call." },
  { title: "Full Spectrum", description: "Equally fluent in private weddings, corporate summits, and large-format public events." },
];

export const testimonials = [
  {
    quote:
      "They understood both the emotion and the logistics of our wedding weekend. Every function felt effortless — and the decor looked straight out of a magazine.",
    author: "Wedding Family · Mumbai",
  },
  {
    quote:
      "The execution discipline and stage production made our conference feel premium at every touchpoint. Stakeholder feedback was unanimous.",
    author: "Corporate Partner · BSE event",
  },
  {
    quote:
      "Calm, creative, and quietly precise. Blizzful Pink Eventt delivered a Sangeet that our guests are still talking about.",
    author: "Bride · Thane wedding",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Roka / God Dhana", category: "Roka", location: "Mumbai", src: "/images/events/roka.jpg", ratio: "portrait", description: "An auspicious start — Ganesh blessings, floral garlands, and a soft pink and ivory palette." },
  { id: 2, title: "Engagement Ceremony", category: "Engagement", location: "Mumbai", src: "/images/events/engagement.jpg", ratio: "portrait", description: "Personalised ring plate styling, floral hoops, and an elegant ceremony set." },
  { id: 3, title: "Mehendi Ceremony", category: "Mehendi", location: "Mumbai", src: "/images/events/mehendi-ceremony.jpg", ratio: "portrait", description: "Bridal mehendi captured with floral jewellery, traditional draping, and intimate energy." },
  { id: 4, title: "Mehendi Ki Raat", category: "Mehendi", location: "Mumbai", src: "/images/events/mehendi-decor-1.jpg", ratio: "landscape", description: "A vibrant mehendi tent with marigold canopies, jewel-tone drapes, and lounge seating." },
  { id: 5, title: "Mehendi Vibes", category: "Mehendi", location: "Mumbai", src: "/images/events/mehendi-decor-2.jpg", ratio: "landscape", description: "Day mehendi setup with colourful backdrops, floral festoons, and outdoor staging." },
  { id: 6, title: "Haldi Ceremony", category: "Haldi", location: "Mumbai", src: "/images/events/haldi-decor-1.jpg", ratio: "landscape", description: "Marigold rounds, brass urlis, and yellow drapes shaped for ritual photography." },
  { id: 7, title: "Haldi Setup", category: "Haldi", location: "Mumbai", src: "/images/events/haldi-decor-2.jpg", ratio: "landscape", description: "Sun-lit haldi staging with floral hoops and golden accents for intimate family rituals." },
  { id: 8, title: "Sangeet Night", category: "Sangeet", location: "Mumbai", src: "/images/events/sangeet-decor-1.jpg", ratio: "landscape", description: "A high-energy sangeet stage with jewel drapes, LED, chandeliers, and performance lighting." },
  { id: 9, title: "Sangeet Performances", category: "Sangeet", location: "Mumbai", src: "/images/events/sangeet-decor-2.jpg", ratio: "landscape", description: "Walk-through floral pathway leading guests into a glittering sangeet hall." },
  { id: 10, title: "Wedding Mandap", category: "Wedding", location: "Mumbai", src: "/images/events/wedding-stage-1.jpg", ratio: "landscape", description: "Ivory and blush mandap with cascading florals, candles, and pillar styling." },
  { id: 11, title: "Wedding Reception", category: "Wedding", location: "Mumbai", src: "/images/events/wedding-stage-2.jpg", ratio: "landscape", description: "Reception stage with backlit drapery, floral arches, and chandelier hospitality." },
  { id: 12, title: "Wedding / Shaadi", category: "Wedding", location: "Mumbai", src: "/images/events/wedding-shaadi.jpg", ratio: "portrait", description: "Outdoor mandap framed by florals and silk drapes for a golden-hour ceremony." },
];

export const galleryCategories: GalleryCategory[] = [
  "Wedding",
  "Mehendi",
  "Haldi",
  "Sangeet",
  "Engagement",
  "Roka",
  "Corporate",
];

export const heroSlides = [
  "/images/events/wedding-stage-1.jpg",
  "/images/events/wedding-stage-2.jpg",
  "/images/events/sangeet-decor-1.jpg",
];
