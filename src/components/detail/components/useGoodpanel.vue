<template>
  <div>
    <good-panel>
      <div slot="title">
        <p>
          <span slot="tag">已选</span>
          <span slot="title">Y7000/I5/512固态</span>
          <span>1个</span>
        </p>
      </div>
      <div slot="service">
        <p>
          <span slot="tag1">推荐</span>
          <span slot="content">增值服务</span>
        </p>
      </div>
    </good-panel>
  </div>
</template>

<script>
import GoodPanel from "./goodPanel";
export default {
  components: {
    GoodPanel
  }
};
</script>

<style lang="less" scoped>
</style>