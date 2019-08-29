<template>
  <div class="optimization">
    <OptTop></OptTop>
    <!-- banner 图 -->
    <div class="banner">
      <img src="https://gfs12.gomein.net.cn/wireless/T1aSAXBsJT1RCvBVdK_990_480.jpg" alt />
      <img src="//gfs11.gomein.net.cn/wireless/T1rSZXB5ZT1RCvBVdK_750_170.jpg" alt />
    </div>
    <!-- 导航 -->
    <OptNav></OptNav>
    <!-- 内容列表 -->
    <OptConList></OptConList>
    <!-- 底部看完了 -->
    <OptLookOver></OptLookOver>
    <!-- 底部导航 -->
    <OptFooter></OptFooter>
    <!-- 详细地址电话 -->
    <OptFootTel></OptFootTel>
    <!-- 右侧广告 -->
    <OptGg></OptGg>
    <!-- 右侧购物车图标 -->
    <OptCart></OptCart>
    <!-- 右侧返回顶部图标 -->
    <OptBackTop></OptBackTop>
  </div>
</template>
<script>
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
export default {
  components: {
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