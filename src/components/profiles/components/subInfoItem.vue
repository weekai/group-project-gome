<template>
  <div class="sub-info-item">
    <div class="item-pic">
      <slot name="item-pic"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.sub-info-item {
  height: 100%;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:last-child {
    background: #fcfcfc;
    border-left: 1px solid #f4f4f4;
    position: relative;
    &::before {
      position: absolute;
      left: -4px;
      content: "";
      width: 16px;
      height: 16px;
      background: url("../images/jiantou.png") no-repeat;
      background-size: 16px;
    }
  }

  .item-pic {
    margin-bottom: 12px;
    font-size: 32px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .item-text {
    font-size: 26px;
    color: #666666;
    p{
      font-size: 26px;
      line-height: 32px;
      &:last-child{
        font-size: 20px;
        transform: scale(0.8);
      }
    }
  }
}
</style>