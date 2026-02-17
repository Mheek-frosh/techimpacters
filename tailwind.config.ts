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
        primary: {
          DEFAULT: "#1D70B8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#171717",
        },
      },
    },
  },
  plugins: [],
};
export default config;
