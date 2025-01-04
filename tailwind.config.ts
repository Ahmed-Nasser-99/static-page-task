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
        background: "#F6F4F5",
        primary: "#D20653",
        tertiary: "#FFFFFF",
        gray: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#E0E0E0",
          5: "#F6F4F5",
        },
        orange: {
          1: "#FF951D",
          2: "#FFF5E9"
        },
        pink: {
          1: "#FBE7EE",
        },
      },
      flex: {
        "2": "2 2 0%",
      },
    },
  },
  plugins: [],
} satisfies Config;