<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
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
