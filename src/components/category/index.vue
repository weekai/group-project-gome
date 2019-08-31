<template>
  <div class="cata">
    <!-- 搜索框 -->
    <!-- <search></search> -->
    <top-bar class="topBar">
      <router-link tag="div" to="/home" slot="left">
        <i class="iconfont icon_arrow_left"></i>
      </router-link>
      <div slot="center" class="center">
        <div class="search">
          <input readonly type="text" placeholder="电视内购会领50元券" />
          <i class="iconfont icon_search"></i>
        </div>
      </div>
      <div slot="right" @click="ispop = !ispop">
        <i class="iconfont icon_more"></i>
        <pop-up v-show="ispop"></pop-up>
      </div>
    </top-bar>

    <!-- 内容 -->
    <div class="content">
      <!-- 左侧 -->
      <cate-list-l></cate-list-l>
      <!-- 右侧 -->
      <cate-list-r></cate-list-r>
    </div>
  </div>
</template>
<script>
import cateListL from "./components/cateListL.vue";
import cateListR from "./components/cateListR.vue";
import TopBar from "../common/topBar";
import PopUp from "../common/popUp";
export default {
  components: {
    TopBar,
    PopUp,
    cateListL,
    cateListR
  },
  data() {
    return {
      ispop: false
    };
  }
};
</script>
<style scoped lang="less">
.topbar {
  background: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  .left {
    width: 60px;
    img {
      width: 57.6px;
      height: 57.6px;
    }
  }
  .center {
    // background: red;
    position: relative;
    font-size: 24px;
    width: 560px;
    i {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 38px;
      color: #999;
    }

    input {
      width: 560px;
      font-size: 24px;
      height: 60px;
      border-radius: 36px;
      padding-left: 20px;
      margin-top: -5px;
      box-sizing: border-box;
      background: #f6f6f6;
      user-select: none;
    }
  }

  .right {
    width: 160px;
    font-size: 28px;
    img {
      width: 52.78px;
      height: 46.78px;
      margin-right: 20px;
    }

    p {
      font-size: 28px;
      line-height: 56px;
      width: 56px;
      height: 56px;
    }
  }
}

.cata {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content {
  margin-top: 100px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
}
</style>
