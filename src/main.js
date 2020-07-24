// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
//这个是1像素边框的解决方案
import './assets/styles/border.css'
//移动端点击事件延迟300ms解决方案
//在项目根目录下打开cmd，安装fastclick插件,然后再引用进来
import fastClick from 'fastclick'


Vue.config.productionTip = false
//使用fastclick如下，将该方法绑定在body上
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//路由就是根据不同的网址，返回不同的内容给用户
