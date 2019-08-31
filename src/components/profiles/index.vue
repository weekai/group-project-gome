<template>
  <div class="profileBg">
    <div class="profiles">
      <top-bar v-if="isLogin">
        <router-link tag="div" to="/home" slot="left">
          <i class="iconfont icon_arrow_left"></i>
        </router-link>
        <div slot="center" class="center" v-if="isLogin">我的国美</div>
        <div slot="right" class="right" v-if="isLogin" @click="ispop = !ispop">
          <i class="iconfont icon_more"></i>
          <pop-up v-show="ispop"></pop-up>
        </div>
      </top-bar>
       <top-bar v-else>
        <router-link tag="div" to="/home" slot="left">
          <i class="iconfont icon_arrow_left"></i>
        </router-link>
        <div slot="center" class="center" v-if="isLogin">我的国美</div>
        <div slot="right" class="right" v-if="isLogin" @click="ispop = !ispop">
          <i class="iconfont icon_more"></i>
          <pop-up v-show="ispop"></pop-up>
        </div>
      </top-bar>
      <!-- tabBar -->
      <!-- <tab-bar></tab-bar> -->

      <!-- userINfo -->
      <my-gome v-if="isLogin">
        <user-info slot="userinfo" />
        <!-- 第一行子信息 -->
        <sub-info slot="subinfo">
          <sub-info-item>
            <img slot="item-pic" src="./images/daifukuan.png" alt />
            <div slot="item-text">待付款</div>
          </sub-info-item>

          <sub-info-item>
            <img slot="item-pic" src="./images/daishouhuo.png" alt />
            <div slot="item-text">待收货</div>
          </sub-info-item>

          <sub-info-item>
            <img slot="item-pic" src="./images/daipingjia.png" alt />
            <div slot="item-text">待评价</div>
          </sub-info-item>

          <sub-info-item>
            <img slot="item-pic" src="./images/tuihou.png" alt />
            <div slot="item-text">退款/售后</div>
          </sub-info-item>

          <sub-info-item style="padding-top:18px; boxSizing:border-box;">
            <img slot="item-pic" src="./images/dingdan.png" alt />
            <div slot="item-text">
              <p>全部订单</p>
              <p>查看电子发票</p>
            </div>
          </sub-info-item>
        </sub-info>
        <!-- 第二行子信息 -->
        <sub-info slot="subinfo">
          <sub-info-item>
            <div slot="item-pic">0.00</div>
            <div slot="item-text">国美币余额</div>
          </sub-info-item>
          <sub-info-item>
            <div slot="item-pic">8</div>
            <div slot="item-text">优惠券</div>
          </sub-info-item>
          <sub-info-item>
            <div slot="item-pic">0</div>
            <div slot="item-text">美豆</div>
          </sub-info-item>
          <sub-info-item>
            <img slot="item-pic" src="./images/meitongka.png" alt />
            <div slot="item-text">美通卡</div>
          </sub-info-item>
          <sub-info-item>
            <img slot="item-pic" src="./images/qianbao.png" alt />
            <div slot="item-text">我的钱包</div>
          </sub-info-item>
        </sub-info>
        <!-- 我的 菜单1 -->
        <sub-menu slot="submenu">
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/huiyuanbu.png" alt />
            </div>
            <div slot="item-text">
              <p>会员俱乐部</p>
            </div>
          </sub-menu-item>
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/viphuiyuanka.png" alt />
            </div>
            <div slot="item-text">
              <p>我的会员卡</p>
            </div>
          </sub-menu-item>
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/shoucang.png" alt />
            </div>
            <div slot="item-text">
              <p>我的收藏</p>
            </div>
          </sub-menu-item>
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/fapiaozhushou.png" alt />
            </div>
            <div slot="item-text">
              <p>发票助手</p>
            </div>
          </sub-menu-item>
        </sub-menu>
        <!-- menu 2 -->
        <sub-menu slot="submenu">
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/yuyue.png" alt />
            </div>
            <div slot="item-text">
              <p>我的预约</p>
            </div>
          </sub-menu-item>
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/pingtuan.png" alt />
            </div>
            <div slot="item-text">
              <p>我的拼团</p>
            </div>
          </sub-menu-item>
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/yijian.png" alt />
            </div>
            <div slot="item-text">
              <p>服务规则</p>
            </div>
          </sub-menu-item>
          <sub-menu-item>
            <div slot="item-pic">
              <img src="./images/shouhuo.png" alt />
            </div>
            <div slot="item-text">
              <p>收货地址</p>
            </div>
          </sub-menu-item>
        </sub-menu>

        <!-- LineText -->
        <line-text slot="linetext">
          <i class="iconfont icon_arrow_top"></i>
          你可能喜欢
        </line-text>
        <guess-like slot="guesslike">
          <guess-like-item />
          <line-text slot="linetext">
            <i class="iconfont icon_arrow_top"></i>
            没有啦
          </line-text>
        </guess-like>
      </my-gome>

      <!-- 登录表单 -->
      <login-form v-else />
    </div>
  </div>
</template>

<script>
import TopBar from "../common/topBar";
import PopUp from "../common/popUp";
import MyGome from "./components/myGome";
import UserInfo from "./components/userInfo";
import LoginForm from "./components/loginForm";

// import TabBar from "../common/tabBar"

import SubInfo from "./components/subInfo";
import SubInfoItem from "./components/subInfoItem";
import SubMenu from "./components/subMenu";
import SubMenuItem from "./components/subMenuItem";

import LineText from "./components/lineText";
import GuessLike from "./components/guessLike";
import GuessLikeItem from "./components/guessLikeItem";

export default {
  components: {
    TopBar,
    PopUp,
    LoginForm,
    MyGome,
    UserInfo,
    SubInfo,
    SubInfoItem,
    SubMenu,
    SubMenuItem,
    LineText,
    GuessLike,
    GuessLikeItem
  },
  data() {
    return {
      isLogin: this.$store.state.isLogin,
      // isLogin:false,
      ispop: false
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
#app{
  padding-top: 0;
}
.profileBg {
  height: 100%;
  background: #fff;
  box-sizing: border-box;
 
}
.profiles {
  display: flex;
  flex-direction: column;
}
</style>