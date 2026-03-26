import { ReactNode } from "react";
import styles from ".a11y.module.css";

// 2. Nur für Screenreader sichtbarer Text - Not Focusable
export function SrOnly({ children }: { children: ReactNode }) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}
