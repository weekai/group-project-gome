<template>
  <div class="topbar">
    <div class="left">
      <slot name="left">
        <img src="../../assets/images/logo.png" alt />
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        <i class="iconfont icon_search"></i>
        <input readonly type="text" placeholder="家具建材低至8.8元" />
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <img src="../../assets/images/cart.png" alt />
        <p>登录</p>
        <!-- <img src="../../assets/images/user.png" alt /> -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.topbar {
  width: 100%;
  height: 100px;
  //   background: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;

  .left {
    img {
      width: 57.6px;
      height: 57.6px;
      padding-right: 24px;
    }
  }
  .center {
    display: flex;
    position: relative;
    width: 408px;
    // background: red;
    i {
      position: absolute;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 38px;
      color: #999;
    }
    input {
      width: 100%;
      height: 72px;
      border-radius: 36px;
      padding-left: 72px;
      box-sizing: border-box;
      background: #f6f6f6;
      user-select: none;
    }
  }
  .right {
    width: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 28px;
    img {
      width: 46.78px;
      height: 46.78px;
    }
  }
}
</style>