<template>
  <div id="line">
    <div class="line-border">
      <div class="line-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#line {
  width: 100%;
  height: 60px;
  //   background: gold;
  text-align: center;
  padding: 10px 0 16px 0;
  .line-border {
    transform: translateY(50%);
    border-bottom: 1px solid #d2d2d2;
    .line-text {
      color: #999999;
      display: inline-block;
      padding: 0 16px;
      height: 100%;
      background: #f2f2f2;
      position: relative;
      transform: translateY(50%);
      i{
          font-size: 24px;
          color: #333;
      }
    }
  }
}
</style>