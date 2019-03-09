<template>
  <div>
    <topheader/>
    <contentheader/>
    <div>
      <!-- <div class="pageouter"></div> -->
      <div class="layout" v-loading="loading" >
        <!--面包屑-->
        <div class="orderConfirm-tab" style="line-height: 50px;height: 50px">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: 50px;height: 50px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'member-menberHome' }">会员中心</el-breadcrumb-item>
            <el-breadcrumb-item>代理出口</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="line1">
          <div><p>出口代理</p> <p>- 编号{{orderData.sn}}</p> </div>
          <div @click="gohuiyuancentre">返回会员中心</div>
        </div>
        <div class="line2">
          <div class="title">
            <i class="iconfont icon-dingdan1"></i>
            <p>订单进度</p>
          </div>
          <div class="table">
            <div class="table-title">
              <div class="table-item">进度</div>
              <div class="table-item">操作时间</div>
              <div class="table-item">操作者</div>
              <div class="table-item">重要标记</div>
            </div>
            <div class="table-list">
              <div class="table-content" v-if="orderData!==null" v-for="(item,index) in process_list" :key="index">
                <div class="table-item">{{item.process}}</div>
                <div class="table-item">{{comment.formate('yyyy-MM-dd hh:mm:ss',new Date(item.create_time))}}</div>
                <div class="table-item">{{item.operator}}</div>
                <div class="table-item">{{item.remark}}</div>
              </div>
            <!--  <div class="table-content">
                <div class="table-item">订单创建</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">用户ID</div>
                <div class="table-item"></div>
              </div>
              <div class="table-content">
                <div class="table-item">出口文件制作</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">操作12345</div>
                <div class="table-item"></div>
              </div>
              <div class="table-content">
                <div class="table-item">出口文件寄出</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">操作12345</div>
                <div class="table-item">顺丰123456789</div>
              </div>
              <div class="table-content">
                <div class="table-item">结汇申请1</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">用户ID</div>
                <div class="table-item"></div>
              </div>
              <div class="table-content">
                <div class="table-item">结汇申请1 - 退回</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">财务12345</div>
                <div class="table-item">缺少水单，请修改重新提交 <span>查看</span></div>
              </div>
              <div class="table-content">
                <div class="table-item">结汇申请1</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">用户ID</div>
                <div class="table-item"></div>
              </div>
              <div class="table-content">
                <div class="table-item">结汇申请1 - 已结汇</div>
                <div class="table-item">2018-7-5  15:36:47</div>
                <div class="table-item">结汇申请1 - 已结汇</div>
                <div class="table-item"><span>查看</span></div>
              </div>-->
            </div>

          </div>

        </div>
        <div class="line3">
          <div class="detail">
            <div class="title">
              <img src="../assets/img/852.png" height="23" width="24"/>
              <p>出口详情</p>
            </div>
            <div class="show-item" :class="isshowall ?'showall':'unshowall'">
              <div class="detail-item">出口金额：{{orderData.total_price}}</div>
              <div class="detail-item">PO号：{{orderData.po_num}}</div>
              <div class="detail-item">买家名称：{{orderData.buyer_name}}</div>
              <div class="detail-item">合同协议号 :{{orderData.agreement}}</div>
              <div class="detail-item">贸易国：{{orderData.trading_country_name}}</div>
              <div class="detail-item">买家国家：{{orderData.buyer_country_name}}</div>
              <div class="detail-item">境内货源地：{{orderData.original_place}}</div>
              <div class="detail-item">运输方式：{{orderData.transport_type}}</div>
              <div class="detail-item">运抵国：{{orderData.arrival_country_name}}</div>
              <div class="detail-item">起运港：{{orderData.pol_port}}</div>
              <div class="detail-item">装柜地址：{{orderData.load_address}}</div>
              <div class="detail-item">目的港：{{orderData.pod_port}}</div>
              <div class="detail-item">付款方式：{{orderData.payment_type}}</div>
              <div class="detail-item">装柜时间：{{orderData.load_time}}</div>
              <div class="detail-item">包装种类：{{orderData.pack_type}}</div>
              <div class="detail-item">价格条款：{{orderData.price_clause}}</div>
              <div class="detail-item">集装箱柜号：{{orderData.container_num}}</div>
              <div class="detail-item">封条号：{{orderData.seal_num}}</div>
              <div class="detail-item">关联货代服务：{{orderData.third_order_sn}}</div>
              <div class="detail-item1">备注：{{orderData.comment}}</div>
              <div class="detail-check" @click="gobreakdown">查看出口商品明细</div>
            </div>
            <div class="show-detail-item" @click="isshowall=!isshowall">
              <img v-if="isshowall" src="../assets/img/shouqi.png" height="24" width="36"/>
              <img v-if="!isshowall" src="../assets/img/zhankai.png" height="25" width="36"/>
            </div>
          </div>
        </div>
        <div class="line4">
          <div class="tab" :class="{'tab-active':tabactive===1}" @click="selecttab(1)">出口单证</div>
          <div class="tab" :class="{'tab-active':tabactive===2}" @click="selecttab(2)">外汇结汇</div>
          <div class="tab" :class="{'tab-active':tabactive===3}" @click="selecttab(3)">出口退税</div>
        </div>
        <div class="line5">
          <div class="title">
            <img src="../assets/img/detail3.png" height="27" width="29"/>
            <p v-if="tabactive===1">出口单证</p>
            <p v-if="tabactive===2">外汇结汇</p>
            <p v-if="tabactive===3">出口退税</p>
          </div>
          <div class="content">
            <div class="tabconent1" v-if="tabactive===1">
              <div class="loadmodal">下载合同模板</div>
              <div class="ties">温馨提示：请下载合同模版，填写完毕盖章后邮寄到以下地址，并输入快递单号</div>
              <div class="info">收件人：纳信</div>
              <div class="info">收件地址：中国广东省佛山市禅城区季华一路28号T8幢801房</div>
              <div class="info">联系电话：0757-82581931</div>
              <div class="info-form">
                <p class="info-form-title">输入快递单号:</p>
                <el-input class="inputpostnum" v-model="postnum"></el-input>
                <div class="info-form-btn" @click="_savekuaidinum">确定</div>
              </div>
            </div>
            <div class="tabconent2" v-if="tabactive===2">
              <div class="loadmodal" @click="_shenqingjiehui">申请结汇</div>
              <div class="form-header">
                <div class="header-item">序号</div>
                <div class="header-item">申请金额</div>
                <div class="header-item">申请日期</div>
                <div class="header-item">提单</div>
                <div class="header-item">购销发票</div>
                <div class="header-item">报关单</div>
                <div class="header-item">处理状态</div>
                <div class="header-item">结汇到账金额</div>
                <div class="header-item">结汇到账水单</div>
                <div class="header-item">操作</div>
              </div>
              <div class="tabconent2-content">
                <div class="content-list" v-for="(item,index) in jiehuidata" :key="index">
                  <div class="list-item">{{index+1}}</div>
                  <div class="list-item">{{item.pay_sum}}</div>
                  <div class="list-item">{{item.pay_date}}</div>
                  <div class="list-item look" @click="openwindow(item.tidan_file)">查看</div>
                  <div class="list-item look" @click="openwindow(item.ps_invoice)">查看</div>
                  <div class="list-item look" @click="openwindow(item.customs_file)">查看</div>
                  <div class="list-item" v-if="item.check_status === 'wait_check'">待审核</div>
                  <div class="list-item" v-if="item.check_status === 'reject'">退回</div>
                  <div class="list-item" v-if="item.check_status === 'checked'">已结汇</div>
                  <div class="list-item">{{item.to_account_sum}}</div>
                  <div class="list-item look" @click="openwindow(item.pay_file)">查看</div>
                  <div class="list-item look" @click="lookdetail(item.id,1)">查看</div>
                </div>
              </div>
            </div>
            <div class="tabconent3" v-if="tabactive===3">
              <div class="loadmodal" @click="_drawback">申请退税垫付</div>
              <div class="hot-ties">温馨提示：结汇未完成前不能申请退税垫付</div>
              <div class="form-header">
                <!--<div class="header-item">结汇金额</div>-->
                <div class="header-item">报关金额</div>
                <div class="header-item">发票金额</div>
                <div class="header-item">退税率</div>
                <div class="header-item">申请日期</div>
                <div class="header-item">购销发票</div>
                <div class="header-item">报关单</div>
                <div class="header-item">处理状态</div>
                <div class="header-item">退税到账金额</div>
                <div class="header-item">操作</div>
              </div>
              <div class="tabconent3-content">
                <div class="content-list" v-if="tuishuidata !==null" >
                  <!--<div class="list-item">1000000000</div>-->
                  <div class="list-item">{{tuishuidata.customs_sum}}</div>
                  <div class="list-item">{{tuishuidata.invoice_sum}}</div>
                  <div class="list-item ">{{tuishuidata.drawback_rate}}%</div>
                  <div class="list-item ">{{tuishuidata.invoice_date}}</div>
                  <div class="list-item look" @click="openwindow(tuishuidata.ps_invoice)">查看</div>
                  <div class="list-item look" @click="openwindow(tuishuidata.customs_file)">查看</div>
                  <div class="list-item" v-if="tuishuidata.check_status==='wait_check'">待审核</div>
                  <div class="list-item" v-if="tuishuidata.check_status==='reject'">退回</div>
                  <div class="list-item" v-if="tuishuidata.check_status==='checked'">已结汇</div>
                  <div class="list-item" >{{tuishuidata.to_account_sum}}</div>
                  <div class="list-item look" @click="lookdetail('',2)">查看</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="pageouter"></div> -->
    </div>
    <homeguarantees/>
    <webfooter/>
  </div>
</template>
<script>
  import topheader from '../components/comment/topheader.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  export default {
    name:'agentOutletDetail',
    components:{
      topheader:topheader,
      contentheader:contentheader,
      homeguarantees:homeguarantees,
      webfooter:webfooter
    },
    data(){
      return{
        loading:true,
        tabactive:1,
        postnum:null,
        isshowall:true,
        orderData:{},
        process_list:[],
        city:[],
        jiehuidata:[],
        tuishuidata:null,
      }
    },
    methods:{
      lookdetail(tempid,index){
        if(index === 1){
          this.$router.push({name:'settlement',query:{id:this.$route.query.id,sn:this.orderData.sn,tempid:tempid}})
        }else{
//          this.$router.push({name:'settlement',query:{id:this.$route.query.id,sn:this.orderData.sn,tempid:tempid}})
          this.$router.push({name:'drawback',query:{id:this.$route.query.id,sn:this.orderData.sn,type:'dt'}})

        }

      },
      openwindow(url){
        window.open(url);
      },
      _shenqingjiehui(){
        this.$router.push({name:'settlement',query:{id:this.$route.query.id,sn:this.orderData.sn}})
      },
      _drawback(){
        let tempalert = this.$alert;
        if(this.orderData.status<20){
          tempalert("结汇未完成前不能申请退税垫付", {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        }else if(this.tuishuidata !== null){
          tempalert("已经申请了退税垫付", {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        } else{
          this.$router.push({name:'drawback',query:{id:this.$route.query.id,sn:this.orderData.sn}})
        }

      },
      _getjiehuidata(){
        let that  = this;
        let url = that.$store.state.headerUrl + 'member/exchange_settlement/by_order_id/' + that.$route.query.id;
        that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code === 0){
            that.jiehuidata = resp.data.data;
          }
        }).catch(function (error) {

        })
      },
      _gettuishuidata(){
        let that  = this;
        let url = that.$store.state.headerUrl + 'member/drawback/by_order_id/' + that.$route.query.id;
        that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code === 0){
            that.tuishuidata = resp.data.data;
          }
        }).catch(function (error) {

        })
      },
      selecttab(index){
        this.tabactive = index;
        if(index === 2){
          this._getjiehuidata();

        }
        if(index === 3){
          this._gettuishuidata();
        }
      },
      gohuiyuancentre(){
        this.$router.push({name:'member-menberHome'})
      },
      gobreakdown(){
        this.$router.push({name:'breakdown',query:{id:this.$route.query.id}})
      },
      getorderInfo(){
        let that = this;
        let tempid = that.$route.query.id
        let url = that.$store.state.headerUrl + 'member/export_agent_order/'+tempid;
        let tempalert = that.$alert;
        that.comment.axiosGet(url,that.$axios,that.$store,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.orderData = resp.data.data;
            that.process_list = resp.data.data.process_list;
            for(var i = 0;i<that.city.length;i++){
              if(that.city[i]!==null){
                if(that.city[i].id===that.orderData.trading_country_id){
                  that.orderData.trading_country_name = that.city[i].cn_name;
                }
                if(that.city[i].id===that.orderData.buyer_country_id){
                  that.orderData.buyer_country_name = that.city[i].cn_name;
                }
                if(that.city[i].id===that.orderData.arrival_country_id){
                  that.orderData.arrival_country_name = that.city[i].cn_name;
                }
              }
            }
            that.loading = false
          }
        })
      },
      _savekuaidinum(){
        let that  = this;
        let url = that.$store.state.headerUrl + 'member/export_agent_order/contract_express_no';
        let tempalert = that.$alert;
        let params = {
          id:Number(that.$route.query.id),
          contract_express_no:that.postnum
        }
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
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
      let  that = this;
      //国家数据
      if(sessionStorage.getItem('countryData')){
        that.$store.state.countryData = JSON.parse(sessionStorage.getItem('countryData'));
      }else{
        that.comment.getcountry(that);
      }
      that.city = that.$store.state.countryData;
      that.getorderInfo();
    }
  }
</script>
<style scoped lang="scss">
  .line1{
    padding:10px 20px;
    background: white;
    margin-top:10px;
    overflow: hidden;
    div:nth-of-type(1){
      float: left;
      p:nth-of-type(1){
        font-size: 20px;
        color: #4A3F91;
        float: left;
        font-weight: bold;
        line-height: 30px;
        height: 30px;
      }
      p:nth-of-type(2){
        /*display: inline-block;*/
        float: left;
        line-height: 30px;
        height: 30px;
        font-size: 16px;
      }
    }
    div:nth-of-type(2){
      float: right;
      line-height: 30px;
      height: 30px;
      color: #F08519;
      cursor: pointer;
      font-size: 16px;
    }
    div:nth-of-type(2):active{
      font-size: 17px;
    }
  }
  .line2{
    background: white;
    padding:10px 20px;
    margin-top:20px;
    .title{
      overflow: hidden;
      font-size: 16px;
      line-height: 30px;
      height: 30px;
      i{
        float: left;
        color: #4A3F91;
        font-size: 20px;
      }
      p{
        float: left;
        margin-left:10px;
        color: black;
        font-weight: bold;
      }
    }
    .table{
      margin-top: 10px;
      .table-title{
        overflow: hidden;
        .table-item{
          width: 25%;
          float: left;
          background:#4A3F91 ;
          color: white;
          text-align: center;
          line-height: 40px;
          height: 40px;
          font-size: 14px;
          font-weight: bold;
        }
      }
      .table-list{
        height: 120px;
        overflow-y: scroll;
        .table-content{
          overflow: hidden;
          .table-item{
            width: 25%;
            float: left;
            text-align: center;
            line-height: 40px;
            height: 40px;
            font-size: 14px;
            span{
              cursor: pointer;
              color: #24A7D3;
            }
            span:active{
              font-size: 16px;
            }
          }
        }
      }

    }

  }
  .line3{
    background: white;
    padding:10px 20px;
    margin-top:20px;
    overflow: hidden;
    .title{
      overflow: hidden;
      font-size: 16px;
      line-height: 30px;
      height: 30px;
      img{
        float: left;
      }
      p{
        float: left;
        margin-left:10px;
        color: black;
        font-weight: bold;
      }
    }
    .show-item{
      overflow: hidden;
      .detail-item{
        float: left;
        font-size: 14px;
        width: 35%;
        min-width: 350px;
        line-height: 40px;
        height: 40px;
      }
      .detail-item1{
        font-size: 14px;
        width: 100%;
        float: left;
        line-height: 40px;
        height: 40px;
      }
      .detail-check{
        margin:30px 0;
        font-size: 14px;
        width: 100%;
        float: left;
        line-height: 40px;
        height: 40px;
        color:#4A3F91 ;
        cursor: pointer;
      }
      .detail-check:active{
        font-size: 16px;
      }
    }
    .showall{
      height: 100%;
    }
    .unshowall{
      height: 90px;
    }
    .show-detail-item{
      text-align: center;
      cursor: pointer;
    }
  }
  .line4{
    overflow: hidden;
    margin-top:20px;
    .tab{
      border:1px solid #4A3F91;
      color: #4A3F91;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: bold;
      float: left;
      width: 180px;
      cursor: pointer;
      text-align: center;
      margin-right:40px;
      border-radius: 3px;
    }
    .tab:active{
      font-size: 18px;
    }
    .tab-active{
      border:none;
      color: white;
      background:#F08519 ;
    }
  }
  .line5{
    background: white;
    padding:20px 20px;
    margin-top:20px;
    overflow: hidden;
    .title{
      overflow: hidden;
      font-size: 16px;
      line-height: 30px;
      height: 30px;
      img{
        float: left;
      }
      p{
        float: left;
        margin-left:10px;
        color: black;
        font-weight: bold;
      }
    }
    .content{
      margin-top:20px;
      .tabconent1{
        .loadmodal{
          background: #4A3F91;
          color: white;
          width: 180px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
        }
        .loadmodal:active{
          font-size: 18px;
        }
        .ties{
          color: red;
          font-size: 14px;
          padding:10px 0 20px 0;
        }
        .info{
          font-size: 16px;
          padding:0px 0 20px 0;
        }
        .info-form{
          line-height: 40px;
          height: 40px;
          overflow: hidden;
          font-size: 16px;
          .info-form-title{
            float: left;
            margin-right:20px;
          }
          .inputpostnum{
            float: left;
            width:200px;margin-right:20px;
          }
          .info-form-btn{
            float: left;
            width:100px;
            text-align: center;
            background:#F08519 ;
            color: white;
            cursor: pointer;
            border-radius: 3px;
            font-weight: bold;
          }
          .info-form-btn:active{
            font-size: 18px;
          }
        }
      }
      .tabconent2{
        .loadmodal{
          background: #4A3F91;
          color: white;
          width: 180px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
        }
        .loadmodal:active{
          font-size: 18px;
        }
        .form-header{
          margin:30px 0 0 0;
          overflow: hidden;
          .header-item{
            background: #4A3F91;
            color: white;
            width: 10%;
            float: left;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: bold;
            border: 1px solid #ddd;
            border-left: none;
          }
        }
        .tabconent2-content{
          margin:0 0 30px 0;
          overflow: hidden;
          .content-list{
            overflow: hidden;
            .list-item{
              float: left;
              height: 40px;
              line-height: 40px;
              border: 1px solid #ddd;
              border-left: none;
              border-bottom: none;
              width: 10%;
              text-align: center;
              font-size: 14px;
            }
            .list-item:first-of-type{
              border-left: 1px solid #ddd;
            }
            .look{
              color: #4A3F91;
              cursor: pointer;
              font-weight: bold;
            }
            .look:active{
              font-size: 16px;
            }
          }
          .content-list:last-of-type{
            border-bottom: 1px solid #ddd;
          }
        }

      }
      .tabconent3{
        overflow: hidden;
        .loadmodal{
          background: #4A3F91;
          color: white;
          width: 180px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          float: left;
        }
        .loadmodal:active{
          font-size: 18px;
        }
        .hot-ties{
          float: left;
          margin-left: 20px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          color: red;
        }
        .form-header{
          margin:70px 0 0 0;
          overflow: hidden;
          clear: both;
          .header-item{
            background: #4A3F91;
            color: white;
            width: 11.11%;
            float: left;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: bold;
            border: 1px solid #ddd;
            border-left: none;
          }
        }
        .tabconent3-content{
          margin:0 0 30px 0;
          overflow: hidden;
          .content-list{
            overflow: hidden;
            .list-item{
              float: left;
              height: 40px;
              line-height: 40px;
              border: 1px solid #ddd;
              border-left: none;
              border-bottom: none;
              width: 11.11%;
              text-align: center;
              font-size: 14px;
            }
            .list-item:first-of-type{
              border-left: 1px solid #ddd;
            }
            .look{
              color: #4A3F91;
              cursor: pointer;
              font-weight: bold;
            }
            .look:active{
              font-size: 16px;
            }
          }
          .content-list:last-of-type{
            border-bottom: 1px solid #ddd;
          }
        }
      }
    }
  }
</style>
