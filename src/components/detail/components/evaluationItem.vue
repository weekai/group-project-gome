<template>
  <div>
    <div class="uinfo" v-for="(item, index) in evaluationList" :key="index">
      <!-- 输出上部分信息 -->
      <div class="top" v-if="evaluationList.length != 0">
        <!-- 会员头像 -->
        <img class="member-icon" slot="memberIcon" :src="item.memberIcon" alt />
        <!-- 用户名 -->
        <div class="user-name">
          <p>{{ item.userName }}</p>
        </div>
        <!-- 等级 -->
        <img class="grade-image" :src="item.gradeImage" alt />
        <!-- 星星 -->
        <div class="star-bar" v-for="count in parseInt(item.appraiseGrade)" :key="count">
          <img src="../../../assets/images/star.svg" alt />
        </div>
        <!-- 发表日期 -->
        <p class="up-date">2019-08-29</p>
      </div>

      <!-- 输出评论内容 -->
      <div class="center">
        <p class="appraise">{{ item.appraiseSummary }}</p>
        <div class="appraise-pic">
          <img v-lazy="item.imageFirst" alt />
        </div>
      </div>

      <div class="bottom">
        <p class="goodsAttr">规格：{{ item.goodsAttr }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      evaluationList: []
    };
  },
  props: ["cevaluations"],
  watch: {
    cevaluations() {
      // console.log("改变了");
      this.evaluationList = this.cevaluations;
      // console.log(this.evaluationList);
    }
  }
};
</script>


<style lang="less" scoped>
.uinfo {
  width: 100%;
  background: #fff;
  min-height: 260px;
  padding: 36px 28px 36px 28px;
  margin-bottom: 24px;
  box-sizing: border-box;
  .top {
    // background: red;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 66px;

    // justify-content: space-around;
    .member-icon {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      margin-right: 12px;
    }
    .user-name {
      margin-right: 12px;
      // max-width: 120px;
      p {
        width: max-content;
        font-size: 30px;
      }
    }
    .grade-image {
      margin-right: 24px;
      width: 36px;
      height: 36px;
    }
    .star-bar {
      img {
        width: 24px;
        height: 24px;
      }
    }
    .up-date {
      color: #919599;
      width: 360px;
      text-align: right;
    }
  }
  .center {
    height: auto;
    padding-top: 24px;
    // box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    p {
      height: auto;
      font-size: 28px;
    }
    .appraise-pic {
      margin: 24px 24px 0 0;
      img[src="item.imageFirst"] {
        // width: 222px;
        width: 340px;
        height: 420px;
      }
    }
  }
  .bottom {
    padding-top: 24px;
    // box-sizing: border-box;
    p {
      font-size: 24px;
      color: #919599;
    }
  }
}
</style>