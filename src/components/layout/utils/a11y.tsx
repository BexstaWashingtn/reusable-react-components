"use client";
// a11y.tsx – Barrierefreiheits-Tools

import styles from "./a11y.module.css";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

// 1. Skip-to-content-Link
export function SkipToContent() {
  return (
    <a href='#main' className='visuallyHidden focusable'>
      Zum Inhalt springen
    </a>
  );
}

// 2. Nur für Screenreader sichtbarer Text - Not Focusable
export function SrOnly({ children }: { children: ReactNode }) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}

// 3. Fokus auf ein Element beim Mount setzen
export function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
}

// 4. ARIA-Konstanten für z. B. mobile Navigation
export const ariaMainNav = {
  label: "Hauptnavigation",
  controlsId: "main-nav",
  expanded: (open: boolean) => (open ? "true" : "false"),
};
