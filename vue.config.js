module.exports = {

    publicPath: './',

    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8081,
        https: false,
        hotOnly: false,
        open: true,
        // 设置代理
        proxy: {
            '/api': {
                //target: ' http://119.23.45.213',     //api服务器地址
                target: 'http://localhost:8080',
                changeOrigin: true,				//虚拟网站需要更管orign
                ws: true,						//代理websockets
                pathRewrite: {					//路径重写，比如'/api/aaa/ccc'重写为'aaa/ccc'
                    '^/api': '/'
                },
            }
        },
    },
};

