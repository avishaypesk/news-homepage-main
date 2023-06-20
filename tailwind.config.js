module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      height: {
        '0.25': '1px',
      },
      width: {
        '375': '375px',
        '1440': '1440px',
      },
      colors: {
        'soft-orange': '#FFCE8A',
        'soft-red': 'rgb(224, 63, 52)',
        'off-white': 'rgb(255, 254, 250)',
        'grayish-blue': 'rgb(196, 197, 204)',
        'dark-grayish-blue': 'rgb(83, 92, 104)',
        'very-dark-blue': 'rgb(13, 13, 38)',
      }
    },
  },
  variants: {},
  plugins: [],
}