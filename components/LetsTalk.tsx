import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/content";
import styles from "./LetsTalk.module.css";

export function LetsTalk() {
  const year = new Date().getFullYear();

  return (
    <section id="talk" data-screen-label="CV and contact" className={styles.section}>
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal className="eyebrow">
          <span>04</span>
          <span />
          <span>LET&apos;S TALK</span>
        </Reveal>

        <Reveal delay={80} className={styles.headerGroup}>
          <h2 className={styles.heading}>Prefer the formal version?</h2>
          <p className={styles.sub}>Here&apos;s the full CV — the dry but accurate one.</p>
        </Reveal>

        <Reveal delay={160} className={styles.actionsRow}>
          {/* TODO(adam): drop Adam-Nagy-CV.pdf into /public once it's ready */}
          <a href={siteConfig.cvHref} download data-hover="" className={styles.cvButton}>
            <span>DOWNLOAD CV</span>
            <span className={styles.cvIcon} aria-hidden="true">
              ↓
            </span>
          </a>
          <p className={styles.emailLine}>
            Or just email me —{" "}
            <a href={`mailto:${siteConfig.email}`} data-hover="" className={styles.emailLink}>
              {siteConfig.email}
            </a>
          </p>
        </Reveal>

        <Reveal>
          <p className={styles.closer}>
            Open to the right in-house role.{" "}
            <span className={styles.accentText}>Let&apos;s find out if that&apos;s you.</span>
          </p>
        </Reveal>

        <div className={styles.footer}>
          <span>© {year} ADAM NAGY</span>
          <span>{siteConfig.location.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}
