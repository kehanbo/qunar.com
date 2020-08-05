import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/gages/home/Home'
import City from '@/gages/City/City'
import Detail from '@/gages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosotion) {
    return { x:0,y:0}
  }
})
