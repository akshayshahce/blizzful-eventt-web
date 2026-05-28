"use client";

import Link from "next/link";
import { FiInstagram, FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { company, navigation } from "@/data/site-data";
import { Logo } from "@/components/ui/logo";
import { Wisteria } from "@/components/ui/wisteria";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--sky-soft)] text-[var(--ivory)]">
      <Wisteria className="absolute -left-10 -top-10 h-72 w-56" opacity={0.45} />
      <Wisteria variant="right" className="absolute -right-10 -top-10 h-72 w-56" opacity={0.45} />

      <div className="relative mx-auto w-full max-w-[100rem] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="text-center">
          <div className="mx-auto flex justify-center">
            <Logo />
          </div>
          <p className="mx-auto mt-7 max-w-xl text-[0.98rem] leading-[1.85] text-[var(--ivory)]/60">
            {company.description}
          </p>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-3 lg:gap-16">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
              Navigate
            </p>
            <div className="mt-6 grid gap-3 text-[0.95rem]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline w-fit text-[var(--ivory)]/65 transition-colors hover:text-[var(--ivory)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
              Reach the studio
            </p>
            <div className="space-y-4 text-[0.95rem]">
              {company.phone.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-[var(--ivory)]/65 transition-colors hover:text-[var(--ivory)]"
                >
                  <FiPhone className="h-4 w-4 text-[var(--wisteria-deep)]" />
                  <span className="link-underline">{number}</span>
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-[var(--ivory)]/65 transition-colors hover:text-[var(--ivory)]"
              >
                <FiMail className="h-4 w-4 text-[var(--wisteria-deep)]" />
                <span className="link-underline">{company.email}</span>
              </a>
              <a
                href={`https://instagram.com/${company.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[var(--ivory)]/65 transition-colors hover:text-[var(--ivory)]"
              >
                <FiInstagram className="h-4 w-4 text-[var(--wisteria-deep)]" />
                <span className="link-underline">@{company.instagram}</span>
              </a>
              <div className="flex items-center gap-3 text-[var(--ivory)]/65">
                <FiMapPin className="h-4 w-4 text-[var(--wisteria-deep)]" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[var(--wisteria-deep)]">
              Begin a project
            </p>
            <h3 className="mt-6 font-display text-4xl italic leading-tight text-[var(--ivory)] sm:text-5xl">
              Let&apos;s plan something <span className="font-script not-italic text-[var(--wisteria-deep)]">unforgettable</span>.
            </h3>
            <Link
              href="/contact-us"
              className="group mt-7 inline-flex items-center gap-3 rounded-full border border-[var(--wisteria-deep)] bg-[var(--wisteria-deep)] px-6 py-3 text-[0.66rem] font-medium uppercase tracking-[0.32em] text-white transition-all duration-300 hover:bg-[var(--navy-deep)]"
            >
              Start the conversation
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-[var(--ivory)]/10 pt-7 text-[0.62rem] uppercase tracking-[0.4em] text-[var(--ivory)]/65 sm:flex-row">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>
            Designed by{" "}
            <a
              href="mailto:Akshayshah.ce@gmail.com"
              className="link-underline text-[var(--ivory)] transition-colors hover:text-[var(--wisteria-deep)]"
            >
              Akshay Shah
            </a> · Crafted with love
          </span>
        </div>
      </div>
    </footer>
  );
}
