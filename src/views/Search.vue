<template>
  <div>
    <van-nav-bar title="搜索" left-arrow @click-left="onClickLeft" />
    <van-search placeholder="输入关键字搜索" v-model="value" />
  </div>
</template>

<script>
  import api from '@/http/api'
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
    },
    initData(){
      console.log("zheh"+ this.movieId);
      console.log(this.$route.params.id);
      api.movieShow
              .selectMovieDetailById(this.$route.params.id)
              .then(res => {
                console.log(res);
                this.movieShowList = res.data.data;
              })
              .catch(err=>{

              })
    },
  },
  created() {
    this.initData()
  }
};
</script>

<style scoped></style>
