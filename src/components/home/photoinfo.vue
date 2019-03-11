<template>
	<div class="container">
		<h3>{{ photoinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间:{{ photoinfo.pubdate | dataFormat }}</span>
			<span>点击：{{ photoinfo.copyright }}次</span>
		</p>
		<hr>
		<!-- 缩略图区域 -->
		
		<!-- 图片内容区域 -->
		<div class="content">{{ photoinfo.content }}</div>
		<!-- 评论子组件 -->
		<comment-box :id='this.id'></comment-box>
	</div>
</template>

<script>
	import comment from "../subcomponents/comment.vue"
	export default{
		data(){
			return {
				id:this.$route.params.id,
				photoinfo:{},
				
			}
		},
		created(){
			this.getphotoinfo()
		},
		methods:{
			getphotoinfo(){
				this.$axios({url:"http://api.komavideo.com/news/list",method:"post"}).then(body=>{
					console.log(body.data[this.id-1])
					this.photoinfo = body.data[this.id-1]
					
				})
			}
		},
		components:{
			"comment-box":comment
		}
		
	}
</script>

<style lang="scss" scoped>
	.container{
		h3{padding: 5px;}
		width: 100%;
		padding: 5px;
		.subtitle{
			display: flex;
			justify-content: space-between;
		}
		.content{
			font-size: 14px;
			color: #333
		}
	}
</style>
