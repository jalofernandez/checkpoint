export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'checkpoint',
    htmlAttrs: {
      lang: 'es-ES',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  transition: {
    name: 'checkpoint-transition',
    mode: 'out-in'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
  ],

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
  },

  firebase: {
    // See your own config here:
    // https://console.firebase.google.com/project/<your-project-id>/overview
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: "checkpoint-webapp.firebaseapp.com",
      projectId: "checkpoint-webapp",
      storageBucket: "checkpoint-webapp.appspot.com",
      messagingSenderId: "29364188116",
      appId: "1:29364188116:web:b2148c6242dc62576b5c41",
      measurementId: "G-GGX6CRC7DN"  
    },
    services: {
      auth: true, // Just as example. Can be any other service.
      firebase: true,
      storage: true,
      database: true,
      analytics: true,
      performance: true,
    }
  },

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  // https://storybook.nuxtjs.org/setup
  storybook: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
