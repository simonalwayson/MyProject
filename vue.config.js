module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'http://128.160.186.181:8080',//代理接口
                changeOringin: true,
                pathRewrite: {
                    '^/api': ''//代理路径
                }
            }
        }
    }
}