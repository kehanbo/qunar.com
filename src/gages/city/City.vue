<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :lett="lett"></city-list>
    <city-letter 
    :cities="cities"
    @change="handlaChange"
    ></city-letter>
  </div>
</template>


<script>
import CityHeader from "./components/CityHeader";
import CitySearch from "./components/CitySearch";
import CityList from "./components/CityList";
import CityLetter from "./components/CityLetter";
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      cities: {},
      hotCities: [],
      lett:''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityLetter,
  },
  mounted() {
    this.getCitydata();
  },
  methods: {
    getCitydata() {
      axios.get("api/city.json").then(this.Citydata);
    },
    Citydata(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handlaChange (lett) {
      this.lett=lett
    }
  },
};
</script>

<style lang="stylus" scoped></style>