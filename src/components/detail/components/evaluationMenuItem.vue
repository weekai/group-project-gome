<template>
  <div class="menuItem">
    <slot name="menuItem"></slot>
  </div>
</template>

<style lang="less" scoped>
.menuItem {
  display: inline-block;
  // width: auto;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 30px;
  background: #ffe4ed;
  line-height: 60px;
  color: #333;
  margin: 15px;
  &:first-child {
    color: #fff;
    background: #f20c59;
  }
}
</style>