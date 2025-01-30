/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const colors = [
  "text-primary",
  "text-secondary",
  "text-accent",
  "text-neutral",
  //   "text-purple-500",
  //   "text-pink-500",
  //   "text-orange-500",
];

const FancyText = ({ text }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`text-3xl font-bold transition-colors duration-500 ${colors[colorIndex]}`}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {text}
    </motion.div>
  );
};

export default FancyText;
