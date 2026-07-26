import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ColdProof brand palette — Brand Book v1.0
        // Ink is the structural default; safe cold (cyan) is the ONLY
        // verification colour; breach amber is earned. Green is retired.
        navy: {
          DEFAULT: "#0A1B2E", // Ink
          900: "#0A1B2E", // Ink
          800: "#12253C", // Ink tint (dimensional artwork only)
          700: "#1C3350", // Ink tint (dimensional artwork only)
          600: "#1C3350",
        },
        ink: "#0A1B2E",
        // Ink tints — never carry meaning, used only for dimensional artwork
        "ink-10": "#12253C",
        "ink-20": "#1C3350",
        ice: "#EDF2F6", // Frost — light surfaces / light text on ink
        frost: "#EDF2F6",
        cyan: {
          DEFAULT: "#0FB5D6", // Safe cold — the only verification colour
          soft: "#3FC9E0",
        },
        // "mint" is retired green, now an alias of safe cold so any legacy
        // verified/success usage renders in the single verification colour.
        mint: "#0FB5D6",
        // "alert" maps to Breach amber — earned, appears only on failure.
        alert: "#F08C1E",
        breach: "#F08C1E",
        slate: "#5B6E80", // Secondary text, eyebrows, captions
        line: "#D6E0E8", // Hairlines, table rules, dividers
        softwhite: "#FBFCFD", // Paper — page ground
        paper: "#FBFCFD",
      },
      fontFamily: {
        // Display → Space Grotesk. The `sora` key is kept as an alias so
        // existing `font-sora` classes resolve to the brand display face.
        sora: ["var(--font-sora)", "Inter Tight", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Inter Tight", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Data face — mandatory for temperatures, timestamps, IDs, readings.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
