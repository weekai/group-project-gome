<template>
  <div>
    <div class="pop">
      <ul slot="pop" class="popup">
        <router-link to="/home" tag="li">
          <img src="@/assets/images/pop_home.png" alt />
          <p>首页</p>
        </router-link>

        <router-link to="/category" tag="li">
          <img src="@/assets/images/pop_cate.png" alt />
          <p>分类</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <img src="@/assets/images/pop_cart.png" alt />
          <p>购物车</p>
        </router-link>

        <router-link to="/profiles" tag="li">
          <img src="@/assets/images/pop_profiles.png" alt />
          <p>我的</p>
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
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.94);
  z-index: 666;
  position: fixed;
  right: 10px;
  top: 80px;
  border-radius: 10px;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 20px solid rgba(255, 255, 255, 0.94);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: absolute;
    top: -20px;
    right: 20px;
  }

  .popup {
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      height: 0px;
      width: 100%;
      border: 2px solid rgba(255, 255, 255, 0.94);
      position: absolute;
      bottom: -1px;
      box-sizing: border-box;
    }
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
        height: 100%;
        line-height: 100px;
        font-size: 32px;
        font-weight: normal;
        width: 200px;
        border-bottom: 2px solid #dddddd;
      }
    }
  }
}
</style>
