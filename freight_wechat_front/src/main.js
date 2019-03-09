// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'

import {router} from './router';
import '@/common/js/vux.js'
import fetch from '@/common/js/fetch.js'
import { WechatPlugin } from 'vux'
import { LoadingPlugin } from 'vux'
import store from '@/common/vuex/store'
import '@/styles/global.scss'
import '@/common/js/permission.js'
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(VueRouter)
Vue.use(Vuex)



FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
