import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { caseStudies, siteConfig } from "@/lib/content";
import beyond from "./BeyondTheAds.module.css";
import styles from "./CaseStudies.module.css";

export function CaseStudies() {
  const year = new Date().getFullYear();
  const [lineOne, lineTwo] = caseStudies.headline;

  return (
    <main>
      <section className={beyond.header}>
        <div className={beyond.blobAccent} aria-hidden="true" />
        <div className={beyond.inner}>
          <Reveal className="eyebrow">
            <span>—</span>
            <span />
            <span>{caseStudies.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={beyond.headline}>
              <span>{lineOne}</span>{" "}
              <span className={beyond.accentText}>{lineTwo}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={beyond.intro}>{caseStudies.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className={beyond.projects}>
        <div className={beyond.blobWhite} aria-hidden="true" />
        <div className={beyond.inner}>
          {caseStudies.cases.map((c, i) => (
            <Reveal key={c.id}>
              <article id={c.id} className={`${beyond.card} ${styles.anchor}`}>
                <div className={beyond.metaRow}>
                  <span>
                    {c.index} · {c.kicker}
                  </span>
                  <span>{c.meta}</span>
                </div>
                <div className="dashedRule" />

                <div className={beyond.layout} data-flip={i % 2 === 1 ? "true" : "false"}>
                  <div className={beyond.head}>
                    <h2 className={beyond.title}>{c.title}</h2>
                    <p className={beyond.lead}>{c.lead}</p>
                  </div>

                  <div className={beyond.visual}>
                    <div className={styles.results}>
                      <span className={styles.resultsLabel}>RESULTS</span>
                      <dl className={styles.metrics}>
                        {c.metrics.map((m) => (
                          <div key={m.label} className={styles.metric}>
                            <dt className={styles.metricLabel}>{m.label}</dt>
                            <dd className={styles.metricValue}>{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div className={beyond.details}>
                    <div className={styles.beat}>
                      <span className={beyond.listLabel}>THE SITUATION</span>
                      <p className={styles.beatText}>{c.situation}</p>
                    </div>
                    <div className={beyond.listBlock}>
                      <span className={beyond.listLabel}>WHAT I DID</span>
                      <ul className={beyond.list}>
                        {c.did.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.beat}>
                      <span className={beyond.listLabel}>WHAT HAPPENED</span>
                      <p className={styles.beatText}>{c.result}</p>
                    </div>
                    <div className={beyond.tags}>
                      {c.tags.map((tag) => (
                        <span key={tag} className="pillTag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {c.gallery && (
                  <div className={styles.gallery}>
                    <span className={beyond.listLabel}>{c.gallery.label}</span>
                    <div className={styles.galleryGrid}>
                      {c.gallery.items.map((g) => (
                        <figure key={g.src} className={styles.shot}>
                          <Image
                            src={g.src}
                            alt={g.alt}
                            width={g.width}
                            height={g.height}
                            sizes="(max-width: 899px) 45vw, 260px"
                            className={styles.shotImg}
                          />
                          <figcaption className={styles.shotCaption}>{g.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={beyond.closing}>
        <div className={beyond.inner}>
          <div className="dashedRule" />
          <Reveal>
            <p className={beyond.closerText}>
              {caseStudies.closer}{" "}
              <span className={beyond.accentText}>{caseStudies.closerAccent}</span>
            </p>
          </Reveal>
          <Reveal delay={80} className={beyond.closingActions}>
            <a href={`mailto:${siteConfig.email}`} data-hover="" className={beyond.linkButton}>
              <span>EMAIL ME</span>
              <span className={beyond.linkIcon} aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className={beyond.pageFooter}>
        <Link href="/" className={beyond.backLink}>
          ← BACK TO THE SITE
        </Link>
        <span>
          © {year} {siteConfig.name.toUpperCase()}
        </span>
      </div>
    </main>
  );
}
