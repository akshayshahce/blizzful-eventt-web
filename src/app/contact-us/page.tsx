import type { Metadata } from "next";
import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { company } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start with the event vision. We will shape the rest."
        description="The profile documents provide direct contact details, which are retained here and presented with a more premium inquiry experience."
      />
      <section className="bg-[linear-gradient(180deg,#090807,#15110e)] py-24 text-white sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft)]">Direct Contact</p>
            <div className="mt-6 space-y-5 text-base text-white">
              <a href={`tel:${company.phone[0].replace(/\s+/g, "")}`} className="flex items-center gap-4">
                <FiPhoneCall className="h-5 w-5 text-[var(--accent-soft)]" />
                <span>{company.phone.join(" | ")}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-4">
                <FiMail className="h-5 w-5 text-[var(--accent-soft)]" />
                <span>{company.email}</span>
              </a>
              <a
                href={`https://instagram.com/${company.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <FiInstagram className="h-5 w-5 text-[var(--accent-soft)]" />
                <span>@{company.instagram}</span>
              </a>
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft)]">Inquiry Flow</p>
            <h2 className="mt-4 font-display text-6xl leading-[0.92]">Phase 1 keeps the contact layer intentionally simple.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              There is no backend form, database, or CMS in this phase by request. The site is ready for Phase 2 integrations such as Google Drive, Cloudinary, or protected upload workflows without requiring a structural redesign.
            </p>
            <div className="mt-8 space-y-3 text-sm uppercase tracking-[0.2em] text-white/68">
              <p>Preferred next step: WhatsApp or phone intro</p>
              <p>Secondary step: email brief with date, city, guest size, and event type</p>
              <p>Ideal for: weddings, mehendi, haldi, sangeet, conferences, exhibitions, decor, hospitality activations</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
