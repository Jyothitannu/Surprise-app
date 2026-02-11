import { useEffect, useRef } from "react";
import beforeYes from "../assets/music/before-yes.mp3";
import afterYes from "../assets/music/after-yes.mp3";

export default function MusicController({ mode }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current || !mode) return;

    const audio = audioRef.current;

    // Stop previous audio
    audio.pause();
    audio.currentTime = 0;

    // Set correct source
    if (mode === "before") {
      audio.src = beforeYes;
      audio.currentTime = 22; // start from 22 sec
    }

    if (mode === "after") {
      audio.src = afterYes;
      audio.currentTime = 21; // start from 21 sec
    }

    audio.load();

    // Play safely (handle autoplay restrictions)
    audio.play().catch((err) => {
      console.log("Autoplay prevented:", err);
    });

  }, [mode]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: "none" }}
    />
  );
}
