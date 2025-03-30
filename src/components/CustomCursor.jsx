import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none mix-blend-difference"
      animate={{
        left: position.x - 12,
        top: position.y - 12,
        scale: cursorVariant === "hover" ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    ></motion.div>
  );
};

export default CustomCursor;
