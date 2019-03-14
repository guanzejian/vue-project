<template>
	<div class="goodsinfo-container">
		<!-- 商品轮播图 -->
			<div class="mui-card">
				<swiper :content="img" :fullscreen="true"></swiper>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">商品的名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价：<del>￥1080</del>&nbsp;&nbsp;销售价：<span class="now_price">￥999</span>
						</p>
						<p>购买数量: <numbox></numbox>
						<!-- 由于number-box 在购物车中多个页面都有，封装成一个组件吧 -->
							
						</p>
						
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small">加入购物车</mt-button>
						
						</p>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
			<!-- 商品购买区域 -->
			<div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
				
			</div>
	</div>
</template>

<script>
	// 导入 子组件 swiper、 numberbox
	import swiper from '../subcomponents/Swiper.vue'
	import numbox from '../subcomponents/goods_numbox.vue'
	export default {
		data(){
			return {
				img:[],
			}
		},
		created(){
			this.getSwipe()
		},
		methods:{
			getSwipe(){
				this.$axios({url:"http://www.liulongbin.top:3005/api/getlunbo",method:"get"}).then(body=>{
					// console.log(body.data)
					if(body.data.status === 0){
						this.img = body.data.message
					}
				})
			
			}
		},
		components:{
			swiper,
			numbox
		}
	}
	
</script>

<style lang="scss" scoped>
	.goodsinfo-container{
		background-color: #eee;
		overflow: hidden;
		.now_price{
			color: red;
			font-weight: 700
		}
	}
	
</style>
