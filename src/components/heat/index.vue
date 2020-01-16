<template>
    <div class="text-left page-bottom">
        <div v-for="(item,index) in movieShowList" :key="index" class="margin-top10">
            <van-card
                    :thumb="item.img | setWH('128.180')"
            >
                <div slot="tags">
                    <div><span>观众评{{item.moviesc}}</span></div>
                    <div style="padding: 6px 0"><span>{{item.movieName}}</span></div>
                    <div><span>主演:{{item.star}}</span></div>
                    <div style="padding: 6px 0"><span>{{item.showInfo}}</span></div>
                </div>
                <div slot="footer">
                    <router-link :to="{ name: 'detail', params: { movieId: item.id }}">详情</router-link>
                    <!-- <van-button size="mini" @click="goToDetail(item.id)">详情</van-button> -->
                </div>
            </van-card>
        </div>
    </div>
</template>

<script>
    import api from '@/http/api'
    export default {
        name: "index",
        data(){
            return{
                movieShowList: []
            }
        },
        created(){
            this.initData()
        },
        methods: {
            initData(){
                api.movieShow
                    .list()
                    .then(res => {
                        console.log(res);
                        this.movieShowList = res.data.data;
                    })
                    .catch(err=>{

                    })
            },
            goToDetail(movieId){
                console.log(movieId);

                this.$router.push('/detail/'+ movieId);
            }
        }
    }
</script>

<style scoped>

</style>
