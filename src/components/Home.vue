<template>
	<div>
		<mt-swipe :auto="2000">
		  <mt-swipe-item>1</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				content:''
			}
		},

	}
</script>

<style lang="scss" scoped>
	.mint-swipe{
		height: 200px;
		.mint-swipe-item{
			&:nth-child(1){
				background: greenyellow;
			}
			&:nth-child(2){
				background: pink;
			}
			&:nth-child(3){
				background: skyblue
			}
		}
	}
</style>
