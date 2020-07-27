<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-concent" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array,
  },
  data () {
    return {
      //关闭和使用这个自动播放功能需要在标签中添加属性 :options="swiperOption"
      swiperOption: {
        autoplay:false
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  overflow;
  width: 100%;
  height: 0;
  padding-bottom: 50%;

  .icon {
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;
    float: left;
    position: relative;

    .icon-img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-concent {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $fontColor;
      text-align: center;
      ellipsis();
    }
  }
}
</style>