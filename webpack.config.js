
// 由于entry中使用路径操作，这个使用node模块path，  wabpack本身是基于node写的，可以完全支持node语法
const path = require("path")

const {VueLoaderPlugin} = require('vue-loader')

const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件，通过node 中模块操作，向外暴露了一个配置对象
module.exports = {
    // 在配置文件中， 需要手动指定  入口   和  出口
    entry: path.join(__dirname,'./src/main.js'),// 入口，表示，要使用 wabpack 打包哪个文件
    output:{  // 输出文件相关配置
        path: path.join(__dirname,'./dist'),  // 指定  打包好的文件，输出到哪个目录中去
        filename:'bundle.js'  //指定   输出文件的名称
    },
    plugins:[  // 配置 插件的节点
        new htmlWebpackPlugin({  // 创建一个在 内存中 生成 html 页面的插件
            template:path.join(__dirname,'./src/index.html'), //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html'  // 指定生成的页面的名称
        }),
        new VueLoaderPlugin(),
    ],
    module:{   // 这个节点，用于配置所有第三方模块加载器
        rules:[  // 所有第三方模块的匹配规则
            // 装css-loader  :  cnpm i style-loader css-loader -D
            { test: /\.css$/,use: ['style-loader','css-loader']},// 配置处理 .css文件的第三方loader规则
            // 装sass-loader : cnpm i sass-loader -D  (提示：额外装内部依赖  cnpm i node-sass -D) 
            { test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
            // 装 url-loader : cnpm i url-loader file-loader -D  处理图片路径
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]' }, 
             // ?limit=字节  限制图片大小，是否转码为base64,大于或等于给定的字节，则不会转为base64 
             // &name=[name].[ext] 设置 图片名称不转为 hash 值；（一般不需要这样搞）防止两张同名图片出现在同一地址下；
             // &name=[hash:8]-[name].[ext] 这样做，会形成一个带有8位hash值前缀的图片，防止两张图片同名（最优做法）
             { test:/\.js$/, use:'babel-loader',exclude:/node_modules/ },
            // 处理 vue 文件的loader
             { test : /\.vue$/, use:'vue-loader'},
			// 处理图标的loader
			{ test: /\.(woff|svg|eot|ttf|woff2)$/, use:'url-loader'}
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}

//  当我们在  控制台 ，直接输入 wabpack 命令执行的时候，webpack 做了 以下几步
    // 1、 首先， webpack发现，我们并没有通过命令的形式，给它指定入口和出口
    // 2、webpack 就会去 项目的 根目录 中，查找一个叫做 ‘webpack.config.js’ 的配置文件
    // 3、当找到配置文件后， webpack 会去解析执行这个  配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象
    // 4、当 webpack 拿到 配置对象后，就拿到了配置对象中，指定的入口和出口，进行打包的构建


// 使用webpack-dev-server  这个工具，来实现自动打包编译的功能
    // 1、 运行 npm i webpack-dev-server -D  把这个工具安装到项目的本地开发依赖
    // 2、 安装完毕后，这个工具的用法，和 webpack 命令的用法，完全一样
    // 3、 由于，我们是在项目中，本地安装的webpack-dev-server， 所以，无法把它当作 脚本命令，在终端中直接运行，（只有那些安装到全局  -g 的，才可以正常运行）
    // 4、 注意： webpack-dev-server ，这个工具，要求，在本地项目中，必须安装webpack
    // 5、webpack-dev-server帮我们 打包生成的bundle.js文件， 并没有存放到实际的物理磁盘上； 而是，直接
            //托管到了 电脑的内存中，所以，我们在项目目录中，根本找不到这个打包好的 bundle.js ；
    // 6、我们可以认为， webpack-dev-server 把打包好的 文件中，以一种虚拟的形式，托管到了咱们项目的 根 目录中，虽然
    //      我们看不见它，但是我们可以认为 和  dist 、src 、node_modules 平级， 有一个看不见的文件，叫做 bundle.js
    // 

// package.json 中：
// 在 scripts  处的dev 对象，写 webpack-dev-server 运行会自动刷新浏览器；
                            // 第二：  --open  运行会自动打开浏览器
                            // 第三：  --port 3000  指定端口
                            // 第四：  --contentBase src 会直接进入src 目录
                            // 第五：  --hot  热重载、热更新,1、可以实现网页不重载更新页面；2、可以帮我们打补丁;
                                        // （但对js更新不生效，依然会刷新页面）