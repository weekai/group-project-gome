<template>
  <div class="look">
    <i class="line"></i>
    <i class="dot"></i>
    <span class="text">看完啦</span>
    <i class="dot"></i>
    <i class="line"></i>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.look {
  margin-top: 20px;
  height: 120px;
  color: white;
  display: flex;
  -webkit-box-align: center;
  font-size: 30px;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  .line {
    display: block;
    flex: 1;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    height: 1px;
  }
  .dot {
    display: block;
    width: 6px;
    height: 6px;
    background-color: #e6e6e6;
    border-radius: 50%;
  }
  .text {
    width: 120px;
    text-align: center;
    margin: 0 5px;
  }
}
</style>