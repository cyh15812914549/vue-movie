<template>
    <div>
        <div class="text-c title">
            <span>影院</span>
        </div>
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
    export default {
        name: "Cinema"
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
