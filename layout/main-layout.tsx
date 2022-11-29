import { DM_Serif_Display, Source_Code_Pro } from "@next/font/google";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";

import { BackgroundAudio } from "@/components/background-audio";
import Head from 'next/head'
import Link from "next/link";
import localFont from '@next/font/local'
import styles from '@/styles/index.module.scss'

const cotta = localFont({ src: '../public/fonts/cotta.otf' })
const branch = localFont({ src: '../public/fonts/branch.otf' })
const Maghfirea = localFont({ src: '../public/fonts/Maghfirea.ttf' })
const cabinet = localFont({
  src: '../public/fonts/CabinetGrotesk-Variable.woff2', weight: "400"
})

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })
const scPro = Source_Code_Pro({ weight: "300", subsets: ["latin"] })

interface MainLayoutProps { }
export default function MainLayout(props: PropsWithChildren<MainLayoutProps>) {
  const [bgAudio, setBgAudio] = useState<BackgroundAudio>()
  const [playing, setPlaying] = useState<boolean>(false)
  const playIt = async () => {
    console.log('play')
    if (!playing) {
      console.log("not playing")
      const result = await new BackgroundAudio("/audio/windy-mountain.mp3").loadSource()
      setBgAudio(result)
      result.play()
      setPlaying(true)
    }
  }
  useEffect(() => { setPlaying(false); playIt() }, [])
  return (
    <div className={styles.container} >
      <Head>
        <title>Stephen Ely</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/resume">Resume</Link>
      <main>
        {props?.children}
      </main>
      <footer>
        <button onClick={() => { setPlaying(false); bgAudio?.stop() }}>Stop Audio</button>
        <button onClick={() => playIt()}>start Audio</button>
      </footer>
    </div >

  )
}
