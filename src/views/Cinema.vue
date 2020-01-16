<template>
    <div>
        <Header title="影院"></Header>
        <div class="cinema_body text-left">
            <ul>
                <li v-for="item in 5" :key="item">
                    <div>
                        <span>测试影院</span>
                        <span class="q"><span class="price">50</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>测试地址</span>
                        <span>测测公里</span>
                    </div>
                </li>
            </ul>
        </div>
		
    </div>
</template>

<script>
    
    import Header from "../components/header/index"
    export default {
        name: "Cinema",
		components:{
			Header
        },
        data(){
            return{

            }
        },
        methods:{
            initData(){
                api.movieShow
                    .list()
                    .then(res => {
                        console.log(res);
                        // this.movieShowList = res.data.data;
                    })
                    .catch(err=>{

                    })
                },
        },
        created(){
            this.initData()
        },

    }
</script>

<style scoped>
    .title {
        background-color: #42b983;
        padding: 15px;
    }
    .cinema_body {
        flex: 1;
        overflow: auto;
    }

    .cinema_body ul {
        padding: 20px;
    }

    .cinema_body li {
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
    }

    .cinema_body div {
        margin-bottom: 10px;
    }

    .cinema_body .q {

        font-size: 11px;
        color: #f03d37;
    }

    .cinema_body .price {
        font-size: 16px;

    }

    .cinema_body .address {
        font-size: 13px;
        color: #666;
    }

    .cinema_body .address span:nth-of-type(2) {
        float: right;
    }
</style>
