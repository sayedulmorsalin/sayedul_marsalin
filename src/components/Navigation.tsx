"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Code2, Smartphone, Briefcase, Award, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { playSoundEffect } from "./SoundToggle";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "skills", "showcase", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "showcase", label: "Apps", icon: Smartphone },
    { id: "projects", label: "Work", icon: Briefcase },
    { id: "experience", label: "Journey", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    playSoundEffect("click");
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <aside
        aria-label="Desktop Navigation Sidebar"
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[76px] bg-[#050510]/85 backdrop-blur-xl border-r border-white/10 flex-col items-center py-6 z-50 transition-all"
      >
        {/* Logo Monogram */}
        <button
          onClick={() => scrollToSection("home")}
          onMouseEnter={() => playSoundEffect("hover")}
          aria-label="Md. Sayedul Marsalin - Home"
          title="Md. Sayedul Marsalin - Best App Developer in BD"
          className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center font-display font-bold text-white text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 transition-transform mb-8"
        >
          SM
        </button>

        {/* Nav links */}
        <nav
          aria-label="Main Page Sections"
          className="flex-1 flex flex-col items-center justify-center gap-2 overflow-y-auto scrollbar-none py-2"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => playSoundEffect("hover")}
                  aria-label={item.label}
                  className={`w-12 h-11 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-300 ${
                    isActive
                      ? "text-white bg-brand-purple/25 shadow-[0_0_20px_rgba(124,58,237,0.3)] border border-brand-purple/40"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-violet" : ""}`} />
                  <span className="text-[8px] font-semibold tracking-wider uppercase">
                    {item.label}
                  </span>
                </button>

                {/* Tooltip */}
                <div className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#121226] border border-white/10 text-xs font-medium text-slate-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                  {item.label}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Sidebar Social Links */}
        <div className="flex flex-col items-center gap-2.5 mt-auto pt-4">
          {personalInfo.socials.slice(0, 2).map((social) => {
            const Icon = social.platform === "GitHub" ? Github : Linkedin;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                onClick={() => playSoundEffect("click")}
                onMouseEnter={() => playSoundEffect("hover")}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#050514]/92 backdrop-blur-xl border-t border-white/10 z-50 px-2 py-1.5 flex justify-around items-center pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl text-[9px] font-semibold tracking-wider uppercase transition-all ${
                isActive
                  ? "text-white bg-brand-purple/25 shadow-[0_0_15px_rgba(124,58,237,0.3)] border border-brand-purple/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
