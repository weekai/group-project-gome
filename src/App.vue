<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view />
  </div>
</template>

<script>
import topBar from "./components/common/topBar";

export default {
  name: "App",
  components: {
    topBar
  }
};
</script>

<style lang="less">
@import url("../static/style/reset.css");
@import url("../static/style/font.css");

html,
body {
  width: 100%;
  height: 100%;
}
</style>

