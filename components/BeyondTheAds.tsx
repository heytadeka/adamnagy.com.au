import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { beyondTheAds, siteConfig } from "@/lib/content";
import type { BuildProject } from "@/lib/content";
import styles from "./BeyondTheAds.module.css";

type ScreenshotVisual = Extract<BuildProject["visual"], { type: "screenshot" }>;
type PlannerVisual = Extract<BuildProject["visual"], { type: "planner" }>;

const BRAND_TILES = Array.from({ length: 20 }, (_, i) => i + 1);

function ScreenshotFrame({ visual }: { visual: ScreenshotVisual }) {
  return (
    <figure className={styles.browser}>
      <div className={styles.browserBar} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>{visual.url}</span>
      </div>
      <Image
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        sizes="(max-width: 899px) 90vw, 560px"
        className={styles.browserImg}
      />
    </figure>
  );
}

function PlannerSchematic({ visual }: { visual: PlannerVisual }) {
  return (
    <figure className={styles.plannerFigure}>
      <div className={styles.planner} role="img" aria-label={visual.ariaLabel}>
        <div className={styles.brands} aria-hidden="true">
          <span className={styles.plannerLabel}>20 BRANDS</span>
          <div className={styles.tiles}>
            {BRAND_TILES.map((n) => (
              <span key={n} className={styles.tile} style={{ "--i": n } as CSSProperties}>
                {String(n).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>

        <span className={styles.plannerArrow} aria-hidden="true">
          →
        </span>

        <div className={styles.emailWrap} aria-hidden="true">
          <span className={styles.plannerLabel}>ONE PLANNER</span>
          <div className={styles.email}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              STRUCTURE
            </div>
            <div className={styles.navSkeleton}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>

            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              WIREFRAME
            </div>
            <div className={styles.imgBox} />

            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              TOPICS &amp; COPY
            </div>
            <div className={styles.copyLines}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>
            <span className={styles.emailCta} />
          </div>
        </div>
      </div>
      <figcaption className={styles.plannerCaption}>{visual.caption}</figcaption>
    </figure>
  );
}

export function BeyondTheAds() {
  const year = new Date().getFullYear();
  const [lineOne, lineTwo] = beyondTheAds.headline;

  return (
    <main>
      <section className={styles.header}>
        <div className={styles.blobAccent} aria-hidden="true" />
        <div className={styles.inner}>
          <Reveal className="eyebrow">
            <span>—</span>
            <span />
            <span>{beyondTheAds.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.headline}>
              <span>{lineOne}</span>{" "}
              <span className={styles.accentText}>{lineTwo}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.intro}>{beyondTheAds.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.blobWhite} aria-hidden="true" />
        <div className={styles.inner}>
          {beyondTheAds.projects.map((project, i) => (
            <Reveal key={project.title}>
              <article className={styles.card}>
                <div className={styles.metaRow}>
                  <span>
                    {project.index} · {project.kicker}
                  </span>
                  <span>{project.meta}</span>
                </div>
                <div className="dashedRule" />

                <div className={styles.layout} data-flip={i % 2 === 1 ? "true" : "false"}>
                  <div className={styles.head}>
                    <h2 className={styles.title}>{project.title}</h2>
                    <p className={styles.lead}>{project.lead}</p>
                  </div>

                  <div className={styles.visual}>
                    {project.visual.type === "screenshot" ? (
                      <ScreenshotFrame visual={project.visual} />
                    ) : (
                      <PlannerSchematic visual={project.visual} />
                    )}
                  </div>

                  <div className={styles.details}>
                    <div className={styles.listBlock}>
                      <span className={styles.listLabel}>WHAT I BUILT</span>
                      <ul className={styles.list}>
                        {project.built.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {project.tags.length > 0 && (
                      <div className={styles.tags}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="pillTag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.link ? (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-hover=""
                        className={styles.linkButton}
                      >
                        <span>{project.link.label}</span>
                        <span className={styles.linkIcon} aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <span className={styles.internalNote}>INTERNAL TOOL · NO PUBLIC LINK</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.inner}>
          <div className="dashedRule" />
          <Reveal>
            <p className={styles.closerText}>
              {beyondTheAds.closer}{" "}
              <span className={styles.accentText}>{beyondTheAds.closerAccent}</span>
            </p>
          </Reveal>
          <Reveal delay={80} className={styles.closingActions}>
            <a href={`mailto:${siteConfig.email}`} data-hover="" className={styles.linkButton}>
              <span>EMAIL ME</span>
              <span className={styles.linkIcon} aria-hidden="true">
                →
              </span>
            </a>
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
