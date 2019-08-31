<template>
  <div class="nav">
    <a class="afirst"  @click="show()" >综合</a>
    <a class="atwo" href>价格</a>
    <a href>销量</a>
    <a href>筛选</a>
    <!-- <div class="pulldown" ref="pulldown">
      <ul>
        <li>
          <span>综合</span>
        </li>
        <li>
          <span>评论从高到低</span>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
export default {
    methods(){
       
    }
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 100px;
  margin-top: 80px;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #969696;
  border-bottom: 1px solid #969696;
  z-index: 666;
  .pulldown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 200px;
    ul {
      // width: 750px;
      height: 100%;
      li {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #333;
        line-height: 100px;
        font-size: 30px;
        span{
            margin-left: 50px
        }
   
      }
    }
  }
  a {
    flex: 1;
    height: 100%;
    display: block;
    position: relative;
    text-align: center;
    line-height: 100px;
    color: #333;
    font-size: 26px;
  }
  .afirst {
    &::after {
      position: absolute;
      top: 45px;
      left: 130px;
      content: "";
      border-width: 10px;
      border-style: solid;
      border-color: #333 transparent transparent transparent;
    }
    &::before {
      position: absolute;
      top: 35px;
      left: 130px;
      content: "";
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #333 transparent;
      display: none;
    }
  }
  .atwo {
    &::after {
      position: absolute;
      top: 55px;
      left: 130px;
      content: "";
      border-width: 10px;
      border-style: solid;
      border-color: #333 transparent transparent transparent;
    }
    &::before {
      position: absolute;
      top: 30px;
      left: 130px;
      content: "";
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #333 transparent;
    }
  }
  //  &::after {
  //         position: absolute;
  //         top: 0;
  //         right: 0;
  //         content: "";
  //         border-width: 10px;
  //         border-style: solid;
  //         border-color: #F20C59 transparent transparent transparent;
  //       }
}
</style>
