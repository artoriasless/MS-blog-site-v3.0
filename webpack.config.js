// 参考: http://www.cnblogs.com/StrongerSY/p/5886059.html

// 引入css 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
var packCSS = new ExtractTextPlugin('./css/[name].min.css'); 

module.exports = {
    entry: './main.js',

    output: {
        path    : __dirname + '/static',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port  : 8080
    },

    plugins: [
        packCSS
    ],

    module: {
        loaders: [
            {
                test   : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel',
                query  : {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|gif|ttf)$/,
                loader: 'url?limit=1&name=images/[hash:8].[name].[ext]'
            }
        ]
    }
}; 