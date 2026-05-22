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
  | "Weddings"
  | "Mehendi"
  | "Haldi"
  | "Sangeet"
  | "Corporate"
  | "Exhibitions"
  | "Decor";

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
  shortName: "Blizzful Pink",
  tagline: "Luxury weddings and high-impact event experiences, planned with precision.",
  description:
    "Blizzful Pink Eventt is an event management studio balancing emotional wedding storytelling with polished corporate execution across weddings, conferences, exhibitions, hospitality, and experiential celebrations.",
  phone: ["+91 98703 59555", "+91 85919 61749"],
  email: "blizzfulpinkeventt@gmail.com",
  instagram: "blizzfulpinkeventt",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/wedding-events", label: "Wedding Events" },
  { href: "/corporate-events", label: "Corporate Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact-us", label: "Contact" },
];

export const stats: Stat[] = [
  { value: "10+", label: "Years Legacy", detail: "A decade of planning celebrations and business events." },
  { value: "200+", label: "Events Executed", detail: "From intimate ceremonies to full-scale corporate productions." },
  { value: "150+", label: "Brands Served", detail: "Including institutions and marquee corporate offices." },
  { value: "10+", label: "Premium Partners", detail: "Empanelled vendors and hotel relationships for smooth delivery." },
];

export const weddingServices: Service[] = [
  {
    title: "Full Wedding Planning",
    description: "Creative direction, logistics, rituals, guest flow, vendor alignment, and on-ground production for the complete celebration arc.",
  },
  {
    title: "Decor and Floral Styling",
    description: "Statement stages, floral installations, house entrances, ring plate decor, baraat car styling, and atmospheric venue detailing.",
  },
  {
    title: "Photography and Videography",
    description: "Curated capture teams for cinematic portraits, storytelling edits, candid moments, reels, and after-movie production.",
  },
  {
    title: "Hospitality and Guest Experience",
    description: "Arrival planning, family coordination, gifting, room drops, hospitality desk management, and premium event flow support.",
  },
];

export const corporateServices: Service[] = [
  {
    title: "Corporate Conferences and Summits",
    description: "Boardroom meetings, annual gatherings, conclaves, summits, and leadership events designed for clarity and impact.",
  },
  {
    title: "Exhibitions and Trade Shows",
    description: "Expos, exhibition booths, walk-through journeys, stage programming, and brand-first visitor experiences.",
  },
  {
    title: "Stage, LED, Audio and Technical Production",
    description: "Stage builds, LED walls, audiovisual systems, light design, technicians, and cue-based event delivery.",
  },
  {
    title: "Venue, Vendor and Manpower Coordination",
    description: "Venue sourcing, premium hotel coordination, manpower planning, catering, hospitality, and execution control.",
  },
];

export const featuredExperiences: Experience[] = [
  {
    title: "Wedding Weekends",
    description: "Elegant multi-function journeys built around family rituals, fashion, music, floral styling, and emotional staging.",
    points: ["Roka / God Dhana", "Engagement Ceremony", "Mehendi", "Haldi", "Sangeet", "Wedding / Shaadi"],
  },
  {
    title: "Corporate and Institutional Events",
    description: "Professional environments where production discipline, stakeholder coordination, and brand presentation matter.",
    points: ["Conferences", "Summits", "Boardroom Meetings", "Annual General Meetings", "Conclaves", "Employee Engagement"],
  },
  {
    title: "Exhibitions and Public Experiences",
    description: "Scalable environments for visibility, footfall, and audience engagement with strong spatial storytelling.",
    points: ["Exhibitions", "Expos", "Government Events", "Concerts", "Festivals", "Hospitality Activations"],
  },
];

export const coreOfferings: Service[] = [
  {
    title: "Planning and Coordination",
    description: "End-to-end management covering schedules, permissions, run sheets, family or stakeholder coordination, and production oversight.",
  },
  {
    title: "Design and Concept",
    description: "Theme creation, moodboards, stage language, floral palette, guest touchpoints, and visual consistency across every moment.",
  },
  {
    title: "Venue and Vendor Selection",
    description: "Premium hotel partnerships, decor teams, technicians, photographers, caterers, linen, furniture, and specialized specialists.",
  },
  {
    title: "Marketing and Exposure",
    description: "For corporate formats: branding zones, sponsor visibility, exhibition presentation, and audience-facing event polish.",
  },
  {
    title: "Furniture and Event Infrastructure",
    description: "Elegant chairs, sofas, banquet furniture, cocktail tables, buffet setups, conference tables, and premium linens and fabrics.",
  },
  {
    title: "Optional Decor Enhancements",
    description: "Fresh and artificial floral layers, branding customizations, color/material selection, and premium spatial finishing touches.",
  },
];

export const reasonsToChooseUs = [
  "Premium quality execution at competitive rates.",
  "On-time installation and hassle-free end-to-end management.",
  "Custom colours, sizes, shapes, and branding-ready solutions.",
  "Experienced vendor network with responsive support teams.",
  "Balanced expertise across weddings, hospitality, and corporate events.",
  "Trusted by 150+ brands, institutions, and private clients.",
];

export const testimonials = [
  {
    quote: "They understand both emotion and logistics. Our functions felt effortless from family coordination to the final wedding reveal.",
    author: "Wedding Client Placeholder",
  },
  {
    quote: "The execution quality, technical discipline, and vendor control made our conference feel polished at every touchpoint.",
    author: "Corporate Client Placeholder",
  },
  {
    quote: "Blizzful Pink Eventt brought style, calm, and speed. The decor looked premium and the production team stayed sharp throughout.",
    author: "Exhibition Partner Placeholder",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Velvet Vows", category: "Weddings", location: "Mumbai", src: "/images/gallery/wedding-1.svg", ratio: "portrait", description: "Layered ceremony styling with warm candlelight tones and a couture aisle perspective." },
  { id: 2, title: "Floral Courtyard", category: "Mehendi", location: "Thane", src: "/images/gallery/mehendi-1.svg", ratio: "square", description: "A playful mehendi setting softened with floral rhythm and lounge-driven guest flow." },
  { id: 3, title: "Sunlit Rituals", category: "Haldi", location: "Navi Mumbai", src: "/images/gallery/haldi-1.svg", ratio: "portrait", description: "Golden ritual staging shaped for intimate energy, texture, and daylight photography." },
  { id: 4, title: "Midnight Rhythm", category: "Sangeet", location: "Mumbai", src: "/images/gallery/sangeet-1.svg", ratio: "landscape", description: "Performance-focused lighting, stage composition, and movement-first celebration atmosphere." },
  { id: 5, title: "Leadership Forum", category: "Corporate", location: "BKC", src: "/images/gallery/corporate-1.svg", ratio: "landscape", description: "An executive format built around brand clarity, technical precision, and premium hosting." },
  { id: 6, title: "Brand Showcase", category: "Exhibitions", location: "Jio World", src: "/images/gallery/exhibition-1.svg", ratio: "portrait", description: "Exhibition storytelling designed for footfall, strong sightlines, and sponsor visibility." },
  { id: 7, title: "Garden Reception", category: "Decor", location: "Pune", src: "/images/gallery/decor-1.svg", ratio: "square", description: "A décor-led environment where floral layers and furniture styling define the mood." },
  { id: 8, title: "Ceremony Aisle", category: "Weddings", location: "Lonavala", src: "/images/gallery/wedding-2.svg", ratio: "landscape", description: "A scenic wedding aisle with elevated entry choreography and panoramic framing." },
  { id: 9, title: "Henna Lounge", category: "Mehendi", location: "Alibaug", src: "/images/gallery/mehendi-2.svg", ratio: "portrait", description: "Soft lounge zoning, curated décor, and a social energy that photographs effortlessly." },
  { id: 10, title: "Golden Courtyard", category: "Haldi", location: "Panvel", src: "/images/gallery/haldi-2.svg", ratio: "square", description: "Warm marigold-inspired detailing and an immersive ritual setting for family moments." },
  { id: 11, title: "Stage in Motion", category: "Sangeet", location: "Mumbai", src: "/images/gallery/sangeet-2.svg", ratio: "portrait", description: "High-energy staging with a stronger visual axis for dance, AV, and celebration beats." },
  { id: 12, title: "Executive Dinner", category: "Corporate", location: "Nariman Point", src: "/images/gallery/corporate-2.svg", ratio: "square", description: "A polished hospitality-led environment for business hosting and high-level engagement." },
];

export const galleryCategories: GalleryCategory[] = [
  "Weddings",
  "Mehendi",
  "Haldi",
  "Sangeet",
  "Corporate",
  "Exhibitions",
  "Decor",
];

export const editorialImages = [
  "/images/editorial/editorial-1.svg",
  "/images/editorial/editorial-2.svg",
  "/images/editorial/editorial-3.svg",
];
