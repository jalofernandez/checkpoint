module.exports = {
  theme: {
    // "extends" to overwrite TailwindCSS styles by default
    extend: {
      fill: (theme) => ({
        yellow: theme('colors.yellow.400'),
        blue: theme('colors.blue.900'),
      }),
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  darkMode: 'class',
}
