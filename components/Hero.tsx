import Image from "next/image";
import { hero } from "@/lib/content";
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

      {/* Desktop layout: two complete thoughts either side of the portrait, ≥820px */}
      <div data-hero-text="" className={styles.heroTextWide}>
        <h1 className={styles.wideHeading}>
          <div className={styles.headingBlockRight}>
            <div className={`${styles.headlineLine} ${styles.fadeIn300}`}>
              {hero.primary[0]}
            </div>
            <div className={`${styles.headlineLine} ${styles.fadeIn450}`}>
              {hero.primary[1]}
            </div>
          </div>
          <div className={styles.headingBlockLeft}>
            <div className={`${styles.headlineLine} ${styles.fadeIn600}`}>
              {hero.secondary[0]}
            </div>
            <div className={`${styles.headlineLine} ${styles.fadeIn750}`}>
              {hero.secondary[1]}
            </div>
          </div>
        </h1>
        <p className={`${styles.descriptor} ${styles.fadeIn1400}`}>
          <span className={styles.nameTag}>{hero.descriptorName}</span>
          {hero.descriptor}
        </p>
      </div>

      {/* Mobile layout: stacked bottom-left, <820px */}
      <div data-hero-text="" className={styles.heroTextNarrow}>
        <h1 className={styles.narrowHeading}>
          <span className={`${styles.headlineWordNarrow} ${styles.fadeIn300}`}>
            {hero.primary[0]}
          </span>
          <span className={`${styles.headlineWordNarrow} ${styles.fadeIn450}`}>
            {hero.primary[1]}
          </span>
          <span className={`${styles.headlineWordNarrow} ${styles.fadeIn600}`}>
            {hero.secondary[0]}
          </span>
          <span className={`${styles.headlineWordNarrow} ${styles.fadeIn750}`}>
            {hero.secondary[1]}
          </span>
        </h1>
        <p className={`${styles.descriptorNarrow} ${styles.fadeIn1400}`}>
          <span className={styles.nameTagNarrow}>{hero.descriptorName}</span>
          {hero.descriptor}
        </p>
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
