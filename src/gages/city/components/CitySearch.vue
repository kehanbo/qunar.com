<template>
<div>
    <div class="search">
        <input v-model="keyworld" type="text" class="search-input" placeholder="输入城市名或者拼音">
    </div>
    <div class="search-list" ref="search" v-show="keyworld">
        <ul>
            <li class="search-item border-bottom" v-for="item of this.list" :key="item.id" @click="hanleClickbtn(item.name)">
                {{item.name}}
            </li>
            <li class="search-item border-bottom" v-show="hasnodata">
                没有匹配到数据,请重新输入
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data () {
        return {
            keyworld:'',
            list:[],
            timer:null
        }
    },
    methods:{
          hanleClickbtn (city) {
      // 通过vuex中的dispatch触发一个事件给actions,同时将参数传递过去
      this.$store.dispatch("changecity",city)
       //路由有一个功能可以跳转到其他页面,类似于js中的a标签
      this.$router.push('/')
    }
    },
    computed:{
        hasnodata(){
            return !this.list.length
        }
    },
    watch:{
        keyworld () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyworld){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                        // 如果要检索的字符串值没有出现，则该方法返回 -1。
                        if(value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1 ){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            },100)
            
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
        box-sizing border-box
        height .62rem
        width 100%
        line-height .62rem
        text-align center
        border-radius 0.8rem
        color #666
        padding 0 .1rem
.search-list
    position absolute
    overflow hidden
    top 1.58rem
    right 0
    left 0
    bottom 0
    background-color #eee
    z-index 1
    .search-item
        padding-left .2rem
        line-height .6rem
        color #666
</style>