import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { ClientShell } from "@/components/ui/client-shell";
import { PageTransition } from "@/components/ui/page-transition";

const inter = Inter({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blizzful Pink Eventt | Wedding & Corporate Event Planner",
    template: "%s — Blizzful Pink Eventt",
  },
  description:
    "Blizzful Pink Eventt is a Mumbai-based wedding and event management studio crafting elegant weddings, mehendi, haldi, sangeet, and large-scale corporate productions.",
  keywords: [
    "Blizzful Pink Eventt",
    "wedding planner Mumbai",
    "event management",
    "destination weddings",
    "corporate events",
    "mehendi haldi sangeet",
    "Mumbai wedding planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // The inline theme-bootstrap script in <head> sets `data-theme` on <html>
      // before hydration, intentionally creating a mismatch with the SSR HTML
      // (which has no `data-theme`). Suppress the warning for this element
      // only — the rest of the tree must still match.
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
    >
      <head>
        {/* Theme bootstrap — runs synchronously before first paint so the
            persisted choice (or no-preference default) wins without a flash
            of the wrong theme. Stays inline because external scripts can't
            beat the first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('blizzful-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <ClientShell />
        <SiteHeader />
        <PageTransition>
          <main>{children}</main>
          <SiteFooter />
        </PageTransition>
      </body>
    </html>
  );
}
