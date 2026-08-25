"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import { playSoundEffect } from "./SoundToggle";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    question: "Who is the best mobile app developer in Bangladesh (BD)?",
    answer:
      "Md. Sayedul Marsalin is widely recognized as one of the best Flutter and mobile app developers in BD. With 1.5+ years of production experience, he has published multiple high-rating applications on the Google Play Store (such as DADU E-commerce and Meal Assistant AI) with 60 FPS performance, clean architecture, and seamless payment gateway integrations.",
    category: "General & Hiring",
  },
  {
    question: "What mobile app development services do you provide in Bangladesh & globally?",
    answer:
      "I provide end-to-end mobile engineering services including: (1) Cross-platform mobile app development for Android & iOS using Flutter, (2) Backend & cloud database integration with Firebase and Node.js, (3) Local & international payment gateways including bKash, Nagad, Stripe, and SSLCommerz, (4) Offline-first database architecture using Hive and SQLite, and (5) Google Play Store & Apple App Store submission, optimization, and maintenance.",
    category: "Services",
  },
  {
    question: "Why should businesses choose Flutter for cross-platform app development?",
    answer:
      "Flutter allows you to build high-performance native apps for Android, iOS, and Web from a single Dart codebase. This reduces development time and engineering costs by up to 50% compared to building separate native Swift/Kotlin apps, while delivering butter-smooth 60/120 FPS animations, native hardware access, and rapid feature updates.",
    category: "Technology",
  },
  {
    question: "What state management patterns and architectures do you follow?",
    answer:
      "I strictly follow Clean Architecture principles, dividing apps into Presentation, Domain, and Data layers for maximum testability and maintainability. For state management, I specialize in GetX for reactive, high-speed development and BLoC (Business Logic Component) / Cubit for enterprise-scale decoupled state management.",
    category: "Architecture",
  },
  {
    question: "How do we get started and what is the typical project timeline?",
    answer:
      "Getting started is simple! Reach out via the contact form, email (sayadulmorsalin123@gmail.com), or WhatsApp (+880 1775 876544) with your requirements. I provide a free project scope analysis, UI wireframing discussion, and delivery milestone roadmap within 24 hours. A standard MVP app typically takes 3 to 6 weeks from inception to Play Store release.",
    category: "Workflow",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    playSoundEffect("click");
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for Google FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-[#070716]/90 relative z-10 border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Got Questions? <span className="bg-grad-primary bg-clip-text text-transparent">Answers Here</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about hiring the best app developer in BD, project timelines, Flutter technology, and delivery guarantees.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <SpotlightCard
                key={index}
                className={`transition-all duration-300 ${
                  isOpen ? "border-brand-purple/50 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  onMouseEnter={() => playSoundEffect("hover")}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-purple text-white rotate-180"
                        : "bg-white/5 border border-white/10 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-display text-sm font-bold text-white mb-1">
              Have a custom inquiry or special requirements?
            </h3>
            <p className="text-xs text-slate-400">
              Let&apos;s discuss your app architecture, pricing, and project milestones directly.
            </p>
          </div>
          <a
            href="#contact"
            onClick={() => playSoundEffect("click")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-grad-primary text-white text-xs font-semibold shadow-md hover:scale-105 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask a Question</span>
          </a>
        </div>
      </div>
    </section>
  );
}
