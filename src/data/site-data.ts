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
  email: "contact@blizzfulpinkeventt.com",
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
  {
    title: "Product Launches & Brand Reveals",
    description: "High-impact product unveilings, brand activations, immersive walk-throughs, and signature reveal moments engineered for press and social capture.",
  },
  {
    title: "Hospitality & Guest Management",
    description: "VIP coordination, registration desks, guest journeys, on-site check-in flows, and protocol-grade hospitality from arrival to departure.",
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
  { title: "Photo Albums & Wedding Books", description: "Premium printed albums, curated storybooks, and bespoke memory boxes designed as heirlooms long after the day ends." },
];

export const featuredExperiences: Experience[] = [
  {
    title: "Wedding Celebrations",
    description: "Multi-function celebrations built around family rituals, fashion, music, floral styling, and emotional staging.",
    points: ["Roka / God Dhana", "Engagement", "Mehendi", "Haldi", "Sangeet", "Wedding / Shaadi"],
  },
  {
    title: "Corporate Productions",
    description: "Professional environments where production discipline, stakeholder coordination, and brand presentation matter.",
    points: ["Exhibitions", "Expos", "Summits", "Conclaves", "Product Launches", "Conferences"],
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

export type Partner = {
  name: string;
  logo?: string;       // Path to logo image — preferred when available
  domain?: string;     // (Legacy) favicon-based source (no longer used)
  monogram?: string;   // Fallback monogram letters when no logo is available
  color?: string;      // Brand-colour for monogram chip background
};

export type PartnerGroup = {
  id: string;
  label: string;
  subtitle: string;
  partners: Partner[];
};

export const partnerGroups: PartnerGroup[] = [
  {
    id: "institutional",
    label: "Government & Institutional",
    subtitle: "Public, regulatory, and institutional partners",
    partners: [
      { name: "Maharashtra Shasan",          logo: "/images/partners/logos/maharashtra-shasan.png",      monogram: "MS",  color: "#b8923a" },
      { name: "Mahalaxmi Saras",              logo: "/images/partners/logos/mahalaxmi-saras.png",         monogram: "MS",  color: "#7a1f2b" },
      { name: "MAVIM",                        logo: "/images/partners/logos/mavim.png",                   monogram: "MV",  color: "#c0392b" },
      { name: "Khadi India",                                                                              monogram: "KI",  color: "#1e5a8c" },
      { name: "MSME & Startups Forum",        logo: "/images/partners/logos/msme-startups-forum.png",     monogram: "MSF", color: "#2e7d32" },
      { name: "WISE / SNDTWU Incubation",     logo: "/images/partners/logos/wise-sndtwu-incubation.png",  monogram: "W",   color: "#0277bd" },
      { name: "Women & Child Development",    logo: "/images/partners/logos/women-child-development.png", monogram: "WC",  color: "#c2185b" },
      { name: "KVIC",                         logo: "/images/partners/logos/kvic.png",                    monogram: "KV",  color: "#37474f" },
      { name: "Entrepreneurship Dev. Institute", logo: "/images/partners/logos/edi-ahmedabad.png",        monogram: "EDI", color: "#388e3c" },
      { name: "Ratan Tata Skills University", logo: "/images/partners/logos/ratan-tata-skills-uni.png",   monogram: "RT",  color: "#9c2731" },
      { name: "MSSU i-Spark Foundation",      logo: "/images/partners/logos/mssu-ispark-foundation.png",  monogram: "iS",  color: "#ef6c00" },
      { name: "BSE",                          logo: "/images/partners/logos/bse.png",                     monogram: "BS",  color: "#1d3a78" },
      { name: "NSE",                          logo: "/images/partners/logos/nse.png",                     monogram: "NS",  color: "#f47922" },
      { name: "CII",                          logo: "/images/partners/logos/cii.png",                     monogram: "CII", color: "#2c3e50" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate & Enterprise",
    subtitle: "Marquee corporate offices & brands",
    partners: [
      { name: "Tata Motors",             logo: "/images/partners/logos/tata-motors.png",        monogram: "T",   color: "#1c4596" },
      { name: "Adani",                   logo: "/images/partners/logos/adani.png",              monogram: "AD",  color: "#1a3a8a" },
      { name: "Oracle",                  logo: "/images/partners/logos/oracle.png",             monogram: "O",   color: "#c74634" },
      { name: "Amazon",                  logo: "/images/partners/logos/amazon.png",             monogram: "A",   color: "#232f3e" },
      { name: "Adobe",                   logo: "/images/partners/logos/adobe.png",              monogram: "Ad",  color: "#fa0f00" },
      { name: "IBM",                     logo: "/images/partners/logos/ibm.png",                monogram: "IB",  color: "#1f70c1" },
      { name: "Kotak Mahindra Bank",     logo: "/images/partners/logos/kotak-mahindra.png",     monogram: "K",   color: "#ed2a37" },
      { name: "DBS Bank",                logo: "/images/partners/logos/dbs-bank.png",           monogram: "DBS", color: "#b21e23" },
      { name: "Razorpay",                logo: "/images/partners/logos/razorpay.png",           monogram: "R",   color: "#0c2451" },
      { name: "Morningstar",             logo: "/images/partners/logos/morningstar.png",        monogram: "M",   color: "#e63946" },
      { name: "Franklin Templeton",      logo: "/images/partners/logos/franklin-templeton.png", monogram: "FT",  color: "#003c69" },
      { name: "Towers Watson",           logo: "/images/partners/logos/towers-watson.png",      monogram: "TW",  color: "#702082" },
      { name: "NTPC",                    logo: "/images/partners/logos/ntpc.png",               monogram: "NT",  color: "#0d4f8b" },
      { name: "IFAD",                    logo: "/images/partners/logos/ifad.png",               monogram: "IF",  color: "#2e7d32" },
      { name: "MentorMyBoard",           logo: "/images/partners/logos/mentormyboard.png",      monogram: "MMB", color: "#ed7d31" },
      { name: "Tisser",                  logo: "/images/partners/logos/tisser.png",             monogram: "Ti",  color: "#9b2c2c" },
      { name: "Global Inclusion Summit", logo: "/images/partners/logos/global-inclusion-summit.png", monogram: "GI", color: "#16a085" },
      { name: "VyapaarJagat",            logo: "/images/partners/logos/vyapaarjagat.png",       monogram: "VJ",  color: "#dc143c" },
      { name: "News India",              logo: "/images/partners/logos/news-india.png",         monogram: "N1",  color: "#c53030" },
      { name: "Times Now",               logo: "/images/partners/logos/times-now.png",          monogram: "TN",  color: "#cf0c1a" },
      { name: "ALT Balaji",              logo: "/images/partners/logos/alt-balaji.png",         monogram: "AB",  color: "#1a1a1a" },
      { name: "OLA",                     logo: "/images/partners/logos/ola.png",                monogram: "O",   color: "#92c83e" },
      { name: "airCTO",                  logo: "/images/partners/logos/aircto.png",             monogram: "aC",  color: "#ff5252" },
      { name: "Flipkart",                logo: "/images/partners/logos/flipkart.png",           monogram: "F",   color: "#2874f0" },
      { name: "Zolve",                   logo: "/images/partners/logos/zolve.png",              monogram: "Z",   color: "#e63b2e" },
      { name: "Unacademy",               logo: "/images/partners/logos/unacademy.png",          monogram: "U",   color: "#08bd80" },
      { name: "XLRI",                    logo: "/images/partners/logos/xlri.png",               monogram: "XL",  color: "#1d3a78" },
      { name: "Rajagiri Business Studies", logo: "/images/partners/logos/rcbs.png",             monogram: "RC",  color: "#1a472a" },
    ],
  },
  {
    id: "luxury",
    label: "Lifestyle & Luxury",
    subtitle: "Premium lifestyle, jewellery, and design partners",
    partners: [
      { name: "GIA",                  logo: "/images/partners/logos/gia.png",         monogram: "GIA", color: "#0a3d62" },
      { name: "Senco Gold & Diamonds", logo: "/images/partners/logos/senco-gold.png", monogram: "SG",  color: "#a02834" },
      { name: "Neha Lulla Jewellery", logo: "/images/partners/logos/neha-lulla.png",  monogram: "N",   color: "#1a1a1a" },
      { name: "Beau Jewels",          logo: "/images/partners/logos/beau-jewels.png", monogram: "BJ",  color: "#1c2138" },
      { name: "Laja",                 logo: "/images/partners/logos/laja.png",        monogram: "L",   color: "#c98a8a" },
      { name: "SAP / JLP",            logo: "/images/partners/logos/sap-jlp.png",     monogram: "SAP", color: "#0aa3da" },
    ],
  },
];

// Legacy flat list — kept for backwards compatibility / minor uses
export const partners = partnerGroups.flatMap((g) => g.partners.map((p) => p.name));

export const testimonials = [
  {
    quote:
      "They understood both the emotion and the logistics of our wedding. Every function felt effortless — and the decor looked straight out of a magazine.",
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
  { id: 13, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/1d97e5ae-21cb-4df0-ad9b-36f503e3fa76.JPG", ratio: "landscape", description: "A polished corporate production crafted for impact and brand presence." },
  { id: 14, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/219bce5b-eeee-4983-acb1-a6ff11ef4aaa.JPG", ratio: "landscape", description: "Stage and audience staging designed for engagement and brand alignment." },
  { id: 15, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/22791f3c-620b-4e86-995d-adf34c2773c8.JPG", ratio: "landscape", description: "Corporate summit with curated lighting, branding zones, and executive hospitality." },
  { id: 16, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/2558aa98-e5e5-45aa-b5f4-530dc8570f3e.JPG", ratio: "landscape", description: "A high-impact corporate evening with full AV production and audience experience." },
  { id: 17, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/2724b72f-27d6-4da9-9296-d9d119bb0a48.JPG", ratio: "landscape", description: "Brand activation with immersive set design and presentation-ready staging." },
  { id: 18, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/34f12ebf-5e95-4ca7-bbe5-5ca6ae6ace40.JPG", ratio: "landscape", description: "Conference production with modular staging and professional AV integration." },
  { id: 19, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/48cc05e4-54b1-4dd6-9927-9ea29370c29d.JPG", ratio: "landscape", description: "Executive event featuring elegant décor, branded visuals, and seamless flow." },
  { id: 20, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/4932c628-0385-458a-a245-d1f50380fbf4.JPG", ratio: "landscape", description: "Corporate gala with curated table settings, ambient lighting, and stage presence." },
  { id: 21, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/4a5a7029-5e91-4dda-bfe0-e5a9e8fc939b.JPG", ratio: "landscape", description: "Product launch event with theatrical staging and brand-forward visuals." },
  { id: 22, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/4d34f568-2318-462b-8a1e-17fd2ab381ca.JPG", ratio: "landscape", description: "Town hall setup with premium audience seating and full-scale screen production." },
  { id: 23, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/50567608-6504-48a1-84d4-38469fade5f7.JPG", ratio: "landscape", description: "Awards ceremony production with dynamic lighting and podium staging." },
  { id: 24, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/5b222d11-94de-4377-801c-20192ca72599.JPG", ratio: "landscape", description: "Large-format corporate event with brand immersion and curated guest experience." },
  { id: 25, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/67065c09-6d63-4de5-9e4d-1bf6180da27f.JPG", ratio: "landscape", description: "Corporate networking event with sophisticated décor and smooth logistics." },
  { id: 26, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/848088cd-db6c-4442-b7c5-c6b9d12c82a8.JPG", ratio: "landscape", description: "Summit production featuring panoramic staging and high-definition visual displays." },
  { id: 27, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/87c4e393-7ae6-4940-b0f6-67635170e799.JPG", ratio: "landscape", description: "Incentive evening with premium hospitality, entertainment, and event design." },
  { id: 28, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/8b4ba827-74ac-47dc-a3df-0812400c35c4.JPG", ratio: "landscape", description: "Boardroom-level production with crisp branding and refined event aesthetics." },
  { id: 29, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/912faca1-4289-4c74-99b6-0687c7058e20.JPG", ratio: "landscape", description: "Annual day celebration with full-stage production and audience engagement." },
  { id: 30, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/a1f7e865-f35f-4e52-9cff-6b8c562ab811.JPG", ratio: "landscape", description: "Corporate launch event with immersive lighting, signage, and live production." },
  { id: 31, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/a367b5c1-8d9f-429b-a38e-22ed791b209a.JPG", ratio: "landscape", description: "Brand summit with keynote staging, sponsor zones, and premium guest management." },
  { id: 32, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/ab068913-95b9-4220-8184-5807e0a0ef2d.JPG", ratio: "landscape", description: "Corporate cultural evening with thematic décor and curated entertainment." },
  { id: 33, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/ac701b11-821b-4413-af6c-00d1829c01f1.JPG", ratio: "landscape", description: "Conference with modular booth designs, AV staging, and branded entry experience." },
  { id: 34, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/b1e65a8d-b2fd-4d47-a338-21b7f3434292.JPG", ratio: "landscape", description: "Gala dinner with sophisticated table styling, draping, and ambient production." },
  { id: 35, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/cdea32e0-2244-42bf-9c81-f9f6c243c13d.JPG", ratio: "landscape", description: "Multi-day corporate event with venue transformation and end-to-end management." },
  { id: 36, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/ceb61dfd-c625-4adc-9d18-27a9fc725b99.JPG", ratio: "landscape", description: "Brand reveal event with high-energy staging and theatrical visual production." },
  { id: 37, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/cf6ae18a-29ff-4013-b3b5-75d8bae2fb89.JPG", ratio: "landscape", description: "Corporate awards night with red carpet, trophy presentation, and stage glamour." },
  { id: 38, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/d4771a9c-57b0-4f96-8c58-0e1d4c66a47e.JPG", ratio: "landscape", description: "Product showcase event with interactive installations and live demonstration setup." },
  { id: 39, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/d7a2c889-62bc-4914-9bdc-3eb04481c0da.JPG", ratio: "landscape", description: "Corporate team-building event with experiential design and curated activations." },
  { id: 40, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/d7e18b99-07f6-48e9-a376-3ae08eafd3f5.JPG", ratio: "landscape", description: "Executive retreat production with premium hospitality and tailored logistics." },
  { id: 41, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/dca3b9aa-4afc-446d-a734-0fbddb25c013.JPG", ratio: "landscape", description: "Institutional event featuring grand staging, live feeds, and formal ceremony design." },
  { id: 42, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/defc21e3-8dab-4935-8a6b-734cf4232d93.JPG", ratio: "landscape", description: "Corporate festival with immersive brand zones and large-format audience production." },
  { id: 43, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/f2212a98-c737-4f21-87e8-b2a21a66a522.JPG", ratio: "landscape", description: "Business summit with thought-leadership staging and end-to-end event production." },
  { id: 44, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/f3aaac2f-e201-40e4-9faa-0a72786d046d.JPG", ratio: "landscape", description: "Corporate event with curated guest flow, stage production, and branded experience." },
  { id: 45, title: "Corporate Event", category: "Corporate", location: "Mumbai", src: "/images/events/corporate/fb57eab5-835a-403f-bd32-173add038178.JPG", ratio: "landscape", description: "High-end corporate production with signature lighting, branding, and hospitality." },
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
  "/images/events/corporate-stage.jpg",
  "/images/events/wedding-stage-1.jpg",
  "/images/events/wedding-stage-2.jpg",
];
