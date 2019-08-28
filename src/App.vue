<template>
  <div id="app">
    <router-view />
  </div>

</template>

<script>
import topBar from "./components/common/topBar"

export default {
  name: "App",
  components: {}
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
}
#app{
  width: 100%;
  height: 100%;
}
// .ly-tab-item-label{
//   color:#333;
// }

.ly-tab-item{
color:#333;
}
</style>
