import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState("");

  const correctPassword = "I accept"; // change if needed

  const handleSubmit = () => {
    if (password === correctPassword) {
      onUnlock();
    } else {
      alert("Access Denied ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
          url("/job-bg.jpg") center/cover no-repeat
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "rgba(15,15,15,0.78)",
          backdropFilter: "blur(18px)",
          padding: "70px 60px",
          borderRadius: "26px",
          textAlign: "center",
          color: "white",
          maxWidth: "560px",
          width: "100%",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            letterSpacing: "0.5px",
          }}
        >
          🎉 Congratulations!
        </h2>

        <p
          style={{
            opacity: 0.9,
            marginBottom: "30px",
            lineHeight: "1.7",
            fontSize: "16px",
          }}
        >
          You have been shortlisted for a
          <br />
          <strong style={{ color: "#ff4d6d" }}>
            Special Lifetime Role
          </strong>.
          <br />
          A surprise is waiting inside.
          <br />
          <br />
          Enter your access code to unlock your offer letter.
        </p>

        {/* INPUT */}
        <input
          type="password"
          placeholder="Enter Access Code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          style={{
            padding: "13px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            marginBottom: "25px",
            outline: "none",
            textAlign: "center",
            fontSize: "14px",
            background: "rgba(255,255,255,0.1)",
            color: "white",
          }}
        />

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          style={{
            padding: "13px 36px",
            borderRadius: "30px",
            border: "none",
            background: "linear-gradient(90deg,#ff1e56,#ff4d6d)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            boxShadow: "0 10px 25px rgba(255,30,86,0.4)",
            fontSize: "15px",
          }}
        >
          View Offer Letter →
        </motion.button>
      </motion.div>
    </div>
  );
}
