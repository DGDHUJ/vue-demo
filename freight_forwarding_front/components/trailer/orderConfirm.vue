<style scoped lang="scss">
  /*.is-checked .el-radio__inner{*/
    /*border-color: #4a3f91 !important;*/
    /*background: #4a3f91 !important;*/
  /*}*/

  .pagecontent{
    margin-top: 20px;
  }
  .orderConfirm{
    /*background-color: #f4f4f4;*/
    .content{
      font-size: 14px;

      .box-card{

      }

      .box-card_1{
        /*height:300px;*/
        margin: 20px 0 20px 0;
        /*background-color: azure;*/
        .title{
          /*overflow: hidden;*/
          font-size: 18px;
          img{
            float: left;
            margin-top: -2px;
          }
          p{
            /*margin-left: 40px;*/
            font-weight: 600;
          }
        }
        .content{
          p{
            margin-top: 16px;
            display: block;
            span :nth-of-type(2){
              color: red;
            }
          }
        }
      }

      .box-card_2{
        /*height: 260px;*/
        margin: 20px 0 20px 0;
        /*background-color: azure;*/
        .title{
          font-size: 18px;
          img{
            float: left;
            margin-top: -4px;
          }
          p{
            font-weight: 600;
            span{
              color: #dadada;
              font-size: 14px;
            }
          }
        }
        .content{
          padding-top:20px;
          .midle > span{
            vertical-align: middle;
          }
          .fileinput-button {
            width: 160px;
            height: 40px;
            position: relative;
            display: inline-block;
            overflow: hidden;
            border-radius: 6px;
            border: 1px solid #979698;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            margin-left: 1%;
            background-color: #4a3f91;
          }
          .fileinput-button input{
            position: absolute;
            width: 160px;
            height: 40px;
            left: 0px;
            top: 0px;
            opacity: 0;
            -ms-filter: 'alpha(opacity=0)';
          }
          .file_text{
            position: relative;
            top: -34px;
            left: 2%;
            color: #f18f37;
            font-size: 14px;
          }
          .el-input{
            width: 420px;
            /*height: 40px;*/
          }
          .el-radio{
            margin-top: 32px;
            margin-bottom: 24px;
          }
          .c2_input{
            margin-top: 12px;
            margin-bottom: 10px;
          }
        }
      }

      .box-card_3{
        /*height:1150px;*/
        margin: 20px 0 20px 0;
        /*background-color: azure;*/
        .title{
          /*overflow: hidden;*/
          font-size: 18px;
          img{
            float: left;
            margin-top: -2px;
          }
          p{
            font-weight: 600;
          }
        }
        .content{
          .time{
            width: 65px;
            margin-left: 10px;
            margin-right: 10px;
          }
          .el-date-editor--date{
            width: 150px !important;
          }
          .textarea{
            resize: none!important;
            width: 400px;
            height: 140px;
            margin-left: 44px;
            border: 1px solid #dcdcdc;
          }
          .textarea::-webkit-input-placeholder{
            color:#c0c4cc;
          }
          .textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#c0c4cc;
          }
          .textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#c0c4cc;
          }
          .textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */
            color:#c0c4cc;
          }
          .label_title{
            color: #8883b2;
            font-weight: bold;
            float: left;
            width: 11%;
          }
          .label_content{
            float: left;
            width: 89%;
          }
          .label_content > p{
            margin-bottom: 40px;
          }
          .c3_input{
            margin-top: 25px;
          }
          .beizhu{
            position: relative;bottom: 120px;
          }
        }
      }

      .box-card_4{
        /*height:250px;*/
        margin: 20px 0 20px 0;
        /*background-color: azure;*/
        .title{
          /*overflow: hidden;*/
          font-size: 18px;
          img{
            float: left;
            margin-top: -2px;
          }
          p{
            font-weight: 600;
          }
        }
        .content{
          >div{
            margin-top: 16px;
            }
          .el-input{
            width: 250px;
            margin-left: 20px;
          }
          .input2{
            margin-left: 48px;
          }
          .input3{
            margin-left: 15px;
            margin-right: 34px;
          }
        }
      }

      .box-card_5{
        margin: 20px 0 20px 0;
        /*background-color: azure;*/
        .title{
          /*overflow: hidden;*/
          font-size: 18px;
          img{
            float: left;
            margin-top: -2px;
          }
          p{
            font-weight: 600;
          }
        }
        .content{
          >div{
            width: 120px;
            float: left;

            p{
              margin-top: 20px;
            }

          }
          div:nth-of-type(2){
            margin-left: 40px;
            margin-bottom: 20px;
          }

        }
      }

      .box-card_6{
        margin: 20px 0 0px 0;
        /*background-color: azure;*/
        .title{
          /*overflow: hidden;*/
          font-size: 18px;
          img{
            float: left;
            margin-top: -2px;
          }
          p{
            font-weight: 600;
          }
        }
        .content1{
          border-bottom: 1px solid #dcdcdc;
          .content_title{
            font-size: 18px;
            color: #4a3f91;
          }
          >div{
            overflow: hidden;
          }
          div p{
            margin-top: 20px;
          }
          div div{
            width: 33%;
            float: left;
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
        .content2{
          overflow: hidden;
          position: relative;
          height: 88px;
          line-height: 88px;
          >div{
            width: 1156px;
            float: left;
            overflow: hidden;
            width: 100%;
          }
          div div{
            float: left;
            width: 33%;
          }
          .content2_img{
            position: absolute;
            top:30px;
            left: -2px;
            z-index: 1000;
            width: 30px;
            height: 30px;
          }
          .content2_span{
            margin-left: 30px;
            .span_title{
              font-weight: 600;
              }
            .span_text{
              color: #f08519;
            }
          }
        }
      }


      .box-card_7{
        margin-top: 46px;
        margin-bottom: 20px;
        .content{
          .code{
            margin:50px 0 0 0 ;
            .code-input{
              overflow: hidden;
              margin:0px 0 10px 0;
              .el-input{
                float: left;
                width: 200px;
                .el-input__inner{
                  border-radius: unset;
                }
              }
              .codetext{
                background: #D6D6E2;
                margin-left: 200px;
                width: 100px;
                text-align: center;
                line-height: 40px;
                height: 40px;
                font-weight: 600;
                font-size: 1.1rem;
              }
            }
            .code-xieyi{
              font-size: 0.875rem;
              margin:10px 0 0 0;
              cursor: pointer;
              .agree{
                color: #4A3F91;
              }
            }
          }
        }
      }


      .box-card_8{
        overflow: hidden;
        margin-bottom: 20px;
        width: 100%;
        border: 0;
        text-align: center;
        .el-button{
          width: 18.4%;
          height: 50px;
          color: #fff;
          background-color: #f08519;
          /*border: 0;*/
          font-size: 16px;
          /*margin:0 auto;*/
        }
        .boder{
          width: 39%;
          height: 24px;
          border-bottom: 1px solid #dcdcdc;
        }
        .b1{
          float: left;
        }
        .b2{
          float: right;
        }
      }


    }
  }

</style>
<style lang="scss">
  .code{
    .code-input{
      .el-input{
        .el-input__inner{
          border-radius: 0;
        }
      }
    }
  }
</style>
<template>
  <div class="orderConfirm">
    <!-- <div class="pageouter"></div> -->
    <div class="layout">
      <div class="orderConfirm-tab">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">拖车列表</el-breadcrumb-item>
          <el-breadcrumb-item>订单确认</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content">
        <!--第1卡片内容-->
        <el-card class="box-card_1">
          <div class="title">
            <img src="../../assets/img/icon1.png" height="30" width="30"/>
            <p>拖车</p>
          </div>
          <div class="content">
            <p><span>拖柜地点：</span><span style="margin-left: 38px">{{trailer_goods.district_full_name}}</span></p>
            <p><span>起运港（码头）</span><span style="margin-left: 9px">{{trailer_goods.port_cn_name}}</span></p>
            <p><span>拖柜日期：</span><span style="margin-left: 36px">{{trailer.trailer_date}}</span></p>
            <p><span>模式：</span>
              <span style="margin-left: 64px" v-if="orderInfo.type===4">自行报关</span>
              <span style="margin-left: 64px"  v-if="orderInfo.type===6">委托报关</span>
            </p>
            <p><span>孖拖：</span><span style="margin-left: 64px">20'GP柜允许孖拖</span><span style="margin-left: 84px">孖拖数量：<span  style="margin-left: 12px">{{trailer.gp20_twin_num}}</span></span></p>
            <p><span>过磅类型：</span><span style="margin-left: 34px">{{show_weigh_type}}</span></p>
            <p><span>熏蒸柜：</span>
              <span v-if="trailer.need_fumigating_cabinet === 1"  style="margin-left: 48px">是</span>
              <span v-if="trailer.need_fumigating_cabinet === 0"  style="margin-left: 48px">否</span>
              <span v-if="trailer.need_fumigating_cabinet === 1" style="margin-left: 176px">熏蒸数量：<span style="margin-left: 12px">{{trailer.fumigating_cabinet_num}}</span></span></p>
          </div>
        </el-card>

        <!--第2卡片内容-->
        <el-card class="box-card_2">
          <div class="title">
            <img src="../../assets/img/icon3.png" height="30" width="30"/>
            <p>上传SO文件/电子号码<span>（SO上传预览功能支持PDF、JPG、PNG、GIF格式的文件）</span></p>
          </div>
          <div class="content">
            <div class="midle">
              <span style="color: red;">*</span><span>SO文件上传：</span>
              <span class="fileinput-button">
                <span>点击上传SO文件</span>
                <input type="file">
              </span>
            </div>
            <div class="c2_input">
              <span>订舱号</span><span style="color: red;margin-left: 30px">*</span><el-input v-model="input1" placeholder="请输入内容"></el-input>
            </div>
          </div>
        </el-card>
        <!--第3卡片内容-->
        <el-card class="box-card_3">
          <div class="title">
            <img src="../../assets/img/icon3.png" height="30" width="30"/>
            <p>拖车信息</p>
          </div>
          <div class="content">
            <div style="margin-top: 10px">
              <span>货重</span><span style="color: red;margin-left: 20px">*</span>
              <el-select v-model="value5" placeholder="请选择货重">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span style="margin-left: 60px">是否平台约柜</span>
              <el-select style="margin-left: 20px" v-model="value11" placeholder="请选择约柜方式">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.labe2"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div style="margin: 20px 0 60px 0;overflow: hidden" v-for="(item,index,key) in address_detail" :key="key">
              <div class="label_title"><span>拖柜地点1：</span></div>
              <div class="label_content">
                <p>
                  <span>工厂详细地址：</span><span style="color: red">*</span><span>{{trailer_goods.district_full_name}}</span><span style="margin-left: 30px">{{item.district_full_name}}</span>
                </p>
                <p>备注：{{item.comment}}</p>
                <p><span>工厂名称：</span><span style="color: red">*</span><span>{{item.company_name}}</span>
                  <span style="margin-left: 8%">工厂联系人：</span><span style="color: red">*</span><span>{{item.contact_name}}</span>
                  <span style="margin-left: 8%">联系电话/手机：</span><span style="color: red">*</span><span>{{item.contact_phone}}</span>
                </p>
                <div>
                  <span>装货时间：</span><span style="color: red">*</span><span>2018-6-30</span>
                  <el-input class="time" v-model="input2" placeholder="时"></el-input>
                  <span>：</span>
                  <el-input class="time" v-model="input2" placeholder="分"></el-input>
                </div>
              </div>
            </div>
            <div style="overflow: hidden">
              <div class="label_title"><span>拖柜地点2：</span></div>
              <div class="label_content">
                <p>
                  <span>工厂详细地址：</span><span style="color: red">*</span><span>广东省 · 佛山市 · 三水区 · 大塘镇</span><span style="margin-left: 30px">大河街114号国际大厦</span>
                </p>
                <p>备注：</p>
                <p><span>工厂名称：</span><span style="color: red">*</span><span>佛上市纳信工厂</span>
                  <span style="margin-left: 8%">工厂联系人：</span><span style="color: red">*</span><span>李四</span>
                  <span style="margin-left: 8%">联系电话/手机：</span><span style="color: red">*</span><span>13535924924</span>
                </p>
                <div>
                  <span>装货时间：</span><span style="color: red">*</span><span>2018-6-30</span>
                  <el-input class="time" v-model="input2" placeholder="时"></el-input>
                  <span>：</span>
                  <el-input class="time" v-model="input2" placeholder="分"></el-input>
                </div>
              </div>
            </div>
            <div class="c3_input">
              <span>最迟补料时间:</span>
              <el-date-picker v-model="value3" type="date" placeholder="选择日期"></el-date-picker>
              <el-input class="time" style="width: 65px" v-model="input2" placeholder="时"></el-input>
              <span>：</span>
              <el-input class="time" style="width: 65px" v-model="input2" placeholder="分"></el-input>
            </div>
            <div class="c3_input" style="">
              <span>开仓时间:</span>
              <el-date-picker v-model="value3" type="date" placeholder="选择日期" style="margin-left: 26px"></el-date-picker>
              <el-input class="time" style="width: 65px" v-model="input2" placeholder="时"></el-input>
              <span>：</span>
              <el-input class="time" style="width: 65px" v-model="input2" placeholder="分"></el-input>
              <span style="margin-left: 34px">截关时间:</span>
              <el-date-picker v-model="value3" type="date" placeholder="选择日期"></el-date-picker>
              <el-input class="time" style="width: 65px" v-model="input2" placeholder="时"></el-input>
              <span>：</span>
              <el-input class="time" style="width: 65px" v-model="input2" placeholder="分"></el-input>
            </div>
            <div class="c3_input">
              <span>PO编号：</span><el-input style="width: 250px;margin-left: 28px" v-model="input1" placeholder="PO编号"></el-input>
            </div>
            <div class="c3_input">
              <span>VGM：</span>
              <el-select style="margin-left: 45px" v-model="value5" placeholder="请选择VGM申报方式"><el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </div>
            <div class="c3_input">
              <span>摆放位置：</span>
              <span style="margin-left: 10px">*</span>
              <el-select v-model="value5" placeholder="选择20'GP柜摆放位置"><el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </div>
            <div class="c3_input">
              <span>两地装货：</span>
              <el-select style="margin-left: 16px" v-model="value5" placeholder="请选择"><el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </div>
            <div class="c3_input">
              <span class="beizhu">备注：</span><textarea class="textarea" placeholder="请输入内容"></textarea>
            </div>
          </div>
        </el-card>
        <!--第4卡片内容-->
        <el-card class="box-card_4">
          <div class="title">
            <img src="../../assets/img/icon4.png" height="30" width="30"/>
            <p>确认您的联系信息</p>
          </div>
          <div class="content">
            <div>
              <span>业务联系人:</span><el-input v-model="input1" placeholder="默认是客户注册时的姓名"></el-input>
            </div>
            <div>
              <span>联系人:</span><el-input class="input2" v-model="input1" placeholder="默认是客户注册时的手机号码"></el-input>
            </div>
            <div>
              <span>备用联系QQ:</span><el-input class="input3" v-model="input1" placeholder="备用联系QQ"></el-input>
              <span>备用WhatsApp:</span><el-input v-model="input1" placeholder="备用WhatsApp"></el-input>
            </div>
          </div>
        </el-card>

        <el-card class="box-card_5">
          <div class="title">
            <img src="../../assets/img/icon5.png" height="30" width="30"/>
            <p>报关信息</p>
          </div>
          <div class="content">
            <div>
              <p style="font-size: 18px;font-weight: bold">报关地点</p>
              <p>广东省 · 深圳市</p>
            </div>
            <div>
            </div>
          </div>
        </el-card>
        <el-card class="box-card_6">
          <div class="title">
            <img src="../../assets/img/icon_01.jpg" height="30" width="30"/>
            <p>确认费用信息</p>
          </div>
          <div class="content1">
            <div>
              <p class="content_title">拖车费用</p>
              <div>
                <span>拖车费：</span><span>10</span>
              </div>
              <div>
                <span>拖车服务费：</span><span>10</span>
              </div>
              <div>
                <span>报关服务费：</span><span>10</span>
              </div>
            </div>
          </div>
          <div class="content2">
            <img class="content2_img" src="../../assets/img/icon7.png" height="30" width="30"/>
            <div class="content2_span">
              <div>
                <span class="span_title">实际费用总计</span>
              </div>
              <div class="span_text">
                <span >USD</span><span>1066</span><span>起</span>
              </div>
              <div class="span_text">
                <span>CNY</span><span>1255</span>
              </div>
            </div>
          </div>
        </el-card>
        <div class="box-card_7">
          <div class="content">
            <div class="code">
             <!-- <div class="code-input">
                <el-input v-model="codevalue" placeholder="请输入验证码"></el-input><div class="codetext">{{code}}</div>
              </div>-->
              <div class="code-xieyi" @click="agreebtn">
                <i v-show="!agree" class="el-icon-circle-check-outline"></i>
                <i v-show="agree" class="el-icon-circle-check agree agree"></i>
                <span :class="{'agree':agree}">我已经阅读同意《纳信物流综合协议》</span>
              </div>
            </div>

          </div>
        </div>

        <div class="box-card_8">
          <div class="boder b1"></div>
          <el-button>确认委托</el-button>
          <div class="boder b2"></div>
        </div>

      </div>
    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
  export default {
    name:'orderConfirm',
    data(){
      return {
        radio1: '0',
        input1:'',
        input2:'',
        value3:'',
        textarea:'',
        options1: [{
          value: '选项1',
          label: '10'
        }, {
          value: '选项2',
          label: '20'
        }, {
          value: '选项3',
          label: '30'
        }],
        options2: [{
          value: '选项1',
          labe2: '电话'
        }, {
          value: '选项2',
          labe2: '邮件'
        }, {
          value: '选项3',
          labe2: '面谈'
        }],
        value5: [],
        value11: [],
        agree:false,
        code:'DIFJ',
        codevalue:'',
        //订单信息
        orderInfo:{},
        trailer:{},
        //拖车详情
        trailer_goods:{},
        //过磅数据
        weigh_type:{},
        //订单过磅类型
        show_weigh_type:'',
        //基础数据
        initData:{},
        //拖柜地点
        address_detail:[],

      };
    },
    methods:{
      agreebtn(){
        this.agree =!this.agree;
      },
      getorderData(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order/104';
        let tempalert = that.$alert;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.orderInfo = resp.data.data;
            that.trailer = that.orderInfo.trailer;
            that.address_detail = that.trailer.address_detail;
            that.gettuocheInfo(that.orderInfo.trailer.trailer_goods_id);
            //获取订单的过磅类型
            for(var key in that.weigh_type){
              if(that.trailer.weigh_type === key ){
                that.show_weigh_type = that.weigh_type[key];
              }
            }
          }
        })
      },
      gettuocheInfo(id){
        var that = this;
        let tempalert = that.$alert;
        let url = that.$store.state.headerUrl +'freight/trailer/goods/'+ id;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.trailer_goods = resp.data.data;
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        })
      }
    },
    mounted(){
      let that = this;
      //基础数据
      if(JSON.parse(localStorage.getItem('initData'))&& !that.comment.cullocalstorage(localStorage.getItem('initDataTime'))){
        that.initData =JSON.parse(localStorage.getItem('initData'));
        that.weigh_type = that.initData.freight.weigh_type;
      }else{
        localStorage.removeItem('initData');
        localStorage.removeItem('initDataTime');
        that.comment.initData(that.$store,that.$axios).then(function (resp) {
          localStorage.setItem('initData',JSON.stringify(resp));
          localStorage.setItem('initDataTime',new Date().getTime());
          that.initData =JSON.parse(localStorage.getItem('initData'));
          that.weigh_type = that.initData.freight.weigh_type;
          that.$store.commit('SET_TITLE',resp.freight.freight_name)
        });
      }
      that.getorderData();

    }


  }
</script>
