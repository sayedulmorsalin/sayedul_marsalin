"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface AutoScrollCarouselProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number; // ms
  className?: string;
  onClick?: () => void;
  aspectRatioClass?: string;
  objectFitClass?: string;
  hideVignette?: boolean;
}

export default function AutoScrollCarousel({
  images,
  alt,
  autoPlayInterval = 3500,
  className = "",
  onClick,
  aspectRatioClass = "h-48 sm:h-56",
  objectFitClass = "object-cover",
  hideVignette = false,
}: AutoScrollCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Normalize image list (ensure at least 1 image)
  const validImages = images && images.length > 0 ? images : ["https://iili.io/fgpUWsp.png"];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  // Auto-scroll timer effect
  useEffect(() => {
    if (isPaused || validImages.length <= 1) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, autoPlayInterval, validImages.length]);

  return (
    <div
      className={`relative w-full overflow-hidden group cursor-pointer ${aspectRatioClass} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={onClick}
    >
      {/* Active Animated Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050512]"
        >
          <Image
            src={validImages[currentIndex]}
            alt={`${alt} - Screenshot ${currentIndex + 1} - Mobile App Development by Md. Sayedul Marsalin`}
            fill
            className={`transition-transform duration-500 ${objectFitClass}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Optional gradient vignette */}
          {!hideVignette && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/70 via-transparent to-transparent pointer-events-none" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slide Index Pill */}
      {validImages.length > 1 && (
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white z-20 pointer-events-none shadow-md">
          {currentIndex + 1} / {validImages.length}
        </div>
      )}

      {/* Manual Navigation Controls (Visible on Hover) */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-black z-20 shadow-lg"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-black z-20 shadow-lg"
            aria-label="Next Image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Auto-scroll Progress Dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-auto">
          {validImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-brand-cyan shadow-[0_0_8px_#06b6d4]"
                  : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
