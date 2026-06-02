"use client";
import { motion, Variants } from "framer-motion";

export function Character() {
  // --- Animation Variants ---
  const bodyVariants: Variants = {
    initial: { fill: "#FFFFFF", stroke: "#000000" },
    hover: { 
      fill: "#000000", 
      stroke: "#00C950", // Glow effect on hover
      transition: { duration: 0.2 } 
    }
  };

  const innerBoxVariants: Variants = {
    initial: { fill: "#000000" },
    hover: { fill: "#FFFFFF", transition: { duration: 0.2 } }
  };

  const eyeVariants: Variants = {
    initial: { fill: "#FFFFFF" },
    hover: { fill: "#00C950" } // Eyes turn green on hover
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative cursor-pointer group"
    >
      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 100 100"
        fill="none"
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Shadow - Scales with the float animation */}
        <motion.ellipse
          cx="50"
          cy="95"
          rx="25"
          ry="4"
          fill="black"
          animate={{ opacity: [0.1, 0.05, 0.1], scale: [1, 0.9, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Body - Solid Neobrutalist Box */}
        <motion.rect
          variants={bodyVariants}
          x="20"
          y="25"
          width="60"
          height="60"
          strokeWidth="6"
        />

        {/* Content Area - Secondary Box */}
        <motion.rect
          variants={innerBoxVariants}
          x="30"
          y="35"
          width="40"
          height="30"
        />

        {/* Eyes with Blink & Hover Glitch */}
        <motion.rect
          variants={eyeVariants}
          x="38"
          y="48"
          width="8"
          height="6"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ 
            duration: 0.2, 
            repeat: Infinity, 
            repeatDelay: 3 + Math.random() * 2 // Randomized blink timing
          }}
        />
        <motion.rect
          variants={eyeVariants}
          x="54"
          y="48"
          width="8"
          height="6"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ 
            duration: 0.2, 
            repeat: Infinity, 
            repeatDelay: 3 + Math.random() * 2 
          }}
        />

        {/* Top Detail - Solid Geometric Shape */}
        <motion.rect
          variants={innerBoxVariants}
          x="47"
          y="15"
          width="6"
          height="10"
        />
        <motion.rect
          variants={innerBoxVariants}
          x="44"
          y="9"
          width="12"
          height="6"
          animate={{ 
            opacity: [1, 0.4, 1],
            scaleX: [1, 1.2, 1] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    </motion.div>
  );
}