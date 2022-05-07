module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background': '#FAFAFA',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ],
}
