"use client";
import { motion } from "framer-motion";

const ScrollingTicker = () => {
  const services = [
    "Corporate Events", "Weddings", "Private Parties", 
    "Product Launches", "Full Service Planning", "Sound & Lighting",
    "Decor & Design", "Photography", "Catering"
  ];

  return (
    <div className="w-full bg-black dark:bg-white overflow-hidden py-3 flex border-y border-purple-500/30">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-10"
      >
        {[...services, ...services].map((service, index) => (
          <span key={index} className="text-white dark:text-black font-black text-xs uppercase tracking-[0.4em] flex items-center">
            {service} <span className="ml-10 text-purple-500">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTicker;