export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'assets/js/jquery-3.3.1.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/jquery-migrate-3.0.0.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/bootstrap.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/jquery.magnific-popup.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/isotope.pkgd.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/jquery.nice-select.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/swiper.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/jquery.waypoints.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/jquery.counterup.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/jquery.paroller.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/datepicker.min.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/datepicker.en.js',
        type: 'text/javascript'
      },
      {
        src: 'assets/js/main.js',
        type: 'text/javascript'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/static/assets/css/fontawesome-all.min.css',
    '~/static/assets/font/flaticon.css',
    '~/static/assets/css/magnific-popup.css',
    '~/static/assets/css/nice-select.css',
    '~/static/assets/css/bootstrap.min.css',
    '~/static/assets/css/swiper.min.css',
    '~/static/assets/css/animate.css',
    '~/static/assets/css/datepicker.min.css',
    '~/static/assets/css/style.css',
    '~/static/assets/css/responsive.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
