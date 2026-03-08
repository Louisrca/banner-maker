import type { ReactNode } from "react";
import * as styles from "./Button.styles";

type ButtonProps = {
  // Define any props you want to pass to the Button component here
  isAnchor?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({
  isAnchor = false,
  href,
  onClick,
  children,
}: ButtonProps) {
  return isAnchor ? (
    <a href={href} onClick={onClick} className={styles.anchor}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
