<template>
  <div class="box">
    <!-- <div></div> -->
    <!-- 搜索框 -->
    <search></search>
    <!-- Nav -->
    <top-nav></top-nav>
    <!-- 列表 -->
    <produc-list ref="scollElement"></produc-list>
    <!-- 购物车 -->
    <cart></cart>
    <!-- 去顶部 -->
    <!-- <a href="#to" name="to"> -->
    <to-top @click.native="backTop"></to-top>
    <!-- </a> -->
  </div>
</template>
<script>
import search from "../category/components/search";
import TopNav from "./components/topNav.vue";
import ProducList from "./components/producList.vue";
import Cart from "./components/cart.vue";
import ToTop from "./components/totop.vue";
import { constants } from "crypto";

export default {
  components: {
    search,
    TopNav,
    ProducList,
    Cart,
    ToTop
  },
  methods: {
    backTop() {

      // 滚动元素跳转到顶部
      this.$refs.scollElement.scrollTo(0, 0);
      console.log(this.$refs.scollElement);
      // this.$refs.scroll.$el.scrollIntoView()
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.ca {
  border: 1px solid rgb(153, 151, 151);
  border-radius: 50px;
  position: fixed;
  background: #fff;
  right: 20px;
  bottom: 200px;
}
.to {
  border: 1px solid rgb(153, 151, 151);
  border-radius: 100px;
  padding: 10px;
  position: fixed;
  background: #fff;
  right: 20px;
  bottom: 100px;
}
</style>
