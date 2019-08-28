<template>
  <div class="back-top">
    <a title="返回顶部"  href="javascript:void(0)"  class="back-top-a" @click="backTop" v-if="isShow">
        <img src="../images/backTop.png" alt="">
    </a>
  </div>
</template>
<script>
export default {
    data () {
    return {
      isShow: false
    };
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop);
  },
  methods: {
    backTop () {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 18);
    },
    scrollToTop () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > 80) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.back-top {
    position: fixed;
    right: 20px;
    bottom: 30px;
    z-index: 199;
    .back-top-a {
      cursor: pointer;
      display: block;
      width: 90px;
      height: 90px;
      img{
          width: 100%;
      }
    }
  }
</style>