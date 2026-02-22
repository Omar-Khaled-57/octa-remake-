import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        fadedText: "var(--faded-text)",
        cardBg: "var(--card-bg)",
        sec3CardsBorder: "var(--sec3-cards-border)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "portrait-mobile",
        "@media (orientation: portrait) and (max-width: 767px)"
      ),
      addVariant(
        "portrait-tablet",
        "@media (orientation: portrait) and (min-width: 767px)"
      );
    }),
  ],
};

export default config;
