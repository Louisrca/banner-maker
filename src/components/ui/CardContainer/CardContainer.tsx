import { type ReactNode } from "react";
import * as styles from "./CardContainer.styles";

export default function CardContainer({ children }: { children: ReactNode }) {
  return <section className={styles.container}>{children}</section>;
}
