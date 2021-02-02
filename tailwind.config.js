module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",

      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xllg: "1250px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        londrina: ["Londrina Solid"],
        acme: ["Acme"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
