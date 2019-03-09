
import Vue from 'vue'
import $ from 'jquery/dist/jquery.slim.min'
import axios from 'axios';
// import axios from '~/plugins/intercept.js';


import SparkMD5 from 'spark-md5'
if (process.client) {
  window.history.replaceState = window.history.replaceState || function () {}
  }
  function getNuxtChildComponents($parent, $components = []) {
    $parent.$children.forEach(($child) => {
      if ($child.$vnode.data.nuxtChild && !$components.filter(c =>(c.$options.__file === $child.$options.__file))) {
        $components.push($child)
      }
      if ($child.$children && $child.$children.length) {
        getNuxtChildComponents($child, $components)
      }
    })
    return $components
  }
var comment= {
  install(Vue){
    Vue.prototype.comment = {
      qiniuimg:function (url,type,Wsize,symbol,Hsize,end) {
        var imgurl = url+'?'+type+Wsize+symbol+Hsize+end;
        return imgurl
      },
      urlEncode : function(param, key, encode) {
        if (param==null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
          paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
        } else {
          for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += this.urlEncode(param[i], k, encode)
          }
        }
        return paramStr;

      },
      setToken:function(){
        let jsonUsers = JSON.parse(localStorage.getItem('users'));
        let expired = false;
        if(jsonUsers){
          let tempDate = new Date().getTime()/1000;
          let oldDate = new Date(jsonUsers.last_login_time).getTime()/1000;
          let difference = tempDate - oldDate ;
          if(difference>7200){
            expired = true;
          }
        }
        return expired;
      },
      formate:function (fmt,date) {
        var o = {
          "M+" : date.getMonth()+1,                 //月份
          "d+" : date.getDate(),                    //日
          "h+" : date.getHours(),                   //小时
          "m+" : date.getMinutes(),                 //分
          "s+" : date.getSeconds(),                 //秒
          "q+" : Math.floor((date.getMonth()+3)/3), //季度
          "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
          fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
          if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
      },
      getUserInfo:function(that){
        let data={};
        let jsonUsers = JSON.parse(localStorage.getItem('users'));
        let getUserInfoUrl =that.$store.state.headerUrl+'member';
        var tempalert = that.$alert;
        $.ajax({
          url:getUserInfoUrl,
          type:'GET', //GET
          async:false,    //或false,是否异步
          timeout:5000,    //超时时间
          dataType:'json',    //返回的数据格式：
          // headers:{token:jsonUsers.token},
          headers:{token:'7ec508a5ce81ed91dd25d389c5800bb7'},
          success:function(resp){
            // if(resp.msg === 'success'){
            if(resp.status === 200){
              data= resp;
            }else{
              // alert(resp.msg);
            /*  tempalert(resp.msg, {
                confirmButtonText: 'ok',
                callback: action => {
                  that.$router.push('/login');
                }
              });*/

            }
          },
          error:function(error){
            // alert('Network anomaly')
            // alert(error);
          }
        })
        return data
      },
      axiosGet:function (url,___,store,params,tempalert){
        let temptoken = null;
        if(localStorage.getItem('users')){
          temptoken =  JSON.parse(localStorage.getItem('users')).token
        }
        let headers = {
          headers:{token:temptoken}
        }
       return axios.get(url,headers).then(function (res) {
         return res
       });
      },
      axiosPost:function (url,___,store,params,tempalert) {
        let temptoken = null;
        if(localStorage.getItem('users')){
          temptoken =  JSON.parse(localStorage.getItem('users')).token
        }
        let headers = {
          headers:{token:temptoken}
        }
        return axios.post(url,params,headers).then(function (res) {
          return res
        });
      },
      axiosPut:function (url,___,store,params,tempalert) {
        let temptoken = null;
        if(localStorage.getItem('users')){
          temptoken =  JSON.parse(localStorage.getItem('users')).token
        }
        let headers = {
          headers:{token:temptoken}
        }
        return axios.put(url,params,headers).then(function (res) {
          return res
        });
      },
      axiosDelete:function (url,___,store,params,tempalert) {
        let temptoken = null;
        if(localStorage.getItem('users')){
          temptoken =  JSON.parse(localStorage.getItem('users')).token
        }
        let headers = {headers:{token:temptoken},data:params};
        return axios.delete(url,headers).then(function (res) {
          return res
        }).catch(function (error) {
          console.log(error)
        });
      },
      stringSplit:function (obj) {
        let reobj =[];
        for(var i =0;i<obj.length;i++){
          reobj.push(
            {
              value:obj[i].split(':')[0],
              label:obj[i].split(':')[1]
            }
          )
        }
       return reobj
      },
      initData:function (store,___) {
        // var that = this;
        let initUrl = store.state.headerUrl + 'init';
         return this.axiosGet(initUrl,axios,store).then(function (res) {
        return res;
        })
      },
      cullocalstorage:function (time) {
        let tempdate = new Date().getTime();
        let istimeout =false;
       // console.log("----"+ (tempdate - time));
         // if(tempdate - time >=172800000 ){
         if(tempdate - time >=  60000 ){
            istimeout =true;
         }else{
            istimeout =false;
         }
         return istimeout
      },
      checkshowindex:function (intoUrl) {
        let temp = '0';
        intoUrl = intoUrl.split('?')[0];
        if(intoUrl ==='/member/membercentre'){
          temp = '0';
        }else if(intoUrl ==='/member/allorder'){
          temp = '1-1';
        }else if(intoUrl ==='/member/negotiatedorder'||intoUrl ==='/member/negotiatedorderdetail'){
          temp = '1-2';
        } else if (intoUrl === '/member/wait/waitingforpaymentorder' || intoUrl === '/member/wait/waitingforpaymentorderdetail' || intoUrl === '/member/wait/info') {
          temp = '1-3';
        } else if (intoUrl === '/member/pending/pendingorder' || intoUrl === '/member/pending/submitpendingorder' || intoUrl === '/member/pending/info') {
          temp = '1-4';
        }else if(intoUrl ==='/member/orderHistory'){
          temp = '1-5';
        }else if(intoUrl ==='/member/dateModification'){
          temp = '3';
        }
        
        else if(intoUrl ==='/member/forwarding'){
          temp = '4';
        }
        else if(intoUrl ==='/member/infoList'){
          temp = '5';
        }
        return temp
      },
      cul:function(num,price){
        num  = Number(num);
        price = Number(price);
        return  (num*price).toFixed(2);
      },
      listcul:function(item,type){
        let count  = 0;
       // console.log(type)
        if(type === 'exw'){
          for(var i =0;i<item.length;i++){
            count =Number(count) + Number(item[i].num)*Number(item[i].sell_price);
          }
        }else{
          for(var i =0;i<item.length;i++){
            count =Number(count) + Number(item[i].num)*Number(item[i].fob_price);
          }
        }
        return count.toFixed(2);
      },

      bubbleSort:function (arr) {
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j].create_time > arr[j+1].create_time) {        //相邻元素两两对比
            var temp = arr[j+1];        //元素交换
            arr[j+1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    },

      /**
       * @desc 假设有一个数组对象，根据id从小到大排序
       * @param {object} obj
       * @param {Boolean} seq true为反序
       * @method object.sort(compare("id"))
       */
      compare(obj,seq) {
        return function (obj1, obj2) {
            var val1 = obj1[obj];
            var val2 = obj2[obj];
            if (val1 < val2 ) {
                return seq? -1 :1 ;
            } else if (val1 > val2 ) {
                return seq? 1 :-1;
            } else {
                return 0;
            }
        }
      },
      /**
       * @desc 去除左右两边空格、制表符、换行符
       * @param {string} str
       */
      Trim(str){
        return str ? str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "") : str;
      },
      /**
       * @desc 使用md5计算文件的MD5值
       * @param
       */
      getfile_md5:function (file, callBack) {
        var fileReader = new FileReader()
        let blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice
        let chunkSize = 2097152
        let chunks = Math.ceil(file.size / chunkSize)
        let currentChunk = 0
        let spark = new SparkMD5()
        fileReader.onload = function (e) {
          spark.appendBinary(e.target.result)
          currentChunk++
          if (currentChunk < chunks) {
            loadNext()
          } else {
            callBack(spark.end())
          }
        }
        function loadNext () {
          var start = currentChunk * chunkSize
          var end = start + chunkSize >= file.size ? file.size : start + chunkSize
          fileReader.readAsBinaryString(blobSlice.call(file, start, end))
        }
        loadNext()
      },
      /**
       * 限定只能输入数字
       * @param {keydown.nativekeydown.native} e
       */
      inputLimit(e) {
        let num = e.target.value || "";
        let code = e.which || e.keyCode;
        let str =
          e.key && e.key != "Unidentified" ? e.key : num.substr(num.length - 1);
        // console.log(
        //   "|type:" + e.type + "|code:" + code + "|str:" + str + "|value:" + num
        // );
        //无论任何情况，皆可执行
        if (code == "8") {
          return true;
        }
        //没有满足任何一种情况，中断执行
        if (!(/[\d.]/.test(str) || code == "190")) {
          e.returnValue = false;
          return false;
        }
        if (
          num.length > 12 ||
          (num.indexOf(".") >= 0 && code == "190") ||
          (num.indexOf(".") == num.length - 3 && num.length > 3) ||
          (num.length == 0 && code == "190")
        ) {
          e.returnValue = false;
          return false;
        }
      }
    };
  }
}
Vue.use(comment);

