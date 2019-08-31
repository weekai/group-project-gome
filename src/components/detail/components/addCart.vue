<template>
  <div class="add">
    <div class="left">
      <div class="shops">
        <img src="@/assets/images/shop.png" />
        <p>店铺</p>
      </div>
      <div class="collect">
        <img src="@/assets/images/collect.png" />
        <p>收藏</p>
      </div>
      <div class="car">
        <img src="@/assets/images/cart.png" />
        <p>购物车</p>
      </div>
    </div>
    <div class="center">加入购物车</div>
    <div class="right">立即购买</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.add {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  .left {
    width: 44%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      text-align: center;

      img {
        // transform: scale(1.3);
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
      }
      p {
        font-size: 24px;
        color: #333333;
      }
    }
  }
  .center {
    line-height: 120px;
    text-align: center;
    width: 28%;
    font-size: 30px;
    color: #fff;
    background: linear-gradient(to right, #fac905 0, #ff9500 100%);
  }
  .right {
    color: #fff;
    width: 28%;
    line-height: 120px;
    text-align: center;
    font-size: 30px;
    background: linear-gradient(to right, #fa1e8c 0, #fc1e56 100%);
  }
}
</style>
