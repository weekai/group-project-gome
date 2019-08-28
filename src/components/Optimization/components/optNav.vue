<template>
  <div class="optList">
    <ul>
      <router-link tag="li" to v-for="(item,index) in list" :key="index">{{item}}</router-link>
      <!-- <router-link tag="li" v-for="(item,index) in list">{{item}}</router-link> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["内购福利", "用卷专区", "4K智能", "品牌专区", "卧室电脑"]
    };
  }
};
</script>
<style lang="less" scoped>
.optList {
  ul {
    display: flex;
    justify-content: space-between;
    height: 88px;
    width: 860px;
    background: white;
    margin-top: 16px;
    line-height: 88px;
    text-align: center;
    font-size: 28px;
    overflow-x: auto;
    li {
      flex: 1;
      display: inline-block;
    }
  }
}
</style>