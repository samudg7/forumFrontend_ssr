export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: "universal",

  head: {
    title: 'Test Sync Lab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Forum application post' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "keywords", content:"HTML, CSS, JavaScript, php, Laravel, Vue.js, Nuxt, server side render, Universal"},
      { name: "author", content:"Sync Lab"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
     // Simple usage
     '@nuxtjs/vuetify'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios"
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://127.0.0.1:8000/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
