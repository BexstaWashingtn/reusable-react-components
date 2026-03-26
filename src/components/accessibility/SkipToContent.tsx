import styles from ".a11y.module.css";

// 1. Skip-to-content-Link
export function SkipToContent() {
  return (
    <a href='#main' className={(styles.visuallyHidden, styles.focusable)}>
      Zum Inhalt springen
    </a>
  );
}
