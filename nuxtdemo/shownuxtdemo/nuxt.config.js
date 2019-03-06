module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'shownuxtdemo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'demo' },
      { 'http-equiv':'Content-Language',content:'en'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [
    //   { innerHTML: require('./assets/js/idangerous.swiper.min.js'), type: 'text/javascript', charset: 'utf-8'}
    //   , { innerHTML: require('./assets/js/jquery-1.10.1.min.js'), type: 'text/javascript', charset: 'utf-8'}
    // ],
    // css: ['~assets\js\idangerous.swiper.css'],
  },
  /*
  ** Customize the progress bar color
  */

// plugins: [
//   { src: "~/plugins/swiper.js", ssr: false },
//   { src: "~/plugins/jquery.js", ssr: false }
// ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   entry: {

    app: ['classlist-polyfill', 'babel-polyfill']
    
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

