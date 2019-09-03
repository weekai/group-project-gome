<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import topBar from "./components/common/topBar";

export default {
  name: "App",
  components: {},
  methods: {
    add(){
      Vue.set()
    }
  },
  destroyed () {
    localStorage.removeItem("isLogin");
  }
};
</script>

<style lang="less">
@import url("../static/style/reset.css");
@import url("../static/style/font.css");

html {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}
body {
  // 解决unable to preventDefault
  touch-action: none;
  width: 100vw;
  overflow: hidden;
  padding-left: calc(100vw - 100%);
  height: 100%;
  background: #f2f2f2;
  // padding-top: 90px;
}
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}

// 移动端隐藏滚动条
#app::-webkit-scrollbar {
  display: none;
}
#app::-webkit-scrollbar {
  width: 0px;
}

// 懒加载
img[lazy="loading"] {
  width: 100px;
  background: url("./assets/images/loading.gif") no-repeat center;
  background-size: 100px;
  margin: auto;
}

//
.ly-tab-item {
  color: #333;
}
</style>
