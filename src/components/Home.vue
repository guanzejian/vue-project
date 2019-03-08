<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="3000">
		  <mt-swipe-item v-for='item in content' :key='item.id'>
			  <img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<!-- grid -->
			<ul class="mui-table-view mui-grid-view mui-grid-9 myUl">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
						<img class="imgs" src="../images/grid_03.png" alt="">
				</router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
						<img class="imgs" src="../images/grid_05.png" alt="">
				</router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img class="imgs" src="../images/grid_07.png" alt="">
						</a></li>
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
		}
	}
</script>

<style lang="scss" scoped>
	html,body{margin: 0;padding: 0}
	.mint-swipe{
		height: 150px;
		.mint-swipe-item{
			&:nth-child(1){
				background: greenyellow;
			}
			&:nth-child(2){
				background: deepskyblue;
			}
			&:nth-child(3){
				background: skyblue
			}
			img{width: 100%;height: 100%}
		}
	}
	
	.myUl{
		background: #fff;
		li{
			padding: 0 !important;
			a{
				padding: 0 !important;
				.imgs{
					width: 100%;
				}
			}
		}
		
		
	}
</style>
