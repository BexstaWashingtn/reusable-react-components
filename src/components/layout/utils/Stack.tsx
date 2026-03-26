/**
 * Stack-Komponente
 *
 * Ein flexibler Layout-Wrapper, der Elemente entweder vertikal (column)
 * oder horizontal (row) anordnet. Zwischen den Elementen wird ein definierter
 * Abstand ("gap") gesetzt, basierend auf den Spacing-Tokens.
 *
 * Props:
 * - gap: Definiert den Abstand zwischen den Elementen.
 *   - String: fester Wert ("sm" | "md" | "lg" | "xl" | "xxl" | "xxxl")
 *   - Objekt: responsive Variante, z. B.
 *       { base: "sm", md: "lg", lg: "xl" }
 *     → base = Default, md = gilt bis 768px, lg = gilt bis 1024px
 *
 * - direction: "row" | "column" → bestimmt die Flex-Achse
 * - wrap: true/false → aktiviert flex-wrap
 * - justifyContent: Werte analog zu CSS (z. B. "flex-start", "space-between")
 * - className: erlaubt zusätzliche Utility-Klassen für Sonderfälle
 *
 * Umsetzung:
 * - Die Abstände werden per CSS-Klassen gesteuert (gap-[size] + responsive Varianten).
 * - Breakpoints sind mobile-first mit max-width definiert:
 *     sm = ≤ 480px, md = ≤ 768px, lg = ≤ 1024px
 * - Über das className-Prop lassen sich Utility-Klassen wie "align-stretch-md"
 *   hinzufügen, um spezielle Layoutfälle abzudecken.
 *
 * Typische Anwendungsfälle:
 * - Stacks von Buttons, Inputs oder Navigationslinks
 * - Spalten- oder Reihen-Layouts im Content
 * - Flexible Grids in Kombination mit wrap
 */

import clsx from "clsx";
import styles from "./stack.module.css";

type Gap = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type Responsive<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
};

type Props = {
  children: React.ReactNode;
  gap?: Gap | Responsive<Gap>;
  direction?: "row" | "column";
  wrap?: boolean;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  className?: string;
};

export default function Stack({
  children,
  gap = "xl",
  direction = "column",
  wrap = false,
  justifyContent,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        styles.stack,
        styles[direction],
        wrap && styles.wrap,
        justifyContent && styles[`justify-${justifyContent}`],
        typeof gap === "string"
          ? styles[`gap-${gap}`]
          : [
              gap.base && styles[`gap-${gap.base}`],
              gap.sm && styles[`gap-sm-${gap.sm}`],
              gap.md && styles[`gap-md-${gap.md}`],
              gap.lg && styles[`gap-lg-${gap.lg}`],
            ],
        className
      )}
    >
      {children}
    </div>
  );
}
