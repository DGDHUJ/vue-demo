<style scoped lang="scss">
  .cancelOrderChecking{
    margin-top:40px;
    .orderInfo{
      background: white;
      padding:20px;
      .title{
        overflow: hidden;
        img{
          float: left;
        }
        p{
          height: 25px;
          line-height: 24px;
          font-size: 1.2rem;
          margin: 0 0 0 40px;
          font-weight: 600;
          color: #4A3F91;
        }
      }
      .jindubar{
        display: flex;
        margin-top: 20px;
        .items-tab{
          width: 20%;
          position: relative;
          .item1{
            width: 60px;
            height: 60px;
            padding: 16px 19px;
            border-radius: 50%;
            border: 2px solid #ddd;
            z-index: 1;
            background: white;
            position: relative;
          }
          .item1-active{
            border: 2px solid #4A3F91;
          }
          .item2{
            top: 29px;
            width: 100%;
            position: absolute;
          }
          .text{
            font-size: 0.875rem;
            padding:10px 2px;
          }
          .text-active{
            color:#4A3F91 ;
          }
        }
        .items-tab1{
          width: 20%;
          position: relative;
          .item1{
            width: 60px;
            height: 60px;
            padding: 19px 16px;
            border-radius: 50%;
            border: 2px solid #ddd;
            z-index: 1;
            background: white;
            position: relative;
          }
          .item1-active{
            border: 2px solid #4A3F91;
          }
          .item2{
            top: 29px;
            width: 100%;
            position: absolute;
          }
          .text{
            font-size: 0.875rem;
            padding:10px 2px;
          }
          .text-active{
            color:#4A3F91 ;
          }
        }
        .item2finish{
          transition-delay: 0ms;
          border-width: 1px;
          width: 100%;
          color: #4A3F91;
        }
        .unitem2finish{
          transition-delay: 0ms;
          border-width: 1px;
          width: 100%;
          color:#ddd;
        }
      }
      .ties{
        color: #F08519;
        font-size: 0.875rem;
        margin:10px 0;
      }
      .cancelInfo{
        font-size: 0.875rem;
        padding: 20px 0;
        border-bottom: 2px solid #ddd;
        p{
          height: 25px;
          line-height: 25px;
          margin-bottom: 5px;
        }
      }
      .kefu{
        overflow: hidden;
        padding: 20px 0;
        .item{
          width:60%;
          display: inline-block;
          p:nth-of-type(1){
            font-size: 0.875rem;
            color:#4A3F91 ;
            span{
              color: #000;
            }
          }
          p:nth-of-type(2){
            font-size: 0.7rem;
            color: #ACACAC;
          }
        }
        .lianxibtn{
          float: right;
          margin-right: 15%;
          .el-button{
            padding:12px 40px;
            background: #F08519;
            color: white;
            font-weight: 600;
          }
        }

      }
    }
    .costInfo{
      background: white;
      padding:20px;
      margin-top: 20px;
      .title{
        overflow: hidden;
        img{
          float: left;
        }
        p{
          height: 25px;
          line-height: 24px;
          font-size: 1.2rem;
          margin: 0 0 0 40px;
          font-weight: 600;
        }
      }
      .dingcangcost{
        padding: 0 0 30px 0;
        border-bottom: 1px solid #ddd;

        .items{
          font-size: 0.875rem;
          height: 30px;
          line-height: 30px;
          p{
            display: inline-block;
          }

        }
      }
      .tuochecost{
        padding: 30px 0;
        border-bottom: 1px solid #ddd;
        .sub-title{
          padding:5px 0;
          font-size: 1rem;
          color:#4A3F91;
        }
        .items{
          font-size: 0.875rem;
          height: 30px;
          line-height: 30px;
          p{
            display: inline-block;
            min-width: 135px;
          }
          .fenge{
            color: #F08519;
            margin:0 5%;
          }
        }
      }
      .needtopay{
        padding: 30px 0;
        .text{
          font-size: 1rem;
          font-weight: 600;
          p{
            display: inline-block;
          }
          p:nth-of-type(2){
            color: #F08519;
            margin-left: 4%;
          }
          p:nth-of-type(3){
            color: #F08519;
            margin-left: 8%;
          }
        }
        .paybtn{
          text-align: right;
          padding:30px 15% 0 0;
          p{
            font-size: 0.875rem;
            cursor: pointer;
            i{
              font-size: 0.875rem;
              margin-right:2px;
            }
          }
          .selectagree{
            color: #4A3F91;
          }
          .el-button{
            background: #F08519;
            color: white;
            padding:12px 40px;
            margin:20px 0 0 0;
          }
        }
      }
    }
    .fee{
      font-size: 0.875rem;
      .items-list{
        display: inline-block;padding: 10px 0;
        .fengeline{
          color: #F08519;margin: 0 20px;
        }
      }
    }
  }
</style>
<style  lang="scss">

</style>
<template>
  <section class="container">
    <div class="cancelOrderChecking">
      <div class="orderInfo">
         <div class="title">
           <img src="../../assets/img/cancel.png"/>
           <p>取消订单</p>
         </div>
         <div class="jindubar">
           <div class="items-tab">
             <div class="item1" :class="{'item1-active':jindu>=1}">
               <img src="../../assets/img/wenzhangcancel.png" height="27" width="22"/>
             </div>
             <div class="item2">
               <i class="el-step__line-inner " :class="{'item2finish':jindu>1,'unitem2finish':jindu<=1}"></i>
             </div>
             <div class="text" :class="{'text-active':jindu>=1}">
               <p>申请取消</p>
             </div>
           </div>
           <div class="items-tab1">
             <div class="item1 " :class="{'item1-active':jindu>=2}">
               <img src="../../assets/img/talk.png" height="22" width="27"/>
             </div>
             <div class="item2">
               <i class="el-step__line-inner" :class="{'item2finish':jindu>2,'unitem2finish':jindu<=2}" ></i>
             </div>
             <div class="text" :class="{'text-active':jindu>=2}">
               <p>客服联系</p>
             </div>
         </div>
           <div class="items-tab">
             <div class="item1" :class="{'item1-active':jindu>=3}">
               <img src="../../assets/img/check.png" height="23" width="21"/>
             </div>
             <div class="item2">
               <i class="el-step__line-inner" :class="{'item2finish':jindu>3,'unitem2finish':jindu<=3}"></i>
             </div>
             <div class="text" :class="{'text-active':jindu>=3}">
               <p>审核结果</p>
             </div>
           </div>
           <div class="items-tab">
             <div class="item1 " :class="{'item1-active':jindu>=4}">
               <img src="../../assets/img/gou1.png" height="22" width="22"/>
             </div>
             <div class="text" :class="{'text-active':jindu>=4}">
               <p>服务完成</p>
             </div>
           </div>
         </div>
         <div class="ties">
           <p>您正在申请取消订单，如之前的服务中已经产生费用将由您负担，为避免造成损失请您先咨询客服再操作。</p>
         </div>
         <div class="cancelInfo">
           <p>订单编号：<span>{{orderData.sn}}</span></p>
           <p>订单类型：
             <span v-if="orderData.type ===1">订舱</span>
             <span v-if="orderData.type ===2">报关</span>
             <span v-if="orderData.type ===3">订舱+报关</span>
             <span v-if="orderData.type ===4">拖车</span>
             <span v-if="orderData.type ===5">订舱+拖车</span>
             <span v-if="orderData.type ===6">报关+拖车</span>
             <span v-if="orderData.type ===7">订舱+报关+拖车</span>
           </p>
           <p>取消原因：<span>{{orderData.cancel_reason}}</span></p>
         </div>
         <div class="kefu">
           <div class="item">
             <p>客服回复：<span>{{orderData.comment}}</span></p>
             <p>2018-7-15  15:30:40</p>
           </div>
           <div class="lianxibtn">
             <el-button v-if="!isaskkefu" @click="ask()">联系客服</el-button>
             <el-button v-if="!isaskkefu" @click="ask()">联系客服</el-button>
           </div>
         </div>
       </div>
      <div class="costInfo">
        <div class="title">
          <img src="../../assets/img/costInfo.png" height="28" width="26"/>
          <p>已产生费用信息</p>
        </div>
        <div class="fee" style="">
          <div class="items" >
            <div class="items-list" v-for="(item,index,key) in cancel_fee" :key="key" style="">
              <p >
                {{item.fee_name}}：
                <span>{{item.currency}}&nbsp;&nbsp;{{item.fee}}&nbsp;&nbsp;x &nbsp;&nbsp;{{item.num}}</span>
                <span  class="fengeline" >丨</span>
              </p>
            </div>
          </div>
        </div>
        <div class="needtopay">
          <div class="text">
            <p>取消订单支付费用总计 :</p>
            <p>USD {{countfee1}} 起</p>
            <p>CNY {{countfee2}}</p>
          </div>
          <div class="paybtn">
            <p class="jieshou" :class="{'selectagree':selectagreevalue}" @click="selectagree">
              <i v-show="selectagreevalue" class="icon iconfont icon-radio-checked"></i>
              <i v-show="!selectagreevalue" class="icon iconfont icon-danxuankuang1"></i>
              我同意负担此费用并取消订单
            </p>
            <el-button @click="submitcancel">取消订单</el-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'cancelOrderChecking',
    data(){
      return{
        jindu:2,
        selectagreevalue:false,
        orderData:{},
        cancel_fee:null,
        countfee1:0,
        countfee2:0,
        isaskkefu:false,
      }
    },
    methods:{
      ask(){
        this.isaskkefu = !this.isaskkefu;
        if(this.isaskkefu){
          _MEIQIA('showPanel')
        }else{
          _MEIQIA('hidePanel')
        }
      },
      selectagree(){
        this.selectagreevalue =!this.selectagreevalue;
      },
      submitcancel(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order/confirm_cancel_fee/' + Number(that.orderData.id);
        let tempalert = that.$alert;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                that.$router.push({path:'/member/menberHome'});
                return
              }
            });
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
              return
            }
          });
        })
      },
      //获取订单信息
      getOrderData(){
        let that = this;
        let tempalert = that.$alert;
        let url = that.$store.state.headerUrl + 'member/freight_order/cancel_fee/' + that.$route.query.id;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.orderData = resp.data.data;
            that.cancel_fee = resp.data.data.cancel_fee;
            if(that.cancel_fee !==[]&&that.cancel_fee!==null){
              for(var i = 0;i<that.cancel_fee.length;i++){
                if(that.cancel_fee[i].currency === 'USD'){
                  that.countfee1 = that.countfee1 + (Number(that.cancel_fee[i].num) *Number(that.cancel_fee[i].fee));
                }else{
                  that.countfee2 = that.countfee2 + (Number(that.cancel_fee[i].num) *Number(that.cancel_fee[i].fee));
                }
              }
            }
          }
        }).catch(function (error) {

        })
      }
    },
    mounted(){
     let that = this;
     that.getOrderData();
    }
  }
</script>
