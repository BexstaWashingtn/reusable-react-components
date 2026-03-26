import NextLink from "next/link";
import { ReactNode, MouseEventHandler } from "react";

type Props = {
  children: ReactNode;
  href: string;
  label?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function Link({
  children,
  href,
  label,
  className,
  onClick,
}: Props) {
  const isInternal = href.startsWith("/") || !href.startsWith("//");

  if (isInternal) {
    return (
      <NextLink
        href={href}
        aria-label={label}
        className={className}
        onClick={onClick}
      >
        {children}
      </NextLink>
    );
  }

  return (
    <a href={href} aria-label={label} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
