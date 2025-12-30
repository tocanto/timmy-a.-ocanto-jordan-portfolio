/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",  // <--- IMPORTANTE: Mira en la carpeta components
    "./*.{js,ts,jsx,tsx}",                // <--- IMPORTANTE: Mira en la raíz (App.tsx, index.tsx)
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#46ec13",
        background: {
          dark: "#050505",
          surface: "#0f1210"
        },
        accent: {
          violet: "#bd00ff",
          blue: "#00e5ff"
        }
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}