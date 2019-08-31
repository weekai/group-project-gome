<template>
  <div class="item_bg">
    <div class="sub-menu-item">
      <div class="item-pic">
        <slot name="item-pic"></slot>
      </div>
      <div class="item-text">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item_bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    margin-right: 1px;
    height: 100%;
    background: #fff;
    &:last-child{
        margin-right: -2px;
    }
}
.sub-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-right: 1px;
  .item-pic {
    margin-bottom: 12px;
    img {
      width: 49px;
      height: 49px;
    }
  }
  .item-text {
    font-size: 26px;
    color: #666;
  }
}
</style>