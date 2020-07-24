<template>
  <div class="header">
    <div class="headerLeft">
      <div class="iconfont icLeft">&#xe685;</div>
    </div>
    <div class="headerInput">
      <span class="iconfont">&#xe67d;</span>
      输入城市/景点/主题
    </div>
    <div class="headerRight">
      城市
      <span class="iconfont icRight">&#xe688;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeHeader'
  }
</script>


<style lang="stylus" scoped>
  .header
    display :flex
    line-height :.86rem
    background-color: #00bcd4
    color: #fff
    .headerLeft
      width .64rem
      float :left
      .icLeft
        padding-left: .2rem
    .headerRight
      float :right
      width :1.24rem
      text-align :center
      font-size .24rem
      padding-left :.02rem
      .icRight
        margin-left:-.04rem
        font-size :.024rem
    .headerInput
      flex :1
      height .64rem
      line-height :.64rem
      background-color: #fff
      border-radius :.1rem
      color: #ccc
      margin-top :.12rem
      margin-left :.2rem
      padding-left .2rem


</style>
