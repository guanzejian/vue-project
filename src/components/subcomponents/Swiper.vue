<template>
	<div>
		<mt-swipe :auto="3000">
			<!-- 谁使用轮播图组件，谁为我们传递 content  -->
		  <mt-swipe-item v-for='item in content' :key='item.id'>
			  <img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props:["content"]
	}
</script>

<style lang="scss" scoped>
		.mint-swipe{
		height: 150px;
		.mint-swipe-item{
			&:nth-child(1){
				background: greenyellow;
			}
			&:nth-child(2){
				background: deepskyblue;
			}
			&:nth-child(3){
				background: skyblue
			}
			img{width: 100%;height: 100%}
		}
	}
</style>
