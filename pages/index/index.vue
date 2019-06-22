<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="subMenu">
			<view :class="curId == index?'subItemCur':'subItem'" v-for="(item,index) in subMenu" :key="index" @tap="subMevent"
			 :data-id="index">
				<view class="">
					{{item}}
				</view>
			</view>
		</view>
		<view style="height:100upx;"></view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
		 :indicator-color="color" :indicator-active-color="curcolor">
			<swiper-item style="width:100%" class="swiperItem">
				<image src="/static/0.jpg" :mode="imgMode" class="swiperImg"></image>
			</swiper-item>
			<swiper-item style="width:100%" class="swiperItem">
				<image src="/static/1.jpg" :mode="imgMode" class="swiperImg"></image>
			</swiper-item>
		</swiper>
		<view class="">
			<view class="" v-if="curId == 0">
				<view class="" v-for="(item,index) in schoolList" :key="index" @tap="jumpdetail" :data-id="item.id">
					<view class="listItem">
						{{item.id}}--{{item.name}}--{{item.address}}
					</view>
				</view>
			</view>
			<view class="" v-if="curId == 1">
				111111111
			</view>
			<view class="" v-if="curId == 2">
				222222222
			</view>
		</view>
		<view>


			<!-- <navigator url="aa/aa" hover-class="navigator-hover">
				原地1 navigator只能本目录下跳转
			</navigator> -->
		</view>
	</view>
</template>

<script>
	import * as tools from "../../util/request.js"
	export default {

		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				color: '#ccc',
				curcolor: '#fff',
				imgMode: 'scaleToFill',
				subMenu: [
					"重要通知", "行业新闻", "全省小组动态"
				],
				curId: 0,
				schoolList: []
			}
		},
		onLoad() {
			var params = {
				from: 1,
				count: 20
			}
			tools.doRequest(tools.webapi.schoolList, params, this.yancao)
		},
		methods: {
			yancao(res) {
				console.log(res);
				this.schoolList = res.data.data
			},
			jumpdetail(e) {
				console.log(e.currentTarget.dataset.id);
				uni.navigateTo({
					url: '../detail/detail?id=' + e.currentTarget.dataset.id
				});
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			subMevent(e) {
				console.log(e.currentTarget.dataset.id);
				this.curId = e.currentTarget.dataset.id

			}
		}
	}
</script>

<style>
	.swiper {
		width: 100%;
		height: 300upx;
	}

	.swiperItem {
		width: 100%;
		height: 300upx;
	}

	.swiperImg {
		width: 100%;
		height: 300upx;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.listItem {
		font-size: 28upx;
		margin-bottom: 20upx;
		width: 100%;
		text-align: left;
		padding: 10upx
	}
</style>
