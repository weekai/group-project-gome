<template>
  <div class="r-content wrapper1">
    <ul>
      <li class="bli" v-for="(item , index) in  bagList " :key="index">
        <!-- <h3>{{bagList[index].data[index].title}}</h3> -->
        <h3>{{item.title}}</h3>
        <ul class="eveul">
          <li class="eveli" v-for="(i,index) in item.data" :key="index">
            <a :href="i.hf">
              <img :src="i.img" />
              <span>{{i.name}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCateList, getCateListRight } from "@/api/index.js";
import BScroll from "@better-scroll/core";
import bus from "./bus.js";
export default {
  data() {
    return {
      isOn: 0,
      bagList: []
      // minList: []
    };
  },
  mounted() {
    bus.$on("getCid", cid => {
      getCateListRight(cid).then(data => {
        console.log(data);
        this.bagList = data;
      });
    });
  },
  methods: {},
  created() {
    getCateListRight(101).then(data => {
      // console.log(data);
      this.bagList = data;
      this.$nextTick(() => {
        new BScroll(".wrapper1", {
          click: true,
          bounce: false,
          bounceTime: 300
        });
      });
    });
  }
};
</script>
<style lang="less" scoped>
.r-content {
  height: 100%;
  width: 100%;
  ul {
    height: auto;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-right: 10px;
    .bli {
      width: 100%;
      height: auto;
      // background: #f8f8f8;

      h3 {
        line-height: 40px;
        color: #999;
        margin-left: 20px;
      }
      .eveul {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
      }
      .eveli {
        width: 156px;
        height: 214px;
        padding: 10px;
        margin: 10px 0 10px 15px;
        background: #f8f8f8;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 156px;
        }
        span {
          display: block;
          width: 100%;
          height: 50px;
          text-align: center;
          line-height: 60px;
          color: #666;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
