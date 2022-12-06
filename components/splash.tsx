import Image from "next/image";
import Link from "next/link";
import style from "@/styles/splash.module.scss";
interface SplashProps {}
export function Splash(splashProps: SplashProps) {
  return (
    <div className={style.bg}>
      <Link href="/resume">
        <h1 className={style.title}>Stephen Ely</h1>
      </Link>
    </div>
  );
}
