import type { ReactNode } from "react";
import * as styles from "./Button.styles";

type ButtonProps = {
  isAnchor?: boolean;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  buttonVariant?: "primary" | "secondary";
  label?: string;
};

export default function Button({
  isAnchor = false,
  href,
  onClick,
  children,
  buttonVariant = "primary",
  label,
}: ButtonProps) {
  return isAnchor ? (
    <a href={href} onClick={onClick} className={styles.anchor}>
      {label ?? children}
    </a>
  ) : (
    <button onClick={onClick} className={styles.button(buttonVariant)}>
      {label ?? children}
    </button>
  );
}
