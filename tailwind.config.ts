import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        primary: "#FFFFFF",
        secondary: "#A1A1A5",
        accent: "#F97316", // Tailwind Orange 500
      },
    },
  },
  plugins: [],
};
export default config;
