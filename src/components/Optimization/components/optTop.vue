<template>
  <div class="opttop">
    <img class="left" src="../images/left.png" alt />
    <div class="text">电视内购会</div>
    <img class="right" src="../images/right.png" alt />
  </div>
  <!-- <TopBar></TopBar> -->
</template>
<script>
// import TopBar from "../../common/topBar"
export default {
  // components:{
  //     TopBar
  // }
};
</script>
<style lang="less" scoped>
.opttop {
  background: white;
  display: flex;
  justify-content: space-between;
//   padding: 10px 16px;
  align-items: center;
  .left {
    width: 70px;
    height: 80px;
  }
  .text {
    width: 470px;
    height: 88px;
    background: pink;
    text-align: center;
    line-height: 88px;
    font-size: 36px;
  }
  .right {
    width: 70px;
    height: 80px;
  }
}
</style>