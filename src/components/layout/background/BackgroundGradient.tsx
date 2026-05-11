/**
 * BackgroundGradientWrapper
 *
 * Zweck:
 * Wrapper-Komponente zur Darstellung eines dynamischen CSS-Gradient-Hintergrunds
 * (linear oder radial) um beliebige Inhalte.
 *
 * Anwendung:
 * Übergibt ein `gradient`-Objekt mit Typ und mindestens zwei Farb-Stopps.
 * Die Komponente erzeugt daraus automatisch den passenden CSS-Gradient.
 *
 * Beispiel:
 * <BackgroundGradientWrapper
 *   gradient={{
 *     type: "linear",
 *     deg: "135deg",
 *     colorStops: [
 *       { color: "#000", position: "0%" },
 *       { color: "#fff", position: "100%" }
 *     ]
 *   }}
 * >
 *   <Content />
 * </BackgroundGradientWrapper>
 */

import styles from "./backgroundGradient.module.css";
import React from "react";

type Percentage = `${number}%`;

type GradientColorStop = {
  color: string;
  position: Percentage;
};

type AtLeastTwo<T> = readonly [T, T, ...T[]];

type Degrees = `${number}deg`;

type LinearGradientProps = {
  type: "linear";
  deg?: Degrees;
  colorStops: AtLeastTwo<GradientColorStop>;
};

type RadialGradientProps = {
  type: "radial";
  shape?: "circle" | "ellipse";
  startX?: string;
  startY?: string;
  colorStops: AtLeastTwo<GradientColorStop>;
};

type GradientProps = LinearGradientProps | RadialGradientProps;

type Props = {
  children: React.ReactNode;
  gradient: GradientProps;
};

export const BackgroundGradient = ({ children, gradient }: Props) => {
  let gradientCss: string;

  if (gradient.type === "linear") {
    const deg = gradient.deg ?? "180deg";
    gradientCss = `linear-gradient(${deg}, ${gradient.colorStops
      .map(({ color, position }) => `${color} ${position}`)
      .join(", ")})`;
  } else {
    const shape = gradient.shape ?? "circle";
    const x = gradient.startX ?? "50%";
    const y = gradient.startY ?? "0%";
    gradientCss = `radial-gradient(${shape} at ${x} ${y}, ${gradient.colorStops
      .map(({ color, position }) => `${color} ${position}`)
      .join(", ")})`;
  }

  return (
    <div
      className={styles.backgroundGradientWrapper}
      style={{ background: gradientCss }}
    >
      {children}
    </div>
  );
};
