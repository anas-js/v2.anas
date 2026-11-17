export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr : false,
  head: {
    titleTemplate: '%s | none',
    title: 'none',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'format-detection', content: 'telephone=no' },
      { "http-equiv": 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'theme-color', content: '#F7F8FE' },
      { name: 'msapplication-navbutton-color', content: '#F7F8FE' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#F7F8FE' },
      { property: 'og:type', content: 'profile:username' },
      { property: 'og:url', content: 'nons.me' },
      { property: 'og:image', content: 'https://nons.me/img/none.png' },
      { property: 'twitter:image', content: 'https://nons.me/img/none.png' },
      { property: 'twitter:url', content: 'nons.me' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-03E91PJKW6',
        async : "async"

      },
      {
        src: '/js/gscript.js',
      },
      {
        src: '/js/js.js',
      }
    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/License.css",
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "remixicon/fonts/remixicon.css",
    "aos/dist/aos.css",
    "@/assets/css/global.css",
    "@/assets/css/dark.css",
    "@/assets/css/responsive.css"

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/script.js', mode : "client" },
    { src: '~/plugins/lottle.js', mode : "client" }
  ],



  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
     baseURL: "/json"
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      extractComments: false,
      terserOptions: {
        output: {
          comments: /^\**!|@preserve|@license|@cc_on|license|Copyright|LICENSE|copyright|^\*!/
        }
      }
    }
  },
  router: { middleware: ['menu'],
     base : "/"
    },

    loading: "~/components/LodBar.vue",
}
