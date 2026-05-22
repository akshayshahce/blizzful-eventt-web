import Link from "next/link";
import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import { company, navigation } from "@/data/site-data";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[linear-gradient(180deg,#0f0c0b,#080706)] text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-soft)]">Blizzful Pink Eventt</p>
          <h3 className="font-display text-4xl">Crafted to feel cinematic, delivered with discipline.</h3>
          <p className="max-w-xl text-sm leading-7 text-white/68">{company.description}</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-white/44">Navigate</p>
          <div className="grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-white/44">Contact</p>
          <a href={`tel:${company.phone[0].replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm text-white/72">
            <FiPhoneCall className="h-4 w-4 text-[var(--accent-soft)]" />
            {company.phone.join("  |  ")}
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-sm text-white/72">
            <FiMail className="h-4 w-4 text-[var(--accent-soft)]" />
            {company.email}
          </a>
          <a
            href={`https://instagram.com/${company.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-white/72"
          >
            <FiInstagram className="h-4 w-4 text-[var(--accent-soft)]" />
            @{company.instagram}
          </a>
        </div>
      </Container>
    </footer>
  );
}
