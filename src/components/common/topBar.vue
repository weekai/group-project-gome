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
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  position: sticky;
  top: -1px;
  left: 0;
  z-index: 9999;
  .left {
    font-size: 42px;
    i {
      margin-left: 24px;
      font-size: 48px;
    }
  }
  .center {
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100px;
    height: 100%;
  }
  .right {
    font-size: 42px;
    font-weight: bold;
    color: #676262;
  }
}
</style>
