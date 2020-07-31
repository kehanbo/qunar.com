<template>
  <div class="wrapper">
    <!-- 这里增加一个wrapper来包裹着轮播图,然后设置一个高度,解决图片还没加载出来时,高度为0的问题 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array,
  },
  data() {
    return {
      swiperOption: {
        // swiper有一个方法,就是用来显示轮播图小点的方法,将上面小点的类名传进去
        pagination: ".swiper-pagination",
        //这里加上一个loop,让插件支持图片轮播
        loop: true,
      },
    };
  },
};
</script>

<style lang='stylus' scoped>
// 三个箭头表示样式的穿透
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.wrapper {
  // --------记住中间部分的写法,自适应宽高比的标准写法---------------
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  // -------------------------------------------------------------
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>