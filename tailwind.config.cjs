/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#08080f",
          900: "#0d0d17",
          800: "#14141f",
          700: "#1c1c2b",
        },
        accent: {
          DEFAULT: "#a78bfa",
          soft: "#c4b5fd",
          deep: "#7c3aed",
        },
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(167, 139, 250, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "word-in": {
          "0%": { opacity: "0", transform: "translateY(0.45em)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "word-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-0.45em)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 4s ease-in-out infinite",
        "word-in": "word-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        "word-out": "word-out 0.3s ease-in both",
      },
    },
  },
  plugins: [],
};
