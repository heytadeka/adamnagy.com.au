"use client";

import { useEffect } from "react";

/**
 * Drives every continuous, scroll-position-derived visual: hero parallax,
 * the fixed background gradient, nav visibility and the active nav link.
 * These are written straight to the DOM (bypassing React state) because
 * they update on every scroll frame — the same tradeoff the original
 * vanilla prototype made, and for the same reason.
 */
export function ScrollChoreography() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hero = document.getElementById("top");
    const heroImg = document.querySelector<HTMLElement>("[data-hero-img]");
    const heroTexts = document.querySelectorAll<HTMLElement>("[data-hero-text]");
    const nav = document.querySelector<HTMLElement>("[data-nav]");
    const navLinks = document.querySelectorAll<HTMLElement>("[data-navlink]");
    const bg = document.getElementById("bg-layer");
    const sections = ["who", "work", "video", "talk"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let navShown = false;
    let activeId: string | null = null;
    let ticking = false;

    function update() {
      ticking = false;
      const H = window.innerHeight;

      if (hero) {
        const hb = hero.getBoundingClientRect();

        if (heroImg && !reduceMotion) {
          const t = Math.min(1, Math.max(0, -hb.top / hb.height));
          heroImg.style.transform = `translateY(${t * 18}%) scale(${1 + t * 0.08})`;
          heroTexts.forEach((el) => {
            el.style.transform = `translateY(${-t * 120}px)`;
            el.style.opacity = String(Math.max(0, 1 - t * 1.6));
          });
        }

        if (nav) {
          const show = hb.bottom < H * 0.6;
          if (show !== navShown) {
            navShown = show;
            nav.dataset.visible = show ? "true" : "false";
          }
        }
      }

      if (bg && !reduceMotion) {
        const scrollable = Math.max(1, document.documentElement.scrollHeight - H);
        const p = Math.min(1, Math.max(0, window.scrollY / scrollable));
        const x = 15 + p * 70;
        const y = 20 + p * 60;
        const alpha = Math.round((0.05 + p * 0.1) * 255)
          .toString(16)
          .padStart(2, "0");
        // Hardcoded to match --accent / --bg in globals.css: appending an alpha
        // suffix onto a var() token isn't valid CSS, so this needs the raw hex.
        bg.style.background = `radial-gradient(70% 60% at ${x}% ${y}%, #f4a261${alpha}, transparent 70%), radial-gradient(50% 50% at ${100 - x}% ${100 - y * 0.6}%, rgba(120,130,160,${0.04 + p * 0.05}), transparent 70%), linear-gradient(180deg, #0a0a0a, ${p > 0.5 ? "#0d0b09" : "#0a0a0a"})`;
      }

      let active: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top < H * 0.45) active = section.id;
      }
      if (active !== activeId) {
        activeId = active;
        navLinks.forEach((link) => {
          link.dataset.active = link.dataset.navlink === active ? "true" : "false";
        });
      }
    }

    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return null;
}
