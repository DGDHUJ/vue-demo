const webpack=require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    // title:"纳信货代平台",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/naso.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css:[
    '~assets/iconfont/demo.css',
    '~assets/iconfont/iconfont.css',
    '~assets/css/comment.scss',
    // {src:'swiper/dist/css/swiper.css'},
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/idangerous.swiper.css'
  ],
  plugins:[
    '~plugins/element',
    '~plugins/comment',
    '~plugins/echar',
    '~plugins/myjquery',
    '~plugins/myaxios',
    { src: '~/plugins/meiqia.js', ssr:false},
    
    { src: '~/plugins/swiper.js', ssr: false }
  ],
 /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [],
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
 ,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ]
  ,
  proxy: [
    [
      '/api',
      {
        target: 'http://www.getnaso.com/api', // api主机
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ]
}

