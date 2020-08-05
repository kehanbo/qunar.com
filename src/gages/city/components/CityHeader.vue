<template>
  <div class="header">
    <router-link to="/">
    <div class="headerLeft">
      <div class="iconfont icLeft">&#xe685;</div>
    </div>
    </router-link>
    城市列表
  </div>
</template>

<script>
  export default {
    name:'CityHeader'
  }
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  background-color $bgColor
  width 100%
  line-height :.86rem
  text-align center
  color #fff
  font-size .32rem
  .headerLeft
    width .64rem
    float :left
    .icLeft
      padding-left: .2rem
      color #fff
</style>
