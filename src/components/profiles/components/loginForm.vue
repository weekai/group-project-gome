<template>
  <div class="loginform">
    <!-- logo -->
    <a href @click.prevent class="logo">
      <img src="../images/logo_lg.png" alt />
    </a>
    <ul>
      <li @click="normalLogin = true" :class="{'isActive': normalLogin}">账号密码登录</li>
      <li @click="normalLogin = false" :class="{'isActive': !normalLogin}">短信验证码登录</li>
    </ul>

    <div class="acount_login" v-if="normalLogin">
      <div class="username account_item">
        <i class="iconfont icon_phone"></i>
        <input
          ref="inuname"
          type="text"
          id="username"
          placeholder="手机号/邮箱/用户名/门店会员卡号"
          autocomplete="off"
          v-model="username"
        />
        <div class="close">
          <img src="../images/close.png" alt />
        </div>
      </div>
      <div class="password account_item">
        <i class="iconfont icon_lock"></i>
        <input
          ref="inpwd"
          type="password"
          id="password"
          maxlength="20"
          placeholder="请输入密码"
          autocomplete="off"
          v-model="pwd"
        />
        <div class="close">
          <img src="../images/close.png" alt />
        </div>
        <div @click.prevent="handleLetSee" class="eye">
          <img src="../images/noSee.png" v-if="isSee" alt />
          <img src="../images/see.png" v-else alt />
        </div>
      </div>
      <div class="qk_login account_item">
        <div class="qk_lg">
          <a href>手机号快速注册</a>
        </div>
        <div class="find_pwd">
          <a href>找回密码</a>
        </div>
      </div>
      <div class="lg_btn" @click="login">
        <a href="javascript:void(0)">登录</a>
      </div>
    </div>

    <div v-else>
      <div class="username account_item">
        <i class="iconfont icon_phone"></i>
        <input type="text" id="username" placeholder="手机号" autocomplete="off" />
        <div class="close">
          <img src="../images/close.png" alt />
        </div>
      </div>
      <div class="password account_item">
        <i class="iconfont icon_key"></i>
        <input
          ref="inpwd"
          type="password"
          id="password"
          maxlength="20"
          placeholder="请输入短信验证码"
          autocomplete="off"
        />
        <div class="close">
          <img src="../images/close.png" alt />
        </div>
        <div class="get_code">获取验证码</div>
      </div>
      <div class="lg_btn">
        <a href="javascript:void(0)">同意协议注册并登录</a>
      </div>

      <div class="state">
        <span>
          未注册手机登录成功将自动注册，且代表您已同意协议
          <br />
          <a href="javascript:void(0)">《国美平台服务协议》</a>
          <a href="javascript:void(0)">《国美平台隐私政策》</a>
          <a href="javascript:void(0)">《美付宝服务协议》</a>
          <a style="display:none;" href="javascript:void(0)">《国美隐私政策》</a>
        </span>
      </div>
    </div>

    <div class="other">
      <span>使用以下账户登录</span>
    </div>
    <div class="other_login">
      <a href="javascript:void(0)">
        <img src="../images/mdhy.png" alt />
        <span>门店会员</span>
      </a>
      <a href="javascript:void(0)" id="qq">
        <img src="../images/qq.png" />
        <span>QQ</span>
      </a>
      <a href="javascript:void(0)" id="sina">
        <img src="../images/wb.png" />
        <span>新浪微博</span>
      </a>
      <a href="javascript:void(0)" id="zfb">
        <img src="../images/zfb.png" />
        <span>支付宝</span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      normalLogin: true,
      isSee: true,
      isClose: false,
      username: "",
      pwd: "",
      islogin: false
    };
  },
  methods: {
    handleLetSee() {
      this.isSee = !this.isSee;
      if (this.isSee != true) {
        this.$refs.inpwd.setAttribute("type", "text");
      } else {
        this.$refs.inpwd.setAttribute("type", "password");
      }
    },
    login() {
      axios({
        method: "post",
        url: "http://localhost:3000/api/profiles/login",
        data: {
          username: this.username,
          pwd: this.pwd
        },
        withCredentials: "include",
        timeout: 1000
      }).then(res => {
        console.log(res);
        if (res.code == 0 && res.success == true) {
          this.islogin = true;
          this.$store.commit("changeIsLoginStatus", this.islogin);
          this.$router.push("/home");
        } else {
          this.islogin = false;
          this.$store.commit("changeIsLoginStatus", this.islogin);
        }
      });
    }
  },
  components: {}
};
</script>

<style lang="less" soped>
.isActive {
  color: #f20c59;
  border-bottom: 4px solid #f20c59;
}
.loginform {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // flex-wrap: wrap;
  padding: 0 84px;
  a.logo {
    border-top: 4px solid transparent;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    margin: 10px 0 34px 0;
    img {
      width: 274px;
      height: 90px;
    }
  }
  img {
    width: 26px;
    height: 26px;
  }
  ul {
    display: flex;
    width: 100%;
    height: 86px;
    line-height: 86px;
    margin-bottom: 50px;
    li {
      text-align: center;
      width: 50%;
      font-size: 32px;
    }
  }
  .account_item {
    // background: red;
    width: 100%;
    height: 84px;
    margin-top: 20px;
    border-bottom: 2px solid #ddd;
    display: flex;
    align-items: center;
    i {
      font-size: 40px;
      color: #d8d8d8;
      margin-right: 10px;
    }
    input {
      height: 100%;
      width: 100%;
    }
    input::-webkit-input-placeholder {
      color: #aaa;
      font-size: 27px;
    }
    .eye {
      img {
        width: 34px;
        height: 34px;
      }
    }
  }
  .qk_login.account_item {
    display: flex;
    justify-content: space-between;
    border-bottom: none;
    font-size: 30px;
    a {
      color: #78bee9;
    }
  }

  .lg_btn {
    width: 100%;
    height: 88px;
    border-radius: 44px;
    background: #ff86b3;
    margin-top: 60px;
    line-height: 88px;
    text-align: center;
    a {
      font-size: 32px;
      color: #fff;
    }
  }
  .password {
    .close {
      img {
        margin-right: 28px;
      }
    }
  }
  .get_code {
    width: 360px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 2px solid #f20c59;
    color: #f20c59;
    border-radius: 32px;
  }
  .state {
    line-height: 32px;
    margin-top: 30px;
    color: #999;

    a {
      color: #78bee9;
    }
  }
  .other {
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 200px;
    border-bottom: 2px solid #999;

    span {
      display: inline-block;
      width: 300px;
      font-size: 28px;
      color: #999;
      background: #fff;
      position: relative;
      transform: translateY(50%);
    }
  }
  .other_login {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    width: 100%;
    height: 128px;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      img {
        margin: 0 auto 10px auto;
        width: 84px;
        height: 84px;
      }
    }
  }
}
</style>