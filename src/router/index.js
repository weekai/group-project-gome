import Vue from 'vue'
import Router from 'vue-router'

import Category from '@/components/category/index.vue'
const Home = () => import('../components/home/index.vue')
const Profiles = () => import('../components/profiles/index.vue')
const Optimization = () => import('../components/optimization/index.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        cache: true,
        title: '首页'
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        cache: true,
        title: '分类'
      }
    },
    {
      path: '/optimization',
      name: 'optimization',
      component: Optimization,
      meta: {
        cache: true,
        title: '优选'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Home,
      meta: {
        cache: true,
        title: '购物车'
      }
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: Profiles,
      meta: {
        cache: true,
        title: '我的国美'
      }
    }
  ],
  linkActiveClass: 'is_active'
})
