module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blood-primary": "#660000",
        "blood-secondary": "#8B0000"
      }
    },
    fontFamily: {
      Roboto: ['Roboto, sans-serif']
    },
    container: {
      padding: "2px",
      center: true
    },
    screens: {
      md: "640px",
      sm: "768px"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}