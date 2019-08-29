<template>
  <div id="sub-info">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#sub-info {
  width: 100%;
  height: 192px;
  background: #FFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
}
</style>
