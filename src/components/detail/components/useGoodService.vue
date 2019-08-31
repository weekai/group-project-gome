<template>
  <div>
    <good-service>
      <good-service-item>
        <p slot="top">
          <i class="iconfont icon_change_new"></i>以旧换新
        </p>
        <p slot="bottom">以旧换新再送好礼</p>
      </good-service-item>
      <good-service-item>
        <p slot="top">
          <i class="iconfont icon_add_heart"></i> 可选增值服务
        </p>
        <p slot="bottom">为商品保价护航</p>
      </good-service-item>
    </good-service>
  </div>
</template>

<script>
import GoodService from "./goodService";
import GoodServiceItem from "./goodServiceItem";

export default {
  components: {
    GoodService,
    GoodServiceItem
  }
};
</script>

<style lang="less" scoped>
</style>