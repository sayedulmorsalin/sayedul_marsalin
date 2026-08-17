"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FolderOpen, Github, Download, ExternalLink, X, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { projectsData, Project } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import { playSoundEffect } from "./SoundToggle";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "admin", label: "Admin Panels" },
    { id: "utility", label: "Utility Apps" },
    { id: "chat", label: "Chat Apps" },
    { id: "health", label: "Health Apps" },
    { id: "finance", label: "Finance Apps" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "purple":
        return "bg-brand-purple/90 text-white";
      case "cyan":
        return "bg-brand-cyan/90 text-white";
      case "amber":
        return "bg-brand-amber/90 text-white";
      default:
        return "bg-brand-purple/90 text-white";
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Featured <span className="bg-grad-primary bg-clip-text text-transparent">Applications</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Cross-platform mobile products, admin control suites, and high-performance utility tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playSoundEffect("click");
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={() => playSoundEffect("hover")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-grad-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <SpotlightCard className="h-full flex flex-col justify-between group hover:border-brand-purple/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300">
                  <div>
                    {/* Project Image Wrapper */}
                    <div
                      className="relative h-48 w-full overflow-hidden cursor-pointer"
                      onClick={() => {
                        playSoundEffect("click");
                        setSelectedProject(project);
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80" />

                      {/* Badge */}
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${getBadgeStyle(
                          project.badgeType
                        )}`}
                      >
                        {project.badgeText}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Title Row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3
                          onClick={() => {
                            playSoundEffect("click");
                            setSelectedProject(project);
                          }}
                          className="font-display text-lg font-bold text-white hover:text-brand-violet cursor-pointer transition-colors"
                        >
                          {project.title}
                        </h3>
                        <button
                          onClick={() => {
                            playSoundEffect("click");
                            setSelectedProject(project);
                          }}
                          className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-brand-violet group-hover:border-brand-purple/40 transition-colors"
                          aria-label="View Details"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Metric Pill if available */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex items-center gap-2 mb-4 p-2 rounded-xl bg-white/5 border border-white/10">
                          <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />
                          <span className="text-[11px] font-mono text-slate-300">
                            {project.metrics[0].label}:{" "}
                            <strong className="text-white font-bold">{project.metrics[0].value}</strong>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-[11px] font-mono text-brand-violet"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playSoundEffect("click")}
                        onMouseEnter={() => playSoundEffect("hover")}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playSoundEffect("click")}
                          onMouseEnter={() => playSoundEffect("hover")}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-grad-primary text-white font-semibold text-xs shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:opacity-90 hover:-translate-y-0.5 transition-all"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>App Store</span>
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0c0c20] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c20] via-transparent to-transparent" />
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getBadgeStyle(
                        selectedProject.badgeType
                      )}`}
                    >
                      {selectedProject.badgeText}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Highlights */}
                  {selectedProject.keyHighlights && (
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Engineering Highlights
                      </h4>
                      {selectedProject.keyHighlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Sparkles className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Metrics */}
                  {selectedProject.metrics && (
                    <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedProject.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">{m.label}</p>
                          <p className="font-mono text-sm font-bold text-brand-violet">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Technologies &amp; Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-brand-purple/15 border border-brand-purple/25 text-xs font-mono text-brand-violet"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-grad-primary text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Application</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
