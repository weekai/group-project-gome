<template>
  <div class="good">
    <!-- top banner -->
    <top-banner></top-banner>
    <!--  -->
    <use-good-info></use-good-info>

    <use-good-panel></use-good-panel>

    <use-good-service></use-good-service>

    <good-panel>
      <div slot="title" class="shop">
        <p>
          <img src="../../../assets/images/lenovo.png" alt />
          <span slot="title">联想官方旗舰店</span>
          <img src="../../../assets/images/gomezy.png" alt />
          <i slot="arrow" class="iconfont icon_arrow_right"></i>
        </p>
      </div>
    </good-panel>
    <!-- tabs -->
    <div v-if="info != null">
      <description-tab :cdescription="description" :cinfo="info"></description-tab>
    </div>
    <add-cart></add-cart>
  </div>

  
</template>

<script>
import AddCart from "./addCart";

import TopBanner from "./goodTopBanner";
import UseGoodInfo from "./useGoodInfo";
import UseGoodPanel from "./useGoodpanel";
import UseGoodService from "./useGoodService";
import GoodPanel from "./goodPanel";
import DescriptionTab from "./descriptionTab";

import { getDetail } from "@/api/index.js";

export default {
  data() {
    return {
      description: null,
      info: null
    };
  },
  async created() {
    let ret = await getDetail();
    this.description = ret.detail;
    this.info = this.description.stock;
  },
  components: {
    TopBanner,
    UseGoodInfo,
    UseGoodPanel,
    UseGoodService,
    GoodPanel,
    DescriptionTab,
    AddCart
  }
};
</script>

<style lang="less">
body {
  background: #f2f2f2 !important;
}

.shop {
  padding-bottom: 10px;
  p {
    img {
      &:first-child {
        width: 160px;
        height: 66px;
        margin-right: 22px;
      }
      &:nth-child(3) {
        width: 108px;
        height: 30px;
      }
    }
  }
}
</style>