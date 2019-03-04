import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入对应的路由组件
import home from './components/Home.vue';
import member from './components/member.vue';
import shopcar from './components/shopcar.vue';
import search from './components/search.vue';
//  创建路由对象
var router = new VueRouter({
	routes:[
		{ path:'/',redirect:'/search'},
		{ path:'/home', component: home},
		{ path:'/member', component:member },
		{ path:'/shopcar', component:shopcar },
		{ path:'/search', component:search }
	],
	linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router