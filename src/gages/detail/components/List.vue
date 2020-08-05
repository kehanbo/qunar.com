<template>
    <div>
        <div 
        v-for="(item,index) of Listdata" 
        :key="index"
        class="item">
            <div class="border-bottom">
                <span class="iconfont itemIcon">&#xe685;</span>
                {{item.title}}
            </div>
            <!-- 这里使用了组件的递归 -->
            <div v-if="item.children">
                <detail-list :Listdata="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        Listdata:Array
    }
}
</script>

<style lang="stylus" scoped>
    .item
        line-height .6rem
        font-size  .32rem
        padding 0 .2rem
        .itemIcon
            display inline    
            width .36rem
            height .36rem
            margin-right .1rem
            background-size  .4rem .3rem
            color skyblue
</style>