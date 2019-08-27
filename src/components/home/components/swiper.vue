<template>
  <swiper class="sw" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img class="s-img" :src="slide.url"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getBanners} from '@/api/index.js'
export default {
  name: 'carrousel',
  created () {
    getBanners().then((data) => {
        console.log(data.result.data)
      this.swiperSlides = data.result.data
    })
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      swiperSlides: []
    }
  }
}
</script>

