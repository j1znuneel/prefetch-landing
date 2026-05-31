"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroCodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm i prefetch-ai";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleCopy}>
      {/* Pastel Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-100 via-purple-50 to-teal-50 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      <div className="relative h-[72px] flex items-center gap-6 px-8 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all hover:border-indigo-100 group-active:scale-[0.98]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-lime-400" />
          <code className="text-xl font-mono font-bold tracking-tight text-slate-800">
            {command}
          </code>
        </div>
        
        <div className="pl-6 border-l border-slate-100 text-slate-300 group-hover:text-indigo-400 transition-colors">
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Check className="w-5 h-5 text-lime-500" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Copy className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
