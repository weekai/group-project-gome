<template>
  <div class="secKill">
    <div class="killed">
      <img class="k-img" src="//gfs10.gomein.net.cn/wireless/T1fyDjBjZ_1RCvBVdK_120_28.png" />
      <div class="time">
        <span>{{leftTime.hours}}</span>:
        <span>{{leftTime.minutes}}</span>:
        <span>{{leftTime.seconds}}</span>
      </div>
      <div class="killedGood">
        <ul>
          <li v-for="(item,index) in seckill1" :key="index">
            <img :src="item.img" />
            <p>￥{{item.price}}</p>
            <p>￥{{item.oldPrice}}</p>
          </li>
        </ul>
      </div>

    </div>
    <div class="anotherGoods" v-for="(item,index) in seckill2" :key="index">
      <p>{{item.title}}</p>
      <p>{{item.tag}}</p>
      <img :src="item.img" />
    </div>

  </div>
</template>

<script>
  import {
    getSecKill
  } from "@/api/index.js"
  export default {
    data() {
      return {
        seckill1: [],
        seckill2: [],
        leftTime: {
          hours: '',
          minutes: '',
          seconds: ''
        },
        timer: null,
      }
    },
    created() {
      getSecKill().then((data) => {
        this.seckill1 = data.result.data1
        this.seckill2 = data.result.data2
        // console.log(this.seckill1, this.seckill2)
      })

      this.timer = setInterval(() => {
        this.leftTime = this.TimeDown('2019-10-30 22:40')
      }, 1000)
    },
    methods: {
      TimeDown(endDateStr) {

        var endDate = new Date(endDateStr)
        // 当前时间
        var nowDate = new Date()
        // 相差的总秒数
        var totalSeconds = parseInt((endDate - nowDate) / 1000)
        // 天数
        // var days = Math.floor(totalSeconds / (60 * 60 * 24))
        // 取模（余数）
        var modulo = totalSeconds % (60 * 60 * 24)
        // 小时数
        var hours = Math.floor(modulo / (60 * 60))
        modulo = modulo % (60 * 60)
        // 分钟
        var minutes = Math.floor(modulo / 60)
        // 秒
        var seconds = modulo % 60

        if (hours < 10) {
          hours = '0' + hours
        }

        if (minutes < 10) {
          minutes = '0' + minutes
        }

        if (seconds < 10) {
          seconds = '0' + seconds
        }
        return {
          hours,
          minutes,
          seconds
        }
      }
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="less" scoped>
  .secKill {
    width: 93.3%;
    height: 545px;
    margin-bottom: 120px;
    margin: 3px auto;

    .killed {
      background: #fff;
      float: left;
      width: 49.5%;
      height: 277.76px;
      padding: 20px 10px;
      box-sizing: border-box;
      margin-right:3px;
      .k-img {
        width: 148.78px;
        height: 34.68px;
        margin-left: 10px;
      }

      .time {
        margin-left: 15px;
        width: 120px;
        height: 30px;
        font-size: 24px;
        line-height: 35px;
        text-align: center;
        display: inline-block;
        border-radius: 10px;
        border: 1px solid #f20c59;
        color: #f20c59;
      }

      .killedGood {
        display: inline-block;
        width:100%;

        ul {
          margin-top: 20px;
          text-align: center;

          li {
            float: left;
            width: 33%;
            height: 178.5px;

            img {
              width: 100px;
              height: 108px;
            }

            p:nth-child(2) {
              margin-top: 20px;
              font-size: 24px;
              font-weight: 600;

            }

            p:nth-child(3) {
              margin-top: 10px;
              font-size: 20px;
              text-decoration: line-through;
              color: #919599;
            }
          }
        }
      }

    }

    .anotherGoods {
      overflow:hidden;
      background: #fff;
      height: 277.76px;
      float: left;
      width: 49.5%;
      display: inline-block;
      margin-bottom:2px;

      p:nth-child(1) {
        margin-top: 10px;
        color: #48a6ff;
        font-size: 32px;
        height: 40px;
        line-height: 40px;
        padding:0 30px;
        // border-right: 3px solid #fff;
      }
      p:nth-child(2) {
        margin-top: 5px;
        color: #666666;
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        padding: 0 30px;
      }

      img {
        width: 350px;
        height: 142px;
        margin-top: 30px;
      }
    }
    .anotherGoods:nth-child(3){
      margin-right: 3px;
    }
  }
</style>
