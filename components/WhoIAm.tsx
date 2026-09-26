import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/lib/content";
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
              10 years. 5 brands. <span className={styles.accentText}>$11.5M</span> in ad
              spend. Still obsessed with the work.
            </h2>
            <p className={styles.bio}>
              I&apos;m a performance marketer and ecommerce manager who builds things. Not
              just campaigns — systems, tools, workflows, the stuff that makes teams
              actually move faster. I&apos;ve launched brands from zero, scaled multi-brand
              portfolios to 10x ROAS, and built internal tools now in production use at the
              companies I work for. I think in funnels, I move fast, and I have a healthy
              obsession with why some ads work and most don&apos;t.
            </p>
            <div className="dashedRule" />
            <div className={styles.footerRow}>
              <span>META · GOOGLE · KLAVIYO · SHOPIFY</span>
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
