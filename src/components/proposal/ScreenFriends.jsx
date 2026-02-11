import { motion } from "framer-motion";
import bg from "../../assets/backgrounds/book-love.jpg";

export default function ScreenFriends({ onNext }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${bg}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ✨ Floating Light Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: -200,
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "rgba(255, 223, 150, 0.9)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* 💛 Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          maxWidth: "640px",
          zIndex: 2,
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: "28px",
            fontWeight: "500",
            marginBottom: "20px",
            lineHeight: "1.4",
          }}
        >
          You might have a question…  
          <br />
          <span style={{ fontWeight: "600" }}>
            What if you said NO?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textShadow: "0 4px 18px rgba(0,0,0,0.6)",
          }}
        >
          <strong>That’s okay 🙂</strong>
          <br />
          Not every love story needs a YES.
          <br />
  May be in this life,
          luck is not there in your fate
          to get my love😉.
          <br />
          But maybe in the next life…🫡
          <br />
          <strong><br />You have to be mine❤️For sure.</strong>
          <br />
          And in this life
          <br />
          Just Be Friends.
          Be there for me.
          <br /><br />
          <strong>
            And I do...Anytime... Every time.
          </strong>
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={onNext}
          style={{
            marginTop: "30px",
            padding: "14px 48px",
            borderRadius: "50px",
            border: "none",
            background: "white",
            color: "#111",
            fontSize: "15px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Continue 🤍
        </motion.button>
      </motion.div>
    </div>
  );
}
