"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

const VARIANTS = {
  fade: {
    opacity: "0",
    transform: "translateY(48px)",
    filter: "blur(6px)",
    transition:
      "opacity 1s cubic-bezier(.2,.8,.2,1), transform 1.1s cubic-bezier(.2,.8,.2,1), filter 1s ease",
  },
  // A bouncier entrance for one-off, personal moments (currently just the
  // family photo) — scales/lifts in with an overshoot ease instead of the
  // sober fade+blur used everywhere else. Any permanent tilt/rotation
  // belongs on a child element, since this writes `transform` on reveal.
  pop: {
    opacity: "0",
    transform: "scale(.82) translateY(36px)",
    filter: "none",
    transition: "opacity .6s ease, transform .9s cubic-bezier(.34,1.56,.64,1)",
  },
} as const;

export function Reveal({
  children,
  delay = 0,
  variant = "fade",
  className,
}: {
  children: ReactNode;
  delay?: number;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Anything already in view when the page loads (anchor jumps, reload
    // mid-page) must be visible immediately — never left hidden.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    Object.assign(el.style, VARIANTS[variant]);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return;
        io.disconnect();
        window.setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "none";
        }, delay);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
