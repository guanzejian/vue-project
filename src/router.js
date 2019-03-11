import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入对应的路由组件
import home from './components/Home.vue';
import member from './components/member.vue';
import shopcar from './components/shopcar.vue';
import search from './components/search.vue';
import NewsList from './components/home/newslist.vue'
import newsinfo from './components/home/newsinfo.vue'
import photolist from './components/home/photolist.vue'
import photoinfo from './components/home/photoinfo.vue'
//  创建路由对象
var router = new VueRouter({
	routes:[
		{ path:'/',redirect:'/home'},
		{ path:'/home', component: home},
		{ path:'/member', component:member },
		{ path:'/shopcar', component:shopcar },
		{ path:'/search', component:search },
		{ path:'/home/newslist', component:NewsList },
		{ path:'/home/newsinfo/:id',component:newsinfo },
		{ path:'/home/photolist', component:photolist },
		{ path:'/home/photoinfo/:id', component:photoinfo }
	],
	linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router