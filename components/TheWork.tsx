import { Reveal } from "@/components/Reveal";
import { workItems } from "@/lib/content";
import styles from "./TheWork.module.css";

export function TheWork() {
  return (
    <section id="work" data-screen-label="The work" className={styles.section}>
      <div className={styles.blobAccent} aria-hidden="true" />
      <div className={styles.blobWhite} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.headerGroup}>
          <Reveal className="eyebrow">
            <span>02</span>
            <span />
            <span>THE WORK</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.heading}>Some things I&apos;ve built or grown</h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {workItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 120} className={styles.cardWrap}>
              <article className={styles.card}>
                <div className={styles.cardMetaRow}>
                  <span>
                    {item.index} · {item.kicker}
                  </span>
                  <span>{item.meta}</span>
                </div>
                <div className="dashedRule" />
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.body}</p>
                </div>
                <div className={item.tags.length > 0 ? styles.footer : styles.footerMetricsOnly}>
                  {item.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                  {item.tags.length > 0 && (
                    <div className={styles.tagsGroup}>
                      {item.tags.map((tag) => (
                        <span key={tag} className="pillTag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
