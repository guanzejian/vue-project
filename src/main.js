//  入口文件
 
import Vue from 'vue'
// 安装、注册路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
}).$mount("#app")