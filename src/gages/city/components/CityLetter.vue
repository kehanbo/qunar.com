<template>
    <div class="list">
        <div class="font" 
        v-for="(item,key) of cities" 
        :key="key"
        @click="handlaClick"
        >{{key}}</div>
    </div>
</template>

<script>
export default {
    name:'CityLetter',
    props:{
        cities:Object
    },
    methods:{
        handlaClick(e){
            //这里要实现点击字母列表会自动跳到对应的列表项中,通过点击事件可以获取点击的字母
            //然后利用触发事件将该值传递出去
            //在父组件中监听,然后再传给兄弟组件
            this.$emit("change",e.target.innerText)
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .font
         text-align center
         line-height .35rem
         color $bgColor
        
</style>