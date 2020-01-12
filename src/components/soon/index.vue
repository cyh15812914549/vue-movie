<template>
    <div class="text-left page-bottom">
        <div v-for="(item,index) in 10" :key="index" class="margin-top10">
            <van-card
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
                <div slot="tags">
                    <div><span>观众评9.6</span></div>
                    <div style="padding: 6px 0"><span>电影名字</span></div>
                    <div><span>主演</span></div>
                    <div style="padding: 6px 0"><span>今天</span></div>
                </div>
                <div slot="footer">
                    <van-button size="mini">预售</van-button>
                </div>
            </van-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
