<template>
  <div class="optcon">
    <!-- 楼层 1、 -->
    <img class="logo" src="https://gfs13.gomein.net.cn/wireless/T1LwxXBCLT1RCvBVdK_990_130.jpg" alt />
    <ul>
      <li v-for="(item,index) in optConList.goodsList1" :key="index">
        <img :src="item.goodsBean.skuThumbImgUrl" alt />
        <p class="text">{{item.goodsBean.skuName}}</p>
        <p class="price">{{item.goodsBean.priceBean.skuPriceDesc}}</p>
      </li>
    </ul>
    <!-- 楼层 2、 -->
    <img class="logo" src="https://gfs10.gomein.net.cn/wireless/T1VGWXB4hv1RCvBVdK_990_130.jpg" alt />
    <ul>
      <li v-for="(item,index) in optConList.goodsList2" :key="index">
        <img :src="item.goodsBean.skuThumbImgUrl" alt />
        <p class="text">{{item.goodsBean.skuName}}</p>
        <p class="price">{{item.goodsBean.priceBean.skuPriceDesc}}</p>
      </li>
    </ul>
    <!-- 楼层 3、 -->
    <img class="logo" src="https://gfs13.gomein.net.cn/wireless/T1yPAXB4Ev1RCvBVdK_990_130.jpg" alt />
    <ul>
      <li v-for="(item,index) in optConList.goodsList3" :key="index">
        <img :src="item.goodsBean.skuThumbImgUrl" alt />
        <p class="text">{{item.goodsBean.skuName}}</p>
        <p class="price">{{item.goodsBean.priceBean.skuPriceDesc}}</p>
      </li>
    </ul>

    <!-- 楼层 4、 -->
    <img class="logo" src="https://gfs13.gomein.net.cn/wireless/T1tvWXB4Ev1RCvBVdK_990_130.jpg" alt />
    <ul>
      <li v-for="(item,index) in optConList.goodsList4" :key="index">
        <img :src="item.goodsBean.skuThumbImgUrl" alt />
        <p class="text">{{item.goodsBean.skuName}}</p>
        <p class="price">{{item.goodsBean.priceBean.skuPriceDesc}}</p>
      </li>
    </ul>
    <!-- 楼层 5、 -->
    <img class="logo" src="https://gfs13.gomein.net.cn/wireless/T1CTxXBmhT1RCvBVdK_990_130.jpg" alt />
    <ul>
      <li v-for="(item,index) in optConList.goodsList5" :key="index">
        <img :src="item.goodsBean.skuThumbImgUrl" alt />
        <p class="text">{{item.goodsBean.skuName}}</p>
        <p class="price">{{item.goodsBean.priceBean.skuPriceDesc}}</p>
      </li>
    </ul>
    <!-- 楼层 6、 -->
    <img class="logo" src="https://gfs10.gomein.net.cn/wireless/T1LSxXB7ZT1RCvBVdK_990_130.jpg" alt />
    <ul>
      <li v-for="(item,index) in optConList.goodsList6" :key="index">
        <img :src="item.goodsBean.skuThumbImgUrl" alt />
        <p class="text">{{item.goodsBean.skuName}}</p>
        <p class="price">{{item.goodsBean.priceBean.skuPriceDesc}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
//优选数据请求
import { getOptList } from "@/api";

export default {
  data() {
    return {
      optConList: []
    };
  },
  created() {
    getOptList().then(data => {
      this.optConList = data.result.data[0];
      // console.log(this.optConList);
    });
  }
};
</script>
<style lang="less" scoped>
.optcon {
  .logo {
    margin-top: 20px;
    width: 100%;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 8px;
    margin-right: 8px;
    li {
      width: 29%;
      background: white;
      margin-top: 10px;
      padding: 10px;
      img {
        width: 100%;
      }
      .text {
          height: 60px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 30px;
      }
      .price {
        margin-top: 26px;
        color: red;
        font-size: 32px;
        font-weight: bold;
      }
    }
  }
}
</style>