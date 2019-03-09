
import Vue from 'vue'
import $ from 'jquery/dist/jquery.slim.min'
import SparkMD5 from 'spark-md5'
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
    /*  setToken:function(){
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
      },*/
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
      axiosGet:function (url,axios,store,params,tempalert,that){
        let temptoken = null;
        // let temptoken = 'ea9b482bb03a5029295924c0ebac9ae1';
        if(localStorage.getItem('token')){
          temptoken =  localStorage.getItem('token')
        }
        let headers = {
          headers:{token:temptoken}
        }
       return axios.get(url,headers).then(function (res) {
         if(res.data.code === 0){
           return res
         }else{
           tempalert(res.data.msg, {
             confirmButtonText: '确定',
             callback: action => {
               if(res.data.data === '验证token过期'){
                 that.$router.push('/login');
               }
             }
           });
           return res
         }
       }).catch(function (error) {
         tempalert(error, {
           confirmButtonText: '确定',
           callback: action => {

             }
         });
       });
      },
      axiosPost:function (url,axios,store,params,tempalert,that) {
        let temptoken = null;
        if(localStorage.getItem('token')){
          temptoken =  localStorage.getItem('token')
        }
        let headers = {
          headers:{token:temptoken}
        }
        return axios.post(url,params,headers).then(function (res) {
          if(res.data.code === 0){
            return res
          }else{
            tempalert(res.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                if(res.data.data === '验证token过期'){
                  that.$router.push('/login');
                }else{
                  return res
                }
              }
            });
            return res
          }
        }).catch(function (error) {
          tempalert(res.data.msg, {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
        });
      },
      axiosPut:function (url,axios,store,params,tempalert,that) {
        let temptoken = null;
        // let temptoken = 'ea9b482bb03a5029295924c0ebac9ae1';
        if(localStorage.getItem('token')){
          temptoken =  localStorage.getItem('token')
        }
        let headers = {
          headers:{token:temptoken}
        }
        return axios.put(url,params,headers).then(function (res) {
          if(res.data.code === 0){
            return res
          }else{
            tempalert(res.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                if(res.data.data === '验证token过期'){
                  that.$router.push('/login');
                }else{
                  return res
                }
              }
            });
            return res
          }
        }).catch(function (error) {
          tempalert(res.data.msg, {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
        });
      },
      axiosDelete:function (url,axios,store,params,tempalert,that) {
        let temptoken = null;
        // let temptoken = 'ea9b482bb03a5029295924c0ebac9ae1';
        if(localStorage.getItem('token')){
          temptoken =  localStorage.getItem('token')
        }
        let headers = {headers:{token:temptoken},data:params};
        return axios.delete(url,headers).then(function (res) {
          if(res.data.code === 0){
            return res
          }else{
            tempalert(res.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                if(res.data.data === '验证token过期'){
                  that.$router.push('/login');
                }else{
                  return res
                }
              }
            });
            return res
          }
        }).catch(function (error) {
          tempalert(res.data.msg, {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
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
      initData:function (store,axios) {
        // var that = this;
        let initUrl = store.state.headerUrl + 'freight/init';
         return this.axiosGet(initUrl,axios,store).then(function (res) {
          return res.data.data;
        })
      },
      cullocalstorage:function (time) {
        let tempdate = new Date().getTime();
        let istimeout =false;//是否已经过期
        time = Number(time);
         // if(tempdate - time >=172800000 ){
         if(tempdate - time >=  60000 ){
            istimeout =true;
         }else{
            istimeout =false;
         }
         return istimeout
      },
      checkshowindex:function (intoUrl) {
        let temp = '1';
        intoUrl = intoUrl.split('?')[0];
        if(intoUrl ==='/member/menberHome'){
          temp = '1';
        }else if(intoUrl ==='/member/pendingOrderlist'){
          temp = '2';
        }else if(intoUrl ==='/member/processingOrderlist'||intoUrl ==='/member/negotiatedorderdetail'){
          temp = '3';
        }else if(intoUrl ==='/member/pendingMoney'||intoUrl ==='/member/waitingforpaymentorderdetail'){
          temp = '4';
        }else if(intoUrl ==='/member/cancelingOrderCheckingList'||intoUrl ==='/member/submitpendingorder'){
          temp = '9';
        }else if(intoUrl ==='/member/CancOrder'){
          temp = '5';
        }else if(intoUrl ==='/member/menberData'){
          temp = '6';
        }else if(intoUrl ==='/member/myBill'||intoUrl ==='/member/myorderdetails'){
          temp = '8';
        }else if(intoUrl ==='/member/processingDetial'||intoUrl ==='/member/outletHome'){
          temp = '10';
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
      getcountry:function (that) {
        let url = that.$store.state.headerUrl + 'country';
        that.$axios.get(url).then(function (res) {
          if(res.data.code === 0){
            let temp =[];
            for(var i = 0; i <res.data.data.length; i++ ){
              temp[res.data.data[i].id] =  res.data.data[i];
            }
            that.$store.state.countryData =  temp;
            sessionStorage.setItem('countryData',JSON.stringify(temp))
          }
        }).catch(function (error) {

        });
      },
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
      jisuan:function (price,num) {
        if(price===null||price===''||num===null||num===''){
          return ''
        }else{
          return Number(price)*Number(num);
        }
      }
    };
  }
}
Vue.use(comment);

