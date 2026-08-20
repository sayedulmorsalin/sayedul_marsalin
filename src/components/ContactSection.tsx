"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Facebook, Twitter, CheckCircle2, AlertCircle, Copy } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import { playSoundEffect } from "./SoundToggle";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; isError: boolean }>({
    show: false,
    message: "",
    isError: false,
  });

  const triggerToast = (message: string, isError = false) => {
    setToast({ show: true, message, isError });
    setTimeout(() => {
      setToast({ show: false, message: "", isError: false });
    }, 4000);
  };

  const copyToClipboard = (text: string, label: string) => {
    playSoundEffect("click");
    navigator.clipboard.writeText(text);
    triggerToast(`Copied ${label} to clipboard!`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playSoundEffect("click");
    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/mojdandn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        playSoundEffect("success");
        triggerToast("Message sent successfully! I will reply soon.");
      } else {
        triggerToast("Something went wrong. Please try emailing directly.", true);
      }
    } catch {
      triggerToast("Network error. Please check your connection.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d1f]/60 relative z-10 border-t border-white/5">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`fixed bottom-8 right-6 z-50 px-5 py-3.5 rounded-xl border backdrop-blur-xl flex items-center gap-3 text-sm font-semibold shadow-2xl ${
              toast.isError
                ? "bg-red-500/15 border-red-500/30 text-red-300"
                : "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
            }`}
          >
            {toast.isError ? (
              <AlertCircle className="w-5 h-5 text-red-400" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/25 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Let&apos;s Build Something <span className="bg-grad-primary bg-clip-text text-transparent">Remarkable</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Open to freelance projects, remote Flutter roles, and engineering collaborations.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info Spotlight Card */}
          <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Whether you need a polished Flutter mobile application, an enterprise admin panel,
                or custom cross-platform software architecture — I&apos;m ready to collaborate.
              </p>

              <address className="not-italic space-y-4 mb-8">
                {/* Email Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-purple/30 transition-all group">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-brand-purple/15 text-brand-violet flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white truncate hover:text-brand-violet transition-colors">{personalInfo.email}</a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, "Email")}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-cyan/30 transition-all group">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
                      <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="text-sm font-semibold text-white truncate hover:text-brand-cyan transition-colors">{personalInfo.phone}</a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, "Phone")}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy Phone"
                    aria-label="Copy phone number"
                  >
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-brand-amber/15 text-brand-amber flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-white">{personalInfo.location} (UTC+6)</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Working Hours</p>
                    <p className="text-sm font-semibold text-slate-200">{personalInfo.workingHours}</p>
                  </div>
                </div>
              </address>
            </div>

            {/* Social Buttons */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Follow &amp; Connect</p>
              <div className="flex gap-3">
                {personalInfo.socials.map((social) => {
                  let Icon = Github;
                  if (social.platform === "LinkedIn") Icon = Linkedin;
                  if (social.platform === "Facebook") Icon = Facebook;
                  if (social.platform === "Twitter") Icon = Twitter;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      title={`${personalInfo.name} on ${social.platform}`}
                      aria-label={`Visit ${personalInfo.name}'s ${social.platform} profile`}
                      onClick={() => playSoundEffect("click")}
                      onMouseEnter={() => playSoundEffect("hover")}
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-purple hover:bg-brand-purple/20 hover:-translate-y-1 transition-all"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </SpotlightCard>

          {/* Contact Form Spotlight Card */}
          <SpotlightCard className="p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Fill out the form below. Messages are routed straight to my primary inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Flutter Project Inquiry / Job Offer"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-500 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => playSoundEffect("hover")}
                className="w-full py-4 px-6 rounded-xl bg-grad-primary text-white font-semibold text-sm shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
