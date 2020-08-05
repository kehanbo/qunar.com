<template>
    <div class="list">
        <div class="font" 
        v-for="item of letters" 
        :key="item"
        :ref="item"
        @click="handlaClick"
        @touchstart="handleStart"
        @touchmove="handleMove"
        @touchend="handleEnd"
        >{{item}}</div>
    </div>
</template>

<script>
export default {
    name:'CityLetter',
     props:{
        cities:Object
    },
    data(){
        return {
            touchStart:false,
            startY:0,
            timer:null
        }
    },
    updated () {
        this.startY=this.$refs['A'][0].offsetTop
    },
    computed:{
        letters(){
            const letters = []
            for ( let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handlaClick(e){
            //这里要实现点击字母列表会自动跳到对应的列表项中,通过点击事件可以获取点击的字母
            //然后利用触发事件将该值传递出去
            //在父组件中监听,然后再传给兄弟组件
            this.$emit("change",e.target.innerText)
        },
        handleStart(){
            this.touchStart=true
        },
        handleMove(e){
            if(this.touchStart){
                if(this.timer){
                     clearInterval(this.timer)
                }
                this.timer=setTimeout(() => {
                const touchY = e.touches[0].clientY -79
                const index = Math.floor((touchY-this.startY)/20)
                if(index >= 0 && index < this.letters.length){
                this.$emit("change",this.letters[index])
                } 
                }, 8)
                          
            }
        },
        handleEnd(){
            this.touchStart=false
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