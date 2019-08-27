<template>
  <div class="content">
    <!-- 左边 -->
    <div class="l-content">
      <ul>
        <li v-for="(item,index) in cateList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCateList } from "@/api/index.js";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      cateList: []
    };
  },
  created() {
    getCateList().then(data => {
      this.cateList = data.result.data;
      this.$nextTick(() => {
        new BScroll(".l-content");
      });
    });
  }
};
</script>
<style lang="less">
.content {
  height:100%;
  width: 100%;
  display: flex;
  // overflow: hidden;
  flex-direction: column;
  .l-content {
    height: 100%;
    ul {
      height: 100%;
      color: #333;
      li {
        width: 158px;
        height: 96px;
        text-align: center;
        line-height: 96px;
        font-size: 30px;
        background: #f0f0f0;
        position: relative;
        &::after{
          content: "";
          width: 100px;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 29px;
          
          // border: 1px solid #999;
          background: #dddddd;;
        }
        .cull{
          height: 100%;
          width: 4px;
          background: #F20C59;
          color: #F20C59;
        }
      }
     
    }
  }
}
</style>
