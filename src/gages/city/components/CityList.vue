<template>
  <div class="list" ref="warpper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city,key) of cities" :key="key">
        <div class="title border-topbottom" >{{key}}</div>
        <div class="font-list" v-for="item of city" :key="item.id">
          <div class="font border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";
export default {
  props: {
    cities: Object,
    hotCities: Array,
    lett:String
  },
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.warpper);
  },
  //这里通过监听由父组件传来的lett,若是lett发生改变,便执行对应的操作
  watch:{
    lett(){
      console.log(this.lett)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.44rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .border-topbottom {
    &:before {
      border-color: #ccc;
    }

    &:after {
      border-color: #ccc;
    }
  }

  .button-list {
    padding: 0.1rem;
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrap {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        padding: 0.1rem 0;
        border-radius: 0.1rem;
      }
    }
  }

  .font-list {
    .font {
      line-height: 0.54rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>