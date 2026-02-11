import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import roseBg from "../../assets/backgrounds/rose-bg.jpg";

const DAYS = [
  { title: "Happy Rose Day", sub: "ఈ గులాబీ నీకోసమే" },
  { title: "Happy Propose Day", sub: "నా మనసు మాటలు నీకే" },
  { title: "Happy Chocolate Day", sub: "ఈ తీపి నీ చిరునవ్వులా" },
  { title: "Happy Teddy Day", sub: "నీకు ఒక క్యూట్ హగ్ లా" },
  { title: "Happy Promise Day", sub: "ఎప్పుడూ నీ పక్కనే ఉంటాను" },
  { title: "Happy Hug Day", sub: "ఈ హగ్ మనసుకు శాంతి" },
  { title: "Happy Kiss Day", sub: "చిన్న ముద్దు… పెద్ద భావం" },
  { title: "Happy Valentine’s Day", sub: "ఈ రోజు… మనదే" },
];

export default function ScreenValentineDays({ onNext }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  if (index < DAYS.length - 1) {
    const timer = setTimeout(() => {
      setIndex((i) => i + 1);
    }, 2800); // faster
    return () => clearTimeout(timer);
  }
}, [index]);


  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),
          url(${roseBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Slow cinematic background zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 25, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${roseBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.25,
        }}
      />

      <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      textAlign: "center",
      color: "white",
      zIndex: 2,
      maxWidth: "900px",
      padding: "20px",
    }}
  >
    <motion.h1
      initial={{ opacity: 0, letterSpacing: "10px" }}
      animate={{ opacity: 1, letterSpacing: "1px" }}
      transition={{ duration: 0.9 }}
      style={{
        fontSize: "48px",
        marginBottom: "18px",
        textShadow: "0 12px 40px rgba(0,0,0,0.9)",
      }}
    >
      {DAYS[index].title}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.95 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      style={{
        fontSize: "26px",
      }}
    >
      {DAYS[index].sub}
    </motion.p>

    {index === DAYS.length - 1 && (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={onNext}
        style={{
          marginTop: "40px",
          padding: "14px 50px",
          borderRadius: "999px",
          border: "none",
          background: "#e11d48",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "0 12px 40px rgba(225,29,72,0.45)",
        }}
      >
        Continue
      </motion.button>
    )}
  </motion.div>
</AnimatePresence>
    </div>
  );
}
