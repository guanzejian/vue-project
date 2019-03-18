<template>
	<div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' :data-numbox-max="max">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" ref="number" @change="countChanged"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
	import mui from '../../mui/js/mui.js'
	export default {
		mounted(){
			mui('.mui-numbox').numbox();
			
		},
		methods:{
			countChanged(){
				// console.log(this.$refs.number.value)
				// 子组件向 父组件传递方法$emit
				this.$emit("getCount",parseInt(this.$refs.number.value));
				
				// 得到的是undefined ,使用 watch 
				console.log(this.max)
			}
		},
		props:["max"],
		
		// 数据异步获取的，就用watch 监听
// 		watch:{
// 			// 属性监听
// 			'max':function(newVal,oldVal){
// 				mui(".mui-numbox").numbox().setOption('max',newVal)
// 			}
// 		}
	}
</script>

<style lang="scss" scoped>
	
</style>
