// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'styles/border.css' 
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
//使用fastclick如下，将该方法绑定在body上
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//路由就是根据不同的网址，返回不同的内容给用户
