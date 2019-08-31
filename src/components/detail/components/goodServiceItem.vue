<template>
  <div class="serverItem">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.serverItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    line-height: 50px;
    border-right: 2px solid #eee;
    &:last-child{
        border-right:none;
    }
    .top{
        font-size: 26px;
        color: #333;
        i{
            font-size: 32px;
            margin-right: 10px;
        }
    }
    .bottom{
        color: #a2a4a6;
        font-size: 24px;
    }
}
</style>