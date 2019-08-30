<template>
  <div class="uinfo">
    <div class="giftMessage">
      <img src="../images/gift.gif" alt />
      <img src="../images/message.png" alt />
    </div>
    <div class="inforList">
      <div class="left">
        <div class="head"></div>
        <div class="info">
          <p class="name">gm_151^_^8552tkyz</p>
          <p>
            <img src="../images/noRealName.png" alt />
            未实名
          </p>
        </div>
      </div>
      <div class="right">
        <div class="rBg">
          <span>G1</span>
          <span>会员</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
.uinfo {
  width: 100%;
  height: 260px;
  background: url("../images/userBg.png") no-repeat;
  background-size: 100% 260px;

  .giftMessage {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    img {
      width: 60px;
      height: 60px;
      margin-right: 30px;
      &:last-child {
        margin-top: 20px;
        width: 40px;
        height: 40px;
      }
    }
  }
  .inforList {
    display: flex;
    width: 100%;
    .left {
      flex: 1;
      display: flex;
      padding: 21px 0 0 42px;
      box-sizing: border-box;
      .head {
        width: 110px;
        height: 110px;
        background: url("../images/headIcon.jpg") no-repeat;
        background-size: 110px;
        border-radius: 50%;
        border: 4px solid #fff;
      }
      .info {
        margin-left: 30px;
        width: 420px;
        display: flex;
        flex-direction: column;
        p {
          color: #fff;
          line-height: 50px;
          font-size: 30px;
          &:last-child {
            margin-top: 20px;
            width: 130px;
            height: 36px;
            line-height: 40px;
            text-align: center;
            font-size: 24px;
            background: #b8b8b8;
            border-radius: 25px;
          }
          img {
            width: 24px;
          }
        }
      }
    }
    .right {
      .rBg {
        width: 132px;
        height: 64px;
        background: url("../images/memberBg.png") no-repeat;
        background-size: 132px 60px;
        margin-top: 42px;
        display: flex;
        position: relative;
        span {
          display: inline-block;
          &:first-child {
            position: absolute;
            color: #fd0175;
            font-weight: bold;
            top: 50%;
            left: 16px;
            transform: translateY(-50%);
          }
          &:last-child {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;

            color: #fff;
            // margin-left: 22px;
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>