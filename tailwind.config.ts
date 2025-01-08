import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        textPurple: "var(--text-purple)",
        lightPurple: "var(--light-purple)",
        borderPurple: "var(--border-purple)",
        textGray: "var(--text-gray)",
        textHeading: "var(--text-heading)",
      },
    },
  },
  plugins: [],
} satisfies Config;
