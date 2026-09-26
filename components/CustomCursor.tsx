"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import styles from "./CustomCursor.module.css";

const noopSubscribe = () => () => {};
// Pointer capability doesn't change over a session, so this only ever needs
// its initial read — no subscription, just a render-time client/server split.
function useFinePointer() {
  return useSyncExternalStore(
    noopSubscribe,
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
}

export function CustomCursor() {
  const finePointer = useFinePointer();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!finePointer) return;

    const handleMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      const dot = dotRef.current;
      if (!cursor) return;
      cursor.style.opacity = "1";
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      const hot = (e.target as Element | null)?.closest?.("a, button, [data-hover]");
      if (dot) dot.style.transform = hot ? "scale(3.2)" : "scale(1)";
    };
    const handleLeave = () => {
      const cursor = cursorRef.current;
      if (cursor) cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <div ref={dotRef} className={styles.dot} />
    </div>
  );
}
