<template>
  <div class="home">
    <top-bar>
    
    </top-bar>
    <tab-bar></tab-bar>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 猜你喜欢 -->
    <guess-like></guess-like>
  </div>
</template>
<script>
import Swiper from "./components/swiper.vue"
import GuessLike from "./components/guessLike.vue"
import TabBar from "../common/tabBar"
import TopBar from "../common/topBar"

export default {
  components: {
    Swiper,
    GuessLike,
    TabBar,
    TopBar
  }
}
</script>
