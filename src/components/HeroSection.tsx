"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Send, Download, MapPin, Github, Linkedin, Facebook, Sparkles, Terminal, ShieldCheck, Play } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import SoundToggle, { playSoundEffect } from "./SoundToggle";
import InteractiveTerminal from "./InteractiveTerminal";

export default function HeroSection() {
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = personalInfo.typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetText.substring(0, currentText.length + 1));
        if (currentText === targetText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(targetText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Top Control Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-violet text-xs font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
            <span>Available for Freelance &amp; Remote Flutter Roles</span>
          </div>

          <SoundToggle />
        </div>

        {/* Main Grid: Hero Text & Spotlight Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center mb-16">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Main Headline with Animated Typewriter Role */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="block text-slate-100">Crafting High-Perf</span>
              <span className="block bg-grad-primary bg-clip-text text-transparent min-h-[1.2em]">
                {currentText}
                <span className="animate-pulse text-brand-cyan">|</span>
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              I&apos;m{" "}
              <strong className="text-white font-semibold">{personalInfo.name}</strong>, a
              passionate Flutter Developer with 1.5+ years of experience building pixel-perfect,
              high-performance cross-platform applications for Android, iOS, and Web.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#showcase"
                onClick={() => playSoundEffect("click")}
                onMouseEnter={() => playSoundEffect("hover")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-grad-primary text-white font-semibold text-sm shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:shadow-[0_0_45px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Rocket className="w-4 h-4" />
                <span>Test Interactive Apps</span>
              </a>
              <a
                href="#contact"
                onClick={() => playSoundEffect("click")}
                onMouseEnter={() => playSoundEffect("hover")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-brand-cyan" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl font-bold bg-grad-primary bg-clip-text text-transparent">
                    {stat.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Profile Card with Spotlight Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <SpotlightCard className="w-full max-w-[360px] p-6 text-center group hover:border-brand-purple/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.2)]">
              {/* Header Gradient Arch */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-br from-brand-purple/30 to-brand-cyan/20 rounded-b-[60%]" />

              {/* Avatar Container with Animated Glow Ring */}
              <div className="relative w-28 h-28 mx-auto mt-6 mb-4 z-10">
                <div className="absolute -inset-1.5 rounded-full bg-grad-primary animate-[spin_6s_linear_infinite] opacity-80 blur-[2px]" />
                <div className="relative w-full h-full rounded-full border-4 border-[#050510] overflow-hidden">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Active Dot */}
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#050510] shadow-[0_0_10px_#10b981]" />
              </div>

              {/* Name & Role */}
              <h2 className="font-display text-xl font-bold text-white mb-1">
                {personalInfo.name}
              </h2>
              <p className="font-mono text-xs font-semibold text-brand-violet mb-2">
                {personalInfo.role}
              </p>

              {/* Location */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-5">
                <MapPin className="w-3.5 h-3.5 text-brand-violet" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-2.5 mb-5">
                {personalInfo.socials.map((social) => {
                  let Icon = Github;
                  if (social.platform === "LinkedIn") Icon = Linkedin;
                  if (social.platform === "Facebook") Icon = Facebook;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.platform}
                      onClick={() => playSoundEffect("click")}
                      onMouseEnter={() => playSoundEffect("hover")}
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-purple hover:bg-brand-purple/20 hover:-translate-y-1 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {personalInfo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-[11px] font-semibold uppercase tracking-wider text-brand-violet"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Resume Download Action */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSoundEffect("click")}
                onMouseEnter={() => playSoundEffect("hover")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-grad-primary text-white font-semibold text-xs shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Interactive Flutter Code Terminal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-brand-cyan" />
            <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
              Interactive Code &amp; Engine Environment
            </span>
          </div>
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
}
