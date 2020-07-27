<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-hotcomment :recommendList="recommendList"></home-hotcomment>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'
  import HomeIcons from './components/icons'
  import HomeHotcomment from './components/hotcomment'
  import HomeWeekend from './components/weekend'
  //这里引入vue的ajax请求插件
  import axios from 'axios'
  export default {
    name:'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeHotcomment,
      HomeWeekend
      },
      data () {
        return {
            iconList:[],
            swiperList:[],
            recommendList:[],
            weekendList:[]
        }
      },
      methods:{
        getHomeInfo () {
          axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          res=res.data
          if(res.ret && res.data){
            const data = res.data
            this.iconList = data.iconList
            this.swiperList = data.swiperList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        }
      },
    //利用mounted这个生命周期函数来执行ajax请求
    mounted () {
      //当页面挂载好了之后,执行ajax请求
      this.getHomeInfo()
    }
  }
</script>


<style>

</style>
