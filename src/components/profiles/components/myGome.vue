<template>
  <div class="userinfo">
    <slot name="userinfo"></slot>
    <slot name="subinfo"></slot>
    <slot name="submenu"></slot>
    <slot name="linetext"></slot>
    <slot name="guesslike"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

.userinfo {
  width: 100%;
  height: auto;
}
</style>