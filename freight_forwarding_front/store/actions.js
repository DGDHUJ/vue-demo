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
    let showreq = JSON.parse(req)
    Cookies.set('userInfo',showreq,{ domain: 'localhost' })
    Cookies.set('userInfo',showreq,{ domain: '.nasotrading.com' })
    Cookies.set('userInfo',showreq,{ domain: '.getnaso.com' })
    // localStorage.setItem('users_test',req);

    localStorage.setItem('token',showreq.token);
    commit('SET_INFORMATION',showreq)
  },
  _signOut({commit}){
    Cookies.remove('userInfo',{ domain: 'localhost' })
    Cookies.remove('userInfo',{ domain: '.nasotrading.com' })
    Cookies.remove('userInfo',{ domain: '.getnaso.com' })
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userpassword');
    commit('SET_INFORMATION')
  },
  async GET_CATEGORY({ commit, state, getters }) {
    let url = state.headerUrl + "category";
    const { data } = await axios.get(url)
    return data
  },
}
