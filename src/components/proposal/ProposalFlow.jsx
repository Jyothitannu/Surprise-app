import { useState } from "react";
import MusicController from "../MusicController";

import ScreenProposal from "./ScreenProposal";
import ScreenThanks from "./ScreenThanks";
import ScreenTeluguEmotion from "./ScreenTeluguEmotion";
import ScreenFriends from "./ScreenFriends";
import ScreenValentineDays from "./ScreenValentineDays";
import ScreenNewBeginning from "./ScreenNewBeginning";

export default function ProposalFlow() {
  const [step, setStep] = useState("proposal");
  const [musicMode, setMusicMode] = useState("before");

  return (
    <>
      <MusicController mode={musicMode} />

      {step === "proposal" && (
        <ScreenProposal
          onYes={() => {
  setMusicMode("after");
  setTimeout(() => {
    setStep("thanks");
  }, 800); // 0.8 sec pause for drama
}}
        />
      )}

      {step === "thanks" && (
        <ScreenThanks onNext={() => setStep("telugu")} />
      )}

      {step === "telugu" && (
        <ScreenTeluguEmotion onNext={() => setStep("friends")} />
      )}

      {step === "friends" && (
        <ScreenFriends onNext={() => setStep("valentine")} />
      )}

      {step === "valentine" && (
        <ScreenValentineDays onNext={() => setStep("new")} />
      )}

      {step === "new" && (
        <ScreenNewBeginning />
      )}
    </>
  );
}
