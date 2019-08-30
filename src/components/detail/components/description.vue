<template>
  <div class="description">
    <!-- 详情页上半部分信息 -->
    <div class="info-cont" v-if="info != null">
      <div class="img-box">
        <img :src="info.url" alt />
      </div>
      <div class="info-msg">
        <p>{{ info.title }}</p>
        <span>{{ info.skuPrice }}</span>
      </div>
      <div class="tipBg">
        <div class="tip">
          <p>{{ info.adDesc }}</p>
        </div>
      </div>
    </div>

    <!-- 下边选项卡切换 -->
    <div v-if="info != null">
      <!-- 切换选项卡 -->
      <tab
        class="des_nav"
        :line-width="0"
        active-color="#000"
        v-model="index"
        :scroll-threshold="999"
      >
        <tab-item
          class="vux-center title"
          v-for="(item, index) in info.desNav"
          :key="index"
          @click="console.log(index)"
        >{{item.name}}</tab-item>
      </tab>
      <!-- 切换选项卡的内容 -->
      <div class="img-content">
        <img v-for="(item, index) in description.desc" :key="index" v-lazy="'https://'+ item" alt />
      </div>
    </div>
    <!-- 切换选项卡的内容结束 -->
    
    
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem } from "vux";
import { getDetail } from "@/api/index.js";

export default {
  data() {
    return {
      description: null,
      info: null,
      currentIndex: 0,
      index: 0
    };
  },

  methods: {
    changeStatus(item, index) {
      this.active = item.id;
      this.currentIndex = index;
    }
  },
  watch: {
    description() {
      this.info = this.description.stock;
      // console.log(this.info);
    }
  },

  async created() {
    // this.description = await getDetail();
    let ret = await getDetail();
    this.description = ret.detail;
    // console.log(this.description);
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  }
};
</script>

<style lang="less">
body {
  background: #fff;
}
.actived {
  color: #333;
}
.description {
  .info-cont {
    height: 284px;
    width: 100%;
    background: #fff;
    display: flex;
    position: relative;
    padding: 12px 24px;
    box-sizing: border-box;
    .img-box {
      width: 204px;
      height: 204px;
      img {
        width: 204px;
        height: 204px;
      }
    }
    .info-msg {
      padding: 24px 12px;
      p {
        font-size: 28px;
        color: #333333;
        line-height: 40px;
      }
      span {
        display: block;
        margin-top: 24px;
        color: #f20c59;
        font-size: 28px;
        &::before {
          content: "￥";
        }
      }
    }
    .tipBg {
      background: #fff;
      width: 100%;
      position: absolute;
      bottom: -174px;
      left: 0px;
    }
    .tip {
      height: 120px;
      border: 1px solid #f8dcbc;
      border-radius: 6px;
      background: #fffde5;
      color: #ff8000;
      margin: 24px 24px 36px;
      box-sizing: border-box;
      padding: 20px;
      line-height: 40px;
      left: 0;
      z-index: 666;
      &::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border: #f8dcbc solid 1px;
        background-color: #fffde5;
        border-left: 0;
        border-top: 0;
        top: 15px;
        left: 100px;
        -webkit-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }
  .des_nav {
    position: relative;
    margin-top: 175px;
    height: 100px;
    line-height: 60px;
    background: #ffffff;
    border: 1px solid #999;
    border-left: none;
    border-right: none;
    padding: 20px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    color: #919599;
    font-size: 38px;
    span {
      display: block;
      text-align: center;
      width: 250px;
      font-size: 28px;
      border-right: 0.5px solid #000;
      &:nth-child(3) {
        border-right: 0 none;
      }
    }
  }
  .vux-tab-container,
  .vux-tab {
    height: 100%;
    .vux-tab-item {
      height: 19200px !important;
      line-height: 100px;
      font-size: 28px;
      &:nth-child(2) {
        border-left: 1px solid #333 !important;
        border-right: 1px solid #333 !important;
      }
    }
  }
}
.img-content {
  width: 100%;
  padding: 20px 10px 0;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
.vux-slider {
  height: 100% !important;
  overflow: scroll !important;
}
</style>
