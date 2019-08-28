<template>
  <div class="home">
    <top-bar>
       <slot>aaa</slot>
    </top-bar>

    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 分类 -->
    <Category></Category>
    <!-- banner -->
    <img class="b-img" src="//gfs13.gomein.net.cn/wireless/T1JTLXBgDT1RCvBVdK_1125_336.png" />
    <div class="b2-img">
      <ul>
        <li>
          <img src="//gfs11.gomein.net.cn/T1hkEXB5CT1RCvBVdK.gif" />
        </li>
        <li>
          <img src="//gfs11.gomein.net.cn/wireless/T199JXBXKT1RCvBVdK_533_363.jpg" />
        </li>
      </ul>

    </div>

    <!-- 国美头条 -->
    <Headline></Headline>


    <!-- 猜你喜欢 -->
    <guess-like></guess-like>
  </div>
</template>
<script>
import TopBar from '../common/topBar.vue'
import Swiper from "./components/swiper.vue"
import Category from "./components/category.vue"
import Headline from "./components/headline.vue"
import GuessLike from "./components/guessLike.vue"
import TabBar from "../common/tabBar"

export default {
  components: {
    TopBar,
    Swiper,
    Category,
    Headline,
    GuessLike
  }
}
</script>
<style lang="less" scoped>
  .home{
    background: #f3f5f7;
    overflow-x: hidden;
  }
  .b-img{
    width: 100%;
  }
  .b2-img{
    margin: 20px 0px;
    width:100%;
    ul{
      margin-left: 25px;
      width: 700px;
      display:flex;
      border-radius:30px;
      overflow:hidden;
      li{
        margin-right:5px;
        img{
          width: 350px;
          height: 240px;
        }
      }
    }

  }
</style>
