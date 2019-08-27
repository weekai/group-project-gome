<template>
    <div class="guessLike">
        <img class="t-img" src="https://gfs10.gomein.net.cn/wireless/T1Go_jBjD_1RCvBVdK_1065_129.png" alt="">
        <div class="likes">

        </div>
    </div>
</template>
<script>
import { getGuessLike } from '@/api/index.js'
export default {
    created(){
        getGuessLike().then((data)=>{
            // console.log(data);
        })
    }
}
</script>
<style lang="less" scoped>
  .t-img{
    width: 100%;
  }
</style>
