//  入口文件
 
import Vue from 'vue'

// 导入app 根组件
import app from './app.vue'

import './mui/css/mui.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
	render:e=>e(app)
}).$mount("#app")