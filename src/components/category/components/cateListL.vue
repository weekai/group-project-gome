<template>
  <!-- 左边 -->
  <div class="l-content wrapper">
    <ul>
      <li
        v-for="(item,index) in cateList"
        :key="index"
        :class="currentIndex == index? 'on':'' "
        @click="changeCate(index)"
        :cid="item.id"
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
      this.currentIndex = index;
      // console.log(event.target.getAttribute('cid'))
      let cid = event.target.getAttribute('cid');
      bus.$emit("getCid", cid);
    }
  },
  created() {
    getCateList().then(data => {
      this.cateList = data.result;
      this.$nextTick(() => {
        new BScroll(".wrapper", {
          click: true,
          bounce: false,
          bounceTime: 200
        });
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
      font-size: 26px;
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
