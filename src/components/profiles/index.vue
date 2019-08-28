<template>
  <div class="profiles">
    <top-bar>
      <div slot="left" @click="goHome">
        <i class="iconfont icon_arrow_left"></i>
      </div>
      <div slot="center" class="center" v-if="isLogin">我的国美</div>
      <div slot="right" class="right" v-if="isLogin" @click="ispop = !ispop">
        <i class="iconfont icon_more"></i>
        <pop-up v-show="ispop"></pop-up>
      </div>
    </top-bar>

    <!-- userINfo -->
    <user-info v-if="isLogin" />
    <!-- 登录表单 -->
    <login-form v-else />
  </div>
</template>

<script>
import TopBar from "../common/topBar";
import PopUp from "../common/popUp";
import UserInfo from "./components/userInfo";
import LoginForm from "./components/loginForm";

export default {
  components: {
    TopBar,
    PopUp,
    LoginForm,
    UserInfo
  },

  data() {
    return {
      isLogin: this.$store.state.isLogin,
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
.profiles {
  display: flex;
  flex-wrap: wrap;
  .topbar {
    .left {
      width: 48px;
      height: 96px;
      background: red;
      i {
        margin-left: 24px;
        font-size: 48px;
        // font-weight: bold;
      }
    }
    .center {
      height: 100%;
      font-size: 34px;
    }
    .right {
      margin-right: 24px;
      height: 100%;
      font-size: 42px;
      font-weight: bold;
      color: #676262;
    }
  }
}
</style>