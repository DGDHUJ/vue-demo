export default {
  addCount (context) {
    context.commit('addCount')
  },
  reduceCount (context) {
    context.commit('reduceCount')
  },
  //提交载荷（Payload）
  addCountPayload1 (context,n) {
    context.commit('reduceCount',n)
  },
  //提交载荷（Payload）--对象
  addCountPayload2 (context,obj) {
    context.commit('reduceCount',obj)
  },
 /* checkout ({ commit, state }, products) {
    // 把当前购物车的物品备份起来
    const savedCartItems = [...state.cart.added]
    // 发出结账请求，然后乐观地清空购物车
    commit(types.CHECKOUT_REQUEST)
    // 购物 API 接受一个成功回调和一个失败回调
    shop.buyProducts(
      products,
      // 成功操作
      () => commit(types.CHECKOUT_SUCCESS),
      // 失败操作
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    )
  }*/
 //分发多重 mutation：
 //组合 Action
}
