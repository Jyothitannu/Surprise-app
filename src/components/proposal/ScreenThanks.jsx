import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import heartBg from "../../assets/backgrounds/black-heart.jpg";

export default function ScreenThanks({ onNext }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const duration = 1200;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 90,
        spread: 360,
        startVelocity: -12,
        gravity: 0,
        scalar: 0.9,
        colors: ["#ff4d6d", "#ff758f", "#ffd6e0"],
        shapes: ["circle"],
        origin: {
          x: 0.5 + Math.sin(Date.now() / 120) * 0.1,
          y: 0.45 + Math.cos(Date.now() / 120) * 0.08,
        },
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    setTimeout(() => {
      confetti({
        particleCount: 260,
        spread: 160,
        startVelocity: 45,
        gravity: 0.8,
        scalar: 1,
        ticks: 300,
        colors: ["#ff4d6d", "#ff8fab", "#ffc2d1"],
        origin: { x: 0.5, y: 0.5 },
      });
    }, 1300);

    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        startVelocity: 18,
        gravity: 1.4,
        ticks: 400,
        colors: ["#e11d48", "#fb7185", "#fecdd3"],
        shapes: ["circle"],
        origin: { x: 0.5, y: 0 },
      });
    }, 1500);

    setTimeout(() => {
      setShowText(true);
    }, 1900);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)),
          url(${heartBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {showText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(10px)",
            padding: "70px 90px",
            borderRadius: "28px",
            textAlign: "center",
            boxShadow: "0 30px 70px rgba(0,0,0,0.6)",
            maxWidth: "720px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              color: "#ffffff",
              marginBottom: "22px",
              lineHeight: 1.3,
              fontWeight: "500",
              letterSpacing: "0.5px",
            }}
          >
            Thank you for accepting and making the right decision
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            style={{
              marginTop: "36px",
              padding: "16px 48px",
              fontSize: "18px",
              background: "linear-gradient(135deg,#ff1744,#ff6b81)",
              color: "white",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(255,23,68,0.45)",
            }}
          >
            Continue ❤️
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}