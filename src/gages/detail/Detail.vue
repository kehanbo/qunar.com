<template>
    <div>
       <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
       <detail-header></detail-header>
       <detail-list :Listdata="Listdata"></detail-list>
       <div class="content"></div>
    </div>
</template>


<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            Listdata:[]
        }
    },
    mounted(){
        this.getDetailInfo()
    },
    methods:{
        getDetailInfo(){
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res=res.data
            if(res.ret && res.data){
                const data = res.data
                // console.log(data)
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.Listdata = data.categoryList
             }
        }
    }

}
</script>



<style lang="stylus" scoped>
.content
    height 30rem

</style>