import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050510",
          secondary: "#0d0d1f",
          card: "rgba(255, 255, 255, 0.04)",
          cardHover: "rgba(255, 255, 255, 0.07)",
        },
        brand: {
          purple: "#7c3aed",
          violet: "#a78bfa",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
          pink: "#ec4899",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(124, 58, 237, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #7c3aed, #06b6d4)",
        "grad-green": "linear-gradient(135deg, #10b981, #06b6d4)",
        "grad-warm": "linear-gradient(135deg, #f59e0b, #ec4899)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.35)",
        "glow-lg": "0 0 50px rgba(124, 58, 237, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
