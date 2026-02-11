import { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    text: "From office days to something special 💙",
    gif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  },
  {
    text: "Fights like Tom & Jerry 😂",
    gif: "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
  },
  {
    text: "But always choosing each other ❤️",
    gif: "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif",
  },
];

function GifStory({ onFinish }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish();
    }
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <img
        src={slides[index].gif}
        alt="story"
        width="260"
        style={{ borderRadius: "16px" }}
      />

      <h2>{slides[index].text}</h2>

      <button
        onClick={nextSlide}
        style={{
          marginTop: "20px",
          padding: "12px 28px",
          borderRadius: "30px",
          border: "none",
          background: "#f472b6",
          color: "#0f172a",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {index === slides.length - 1 ? "Continue ❤️" : "Next ➜"}
      </button>
    </motion.div>
  );
}

export default GifStory;
