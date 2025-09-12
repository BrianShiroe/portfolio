// app/components/ui/DominoMotion.tsx
"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type DominoMotionProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number; // optional delay per element
  duration?: number; // animation duration
};

export default function DominoMotion({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
}: DominoMotionProps) {
  const variants = {
    hidden: (() => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -50 };
        case "right":
          return { opacity: 0, x: 50 };
        case "up":
          return { opacity: 0, y: 50 };
        case "down":
          return { opacity: 0, y: -50 };
      }
    })(),
    visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay } },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
