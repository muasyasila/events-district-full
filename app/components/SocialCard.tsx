"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SocialCard = ({ href, icon: Icon, label, hoverGlow, className = "" }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      className={`flex flex-col items-center group transition-all duration-300 ${className}`}
    >
      {/* Small Icon Square */}
      <div 
        className="relative flex items-center justify-center aspect-square w-full rounded-xl 
          bg-zinc-50 dark:bg-zinc-900/50 
          border border-black/5 dark:border-white/10 
          transition-all duration-500 overflow-hidden mb-2"
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ backgroundColor: hoverGlow }}
        />

        <Icon 
          size={18} 
          strokeWidth={1.5} 
          className="relative z-10 text-zinc-400 transition-all duration-500"
          style={{ color: isHovered ? hoverGlow : '' }}
        />

        {/* --- ADDED THE ARROW HERE --- */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
          className="absolute bottom-1.5 right-1.5 z-20"
        >
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={hoverGlow} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </motion.div>
        {/* ---------------------------- */}
      </div>

      {/* Tiny Label */}
      <span 
        className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: isHovered ? hoverGlow : '#71717a' }}
      >
        {label}
      </span>
    </motion.a>
  );
};

export default SocialCard;