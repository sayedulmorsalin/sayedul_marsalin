"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Smartphone, ShoppingBag, MessageSquare, HeartPulse, ShieldCheck, Sparkles, ExternalLink, ArrowRight, FolderOpen, Maximize2, X, Cpu, TrendingUp } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { playSoundEffect } from "./SoundToggle";
import SpotlightCard from "./SpotlightCard";
import AutoScrollCarousel from "./AutoScrollCarousel";

export default function InteractiveAppPreview() {
  const [selectedAppId, setSelectedAppId] = useState<string>("dadu-ecommerce");
  const [activeScreenTab, setActiveScreenTab] = useState<"overview" | "features" | "stats">("overview");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const selectedApp = projectsData.find((p) => p.id === selectedAppId) || projectsData[0];
  const screenshots = selectedApp.screenshots || [selectedApp.image];

  const showcaseApps = [
    {
      id: "dadu-ecommerce",
      title: "DADU E-commerce",
      category: "Google Play Store App",
      icon: ShoppingBag,
    },
    {
      id: "meal-assistant",
      title: "Meal Assistant AI",
      category: "Google Play Store App",
      icon: HeartPulse,
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
            Clean mobile screenshots fitted seamlessly inside a 3D smartphone frame with interactive controls outside.
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
                  setActiveScreenTab("overview");
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

        {/* Main Grid: Clean Smartphone Frame + Info Card Outside */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clean Smartphone Mockup (No Text Inside) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[310px] sm:max-w-[330px] h-[570px] sm:h-[600px] bg-[#0c0c1e] rounded-[48px] p-3 border-4 border-slate-700/60 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(124,58,237,0.25)] overflow-hidden group">
              {/* Smartphone Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-white/10 shadow-md">
                <span className="text-[9px] font-mono font-bold text-slate-400">DADU OS</span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
              </div>

              {/* Inner Smartphone Screen Frame - Displays Pure App Screenshot Only */}
              <div className="w-full h-full bg-[#050510] rounded-[38px] overflow-hidden relative border border-white/10">
                {/* 100% Full-Screen Screenshot Carousel fitting smartphone frame */}
                <div className="absolute inset-0 z-0 w-full h-full">
                  <AutoScrollCarousel
                    images={screenshots}
                    alt={`${selectedApp.title} Flutter Mobile App live demo preview by Md. Sayedul Marsalin`}
                    aspectRatioClass="h-full w-full"
                    objectFitClass="object-cover object-top"
                    hideVignette={true}
                  />
                </div>
              </div>
            </div>

            {/* Click to Expand Lightbox Button Outside Phone */}
            <button
              onClick={() => {
                playSoundEffect("click");
                setLightboxImage(screenshots[0]);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-brand-violet hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Maximize2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Expand Screenshot Fullscreen</span>
            </button>
          </div>

          {/* Right Column: App Information & Control Panel (Moved Outside Phone) */}
          <div className="lg:col-span-7 space-y-6">
            <SpotlightCard className="p-8 sm:p-10">
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-violet text-xs font-mono font-bold uppercase">
                    {selectedApp.badgeText}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedApp.category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                {selectedApp.title}
              </h3>

              {/* Mode Tabs Outside Phone */}
              <div className="flex items-center gap-2 mb-6 p-1.5 rounded-xl bg-white/5 border border-white/10 w-fit">
                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setActiveScreenTab("overview");
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeScreenTab === "overview"
                      ? "bg-brand-purple text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  App Overview
                </button>
                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setActiveScreenTab("features");
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeScreenTab === "features"
                      ? "bg-brand-purple text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Engineering Highlights
                </button>
                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setActiveScreenTab("stats");
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeScreenTab === "stats"
                      ? "bg-brand-purple text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Performance Metrics
                </button>
              </div>

              {/* Dynamic Content Panel Outside Phone */}
              <AnimatePresence mode="wait">
                {activeScreenTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                      {selectedApp.description}
                    </p>

                    {/* Folder Location Guide */}
                    <div className="p-3.5 rounded-xl bg-brand-purple/15 border border-brand-purple/30 text-xs text-brand-violet font-mono mb-6 flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 flex-shrink-0 text-brand-cyan" />
                      <span>Image Directory: <strong>public/projects/{selectedApp.id}/</strong></span>
                    </div>
                  </motion.div>
                )}

                {activeScreenTab === "features" && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 space-y-3"
                  >
                    {selectedApp.keyHighlights ? (
                      selectedApp.keyHighlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                          <Sparkles className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-200">{item}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-400 text-sm">High performance Flutter cross-platform architecture.</p>
                    )}
                  </motion.div>
                )}

                {activeScreenTab === "stats" && (
                  <motion.div
                    key="stats"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 grid grid-cols-2 sm:grid-cols-3 gap-3"
                  >
                    {selectedApp.metrics?.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <TrendingUp className="w-4 h-4 text-brand-cyan mx-auto mb-1" />
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{m.label}</p>
                        <p className="font-mono text-base font-bold text-white mt-1">{m.value}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

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

      {/* 100% Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[100] flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-2xl"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-[78vh] max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                <Image
                  src={lightboxImage}
                  alt="Full-Screen Mobile App Screenshot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-display text-lg font-bold text-white mb-1">
                  {selectedApp.title} — App Screen View
                </p>
                <p className="text-xs text-slate-400">Click anywhere outside to exit</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
