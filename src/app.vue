<template>
	<div class="paVal">
		<!-- 顶部组件 -->
		<mt-header fixed title="❤我来组成头部❤">
			<span slot="left" @click="goBack" v-show="flag"> 
				<mt-button icon="back" slot="left" >返回</mt-button>
			</span>
		</mt-header>
		<!-- router-view组件 -->
		<transition>
			<router-view></router-view>
		</transition>
		
	
		<!-- 底部tabbar组件 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item2" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item2" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item2" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"> <span class="mui-badge" id="ballSum">{{ $store.getters.getAllCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item2" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span> 
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				flag:false
			}
		},
		created(){
			this.flag = this.$route.path === "/home" ?false : true;
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		},
		watch:{
			'$route.path':function(newval){
				if(newval === "/home"){
					this.flag = false;
				}else{
					this.flag = true;
				}
			}
		}
	}
</script>

<style scoped>
	.mint-header{z-index: 9999;}
	.paVal{padding-top: 40px;}
	.paVal header{font-size: 18px;font-weight: 700;color:#fff}
	
	.mui-active{
		color:hotpink !important;	
	}
		
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition:all .5s ease;
	}
/* 改类名，解决 photolist的headerScroll 滑动冲突  */
.mui-bar-tab .mui-tab-item2{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item2 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item2 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
