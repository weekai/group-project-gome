<template>
  <div class="tabBar">
    <router-link tag="div" to="/home" class="item">
      <img src="../../assets/images/home.png" alt />
      <p>首页</p>
    </router-link>
    <router-link tag="div" to="/category" class="item">
      <img src="../../assets/images/category.png" alt />
      <p>分类</p>
    </router-link>
    <router-link tag="div" to="/optimization" class="item">
      <img src="../../assets/images/optimization.png" alt />
      <p>优选</p>
    </router-link>
    <div tag="div" class="item" @click.prevent="isLog">
      <img src="../../assets/images/cart.png" alt />
      <p>购物车</p>
    </div>
    <router-link tag="div" to="/profiles" class="item">
      <img src="../../assets/images/profiles.png" alt />
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    isLog() {
      if(!this.$store.state.isLogin){
        this.$router.push('/profiles')
      }else{
        this.$router.push('/cart')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tabBar {
  background: #f6f6f6;
  width: 100%;
  height: 110px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &.is_active p {
      color: #aaa;
    }
    img {
      width: 56px;
      height: 56px;
    }
    p {
      font-size: 24px;
      color: #999999;
      padding-top: 5px;
      text-align: center;
    }
  }
}
</style>