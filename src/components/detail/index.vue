<template>
  <div>
    <top-bar>
      <router-link tag="div" to="/home" slot="left">
        <i class="iconfont icon_arrow_left"></i>
      </router-link>
      <div slot="center" class="top-center">
        <router-link tag="span" to="/detail/good">商品</router-link>
        <router-link tag="span" to="/detail/description">详情</router-link>
        <router-link tag="span" to="/detail/evaluation">评价</router-link>
      </div>
      <div slot="right" @click="ispop = !ispop">
        <i class="iconfont icon_more"></i>
        <pop-up v-show="ispop"></pop-up>
      </div>
    </top-bar>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import TopBar from "../common/topBar";
import PopUp from "../common/popUp";

export default {
  data() {
    return {
      ispop: false
    };
  },
  components: {
    TopBar,
    PopUp
  }
};
</script>

<style lang="less" scoped>
body{
  background: #f2f2f2;
}
.top-center {
  height: 100%;
  span {
    display: inline-block;
    height: 94%;
    font-size: 32px;
    padding: 0 20px;
  }
  .is_active {
    border-bottom: 4px solid #f20c59;
    color: #f20c59;
  }
}
</style>