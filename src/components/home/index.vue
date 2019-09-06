<template>
<div ref="sElement">
  <div class="search_content" v-if="flag" >
    <div class="search_bar">
      <span @click="flag=!flag" >取消</span>
      <div class="center">
        <div class="search_item">商品</div>
        <input
          ref="input"
          v-model="inputVal"
          type="text"
          placeholder="手机套购0元得好彩礼"
          @keyup.enter="setHistory"
          @input="getVal"
          autofocus
        />
        <img src="//css.gomein.net.cn/plus/style/index/images/search_icon.png?v=2017092001" />
      </div>
    </div>
    <div class="hotSearch" ref="hot">
      <p>
        <img src="../../assets/images/fire.png" alt />
        热词推荐
      </p>
      <ul>
        <li v-for="(item,index) in hotList" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="searchList">
      <ul ref="list"></ul>
    </div>

    <div class="history" ref="history" v-if="isDelete">
      <ul>
        <li v-for="(item,index) in history" :key="index">{{item.content}}</li>
      </ul>
      <button @click="deleteH">清空历史记录</button>
    </div>
  </div>
  <div class="home" v-else >
    <!-- 搜索 -->
    <top-bar >
      <div slot="left" class="left">
        <img
          class="logo"
          src="//css.gomein.net.cn/plus/style/index/images/grass_logo.png?v=2017092001"
        />
      </div>
      <div slot="center" class="center">
        <div class="search" @click="flag=!flag">
          <i class="iconfont icon_search"></i>
          <input readonly type="text" placeholder="搜索商品" />
        </div>
      </div>

      <div slot="right" class="right">
        <router-link to="/cart" slot="left">
          <img src="../../assets/images/cart.png" alt />
        </router-link>
        <router-link tag="p" to slot="left">登录</router-link>
      </div>
    </top-bar>

    <!-- 轮播图 -->
    <Swiper ></Swiper>
    <!-- 分类 -->
    <Category></Category>
    <!-- banner1 -->
    <img class="b-img" src="//gfs13.gomein.net.cn/wireless/T1JTLXBgDT1RCvBVdK_1125_336.png" />
    <div class="b2-img">
      <ul>
        <li>
          <img src="//gfs11.gomein.net.cn/T1hkEXB5CT1RCvBVdK.gif" />
        </li>
        <li>
          <img src="//gfs11.gomein.net.cn/wireless/T199JXBXKT1RCvBVdK_533_363.jpg" />
        </li>
      </ul>
    </div>

    <!-- 国美头条 -->
    <Headline></Headline>

    <!-- 秒杀楼层 -->
    <Seckill></Seckill>

    <!-- banner2 -->
    <div class="b2-img">
      <ul>
        <li>
          <img src="//gfs6.gomein.net.cn/wireless/T1AnJXB4JT1RCvBVdK_350_182.jpg" />
        </li>
        <li>
          <img src="//gfs12.gomein.net.cn/wireless/T1He_XBgDT1RCvBVdK_350_182.jpg" />
        </li>
      </ul>
    </div>

    <!-- 特定楼层 -->
    <Floor></Floor>
    <!-- 猜你喜欢 -->
    <guess-like></guess-like>
    <!-- 去顶部 -->
    <totop  @click.native="backTop"></totop>
    <!-- 底部组件导航 -->
    <tab-bar></tab-bar>
  </div>
</div>
  
</template>
<script>
import axios from "axios";
import TopBar from "../common/topBar.vue";
import Swiper from "./components/swiper.vue";
import Category from "./components/category.vue";
import Headline from "./components/headline.vue";
import Seckill from "./components/secKill.vue";
import GuessLike from "./components/guessLike.vue";
import TabBar from "../common/tabBar";
import Floor from "./components/floor.vue";
import Totop from "./components/totop.vue";

export default {
  created() {
    var hotSearch = [
      "香肠派对",
      "苹果手机",
      "空调",
      "冰箱",
      "海尔洗衣机",
      "华为手机",
      "小米电视",
      "美的空调"
    ];
    this.hotList = hotSearch;
    // this.history = this.getStorage()
  },
  data() {
    return {
      inputVal: "",
      isDelete: true,
      history: [],
      hotList: [],
      flag: false
    };
  },
  components: {
    TopBar,
    TabBar,
    Swiper,
    Category,
    Headline,
    Seckill,
    GuessLike,
    Floor,
    Totop
  },
  methods: {
    deleteH() {
      this.isDelete = !this.isDelete;
      this.removeStorage();
    },
    setStorage(list) {
      window.localStorage.setItem("history", JSON.stringify(list));
    },
    getStorage() {
      return JSON.parse(window.localStorage.getItem("history"));
    },
    removeStorage() {
      window.localStorage.removeItem("history");
    },
    setHistory() {
      this.flag = !this.flag;
      if (this.inputVal !== "") {
        var obj = {
          content: this.inputVal
        };
        this.history.push(obj);
        this.setStorage(this.history);
        this.inputVal = "";
      }
    },

    getVal() {
      var keystr = this.$refs.input.value.trim();
      this.inputVal = keystr;
      if (this.inputVal == "") {
        this.$refs.hot.style.display = "block";
        this.$refs.list.style.display = "none";
      } else {
        this.$refs.hot.style.display = "none";
        this.$refs.list.style.display = "block";
      }
      axios(
        `https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${keystr}`
      ).then(data => {
        this.$refs.list.innerHTML = data;
        var lis = document.querySelectorAll(".keyword ");
        var ass = document.querySelectorAll(".keyword a");
        var spans = document.querySelectorAll(".keyword .import");
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.cssText =
            "height:104px;font-size: 28px;padding: 0 30px;border-bottom:1px solid #ddd;line-height:104px";
          ass[i].style.color = "#333333";
        }
        for (let i = 0; i < spans.length; i++) {
          spans[i].style.cssText = "display: inline-block; float: right;";
        }
      });
    },
    backTop() {

      // 滚动元素跳转到顶部
      console.log(this.$refs.sElement.scrollTop);
      this.$refs.sElement.scrollIntoView();
      // this.$refs.scroll.$el.scrollIntoView()
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
  background: #f3f5f7;
  overflow-x: hidden;

  .topbar {
    background: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    padding: 0 24px;
    box-sizing: border-box;

    .left {
      width: 7%;
      margin-right: 24px;

      img {
        width: 57.6px;
        height: 57.6px;
      }
    }

    .center {
      display: flex;
      position: relative;
      width: 432px;

      i {
        position: absolute;
        left: 24px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 38px;
        color: #999;
      }

      input {
        width: 100%;
        height: 72px;
        font-size: 28px;
        border-radius: 36px;
        padding-left: 72px;
        box-sizing: border-box;
        background: #f6f6f6;
        user-select: none;
      }
    }

    .right {
      width: 140px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 28px;

      img {
        width: 52.78px;
        height: 46.78px;
        margin-right: 20px;
      }

      p {
        font-size: 28px;
        line-height: 56px;
        width: 56px;
        height: 56px;
      }
    }
  }
}

.b-img {
  width: 100%;
}

.b2-img {
  margin: 20px 0px;
  width: 100%;

  ul {
    margin-left: 3%;
    width: 94%;
    display: flex;
    border-radius: 30px;
    overflow: hidden;

    li {
      margin-right: 5px;
      width: 50%;

      img {
        margin-top: 20px;
        width: 100%;
      }
    }
  }
}

.search_content {
  width: 100%;
  height: 100%;
  display: relative;
  background: #fff;

  .search_bar {
    height: 100%;
    height: 102px;
    padding: 15px 0 0 0;
    box-sizing: border-box;

    span {
      display: inline-block;
      width: 112px;
      height: 68px;
      font-size: 28px;
      line-height: 68px;
      text-align: center;
    }

    .center {
      display: inline-block;
      background: #f6f6f6;
      width: 600px;
      height: 72px;
      border-radius: 46px;

      .search_item {
        width: 116px;
        height: 74px;
        display: inline-block;
        line-height: 74px;
        text-align: center;
        font-size: 28px;
        color: #f20c59;
        position: relative;

        &::after {
          position: absolute;
          top: 30px;
          right: 0;
          content: "";
          border-width: 10px;
          border-style: solid;
          border-color: #f20c59 transparent transparent transparent;
        }
      }

      input {
        margin-left: 10px;
        background: transparent;
      }

      img {
        width: 28px;
        height: 28px;
        float: right;
        margin: 22px 50px;
      }
    }
  }

  .hotSearch {
    width: 100%;
    height: 320px;
    border-top: 3px solid #f0f0f0;
    border-bottom: 3px solid #f0f0f0;

    p {
      font-size: 24px;
      display: inline-block;
      width: 93%;
      margin: 0 auto;
      padding-left: 50px;
      height: 96px;
      line-height: 96px;

      img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
    }

    ul {
      width: 93%;
      height: 200px;
      margin: 20px auto;

      li {
        display: inline-block;
        font-size: 24px;
        width: auto;
        height: 64px;
        padding: 0 15px;
        line-height: 64px;
        margin: 0 25px 30px 0;
        border: 2px solid #ddd;
        border-radius: 32px;
      }
    }
  }

  .searchList {
    margin-top: 40px;
  }

  .history {
    width: 100%;
    min-height: 100px;
    text-align: center;

    ul {
      min-height: 0;
      max-height: 500px;
      overflow-y: auto;

      li {
        height: 96px;
        font-size: 28px;
        line-height: 96px;
        border-bottom: 1px solid #ddd;
        text-align: left;
        padding-left: 50px;
        box-sizing: border-box;
      }
    }

    button {
      width: 50%;
      height: 82px;
      font-size: 28px;
      color: #666666;
      background: #fff;
      border: 2px solid #ddd;
      border-radius: 40px;
      margin-top: 30px;
    }
  }
}

.newkey {
  width: 100%;
  height: 106px;
  padding: 0 20px;
  color: #004444;
}
.to {
  border: 1px solid rgb(153, 151, 151);
  border-radius: 100px;
  padding: 10px;
  position: fixed;
  background: #fff;
  right: 20px;
  bottom: 100px;
}
</style>
