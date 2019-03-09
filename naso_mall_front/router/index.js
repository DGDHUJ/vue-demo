import Vue from 'vue'
import Router from 'vue-router'
import AppLogo from '~/components/AppLogo.vue'
import demoone from '~/components/demoone.vue'
Vue.use(Router)
if (process.client) {
  window.history.replaceState = window.history.replaceState || function () {}
}
export const router = new Router({
  routes: [
    {
      path: '/AppLogo',
      name: 'AppLogo',
      component: AppLogo,
    },
    {
      path: '/demoone',
      name: 'demoone',
      component: demoone,
    },
  ]
})
router.beforeEach((to,form,next)=>{
  if (to.path === "/"){
    next('/AppLogo');
  }else{
    next();
  }
})
