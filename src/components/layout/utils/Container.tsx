/**
 * Container-Komponente
 *
 * Ein zentrierter Layout-Container, der Content auf eine bestimmte Breite
 * begrenzt und standardmäßig seitliches Padding hinzufügt, damit Inhalte
 * nicht am Bildschirmrand kleben.
 *
 * Props:
 * - variant: legt die maximale Breite des Containers fest.
 *   ("default" | "narrow" | "wide" | "full" | "swiper")
 *
 * - paddingTop / paddingBottom:
 *   - Optionales vertikales Padding.
 *   - Werte basieren auf den Spacing-Tokens ("xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl").
 *
 * - paddingInline:
 *   - Boolean → Padding immer an (true) oder aus (false).
 *   - Objekt → responsive Steuerung, z. B.
 *       { base: true, lg: false }
 *     → auf Mobile/Tablet mit Padding, ab 1024px randlos ("Full Bleed").
 *
 * - className: erlaubt zusätzliche Utility-Klassen für Sonderfälle.
 *
 * Umsetzung:
 * - Standardmäßig wird seitliches Padding dynamisch über Breakpoints reduziert:
 *     3rem (≥ 1024px), 2rem (≤ 1024px), 1.5rem (≤ 768px), 1rem (≤ 480px).
 * - Über paddingInline kann das Padding global deaktiviert oder
 *   per Breakpoint ausgeschaltet werden (no-inline-sm, no-inline-md, no-inline-lg).
 *
 * Typische Anwendungsfälle:
 * - Section-Wrapper im Layout (Header, Footer, Content-Bereiche).
 * - Zentrierung und Begrenzung von Fließtext.
 * - Kombination mit Stack, um gleichmäßige Abstände im Content sicherzustellen.
 */

import clsx from "clsx";
import styles from "./inner.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "narrow" | "wide" | "full" | "swiper";
  paddingTop?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  paddingBottom?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  paddingInline?:
    | boolean
    | { base?: boolean; lg?: boolean; md?: boolean; sm?: boolean };
  className?: string;
};

// padding Vars try to use from Stack Comp Tokens

export default function Inner({
  children,
  variant = "default",
  paddingTop,
  paddingBottom,
  paddingInline = true,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        styles.inner,
        styles[variant],
        paddingTop && styles[`pt-${paddingTop}`],
        paddingBottom && styles[`pb-${paddingBottom}`],
        typeof paddingInline === "boolean"
          ? paddingInline && styles["padding-inline"]
          : [
              (paddingInline.base ?? true) && styles["padding-inline"],
              paddingInline.sm === false && styles["no-inline-sm"],
              paddingInline.md === false && styles["no-inline-md"],
              paddingInline.lg === false && styles["no-inline-lg"],
            ],
        className,
      )}
    >
      {children}
    </div>
  );
}
