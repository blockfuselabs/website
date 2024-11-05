// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B74FDD",
          200: "#E649D6",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #E649D6, #8B4FFF)",
        'alumni-cohorts': "url('/src/assets/images/bgalmni.png')",
      },
    },
  },
  plugins: [],
};