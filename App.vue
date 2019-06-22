<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.subMenu{
	width:100%;
	height:100upx;
	position: fixed;
	z-index: 9;
	top:80upx;
	left:0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.subItem{
	height:100upx;
	line-height: 100upx;
	padding:0 30upx; font-size: 32upx;
}
.subItemCur{
	height:100upx;
	line-height: 100upx;
	padding:0 30upx; font-size: 36upx;
	background: #ccc;
}
</style>
