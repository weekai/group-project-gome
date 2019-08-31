<template>
  <div class="goodinfo">
    <!-- 上部 -->
    <div class="top">
      <!-- 上左 -->
      <div class="left">
        <slot name="tag"></slot>
        <slot name="title"></slot>
      </div>
      <!-- 上右 -->
      <div class="right">
        <slot name="share"></slot>
      </div>
    </div>
    <div class="center">
      <slot name="prop"></slot>
    </div>
    <div class="bottom">
      <slot name="price"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.goodinfo {
  height: 284px;
  width: 100%;
  padding: 14px 20px 28px 24px;
  box-sizing: border-box;
  background: #fff;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 96px;
    // background: red;
    .left {
      font-size: 32px;
      padding-right: 30px;
      color: #333;
      line-height: 50px;
      flex: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      [slot="tag"] {
        background: #f61e74;
        border-radius: 4px;
        color: #fff;
        font-size: 24px;
        padding: 4px;
        line-height: 32px;
      }
    }
    .right {
      border-left: 1px solid #eee;
      text-align: center;
      width: 116px;
      display: flex;
      flex-wrap: no-wrap;
      align-items: center;
      justify-content: space-around;
      font-size: 26px;
      i {
        display: block;
        font-weight: bold;
        font-size: 36px;
        margin-bottom: 12px;
      }
    }
  }
  .center{
      color: #F20C59;
      line-height: 34px;
  }

    .bottom{
        font-size: 48px;
        font-weight: bold;
        color: #F20C59;
        margin-top: 20px;
        p{
            &::before{
                content: "￥";
                font-size: 34px;
            }
        }
    }
}
</style>