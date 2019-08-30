<template>
  <div class="top-banner">
    <swiper
      height="auto"
      ref="wraper"
      @on-get-height="updateHeaght"
      :show-dots="false"
      v-model="index"
    >
      <swiper-item class="black">
        <img src="//gfs17.gomein.net.cn/T1CfCsBsVv1RCvBVdK_400.jpg?v=20170727" alt />
      </swiper-item>
      <swiper-item class="black">
        <img src="//gfs12.gomein.net.cn/T1uBVsBKWv1RCvBVdK_400.jpg?v=20170727" alt />
      </swiper-item>
      <swiper-item class="black">
        <img src="//gfs10.gomein.net.cn/T1F3WsBg_v1RCvBVdK_400.jpg?v=20170727" alt />
      </swiper-item>
      <swiper-item class="black">
        <img src="//gfs12.gomein.net.cn/T1XbZsBXET1RCvBVdK_400.jpg?v=20170727" alt />
      </swiper-item>
      <swiper-item class="black">
        <img src="//gfs13.gomein.net.cn/T1FxJsB5Jv1RCvBVdK_400.jpg?v=20170727" alt />
      </swiper-item>
      <swiper-item class="black">
        <img src="//gfs12.gomein.net.cn/T1hbEsB7Lv1RCvBVdK_400.jpg?v=20170727" alt />
      </swiper-item>
      <div class="pagenation">
        <p>{{ index + 1 }}/6</p>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";

export default {
  data() {
    return {
      index: 0
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    updateHeaght() {
      let topHeight = document.getElementsByClassName("vux-slider")[0]
        .offsetTop;
      let wrap_height = document.getElementsByClassName("top-banner")[0]
        .clientHeight;
      this.$nextTick(() => {
        //   console.log(wrap_height)
        this.$refs.wraper.xheight = wrap_height + "px";
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top-banner {
  width: 100%;
  height: 600px;
  background: #fff;
  text-align: center;
  position: relative;
  img {
    width: 500px;
    height: 500px;
  }
  .pagenation {
    width: 100px;
    height: 48px;
    line-height: 48px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 24px;
    position: absolute;
    bottom: 50px;
    right: 100px;
    p {
      font-size: 26px;
      letter-spacing: 4px;
      color: #fff;
    }
  }
}
</style>