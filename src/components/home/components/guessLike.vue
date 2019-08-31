<template>
  <div class="guessLike">
    <img class="t-img" src="https://gfs10.gomein.net.cn/wireless/T1Go_jBjD_1RCvBVdK_1065_129.png" alt="">
    <div class="likeGood">
      <div class="likes" v-for="(item,index) in likeList" :key="index">
        <img :src="item.iurl" />
        <p>
          <i>自营</i>
          {{item.pn}}
        </p>
        <em>
          ￥{{item.price}}
          <a href="#">看相似</a>
        </em>
        <!-- <em class="gprice">{{item.gprice}}</em> -->
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>
<script>
  import {getGuessLike} from '@/api/index.js'
  export default {
    created() {
      getGuessLike().then((data) => {
        this.likeList = data.result.data
        // console.log(this.likeList)

      })
    },
    data() {
      return {
        likeList: []
      }
    }
  }
</script>
<style lang="less" scoped>
  .guessLike {
    width: 93%;
    margin: 0 auto;

    .t-img {
      width: 100%;
    }

    .likeGood {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .likes {
        overflow: hidden;
        display: inline-block;
        margin-bottom: 25px;
        width: 49.3%;
        min-height: 570px;
        background: #fff;
        border-radius: 30px;
        float: left;

        img {
          width: 100%;
        }

        p {
          margin: 10px 0 10px 0;
          font-size: 24px;
          width: 346px;
          overflow: hidden; //溢出隐藏
          display: -webkit-box; //伸缩盒子
          -webkit-line-clamp: 2; //保留两行
          white-space: wrap; //允许换行
          text-overflow: ellipsis; //省略号
          -webkit-box-orient: vertical; //垂直排列
          line-height: 40px;
          padding: 0 0 0 20px;
          box-sizing: border-box;

          i {
            display: inline-block;
            font-size: 20px;
            width: 60px;
            height: 36px;
            border: 1px solid #fd0175;
            line-height: 36px;
            border-radius: 10px;
            text-align: center;
            color: #fd0175;
            margin-right: 10px;
          }
        }

        em {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          box-sizing: border-box;
          width: 100%;
          height: 42px;
          font-size: 32px;
          color: #f20c59;

          a {
            float: right;
            margin-right: 30px;
            display: inline-block;
            color: #999999;
            width: 100px;
            height: 44px;
            border: 1px solid #999999;
            font-size: 20px;
            line-height: 44px;
            text-align: center;
            border-radius: 22px;
          }
        }
      }
    }

    .empty {
      width: 100%;
      height: 120px;
    }
  }
</style>
