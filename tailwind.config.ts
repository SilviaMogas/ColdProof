import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ColdProof brand palette
        navy: {
          DEFAULT: "#071A2B",
          900: "#071A2B",
          800: "#0B2438",
          700: "#0F2E45",
          600: "#143A56",
        },
        ice: "#DFF6FF",
        cyan: {
          DEFAULT: "#00B8D9",
          soft: "#33C7E1",
        },
        mint: "#7FE0C3",
        alert: "#FF6B35",
        softwhite: "#F7FAFC",
        ink: "#102332",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,26,43,0.04), 0 8px 24px rgba(7,26,43,0.06)",
        cardHover: "0 2px 4px rgba(7,26,43,0.06), 0 16px 40px rgba(7,26,43,0.10)",
        panel: "0 24px 60px rgba(7,26,43,0.18)",
        glow: "0 0 0 1px rgba(0,184,217,0.25), 0 12px 40px rgba(0,184,217,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        blip: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.6)", opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        blip: "blip 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
