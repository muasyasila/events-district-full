"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Instagram, Youtube, MessageCircle, Send, Ghost, 
  Mail, Video, Moon, Sun, Calendar, AtSign 
} from "lucide-react";

// Import our new boxes!
import SocialCard from "./components/SocialCard";
import WhatsAppBubble from "./components/WhatsAppBubble";
import WaitlistInput from "./components/WaitlistInput";
import ScrollingTicker from "./components/ScrollingTicker";
import BackgroundLayers from "./components/BackgroundLayers";
import TimeGreeting from "./components/TimeGreeting";

export default function ComingSoon() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center py-12 px-4 md:px-6 bg-transparent transition-colors duration-500">
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-lg cursor-pointer"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
      </div>

      {/* Logo */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black dark:bg-white border-[3px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(147,51,234,0.5)] mb-12"
      >
        <h1 className="text-white dark:text-black text-xl md:text-3xl font-black italic tracking-tighter uppercase">
          EVENTS DISTRICT
        </h1>
      </motion.div>

      <div className="w-screen mb-12">
        <ScrollingTicker />
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16 px-4 text-black dark:text-white">
        <TimeGreeting />
        <motion.h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
          COMING <br /> SOON
        </motion.h2>

        <motion.div 
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(147,51,234,0)", "0px 0px 20px rgba(147,51,234,0.5)", "0px 0px 0px rgba(147,51,234,0)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-4 cursor-default"
        >
          <Calendar size={16} /> Planning an Event?
        </motion.div>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg italic">Reach out via our socials below.</p>
      </div>

      <WaitlistInput />

      {/* Bento Grid */}
      <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2">
          <SocialCard href="#" icon={Instagram} label="Instagram" bgColor="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
        </div>
        <SocialCard href="#" icon={Video} label="TikTok" bgColor="bg-zinc-950" />
        <SocialCard href="#" icon={MessageCircle} label="WhatsApp" bgColor="bg-[#25D366]" />
        <SocialCard href="#" icon={Ghost} label="Snapchat" bgColor="bg-[#FFFC00]" textColor="text-black" />
        <SocialCard href="#" icon={AtSign} label="Threads" bgColor="bg-zinc-900" />
        <SocialCard href="#" icon={Youtube} label="YouTube" bgColor="bg-[#FF0000]" />
        <SocialCard href="#" icon={Send} label="Facebook" bgColor="bg-[#1877F2]" />
        <div className="col-span-2 md:col-span-4 mt-2">
          <SocialCard href="mailto:info@eventsdistrict.com" icon={Mail} label="Get in Touch via Email" bgColor="bg-zinc-100 dark:bg-zinc-800" textColor="text-zinc-800 dark:text-white" />
        </div>
      </div>

      <footer className="mt-20 pb-10 text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white text-black text-center">
        © 2026 Events District
      </footer>

      {/* Background & Extras */}
      <BackgroundLayers />
      <WhatsAppBubble />
    </main>
  );
}