/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0D0D0D",
        white: "#F2F2F2",
        purple1:"#343773",
        purple2:"#6B41A6",
        "brand-yellow":"#FBFCB0"

        
      },
    },
  },
  plugins: [],
};
