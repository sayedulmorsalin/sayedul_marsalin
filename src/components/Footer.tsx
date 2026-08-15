import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center relative z-10 bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 text-slate-400 text-xs sm:text-sm">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-semibold text-white">{personalInfo.name}</span>.
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
          <span>&amp; Flutter passion.</span>
        </p>
      </div>
    </footer>
  );
}
