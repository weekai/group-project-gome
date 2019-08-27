import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/home/index.vue')
const Profiles = () => import('../components/profiles/index.vue')

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
      name: 'category',
      component: Home
    },
    {
      path: '/optimization',
      name: 'optimization',
      component: Home
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
