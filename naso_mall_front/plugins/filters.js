import Vue from 'vue'

/**
 * @desc 转为货币，保留小数点后两位
 * @param value
 */
export function numFilter(val) {
  val = (val + 0).toString().replace(/\$|\,/g, '');
  if (isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val * 100 + 0.50000000001);
  let cents = val % 100;
  val = Math.floor(val / 100).toString();
  if (cents < 10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
  }

  return '$' + (((sign) ? '' : '-') + val + '.' + cents);
}


export function imgCompress(url,w,h) {
  return url && url.length > 4  ? url.split('?')[0] + '?imageMogr2/thumbnail/' + w + 'x' + h + '!' : url
}
/**
 * @desc 内容溢出用点点点(…)省略号表示 
 * !!! 注意：使用时候需要反转参数
 * @param {string} value 字符串
 * @param {number} _length 长度
 */
export function ellipsis(value, _length = 8) {
  if (!value) return ''
  if (value.length > _length) {
    return value.slice(0, _length) + '...'
  }
  return value
}
export function noImg100x100(val) {
  if (val) {
    return val;
  } else {
    return require('../assets/img/LOGO_NO_100x100.png');
  }
}

function formate(fmt, date) {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

//金额格式化
 function money(val){
   if(val == undefined){
     return undefined
   }else{
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
      val = "0";  
    } 
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
       cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
        val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }
  
    return (((sign)?'':'-') + val + '.' + cents);
   }
 
}

const filters = {
  numFilter,
  imgCompress,
  ellipsis,
  noImg100x100,
  formate,
  money
}
export default filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
