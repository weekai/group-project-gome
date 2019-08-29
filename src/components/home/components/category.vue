<template>
  <div class="category">
      <ul>
          <li v-for= "(item,index) in clist" :key="index">
              <img :src="item.url" alt="">
              <p>{{item.title}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import { getNavShotcuts } from '@/api/index.js'
export default{
  created(){
    getNavShotcuts().then((data)=>{
      this.clist = data.result.data
    })
  },
  data(){
    return {
      clist:[]
    }
  }
}

</script>

<style lang="less" scoped>
  .category{
    padding:30px 0px;
      ul{
          display: flex;
          flex-wrap: wrap;
          li{
              width: 20%;
              text-align:center;
              margin-bottom:20px;
              img{
                  width: 156px;
              }
              p{
                margin-top: 12px;
                font-size: 24px;
              }
          }
      }
  }
</style>
