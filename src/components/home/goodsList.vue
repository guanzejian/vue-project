<template>
	<div class="goods-list">
		<!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id"  :to="'/home/goodsinfo/'+item.id" tag="div">
			<img :src="item.img" alt="手机图片">
			<h1 class="title">小米note7</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥888</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link> -->
		
		<!-- 在网页中有两种跳转方式 -->
		<!-- 方式1 、 使用a标签 的形式跳转，标签跳转 -->
		<!-- 方式2、 使用window.location.href的形式， 叫做， 编程式跳转 -->
		<div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
			<img :src="item.img" alt="手机图片">
			<h1 class="title">小米note7</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥888</span>
					<span class="old">￥999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){  // 是往自己组件内部，挂载一些私有数据的
			return {
				pageindex:1  ,// 分页的页数
				goodslist: [], // 存放商品列表的数组
			}
		},
		created(){  // 组件中的vm实例创建之后的钩子函数
			this.getGoodsList()
		},
		methods:{
			// 获取商品列表
			getGoodsList(){
				// 接口 中带页码的，就在url中拼接 pageindex 
				this.$axios({url:'http://www.liulongbin.top:3005/api/getlunbo',method:'get'}).then(body=>{
					if(body.data.status === 0){
						this.goodslist = body.data.message
					}
				})
			},
			// 编程式跳转
			goDetail(id){
				this.$router.push('/home/goodsinfo/'+id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-list{
		padding:0 5px;
		display: flex;
		flex-wrap: wrap;
		flex:2;
		justify-content: space-between;
		.goods-item{
			width: 49%;
			border: 1px solid #ccc;
			margin: 5px 0;
			padding: 2px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 180px;
			img{width: 100%;}
			.title{font-size: 18px;}
			.info{
				background-color: #eee;
				
				p{
					margin: 0;
					padding: 5px;
				}
				.price{
					.now{color: red;font-weight: 700;font-size: 16px;}
					.old{text-decoration: line-through;font-size: 12px;margin-left: 10px;}
				}
				.sell{
					display: flex;
					justify-content: space-between;
					font-size: 13px;
				}
			}
		}
	}
</style>
