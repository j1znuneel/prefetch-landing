import React from "react";
import { Hero } from "@/components/Hero";
import { PredictiveMock } from "@/components/PredictiveMock";
import {
  Zap,
  Brain,
  Target,
  Globe,
  GitBranch,
  Activity,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans">
      {/* Minimal Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-lg">P</div>
          <span className="font-extrabold text-xl tracking-tighter">PrefetchAI</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-bold text-[#666666]">
            <a href="#" className="hover:text-black transition-colors">Engine</a>
            <a href="#" className="hover:text-black transition-colors">Docs</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
          </div>
          <button className="pill-button">Sign Up</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-24 pb-16 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 max-w-5xl">
            Zero latency. <br />No infrastructure.
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] max-w-2xl font-medium mb-12">
            Predict user intent in real-time. Prefetch data before the click. 
            Invisible intelligence for React.
          </p>
          <div className="flex gap-4">
             <button className="pill-button px-8 py-3 text-base">Get Started</button>
             <button className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 transition-all">View GitHub</button>
          </div>
        </section>

        {/* Visualizer Section (Visual Centerpiece) */}
        <section className="py-24 flex justify-center overflow-hidden">
          <PredictiveMock />
        </section>

        {/* Feature Grid (3x2) */}
        <section className="py-32 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <FeatureCell
              icon={<Activity className="w-6 h-6" />}
              title="Kinematic Intent"
              description="Sub-millisecond tracking of cursor velocity and acceleration."
            />
            <FeatureCell
              icon={<Brain className="w-6 h-6" />}
              title="Markov Intelligence"
              description="Pattern-based prefetching that learns user journeys."
            />
            <FeatureCell
              icon={<Target className="w-6 h-6" />}
              title="Multi-Point Alignment"
              description="High-precision targeting for intent confirmation."
            />
            <FeatureCell
              icon={<Globe className="w-6 h-6" />}
              title="Network Aware"
              description="Real-time RTT adjustments for confidence thresholds."
            />
            <FeatureCell
              icon={<Cpu className="w-6 h-6" />}
              title="Zero Config"
              description="Drop-in React hook. No infrastructure changes needed."
            />
            <FeatureCell
              icon={<Layers className="w-6 h-6" />}
              title="Safe & Fast"
              description="GET-only, 5s TTL cache, automatic deduplication."
            />
          </div>
        </section>

        {/* Punchy Code Section */}
        <section id="installation" className="py-32 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl mb-8">One hook. Total speed.</h2>
          <p className="text-[#666666] text-xl mb-16 max-w-xl">
            Zero setup. Just code. PrefetchAI handles the physics.
          </p>
          
          <div className="w-full max-w-3xl bg-black rounded-[2rem] p-8 text-left shadow-2xl overflow-hidden">
            <pre className="text-sm md:text-base font-mono leading-relaxed text-zinc-400">
              <code className="text-indigo-400 italic">import</code> <code className="text-zinc-100">{"{ usePredictiveFetch }"}</code> <code className="text-indigo-400 italic">from</code> <code className="text-lime-400">"prefetch-ai"</code>;{"\n\n"}
              <code className="text-indigo-400 italic">const</code> {"{ prefetch }"} = <code className="text-indigo-400 italic">usePredictiveFetch</code>({"{"}{"\n"}
              {"  "}endpoint: <code className="text-lime-400">"/api/data"</code>,{"\n"}
              {"  "}threshold: <code className="text-zinc-100">0.85</code>{"\n"}
              {"}"});
            </pre>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="py-24 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-lg">P</div>
            <span className="font-extrabold text-xl tracking-tighter">PrefetchAI</span>
          </div>
          <div className="flex gap-12 text-sm font-bold text-[#666666]">
            <a href="#" className="hover:text-black">GitHub</a>
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">Discord</a>
            <a href="#" className="hover:text-black">MIT License</a>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
            © 2026 PREFETCH_AI_CORE
          </div>
        </footer>
      </div>
    </main>
  );
}

function FeatureCell({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-12 flex flex-col items-center text-center border-slate-100 border-t md:border-t-0 border-l-0 md:border-l first:border-l-0 odd:bg-white/30">
      <div className="mb-6 text-black">{icon}</div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-sm text-[#666666] leading-relaxed max-w-[200px]">{description}</p>
    </div>
  );
}
