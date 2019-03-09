import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  async getaa({dispatch, commit, getters},{req,res}){

    if (req.headers.cookie) {
      // 解析cookie
      let cookie = req.headers.cookie, cookieObj = {}, cookieArr = [], key = '', value = '';
      cookie = cookie.split(';')
      for (let i = 0; i < cookie.length; i++) {
        cookieArr = cookie[i].trim().split('=')
        key = cookieArr[0]
        value = cookieArr[1]
        cookieObj[key] = value
      }
      if(cookieObj.token) {
        commit('SET_TOKEN', cookieObj.token)
      }
      if(cookieObj.githubToken){
        commit('SET_GITHUB_TOKEN', cookieObj.githubToken)
      }
    }
    const {data} = await axios.get(url);
    return data;
  },
  _Information({ commit },req ){
    // Cookies.set('userInfo',req,{ domain: 'localhost' })
    Cookies.set('userInfo',req,{ domain: '.getnaso.com' })
    Cookies.set('userInfo',req,{ domain: 'localhost' })
    localStorage.setItem('users',req);
    commit('SET_INFORMATION',req)
  },
  _signOut({commit}){
    // Cookies.remove('userInfo')
    // Cookies.remove('userInfo',{ domain: 'localhost' })
    Cookies.remove('userInfo',{ domain: '.getnaso.com' })
    Cookies.remove('userInfo',{ domain: 'localhost' })
    localStorage.removeItem("users");
    commit('DEL_INFORMATION')
  },
  _setInquiry({commit}, data) {
    commit('SET_inquiryItem', data)
  },
  //获取产品分类
  async GET_CATEGORY({state}) {
    const { data } = await axios.get(state.menuUrl)
    return data
  },
  async GET_blogroll({ commit, state, getters },params) {
    let url = state.headerUrl + "/cms/link";
    const { data } = await axios.post(url,params)
    return data
  },
  async GET_hotList({ commit, state, getters },params) {
    // let url = state.headerUrl + "goods/hot/" + 3
    let url = state.headerUrl + "goods_recommend/like/" + 3
    const { data } = await axios.get(url)
    return data
  },

}
