"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Send } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`mx-auto max-w-7xl rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between ${
          scrolled 
            ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl" 
            : "bg-transparent"
        }`}
      >
{/* Logo Section - The "Lifted" Shadow Look */}
<div 
  className="relative group cursor-pointer" 
  onClick={() => scrollToSection("home")}
>
  {/* THE SHADOW: Stays "on the ground" */}
  <span className="absolute inset-0 text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none 
                   text-purple-600/40 blur-[3px] translate-y-[3px] translate-x-[1px] -z-10 select-none transition-transform group-hover:translate-y-[4px]">
    EVENTS DISTRICT
  </span>

  {/* THE TEXT: The "lifted" layer */}
  <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none 
                 text-white relative z-10 transition-transform group-hover:-translate-y-[1px]">
    EVENTS DISTRICT
  </h1>
</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
            <Send size={18} className="hover:text-white cursor-pointer transition-colors" />
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-black/95 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg text-gray-300 hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}