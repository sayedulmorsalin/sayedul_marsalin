"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function playSoundEffect(type: "click" | "hover" | "success") {
  if (typeof window === "undefined") return;
  const isMuted = localStorage.getItem("site_sound_muted") === "true";
  if (isMuted) return;

  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === "hover") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === "success") {
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.03, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.06 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.15);
      });
    }
  } catch {
    // Ignore audio context errors gracefully
  }
}

export default function SoundToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const isMuted = localStorage.getItem("site_sound_muted") === "true";
    setMuted(isMuted);
  }, []);

  const toggleSound = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    localStorage.setItem("site_sound_muted", String(nextMuted));
    if (!nextMuted) {
      playSoundEffect("click");
    }
  };

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={() => playSoundEffect("hover")}
      aria-label={muted ? "Unmute UI sound effects" : "Mute UI sound effects"}
      title={muted ? "Enable futuristic UI sounds" : "Disable UI sounds"}
      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/15 transition-all shadow-md flex items-center gap-2 text-xs font-semibold"
    >
      {muted ? (
        <>
          <VolumeX className="w-4 h-4 text-slate-400" />
          <span className="hidden sm:inline text-slate-400">Audio Off</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-brand-cyan animate-pulse" />
          <span className="hidden sm:inline text-brand-cyan">Audio On</span>
        </>
      )}
    </button>
  );
}
