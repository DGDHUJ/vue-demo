import { AjaxPlugin } from 'vux'
import Vue from 'vue'
import { getToken,getKey,setKey } from '@/common/js/token'
import { getkey } from './token';
Vue.use(AjaxPlugin)

function GetQueryString (name){
    var reg = new TegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null) return unescape(r[2]); return null;
}

// 微信用户授权
let empower = () =>{
    console.log(location.href);
    var code = GetQueryString("code");
    if(code != null && code.toString().length>1 || getKey('_wechat_id')) {
        console.log(location.href)
        if(getKey('_wechat_id')){return}
        Vue.http.post('',{code:code}).then(({data}) =>{
            setKey('_wechat_id',data.data.openid);
            setKey('_wechat_headimgurl',data.data.headimgurl);
            setKey('_wechat_nickname',data.data.nickname);
            setKey('_wechat_sex',data.data.sex);
        }).catch(e =>{
            console.log(e.message);
        })
    }else{
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx254871b91d930e90&redirect_uri=" +location.href+ "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"; 
    }
}
export { empower }