<template>
    <div>
        <div>
            <van-tabbar v-model="bottomTabName">
                <van-tabbar-item name="movie" icon="tv-o">电影</van-tabbar-item>
                <van-tabbar-item name="cinema" icon="desktop-o">影院</van-tabbar-item>
                <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
            </van-tabbar>
        </div>
        <div>
            <Movie v-if="bottomTabName === 'movie'"></Movie>
            <Cinema v-if="bottomTabName === 'cinema'"></Cinema>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Movie from '../views/Movie'
    import Cinema from '../views/Cinema'

    export default {
        data(){
            return{
                bottomTabName: 'movie'
            }
        },
        name: "home",
        components: {
            Movie,Cinema
        }
    };
</script>

<style scoped>
    .title {
        background-color: #42b983;
        padding: 15px;
    }
</style>
