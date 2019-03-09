import {router} from '@/router';
import {
  setCode,
  getCode
} from "@/common/js/token.js";
import fetch from '@/common/js/fetch.js';
import store from '@/common/vuex/store';


/**
 * @desc 路由鉴权
 * @param {string} path 
 */
/**
 * @desc //search,查询？后面的参数，并匹配正则
 * @param {String} name 
 */
// function GetQueryString(name) {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
//   var r = window.location.search.substr(1).match(reg);
//   if (r != null) return unescape(r[2]);
//   return null;
// }
function GetQueryString (name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
  var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
  if(r!=null) return unescape(r[2]); return null;
}

//路由拦截
router.beforeEach((to, from, next) => {
 let code = GetQueryString("code")
//  code="aaa"
 setCode(code);
 if((to.path === "/"||to.path === "/managerlogin"||to.path === "/memberlogin")&&(getCode() == '' || getCode() == 'undefined'||getCode() == null||getCode() == 'null')){
    // next('/demo/demoone');
    if (code != null && code.toString().length > 1) {
      next();
    }else{
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + store.state.appid + "&redirect_uri=" + encodeURIComponent(location.href) + "&response_type=code&scope=snsapi_base&state=ns_tmp_state";
      
   }
  
   
 }else{
  if(to.path === "/") {
    next('/memberlogin');
  } else {
    next();
  }
 }
  
 
})
