import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F6F2",
        foreground: "#202522",
        primary: "#202522",
        secondary: "#59615C",
        accent: "#234ED8",
      },
    },
  },
  plugins: [],
};
export default config;
