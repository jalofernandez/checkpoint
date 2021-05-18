const lang = 'es-ES'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'checkpoint',
    htmlAttrs: {
      lang: lang,
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

  router: {
    middleware: ['auth'],
  },

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
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
  ],

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
  },

  eslint: {
    // TODO: enabled to ignore errors & warnings
    exclude: ['node_modules', 'components', 'pages']
  },

  pwa: {
    manifest: {
      name: 'checkpoint firebase',
      short_name: 'checkpoint',
      description: 'Un aplicación para controlarlas a todas :)',
      // start_url: 'index.html?launcher=true', // value by default ("/?standalone=true")
      // display: 'standalone', // value by default
      background_color: '#111111',
      theme_color: '#ff4081',
      lang: lang,
      // dir: 'ltr', // value by default
      // useWebmanifestExtension: false, // value by default. With true the file extension will be ".webmanifest" instead ".json"
    },
    workbox: {
      // enabled: true, // check it asap!
    },
  },

  firebase: {
    // See your own config here:
    // https://console.firebase.google.com/project/<your-project-id>/overview
    config: {
      // apiKey: process.env.VUE_APP_FIREBASE_KEY,
      apiKey: 'AIzaSyAkFctV8ksW7DXRjGhGBx9dcQbho743Sdw',
      authDomain: 'checkpoint-webapp.firebaseapp.com',
      databaseURL: 'https://checkpoint-webapp-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'checkpoint-webapp',
      storageBucket: 'checkpoint-webapp.appspot.com',
      messagingSenderId: '29364188116',
      appId: '1:29364188116:web:b2148c6242dc62576b5c41',
      measurementId: 'G-GGX6CRC7DN',  
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false, // default
        // emulatorPort: 9099,
        // emulatorHost: 'http://localhost',
      },
      firebase: true,
      storage: true,
      database: true,
      analytics: true,
      performance: true,
    }
  },

  toast: {
    position: 'top-center',
    duration : 2000,
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
