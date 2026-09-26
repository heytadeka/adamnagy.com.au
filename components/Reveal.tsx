"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

const HIDDEN_STYLE = {
  opacity: "0",
  transform: "translateY(48px)",
  filter: "blur(6px)",
  transition:
    "opacity 1s cubic-bezier(.2,.8,.2,1), transform 1.1s cubic-bezier(.2,.8,.2,1), filter 1s ease",
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
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

    Object.assign(el.style, HIDDEN_STYLE);

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
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
