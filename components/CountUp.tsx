"use client";

import { useEffect, useRef } from "react";

const DURATION = 1800;

function easeOutQuart(p: number) {
  return 1 - Math.pow(1 - p, 4);
}

export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = format(value);
      return;
    }
    // Already scrolled past (above the viewport) — show the final value,
    // don't play a count-up the visitor can no longer see start.
    if (el.getBoundingClientRect().bottom < 0) {
      el.textContent = format(value);
      return;
    }

    let animating = false;
    const animate = () => {
      if (animating) return;
      animating = true;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / DURATION);
        el.textContent = format(value * easeOutQuart(p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return;
        io.disconnect();
        animate();
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${value.toFixed(decimals)}${suffix}`}
    </span>
  );
}
