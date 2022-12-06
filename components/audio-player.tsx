import { PropsWithChildren } from "react";

interface AudioPlayerProps {
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}

export function AudioPlayer(props: PropsWithChildren<AudioPlayerProps>) {
  return (
    <>
      {props.isPlaying ? (
        <button
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => props.onStop()}
        >
          🔊
        </button>
      ) : (
        <button
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => props.onPlay()}
        >
          🔈
        </button>
      )}
    </>
  );
}
