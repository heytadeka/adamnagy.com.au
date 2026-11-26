import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { buildBand } from "@/lib/content";
import styles from "./BuildBand.module.css";

export function BuildBand() {
  return (
    <section aria-label="Things I've built" className={styles.section}>
      <Reveal>
        <div className={styles.band}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>{buildBand.eyebrow}</span>
            <p className={styles.statement}>{buildBand.statement}</p>
          </div>

          <ul className={styles.items}>
            {buildBand.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemNote}>{item.note}</span>
              </li>
            ))}
          </ul>

          <Link href="/beyond-the-ads" data-hover="" className={styles.cta}>
            <span>{buildBand.cta}</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
