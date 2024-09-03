import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";

// Constants for text content
const DATE = "Running December 12th to 24th";
const HEADER = "Witness the Majestic\nNorthern Lights";
const SUBHEADER = "A Breathtaking Journey to Nature’s Most Spectacular Light Show";
const BUTTON_TEXT = "Join the Adventure";

// Define the color palette for the gradient animation
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function AuroraGradient() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Motion template for the gradient
  const gradient = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgba(2, 6, 23, 0.5) 50%, ${color})`;

  // Dynamic styles for button using motion template
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section className="relative min-h-screen px-16 py-24 text-gray-200 flex flex-col items-center justify-center bg-cover bg-center">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img src="/LandingBackground.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <motion.div
          style={{ backgroundImage: gradient }}
          className="absolute inset-0 bg-no-repeat"
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 text-center">
        <div className="inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          {DATE}
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold whitespace-pre-line sm:leading-tight tracking-wide">
          {HEADER}
        </h1>
        <p className="mt-6 text-sm sm:text-lg font-light text-gray-400">
          {SUBHEADER}
        </p>
        <div className="flex justify-center items-center mt-8">
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 text-sm"
          >
            {BUTTON_TEXT}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default AuroraGradient;