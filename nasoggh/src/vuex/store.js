/* 
定义 vuex 的 store 实例
*/
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'
Vue.use(Vuex)
export default new Vuex.Store(
    {
       state,
       getters,
       mutations,
       actions 
    }
)