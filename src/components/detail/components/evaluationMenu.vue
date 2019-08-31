<template>
  <div class="pj_menu">
    <slot></slot>
    <div class="auto">
      <slot name="degree"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pj_menu {
  width: 100%;
  height: 200px;
  background: #fff;
  border-bottom: 2px solid #e9e9e9;
  display: flex;
  justify-content: space-start;
  flex-wrap: no-wrap;
  // align-items: space-around;
  box-sizing: border-box;
  .auto {
    float: right;
    // flex: 1;
  }
}
</style>