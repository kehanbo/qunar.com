<template>
  <div>
    <div class="hotcomment-title">周末去哪儿</div>
    <ul>
        <!-- border-bottom是项目一开始就引入的一像素边框 -->
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapp">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
      weekendList:Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.hotcomment-title {
  line-height: 0.6rem;
  background: #ddd;
  text-indent: 0.2rem;
}
.item-img-wrapp
    height 0
    padding-bottom 33.9%
    overflow hidden

    .item-img
        width 100%
.item-info
    padding .1rem
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
   
</style>