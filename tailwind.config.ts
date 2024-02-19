import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        figtree: 'var(--font-figtree)',
      },
    },
  },
  plugins: [],
};
export default config;
