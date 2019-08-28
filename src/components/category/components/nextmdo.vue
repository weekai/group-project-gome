<template>
  <div class="r-content">
    <ul>
      <li v-for="(item,index) in  bogList " :key="index">
        <h3>{{item.title}}</h3>
        <ul>
          <li v-for="(i,index) in item.data" :key="index">
            <a :href="i.hf">
              <img :src="i.img" />
              <span>{{i.name}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: "",
      bagList: [],
      minList: []
    };
  },
  created() {
    getCateList().then(data => {
      this.cateList = data.result.data;
      this.$nextTick(() => {
        new BScroll(".wrapper");
      });
    });
  }
};
</script>
