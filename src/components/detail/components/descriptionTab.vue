<template>
  <div v-if="description!= null">
    <!-- 切换选项卡 -->
    <ul class="des_nav">
      <li
        :class="[currentIndex == index ? 'actived':'']"
        @click="changeIndex(index)"
        v-for="(item, index) in info.desNav"
        :key="index"
      >{{item.name}}</li>
    </ul>

    <!-- 切换选项卡的内容 -->
    <div class="img-content">
      <img v-for="(item, index) in description.desc" :key="index" v-lazy="'https://'+ item" alt />
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from "vux";

export default {
  data() {
    return {
      index: 0,
      description: null,
      info: null,
      currentIndex: 0
    };
  },
  props: ["cdescription", "cinfo"],
  mounted() {
    // console.log(this.cdescription);
    this.$nextTick(() => {
      this.description =
        this.cdescription != undefined ? this.cdescription : null;
      this.info =
        this.cdescription != undefined ? this.cdescription.stock : null;
    });
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    }
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
.vux-tab-item {
  &:nth-child(2) {
    border-left: 1px solid #333 !important;
    border-right: 1px solid #333 !important;
  }
}
.des_nav {
  position: relative;
  height: 90px;
  line-height: 90px;
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
  li {
    text-align: center;
    line-height: 45px;
    width: 250px;
    font-size: 28px;
    border-right: 0.5px solid #000;
    &:nth-child(3) {
      border-right: 0 none;
    }
    &.actived {
      color: #333;
    }
  }
}

.img-content {
  background: #fff;
  width: 100%;
  padding: 20px 10px 0;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
</style>