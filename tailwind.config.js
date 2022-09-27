module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "CalibreWeb",
      serif: "TiemposTextWeb",
    },
    extend: {
      colors: {
        tan: {
          DEFAULT: "#FAF3E6",
        },
        black: {
          DEFAULT: "#25231b",
          lighter: "#8A8783",
        },
        yellow: {
          DEFAULT: "#FAB855",
        },
      },
      maxHeight: {
        "75vh": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
