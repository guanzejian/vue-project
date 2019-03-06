<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,i) in newslist" :key="item.i">
				<router-link :to="'/home/newsinfo/'+i">
					<img class="mui-media-object mui-pull-left" src="../../images/grid_03.png">
					<div class="mui-media-body">
						<p class="titles ">{{ item.title }}</p>
						<p class='mui-ellipsis'>
							<span>发表时间：{{ item.pubdate | dataFormat("YYYY-MM-DD") }}</span>
							<span>点击：{{ i }}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				newslist:[]
			}
		},
		created(){
			this.getNewsList()
		},
		methods:{
			getNewsList(){
				this.$axios({url:'http://api.komavideo.com/news/list',method:"post"}).then(body=>{
					// console.log(body.data)
					if(body.data !== null && body.data !== undefined){
						this.newslist = body.data
						console.log(this.newslist)
					}else{
						Toast("加载失败！")
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mui-table-view{
		li{ 
			.titles{font-size: 14px;font-weight: 600;color: #3D3E36;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}
			.mui-ellipsis{
				font-size: 12px;
				color: #999;
				display: flex;
				justify-content: space-between
			}
		}
	}
</style>
