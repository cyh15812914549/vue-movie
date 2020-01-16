<template>
	<div id="detailContrainer" class="slide-enter-active">
        <div>
            <van-nav-bar
                title="影片详情"
                left-arrow
               @click-left="onClickLeft"
               style="background-color:#096;color:#fff;"
            />
        </div>
        <!-- <div v-for="(item,index) in movieShowList" :key="index" class="margin-top10">
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
                    <van-button size="mini" @click="goToDetail">详情</van-button>
                </div>
            </van-card>
        </div>       -->
		 <!-- <div id="content" class="contentDetail" >
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img"> -->
						<!-- <img :src="detailMovie.movie_img | setWH('148.208')"  alt=""> -->
					<!-- </div>
					<div class="detail_list_info">
						<h2>{{detailMovie.movie_name}}</h2>
						<p>{{detailMovie.movie_ename}}</p>
						<p>{{detailMovie.movie_score}}</p>
						<p>{{detailMovie.movie_type}}</p>
						<p>{{detailMovie.movie_src}} / {{detailMovie.movie_dur}}分钟</p>
						<p>{{detailMovie.movie_releasetime}}</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>{{detailMovie.movie_detail}}</p>
			</div>

		</div>  -->
	</div>
</template>

<script>
 import api from '@/http/api'
	export default {
		name: 'Detail',
		data() {
			return {
                movieShowList:{}
			}
        },
        props: ['movieId'],
		created(){
            this.initData()
        },
		methods: {
             onClickLeft() {
                 this.$router.back();
             },
             initData(){
                 console.log("zheh"+ this.movieId);
                api.movieShow
                    .selectMovieDetailById(this.movieId)
                    .then(res => {
                        console.log(res);
                        this.movieShowList = res.data.data;
                    })
                    .catch(err=>{

                    })
            },
		}

	}
</script>

<style scoped>
	#detailContrainer {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		min-height: 100%;
		background: white;
	}

	#detailContrainer.slide-enter-active {
		animation: .3s slideMove;
	}

	@keyframes slideMove {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(0);
		}
	}

	#content.contentDetail {
		display: block;
		margin-top: 45px;
	}

	#content .detail_list {
		height: 200px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.detail_list .detail_list_bg {
		width: 100%;
		height: 100%;
		background: 0 40%;
		filter: blur(20px);
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
	}

	.detail_list .detail_list_filter {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: rgb(235,245,205);
		opacity: .55;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.detail_list .detail_list_content {
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}

	.detail_list .detail_list_img {
		width: 108px;
		height: 150px;
		border: solid 1px #f0f2f3;
		margin: 20px;
	}

	.detail_list .detail_list_img img {
		width: 100%;
		height: 100%;
	}

	.detail_list .detail_list_info {
		margin-top: 20px;
	}

	.detail_list .detail_list_info h2 {
		font-size: 20px;
		color: black;
		font-weight: normal;
		line-height: 40px;
	}

	.detail_list .detail_list_info p {
		color: white;
		line-height: 20px;
		font-size: 14px;
		color: #ccc;
	}

	#content .detail_intro {
		padding: 10px;
	}

	#content .detail_player {
		margin: 20px;
	}

	.detail_player .swiper-slide {
		width: 70px;
		margin-right: 20px;
		text-align: center;
		font-size: 14px;
	}

	.detail_player .swiper-slide img {
		width: 100%;
		margin-bottom: 5px;
	}

	.detail_player .swiper-slide p:nth-of-type(2) {
		color: #999;
	}
</style>
