"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code, Play, CheckCircle, Copy, Cpu, Layers } from "lucide-react";
import { flutterCodeSnippet } from "@/data/portfolioData";
import { playSoundEffect } from "./SoundToggle";

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"code" | "logs" | "architecture">("code");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    playSoundEffect("click");
    navigator.clipboard.writeText(flutterCodeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full glass-card rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Terminal Window Header Bar */}
      <div className="bg-[#0a0a18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400 font-medium">
            {flutterCodeSnippet.filename}
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => {
              playSoundEffect("hover");
              setActiveTab("code");
            }}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "code"
                ? "bg-brand-purple text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Code className="w-3 h-3" />
            <span>Dart Code</span>
          </button>
          <button
            onClick={() => {
              playSoundEffect("hover");
              setActiveTab("logs");
            }}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "logs"
                ? "bg-brand-purple text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Build Logs</span>
          </button>
          <button
            onClick={() => {
              playSoundEffect("hover");
              setActiveTab("architecture");
            }}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "architecture"
                ? "bg-brand-purple text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Specs</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Copy Code"
        >
          {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Terminal Content Body */}
      <div className="bg-[#050512] p-5 font-mono text-xs min-h-[260px] overflow-x-auto relative">
        <AnimatePresence mode="wait">
          {activeTab === "code" && (
            <motion.pre
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-slate-300 leading-relaxed font-mono"
            >
              {flutterCodeSnippet.code.split("\n").map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell text-slate-600 select-none pr-4 text-right">
                    {idx + 1}
                  </span>
                  <span className="table-cell">
                    {line
                      .replace(/(class|extends|final|override|void|get|return|if)/g, "🔑 $1")
                      .split("🔑 ")
                      .map((chunk, i) =>
                        i === 0 ? (
                          chunk
                        ) : (
                          <span key={i}>
                            <span className="text-brand-pink font-semibold">
                              {chunk.split(" ")[0]}
                            </span>
                            {chunk.slice(chunk.split(" ")[0].length)}
                          </span>
                        ))}
                  </span>
                </div>
              ))}
            </motion.pre>
          )}

          {activeTab === "logs" && (
            <motion.div
              key="logs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-slate-300 font-mono"
            >
              <div className="flex items-center gap-2 text-brand-cyan mb-3">
                <Play className="w-4 h-4 animate-pulse" />
                <span className="font-bold">Executing flutter run -d chrome --release</span>
              </div>
              {flutterCodeSnippet.logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    log.startsWith("✔")
                      ? "text-emerald-400 font-bold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20"
                      : "text-slate-400"
                  }`}
                >
                  <span className="text-slate-600 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 font-mono"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-brand-violet font-bold mb-2">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                  <span>Architecture</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Clean Architecture pattern separating UI Layer, Domain Use Cases, Data Repositories, and Remote/Local Sources.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Performance</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  60-120 FPS render pipeline, lazy list view loading, const widget caching, and optimized memory disposal.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 sm:col-span-2">
                <div className="flex items-center justify-between text-brand-amber font-bold mb-1">
                  <span>State Management Stack</span>
                  <span className="text-[10px] text-slate-400">GetX / BLoC / Provider</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-grad-primary h-full rounded-full w-[95%]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
