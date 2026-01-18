"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const WaitlistInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Success! We'll notify ${email} soon.`);
    setEmail("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-md mx-auto mb-16 px-4"
    >
      <form onSubmit={handleSubmit} className="relative group">
        <input
          type="email"
          required
          placeholder="Join the VIP Waitlist..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl text-black dark:text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 shadow-2xl"
        />
        <button 
          type="submit"
          className="absolute right-2 top-2 bottom-2 px-6 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all active:scale-95 text-xs uppercase tracking-widest"
        >
          Join
        </button>
      </form>
      <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-3 text-center">
        Be the first to know when we launch
      </p>
    </motion.div>
  );
};

export default WaitlistInput;