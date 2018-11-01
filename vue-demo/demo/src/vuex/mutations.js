export default {
   addCount: (state) => {
     return state.count++
   },
  reduceCount: (state) => {
     return state.count--
  },
  //提交载荷（Payload）
  addCountPayload1: (state,n) => {
    return  state.count = state.count+n
  },
  //提交载荷（Payload）--对象
  addCountPayload2: (state,obj) => {
    return  state.count = state.count - obj.num
  },
}
