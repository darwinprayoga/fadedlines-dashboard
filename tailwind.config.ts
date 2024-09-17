import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1952px",
      },
      boxShadow: {
        "custom-center": "0 0 10px 5px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        black: "#121212",
        main: "#42FF00",
        secondary: "#155600",
      },
    },
  },
  plugins: [],
};
export default config;
