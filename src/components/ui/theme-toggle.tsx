"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";
const STORAGE_KEY = "blizzful-theme";

/**
 * Pill-style theme switcher.
 *
 * The first paint's theme is decided by the inline script in `layout.tsx`
 * (reads localStorage synchronously, sets `data-theme` on <html>). This
 * component just reads the current attribute on mount and lets the user
 * flip it; it persists the choice and updates the attribute.
 */
export function ThemeToggle({ className }: { className?: string }) {
  // Default to "light" for SSR — the inline pre-paint script will have
  // already corrected the DOM if the persisted value is "dark", and
  // useEffect re-syncs this component's state on mount.
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage blocked — toggle still works for the session */
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className={cn(
        "group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-transparent text-[var(--ivory)] transition-all duration-300 hover:border-[var(--wisteria-deep)] hover:text-[var(--wisteria-deep)]",
        // Hide flickery icon during SSR-to-client sync (one frame).
        !mounted && "opacity-0",
        className,
      )}
    >
      {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  );
}
