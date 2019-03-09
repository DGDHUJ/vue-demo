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
        p{
          height: 25px;
          line-height: 25px;
          margin-bottom: 5px;
        }
        div{
          margin-top: 5px;
          margin-bottom: 5px;
        }
        textarea{
          width: 480px;
          height: 120px;
          padding: 10px;
          resize: none;
          border: 1px solid #dcdcdc;
        }
        .paybtn{
          p{
            font-size: 0.875rem;
            i{
              font-size: 0.875rem;
            }
          }
          .selectagree{
            color: #4A3F91;
          }
          .el-button{
            background: #F08519;
            width: 220px;
            color: white;
            margin:10px 0 0 0;
          }
        }
      }
    }
  }
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
          <p>订单编号：<span>{{orderInfo.sn}}</span></p>
          <p v-if="orderInfo.type ===1">订单类型：<span>订舱</span></p>
          <p v-if="orderInfo.type ===2">订单类型：<span>报关</span></p>
          <p v-if="orderInfo.type ===3">订单类型：<span>订舱+报关</span></p>
          <p v-if="orderInfo.type ===4">订单类型：<span>拖车</span></p>
          <p v-if="orderInfo.type ===5">订单类型：<span>订舱+拖车</span></p>
          <p v-if="orderInfo.type ===6">订单类型：<span>报关+拖车</span></p>
          <p v-if="orderInfo.type ===7">订单类型：<span>订舱+报关+拖车</span></p>
          <div>
            <span>取消原因：</span>
            <el-select v-model="value1" placeholder="请选择取消原因">
              <el-option v-for="(item,index,key) in cancel_reason" :key="key" :label="item" :value="index"></el-option>
            </el-select>
          </div>
          <textarea name="" id="" v-model="miaoshu" placeholder="请您描述取消原因，我们会根据您的反馈改进服务"></textarea>
          <div class="paybtn">
            <p style="cursor: pointer" :class="{'selectagree':selectagreevalue}" @click="selectagree">
              <i v-show="selectagreevalue" class="icon iconfont icon-radio-checked"></i>
              <i v-show="!selectagreevalue" class="icon iconfont icon-danxuankuang1"></i>
              确认取消订单
            </p>
            <el-button class="orderbtn2" @click="calcel">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'cancelOrder',
    data(){
      return{
        orderInfo:'',
        jindu:2,
        value1: '',
        cancel_reason:[],
        miaoshu:'',
        selectagreevalue:false,
      }
    },
    methods:{
      selectagree(){
        this.selectagreevalue =!this.selectagreevalue;
      },
      calcel(){
        let that = this;
        let tempalert = that.$alert;
        if(that.selectagreevalue){
           let params = {
             id:that.$route.query.id,
             cancel_reason:that.value1,
             custom_comment:that.miaoshu
           }
           let url = that.$store.state.headerUrl + 'member/freight_order/apply_cancel'
           that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
             if(resp.data.code === 0){
               this.$router.push({path:'/member/cancelingOrderCheckingList'})
             }
           })
        }else{
          tempalert('请选择确认取消订单', {
            confirmButtonText: '确定',
            callback: action => {
              return
            }
          });
        }
      },
      //获取订单详情
      getOrderdata(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order/'+ that.$route.query.id;
        let tempalert = that.$alert;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.orderInfo = resp.data.data;
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
    },
    mounted(){
      let that = this;
     that.getOrderdata();
      localStorage.removeItem('initData');
      localStorage.removeItem('initDataTime');
      that.comment.initData(that.$store,that.$axios).then(function (resp) {
        localStorage.setItem('initData',JSON.stringify(resp));
        localStorage.setItem('initDataTime',new Date().getTime());
        let initData =JSON.parse(localStorage.getItem('initData'));
        that.cancel_reason = initData.freight.cancel_reason;
        that.$store.commit('SET_TITLE',resp.freight.freight_name)
      });
    }
  }
</script>
