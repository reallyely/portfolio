import { DM_Serif_Display } from "@next/font/google";
import localFont from '@next/font/local'
import styles from '@/styles/index.module.scss'

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

const Maghfirea = localFont({ src: '../public/fonts/Maghfirea.ttf' })

export function Resume() {
  return <div>
    <h1 className={[styles.title, dmSerifDisplay.className].join(" ")}>
      Stephen Ely
    </h1>
    <p className={[styles.description, Maghfirea.className].join(" ")}>
      Just doin my best
    </p>

  </div>
}