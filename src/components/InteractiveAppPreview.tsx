"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Smartphone, ShoppingBag, MessageSquare, HeartPulse, ShieldCheck, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { playSoundEffect } from "./SoundToggle";
import SpotlightCard from "./SpotlightCard";

export default function InteractiveAppPreview() {
  const [selectedAppId, setSelectedAppId] = useState<string>("dadu-ecommerce");
  const [activeScreenTab, setActiveScreenTab] = useState<"home" | "details" | "stats">("home");

  const selectedApp = projectsData.find((p) => p.id === selectedAppId) || projectsData[0];

  const showcaseApps = [
    {
      id: "dadu-ecommerce",
      title: "DADU E-commerce",
      category: "E-Commerce Mobile",
      icon: ShoppingBag,
      color: "from-purple-500 to-indigo-600",
      accent: "#7c3aed",
    },
    {
      id: "talksy",
      title: "Talksy Realtime Chat",
      category: "Messaging App",
      icon: MessageSquare,
      color: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
    },
    {
      id: "meal-assistant",
      title: "Meal Assistant AI",
      category: "Health & Fitness",
      icon: HeartPulse,
      color: "from-amber-500 to-rose-600",
      accent: "#f59e0b",
    },
  ];

  return (
    <section id="showcase" className="py-24 relative z-10 bg-[#070716]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Live Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Experience My <span className="bg-grad-primary bg-clip-text text-transparent">Apps Live</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Click through the apps below to test interactive mobile views, architecture stats, and production app features.
          </p>
        </div>

        {/* Interactive App Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {showcaseApps.map((app) => {
            const Icon = app.icon;
            const isSelected = selectedAppId === app.id;
            return (
              <button
                key={app.id}
                onClick={() => {
                  playSoundEffect("click");
                  setSelectedAppId(app.id);
                  setActiveScreenTab("home");
                }}
                onMouseEnter={() => playSoundEffect("hover")}
                className={`px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 ${
                  isSelected
                    ? "bg-grad-primary text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] scale-105"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? "bg-white/20" : "bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight">{app.title}</p>
                  <p className="text-[10px] text-slate-300 opacity-80">{app.category}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Interactive Smartphone Mockup + Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 3D Smartphone Device Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/18] bg-[#0c0c1e] rounded-[48px] p-3 border-4 border-slate-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(124,58,237,0.2)] overflow-hidden group">
              {/* Smartphone Notch / Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              </div>

              {/* Smartphone Screen Inner Frame */}
              <div className="w-full h-full bg-[#050510] rounded-[38px] overflow-hidden relative flex flex-col justify-between pt-10 pb-6 px-4 border border-white/10">
                {/* Screen Content View */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedApp.id}-${activeScreenTab}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {activeScreenTab === "home" && (
                      <div className="space-y-3">
                        <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                          <Image
                            src={selectedApp.image}
                            alt={selectedApp.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-70" />
                          <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-brand-purple/90 text-[10px] font-bold text-white uppercase tracking-wider">
                            {selectedApp.badgeText}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-display font-bold text-white text-base">
                            {selectedApp.title}
                          </h4>
                          <p className="text-slate-300 text-xs line-clamp-2 mt-1">
                            {selectedApp.description}
                          </p>
                        </div>

                        {/* Interactive Simulated Action */}
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span className="text-[11px] font-mono text-slate-300">
                              Status: Production Ready
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-brand-cyan">60 FPS</span>
                        </div>
                      </div>
                    )}

                    {activeScreenTab === "details" && (
                      <div className="space-y-2 text-xs">
                        <p className="font-bold text-brand-violet uppercase tracking-wider text-[10px]">
                          Key Highlights
                        </p>
                        {selectedApp.keyHighlights ? (
                          selectedApp.keyHighlights.map((h, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-[11px] flex items-start gap-2"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-brand-amber flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-slate-400">High performance cross-platform application.</p>
                        )}
                      </div>
                    )}

                    {activeScreenTab === "stats" && (
                      <div className="space-y-3">
                        <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">
                          Performance Metrics
                        </p>
                        {selectedApp.metrics?.map((m, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex justify-between items-center"
                          >
                            <span className="text-xs text-slate-300">{m.label}</span>
                            <span className="font-mono text-sm font-bold text-white">
                              {m.value}
                            </span>
                          </div>
                        ))}
                        <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono text-center">
                          ✔ Verified 0 memory leaks
                        </div>
                      </div>
                    )}

                    {/* Bottom Navigation Pill Inside Phone Screen */}
                    <div className="mt-4 pt-2 border-t border-white/10 flex justify-around items-center">
                      <button
                        onClick={() => {
                          playSoundEffect("click");
                          setActiveScreenTab("home");
                        }}
                        className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all ${
                          activeScreenTab === "home"
                            ? "bg-brand-purple text-white"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        App Screen
                      </button>
                      <button
                        onClick={() => {
                          playSoundEffect("click");
                          setActiveScreenTab("details");
                        }}
                        className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all ${
                          activeScreenTab === "details"
                            ? "bg-brand-purple text-white"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Highlights
                      </button>
                      <button
                        onClick={() => {
                          playSoundEffect("click");
                          setActiveScreenTab("stats");
                        }}
                        className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all ${
                          activeScreenTab === "stats"
                            ? "bg-brand-purple text-white"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Metrics
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Smartphone Home Indicator Bar */}
                <div className="w-24 h-1 bg-white/40 rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>

          {/* Right Column: App Information & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-violet text-xs font-mono font-bold uppercase">
                  {selectedApp.badgeText}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Category: {selectedApp.category}
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-white mb-4">
                {selectedApp.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {selectedApp.description}
              </p>

              {/* Key Highlights List */}
              {selectedApp.keyHighlights && (
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Engineering Achievements
                  </h4>
                  {selectedApp.keyHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedApp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-brand-purple/15 border border-brand-purple/25 text-xs font-mono text-brand-violet"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedApp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSoundEffect("click")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                {selectedApp.liveUrl && (
                  <a
                    href={selectedApp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSoundEffect("click")}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-grad-primary text-white font-semibold text-sm shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 transition-all"
                  >
                    <span>Download App</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
