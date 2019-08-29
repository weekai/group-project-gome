<template>
  <div class="headline">
    <div class="title">
      <img src="//gfs13.gomein.net.cn/wireless/T1yEhbB7J_1RCvBVdK_120_28.png" />
    </div>
    <div class="content">
        <div class="scroll">
          <ul>
            <li v-for="(item,index) in headLine" :key="index">
              <span>{{item.tag}}</span>
              <span>{{item.content}}</span>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
  import {
    getHeadline
  } from '@/api/index.js'
  export default {
    created() {
      getHeadline().then((data) => {
        this.headLine = data.result.data[1].headlines
      })
    },
    data() {
      return {
        headLine: []
      }
    },
    mounted() {
      var scroll = document.querySelector('.scroll')
      // console.log(scroll)

    },
    methods: {

    }


  }
</script>

<style lang="less" scoped>
  .headline {
    display: flex;
    background: #FFFFFF;
    height: 102px;
    width: 93%;
    margin: 0 auto;
    overflow: hidden;
    border-radius:20px 20px 0 0;

    .title {
      display: flex;
      margin: auto 20px;
      width: 190px;
      height: 72px;
      text-align: center;
      padding: 18px 0px;
      box-sizing: border-box;
      position: relative;

      &::after {
        content: "";
        background: #CACACA;
        width: 2px;
        height: 36px;
        position: absolute;
        top: 18px;
        left: 190px;
      }

      img {
        width: 153px;
        height: 36px;
      }
    }

    .content {
      width: 468px;
      height: 102px;


      .scroll {
        ul {
          li {
            width: 100%;
            height: 102px;
            padding: 31px 20px;

            span:first-child {
              display: inline-block;
              // width:110px;
              height: 40px;
              line-height: 40px;
              color: red;
              background: #ffdce7;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
</style>
