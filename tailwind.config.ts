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
        background: "#090A0C",
        foreground: "#F8F8FB",
        primary: "#FFFFFF",
        secondary: "#A1A1A5",
        accent: "#FF8A1A",
      },
    },
  },
  plugins: [],
};
export default config;
