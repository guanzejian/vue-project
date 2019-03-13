<template>
	<div class="newsinfo-container">
		<mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
		  <!-- <router-link to="" slot="left"> -->
			<mt-button icon="back" slot="left"  @click="goback()">返回</mt-button>
		  <!-- </router-link> -->
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<h3 class="title">{{ newsinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间:{{ newsinfo.pubdate | dataFormat }}</span><span>点击次数:{{ id }}</span>
		</p>
		<hr>
		<div class="content" v-html="newsinfo.content"></div>
		<br>
		<comment-box :pageID="this.id"></comment-box>
	</div>
</template>

<script>
	import comment from '../subcomponents/comment.vue'
	export default{
		data(){
			return {
				id:this.$route.params.id,
				newsinfo:{},
				
			}
		},
		created(){
			this.getNewsInfo()
		},
		methods:{
			getNewsInfo(){
				this.$axios({url:'http://api.komavideo.com/news/list',method:'post'}).then(body=>{
					// console.log(body.data[this.id].title)
					this.newsinfo = body.data[this.id]
				})
			},
			goback(){
				this.$router.go(-1)
			}
		},
		components:{
			"comment-box":comment
		}
	}
</script>

<style lang="scss" scoped>
	.newsinfo-container{
		.mint-header{z-index: 100000}
		padding:0 4px;
		margin-bottom: 60px;
		.title{font-size: 16px;text-align: center;margin: 15px 0;color: red}
		.subtitle{font-size: 14px;color: deepskyblue;display: flex;justify-content: space-between;}
	}
</style>
