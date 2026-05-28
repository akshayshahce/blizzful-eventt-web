"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Full label e.g. "150+", "10+", "$25K". The numeric portion is animated;
   *  any leading prefix or trailing suffix is preserved verbatim. */
  value: string;
  /** Animation duration in seconds. Default 1.8s. */
  duration?: number;
  /** Optional class forwarded onto the wrapping <span>. */
  className?: string;
};

// Pull the numeric portion plus any prefix/suffix out of a label string.
// "150+" → { prefix: "", target: 150, suffix: "+" }
// "$25K" → { prefix: "$", target: 25,  suffix: "K" }
function parseValue(input: string) {
  const match = input.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: input, decimals: 0 };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: Number(num), suffix, decimals };
}

// easeOutCubic — finishes fast then settles
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({ value, duration = 1.8, className }: CountUpProps) {
  const { prefix, target, suffix, decimals } = parseValue(value);

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || target <= 0) return;

    let cancelled = false;
    let rafId = 0;

    // Start the count-up animation immediately when called.
    const start = (delay = 0) => {
      const begin = performance.now() + delay;
      const totalMs = duration * 1000;

      const tick = (now: number) => {
        if (cancelled) return;
        const elapsed = Math.max(0, now - begin);
        const t = Math.min(1, elapsed / totalMs);
        setDisplay(easeOut(t) * target);
        if (t < 1) rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    };

    // If the element is ALREADY in view when this mounts (e.g. it's
    // above-the-fold or the user reloads while scrolled past it), start
    // straight away. Otherwise wait for the IntersectionObserver.
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const alreadyVisible = rect.top < viewportH * 0.92 && rect.bottom > 0;

    let observer: IntersectionObserver | null = null;

    if (alreadyVisible) {
      // tiny delay so the entrance animation feels natural
      start(120);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              start(0);
              observer?.disconnect();
              observer = null;
              break;
            }
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(el);
    }

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [target, duration]);

  const rounded = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rounded}
      {suffix}
    </span>
  );
}
