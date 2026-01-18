"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SocialCard = ({ href, icon: Icon, label, bgColor, textColor = "text-white", className = "" }: any) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -20, y: x * 20 });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: 1000 }}
      className={`flex flex-col items-center justify-center p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] ${bgColor} ${textColor} shadow-2xl transition-all border border-black/5 dark:border-white/10 ${className}`}
    >
      <motion.div animate={{ y: rotate.x * 0.5, x: rotate.y * 0.5 }}>
        <Icon size={32} strokeWidth={2.5} className={textColor} />
      </motion.div>
      <span className={`mt-3 font-black text-xs md:text-sm uppercase tracking-[0.2em] text-center ${textColor}`}>
        {label}
      </span>
    </motion.a>
  );
};

export default SocialCard;