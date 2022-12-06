import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "@/styles/nav.module.scss";
interface NavProps {
  items: Array<string>[];
}
export function Nav(props: PropsWithChildren<NavProps>) {
  return (
    <nav className={styles.nav}>
      {props?.items.map((tuple) => {
        return (
          <Link key={tuple[0]} className={styles.item} href={tuple[0]}>
            {tuple[1]}
          </Link>
        );
      })}
      <div className={styles.item}>{props.children}</div>
    </nav>
  );
}
