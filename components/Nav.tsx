import styles from "./Nav.module.css";

const LINKS = [
  { id: "who", label: "WHO I AM", href: "#who" },
  { id: "work", label: "THE WORK", href: "#work" },
  { id: "video", label: "THE VIDEO", href: "#video" },
  { id: "talk", label: "LET'S TALK", href: "#talk" },
];

export function Nav() {
  return (
    <nav data-nav="" className={styles.nav}>
      <a href="#top" data-hover="" className={styles.logo} aria-label="Back to top">
        AN
      </a>
      <div className={styles.navLinks}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            data-navlink={link.id}
            className={styles.navLink}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
