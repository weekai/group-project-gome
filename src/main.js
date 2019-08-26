import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 路由全局守卫函数
router.beforeEach((to, from, next) => {
  // console.log(to.meta.title)
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
