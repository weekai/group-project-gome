import Vue from 'vue'
import Router from 'vue-router'
import Optimization from '../components/Optimization/index.vue'

Vue.use(Router) //注册使用

export default new Router({
  routes: [{
    path: '/optimization',
    name: 'Optimization',
    component: Optimization,
    meta: {
      cache: false,
      title: '优选'
    }
  }, ]
})
