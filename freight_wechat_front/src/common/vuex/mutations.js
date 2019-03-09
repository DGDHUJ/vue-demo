export default {
    addCount: (state) => {
        return state.count++
    },
    write_userInfo:(state,data)=>{
        state.userInfo = data
    }
}