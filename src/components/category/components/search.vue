<template>
  <div class="search">
    <img class="logo" src="../images/j-left.png" alt />
    <div class="inp">
      <input type="text" placeholder="搜索商品" />
      <img src="../images/search.png" alt />
    </div>
    <img class="menu" src="../images/more.png" alt />
  </div>
</template>
<style lang="less" scoped>
.search {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  background: #fff;
  .logo {
    width: 60px;
    height: 60px;
    padding:10px 20px ;
  }
  .inp {
    background: #f6f6f6;
    flex: 1;
    margin: 0 30px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    input {
        flex: 1;
        margin-left: 40px;
        background: transparent;

    }
    img {
      width: 30px;
      height: 30px;
      padding: 0 20px;
    }
  }
  .menu {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
}
</style>
