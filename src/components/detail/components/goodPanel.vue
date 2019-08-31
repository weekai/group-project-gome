<template>
  <div class="good-panel">
    <div class="top">
      <slot name="tag"></slot>
      <slot name="title"></slot>
      <slot name="arrow"></slot>
    </div>
    <slot class="bottom" name="service">
      <slot name="tag1"></slot>
      <slot name="content"></slot>
    </slot>
  </div>
</template>

<style lang="less" scoped>
.good-panel {
  padding: 28px 24px 12px 24px;
  box-sizing: border-box;
  margin-top: 24px;
  background: #fff;
  font-size: 26px;
  line-height: 54px;
  display: flex;
  flex-direction: column;
  .top {
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: nowrap;
    [slot="tag"] {
      margin-right: 24px;
      color: #a2a4a6;
    }

    [slot="title"] {
      line-height: 34px;
    }
    [slot="arrow"] {
      display: block;
      float: right;
      font-size: 30px;
      color: #aaa;
    }
  }
  [slot="tag1"] {
    margin-right: 24px;
    color: #a2a4a6;
  }
  [slot="content"] {
    color: #197fe7;
  }
  .bottom {
    line-height: 68px;
  }
}
</style>