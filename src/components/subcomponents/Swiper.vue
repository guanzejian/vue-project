<template>
	<div>
		<mt-swipe :auto="3000">
			<!-- 谁使用轮播图组件，谁为我们传递 content  -->
		  <mt-swipe-item v-for='item in content' :key='item.id'>
			  <img :src="item.img" :class="{fullscreen}" alt="">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props:["content","fullscreen"]
	}
</script>

<style lang="scss" scoped>
		.mint-swipe{
		height: 150px;
		.mint-swipe-item{
			text-align: center;
			.fullscreen{width: 80%;}
			
			img{width: 100%;height: 100%}
		}
	}
</style>
