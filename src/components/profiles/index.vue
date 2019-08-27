<template>
  <div class="profiles">
    <top-bar>
      <div slot="left" @click="goHome">
        <i class="iconfont icon_arrow_left"></i>
      </div>
    </top-bar>
   
    <!-- 登录表单 -->
    <login-form></login-form>
  </div>
</template>

<script>
import TopBar from "../common/topBar";
import LoginForm from "./components/loginForm";

export default {
  components: {
    TopBar,
    LoginForm
  },
  data() {
    return {};
  },
  methods: {
    goHome(){
      this.$router.push('/home');
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
  }
}
</style>