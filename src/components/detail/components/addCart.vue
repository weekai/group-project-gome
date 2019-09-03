<template>
  <div class="add">
    <div class="left">
      <div class="shops">
        <img src="@/assets/images/shop.png" />
        <p>店铺</p>
      </div>
      <div class="collect">
        <img src="@/assets/images/collect.png" />
        <p>收藏</p>
      </div>
      <div class="car" @click="goCart">
        <img src="@/assets/images/cart.png" />
        <p>购物车</p>
      </div>
    </div>
    <div class="center" @click="addCart">加入购物车</div>
    <div class="right">立即购买</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { addCart } from "@/api/index.js";

export default {
  methods: {
    addCart() {
      let good = {
        id: new Date().valueOf().toString(),
        isSelect: false,
        name: "笔记本",
        msg:
          "联想(Lenovo)拯救者Y7000英特尔酷睿i5 15.6英寸高色域游戏笔记本电脑(i5-8300H 8G 512G GTX1050Ti72%NTSC)",
        img: "https://gfs17.gomein.net.cn/T1CfCsBsVv1RCvBVdK_250.jpg?v=1",
        price: "5799",
        count: 1
      };
      if (localStorage.getItem("isLogin") == null) {
        this.$router.push("/profiles");
        return;
      }
      addCart(good).then(ret => {
        console.log(ret);
        if (ret.code == 0) {
          Toast({
            message: "已成功加入购物车！",
            position: "middle",
            duration: 2000,
            className: "myToast"
          });
        } else {
          Toast({
            message: "加入购物车失败，请重试！",
            position: "middle",
            duration: 2000,
            className: "myToast"
          });
        }
      });
    },
    goCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style lang="less">
.myToast {
  .mint-toast-text {
    padding: 40px 0;
    display: block;
    line-height: 50px;
    font-size: 32px;
    width: 240px !important;
    height: 60px !important;
  }
}

.add {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  .left {
    width: 44%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      text-align: center;

      img {
        // transform: scale(1.3);
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
      }
      p {
        font-size: 24px;
        color: #333333;
      }
    }
  }
  .center {
    line-height: 120px;
    text-align: center;
    width: 28%;
    font-size: 30px;
    color: #fff;
    background: linear-gradient(to right, #fac905 0, #ff9500 100%);
  }
  .right {
    color: #fff;
    width: 28%;
    line-height: 120px;
    text-align: center;
    font-size: 30px;
    background: linear-gradient(to right, #fa1e8c 0, #fc1e56 100%);
  }
}
</style>
