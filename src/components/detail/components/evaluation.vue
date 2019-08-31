<template>
  <div>
    <evaluation-menu>
      <div>
        <evaluation-menu-item v-for="item in menuList" :key="item">
          <div slot="menuItem">{{ item }}</div>
        </evaluation-menu-item>
      </div>
      <div class="degree">
        <div slot="degree" class="right">
          <p>好评度</p>
          <p>99</p>
        </div>
      </div>
    </evaluation-menu>

    <evaluation-item :cevaluations="evaluations" />
  </div>
</template>

<script>
import { getEvaluationList } from "../../../api/index.js";
import EvaluationMenu from "./evaluationMenu";
import EvaluationMenuItem from "./evaluationMenuItem";
import EvaluationItem from "./evaluationItem";

export default {
  components: {
    EvaluationMenu,
    EvaluationMenuItem,
    EvaluationItem
  },
  data() {
    return {
      menuList: [
        "全部",
        "好评(1.5万)",
        "中评(2)",
        "差评(6)",
        "有图(227)",
        "不看默认评价"
      ],
      evaluations: []
    };
  },
  async created() {
    let ret = await getEvaluationList();
    this.$nextTick(() => {
      this.evaluations = ret.rated.picList;
      // console.log(this.evaluations)
    });
  }
};
</script>

<style lang="less" scoped>
.degree {
  flex: 1;
  padding-right: 36px;
  align-items: center;
  .right {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
    text-align: right;
  }
  p {
    line-height: 48px;
    font-size: 24px;
    &:last-child {
      font-size: 46px;
      color: #f20c59;
      &::after {
        content: "%";
        font-size: 24px;
      }
    }
  }
}
</style>