"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const SCROLL_LINKS = [
  { id: "video", label: "THE VIDEO" },
  { id: "who", label: "WHO I AM" },
  { id: "work", label: "THE WORK" },
];

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const homeHash = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);
  const linksRef = useRef<HTMLDivElement>(null);

  // On phones the links overflow the pill and scroll sideways. Two things keep
  // that discoverable: edge fades that show only on the side with more to see,
  // and sliding the current page/section's link into view so the highlighted
  // item is never stranded off-screen. Both are DOM writes, like the rest of
  // the scroll-driven nav state, so no React re-render per scroll.
  useEffect(() => {
    const el = linksRef.current;
    if (!el) return;
    let cancelled = false;
    let frame = 0;

    const updateFades = () => {
      const max = el.scrollWidth - el.clientWidth;
      el.dataset.fadeStart = el.scrollLeft > 4 ? "true" : "false";
      el.dataset.fadeEnd = el.scrollLeft < max - 4 ? "true" : "false";
    };

    const revealActive = (smooth: boolean) => {
      const active = el.querySelector<HTMLElement>('[data-active="true"]');
      if (!active) return;
      const box = el.getBoundingClientRect();
      const link = active.getBoundingClientRect();
      const target = el.scrollLeft + (link.left - box.left) - (box.width - link.width) / 2;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({ left: Math.max(0, target), behavior: smooth && !reduceMotion ? "smooth" : "auto" });
    };

    updateFades();
    revealActive(false);

    el.addEventListener("scroll", updateFades, { passive: true });
    const resizeObserver = new ResizeObserver(updateFades);
    resizeObserver.observe(el);

    // data-active changes on scroll (written by ScrollChoreography) and on
    // route change (written by React): follow it whenever it moves.
    const mutationObserver = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => revealActive(true));
    });
    mutationObserver.observe(el, {
      attributes: true,
      attributeFilter: ["data-active"],
      subtree: true,
    });

    // Link widths change once the web fonts have loaded.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      updateFades();
      revealActive(false);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", updateFades);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return (
    <nav data-nav="" className={styles.nav}>
      <Link
        href={onHome ? "#top" : "/"}
        data-hover=""
        className={styles.logo}
        aria-label="Back to top"
      >
        AN
      </Link>
      <div ref={linksRef} className={styles.navLinks}>
        {SCROLL_LINKS.map((link) => (
          <Link
            key={link.id}
            href={homeHash(link.id)}
            data-navlink={link.id}
            className={styles.navLink}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/beyond-the-ads"
          data-navpage=""
          data-active={pathname === "/beyond-the-ads" ? "true" : "false"}
          className={styles.navLink}
        >
          BEYOND THE ADS
        </Link>
        <Link
          href="/behind-the-ads"
          data-navpage=""
          data-active={pathname === "/behind-the-ads" ? "true" : "false"}
          className={styles.navLink}
        >
          BEHIND THE ADS
        </Link>
        <Link href={homeHash("talk")} data-navlink="talk" className={styles.navLink}>
          LET&apos;S TALK
        </Link>
      </div>
    </nav>
  );
}
