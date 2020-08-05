<template>
    <div>
        <router-link 
        tag="div" 
        to="/" 
        class="header-left"
        v-show="showLeft">
            <div class=" iconfont header-left-back">&#xe685;</div>
        </router-link>
        <div class="header-top" v-show="!showLeft" :style="opacityDtyle">
            <router-link to="/">
                <div class="iconfont header-top-back">&#xe685;</div> 
            </router-link>
            景点详情
        </div>
    </div>
</template>


<script>
export default {
    name:'DetailHeader',
    data () {
        return {
            showLeft:true,
            opacityDtyle:{
                opacity:0
            }
            
        }
    },
    methods:{
        hanleScroll(){
            // console.log(document.documentElement.scrollTop)
            let scrtop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if( scrtop > 50 ){
                let opacity = scrtop / 120
                opacity = opacity>1? 1 : opacity
                this.opacityDtyle = {
                    opacity
                }
                this.showLeft=false
            }else{
                this.showLeft=true
            }
        }
    },
    // 这个生命周期钩子是页面展现的时候执行
    mounted () {
        window.addEventListener('scroll',this.hanleScroll)
    },
    // 这个生命周期钩子是页面隐藏的时候执行,因此可以用来解除全局的绑定事件
    destroyed(){
        window.removeEventListener('scroll',this.hanleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-left
        position absolute
        left .2rem
        top .2rem
        height .8rem
        width .8rem
        line-height .8rem
        text-align center
        border-radius 50%
        background rgba(0,0,0,.8 )
        .header-left-back
            color #ccc
            font-size .5rem
    .header-top
        position fixed
        top 0
        left 0
        right 0
        height .86rem
        line-height .86rem
        text-align center
        background $bgColor
        font-size .32rem
        color #fff
        .header-top-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size  .4rem
            color #fff
</style>