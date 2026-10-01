"use client";

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
      <div className={styles.navLinks}>
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
