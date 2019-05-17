<template>
	<div>
		<!-- 轮播图 -->
		<swiper :content="content"></swiper>
		<!-- grid -->
			<ul class="mui-table-view mui-grid-view mui-grid-9 myUl">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
						<img class="imgs" src="../images/grid_03.png" alt="">
						<span class="pos-ab">新闻列表</span>
				</router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
						<img class="imgs" src="../images/grid_05.png" alt="">
						<span class="pos-ab">相册</span>
				</router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodslist">
						<img class="imgs" src="../images/grid_07.png" alt="">
						<span class="pos-ab">商品列表</span>
						</router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_12.png" alt="">
						</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_13.png" alt="">
						</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_14.png" alt="">
						</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_18.png" alt="">
						</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_19.png" alt="">
						</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_20.png" alt="">
						</a></li>
			</ul> 
	</div>
</template>

<script>
	
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	
	import swiper from './subcomponents/Swiper.vue'
	export default{
		
		data(){
			return {
				content:''
			}
		},
		beforeCreate(){
			Indicator.open({
			  spinnerType:"triple-bounce"
			});
		},
		created(){
			this.$axios({url:'http://www.liulongbin.top:3005/api/getlunbo',method:'get'}).then(body=>{
				// console.log(body.data)
				Indicator.close();
				if(body.data.status === 0){
					this.content = body.data.message
					// Toast({message:'加载成功！',position:'middle',duration:'1000',iconClass: 'mui-icon mui-icon-checkmarkempty'});
				}else{
					Toast('加载失败');
				}
			})
		},
		components:{
			swiper
		}
	}
</script>

<style lang="scss" scoped>
	html,body{margin: 0;padding: 0}
	.mui-table-view.mui-grid-view .mui-table-view-cell{
		font-size: 28px !important;
	}
// 	.mint-swipe{
// 		height: 150px;
// 		.mint-swipe-item{
// 			&:nth-child(1){
// 				background: greenyellow;
// 			}
// 			&:nth-child(2){
// 				background: deepskyblue;
// 			}
// 			&:nth-child(3){
// 				background: skyblue
// 			}
// 			img{width: 100%;height: 100%}
// 		}
// 	}
	
	.myUl{
		background: #fff;
		li{
			padding: 0 !important;
			a{
				padding: 0 !important;
				width:100%;height:100%;
				color:#fff;
				.imgs{
					width: 100%;
					height:100%;
					display: inline-block;
				}
				.pos-ab{
					position: absolute;
					margin: auto;
					top: 0;left: 0;right: 0;bottom: 0;
					font-size:28px;
				}
			}
		}
	}
</style>
