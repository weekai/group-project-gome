<template>
  <div class="content">
    <ul class="contentul">
      <li class="contentli" v-for="(item,index) in List" :key="index">
        <a href="#/detail">
          <div class="eveli">
            <img :src="item.img" />
            <div class="liright">
              <p>
                <i>自营</i>
                {{item.title}}
              </p>
              <!-- <h3>{{item.feature}}</h3> -->

              <ul>
                <li>
                  <h4>{{item.fuselage}}</h4>
                  <h5>{{item.fuselagename}}</h5>
                </li>
                <li>
                  <h4>{{item.operation}}</h4>
                  <h5>{{item.operationname}}</h5>
                </li>
                <li>
                  <h4>{{item.screen}}</h4>
                  <h5>{{item.screenname}}</h5>
                </li>
              </ul>
              <div class="money">
                <h1>
                  ￥
                  <b>{{item.price}}</b>
                </h1>
                <span v-for="(i,ind) in item.activity" :key="ind">{{i}}</span>
              </div>

              <h3>{{item.comment}}人评论</h3>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { gitGoodList } from "@/api/index.js";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      list1: [],
       list2: [],
    };
  },
  mounted() {},
  created() {
    gitGoodList101().then(data => {
      this.list1 = data.result;
      this.$nextTick(() => {
        new BScroll(".content");
      });
    });
    gitGoodList102().then(data => {
      this.list2 = data.result;
      this.$nextTick(() => {
        new BScroll(".content");
      });
    });
  }
};
</script>
<style lang="less" scoped>
@w: 100%;
@h: calc(100%  -  180px) ;
.content {
  width: @w;
  height: @h;
  .contentul {
    width: @w;
    height: auto;
    .contentli {
      width: @w;
      height: 255px;
      .eveli {
        width: @w;
        height: @h;
        position: relative;
        a{
          display: block;
        }
        img {
          width: 250px;
          position: absolute;
          left: 0;
          top: 0;
        }
        .liright {
          width: calc(100% - 280px);
          position: absolute;
          left: 260px;
          top: 0;
          color: #333;
          margin: 10px 0;
          p {
            font-size: 28px;
            line-height: 34px;
            overflow: hidden; //设置溢出隐藏
            display: -webkit-box; //兼容
            -webkit-line-clamp: 2; //显示行数
            white-space: wrap; //可换行
            text-overflow: ellipsis; //显示为省略号
            -webkit-box-orient: vertical;
            i {
              color: #f76495;
              border: 1px solid #f76495;
              //   padding: 2px;
              font-size: 26px;
            }
          }
          ul {
            display: flex;
            width: 500px;
            justify-content: left;
            margin: 10px 0;
            li {
              //   flex: 1;
              width: 120px;
              height: 50px;
              text-align: center;
              margin: 0 10px;
              position: relative;
              h4 {
                overflow: hidden; /*内容超出后隐藏*/
                white-space: nowrap; //让内容只显示为一行
                text-overflow: ellipsis; //内容超出后显示为省略号
              }
              h5 {
                font-size: 18px;
              }
              &:not(:last-child)::after {
                content: "";
                width: 1px;
                height: 40px;
                background: rgb(158, 157, 157);
                position: absolute;
                right: -10px;
                top: 10px;
              }
            }
          }
          .money {
            display: flex;
            line-height: 26px;
            color: #f20c59;
            align-items: center;
            margin: 10px 0;
            h1 {
              font-size: 26px;
              b {
                font-size: 32px;
              }
            }
            span {
              font-size: 20px;
              border: 1px solid #f76495;
              margin: 0 10px;
              // padding: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
