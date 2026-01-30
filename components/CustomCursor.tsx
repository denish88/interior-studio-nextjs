"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [touch, setTouch] = useState(true); // assume touch until we know
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isTouch = "ontouchstart" in window;
    setTouch(isTouch);
    if (isTouch) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);
    const els = document.querySelectorAll("a, button, [role='button']");
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (!mounted || touch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: pos.x, y: pos.y }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: hover ? 1.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)] bg-transparent"
        style={{ width: hover ? 24 : 12, height: hover ? 24 : 12 }}
      />
    </motion.div>
  );
}
