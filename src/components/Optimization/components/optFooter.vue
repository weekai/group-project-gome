<template>
  <div class="foot">
    <ul>
      <li v-for="(item,index) in footList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footList: ["登录", "|", "注册", "|", "更多", "|", "反馈"]
    };
  }
};
</script>
<style lang="less" scoped>
.foot {
  width: 100%;
  height: 98px;
  background: white;
  border-bottom: 2px solid rgb(194, 194, 194);
  ul {
    height: 98px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 80px;
    li {
      font-size: 30px;
      text-align: center;
      color: #888;
    }
  }
}
</style>