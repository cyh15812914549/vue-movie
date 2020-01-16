<template>
    <div>
        <Header title="电影"></Header>
        <div class="vue-flex">
            <div style="flex: 6">
                <van-tabs v-model="topTabName">
                    <van-tab title="地区" name="city"></van-tab>
                    <van-tab title="正在热映" name="heat"></van-tab>
                    <van-tab title="即将上映" name="soon"></van-tab>
                </van-tabs>
            </div>
            <div class="vue-flex-item xy-center" @click="goToSearch">
                <van-icon name="search"/>
            </div>
        </div>
        <div>
            <City v-if="topTabName === 'city'"></City>
            <Heat v-else-if="topTabName === 'heat'"></Heat>
            <Soon v-else-if="topTabName === 'soon'"></Soon>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import City from '../components/city'
    import Heat from '../components/heat'
    import Soon from '../components/soon'
    import Header from '../components/header'
    export default {
        data(){
            return{
                topTabName: 'city',
                bottomTabName: 'movie'
            }
        },
        name: "Movie",
        components: {
            City,Heat,Soon,Header
        },
        methods: {
            goToSearch(){
                this.$router.push('/search')
            }
        }
    };
</script>

<style scoped>
    .title {
        background-color: #42b983;
        padding: 15px;
    }
</style>
