<template>
   <div class="headline">
     <div class="title">
       <img src="//gfs13.gomein.net.cn/wireless/T1yEhbB7J_1RCvBVdK_120_28.png" />
     </div>
     <div class="content">
       <div class="scroll">
         <ul>
           <li></li>
           <li></li>
           <li></li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
  export default{

  }
</script>

<style lang="less" scoped>
  .headline{
    display: flex;

    background: #FFFFFF;
    height: 102px;
    width:700px;
    margin-left:25px;
    .title{
      width:190px;
      height:72px;
      text-align:center;
      padding:18px 0px;
      box-sizing:border-box;
      position:relative;
      &::after{
        content:"";
        background: #CACACA;
        width: 2px;
        height:36px;
        position: absolute;
        top:18px;
        left:190px;
      }
      img{
      width: 153px;
      height:36px;
      }
    }
    .content{

    }
  }
</style>
