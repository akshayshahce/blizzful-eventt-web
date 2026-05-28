import type { Metadata } from "next";
import Link from "next/link";
import { FiInstagram, FiMail, FiPhone, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Wisteria } from "@/components/ui/wisteria";
import { company } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Contact",
};

const detailRows = [
  { label: "Studio", value: "Mumbai · Pan-India productions" },
  { label: "Hours", value: "Monday – Saturday · 10am – 8pm IST" },
  { label: "Response", value: "Within 24 hours · WhatsApp or email" },
  { label: "Best suited for", value: "Weddings · Mehendi · Haldi · Sangeet · Corporate" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Begin with the vision. We will shape the rest."
        italicWord="vision"
        description="Share the event, the format, and the feeling you want. The studio will return with a calm, considered path forward."
        image="/images/events/wedding-stage-2.jpg"
        meta="WhatsApp · Email · Phone"
      />

      <section className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--ivory)] sm:py-32 lg:py-36">
        <Wisteria className="absolute -left-12 -top-10 h-80 w-60" opacity={0.32} />
        <Wisteria variant="right" className="absolute -right-12 -top-10 h-80 w-60" opacity={0.32} />
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.46em] text-[var(--wisteria-deep)]">
                  <span className="editorial-rule" />
                  Reach the studio
                </div>
                <h2 className="mt-8 font-display text-4xl leading-[1.02] tracking-tight text-[var(--ivory)] sm:text-5xl lg:text-[4.2rem]">
                  Quiet, considered,
                  <br />
                  <span className="font-script italic text-[var(--wisteria-deep)]">always answered</span>.
                </h2>
                <p className="mt-7 max-w-xl text-[1rem] leading-[1.9] text-[var(--ink)]/72">
                  Whether you&apos;re at the brief stage or selecting between
                  finalists, the studio is reachable directly — no forms, no
                  funnels.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-2">
                <Reveal>
                  <a
                    href={`tel:${company.phone[0].replace(/\s+/g, "")}`}
                    className="group flex items-center justify-between gap-4 border-t border-[var(--ivory)]/10 py-6 transition-all duration-500 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-5">
                      <FiPhone className="h-4 w-4 text-[var(--wisteria-deep)]" />
                      <span className="font-display text-2xl tracking-tight text-[var(--ivory)] sm:text-3xl">
                        {company.phone[0]}
                      </span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 text-[var(--ivory)]/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </Reveal>
                <Reveal delay={0.05}>
                  <a
                    href={`tel:${company.phone[1].replace(/\s+/g, "")}`}
                    className="group flex items-center justify-between gap-4 border-t border-[var(--ivory)]/10 py-6 transition-all duration-500 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-5">
                      <FiPhone className="h-4 w-4 text-[var(--wisteria-deep)]" />
                      <span className="font-display text-2xl tracking-tight text-[var(--ivory)] sm:text-3xl">
                        {company.phone[1]}
                      </span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 text-[var(--ivory)]/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </Reveal>
                <Reveal delay={0.1}>
                  <a
                    href={`mailto:${company.email}`}
                    className="group flex items-center justify-between gap-4 border-t border-[var(--ivory)]/10 py-6 transition-all duration-500 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-5">
                      <FiMail className="h-4 w-4 text-[var(--wisteria-deep)]" />
                      <span className="font-display text-2xl tracking-tight text-[var(--ivory)] sm:text-3xl">
                        {company.email}
                      </span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 text-[var(--ivory)]/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </Reveal>
                <Reveal delay={0.15}>
                  <Link
                    href={`https://instagram.com/${company.instagram}`}
                    target="_blank"
                    className="group flex items-center justify-between gap-4 border-y border-[var(--ivory)]/10 py-6 transition-all duration-500 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-5">
                      <FiInstagram className="h-4 w-4 text-[var(--wisteria-deep)]" />
                      <span className="font-display text-2xl tracking-tight text-[var(--ivory)] sm:text-3xl">
                        @{company.instagram}
                      </span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 text-[var(--ivory)]/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
            </div>

            <Reveal className="lg:col-span-5" delay={0.2}>
              <div className="rounded-[1.8rem] border border-[var(--ivory)]/8 bg-[rgba(255,255,255,0.04)] p-9 sm:p-11">
                <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
                  Studio Details
                </p>
                <div className="mt-9 space-y-7">
                  {detailRows.map((row) => (
                    <div key={row.label}>
                      <p className="text-[0.58rem] uppercase tracking-[0.36em] text-[var(--ink)]/50">
                        {row.label}
                      </p>
                      <p className="mt-2 text-[0.96rem] leading-[1.85] text-[var(--ivory)]/85">
                        {row.value}
                      </p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.36em] text-[var(--ink)]/50">
                      Based in
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-[0.96rem] leading-[1.85] text-[var(--ivory)]/85">
                      <FiMapPin className="h-4 w-4 text-[var(--wisteria-deep)]" />
                      {company.location}
                    </p>
                  </div>
                </div>
                <p className="mt-10 text-sm leading-[1.85] text-[var(--ivory)]/75">
                  We hold capacity for a limited number of weddings and corporate
                  productions each year. Inquiries are reviewed in the order they
                  are received.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
