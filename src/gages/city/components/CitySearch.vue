<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或者拼音">
    </div>
</template>

<script>
export default {
    name:'CitySearch'
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
</style>