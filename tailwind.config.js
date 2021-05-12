module.exports = {
  theme: {
    // "overwrites" TailwindCSS styles by default
    // borderRadius: {
    //   'xl': '0.75rem',
    //   'full': '50%',
    // },
    // "extends" to add more TailwindCSS
    extend: {
      fill: (theme) => ({
        yellow: theme('colors.yellow.400'),
        blue: theme('colors.blue.900'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'), // new color declared just below
        dark: theme('colors.navy.900'),
        dark: theme('colors.navy.700'),
      }),
      textColor: (theme) => ({
        dark: theme('colors.sky.300'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'navy': {
          900: '#0F253A',
          700: '#1B4360',
        },
        'sky': {
          300: '#B8DFF4',
          100: '#f3fafd',
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
