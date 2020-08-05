<template>
    <div class="container" @click="handleClose">
        <div class="container-img">
              <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="swiper-img" :src="item"/>
                </swiper-slide>
                
                <div class="swiper-pagination" slot="pagination"></div>
             </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default () {
                return [
                   
                ]
            }
        }
    },
    data () {
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                // 下面的两个参数意思是:我这个swiper的插件监听到我这个元素或者父级元素发生DOM结构的变化时,会自动刷新一次
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleClose () {
            this.$emit("change")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 100
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background-color #000
        .container-img
            width 100%
            height 0
            padding-bottom 100%
            .swiper-img
                width 100%
            .swiper-pagination
                bottom -1rem
                color #fff

    
</style>