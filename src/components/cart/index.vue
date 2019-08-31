<template>

  <div class="app-cont">
    <!-- 头部 -->
    <Top></Top>
    <div class="goods-list" v-if="flag">

      <!-- GOME -->
      <div class="gome">
        <div class="name-box">
          <img src="//gfs11.gomein.net.cn/T18GDvB_hg1RCvBVdK.png" />
          <h2>美国自营</h2>
        </div>
        <div class="act">
          <a href="https://help.m.gome.com.cn/freight.html#/" class="fee-info">
            <img src="../../assets/images/cart1.png" />
            <h2>运费说明</h2>
          </a>
          <em class="card" @click="sheetVisible=!sheetVisible">领劵</em>
        </div>
      </div>
      <div class="mt-actionsheet" v-show="sheetVisible">

        <div class="getCard">领券</div>
        <i @click="sheetVisible=!sheetVisible">x</i>
        <p class="title">优惠券</p>
        <img src="@/assets/images/coupon.png" />
        <p class="content">暂无可领取优惠券</p>
      </div>

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item,index) in cartList" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <span class="select" @click="selectOne(index)" :class="{'cart-notActive':!item.isSelect}"></span>
            <img :src="item.img" />
            <div class="info">
              <p>{{item.msg}}</p>
              <div class="price-to">
                <span class="price">￥{{item.price}}</span>
                <div class="count-wrap">
                  <div class="count-box">
                    <span class="addspan" @click="sub(index)">-</span>
                    <input type="text" pattern="[0-9]" data-value="1" data-minnum="1" data-maxnum="99" class="countnum"
                      :value="item.count" />
                    <span class="subspan" @click="add(index)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="butons">
            <div class="lefnon"></div>
            <div class="regbtb">
              <span>
                <a href="#">移入收藏</a>
              </span>
              <span>|</span>
              <span>
                <a href="#" @click="delect(index)">删除</a>
              </span>
            </div>
          </div>

        </div>
      </div>
      <!-- 结算区域 -->
      <div class="payfor">
        <div class="selAll">
          <span @click="selectAll" :class="{'notActive':!isAll}"></span>
          <label>全选</label>
        </div>
        <div class="total">
          <span>合计：</span>
          <span class="money">￥{{total()}}</span>
        </div>
        <div class="payit">
          去结算（{{totalNumber()}}）
        </div>
      </div>
    </div>

    <div class="empty" v-else>
      <img src="//app.gomein.net.cn/plus/images/shop_cart/bj_baobei.png" />
      <p> 购物车还是空的，快去挑选商品吧</p>
      <a href="#/home">去逛逛</a>
    </div>
    <GuessLike></GuessLike>
  </div>
</template>
<script>
  import {
    getGuessLike,
    getCart
  } from "@/api/index.js";
  import Top from './components/top.vue'
  import GuessLike from './components/guessLike.vue'
  export default {
    components: {
      Top,
      GuessLike
    },
    created() {
      getGuessLike().then(data => {
        this.likeList = data.result.data;
      });

      getCart().then((data) => {
        this.cartList = data.result;
        if (this.cartList.length !== 0) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      });
    },
    data() {
      return {
        likeList: [],
        cartList: [],
        flag: false,
        isAll: false,
        isShow: false,
        sheetVisible: false
      };
    },
    methods: {
      selectOne(index) {
        console.log(this.cartList[index])
        this.cartList[index].isSelect = !this.cartList[index].isSelect
        console.log(this.cartList[index].isSelect)
        this.isAll = this.cartList.every((item) => {
          return item.isSelect == true;
        })
      },
      selectAll() {
        this.isAll = !this.isAll
        this.cartList.forEach((item) => {
          item.isSelect = this.isAll;
        })
      },
      selectMego() {
        this.isMego = !this.isMego
      },
      add(index) {
        var inp = document.querySelectorAll("input");
        this.cartList[index].count += 1
      },
      sub(index) {
        var inp = document.querySelectorAll("input");
        if (this.cartList[index].count > 1) {
          this.cartList[index].count -= 1
        }
      },
      delect(ind) {
        this.cartList.splice(ind, 1)
        if (this.cartList.length == 0) {
          this.flag = !this.flag
        }
        console.log(this.cartList)

// 
//         delectCart(this.cartList)
//           .then(function(response) {
//             console.log(response);
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
      },
      total() {
        return this.cartList.reduce((total, item) => {
          if (item.isSelect) {
            total += parseFloat((item.price * item.count))
            return total;
          } else {
            return total;
          }
        }, 0)
      },
      totalNumber() {
        return this.cartList.reduce((number, item) => {
          if (item.isSelect) {
            number += item.count
            return number;
          } else {
            return number;
          }
        }, 0)
      }
    }
  }
</script>
<style lang="less" scoped>
  .app-cont {
    width: 100%;
    position: relative;

    .goods-list {
      padding-top: 180px;
      background: #fff;
      min-height: 0px;
      padding-bottom: 20px;

      .mui-card {
        box-shadow: 0.02rem 0.02rem 0.2rem 0.05rem rgba(0, 0, 0, 0.1);
        border-radius: 40px;
        background: #fff;
        width: 93%;
        margin: 30px auto;
        padding: 0 20px;
        box-sizing: border-box;

        .mui-card-content {
          height: 354px;

          .mui-card-content-inner {
            display: flex;
            align-content: center;
            flex: 1;
            width: 750px;
            padding: 50px 25px 10px 10px;

            .select {
              margin: 60px 20px 0 0;
              display: inline-block;
              width: 38px;
              height: 38px;
              background: url(../../assets/images/active.png);
              background-size: 38px 38px;
            }

            .cart-notActive {
              margin: 60px 20px 0 0;
              display: inline-block;
              width: 38px;
              height: 38px;
              background: url(../../assets/images/notActive.png);
              background-size: 38px 38px;
            }

            img {
              width: 140px;
              height: 140px;
              margin-right: 18px;
            }

            .info {
              display: block;
              flex: 1;
              align-items: stretch;
              box-sizing: border-box;
              margin-bottom: 30px;

              p {
                display: block;
                width: 380px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                font-size: 26px;
                text-overflow: ellipsis;
                line-height: 40px;
                overflow: hidden;
              }

              .price-to {
                display: flex;
                margin-top: 45px;

                .price {
                  width: 240px;
                  color: red;
                  font-weight: bold;
                }

                .count-wrap {
                  display: flex;
                  width: 170px;
                  background: #fff;
                  border-radius: 5px;
                  font-size: 26px;

                  .count-box {
                    width: 170px;
                    background: #fff;
                    border-radius: 5px;
                    font-size: 26px;
                    display: flex;

                    .addspan {
                      width: 50px;
                      height: 40px;
                      line-height: 40px;
                      text-align: center;
                      background: #f3f5f7;
                      border-radius: 5px;
                      color: #b3b3b3;
                    }

                    .countnum {
                      width: 30px;
                      display: block;
                      flex: 1;
                      box-sizing: border-box;
                      text-align: center;
                    }

                    .subspan {
                      width: 50px;
                      height: 40px;
                      line-height: 40px;
                      text-align: center;
                      background: #f3f5f7;
                      border-radius: 5px;
                      color: #b3b3b3;
                    }
                  }
                }
              }
            }
          }

          .butons {
            height: 45px;
            display: block;
            display: flex;
            flex: 1;
            float: right;

            .lefnon {
              width: 150px;
              height: 32px;
              border-radius: 20px;
              font-size: 24px;
              color: #919599;
              line-height: 32px;
              text-align: center;
              margin-left: 20px;
            }

            .regbtb {
              display: flex;
              justify-content: space-between;
              width: 190px;
              margin-right: 20px;
            }

            a {
              color: #919599;
            }
          }
        }
      }

      // 国美
      .gome {
        background: #fff;
        padding-top: 30px;
        box-sizing: border-box;
        border-top: 2px solid #ddd;
        width: 100%;
        position: fixed;
        top: 100px;
        display: flex;
        justify-content: space-around;
        height: 80px;

        span {
          display: inline-block;
          width: 38px;
          height: 38px;
          background: url(../../assets/images/active.png);
          background-size: 38px 38px;

        }

        .notActiveMego {
          display: inline-block;
          width: 38px;
          height: 38px;
          background: url(../../assets/images/notActive.png);
          background-size: 38px 38px;

        }

        .name-box {
          width: 364px;
          height: 34px;
          display: inline-flex;

          img {
            width: 74px;
            height: 34px;
          }

          h2 {
            height: 28px;
            font-size: 28px;

          }

        }

        .act {
          display: flex;
          font-size: 26px;
          color: #333;

          a {
            display: flex;
            width: 170px;
            height: 30px;
            color: #333;

            img {
              width: 26px;
              height: 26px;
              margin-right: 10px;
            }

            h2 {
              height: 34px;
              font-size: 26px;
            }
          }

          .card {
            text-align: center;
            width: 100px;
            height: 26px;
            border-left: 1px solid #999;
            font-weight: 700;
            color: #f20c59;
          }


        }
      }

      .mt-actionsheet {
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1000px;
        background: #fff;
        z-index: 1000;

        i {
          display: block;
          height: 80px;
          text-align: right;
          padding-right: 35px;
          box-sizing: border-box;
          line-height: 80px;
          font-size: 40px;
        }

        .getCard {
          width: 100%;
          height: 80px;
          background: #fb1e6a;
          color: #fff;
          font-size: 32px;
          text-align: center;
          line-height: 80px;
          letter-spacing: 10px;
        }

        p.title {
          margin-top: 70px;
          height: 32px;
          font-size: 32px;
          text-align: center;
          line-height: 32px;
        }

        p.content {
          margin-top: 30px;
          height: 26px;
          font-size: 26px;
          text-align: center;
          line-height: 26px;
        }

        img {
          width: 200px;
          height: 200px;
          margin: 20px 0;
        }
      }

      .payfor {
        width: 100%;
        height: 100px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        background: #fff;
        display: flex;
        justify-content: space-between;

        .selAll {
          width: 30%;
          text-align: center;
          line-height: 100px;
          font-size: 30px;
          position: relative;

          span {
            position: absolute;
            top: 30px;
            left: 40px;
            display: inline-block;
            width: 38px;
            height: 38px;
            background: url(../../assets/images/active.png);
            background-size: 38px 38px;
          }

          .notActive {
            position: absolute;
            top: 30px;
            left: 40px;
            display: inline-block;
            background: url(../../assets/images/notActive.png);
            width: 38px;
            height: 38px;
            background-size: 38px 38px;
          }
        }

        .total {
          width: 30%;
          text-align: right;
          line-height: 100px;
          font-size: 28px;

          .money {
            font-size: 32px;
            font-weight: 600;
            color: #f20c59;
          }
        }

        .payit {
          width: 30%;
          text-align: center;
          line-height: 100px;
          font-size: 32px;
          color: #fff;
          background: linear-gradient(90deg, #fa1e8c, #fc1e56);

        }

      }
    }


    .empty {
      padding: 100px 0;
      box-sizing: border-box;
      margin-top: 110px;
      height: 672px;
      background: #fff;
      text-align: center;

      img {
        width: 340px;
        height: 340px;
      }

      p {
        height: 28px;
        font-size: 28px;
        color: #999999;
      }

      a {
        display: inline-block;
        width: 180px;
        height: 74px;
        background: linear-gradient(90deg, #fa1e8c, #fc1e56);
        border-radius: 37px;
        font-size: 28px;
        line-height: 74px;
        margin-top: 30px;
        color: #fff;
      }
    }
  }
</style>
