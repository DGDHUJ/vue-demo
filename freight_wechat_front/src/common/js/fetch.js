import { AjaxPlugin } from 'vux'
import router from '@/router'
import Vue from 'vue'
import { getToken, getKey,setKey } from '@/common/js/token';
Vue.use(AjaxPlugin);
let baseurl = "";
let bus_baseurl = "";
// Vue.prototype.$http.defaults.baseURL = "https://eip.htmtl.com"
console.log(process.env.NODE_ENV);
//配置访问地址的请求url头
switch ( process.env.NODE_ENV) {
    case "production":    // 干一些线上才要做的事情
      baseurl = "/api"
      break;
      case "development":   // 干一些测试时不可告人的事情
      baseurl = "/api"
      break;
}
setKey('busId','30');
Vue.prototype.$http.defaults.baseURL = baseurl;

// 全局封装请求方法
function htttpRequest(url,params,cb) {
    let dataStr = ''
    for (let key in params) {
        dataStr += key +  '=' + params[key]
    }
    dataStr = dataStr.substr(0,dataStr.lenght - 1)

    AjaxPlugin.$http.post(url,dataStr)
    .then((resp) => {
        if(cb) cb(resp.data)
    })
    // AjaxPlugin.$http.get(url,dataStr)
    // .then((resp)=>{
    //     if(cb) cb(resp.data)
    // })
}

function turnParams(params) {
    let dataStr = ''
    for (let key in params) {
        dataStr += key + '=' + params[key] +'&'
    }
    dataStr = dataStr.substr(0,dataStr.length - 1)
    return dataStr;
}

function setToken(token,key) {
    Vue.prototype.$http.defaults.headers.token = token;
    if(key) {
        Vue.prototype.$http.defaults.headers.Authorization = ''
    }
}

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
Vue.prototype.$http.interceptors.request.use((config) => {  //配置发送请求的信息
    config.headers = config.headers || {};
    config.headers.token = getToken();
    return config;
  });
  
  // 添加响应拦截器
  Vue.prototype.$http.interceptors.response.use(function (response) {
    let responseData = response.data;
    if (responseData.code == '10021') {
        alert(responseData.msg)
        location.href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUxMjkwNzQzMA==&scene=126#wechat_redirect";
    }
    return response;
  }, function (error) {
    console.log(error);
    return Promise.reject(error);
  });


export default AjaxPlugin

export { baseurl, bus_baseurl, htttpRequest, turnParams, setToken}