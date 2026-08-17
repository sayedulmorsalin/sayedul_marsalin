"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircleHeart, Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#08081a]/90 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <MessageCircleHeart className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Collaborators <span className="bg-grad-primary bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-slate-400 text-base">
            Feedback from team leads, designers, and clients on cross-platform application delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between group hover:border-brand-purple/40">
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-brand-purple/30 group-hover:text-brand-purple/60 transition-colors" />
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-8">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-purple/40">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono text-brand-violet">
                      {item.role} · <span className="text-slate-400">{item.company}</span>
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
