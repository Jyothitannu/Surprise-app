import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import bg1 from "../../assets/backgrounds/sunset1.jpg";
import bg2 from "../../assets/backgrounds/sunset2.jpg";

export default function ScreenNewBeginning() {
  const [index, setIndex] = useState(0);
  const backgrounds = [bg1, bg2];

  // 🔄 Switch background every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 🌅 Background Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
              url(${backgrounds[index]}) center/cover no-repeat
            `,
          }}
        />
      </AnimatePresence>

      {/* 💛 Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "650px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "10px",
            fontWeight: "600",
            textShadow: "0 10px 40px rgba(0,0,0,0.4)",
          }}
        >
          A New Beginning ✨
        </h1>

        <p
          style={{
            fontSize: "18px",
            fontStyle: "italic",
            marginBottom: "30px",
            letterSpacing: "1px",
          }}
        >
          Forever begins now.
        </p>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            textShadow: "0 8px 30px rgba(0,0,0,0.4)",
          }}
        >
          Not just a “YES”…  
          <br /><br />
          But a promise.  
          <br />
          A journey.  
          <br />
          A story we begin together.  
          <br /><br />
          From this moment,  
          it’s not “you” and “me” anymore —  
          <br />
          It’s <strong>us</strong> ❤️
        </p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => window.location.reload()}
          style={{
            marginTop: "40px",
            padding: "14px 48px",
            borderRadius: "50px",
            border: "none",
            background: "white",
            color: "#e63946",
            fontSize: "15px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Watch Again 🔄
        </motion.button>
      </motion.div>
    </div>
  );
}
