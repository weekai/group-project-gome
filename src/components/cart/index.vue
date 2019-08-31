<template>

  <div class="app-cont">
    <!-- 头部 -->
    <Top></Top>


    <div class="goods-list" v-if="flag">

      <!-- GOME -->
      <div class="gome">
        <span @click="selectMego" :class="{'notActiveMego':!isMego}"></span>
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
         <!-- <div class="mt-actionsheet"  >
                 <p>优惠券</p>
                  <img src="@/assets/images/coupon.png"/>
                  <p>暂无可领取优惠券</p>
          </div> -->

        </div>

      </div>

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item,index) in cartList" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <span class="select" @click="selectOne;item.isSelect=!item.isSelect" :class="{'cart-notActive':!item.isSelect}"></span>
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
                <a href="#">删除</a>
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
          <span class="money">￥100</span>
        </div>
        <div class="payit">
          去结算（）
        </div>
      </div>

    </div>

    <div class="empty" v-else>
      <img src="//app.gomein.net.cn/plus/images/shop_cart/bj_baobei.png" />
      <p> 购物车还是空的，快去挑选商品吧</p>
      <a href="#/home">去逛逛</a>
    </div>


    <GuessLike></GuessLike>


    <!-- 领劵 -->
    <!-- <div class="coupon">
      <div class="bg"></div>
      <div class="bottom">
        <div class="title-box">
          <p class="title">优惠券</p>
          <span class="close-btn"></span>
        </div>

        <div class="scoller">
          <div class="scoller-container">
            <div class="moudel">
              <div class="null">
                <img src="data:image/png;base64,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" />
                <p class="desc">暂无可领取优惠券</p>
              </div>
            </div>

            <div class="modul-collect">
              <div class="name">
                已领取优惠券
                <span>(以下是您账户里已领取的优惠券)</span>
              </div>
              <div class="collect-item">
                <div class="coupon">
                  <div class="amount">
                    <p class="num">
                      <span>￥</span>
                      <strong>5</strong>
                    </p>
                    <p class="desc">满10可用</p>
                    <div class="sc">
                      <span class="tag">蓝券</span>
                    </div>
                  </div>

                  <div class="info-box">
                    <p class="title">数码新人礼包券</p>
                    <p class="date">2019.08.26 - 2019.08.29</p>
                    <span class="got"></span>
                  </div>
                </div>

                <div class="cd-box">
                  <p class="info">已选0件，小计0.00元，还差10.00元</p>
                </div>

                <div class="scoller-list">
                  <div class="scoller-modu">
                    <div class="good-times">
                      <div class="img-box">
                        <div class="option-box">
                          <span class="option"></span>
                        </div>
                        <div class="ui-mg">
                          <img src="//gfs17.gomein.net.cn/T1afKsBCJT1RCvBVdK_80.jpg?v=1" />
                        </div>
                      </div>
                      <strong class="price">¥199</strong>
                      <span data-v-96c9c338 class="num">×1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="btn-bot">确定</a>
      </div>
    </div>
  -->


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
        isMego:false,
        isShow: false,
      };
    },
    methods: {
      selectOne() {
        this.isAll = this.cartList.every((item) => {
          console.log(item.isSelect)
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
        if(this.cartList[index].count>1){
          this.cartList[index].count -= 1
          }
      }
    }
  };
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
        padding-top: 40px;
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
          .mt-actionsheet{
            width: 100%;
            height: 300px;
          }
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

  // 领劵
  .coupon {
    z-index: 900 !important;
    position: fixed;
    background-color: transparent;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: none;

    .bg {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1198;
    }

    .bottom {
      height: 80%;
      bottom: 0;
      width: 100%;
      // display: flex;
      position: absolute;
      z-index: 1200;
      background-color: #fff;

      .title-box {
        width: 100%;
        height: 100px;
        position: relative;
        padding: 34px 0;

        .title {
          text-align: center;
          line-height: 1;
          font-size: 32px;
          font-weight: 500;
          color: #333;
        }

        .close-btn {
          position: absolute;
          top: 0;
          right: 0;
          width: 45px;
          height: 45px;
          padding: 30px;
          box-sizing: content-box;
          background: url("../../assets/images/chahao.png") 50% 50% no-repeat;
          background-size: 30px 30px;
        }
      }

      .scoller {
        width: 100%;
        display: block;
        background: #fff;
        padding-bottom: 180px;
        margin-bottom: 180px;
        position: relative;
        overflow: hidden;

        .scoller-container {
          width: 100%;
          height: 100%;

          .moudel {
            margin-bottom: 20px;
            padding: 0 20px 30px;
            background: #fff;

            .null {
              text-align: center;

              img {
                width: 200px;
                height: 200px;
                margin: 20px auto 10px;
              }
            }
          }

          .modul-collect {
            border-top: 20px solid #f2f2f2;
            margin-bottom: 90px;
            padding: 0 20px 30px;
            background: #fff;

            .name {
              font-size: 30px;
              font-weight: 700;
              padding: 30px 0 20px;

              span {
                display: inline-block;
                font-size: 24px;
                color: #999;
                font-weight: 400;
                margin-left: 16px;
              }
            }

            .collect-item {
              width: 100%;
              margin-bottom: 0;
              box-sizing: border-box;

              .coupon {
                display: flex;
                height: 215px;
                border-radius: 12px;
                box-shadow: 0 4px 12px 8px rgba(0, 0, 0, 0.04);
                margin: 20px 0;
                position: relative;

                .amount {
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  display: flex;
                  flex-direction: column;
                  width: 231px;
                  height: 212px;
                  background-repeat: no-repeat !important;
                  background-size: 100% 100% !important;
                  background-image: url("../../assets/images/juan.png") !important;
                  border-top-left-radius: 4px;
                  border-bottom-left-radius: 4px;
                  position: relative;

                  .num {
                    color: #fff;
                    margin-bottom: 10px;
                    text-align: center;

                    span {
                      display: inline-block;
                      margin-top: 16px;
                      margin-right: 10px;
                      font-weight: 700;
                    }

                    strong {
                      font-size: 72px;
                      font-weight: 700;
                    }
                  }

                  .desc {
                    color: #fff;
                    font-size: 28px;
                    padding: 0 20px;
                    margin-bottom: 15px;
                    text-align: center;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }

                  .sc {
                    box-sizing: border-box;
                    text-align: center;

                    .tag {
                      background: #ffe0ea;
                      color: #f20c59;
                      font-size: 22px;
                      padding: 4px 14px;
                      border-radius: 40px;
                      font-weight: 700;
                    }
                  }
                }

                .info-box {
                  position: relative;
                  display: block;
                  -webkit-box-flex: 1;
                  flex: 1;
                  -webkit-box-align: stretch;
                  box-sizing: border-box;
                  padding: 20px 24px;
                  font-size: 28px;

                  .title {
                    color: #333;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 40px;
                  }

                  .date {
                    position: absolute;
                    left: 24px;
                    bottom: 36px;
                    color: #5a6066;
                    font-size: 22px;
                  }

                  .got {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 106px;
                    height: 106px;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-image: url("../../assets/images/zhang.png");
                  }
                }
              }

              .cd-box {
                -webkit-box-align: center;
                display: flex;
                padding-top: 15px;
                font-size: 24px;
                line-height: 50px;

                .info {
                  display: block;
                  flex: 1;
                  align-items: stretch;
                  box-sizing: border-box;
                  color: #262c32;
                }
              }

              .scoller-list {
                margin-top: 35px;

                .scoller-modu {
                  position: relative;
                  height: 100%;

                  .good-times {
                    width: 150px;
                    margin-right: 24px;
                    font-size: 24px;
                    text-align: center;

                    .img-box {
                      position: relative;
                      width: 150px;
                      height: 150px;
                      overflow: hidden;
                      margin-bottom: 22px;

                      .option-box {
                        position: absolute;
                        top: 8px;
                        left: 8px;
                        z-index: 9;

                        .option {
                          display: inline-block;
                          width: 38px;
                          height: 38px;
                          margin-top: -5px;
                          background: url("../../assets/images/yuan.png");
                          background-repeat: no-repeat;
                          background-size: 100% 100%;
                        }
                      }

                      .ui-mg {
                        img {
                          display: block;
                          width: 100%;
                        }
                      }
                    }

                    .price {
                      color: #333;
                      margin-bottom: 10px;
                      font-style: normal;
                      font-weight: 400;
                    }

                    .num {
                      display: block;
                      color: #999;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .btn-bot {
        font-size: 30px;
        line-height: 90px;
        min-width: 210px;
        padding: 14px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        display: block;
        border-radius: 0;
        text-align: center;
        background: linear-gradient(90deg, #fa1e8c, #fc1e56);
        color: #fff;
      }
    }
  }
</style>
