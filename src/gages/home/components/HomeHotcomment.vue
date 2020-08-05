<template>
  <div>
    <div class="hotcomment-title">热烈推荐</div>
    <ul>
        <!-- border-bottom是项目一开始就引入的一像素边框 -->
      
          <router-link 
          tag="li" 
          class="item border-bottom" 
          v-for="item of recommendList" 
          :key="item.id"
          :to="'/Detail/'+item.id">
            <div class="item-img-wrapp">
              <img :src="item.imgUrl" class="item-img" />
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeHotcomment",
  props:{
      recommendList:Array
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
.item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
        height 1.7rem
        width 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        .item-button
            line-height .44rem
            margin-top .1rem
            background-color #ff9300
            padding 0 .2rem
            border-radius .06rem

</style>