<template>
	<div class="goodsinfo-container">
		<!-- 利用动画实现小球进入购物车 ...>>  transition中，都是一些钩子函数-->
		<transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		>
			<div class="ball" v-show="ballflag" ref="ball"></div>
		</transition>
			
		<!-- 商品轮播图 -->
			<div class="mui-card">
				<swiper :content="img" :fullscreen="true"></swiper>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.name }} </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价：<del>￥1080</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.id }}</span>
						</p>
						<p>购买数量: 
							<numbox @getCount="getSelectedCount" :max="this.stock_num"></numbox>
						<!-- 由于number-box 在购物车中多个页面都有，封装成一个组件吧 -->
						</p>
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click='addToCar'>加入购物车</mt-button>
							<!--  分析： 如何实现加入购物车时候，拿到选择的数量 -->
							<!-- 1. 经过分析发现：按钮属于goodsinfo 页面， 数字属于numberbox 组件 -->
							<!-- 2.由于涉及到父子组件 嵌套-->
							<!-- 3.涉及到 子组件向父组件传值（事件调用机制） -->
							<!-- 4. 事件调用的本质，父向子传递方法，子调用 这个方法，同时把数据当作参数传递这个方法 -->
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
						<p>库存情况：{{ stock_num }}</p>
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
		props:['max'],
		data(){
			return {
				id:this.$route.params.id,
				img:[],
				goodsinfo:{},
				stock_num:20,  // 虚拟一个总数量
				ballflag:false,
				selectedCount:1,  // 保存用户选中的数量，默认1
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
					// console.log(body.data)
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
			},
			// 添加到购物车
			addToCar(){
				this.ballflag = !this.ballflag
			},
			beforeEnter(el){
				el.style.transform = "translate(0,0)"
			},
			enter(el,done){
				// el.offsetWidth;
				const ballPos = this.$refs.ball.getBoundingClientRect();
				// console.log(ballPos.left);
				const badgePos = document.getElementById("ballSum").getBoundingClientRect();
// 				const badgePos = this.$emit("badge");
// 				console.log(badgePos)
				const x = badgePos.left - ballPos.left;
				const y = badgePos.top - ballPos.top;
				el.style.transform = "translate("+ x +"px,"+ y +"px)";
				el.style.transition = "all .6s cubic-bezier(0,-0.6,.92,.61)";
				done();
			},
			afterEnter(el){
				this.ballflag = !this.ballflag
			},
			// 小球动画路线思路；
			// 小球最终位移的位子，需要换动态写法
			// 如何获取 徽标 和 小球的 位置？？？ domObject.getBoundingClientRect();
			// 拿到 两个坐标，将left\ top值 ，相减，就是translate 的坐标值
			
			// 当子组件把选中的数量传递给这个函数
			getSelectedCount(count){
				this.selectedCount = count
				// console.log(this.selectedCount)
			}
		},
		components:{
			swiper,
			numbox
		},
	
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
		
		.ball{
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: #f00;
			position: absolute;
			z-index: 99;
			left: 134px;
			top: 303px;
			// transform: translate(130px,370px)
		}
	}
	
</style>
