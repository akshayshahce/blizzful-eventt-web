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
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
    >
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
