<template>
    <div class="text-left page-bottom">
        <div v-for="(item,index) in comingList" :key="index" class="margin-top10">
            <van-card
                    :thumb="item.img | setWH('128.180')"
            >
                <div slot="tags">
                    <div><span>{{item.movieName}}</span></div>
                    <div style="padding: 6px 0"><span>{{item.movieThink}}人想看</span></div>
                    <div><span>主演:{{item.movieStar}}</span></div>
                    <div style="padding: 6px 0"><span>{{item.movieTime}}上映</span></div>
                </div>
                <div slot="footer">
                    <van-button size="mini">预售</van-button>
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
                comingList: []
            }
        },
        created(){
            this.initData()
        },
        methods: {
            initData(){
                api.coming
                    .list()
                    .then(res => {
                        console.log(res);
                        this.comingList = res.data.data;
                    })
                    .catch(err=>{

                    })
            }
        }
    }
</script>

<style scoped>

</style>
