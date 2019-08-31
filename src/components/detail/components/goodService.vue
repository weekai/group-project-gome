<template>
  <div class="good-server">
    <slot>
       
    </slot>
  </div>
</template>

<script>
import GoodServiceItem from "./goodServiceItem";

export default {
  components: {
  }
};
</script>

<style lang="less" scoped>
.good-server {
  width: 100%;
  height: 134px;
  background: #fff;
  margin: 24px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

</style>