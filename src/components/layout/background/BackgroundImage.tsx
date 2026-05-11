/**
 * BackgroundImageWrapper
 *
 * Zweck:
 * Wrapper-Komponente zur Darstellung eines Hintergrundbildes mit optionalem
 * Blur-Overlay hinter beliebigen Inhalten.
 *
 * Anwendung:
 * Übergibt ein `image`-Objekt mit den nötigen Bilddaten. Die Komponente rendert
 * automatisch ein Next.js <Image /> im Hintergrund und legt die Kinder-Elemente darüber.
 * Optional kann über `blur` ein Weichzeichner-Effekt aktiviert werden.
 *
 * Besonderheiten:
 * - Unterstützt feste Bildgrößen (width/height) oder `fill`-Layout
 * - Setzt automatisch `object-fit` je nach Bildtyp
 * - Overlay-Effekt wird nur gerendert, wenn `blur` gesetzt ist
 *
 * Beispiel:
 * <BackgroundImageWrapper
 *   image={{
 *     src: "/hero.jpg",
 *     alt: "Hero Hintergrund",
 *   }}
 *   blur={4}
 * >
 *   <section>
 *     <h1>Hero Content</h1>
 *   </section>
 * </BackgroundImageWrapper>
 */

import styles from "./backgroundImageWrapper.module.css";
import Image from "next/image";
import React from "react";

type ImageProps = {
  src: string;
  height?: number;
  width?: number;
  title?: string;
  alt: string;
  style?: React.CSSProperties;
};

type Props = {
  children: React.ReactNode;
  image: ImageProps;
  blur?: number;
};

export const BackgroundImageWrapper = ({ children, image, blur }: Props) => {
  if (!image) return <>{children}</>;

  let content = <>{children}</>;
  const hasFixedSize = Boolean(image?.width && image?.height);

  content = (
    <div className={styles.backgroundImageWrapper}>
      <Image
        src={image.src}
        alt={image.alt}
        title={image.title}
        {...(hasFixedSize
          ? { width: image.width, height: image.height }
          : { fill: true })}
        style={{
          ...image.style,
          objectFit: hasFixedSize ? "none" : "cover",
        }}
        className={styles.backgroundImage}
      />

      {typeof blur === "number" && (
        <div
          className={styles.backgroundImageOverlayEffect}
          style={{
            WebkitBackdropFilter: `blur(${blur}px)`,
            backdropFilter: `blur(${blur}px)`,
          }}
        ></div>
      )}

      {content}
    </div>
  );

  return content;
};
