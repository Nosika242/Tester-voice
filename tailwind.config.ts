import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#000420",
          darker: "#00001a",
          accent: "#1D546C",
          light: "#F4F4F4",
          orange: "#ff9900",
          black: "#000000",
          blue: "#050515",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".bg-gradient-brand-dark": {
          background: "linear-gradient(to bottom right, #000420, #00001a)",
        },
        ".bg-gradient-brand-light": {
          background: "linear-gradient(to bottom right, #f3f4f6, #d1d5db)",
        },
        ".bg-gradient-brand-accent": {
          background: "linear-gradient(to bottom right, #1D546C, #000420)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
