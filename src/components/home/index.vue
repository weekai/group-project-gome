<template>
  <div class="home">
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 猜你喜欢 -->
    <guess-like></guess-like>
  </div>
</template>
<script>
import Swiper from "./components/swiper.vue"
import GuessLike from "./components/guessLike.vue"
export default {
  components: {
    Swiper,
    GuessLike
  }
}
</script>
