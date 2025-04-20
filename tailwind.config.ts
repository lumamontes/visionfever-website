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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
        'hero-white': '#FFFF',
        'hero-yellow': '#FEE0A2',
        'hero-blue': '#60BEFB',
        'hero-red': '#E02432',
      },
    },
    animation: {
      carousel: 'scroll 20s linear infinite', // Define the animation name and duration
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }, // Adjust based on the total width of the carousel
      },
    },
  },
  plugins: [],
};
export default config;
