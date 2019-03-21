//  入口文件
 
import Vue from 'vue'
// 安装、注册路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 注册vuex 
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刚进入网站， 肯定会调用main.js 在刚调用的时候,把购物车的数据读出来，放到store 中
var car = JSON.parse(localStorage.getItem("car") || '[]')

var store = new Vuex.Store({
	state:{   // this.$store.state.---///
		car:car  // 购物车中的商品数据{ id:商品id, count: 要购买数量 , price: 商品的单价 , selected :false  （选中状态保存） }
	},
	mutations:{  // this.$store.commit("方法名",唯一参数)
		// 点击加入购物车，把商品信息，保存到store 中的car上
		// 分析：
		// 1、如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
		// 2、如果没有，则直接把商品数据，push到car中即可
		addToCar(state,goodsinfo){
			var flag = false;
			state.car.some(item=>{
				if(item.id == goodsinfo.id){
					item.count += parseInt(goodsinfo.count)
					flag = true
					return true
				}
			})
			if(!flag){
				state.car.push(goodsinfo)
			}
			// 当更新 car 之后，把car  数组，存储到本地的localStorage 中
			localStorage.setItem("car",JSON.stringify(state.car))
		}
	},
	getters:{  // this.$store.getters.----///  相当于 计算属性
		getAllCount(state){
			var c = 0;
			state.car.forEach(item =>{
				c += item.count
			})
			return c
		}
	}
})


// 导入app 根组件
import app from './app.vue'

import './mui/css/mui.css'
// 扩展图标，默认不在mui/css 文件目录中，手动复制一份icon-extra.css文件到css目录中，然后import引入进来:
// 这个当中会包含一份 fonts 字体图标在fonts中，也是需要手动复制一份在 fonts 目录中；
import './mui/css/icons-extra.css'

// 导入mint-ui中的组件
// import { Header, Swipe, SwipeItem,Button  } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button);
// import { Lazyload } from 'mint-ui';
// 
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue2-preview'
// defalut install
Vue.use(VuePreview)

// 导入router.js 中的router 模块
import router from './router.js'

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 引入时间处理插件 moment
import moment from "moment"
// 定义全局过滤器
Vue.filter('dataFormat',function(value,geshi = 'YYYY-MM-DD hh:mm:ss'){
	return moment(value).format(geshi)
})


var vm = new Vue({
	render:e=>e(app),
	router,   //挂载路由对象到vm 实例上 
	store, // 挂载vuex store
}).$mount("#app")