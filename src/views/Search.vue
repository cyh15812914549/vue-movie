<template>
  <div>
    <van-nav-bar title="搜索" left-arrow @click-left="onClickLeft" />
    <van-search placeholder="输入关键字搜索" v-model="value" />
  </div>
</template>

<script>
import api from "../server/api.js";
export default {
  name: "Search",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  created() {
    api.list().then(res => {
      console.log(res)
    });
  }
};
</script>

<style scoped></style>
