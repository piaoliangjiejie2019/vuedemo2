module.exports = {
  //表示要配置...
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.css'],  //这个配过了
      alias: {   //文件夹都给配别名
        '@': 'src', //cli3 已经配过了
        'assets': '@/assest',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        //router  store 可以不用配置 一般不用到 一般直接使用 $route $store
      }
    }
  }
}