import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        "main-hover": "var(--main-hover)",
        primary: "var(--light-0)",
        secondary: "var(--light-1)",
        "tertiary-text": "var(--tertiary-text)",
        "accent-text": "var(--accent-text)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",

        light: "#F6F6F6",
        dark: "#2F2F2F",
        accent: "#58C2C0",
        "text-primary": "#374151",
        "text-secondary": "#6b7280",
      },
      flex: {
        "0.5": "0.5 1 0%",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
        stylus: ["var(--font-stylus)"],
        mono: ["var(--font-mono)"],
      },
      height: {
        "screen-nav": "calc(100vh - 48px)",
      },
      translate: {
        screen: "100vh",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
