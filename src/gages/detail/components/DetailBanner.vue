<template>
<div>
    <div class="banner" @click="hanleBannerClick">
        <img class="banner-img" :src="bannerImg" />
        <div class="banner-info">
            <div class="info-title">{{sightName}}</div>
            <div class="info-num">
                <span class="iconfont">&#xe69b;</span>
                39</div>
        </div>
    </div>
    <Fade>
        <common-gallary :imgs="gallaryImgs" v-show="bannerGallery" @change="gallaryColse"></common-gallary>
    </Fade>
</div>
</template>




<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
    data () {
        return {
           
            bannerGallery:false
        }
    },
    components:{
        CommonGallary,
        Fade
    },
    methods:{
        hanleBannerClick () {
            this.bannerGallery=true
        },
        gallaryColse () {
              this.bannerGallery=false
        }
    }
}
</script>


<style lang='stylus' scoped>
    .banner
        overflow hidden
        height 0
        padding-bottom 55%
        position relative
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .info-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .info-num
                padding 0 .4rem
                height .4rem
                line-height .4rem
                border-radius .2rem
                background rgba( 0, 0, 0, 0.8)
                margin-top .1rem

</style>