<template>
    <div class="page-bottom text-left">
<!--        <van-index-bar>-->
<!--            <van-index-anchor index="A"/>-->
<!--            <van-cell title="文本"/>-->
<!--            <van-cell title="文本"/>-->
<!--            <van-cell title="文本"/>-->
<!--            <van-index-anchor index="A"/>-->
<!--            <van-cell title="文本"/>-->
<!--            <van-cell title="文本"/>-->
<!--            <van-cell title="文本"/>-->

<!--        </van-index-bar>-->
        <van-index-bar style="width: 100%;">
            <div v-for="(item,index) in cityList" :key='index'>
                <van-index-anchor :index="item.index" />
                <div v-for="list in item.list" :key='list.id'>
                    <van-cell :title="list.name" @click="deliveryCity(list.name)"/>
                </div>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
    import api from '@/http/api'

    export default {
        name: "index",
        data(){
            return{
                cityList: [],
            }
        },
        created() {
            this.initData()
        },
        methods: {
            initData() {
                api.city
                    .list()
                    .then(res => {
                        let citys = res.data.data;
                        //[ { index : 'A' , list : [{ nm : '阿城' , id : 123 }] } ]
                        let {
                            cityList
                        } = this.formatCityList(citys);
                        cityList.splice(0,1);

                        this.cityList = cityList;
                    }).catch(err => {
                        console.log(err)
                });
            },
            deliveryCity(city){
                Bus.$emit('goCity',city);
            },

            formatCityList(cities) {
                var cityList = [];

                for (var i = 0; i < cities.length; i++) {

                    var firstLetter = cities[i].pinyin.substring(0, 1).toUpperCase();

                    if (toCom(firstLetter)) { //新添加index
                        cityList.push({
                            index: firstLetter,
                            list: [{
                                name: cities[i].name,
                                id: cities[i].id
                            }]
                        });
                    } else { //累加到已有index中
                        for (var j = 0; j < cityList.length; j++) {
                            if (cityList[j].index === firstLetter) {
                                cityList[j].list.push({
                                    name: cities[i].name,
                                    id: cities[i].id
                                });
                            }
                        }
                    }
                }
                cityList.sort((n1, n2) => {
                    if (n1.index > n2.index) {
                        return 1;
                    } else if (n1.index < n2.index) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                function toCom(firstLetter) {
                    for (var i = 0; i < cityList.length; i++) {
                        if (cityList[i].index === firstLetter) {
                            return false;
                        }
                    }
                    return true;
                }
                return {
                    cityList
                };
            },
        }
    }
</script>

<style scoped>

</style>
