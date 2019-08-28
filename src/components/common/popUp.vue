<template>
  <div>
    <div class="pop">
      <ul slot="pop" class="popup">
        <router-link to="/home" tag="li">
          <img src="../../assets/images/pop_home.png" alt />
          <p>首页</p>
        </router-link>

        <router-link to="/category" tag="li">
          <img src="../../assets/images/pop_cate.png" alt />
          <p>分类搜索</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <img src="../../assets/images/pop_cart.png" alt />
          <p>购物车</p>
        </router-link>

        <router-link to="/profiles" tag="li">
          <img src="../../assets/images/pop_profiles.png" alt />
          <p>我的国美</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
.pop {
  width: 350px;
  height: auto;
  box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.94);
  position: absolute;
  right: 0;
  // top: 0
  border-radius: 10px;
  margin: 40px 20px 0 0;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 20px solid rgba(255, 255, 255, 0.94);
    // border-top: 50px solid transparent;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: absolute;
    top: -20px;
    right: 20px;
  }

  .popup {
    display: flex;
    flex-direction: column;
    li {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: start;
      img {
        width: 48px;
        height: 48px;
        margin: 30px;
      }
      p {
        flex: 1;
        line-height: 80px;
        font-size: 32px;
        font-weight: normal;
        width: 200px;
        border-bottom: 2px solid #dddddd;
      }
    }
  }
}
</style>