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
import goodslist from './components/home/goodsList.vue'
import goodsinfo from './components/home/goodsinfo.vue'
import goodsdesc from './components/home/goodsdesc.vue'
import goodscomment from './components/home/goodscomment.vue'

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
		{ path:'/home/photoinfo/:id', component:photoinfo },
		{ path:'/home/goodslist', component:goodslist },
		{ path:'/home/goodsinfo/:id',component:goodsinfo },
		{ path:'/home/goodsdesc/:id', component:goodsdesc,name:"goodsdesc" },
		{ path:'/home/goodscomment/:id', component:goodscomment, name:'goodscomment' }
	],
	linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router