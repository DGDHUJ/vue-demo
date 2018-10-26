import Vue from 'vue'
import Router from 'vue-router'
//一次性加载
// import HelloWorld from '@/components/HelloWorld'

//按需加载
const HelloWorld = () => import('@/components/HelloWorld')
const DynamicRouter = () => import('@/components/DynamicRouter')
// const HelloWorld = (resolve) => { import( '../componets/HelloWorld').then((module) => { resolve(module)})}
// const DynamicRouter = (resolve) => { import('../componets/DynamicRouter').then((module) => { resolve(module)} )}
Vue.use(Router)
const router  = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/DynamicRouter/:id",
      name:'DynamicRouter',
      component: DynamicRouter
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.path === '/DynamicRouter') {
    next(false)
  } else {
    next()
  }
})
export default router;
