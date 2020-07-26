<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-concent" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data () {
        return {
            iconsList:[{
                id:'001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                id:'008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            },{
                 id:'009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点'
            }]
        }
    },
    computed: {
       pages () {
           const pages=[]
           this.iconsList.forEach((item,index)=>{
               const page = Math.floor(index/8)
               if(!pages[page]){
                   pages[page]=[]
               }
               pages[page].push(item)
           })
           return pages
       }
       
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container 
    overflow 
    width 100%
    height 0
    padding-bottom 50%
    .icon
        width 25%
        height 0
        padding-bottom 25%
        overflow hidden
        float left
        position relative
        .icon-img
            position absolute
            left 0
            right 0
            top 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-concent
                height 100%
                display block
                margin 0 auto
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $fontColor
            text-align center
</style>