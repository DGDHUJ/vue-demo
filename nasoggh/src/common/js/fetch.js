import { AjaxPlugin } from 'vux'
import router from '@/router'
import Vue from 'vue'
import { getToken,getkey,setKey } from '@/common/js/token'
Vue.use(AjaxPlugin);
let baseurl = "";
let bus_baseurl = "";
// Vue.prototype.$http.defaults.baseURL = "https://eip.htmtl.com"
console.log(process.env.NODE_ENV);
//配置访问地址的请求url头
switch ( process.env.NODE_ENV) {
    case "production":
      baseurl = ""
      break;
      case "development":
      baseurl =  "";
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
    AjaxPlugin.$http.get(url,dataStr)
    .then((resp)=>{
        if(cb) cb(resp.data)
    })
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

// 添加响应拦截器
/* Vue.prototype.$http.interceptors.use(function(resp){
    let respData = resp.data;
    //如果token失效，跳转到登录页
    if(!respData.istrue && respData,status === 801){
        let userType = getKey('userType');
        if(userType == '1'){
            router.push('./login');
        }else if( userType == '2'){
            router.push('/login_bus');
        }
    }
    return resp;
},function(error){
    console.log(error)
    return Promise.reject(error);
}) */


export default AjaxPlugin

export { baseurl, bus_baseurl, htttpRequest, turnParams, setToken}