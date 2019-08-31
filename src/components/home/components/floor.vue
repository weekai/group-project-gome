<template>
  <div class="floors">
    <div class="floor" v-for="(item,index) in floor" :key="index">
      <img class="f-img" :src="item.img" />
      <div class="goods" v-for="(item1,index) in item.data" :key="index">
        <p class="title">{{item1.title}}</p>
        <p class="tag">{{item1.tag}}</p>
        <img class="g-img" :src="item1.img" />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getFloor
  } from "@/api/index.js"
  export default {
    data() {
      return {
        floor: [],
      }
    },
    created() {
      getFloor().then((data) => {
        console.log(data)
        this.floor = data.result
      })
    }
  }
</script>

<style lang="less" scoped>
  .floors {
    .floor {
      border-radius: 25px;
      overflow: hidden;
      width: 94%;
      margin: 0 auto;

      .f-img {
        border-radius: 25px 25px 0 0;
        margin-top: 30px;
        width: 99.7%;
        margin-bottom: 3px;
      }

      .goods {
        margin-right: 1px;
        margin-top: 1px;
        float: left;
        background: #fff;
        width: 175px;
        height: 264px;
        padding-top: 20px;
        box-sizing: border-box;

        .title {
          width: 174px;
          height: 50px;
          font-size: 32px;
          line-height: 50px;
          padding-left: 20px;
          box-sizing: border-box;
        }

        .tag {
          width: 174px;
          height: 50px;
          font-size: 24px;
          line-height: 50px;
          color: #666666;
          padding-left: 20px;
          box-sizing: border-box;
        }

        .g-img {
          width: 174px;
          height: 141.4px;
        }
      }

      &:nth-child(3) {
        .goods:nth-child(2) {
          margin-right: 1px;
          margin-top: 1px;
          float: left;
          background: #fff;
          width: 49.7%;
          height: 264px;
          padding-top: 15px;
          box-sizing: border-box;

          .title {
            width: 300px;
            height: 50px;
            font-size: 32px;
            line-height: 50px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .tag {
            height: 50px;
            font-size: 24px;
            line-height: 50px;
            color: #666666;
            padding-left: 20px;
            box-sizing: border-box;
          }

          .g-img {
            width: 100%;
          }
        }
      }

      &:nth-child(2),
      &:nth-child(4),
      &:nth-child(5) {
        .goods {
          margin-right: 1px;
          margin-top: 1px;
          float: left;
          background: #fff;
          width: 49.7%;
          height: 264px;
          padding-top: 15px;
          box-sizing: border-box;

          .title {
            width: 300px;
            height: 50px;
            font-size: 32px;
            line-height: 50px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .tag {
            height: 50px;
            font-size: 24px;
            line-height: 50px;
            color: #666666;
            padding-left: 20px;
            box-sizing: border-box;
          }

          .g-img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
