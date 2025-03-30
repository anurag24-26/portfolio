import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cursorEmoji = "🔥"; // Change to any emoji like 🎯, 🚀, 🖱️, 🎨

  useEffect(() => {
    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {cursorEmoji}
    </div>
  );
};

export default CustomCursor;
