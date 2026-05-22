"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function SmoothScrollProvider() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.085,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px origin-left bg-[linear-gradient(90deg,rgba(223,204,176,0),rgba(223,204,176,0.9),rgba(196,142,102,0.95),rgba(223,204,176,0))]"
      style={{ scaleX }}
    />
  );
}

function ScrollToTopButton() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setVisible(latest > 640);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-[rgba(18,14,12,0.82)] text-[var(--accent-soft)] shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[rgba(18,14,12,0.94)] sm:bottom-8 sm:right-8"
          aria-label="Scroll to top"
        >
          <FiArrowUpRight className="h-5 w-5 -rotate-45" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function LuxuryCursor() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const tx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 });
  const ty = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.dataset.cursor = "luxury";

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      delete document.body.dataset.cursor;
      window.removeEventListener("mousemove", handleMove);
    };
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-14 w-14 rounded-full border border-[rgba(240,226,203,0.25)] bg-[radial-gradient(circle,rgba(240,226,203,0.18),rgba(240,226,203,0.02)_55%,transparent_72%)] mix-blend-screen md:block"
      style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
    />
  );
}

export function ClientShell() {
  return (
    <>
      <SmoothScrollProvider />
      <ScrollProgress />
      <LuxuryCursor />
      <ScrollToTopButton />
    </>
  );
}
