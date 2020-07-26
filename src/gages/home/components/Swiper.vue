<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img src="http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
       <img src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
    name:"HomeSwiper",
    data () {
      return {
        swiperOption : {}
      }
    }
}
</script>

<style lang='stylus' scoped>
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>