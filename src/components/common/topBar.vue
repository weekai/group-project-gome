<template>
  <div class="topbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.topbar {
  background: #fff;
  width: 100%;
  height: 90px;
  // background: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  .left {
    // background: red;
    font-size: 42px;
    i {
      margin-left: 24px;
      font-size: 48px;
      // font-weight: bold;
    }
  }
  .center {
    font-size: 34px;
  }
  .right {
    font-size: 42px;
    font-weight: bold;
    color: #676262;
  }
}
</style>
