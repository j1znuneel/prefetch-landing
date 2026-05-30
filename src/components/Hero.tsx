"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, MoveRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-100 border border-lime-200 text-[10px] font-black uppercase tracking-widest text-lime-700 mb-10 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Physical Intelligence Engine v1.0</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-8xl font-black text-center tracking-tight max-w-5xl px-4 leading-[0.95] text-slate-950"
      >
        Zero-Latency React Apps through{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          Physical Intelligence.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 text-xl md:text-2xl text-slate-500 text-center max-w-3xl px-4 font-medium leading-relaxed"
      >
        PrefetchAI predicts user intent in real-time, triggering background data
        fetches before the click happens.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() => document.getElementById("visualizer")?.scrollIntoView({ behavior: "smooth" })}
          className="ruul-button flex items-center gap-2 !px-10 !py-5 text-lg"
        >
          Get Started
          <MoveRight className="w-5 h-5" />
        </button>
        <a
          href="https://github.com/prefetchai/prefetchai"
          target="_blank"
          rel="noopener noreferrer"
          className="ruul-button-outline flex items-center gap-2 !px-10 !py-5 text-lg shadow-sm"
        >
          <GitBranch className="w-5 h-5" />
          View on GitHub
        </a>
      </motion.div>

      {/* Trusted By / Logos Section (Inspired by Ruul) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 flex flex-col items-center gap-8 w-full"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
          POWERING NEXT-GEN INTERFACES
        </span>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
          <span className="text-2xl font-black tracking-tighter">PREFETCH_LABS</span>
          <span className="text-2xl font-black tracking-tighter italic underline decoration-lime-400">VELOCITY_UX</span>
          <span className="text-2xl font-black tracking-tighter">INTENT_NET</span>
          <span className="text-2xl font-black tracking-tighter">REACT_PRO</span>
        </div>
      </motion.div>
    </div>
  );
};
