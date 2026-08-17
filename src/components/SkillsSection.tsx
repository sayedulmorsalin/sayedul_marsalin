"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#0d0d1f]/60 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Core Technology <span className="bg-grad-primary bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Cross-platform frameworks, programming languages, state management patterns, and database engines.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-0.5 rounded-full bg-grad-primary" />
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <SpotlightCard className="p-4 flex items-center gap-4 group hover:border-brand-purple/40 hover:-translate-y-1 transition-all">
                      {/* Skill Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#0d0d1f] border border-white/10 flex items-center justify-center p-2.5 flex-shrink-0 group-hover:border-brand-purple/40 transition-colors">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Skill Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold text-white truncate">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs font-bold text-brand-violet">
                            {skill.percentage}%
                          </span>
                        </div>

                        {skill.level && (
                          <span className="inline-block text-[10px] font-mono text-slate-400 mb-1.5">
                            {skill.level}
                          </span>
                        )}

                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05 }}
                            className="h-full rounded-full bg-grad-primary"
                          />
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
