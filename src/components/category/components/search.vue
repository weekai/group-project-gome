<template>
  <div>
    <top-bar>
      <div class="left" slot="left" @click="$router.go(-1)">
        <i class="iconfont icon_arrow_left"></i>
      </div>
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
  </div>
</template>

<script>
import TopBar from "../../common/topBar";
import PopUp from "../../common/popUp";

export default {
  data() {
    return {
      ispop: false
    }
  },
  components: {
    TopBar,
    PopUp
  }
};
</script>

<style lang="less" scoped>
.topbar {
  background: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: -2px;
  z-index: 1000;
  .left {
    i{
      margin: 0px;
    }
  }
  .center {
    flex: 1;
    background: #fff;
    position: relative;
    font-size: 24px;
    margin: 0 60px;
    .search {
      background: r#fff;
    }
    i {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 38px;
      color: #999;
    }

    input {
      width: 440px;
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
</style>