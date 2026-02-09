"use client";
import { motion } from "framer-motion";

const BackgroundLayers = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-white dark:bg-[#0a0a0a]">
      {/* Top Left Purple Blob */}
      <motion.div 
        animate={{ x: [-40, 40, -40], y: [-40, 40, -40], scale: [1, 1.2, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-purple-600/30 dark:bg-purple-900/40 rounded-full blur-[120px]" 
      />
      
      {/* Bottom Right Blue Blob */}
      <motion.div 
        animate={{ x: [40, -40, 40], y: [40, -40, 40], scale: [1, 1.3, 1] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-blue-600/20 dark:bg-blue-900/30 rounded-full blur-[150px]" 
      />

      {/* Film Grain Texture */}
      <div 
        className="fixed inset-0 z-[60] pointer-events-none opacity-[0.04] dark:opacity-[0.07] mix-blend-overlay" 
        style={{ 
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`, 
          filter: 'contrast(120%) brightness(120%)' 
        }} 
      />
    </div>
  );
};

export default BackgroundLayers;