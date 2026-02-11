import { useState } from "react";
import { motion } from "framer-motion";
import mangal from "../../assets/proposal/mangalsutra.png";
import confetti from "canvas-confetti";

export default function ScreenProposal({ onYes }) {
  const texts = [
    "NO 🙈",
    "Really? 😏",
    "Think again ❤️",
    "Are you sure?",
    "Last chance 😌",
    "Nice try!",
    "Still no? 😅",
  ];

  const [noStyle, setNoStyle] = useState({ top: "70%", left: "50%" });
  const [noText, setNoText] = useState(texts[0]);

  const escapeNo = () => {
    const safeTop = Math.random() * 40 + 30;   // keeps inside middle
    const safeLeft = Math.random() * 50 + 25;  // avoids edges

    setNoStyle({
      top: `${safeTop}%`,
      left: `${safeLeft}%`,
    });

    setNoText(texts[Math.floor(Math.random() * texts.length)]);
  };

  const handleYes = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff4d6d", "#ffd6e0", "#ffffff"],
    });

    setTimeout(() => {
      onYes();
    }, 700);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #5f0f1a 0%, #9a031e 35%, #ff758f 70%, #ffd6e0 100%)",
        overflow: "hidden", // 🚫 prevents scroll
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          maxWidth: "1100px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* HEART IMAGE */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              width: "520px",
              height: "480px",
              backgroundImage: `url(${mangal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath:
                "path('M290 520 C130 400 30 290 30 180 C30 90 90 30 180 30 C250 30 290 90 290 90 C290 90 330 30 400 30 C490 30 550 90 550 180 C550 290 450 400 290 520 Z')",
              boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
            }}
          />
        </div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            padding: "50px",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
            position: "relative",
            minHeight: "300px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: "#fff",
              marginBottom: "60px",
              fontWeight: "600",
            }}
          >
            Will you marry me?
          </h1>

          {/* YES */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleYes}
            style={{
              padding: "15px 40px",
              borderRadius: "40px",
              border: "none",
              background: "linear-gradient(90deg,#ff4d6d,#ff1e56)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(255,30,86,0.5)",
              fontSize: "15px",
            }}
          >
            YES ❤️
          </motion.button>

          {/* NO */}
          <button
            onMouseEnter={escapeNo}
            style={{
              position: "absolute",
              top: noStyle.top,
              left: noStyle.left,
              transform: "translate(-50%, -50%)",
              padding: "9px 24px",
              fontSize: "13px",
              background: "rgba(255,255,255,0.4)",
              color: "#5f0f1a",
              borderRadius: "40px",
              border: "1px solid rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "top 0.25s ease, left 0.25s ease",
            }}
          >
            {noText}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
