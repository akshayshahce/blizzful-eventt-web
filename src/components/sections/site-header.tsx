"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { company, navigation } from "@/data/site-data";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 30);
    if (latest > previous && latest > 220) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? -120 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-colors duration-500",
          scrolled
            ? "bg-[var(--header-scrolled-bg)] backdrop-blur-xl shadow-[var(--header-scrolled-shadow)] border-b border-[var(--border)]"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[100rem] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12",
            scrolled ? "py-3" : "py-5",
          )}
        >
          <Link href="/" aria-label="Blizzful Pink Eventt — Home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.slice(1, 7).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-[0.74rem] font-medium uppercase tracking-[0.28em] transition-colors duration-300",
                    active
                      ? "text-[var(--ivory)]"
                      : "text-[var(--ivory)]/75 hover:text-[var(--ivory)]",
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active ? (
                    <motion.span
                      layoutId="nav-marker"
                      className="absolute left-1/2 top-full -translate-x-1/2 h-[2px] w-5 bg-[var(--wisteria-deep)]"
                      transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phone[0].replace(/\s+/g, "")}`}
              className="hidden items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[var(--ivory)]/70 transition-colors hover:text-[var(--ivory)] xl:inline-flex"
            >
              <FiPhone className="h-3.5 w-3.5" />
              {company.phone[0]}
            </a>
            <ThemeToggle />
            <Link
              href="/contact-us"
              className="hidden items-center gap-2 rounded-full border border-[var(--navy)] bg-[var(--navy)] px-5 py-2.5 text-[0.66rem] font-medium uppercase tracking-[0.32em] text-white transition-all duration-300 hover:bg-[var(--navy-deep)] hover:border-[var(--navy-deep)] sm:inline-flex"
            >
              Plan with us
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ivory)]/25 text-[var(--ivory)] transition-colors duration-300 hover:border-[var(--ivory)]/50 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3 w-5">
                <motion.span
                  className="absolute left-0 right-0 h-px bg-current"
                  animate={open ? { top: 6, rotate: 45 } : { top: 0, rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute left-0 right-0 h-px bg-current"
                  animate={open ? { top: 6, rotate: -45 } : { top: 12, rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-[var(--sky-soft)] text-[var(--ivory)] lg:hidden"
          >
            <div className="relative mx-auto flex h-full w-full max-w-[100rem] flex-col px-5 pb-12 pt-28 sm:px-8">
              <Link href="/" onClick={() => setOpen(false)}>
                <Logo />
              </Link>

              <motion.nav
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                }}
                className="mt-12 flex flex-col"
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="border-t border-[var(--navy)]/15 last:border-b"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-5"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-[var(--wisteria-deep)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl",
                            pathname === item.href && "italic text-[var(--wisteria-deep)]",
                          )}
                        >
                          {item.label}
                        </span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <div className="mt-10 space-y-3 text-sm">
                <a href={`mailto:${company.email}`} className="block text-base text-[var(--ivory)]/80 hover:text-[var(--ivory)]">
                  {company.email}
                </a>
                <a href={`tel:${company.phone[0].replace(/\s+/g, "")}`} className="block text-base text-[var(--ivory)]/80 hover:text-[var(--ivory)]">
                  {company.phone[0]}
                </a>
                <a
                  href={`https://instagram.com/${company.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base text-[var(--ivory)]/80 hover:text-[var(--ivory)]"
                >
                  @{company.instagram}
                </a>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-[var(--ivory)]/12 pt-6 text-[0.58rem] uppercase tracking-[0.4em] text-[var(--ivory)]/65">
                <span>Mumbai · Pan-India</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
