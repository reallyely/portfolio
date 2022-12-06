import { PropsWithChildren, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

import { AudioPlayer } from "@/components/audio-player";
import { BackgroundAudio } from "@/components/background-audio";
import Head from "next/head";
import { Nav } from "@/components/nav";
import styles from "@/styles/main-layout.module.scss";

interface MainLayoutProps {}

const variants: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
export default function MainLayout(props: PropsWithChildren<MainLayoutProps>) {
  const [bgAudio, setBgAudio] = useState<BackgroundAudio>();
  const [playing, setPlaying] = useState<boolean>(false);
  const playIt = async () => {
    if (!playing) {
      const result = await new BackgroundAudio(
        "/audio/windy-mountain.mp3"
      ).loadSource();
      setBgAudio(result);
      result.play();
      setPlaying(true);
    }
  };
  useEffect(() => {
    setPlaying(false);
    playIt();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Stephen Ely</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {props?.children}
      </motion.main>
      <AudioPlayer
        isPlaying={playing}
        onStop={() => {
          setPlaying(false);
          bgAudio?.stop();
        }}
        onPlay={() => playIt()}
      />
    </div>
  );
}
