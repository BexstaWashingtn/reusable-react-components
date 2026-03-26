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
