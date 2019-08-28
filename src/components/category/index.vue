<template>
  <div class="cata">
      <!-- 搜索框 -->

      <!-- 内容 -->
      <cate-list-l></cate-list-l>
  </div>
</template>
<script>
import cateListL from "./components/cateListL.vue"
export default {
    components:{
        cateListL
    }
}
</script>
<style scoped>
.cata{
    height: 100%;
    width: 100%;
}
</style>
