<template>
  <div class="cata">
    <!-- 搜索框 -->
    <search></search>
    <!-- 内容 -->
    <div class="content">
      <!-- 左侧 -->
      <cate-list-l></cate-list-l>
      <!-- 右侧 -->
      <cate-list-r></cate-list-r>
    </div>
  </div>
</template>
<script>
import cateListL from "./components/cateListL.vue";
import cateListR from "./components/cateListR.vue";
import Search from "./components/search";
export default {
  components: {
    cateListL,
    cateListR,
    Search
  }
};
</script>
<style scoped lang="less">


.cata {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content {
  // margin-top: 90px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
}
</style>
