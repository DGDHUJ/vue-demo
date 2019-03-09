// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
// import '@/common/js/vux.js'
// import fetch from '@/common/js/fetch.js'
// import { empower } from '@/common/js/getWechatUserInfo.js'
// import { WechatPlugin } from 'vux'
// import  { LoadingPlugin } from 'vux'
// Vue.use(LoadingPlugin)
// Vue.use(WechatPlugin)
// Vue.use(VueRouter)
import store from './vuex/store'
// import axios from 'axios'

FastClick.attach(document.body)

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
