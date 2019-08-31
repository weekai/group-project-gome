<template>
  <div>
    <!-- params -->
    <good-panel>
      <div slot="title">
        <p>
          <span slot="tag">已选</span>
          <span slot="title">Y7000/I5/512固态</span>
          <span>1个</span>
          <i slot="arrow" class="iconfont icon_arrow_right"></i>
        </p>
      </div>
      <div slot="service">
        <p>
          <span slot="tag1">推荐</span>
          <span slot="content">增值服务</span>
        </p>
      </div>
    </good-panel>
    <!-- address -->
    <good-panel>
      <div slot="title">
        <p>
          <span slot="tag">送至</span>
          <span slot="title">
            <i class="iconfont icon_addr"></i> 朝外街道，免运费
          </span>
          <span>1个</span>
        </p>
      </div>
    </good-panel>
    <!-- shop -->
    <good-panel>
      <div slot="title">
        <p>
          <span slot="tag">朝阳区门店</span>
          <span slot="title">北京国美西坝河店</span>
          <span>1个</span>
        </p>
      </div>
    </good-panel>
    <!-- service -->
    <div class="guide-info">
      <div class="inBg">
        <div class="left">
          <img src="//gfs13.gomein.net.cn/T1jyWTBTW_1RXrhCrK.jpg" alt />
          <img src="@/assets/images/ygrz.png" alt />
        </div>
        <div class="center">
          <p>王华</p>
          <img src="../../../assets/images/star.svg" v-for="n in 5" :key="n" alt />
          <p>已服务197人</p>
        </div>
        <div class="right">
          <i class="iconfont icon_reserve"></i>
          <span>预约</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodPanel from "./goodPanel";
export default {
  components: {
    GoodPanel
  }
};
</script>

<style lang="less" scoped>
.arrow {
  display: flex;
  justify-content: space-between;
}
.guide-info {
  height: auto;
  padding-bottom: 28px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-around;

  .inBg {
    background: #f9f9f9;
    padding: 24px 24px 14px;
    width: 100%;
    height: 220px;
    display: flex;
    // justify-content: space-between;
    // align-items: center;
    .left {
      margin-right: 40px;
      position: relative;
      img {
        &:first-child {
          width: 140px;
          height: 140px;
          border-radius: 50%;
        }
        &:last-child {
          width: 140px;
          height: 40px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .center {
      line-height: 60px;
      img {
        width: 28px;
        height: 28px;
      }
      p{
        font-size: 28px;
      }
    }
    .right {
      flex: 1;
      text-align: right;
      
      i{
      font-size: 40px;        
      }
      span {
        font-size: 32px;
      }
    }
  }
}
</style>