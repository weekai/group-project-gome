<template>
  <div class="firstChoose">

  </div>
</template>

<script>
  import {getFirstChoose} from '@/api/index.js'
  export default{
    created(){
      getFirstChoose().then((data)=>{
        console.log(data)
      })
    }
  }
</script>

<style>
</style>
