import { useState } from "react";
import MusicController from "../MusicController";

export default function Proposal() {
  const [musicMode, setMusicMode] = useState("before");
  const [musicUnlocked, setMusicUnlocked] = useState(false);

  const handleYesClick = () => {
    setMusicUnlocked(true);   // 🔓 unlock audio
    setMusicMode("after");    // 🎵 switch song
  };

  return (
    <>
      {/* your heart animation & proposal UI */}

      <button onClick={handleYesClick}>
        Continue 💖
      </button>

      <MusicController
        mode={musicMode}
        unlocked={musicUnlocked}
      />
    </>
  );
}
