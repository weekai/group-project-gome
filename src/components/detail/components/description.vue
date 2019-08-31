<template>
  <div class="description">
    <!-- 详情页上半部分信息 -->
    <div class="info-cont" v-if="info != null">
      <div class="img-box">
        <img :src="info.url" alt />
      </div>
      <div class="info-msg">
        <p>{{ info.title }}</p>
        <span>{{ info.skuPrice }}</span>
      </div>

      <div class="tipBg">
        <div class="tip">
          <p>{{ info.adDesc }}</p>
        </div>
      </div>
    </div>
    <div class="tipContainer"></div>

    <!-- 下边选项卡切换 -->
    <div v-if="info != null">
      <description-tab :cdescription="description" :cinfo="info"></description-tab>
    </div>
    <!-- 切换选项卡的内容结束 -->
  </div>
</template>
<script>
import { getDetail } from "@/api/index.js";
import DescriptionTab from "./descriptionTab";

export default {
  data() {
    return {
      description: null,
      info: null,
      currentIndex: 0,
      index: 0
    };
  },

  methods: {
    changeStatus(item, index) {
      this.active = item.id;
      this.currentIndex = index;
    }
  },

  async created() {
    let ret = await getDetail();
    this.description = ret.detail;
    this.info = this.description.stock;
  },
  components: {
    DescriptionTab
  }
};
</script>

<style lang="less" scoped>
.tipContainer {
  height: 172px;
}
body {
  background: #fff;
}
.description {
  .info-cont {
    height: 284px;
    width: 100%;
    background: #fff;
    display: flex;
    position: relative;
    padding: 12px 24px;
    box-sizing: border-box;
    .img-box {
      width: 204px;
      height: 204px;
      img {
        width: 204px;
        height: 204px;
      }
    }
    .info-msg {
      padding: 24px 12px;
      p {
        font-size: 28px;
        color: #333333;
        line-height: 40px;
      }
      span {
        display: block;
        margin-top: 24px;
        color: #f20c59;
        font-size: 28px;
        &::before {
          content: "￥";
        }
      }
    }

    .tipBg {
      background: #fff;
      width: 100%;
      position: absolute;
      bottom: -174px;
      left: 0px;
    }
    .tip {
      height: 120px;
      border: 1px solid #f8dcbc;
      border-radius: 6px;
      background: #fffde5;
      color: #ff8000;
      margin: 24px 24px 36px;
      box-sizing: border-box;
      padding: 20px;
      line-height: 40px;
      left: 0;
      z-index: 666;
      &::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border: #f8dcbc solid 1px;
        background-color: #fffde5;
        border-left: 0;
        border-top: 0;
        top: 15px;
        left: 100px;
        -webkit-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }
}
</style>
