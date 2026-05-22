"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { company, navigation } from "@/data/site-data";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 36);
  });

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Container className="pt-4 sm:pt-5">
        <motion.div
          animate={{
            paddingTop: scrolled ? 10 : 16,
            paddingBottom: scrolled ? 10 : 16,
            backgroundColor: scrolled ? "rgba(10,9,8,0.78)" : "rgba(22,18,15,0.34)",
            borderColor: scrolled ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.08)",
            y: 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto rounded-[1.8rem] border shadow-[0_26px_90px_rgba(0,0,0,0.16)] backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between px-4 sm:px-5">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] font-display text-xl">
                B
              </div>
              <div>
                <p className="font-display text-[1.65rem] leading-none">{company.shortName}</p>
                <p className="text-[9px] uppercase tracking-[0.42em] text-white/56">Eventt</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-white/70 transition duration-500 hover:text-white",
                      active && "text-white",
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                        transition={{ type: "spring", stiffness: 220, damping: 28 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              {open ? <HiXMark className="h-6 w-6" /> : <HiBars3BottomRight className="h-6 w-6" />}
            </button>
          </div>
        </motion.div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-auto fixed inset-0 bg-[rgba(8,7,7,0.72)] backdrop-blur-2xl lg:hidden"
          >
            <Container className="flex min-h-screen flex-col justify-between py-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-3xl text-white">{company.shortName}</p>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                >
                  <HiXMark className="h-6 w-6" />
                </button>
              </div>
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.07,
                    },
                  },
                }}
                className="flex flex-col"
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block border-b border-white/8 py-5 font-display text-4xl text-white/80",
                        pathname === item.href && "text-[var(--accent-soft)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <p className="max-w-sm text-sm leading-7 text-white/55">{company.tagline}</p>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
