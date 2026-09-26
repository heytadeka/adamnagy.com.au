import { Reveal } from "@/components/Reveal";
import { quote } from "@/lib/content";
import styles from "./Quote.module.css";

export function Quote() {
  return (
    <section data-screen-label="Quote" className={styles.section}>
      <Reveal>
        <figure className={styles.figure}>
          <div className={styles.mark} aria-hidden="true">
            &ldquo;
          </div>
          <blockquote className={styles.quote}>{quote.text}</blockquote>
          <figcaption className={styles.caption}>
            <span className={styles.author}>— {quote.author}</span>
            <span>{quote.role}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
