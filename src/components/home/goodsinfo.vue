<template>
	<div class="goodsinfo-container">
		<!-- 商品轮播图 -->
			<div class="mui-card">
				<swiper :content="img" :fullscreen="true"></swiper>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.name }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价：<del>￥1080</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.id }}</span>
						</p>
						<p>购买数量: 
							<numbox></numbox>
						<!-- 由于number-box 在购物车中多个页面都有，封装成一个组件吧 -->
						</p>
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small">加入购物车</mt-button>
						
						</p>
					</div>
				</div>
				
			</div>
			<!-- 商品购买区域 -->
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：</p>
						<p>库存情况：</p>
						<p>上架时间：{{ goodsinfo.ctime | dataFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
					<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>

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
				id:this.$route.params.id,
				img:[],
				goodsinfo:{}
			}
		},
		created(){
			this.getSwipe();
			this.getGoodsInfo();
		},
		methods:{
			getSwipe(){
				this.$axios({url:"http://www.liulongbin.top:3005/api/getlunbo",method:"get"}).then(body=>{
					// console.log(body.data)
					if(body.data.status === 0){
						this.img = body.data.message
					}
				})
			},
			getGoodsInfo(){
				// 																这里由于没有对应的接口，采用json数组中的一条数据，模拟动态域名id
				this.$axios({url:"http://kerys.pythonanywhere.com/api/getprodlist/",method:"get"}).then(body=>{
					console.log(body.data)
					if(body.data.status === "success"){
						this.goodsinfo = body.data.message[this.id -1]
					}
				})
			},
			// 编程式导航
			goDesc(id){
				this.$router.push({name:"goodsdesc",params:{id}})
			},
			goComment(id){
				this.$router.push({name:"goodscomment",params:{id}})
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
		padding-bottom: 50px;
		.now_price{
			color: red;
			font-weight: 700
		}
		
		.mui-card-footer{
			display: block;
			button{margin: 15px 0;}
		}
	}
	
</style>
