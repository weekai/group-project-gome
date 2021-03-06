import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import FastClick from 'fastclick'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


// 吕筱然
import LyTab from 'ly-tab'

import MintUI from "mint-ui";

import 'mint-ui/lib/style.min.css'


Vue.use(MintUI)
Vue.use(LyTab)
Vue.use(VueAwesomeSwiper)

// 300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {
  }
})
