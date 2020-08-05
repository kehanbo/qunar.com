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
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/HomeSwiper'
  import HomeIcons from './components/HomeIcons'
  import HomeHotcomment from './components/HomeHotcomment'
  import HomeWeekend from './components/HomeWeekend'
  import { mapState } from 'vuex'
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
            weekendList:[],
            lastCity:''
        }
      },
      computed:{
        ...mapState(['city'])
      },
      methods:{
        getHomeInfo () {
          axios.get('/api/index.json?city='+this.city)
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
      this.lastCity = this.city
      this.getHomeInfo()
    },
    // 这里的activate的生命周期函数是组件被keep-alive包裹后才会生成的,因此可以使用这个函数来发送ajax请求
    activated () {
      if(this.lastCity !== this.city){
        this.lastCity = this.city
        this.getHomeInfo()
      } 
    }
  }
</script>


<style>

</style>
