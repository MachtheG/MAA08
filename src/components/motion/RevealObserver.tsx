"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal]:not([data-revealed]), [data-stamp]:not([data-revealed]), [data-count]:not([data-counted])";

/**
 * One IntersectionObserver for the whole site (cheaper than one per element
 * on a mid-range phone). Marks entering elements with `data-revealed` — an
 * attribute React never manages, so a re-render (e.g. a language switch)
 * can't strip it and hide content again.
 *
 * Elements carrying `data-count="1997"` count up to that figure once.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const motion = root.hasAttribute("data-motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-count")) countUp(el, motion);
          el.setAttribute("data-revealed", "");
          io.unobserve(el);
        }
      },
      // threshold 0: tall elements count as soon as any part shows.
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );

    const scan = () => document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => io.observe(el));
    scan();
    root.setAttribute("data-reveal-ready", "");

    // Client navigation and language switches mount new elements.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}

/** Counts a figure up once, from 99.2% of its value (1997 starts at 1981). */
function countUp(el: HTMLElement, motion: boolean) {
  el.setAttribute("data-counted", "");
  const target = Number(el.dataset.count);
  if (!motion || !Number.isFinite(target)) return;
  const from = Math.round(target * 0.992);
  const start = performance.now();
  const duration = 900;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = String(Math.round(from + (target - from) * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
