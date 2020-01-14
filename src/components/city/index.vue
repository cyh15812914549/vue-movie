<template>
    <div class="page-bottom">
        <van-index-bar>
            <van-index-anchor index="A"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-index-anchor index="A"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>

            <van-index-anchor index="A"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-index-anchor index="A"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-index-anchor index="A"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>
            <van-cell title="文本"/>


        </van-index-bar>
    </div>
</template>

<script>
    import api from '@/http/api'

    export default {
        name: "index",
        created() {
            this.initData()
        },
        methods: {
            initData() {
                api.city
                    .list()
                    .then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
