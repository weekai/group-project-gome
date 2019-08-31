<template>
  <div class="good">
    <!-- top banner -->
    <top-banner></top-banner>
    <!--  -->
    <use-good-info></use-good-info>
    <use-good-panel></use-good-panel>
  </div>
</template>

<script>
import TopBanner from "./goodTopBanner";
import UseGoodInfo from "./useGoodInfo";
import UseGoodPanel from "./useGoodpanel";

export default {
  components: { TopBanner, UseGoodInfo, UseGoodPanel }
};
</script>

<style lang="less" scoped>

</style>