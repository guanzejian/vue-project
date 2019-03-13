<template>
	<div class="goodsinfo-container">
		<!-- 商品轮播图 -->
			<div class="mui-card">
				<swiper :content="img"></swiper>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
			
			<div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on January 18, 2016</p>
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
		<!-- 商品购买区域 -->
	</div>
</template>

<script>
	// 导入 子组件 swiper
	import swiper from '../subcomponents/Swiper.vue'
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
					if(body.data.status === 0){
						this.img = body.data.message
					}
				})
			
			}
		},
		components:{
			swiper
		}
	}
	
</script>

<style lang="scss" scoped>
	.goodsinfo-container{
		background-color: #eee;
		overflow: hidden;
	}
</style>
