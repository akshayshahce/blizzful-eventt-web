"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

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
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -120 },
      wheelMultiplier: 1.05,
      touchMultiplier: 1.4,
    });

    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [prefersReducedMotion]);

  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-[linear-gradient(90deg,transparent,rgba(125,107,176,0.45),rgba(30,58,120,0.85),rgba(125,107,176,0.45),transparent)]"
      style={{ scaleX }}
    />
  );
}

function ScrollToTopButton() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setVisible(latest > 720);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 22, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 22, scale: 0.92 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[rgba(15,22,40,0.85)] text-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white sm:bottom-10 sm:right-10"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function ClientShell() {
  return (
    <>
      <SmoothScrollProvider />
      <ScrollProgress />
      <ScrollToTopButton />
    </>
  );
}
