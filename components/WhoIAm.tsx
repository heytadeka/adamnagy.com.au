import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats, whoIAm } from "@/lib/content";
import styles from "./WhoIAm.module.css";

export function WhoIAm() {
  return (
    <section id="who" data-screen-label="Who I am" className={styles.section}>
      <div className={styles.blobAccent} aria-hidden="true" />
      <div className={styles.blobWhite} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal className="eyebrow">
          <span>01</span>
          <span />
          <span>WHO I AM</span>
        </Reveal>

        <Reveal delay={80}>
          <article className={styles.card}>
            <div className={styles.metaRow}>
              <div className={styles.metaCol}>
                <span>LOCATION:</span>
                <span className={styles.metaValue}>SYDNEY, AUSTRALIA</span>
              </div>
              <div className={styles.metaColRight}>
                <span>STATUS:</span>
                <span className={styles.metaValue}>OPEN TO IN-HOUSE</span>
              </div>
            </div>
            <div className="dashedRule" />
            <h2 className={styles.headline}>
              <span className={styles.headlineLine}>{whoIAm.headline[0]}</span>
              <span className={`${styles.headlineLine} ${styles.accentText}`}>
                {whoIAm.headline[1]}
              </span>
            </h2>
            <div className={styles.bioGroup}>
              {whoIAm.bio.map((paragraph) => (
                <p key={paragraph} className={styles.bio}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="dashedRule" />
            <div className={styles.footerRow}>
              <span>{whoIAm.stack}</span>
              <span>AU / US / UK / NZ</span>
            </div>
          </article>
        </Reveal>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className={styles.statBlock}>
              <div className={stat.accent ? styles.statValueAccent : styles.statValue}>
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
