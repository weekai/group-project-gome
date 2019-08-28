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
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/optimization',
      name: 'optimization',
      component: Optimization
    },
    {
      path: '/cart',
      name: 'cart',
      component: Home
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: Profiles
    }
  ],
  linkActiveClass: 'is_active'
})
