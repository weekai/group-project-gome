import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Category from '@/components/category/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect:'/home' 
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
  ]
})
