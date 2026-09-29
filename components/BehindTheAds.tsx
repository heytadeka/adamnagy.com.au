import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { behindTheAds, siteConfig } from "@/lib/content";
import styles from "./BehindTheAds.module.css";

export function BehindTheAds() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className={styles.header}>
        <div className={styles.blobAccent} aria-hidden="true" />
        <div className={styles.inner}>
          <Reveal className="eyebrow">
            <span>—</span>
            <span />
            <span>{behindTheAds.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.intro}>{behindTheAds.intro}</h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.blobWhite} aria-hidden="true" />
        <div className={styles.inner}>
          <Reveal className={styles.beat}>
            <span className={styles.beatTag}>{behindTheAds.move.tag}</span>
            <p className={styles.beatText}>{behindTheAds.move.text}</p>
          </Reveal>

          <div className="dashedRule" />

          <Reveal className={styles.beat}>
            <span className={styles.beatTag}>{behindTheAds.reading.tag}</span>
            <p className={styles.beatText}>{behindTheAds.reading.text}</p>
          </Reveal>

          <Reveal className={styles.milestone}>
            <p className={styles.milestoneText}>{behindTheAds.artie}</p>
          </Reveal>

          <Reveal className={styles.beat}>
            <span className={styles.beatTag}>{behindTheAds.playground.tag}</span>
            <p className={styles.beatText}>{behindTheAds.playground.text}</p>
          </Reveal>

          <Reveal className={styles.milestone}>
            <p className={styles.milestoneText}>{behindTheAds.otilia}</p>
            <p className={styles.milestoneAside}>{behindTheAds.otiliaAside}</p>
          </Reveal>

          <div className="dashedRule" />

          <Reveal className={styles.closerBlock}>
            <p className={styles.closerText}>
              {behindTheAds.closer}{" "}
              <span className={styles.accentText}>{behindTheAds.closerAccent}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <div className={styles.pageFooter}>
        <Link href="/" className={styles.backLink}>
          ← BACK TO THE SITE
        </Link>
        <span>
          © {year} {siteConfig.name.toUpperCase()}
        </span>
      </div>
    </main>
  );
}
