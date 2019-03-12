<template>
	<div>
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' :'']" v-for="item in cates" :key="item.id">
						{{ item.id }}
						<!-- 此处接口没有title项，用id 代替 -->
					</a>
					
				</div>
			</div>
		</div>
		<!-- 图片列表内容 -->
		<ul class="photo-list">
		  <router-link tag='li' v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id">
			<img v-lazy="item.img" >
		  </router-link>
		</ul>
	</div> 
</template>

<script>
	// 导入mui的js文件
	import mui from '../../mui/js/mui.min.js'

	export default{
		data(){
			return {
				cates:[],
				list:[]
			}
		},
		created(){
			this.getAllCategory()
			
		},
		mounted(){  // 当组件中的dom结构被渲染好并放到页面中后，会执行这个 钩子函数
					// 如果要操作元素，最好用mounted，这里面的dom元素是最新的
 			mui('.mui-scroll-wrapper').scroll({
 				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
 			})
		}, //  http://www.liulongbin.top:3005/api/getlunbo
		methods:{
			getAllCategory(){
				this.$axios({
					url:"http://www.liulongbin.top:3005/api/getlunbo",method:"get"
				}).then(body=>{
					// console.log(body.data)
					if(body.data.status === 0){
						// body.data.message.unshift({title:"全部",id:0})
						this.cates = body.data.message
						this.list = body.data.message 
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	*{touch-action: pan-y;margin: 0;padding: 0;list-style: none}
	.photo-list{
		text-align: center;
		padding:10px;
		padding-bottom: 0;
		li{
			background: #ccc;
			margin-bottom:10px;
			box-shadow:0 0 9px red;
		}
		img{
			width: 100%;
			height: 300px;
			vertical-align: middle;
		}
		img[lazy="loading"] {
		  width: 40px;
		  height: 300px;
		  margin: auto;
		}
	}
	
</style>
