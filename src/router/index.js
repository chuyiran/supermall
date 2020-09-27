import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//解决路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('views/home/Home')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('views/cart/Cart')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('views/category/Category')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('views/profile/Profile')
    },
    {
      path:'/detail/:iid',
      name:'detail',
      component: () => import('views/detail/Detail')
    }
  ]
})