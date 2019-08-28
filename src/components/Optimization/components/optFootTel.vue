<template>
  <div class="foot">
    <p class="address">{{ addreess }}</p>
    <p class="tel">{{ tel }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addreess: "copyright © 2000-2019 gome.com.cn",
      tel: "客服热线：4008-708-708"
    };
  }
};
</script>
<style lang="less" scoped>
.foot {
  height: 130px;
  background: white;
  p {
    text-align: center;
    color: #888;
    font-size: 28px;
    padding-top: 20px;
  }
  p.address{
      padding-top: 30px;
  }
}
</style>