<template>
  <div class="lxrstyle" :class="navBarFixed == true ? 'navBarWrap' :''">
    <ly-tab v-model="selectedId" :items="items" :options="options"></ly-tab>
  </div>
</template>
<script>
export default {
  methods: {
    selectChange() {
      console.log(this.selectedId);
    }
  },
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "内购福利" },
        { label: "用卷专区" },
        { label: "4K智能" },
        { label: "品牌专区" },
        { label: "卧室电脑" },
        { label: "客厅电脑" }
      ],
      options: {
        activeColor: "#f20c59"
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      navBarFixed: ""
    };
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 354.27) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.lxrstyle {
  position: relative;
  color: black;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  /* display: -webkit-box;
  display: -ms-flexbox; */
  display: flex;
  border-bottom: 1px solid #eee;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>