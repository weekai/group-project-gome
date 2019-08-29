<template>
  <div class="optimization">
    <top-bar>
      <router-link tag="div" to="/home" slot="left">
        <i class="iconfont icon_arrow_left"></i>
      </router-link>
      <div slot="center">电脑主会场</div>
      <div slot="right" @click="ispop = !ispop">
        <i class="iconfont icon_more"></i>
        <pop-up v-show="ispop"></pop-up>
      </div>
    </top-bar>
    <!-- banner 图 -->
    <div class="banner">
      <img src="https://gfs12.gomein.net.cn/wireless/T1aSAXBsJT1RCvBVdK_990_480.jpg" alt />
      <img src="//gfs11.gomein.net.cn/wireless/T1rSZXB5ZT1RCvBVdK_750_170.jpg" alt />
    </div>
    <!-- 导航 -->
    <opt-nav />
    <!-- 内容列表 -->
    <opt-con-list />
    <!-- 底部看完了 -->
    <opt-look-over />
    <!-- 底部导航 -->
    <opt-footer />
    <!-- 详细地址电话 -->
    <opt-foot-tel />
    <!-- 右侧广告 -->
    <opt-gg />
    <!-- 右侧购物车图标 -->
    <opt-cart />
    <!-- 右侧返回顶部图标 -->
    <opt-back-top />
  </div>
</template>
<script>
//  导入组件---topBar
import TopBar from "../common/topBar";

import OptTop from "./components/optTop";
// 导入组件---导航
import OptNav from "./components/optNav";
// 导入组件---内容列表
import OptConList from "./components/optConList";
// 导入组件---底部看完了
import OptLookOver from "./components/optLookOver";
// 导入组件---底部导航
import OptFooter from "./components/optFooter";
// 导入组件---底部详细地址电话
import OptFootTel from "./components/optFootTel";
// 导入组件---右侧广告
import OptGg from "./components/optGg";
// 导入组件---右侧购物车图标
import OptCart from "./components/optCart";
// 导入组件---右侧返回顶部图标
import OptBackTop from "./components/optBackTop";
// 导入组件---popBar
import PopUp from "../common/popUp";

export default {
  data() {
    return {
      ispop: false
    };
  },
  components: {
    TopBar,
    PopUp,
    OptTop,
    OptNav,
    OptConList,
    OptLookOver,
    OptFooter,
    OptFootTel,
    OptGg,
    OptCart,
    OptBackTop
  }
};
</script>
<style lang="less" scoped>
.optimization {
  background: #7f0305;
  // height: 3000px;
  // banner 图
  .banner {
    width: 750px;
    // height: 360px;
    img {
      width: 100%;
    }
  }
}
</style>