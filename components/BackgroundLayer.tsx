import styles from "./BackgroundLayer.module.css";

export function BackgroundLayer() {
  return <div id="bg-layer" className={styles.layer} aria-hidden="true" />;
}
