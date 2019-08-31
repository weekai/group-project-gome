<template>
  <div class="box">
    <!-- 搜索框 -->
    <search></search>
    <!-- Nav -->
    <top-nav></top-nav>
    <!-- 列表 -->
    <produc-list></produc-list>
    <!-- 购物车 -->
    <cart></cart>
    <!-- 去顶部 -->
    <to-top></to-top>
  </div>
</template>
<script>
import search from "../category/components/search";
import TopNav from "./components/topNav.vue";
import ProducList from "./components/producList.vue";
import Cart from "./components/cart.vue";
import ToTop from "./components/totop.vue";

export default {
  components: {
    search,
    TopNav,
    ProducList,
    Cart,
    ToTop


  }
};
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;

}
.ca{
  border: 1px solid rgb(153, 151, 151);
  border-radius: 50px;
  position: fixed;
  background: #fff;
  right: 20px;
  bottom: 200px;
}

</style>
