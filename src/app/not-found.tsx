import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#050510]">
      <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-violet mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
        404 - Page Not Found
      </h1>
      <p className="text-slate-400 text-base max-w-md mb-8">
        The page or resource you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-grad-primary text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
