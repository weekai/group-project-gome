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
  width: 100%;
  height: 100px;
  // background: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
</style>