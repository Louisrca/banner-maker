import { type ReactNode } from "react";
import * as styles from "./CardContainer.styles";

export default function CardContainer({
  children,
  isOverflow,
}: {
  children: ReactNode;
  isOverflow?: boolean;
}) {
  return <section className={styles.container(isOverflow)}>{children}</section>;
}
