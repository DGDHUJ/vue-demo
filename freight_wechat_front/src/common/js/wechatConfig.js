export function   get_wechat_config (that) {
    let postData = {
        url: location.href.split('#')[0]
    }
    that.$http.post("/url",postData).then(({data}) =>{
        that.$wechat.config({
            debug:true,  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.data.appId,//必填，公众号的唯一标识
            timestamp: data.data.timestamp,  // 必填，生成签名的时间戳
            nonceStr: data.data.nonceStr,  //必填，生成签名的随机串
            signature: data.data.signature, // 必填，签名
            jsApiList: ['scanQRcode','chooseImage','getLocalImgData'] //必填，需要使用的js接口列表
        })
    }).catch(e =>{
        console.log(e.message);
    })
}