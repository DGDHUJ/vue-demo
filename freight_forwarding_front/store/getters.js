import Vue from 'vue';
import  Vuex from 'vuex'
import axios from 'axios'
export default {
  baseUrl(){
    let host ='1111';
    return host;
  },
/*  freightInit(){
    let initUrl =  'http://mall.nasotrading.com/api/freight/init';
    return  (
      axios.get(initUrl).then(function (res) {
        localStorage.setItem('initData',res.data.data)
         return res.data.data;
       })
    )
  }*/
}
