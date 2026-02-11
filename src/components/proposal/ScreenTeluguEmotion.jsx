import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import coupleBg from "../../assets/backgrounds/couple-bg.jpg";

export default function ScreenTeluguEmotion({ onNext }) {
  const fullText =
    "పప్పులో ఉప్పు ఎంత ఇంపార్టెంటో… నీ లైఫ్‌లో నేను అంతే ఇంపార్టెంట్, గుర్తుపెట్టుకో 😌";

  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 800);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // Soft hearts
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 2,
        startVelocity: 0,
        gravity: 0.2,
        ticks: 200,
        spread: 60,
        colors: ["#ff758f", "#ffb3c6"],
        scalar: 0.6,
        origin: { x: Math.random(), y: 1 },
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",

        // 👇 NEW BACKGROUND IMAGE
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
          url(${coupleBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "40px",
            color: "#ffffff",
            lineHeight: 1.6,
            fontWeight: "500",
            textShadow:
              "0 0 18px rgba(255,200,220,0.6), 0 6px 30px rgba(0,0,0,0.8)",
          }}
        >
          {text}
        </motion.h1>

        {done && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onClick={onNext}
            style={{
              marginTop: "50px",
              padding: "14px 48px",
              fontSize: "18px",
              borderRadius: "999px",
              border: "none",
              background: "#ff4d6d",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(255,77,109,0.4)",
            }}
          >
            Next 😌
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
