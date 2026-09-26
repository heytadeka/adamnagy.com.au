import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import styles from "./TheVideo.module.css";

// TODO(adam): once the reel is ready, swap this static "coming soon" panel
// for a real <video> (or embedded player) and wire the button to play it.
export function TheVideo() {
  return (
    <section id="video" data-screen-label="The video" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className="eyebrow">
          <span>03</span>
          <span />
          <span>THE VIDEO</span>
        </Reveal>

        <Reveal delay={80}>
          <div className={styles.panel}>
            <Image
              src="/images/adam-portrait.png"
              alt=""
              width={1122}
              height={1402}
              className={styles.backdropImg}
            />
            <div className={styles.backdropGlow} aria-hidden="true" />
            <div className={styles.overlay}>
              <div className={styles.topRow}>
                <span>AN — REEL 01</span>
                <span>00:00 / 01:00</span>
              </div>
              <div className={styles.center}>
                <button
                  type="button"
                  disabled
                  aria-label="Video coming soon"
                  className={styles.playButton}
                >
                  <span className={styles.ring} />
                  <span className={styles.ring} />
                  <span className={styles.glow} />
                  <span className={styles.triangle} />
                </button>
                <div className={styles.caption}>WATCH: 60 SECONDS — WHO I AM</div>
              </div>
              <div className={styles.bottomRow}>
                <span>VIDEO COMING SOON</span>
                <span className={styles.progressTrack} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
