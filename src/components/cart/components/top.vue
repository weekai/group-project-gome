<template>
  <div class="Top">
    <div class="top">
      <div class="left">
        <div @click="$router.go(-1)" slot="left">
            <i class="iconfont icon_arrow_left"></i>
        </div>
      </div>
      <div class="center">
        <span>购物车</span>
        <img src="@/assets/images/addr.png" alt />
      </div>
      <div class="right">
        <i class="iconfont icon_more" @click="ispop=!ispop"></i>
        <Popmenu v-show="ispop"></Popmenu>
      </div>
    </div>
  </div>
</template>

<script>
  import Popmenu from "./popMenu.vue";
  export default {
    components: {
      Popmenu
    },
    data() {
      return {
        popupVisible: false,
        ispop: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .Top {
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;

    .top {
      background: #fff;
      width: 100%;
      height: 100px;
      line-height: 100px;
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      box-sizing: border-box;
      .left {
        width: 30%;
        display: inline-block;

          i{
            font-size: 0.64rem;
          }
      }

      .center {
        width: 30%;
        display: inline-block;
        font-size: 36px;
        width: 30%;

        img {
          width: 28px;
          height: 28px;
        }
      }
      .right {
        display: inline-block;
        padding-right: 30px;

        .icon_more::before {
          font-size: 40px;
          content: '\E634';
        }
      }

    }
  }
</style>
