module.exports = {
  theme: {
    // "extends" to overwrite TailwindCSS styles by default
    extend: {
      fill: (theme) => ({
        yellow: theme('colors.yellow.400'),
        blue: theme('colors.blue.900'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'), // new color declared just below
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'brand-color': {
          300: '#24CF09',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  darkMode: 'class',
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js'
  //   ]
  // },
}
