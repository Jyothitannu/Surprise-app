import { useState } from "react";
import PasswordGate from "./components/PasswordGate";
import ProposalFlow from "./components/proposal/ProposalFlow";

export default function App() {
  const [screen, setScreen] = useState("password");

  return (
    <>
      {screen === "password" && (
        <PasswordGate onUnlock={() => setScreen("proposal")} />
      )}

      {screen === "proposal" && (
        <ProposalFlow />
      )}
    </>
  );
}
