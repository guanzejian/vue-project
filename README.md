# 自建一个项目模板
### 使用方法：
### npm i
### npm run dev
### npm run build
~~~txt
解决git pull从 HTTPS方式，git push 时需要输入账号和密码
添加git config内容

git config --global credential.helper store

执行此命令后，用户主(user)目录下的.gitconfig文件会多了一项：[credential]

helper = store

重新git push就不需要用户名密码了。

~~~
------------------------------
+ 发送评论：<br>
	** 使用axios 发送 一个值的对象到api接口，（但此时只是静态的给评论区新增一个
	** 评论）我们通过axios的返回值，重新渲染页面（放在后面在刷新渲染页面）

+ 滑动条无法正常触发滑动，查看官网文档，提供方法，js组件需要初始化：
  + 导入mui.js

+ 在webpack中，禁用webpack打包时候的严格模式：
	- 方法：cnpm i  babel-plugin-transform-remove-strict-mode  -D
+  当需要初始化一个组件，必须等dom元素加载完毕：
	-  当组件中的dom结构被渲染好并放到页面中后，会执行这个 钩子函数
	- 如果要操作元素，最好用mounted，这里面的dom元素是最新的

+ 缩略图： vue2-preview
	- cnpm i vue2-preview -S  
	- 具体使用方法见官网：(https://github.com/LS1231/vue-preview)

## 尝试在手机上 去进行项目的预览和测试
**1、要保证 手机和开发项目的电脑处于 同一个 wifi 环境中，也就是说手机可以访问到电脑的IP（同一个局域网）<br>
**	2、打开自己的项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令，把当前的电脑的wifi Ip 地址，设置为 --host 的指令值；
+ 如何查看自己电脑所处wifi 的IP？----> 在cmd终端中运行 `ipconfig`  ，查看无线网的Ip 地址；

~~~js
get 请求获取所有品牌列表的 api
http://kerys.pythonanywhere.com/api/getprodlist/

{status: "success", message: Array(6)}
0:{id: 193, name: "马自达", ctime: "2019-03-13T01:03:49.609"}
1:{id: 209, name: "B站的筒子们 你们好", ctime: "2019-03-14T09:46:54.831"}
2:{id: 210, name: "好好好", ctime: "2019-03-14T09:49:08.792"}
3:{id: 211, name: "666", ctime: "2019-03-14T09:50:05.274"}
4:{id: 213, name: "你们好!!", ctime: "2019-03-14T14:05:12.823"}
5:{id: 215, name: "牛车", ctime: "2019-03-14T14:25:56.501"}
~~~

~~~js
- post 请求添加品牌的 api
http://kerys.pythonanywhere.com/api/addprod/

{status: "failed", message: "添加的品牌名称不能为空"}
~~~

~~~js
- get 请求删除品牌的 api
http://kerys.pythonanywhere.com/api/delprod/id

状态码：  500
~~~
没图，数据一堆
** `http://api.komavideo.com/news/list` -------------------post  <br>
有图、有id、url。
** `http://www.liulongbin.top:3005/api/getlunbo`      -----------get

> 改变子组件的样式：设置一个动态值，通过父子组件传值的方式去改变动态样式（:class 或 :style）
- 方法： 1、给父组件 绑定一个值 布尔值  (:name="true")；
+ 		2、给子组件props传入父组件值( props:['name'] ), 给子组件绑定个动态类( :class='{name:name}' ); name样式直接写在子组件中；