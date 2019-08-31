<template>
  <div class="item-wrap">
    <div v-for="(item, index) in guessLikeJson" :key="index" class="guess-like-item">
      <div class="item-pic">
        <!-- <slot name="item-pic"></slot> -->
        <img slot="item-pic" v-lazy="item.iurl" alt />
      </div>
      <div class="item-title">
        <!-- <slot name="item-title"></slot> -->
        <p slot="item-title">{{item.pn}}</p>
      </div>
      <div class="item-price">
        <!-- <slot name="item-ptice"></slot> -->
        <p slot="item-ptice">{{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfileGuessLike } from "../../../api/index.js";

export default {
  data() {
    return {
      guessLikeJson: []
    };
  },
  mounted() {
    getProfileGuessLike().then(ret => {
      //   console.log(ret.result.data);
      this.guessLikeJson = ret.result.data;
    });
  }
};
</script>

<style lang="less" scoped>
.item-wrap {
  display: flex;
  padding: 0 5px 0 5px;
  flex-wrap: wrap;
  justify-content: space-around;

  .guess-like-item {
    float: left;
    width: 49%;
    height: 518px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 10px;

    .item-pic {
      margin-bottom: 24px;
      position: relative;
      img {
        width: 320px;
        height: 320px;
        // 懒加载背景
      }
      img[lazy=loading] {
        width: 100px;
        background: url("../../../assets/images/loading.gif") no-repeat center;
        background-size: 100px;    
        margin: auto;
      }
    }
    .item-title {
      margin-bottom: 16px;
      width: 320px;
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 24px;
        line-height: 30px;
      }
    }
    .item-price {
      width: 320px;
      p {
        font-size: 32px;
        color: #ff5c5c;
        font-style: italic;
        &::before {
          content: "￥";
          font-style: italic;
        }
      }
    }
  }
}
</style>

      