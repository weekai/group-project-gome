<template>
  <div class="uinfo">
    <div class="giftMessage">
      <img src="../images/gift.gif" alt />
      <img src="../images/message.png" alt />
    </div>
    <div class="inforList">
      <div class="head"></div>
      <div class="info">
        <p class="name">gm_151^_^8552tkyz</p>
        <p>
          <img src="../images/noRealName.png" alt />
          未实名
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.uinfo {
  width: 100%;
  height: 240px;
  display: flex;
  background: url("../images/userBg.png") no-repeat;
  background-size: 100% 240px;
  flex-direction: column;
  .giftMessage {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
      margin-right: 30px;
      width: 60px;
      height: 60px;
      &:last-child {
        margin-top: 20px;
        width: 40px;
        height: 40px;
      }
    }
  }
  .inforList {
    height: 100%;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    padding-left: 60px;
    .head {
      width: 110px;
      height: 110px;
      background: url("../images/headIcon.jpg") no-repeat;
      background-size: 110px;
      border-radius: 50%;
      border: 4px solid #fff;
    }
    .info{
        margin-left: 30px;
        width: 420px;
        height: 320px;
        display: flex;
        flex-direction: column;
        p{
            color: #fff;
            line-height: 50px;
            &:last-child{
                margin-top: 20px;
                height: 36px;
                line-height: 40px;
                width: 130px;
                text-align: center;
                background: #B8B8B8;
                border-radius: 25px;
            }
            img{
                width: 24px;
            }
        }
    }
  }
}
</style>