export default {
  // Target: https://go.nuxtjs.dev/config-target

  ssr:true,



  // Global page headers: https://go.nuxtjs.dev/config-head
  vueMeta: {
    debounceWait: 50
  },
  head: {
    title: 'Hingurana - ',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: '/assets/css/themify-icons.css' },
      { rel: 'stylesheet', href: '/assets/css/elegant-icons.css' },
      { rel: 'stylesheet', href: '/assets/css/flaticon-set.css' },
      { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
      { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/assets/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/assets/css/animate.css' },
      { rel: 'stylesheet', href: '/assets/css/bootsnav.css' },
      { rel: 'stylesheet', href: '/style.css' },
      { rel: 'stylesheet', href: '/assets/css/responsive.css' },


    ],
    script:[
      {
        src:'/assets/js/jquery-3.6.0.min.js'
      },
      {
        src:'/assets/js/popper.min.js'
      },
      {
        src:'/assets/js/bootstrap.min.js'
      },
      {
        src:'/assets/js/jquery.appear.js'
      },
      {
        src:'/assets/js/jquery.easing.min.js'
      },
      {
        src:'/assets/js/jquery.magnific-popup.min.js'
      },
      {
        src:'/assets/js/modernizr.custom.13711.js'
      },
      {
        src:'/assets/js/owl.carousel.min.js'
      },

      {
        src:'/assets/js/wow.min.js'
      },
      {
        src:'/assets/js/progress-bar.min.js'
      },
      {
        src:'/assets/js/isotope.pkgd.min.js'
      },
      {
        src:'/assets/js/imagesloaded.pkgd.min.js'
      },
      {
        src:'/assets/js/isotope.pkgd.min.js'
      },
      {
        src:'/assets/js/count-to.js'
      },
      {
        src:'/assets/js/YTPlayer.min.js'
      },
      {
        src:'/assets/js/bootsnav.js'
      },
      {
        src:'/assets/js/main.js'
      },



    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-js-modal", mode: "client" }],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    prefetchLinks: false,

    linkExactActiveClass: 'active'
  }
}
