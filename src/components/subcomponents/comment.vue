<!-- 评论子组件 -->
<template>
	<div class='cmt-container'>
		<h3>发表评论</h3>
		<hr>
		<textarea maxlength="120" placeholder="请输入吐槽的内容(最多120字)" v-model="Tarea"></textarea>
		<mt-button type="primary" size="large" @click.native='addcom'>发表评论</mt-button>
		
		<div class="cmt-table">
			<div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
				<div class="cmt-title">
					<span>#{{ item.id }}&nbsp;&nbsp;用户：匿名</span><span>发表时间：2019-03-07 15:18:20</span>
				</div>
				<div class="cmt-body">
					{{ item.url }}
				</div>
			</div>

		</div>
		<!-- 没有好的接口不写了 -->
		<mt-button type="danger" size="large" plain>加载更多</mt-button>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				Tarea:"",
				comments:[]
			}
		},
		created(){
			this.getComments()
		},
		methods:{
			getComments(){
				this.$axios({url:'http://www.liulongbin.top:3005/api/getlunbo',method:'get'}).then(body=>{
					if(body.data.status === 0){
						this.comments = body.data.message
					}else{
						Toast({
						  message: '获取评论失败',
						  position: 'bottom',
						  duration: 2000
						});
					}
				})
			},
			addcom(){
				if(this.Tarea.trim() == ""){
					return Toast("评论不能为空")
				}
				var cmt = { "id":4,"url":"222"}
				this.comments.unshift(cmt)
			}
		},
		props:["pageID"]
	}
</script>

<style lang="scss" scoped>
	.cmt-container{
		h3{font-size: 18px;}
		textarea{font-size: 14px;margin: 0;height: 85px;}
		.cmt-table{
			.cmt-item{
				font-size: 13px;
				margin: 10px 0;
				.cmt-title{
					color: #fff;
					line-height: 35px;background-color: coral;display: flex;justify-content: space-between;margin-top: 5px;padding: 0 5px;
				}
				.cmt-body{
					text-indent: 20px;
					line-height: 25px;
				}
			}
		}
	}
</style>
