<template>
  <div class="cata">
      <!-- 搜索框 -->
       <search></search>
      <!-- 内容 -->
       <div class="content">
      <cate-list-l></cate-list-l>
       </div>
  </div>
</template>
<script>
import cateListL from "./components/cateListL.vue"
import search from "./components/search.vue"
export default {
    components:{
        cateListL,
        search
    }
}
</script>
<style scoped>
.cata{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column
}
.content{
  margin-top: 100px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
}
</style>
