import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <motion.button
      onClick={toggle}
      className="p-3 rounded-xl bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground shadow-lg transition-all duration-300 active:scale-95"
      whileHover={{ scale: 1.1, rotateY: 180 }}
      transition={{ duration: 0.5 }}
      aria-label="Toggle theme"
      style={{ perspective: 400 }}
    >
      <motion.div
        animate={{ rotateY: dark ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
