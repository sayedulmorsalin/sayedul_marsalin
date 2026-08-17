"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Award, Sparkles } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-[#050512] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Experience &amp; <span className="bg-grad-primary bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-slate-400 text-base">
            Track record of shipping production Flutter mobile apps, state management architecture, and software engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent -translate-x-1/2 opacity-40 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050510] border-2 border-brand-purple flex items-center justify-center z-20 shadow-[0_0_15px_#7c3aed]">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <SpotlightCard className="p-6 sm:p-8">
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-violet font-mono text-xs font-semibold mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>

                      <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/10">
                        <span className="font-semibold text-brand-cyan">{exp.company}</span>
                        <span className="px-2 py-0.5 rounded bg-white/5">{exp.type}</span>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((item, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skillsUsed.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-[11px] font-mono text-brand-violet"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
