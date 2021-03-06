import Vue from 'vue'
import Router from 'vue-router'
//一次性加载
// import HelloWorld from '@/components/HelloWorld'

//按需加载
const HelloWorld = () => import('@/components/HelloWorld')
const DynamicRouter = () => import('@/components/routerDemo/DynamicRouter')
const NestingRouter = () => import('@/components/routerDemo/NestingRouter')
const NestingConentOne = () => import('@/components/routerDemo/NestingRouter/NestingConentOne')
const NestingConentTwo = () => import('@/components/routerDemo/NestingRouter/NestingConentTwo')
const father = () => import('@/components/fandcvalue/father')
const children = () => import('@/components/fandcvalue/children')
const ShowVuex = () =>  import('@/components/vuexDemo/showVuex')
const vueQuillEditor = () =>  import('@/components/vueQuillEditor/vueQuillEditor')
const magnifier = () => import('@/components/magnifier/magnifier')
const lazyload = () => import('@/components/lazyload')
const aaa = () => import('@/components/aaa')
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
      path:'/magnifier',
      name:'magnifier',
      component:magnifier
    },
    {
      path:'/lazyload',
      name:'lazyload',
      component:lazyload
    },
    {
      path: '/vueQuillEditor',
      name: 'vueQuillEditor',
      component: vueQuillEditor
    },
    {
      path:"/DynamicRouter/:id",
      name:'DynamicRouter',
      component: DynamicRouter
    },
    {
      path:"/aaa",
      name:'aaa',
      component: aaa
    },
    {
      path:"/NestingRouter",
      name:"NestingRouter",
      component: NestingRouter,
      children:[
        {
          path:"NestingConentOne",
          name:"NestingConentOne",
          component: NestingConentOne,
        },
        {
          path:"NestingConentTwo",
          name:"NestingConentTwo",
          component: NestingConentTwo,
        }
      ]
    },
    {
      path:"/ShowVuex",
      name:'ShowVuex',
      component: ShowVuex
    },
    {
      path:"/father",
      name:"father",
      component: father,
      children:[
        {
          path:"children",
          name:"children",
          component: children,
        }
      ]
    },

  ]
})
// 导航守卫
router.beforeEach(function (to, from, next) {
  if (to.path === '/') {
    console.log("触发beforeEach")
    // next(false)//不执行切换
    next()//执行切换
  }else if(to.path === '/NestingRouter'){
    next('/NestingRouter/NestingConentOne')
  } else {
    next()
  }
})
export default router;
