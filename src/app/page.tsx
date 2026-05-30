import React from "react";
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
  Terminal,
  ChevronRight,
  Eye,
} from "lucide-react";
const GITHUB_URL = "https://github.com/j1znuneel/predictive-fetching/";
const NPM_URL = "https://www.npmjs.com/package/prefetch-ai";

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="black"/>
    <path d="M30 70V30H50C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70H30Z" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="10" fill="#bef264"/>
    <path d="M75 30L85 20" stroke="#bef264" strokeWidth="4" strokeLinecap="round"/>
    <path d="M80 50H90" stroke="#bef264" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans">
      {/* Enormous Navigation */}
      <nav className="max-w-7xl mx-auto px-8 py-12 flex justify-between items-center text-zinc-600">
        <div className="flex items-center gap-4 text-black">
          <Logo />
          <span className="font-extrabold text-2xl tracking-wide">PrefetchAI</span>
        </div>
        <div className="flex items-center gap-12 ">
          <div className="hidden lg:flex gap-12  font-black  tracking-wide uppercase">
            <a href="#features" className="hover:text-black transition-colors">Engine</a>
            <a href="#guide" className="hover:text-black transition-colors">Setup</a>
            <a href={GITHUB_URL} target="_blank" className="flex items-center gap-2 hover:text-black transition-colors">
               GitHub
            </a>
            <a href={NPM_URL} target="_blank" className="flex items-center gap-2 hover:text-black transition-colors">
               NPM
            </a>
          </div>
          <a href={GITHUB_URL} target="_blank" className="pill-button flex items-center gap-2 ">
            Star on GitHub
          </a>
        </div>
      </nav>


      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-24 pb-16 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-12 max-w-5xl">
            Zero latency. <br />No infrastructure.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-bold mb-12 tracking-wide">
            Predict user intent in real-time. Prefetch data before the click. 
            Invisible intelligence for React.
          </p>
          <div className="flex gap-4">
             <button className="pill-button-2 px-10 py-5 text-xl font-sans uppercase tracking-wide">Get Started</button>
             <button className="px-10 py-5 bg-white border border-slate-200 rounded-full font- text-xl hover:bg-slate-50 transition-all uppercase tracking-wide">View GitHub</button>
          </div>
        </section>

        {/* Visualizer Section (Visual Centerpiece) */}
        <section className="py-24 flex justify-center overflow-hidden">
          <PredictiveMock />
        </section>

        {/* Feature Grid (3x2) */}
        <section id="features" className="py-32 flex flex-col items-center">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              Platform Features
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto">
              Physics-driven performance.
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 border border-slate-100 rounded-[2.5rem] bg-white overflow-hidden shadow-sm">
            <FeatureCell
              icon={<Activity className="w-8 h-8" />}
              title="Kinematic Intent"
              description="Sub-millisecond tracking of cursor velocity and acceleration."
            />
            <FeatureCell
              icon={<Brain className="w-8 h-8" />}
              title="Markov Intelligence"
              description="Pattern-based prefetching that learns user journeys."
            />
            <FeatureCell
              icon={<Target className="w-8 h-8" />}
              title="Multi-Point Alignment"
              description="High-precision targeting for intent confirmation."
            />
            <FeatureCell
              icon={<Globe className="w-8 h-8" />}
              title="Network Aware"
              description="Real-time RTT adjustments for confidence thresholds."
            />
            <FeatureCell
              icon={<Cpu className="w-8 h-8" />}
              title="Zero Config"
              description="Drop-in React hook. No infrastructure changes needed."
            />
            <FeatureCell
              icon={<Layers className="w-8 h-8" />}
              title="Safe & Fast"
              description="GET-only, 5s TTL cache, automatic deduplication."
            />
          </div>
        </section>

        {/* Implementation Guide Section */}
        <section id="guide" className="py-32 flex flex-col items-center">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              Implementation Guide
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto">
              Setup in seconds.
            </h2>
          </div>

          <div className="w-full max-w-5xl flex flex-col gap-12">
            {/* Step 1: Install */}
            <div className="flex flex-col md:flex-row gap-12 items-start p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-xs">01</div>
                   <h3 className="text-2xl uppercase tracking-wide">Install</h3>
                </div>
                <p className="text-base leading-relaxed font-bold tracking-wide">
                  Dependency-free and lightweight. Less than 5kb gzipped payload.
                </p>
              </div>
              <div className="md:w-2/3 w-full bg-zinc-950 rounded-2xl p-6 shadow-inner flex items-center justify-between font-mono">
                <code className="text-zinc-400 text-sm md:text-base tracking-normal">npm install <span className="text-lime-400 font-mono">prefetch-ai</span></code>
                <Terminal className="w-5 h-5 text-zinc-700" />
              </div>
            </div>

            {/* Step 2: Implement Hook */}
            <div className="flex flex-col md:flex-row gap-12 items-start p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-xs">02</div>
                   <h3 className="text-2xl uppercase tracking-wide">The Hook</h3>
                </div>
                <p className="text-base leading-relaxed font-bold tracking-wide">
                  Drop the hook into any interactive element. The engine automatically calculates physical vectors.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wide">
                    <ChevronRight className="w-3 h-3" />
                    <span>GET-ONLY PREFETCHING</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wide">
                    <ChevronRight className="w-3 h-3" />
                    <span>5S TTL CACHE</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full bg-zinc-950 rounded-2xl p-8 overflow-hidden font-mono">
                <pre className="text-xs md:text-sm leading-relaxed text-zinc-500 overflow-x-auto tracking-normal">
                  <code className="text-indigo-400 italic">import</code> <code className="text-zinc-100">{"{ usePredictiveFetch }"}</code> <code className="text-indigo-400 italic">from</code> <code className="text-lime-400">"prefetch-ai"</code>;{"\n\n"}
                  <code className="text-indigo-400 italic">const</code> {"{ data }"} = <code className="text-indigo-400 italic">usePredictiveFetch</code>(ref, <code className="text-lime-400">"/api/data"</code>);
                </pre>
              </div>
            </div>

            {/* Step 3: Markov Chains */}
            <div className="flex flex-col md:flex-row gap-12 items-start p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-xs">03</div>
                   <h3 className="text-2xl uppercase tracking-wide">Behavior</h3>
                </div>
                <p className="text-base leading-relaxed font-bold tracking-wide">
                  Record transitions to enable statistical prefetching based on user journey patterns.
                </p>
              </div>
              <div className="md:w-2/3 w-full bg-zinc-950 rounded-2xl p-8 overflow-hidden font-mono">
                <pre className="text-xs md:text-sm leading-relaxed text-zinc-500 overflow-x-auto tracking-normal">
                  <code className="text-zinc-400 italic">// Record navigation events</code>{"\n"}
                  <code className="text-zinc-100">MarkovTracker</code>.<code className="text-indigo-400 italic">recordTransition</code>(from, to);{"\n\n"}
                  <code className="text-zinc-400 italic">// Enable behavioral prefetch</code>{"\n"}
                  <code className="text-indigo-400 italic">usePredictiveFetch</code>(ref, url, {"{ "}routeKey: <code className="text-lime-400">"/path"</code>{" }" });
                </pre>
              </div>
            </div>

            {/* Step 4: Debugger */}
            <div className="flex flex-col md:flex-row gap-12 items-start p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-xs">04</div>
                   <h3 className="text-2xl uppercase tracking-wide">Debug</h3>
                </div>
                <p className="text-base leading-relaxed font-bold tracking-wide">
                  Visualize vectors and confidence scores in real-time during development.
                </p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visual Diagnostics</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full bg-zinc-950 rounded-2xl p-8 overflow-hidden font-mono">
                <pre className="text-xs md:text-sm leading-relaxed text-zinc-500 overflow-x-auto tracking-normal">
                  <code className="text-zinc-100">{"<DebugProvider>"}</code>{"\n"}
                  {"  "}<code className="text-zinc-100">{"<PredictiveDebugger />"}</code>{"\n"}
                  {"  "}<code className="text-zinc-100">{"<App />"}</code>{"\n"}
                  <code className="text-zinc-100">{"</DebugProvider>"}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="py-24 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black text-lg">P</div>
            <span className="font-extrabold text-xl tracking-tighter">PrefetchAI</span>
          </div>
          <div className="flex gap-12 text-sm font-bold text-[#666666] tracking-wide uppercase">
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
    <div className="p-16 flex flex-col items-center text-center border-slate-100 md:border-r border-b last:border-b-0 md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(6)]:border-r-0 hover:bg-slate-50 transition-colors group">
      <div className="mb-8 text-black group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-base text-[#666666] leading-relaxed max-w-[220px] font-bold tracking-wide">{description}</p>
    </div>
  );
}
