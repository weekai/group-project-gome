import Vue from 'vue'
import Router from 'vue-router'

import Category from '@/components/category/index.vue'
const Home = () => import('../components/home/index.vue')
const Profiles = () => import('../components/profiles/index.vue')
const Optimization = () => import('../components/optimization/index.vue')
const ProductList = () => import('../components/productList/index.vue')
const Detail = () => import('../components/detail/index.vue')
const Good = () => import('../components/detail/components/good.vue')
const Description = () => import('../components/detail/components/description.vue')
const Evaluation = () => import('../components/detail/components/evaluation.vue')
const Cart = () => import('../components/cart/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        cache: true,
        title: '购物车'
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
      path: '/detail',
      name: 'detail',
      component: Detail,
      redirect:'/detail/good',
      children: [
        {
          path: 'good',
          name: 'good',
          component: Good,
          meta: {
            cache: true,
            title: '商品介绍'
          },
        },
        {
          path: 'description',
          name: 'description',
          component: Description,
          meta: {
            cache: true,
            title: '商品详情'
          },
        },
        {
          path: 'evaluation',
          name: 'evaluation',
          component: Evaluation,
          meta: {
            cache: true,
            title: '商品评价'
          },
        }
      ]
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductList,
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
