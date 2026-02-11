import { motion } from "framer-motion";

export default function ScreenQuestion({ onNext }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #064e3b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          background: "rgba(255,255,255,0.12)",
          padding: "50px 40px",
          borderRadius: "28px",
          maxWidth: "460px",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            fontSize: "22px",
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          Some moments are not about answers.
          <br />
          They are about feelings,
          <br />
          memories,
          <br />
          and choosing each other… silently ❤️
        </motion.p>

        <button
          onClick={onNext}
          style={{
            padding: "14px 36px",
            borderRadius: "30px",
            border: "none",
            background: "#f43f5e",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
}
