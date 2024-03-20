import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "424px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        adn: "url(/adn.jpg)",
        scientist: "url(/scientist.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
