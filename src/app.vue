<template>
	<div class="paVal">
		<!-- 顶部组件 -->
		<mt-header fixed title="我来组成头部"></mt-header>
		<!-- router-view组件 -->

		<!-- 底部tabbar组件 -->
				<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
			
		</nav>
	</div>
</template>

<script>
	
	
</script>

<style scoped>
	.paVal{padding-top: 40px;}
</style>
