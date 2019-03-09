import Vue from 'vue';
import  Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from  './actions'
Vue.use(Vuex)
export default () => {
  return new Vuex.Store({
    state:{
      count:0,
      headerbaractive:'one',
      // headerUrl:'http://f.getnaso.com/api/',
      headerUrl:'http://localhost:7777/api/',
      users:{},
      freightInit:{},
      title:''
    },
    getters,
    mutations,
    actions
  })
}

