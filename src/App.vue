<template>
  <div id="app">
    <router-view />
  </div>

</template>

<script>
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
}
body {
  // 解决unable to preventDefault
  touch-action: none;
  width: 100vw;
  overflow: hidden;
  padding-left: calc(100vw - 100%);
}
</style>



