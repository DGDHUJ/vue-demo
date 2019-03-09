import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = () =>import('@/components/HelloWorld')
const test = () =>import('@/components/test')
const calendar = () =>import('@/components/calendar')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    }
  ]
})