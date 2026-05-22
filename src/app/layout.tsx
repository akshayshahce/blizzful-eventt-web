import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { ClientShell } from "@/components/ui/client-shell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Blizzful Pink Eventt | Luxury Weddings and Premium Event Experiences",
    template: "%s | Blizzful Pink Eventt",
  },
  description:
    "Luxury wedding planning, corporate event execution, exhibitions, decor styling, hospitality experiences, and cinematic gallery storytelling by Blizzful Pink Eventt.",
  keywords: [
    "Blizzful Pink Eventt",
    "wedding planner",
    "event management company",
    "corporate events",
    "wedding decor",
    "Mumbai event planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <body>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <ClientShell />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
