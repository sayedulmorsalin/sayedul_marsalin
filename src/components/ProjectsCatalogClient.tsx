"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderOpen,
  Search,
  ArrowLeft,
  ArrowUpRight,
  Github,
  Download,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import AutoScrollCarousel from "./AutoScrollCarousel";
import { playSoundEffect } from "./SoundToggle";

export default function ProjectsCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "admin", label: "Admin Panels" },
    { id: "utility", label: "Utility Apps" },
    { id: "chat", label: "Chat Apps" },
    { id: "health", label: "Health Apps" },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (project.subtitle && project.subtitle.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {/* Top Header & Breadcrumb */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Full Production Catalog</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Mobile Application <span className="bg-grad-primary bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Deep dive into technical architectures, live Play Store apps, peer-to-peer protocols, and real-time platforms engineered by Md. Sayedul Marsalin.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, keyword, or title..."
              className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.08] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
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
                  ? "bg-grad-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/10">
          <p className="text-slate-400 text-sm mb-4">No projects matched your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-grad-primary text-white text-xs font-semibold"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={project.id}
              >
                <article aria-label={project.title}>
                  <SpotlightCard className="h-full flex flex-col justify-between group hover:border-brand-purple/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300">
                    <div>
                      {/* Screenshot Carousel */}
                      <div className="relative">
                        <Link href={`/projects/${project.id}`}>
                          <AutoScrollCarousel
                            images={project.screenshots || [project.image]}
                            alt={project.title}
                            aspectRatioClass="h-64 sm:h-72"
                            objectFitClass="object-contain"
                          />
                        </Link>

                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md z-20 ${getBadgeStyle(
                            project.badgeType
                          )}`}
                        >
                          {project.badgeText}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <Link
                            href={`/projects/${project.id}`}
                            className="font-display text-lg font-bold text-white hover:text-brand-violet transition-colors"
                          >
                            {project.title}
                          </Link>
                          <Link
                            href={`/projects/${project.id}`}
                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-brand-violet group-hover:border-brand-purple/40 transition-colors flex-shrink-0"
                            aria-label={`View ${project.title} case study`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>

                        <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                          {project.subtitle || project.description}
                        </p>

                        {/* Metric */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="flex items-center gap-2 mb-4 p-2 rounded-xl bg-white/5 border border-white/10">
                            <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />
                            <span className="text-[11px] font-mono text-slate-300">
                              {project.metrics[0].label}:{" "}
                              <strong className="text-white font-bold">
                                {project.metrics[0].value}
                              </strong>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-6 pb-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-mono text-brand-violet"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <Link
                          href={`/projects/${project.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-purple/20 border border-brand-purple/40 text-brand-violet font-semibold text-xs hover:bg-brand-purple/30 transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </Link>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="Download App"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="View GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
