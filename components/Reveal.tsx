"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useAppStore } from "@/store/useStore"; // Import your global store

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  color?: string; // Custom block color
  direction?: "up" | "down";
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.2,
  color = "#00C950",
  direction = "up"
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Access global loading state from Zustand
  const isLoaded = useAppStore((state) => state.isLoaded);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    // Only start animations if the element is in view AND the system loader is finished
    if (isInView && isLoaded) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, isLoaded, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      {/* --- CONTENT LAYER --- */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.6, 
          delay: delay + 0.1, 
          ease: [0.215, 0.61, 0.355, 1] 
        }}
      >
        {children}
      </motion.div>

      {/* --- NEOBRUTALIST BLOCK OVERLAY --- */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ 
          duration: 0.5, 
          delay: delay, 
          ease: "easeIn" 
        }}
        className="absolute top-[4px] bottom-[4px] left-0 right-0 z-20"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};