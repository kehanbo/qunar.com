export default {
    changes(state, city) {
        //该函数传入的第一个参数指的是上面定义的state
        //因此,可以直接修改对应的参数
        state.city = city
        try {
            localStorage.city=city
        } catch (e) {
            
        }
        
    }
}
