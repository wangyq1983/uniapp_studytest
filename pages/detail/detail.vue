<template>
	<view style="padding:20upx;font-size: 32upx;">
		{{detail.name}}
		<br />
		<hr />
		<br />
		{{detail.summary}}
		<br />
		<hr />
		<br />
		{{detail.address}}
		<view @tap="fenxiang">分享</view>
	</view>
</template>

<script>
	import * as tools from "../../util/request.js"
	export default {
		data() {
			return {
				detail: {}
			}
		},
		methods: {
			yancao(res) {
				console.log(res.data.data.school);
				this.detail = res.data.data.school
			},
			fenxiang() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		},
		onLoad(options) {
			console.log(options);
			var params = {
				schoolId: options.id
			}
			tools.doRequest(tools.webapi.schoolDetail, params, this.yancao)
		}
	}
</script>

<style>

</style>
