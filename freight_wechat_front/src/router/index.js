import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const home = () => import('@/page/index')
const memberlogin = () => import('@/components/member/login')
const managerlogin = () => import('@/components/manager/login')
const membersuccess = () => import('@/components/member/success')
const managersuccess = () => import('@/components/manager/success')
Vue.use(Router)
export const router = new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home,
      children:[
        {path:'memberlogin',name:'memberlogin',component:memberlogin},
        {path:'managerlogin',name:'managerlogin',component:managerlogin},
        {path:'membersuccess',name:'membersuccess',component:membersuccess},
        {path:'managersuccess',name:'managersuccess',component:managersuccess},
      ]
    }
  ]
})
