<template>
  <!-- 左边 -->
  <div class="l-content wrapper">
    <ul>
      <li
        v-for="(item,index) in cateList"
        :key="index"
        :class="currentIndex == index? 'on':'' "
        @click="changeCate(index)"
      >{{item.catalog}}</li>
    </ul>
  </div>
</template>

<script>
import { getCateList } from "@/api/index.js";
import BScroll from "@better-scroll/core";
import bus from "./bus.js";

export default {
  data() {
    return {
      cateList: [],
      currentIndex: 0
    };
  },
  methods: {
    changeCate(index) {
      var cid = index + 101;

      // getCateList(cid).then(data => {
      //   console.log(cid)
      //   console.log(data);

      // });
      this.currentIndex = index;
      bus.$emit("getCid", cid);
      // console.log(typeof index)
      // console.log(101+ index)
      // event.target.parentNode.parentNode.scrollTo(0);
      // // event.target.offsetTop = 96;
      // document.getElementsByClassName('wrapper')[0].scrollTop = '0px';
      // // event.target.parentNode.parentNode.scrollTop = 96;
      // console.log(event.target);
      // console.log(event.target.parentNode.parentNode);
    }
  },
  created() {
    getCateList().then(data => {
      // console.log(data.result)
      this.cateList = data.result;
      this.$nextTick(() => {
        new BScroll(".wrapper");
      });
    });
  }
};
</script>
<style lang="less" scoped>
.l-content {
  height: 100%;
  ul {
    color: #333;
    li {
      width: 158px;
      height: 96px;
      text-align: center;
      line-height: 96px;
      font-size: 30px;
      background: #f0f0f0;
      position: relative;
      &::after {
        content: "";
        width: 100px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 29px;
        background: #dddddd;
      }
    }
    .on {
      // height: 96px;
      // width: 4px;
      background: #ffffff;
      color: #f20c59;
      &::after {
        content: "";
        width: 6px;
        height: 100px;
        position: absolute;
        left: 0;
        background: #f20c59;
      }
    }
  }
}
</style>
