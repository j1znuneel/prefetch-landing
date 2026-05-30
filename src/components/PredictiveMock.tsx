"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  AnimatePresence, 
  useAnimationFrame 
} from "framer-motion";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const TrailSegment = ({ x, y, index }: { x: any; y: any; index: number }) => {
  const size = Math.max(1, 4 - index * 0.3);
  return (
    <motion.div
      style={{ x, y, width: size, height: size, translateX: "-50%", translateY: "-50%" }}
      className="absolute bg-black/10 rounded-full pointer-events-none"
    />
  );
};

export const PredictiveMock = () => {
  const [status, setStatus] = useState<"idle" | "tracking" | "prefetching" | "ready">("idle");
  const [score, setScore] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const numSegments = 12;
  const trailX = useRef(Array.from({ length: numSegments }, () => useMotionValue(0)));
  const trailY = useRef(Array.from({ length: numSegments }, () => useMotionValue(0)));

  useAnimationFrame(() => {
    let targetX = mouseX.get();
    let targetY = mouseY.get();
    for (let i = 0; i < numSegments; i++) {
      const sx = trailX.current[i];
      const sy = trailY.current[i];
      const factor = 0.2 + (i * 0.02); 
      const nextX = sx.get() + (targetX - sx.get()) * factor;
      const nextY = sy.get() + (targetY - sy.get()) * factor;
      sx.set(nextX);
      sy.set(nextY);
      targetX = nextX;
      targetY = nextY;
    }
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !buttonRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseX.set(x);
        mouseY.set(y);
        const buttonRect = buttonRef.current.getBoundingClientRect();
        
        const getMinDist = (targetRect: DOMRect) => {
          const b = { 
            left: targetRect.left - rect.left, 
            top: targetRect.top - rect.top, 
            right: targetRect.right - rect.left, 
            bottom: targetRect.bottom - rect.top 
          };
          const dx = Math.max(b.left - x, 0, x - b.right);
          const dy = Math.max(b.top - y, 0, y - b.bottom);
          return Math.sqrt(dx * dx + dy * dy);
        };

        const distance = getMinDist(buttonRect);
        const maxDist = 300;
        let newScore = Math.max(0, Math.min(100, (1 - distance / maxDist) * 100));

        if (distance < 200) {
          setStatus("tracking");
          if (distance < 100) setStatus("prefetching");
          if (distance < 15) setStatus("ready");
        } else {
          setStatus("idle");
        }
        setScore(Math.floor(newScore));
      } else {
        setStatus("idle");
        setScore(0);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full max-w-5xl px-4 pb-12 pt-0 flex flex-col items-center">
      {/* <h2 className="text-4xl md:text-6xl mb-12 text-center">Test our Prefetch.</h2> */}
      
      <div className="w-full relative">
        {/* Aurora Effect behind the card */}
        <div className="absolute inset-0 aurora-glow -z-10 opacity-60" />
        
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Browser Top Bar */}
          <div className="browser-header">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="ml-4 px-3 py-1 bg-slate-50 rounded-md text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              Simulation_Engine_v1.0
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative w-full h-[500px] bg-white flex flex-col items-center justify-center cursor-none group"
          >
            {/* Probability Indicator */}
            <div className="absolute top-12 left-12 flex flex-col items-start font-sans">
               <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-1">Intent</div>
               <div className="text-4xl font-black text-black tabular-nums leading-none tracking-wide">
                {score.toString().padStart(3, '0')}%
               </div>
            </div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {trailX.current.map((x, i) => (
                <TrailSegment key={i} index={i} x={x} y={trailY.current[i]} />
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* The Action Button - Coolvetica */}
              <button
                ref={buttonRef}
                className={cn(
                  "relative px-12 py-5 bg-black text-white rounded-2xl font-black text-xl transition-all duration-500 shadow-xl font-sans tracking-widest",
                  status === "ready" && "bg-indigo-600 shadow-indigo-100"
                )}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status === "ready" ? "READY" : "PREDICT"}
                  <MoveRight className={cn("w-6 h-6 transition-transform", status === "ready" && "translate-x-1")} />
                </span>
              </button>
              
              <div className={cn(
                "text-[12px] font-black uppercase tracking-[0.1em] transition-all duration-300 px-4 py-1.5 rounded-full border font-sans",
                status === "idle" ? "text-slate-200 border-transparent" : "text-slate-600 border-slate-50 bg-slate-50/50"
              )}>
                {status === "idle" && "Move cursor to test engine"}
                {status === "tracking" && "Tracking trajectory..."}
                {status === "prefetching" && "Fetch triggered"}
                {status === "ready" && "Latency eliminated"}
              </div>
            </div>

            <SmoothCursorWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

const SmoothCursorWrapper = () => {
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const parent = document.querySelector('.cursor-none');
    if (!parent) return;
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    parent.addEventListener('mouseenter', onEnter);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mouseenter', onEnter);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  if (!isHovering) return null;
  return <SmoothCursor />;
};
