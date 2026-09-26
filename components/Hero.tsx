import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" data-screen-label="Hero" className={styles.hero}>
      <div data-hero-img="" className={styles.heroImgWrap}>
        <Image
          src="/images/adam-portrait.png"
          alt="Portrait of Adam Nagy"
          width={1122}
          height={1402}
          priority
          quality={90}
          sizes="(max-width: 819px) 100vw, 60vh"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.bottomFade} aria-hidden="true" />
      <div data-intro-pane="" className={styles.glassPane} aria-hidden="true" />

      {/* Desktop layout: headline split across the portrait, ≥820px */}
      <div data-hero-text="" className={styles.heroTextWide}>
        <div className={styles.wideWhoMakes}>
          <h1 className={`${styles.headlineWord} ${styles.fadeIn300}`}>WHO MAKES</h1>
        </div>
        <div className={styles.wideAdsWork}>
          <div className={`${styles.headlineWord} ${styles.fadeIn520}`}>ADS WORK?</div>
        </div>
        <div className={styles.wideByline}>
          <div className={`${styles.byline} ${styles.clipIn1100}`}>ADAM NAGY</div>
          <div className={`${styles.subtitle} ${styles.fadeIn1500}`}>
            PERFORMANCE MARKETING &amp; ECOMMERCE
          </div>
        </div>
      </div>

      {/* Mobile layout: stacked bottom-left, <820px */}
      <div data-hero-text="" className={styles.heroTextNarrow}>
        <h1 className={styles.narrowHeading}>
          <span className={`${styles.headlineWordNarrow} ${styles.fadeIn300}`}>
            WHO MAKES
          </span>
          <span className={`${styles.headlineWordNarrow} ${styles.fadeIn500}`}>
            ADS WORK?
          </span>
        </h1>
        <div className={`${styles.bylineNarrow} ${styles.clipIn1000}`}>ADAM NAGY</div>
        <div className={`${styles.subtitleNarrow} ${styles.fadeIn1300}`}>
          PERFORMANCE MARKETING &amp; ECOMMERCE
        </div>
      </div>

      <div className={`${styles.bottomBar} ${styles.fadeIn1800}`}>
        <span className={styles.bottomBarSide}>SYDNEY, AU</span>
        <a href="#who" data-hover="" className={styles.scrollPill}>
          <span>SCROLL</span>
          <span className={styles.scrollTrack}>
            <span className={styles.scrollDot} />
          </span>
        </a>
        <span className={styles.bottomBarSideRight}>EST. 2015</span>
      </div>
    </section>
  );
}
