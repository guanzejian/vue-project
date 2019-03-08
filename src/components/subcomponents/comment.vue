<!-- 评论子组件 -->
<template>
	<div class='cmt-container'>
		<h3>发表评论</h3>
		<hr>
		<textarea maxlength="120" placeholder="请输入吐槽的内容(最多120字)" v-model="Tarea"></textarea>
		<mt-button type="primary" size="large" @click.native='addcom'>发表评论</mt-button>
		
		<div class="cmt-table">
			<div class="cmt-item" v-for="item in comments" :key="item.id">
				<div class="cmt-title">
					<span>#{{ item.id }}&nbsp;&nbsp;用户：匿名</span><span>发表时间：{{ Date.now() | dataFormat }}</span>
				</div>
				<div class="cmt-body">
					{{ item.url }}
				</div>
			</div>

		</div>
		<!-- 没有好的接口不写了 -->

		<button type="button" class="button">加载更多</button>
	
	
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				Tarea:"",
				comments:[],
				id:4
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
			// 模拟数据，渲染
			addcom(){
				
				 var uid = this.id++;
				if(this.Tarea.trim() == ""){
					return Toast("评论不能为空")
				}
				var cmt = { "id": uid,"url":this.Tarea}
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
					box-shadow: 0 3px 3px #999 inset ;
					line-height: 35px;background-color: coral;display: flex;justify-content: space-between;margin-top: 5px;padding: 0 5px;
				}
				.cmt-body{
					text-indent: 20px;
					line-height: 25px;
				}
			}
		}
		.button {
			outline: 0;
			width: 100%;
			display: block;
			color: #9fa8b0;
			font-weight: bold;
			text-shadow: 1px 1px #1f272b;
			border: 1px solid #1c252b;
			border-radius: 3px;
			-moz-border-radius: 3px;
			-webkit-border-radius: 3px;
			background: #232B30; /* old browsers */
			background: -moz-linear-gradient(top, #3D4850 3%, #313d45 4%, #232B30 100%); /* firefox */
			background: -webkit-gradient(linear, left top, left bottom, color-stop(3%,#3D4850), color-stop(4%,#313d45), color-stop(100%,#232B30)); /* webkit */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3D4850', endColorstr='#232B30',GradientType=0 ); /* ie */
			box-shadow: 1px 1px 1px rgba(0,0,0,0.2); /* CSS3 */
			-moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.2); /* Firefox */
			-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.2); /* Safari, Chrome */
		}
		.button:hover {
			color: #fff;
			background: #4C5A64; /* old browsers */
			background: -moz-linear-gradient(top, #4C5A64 3%, #404F5A 4%, #2E3940 100%); /* firefox */
			background: -webkit-gradient(linear, left top, left bottom, color-stop(3%,#4C5A64), color-stop(4%,#404F5A), color-stop(100%,#2E3940)); /* webkit */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4C5A64', endColorstr='#2E3940',GradientType=0 ); /* ie */
		}
		.button:active {
			background-position: 0 top;
			position: relative;
			top: 1px;
			color: #fff;
			padding: 6px 12px 4px;
			background: #20282D; /* old browsers */
			background: -moz-linear-gradient(top, #20282D 3%, #252E34 51%, #222A30 100%); /* firefox */
			background: -webkit-gradient(linear, left top, left bottom, color-stop(3%,#20282D), color-stop(51%,#252E34), color-stop(100%,#222A30)); /* webkit */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#20282D', endColorstr='#222A30',GradientType=0 ); /* ie */
			-moz-box-shadow: 1px 1px 1px rgba(255,255,255,0.1); /* Firefox */
			-webkit-box-shadow: 1px 1px 1px rgba(255,255,255,0.1); /* Safari, Chrome */
			box-shadow: 1px 1px 1px rgba(255,255,255,0.1); /* CSS3 */
		}

	}
</style>
