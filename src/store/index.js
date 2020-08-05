import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)




export default new Vuex.Store({
    state:state,
    mutations:mutations,
    actions: {
        changecity(ctx, city) {
            // 这里的通过actions来监听changecity事件,同时接收传来的参数
            //这里的ctx可以用来触发comment事件,同时将参数传递给mutations
           ctx.commit("changes",city)
        }
    },
    //注意:这里可以直接省略上面的actions这个方法,可以直接在列表页那边使用commit
    
})