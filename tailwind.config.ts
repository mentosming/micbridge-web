import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MicBridge brand blue (from the app icon gradient).
        brand: {
          DEFAULT: "#1e7aff",
          600: "#0a6bf4",
          700: "#0a5fd0",
        },
        ink: {
          DEFAULT: "#0b1120",
          soft: "#1b2435",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(10,30,80,0.25)",
        ring: "0 0 0 1px rgba(255,255,255,0.06) inset",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
