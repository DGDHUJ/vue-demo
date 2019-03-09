<style scoped lang="scss">
  .processingDetial{
    margin-top:40px;
    .item1{
      background: white;
      padding:20px;
      .title{
        overflow: hidden;
        font-size: 1rem;
        .orderid{
          display: inline-block;
        }
        .orderbtn1{
          margin-left:30px;
          cursor: pointer;
          display: inline-block;
          background: #4A3F91;
          color: white;
          padding:5px 10px;
          text-align: center;
          width:100px;
          font-size: 0.93rem;
          border-radius: 5px;
        }
        .orderbtn2{
          float: right;
          width: 180px;
          border:1px solid #4A3F91;
          color: #4A3F91;
        }
        .orderstatus{
          float: right;
          margin-right: 40px;
          color:#4A3F91;
          font-weight: 600;
        }
      }
      .ties{
        font-size: 1rem;
        color: #F08619;
        margin-top: 20px;
        font-weight: 600;
      }
      .finishInfo{
        margin: 30px 0 20px 0;
        .title{
          font-size: 1.4rem;
          margin: 0 0 20px 0;
          i{
            background: #4A3F91;
            color:white ;font-size: 1.4rem;
            border:none;
          }
          p{
            display: inline-block;
            height: 25px;
            line-height: 24px;
            font-weight: 600;
            color: black;
          }
        }
        .finishInfo-content{
          .grid-content{
            border:1px solid #ddd;
            font-size: 18px;
            font-weight:600;
            .grid-content-item{
              display: flex;
              position: relative;
              .img{
                width: 48%;
                img{
                  float: right;
                  margin-top: 37px;
                }
              }
              .text{
                width: 52%;
                height: 100px;
                line-height: 100px;
                display: inline-block;
                font-size:1.2rem;
              }
              .finish{
                position: absolute;
                right: 0;
                bottom: 0;
                width: 30px;
                height: 28px;
                border:1px solid #ddd;
                img{
                  margin-left: 12px;
                }
              }

            }
          }
        }
      }

    }
    .item-tab{
      margin:20px 0 0 0;
      .grid-content{
        font-size: 1rem;
        font-weight: 600;
        border:1px solid #4A3F91;
        color: #4A3F91;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }
      .grid-content-active{
        background: #F08619;
        color: white;
        border:none;
      }
    }
    .dingcangtabs{
      padding:20px;
      margin:20px 0 0 0;
      background: white;
      min-height: 300px;
      .jindu{
        border-bottom:1px solid #ddd;
        .title{
          overflow: hidden;
          img{
            float: left;
          }
          p{
            height: 25px;
            line-height: 24px;
            font-size: 1rem;
            margin: 0 0 0 40px;
            font-weight: 600;
            color: black;
          }
        }
        .el-steps{
          margin:30px 0;
        }
      }
      .Info{
        margin-top: 20px;
        .title{
          overflow: hidden;
          img{
            float: left;
          }
          p{
            height: 25px;
            line-height: 24px;
            font-size: 1rem;
            margin: 0 0 0 40px;
            font-weight: 600;
            color: black;
          }
        }
        .items{
          font-size: 0.93rem;
          P:nth-of-type(1){
            display: inline-block;
            min-width: 110px;
            line-height: 40px;
            height:40px;
          }
          P:nth-of-type(2){
            display: inline-block;
            line-height: 40px;
            height:40px;
            .content{
              margin: 0 0 0 20px;
            }
           .fenge{
             margin: 0 20px;
             color: #BABABA;
           }
          }

        }
        .items1{
          font-size: 0.93rem;
          padding:5px 0;
          P:nth-of-type(1){
            float: left;
            min-width: 110px;
            line-height: 40px;
            height:40px;
          }
          .list{
            display: flex;
            padding:10px 0 0 0;
            .items-item{
              width: 50%;
              span{
                padding:0 0 0 10px;
              }
            }
          }
        }
      }
    }
    .tuochetabs{
      padding:20px;
      margin:20px 0 0 0;
      background: white;
      min-height: 300px;
      .jindu{
        .title{
          overflow: hidden;
          img{
            float: left;
          }
          p{
            height: 25px;
            line-height: 24px;
            font-size: 1rem;
            margin: 0 0 0 40px;
            font-weight: 600;
            color: black;
          }
        }
        .el-steps{
          margin:30px 0;
        }
        .ties{
          padding-top: 10px;
          border-top: 1px solid #ddd;
          font-size: 0.93rem;
          color: #F08519;
        }
        .changedate{
          margin:20px 0;
          .el-date-editor.el-input, .el-date-editor.el-input__inner{
            min-width: 160px;
            width: 25%;
            margin-right: 10px;
          }
          .el-button{
            background: #4A3F91;
            color: white;
          }
        }
      }
      .Info{
        margin-top: 40px;
        .title{
          overflow: hidden;
          img{
            float: left;
          }
          p{
            height: 25px;
            line-height: 24px;
            font-size: 1rem;
            margin: 0 0 0 40px;
            font-weight: 600;
            color: black;
          }
        }
        .items{
          font-size: 0.93rem;
          P:nth-of-type(1){
            display: inline-block;
            min-width: 110px;
            line-height: 40px;
            height:40px;
          }
          P:nth-of-type(2){
            display: inline-block;
            line-height: 40px;
            height:40px;
            .content{
              margin: 0 0 0 20px;
            }
          }
          P:nth-of-type(3){
            display: inline-block;
            line-height: 40px;
            height:40px;
            padding:0 0 0 10%;
          }
          .spangray{
            color: #ACACAC;
          }
        }
        .items1{
          font-size: 0.93rem;
          padding:5px 0;
          display: flex;
          P:nth-of-type(1){
            float: left;
            min-width: 110px;
            line-height: 40px;
            height:40px;
          }
          .list{
            width: 82%;
            div{
              height: 40px;
              line-height: 40px;
              .spangray{
                color: #ACACAC;
              }
            }
            div:nth-of-type(3){
              display: flex;
              p{
                width: 25%;
              }
            }

          }
        }
        .items2{
          font-size: 0.93rem;
          padding:5px 0;
          display: flex;
          div{
            width: 33.33%;
            line-height: 40px;
            height:40px;
            p{
              display: inline-block;
              min-width: 110px;
            }
          }
        }
      }
    }
    .baoguantabs{
      padding:20px;
      margin:20px 0 0 0;
      background: white;
      min-height: 300px;
      .jindu{
        border-bottom:1px solid #ddd;
        .title{
          overflow: hidden;
          img{
            float: left;
          }
          p{
            height: 25px;
            line-height: 24px;
            font-size: 1rem;
            margin: 0 0 0 40px;
            font-weight: 600;
            color: black;
          }
        }
        .el-steps{
          margin:30px 20% 30px 0;
        }
      }
      .Info{
        margin-top: 40px;
        .title{
          overflow: hidden;
          img{
            float: left;
          }
          p{
            height: 25px;
            line-height: 24px;
            font-size: 1rem;
            margin: 0 0 0 40px;
            font-weight: 600;
            color: black;
          }
        }
        .items{
          font-size: 0.93rem;
          P:nth-of-type(1){
            display: inline-block;
            min-width: 110px;
            line-height: 40px;
            height:40px;
          }
          P:nth-of-type(2){
            display: inline-block;
            line-height: 40px;
            height:40px;
            .content{
              margin: 0 0 0 20px;
            }
          }
          P:nth-of-type(3){
            display: inline-block;
            line-height: 40px;
            height:40px;
            padding:0 0 0 10%;
          }
          .spangray{
            color: #ACACAC;
          }
        }
        .lianxi{
          margin-top: 40px;
        }
      }
    }
    .baoguanInfo{
      padding:20px;
      margin:20px 0 0 0;
      background: white;
      /*min-height: 300px;*/
      .title{
        overflow: hidden;
        img{
          float: left;
        }
        p{
          height: 25px;
          line-height: 24px;
          font-size: 1rem;
          margin: 0 0 0 40px;
          font-weight: 600;
          color: black;
        }
      }
      .Info{
        margin:20px 0;
        img{
          width: 100%;
        }
        .pzname{
          margin:5px 0;
          font-size: 0.93rem;
        }

      }
    }
    .sopingzheng{
      padding:20px 20px 50px 20px;
      margin-top: 20px;
      background: white;
      .title{
        overflow: hidden;
        img{
          float: left;
        }
        p{
          height: 25px;
          line-height: 24px;
          font-size: 1rem;
          margin: 0 0 0 40px;
          font-weight: 600;
          color: black;
        }
      }
      .items{
        font-size: 0.93rem;
        overflow: hidden;
        padding:20px 0 40px 0;
        img{
          float: left;
          width: 280px;
          height: 190px;
        }
        .showname{
          padding: 0 0 0 5px;
        }
        .download{
          float: left;
          margin-bottom: 0;
          height: 40px;
          font-size: 1.4rem;
          line-height: 40px;
       /*   margin-top: 150px;
          margin-left:30px;*/
          color: #4A3F91;
          cursor: pointer;
        }
      }
      .items1{
        font-size: 0.93rem;
        overflow: hidden;
        padding:20px 0 0 0;
        .left{
          display: inline-block;
          width: 45%;
          p{
            display: inline-block;
            min-width: 110px;
          }
        }
        .right{
          display: inline-block;
          width: 55%;
          p{
            display: inline-block;
            min-width: 110px;
          }
        }


      }
      .items2{
        font-size: 0.93rem;
        overflow: hidden;
        padding:20px 0 0 0;
          p{
            display: inline-block;
            min-width: 110px;
          }
        }
      .items3{
        font-size: 1.2rem;
        overflow: hidden;
        padding:40px 0 20px 0;
        p{
          display: inline-block;
          min-width: 110px;
          font-size: 1.4rem;
          font-weight: 600;
        }
        span{
          color:#727272;
        }
      }
      .items4{
        font-size: 1.2rem;
        overflow: hidden;
        padding:30px 0 10px 0;
      }
      .items5{
        font-size: 0.93rem;
        overflow: hidden;
        padding:20px 0 0 0;
        display: flex;
        .left{
          p:nth-of-type(2){
            padding: 0 0 0 18px;
            color: #A4A4A4;
          }
        }
        .right{
          margin-left:20px;
        }
      }
      .items6{
        font-size: 1rem;
        overflow: hidden;
        padding:20px 0 0 0;
        color:#4A3F91;
      }
      .items7{
        font-size: 1rem;
        overflow: hidden;
        padding:20px 0 0 0;
        img{
          width: 90px;
          height: 90px;
          float: left;
          cursor: pointer;
        }
        div:nth-of-type(1){
          display: inline-block;
          /*line-height: 90px;*/
          /*height: 90px;*/
          /*padding:0 20px;*/
          cursor: pointer;
          color: #4A3F91;
        }
        div:nth-of-type(2){
          display: inline-block;
          /*line-height: 90px;*/
          /*height: 90px;*/
          min-width: 120px;
          .el-button{
            background-color: #F08519;
            color: white;
            width: 100%;
            font-size: 20px;
            font-weight: 600;
            padding: 5px 0;
          }
        }
        div:nth-of-type(3){
          display: inline-block;
          /*line-height: 90px;*/
          /*height: 90px;*/
          min-width: 120px;
          .el-button{
            background-color: #F08519;
            color: white;
            width: 100%;
            font-size: 20px;
            font-weight: 600;
            padding: 5px 0;
          }
        }
        .shangchuanwenjian{
          .ui_button {
            border-radius: 5px;
            display: inline-block;
            line-height: 40px;
            padding: 0 40px 0 0;
            color: #4A3F91;
            font-weight: 700;
            cursor: pointer;
          }
          .ui_button_primary {
            /*background: #F08419;
            color: white;*/
          }
          label.ui_button:hover {
         /*   background: #F08419;
            color: white;*/
          }
        }
      }
    }
    .paypingzheng{
      padding:20px 20px 50px 20px;
      margin-top: 20px;
      background: white;
      .items{
        font-size: 1rem;
        overflow: hidden;
        padding:20px 0 0 0;
        img{
          width: 90px;
          height: 90px;
          float: left;
          cursor: pointer;
        }
        div:nth-of-type(1){
          display: inline-block;
          line-height: 40px;
          height: 40px;
          padding:0 20px 0 0;
          cursor: pointer;
          color: #4A3F91;
          .ui_button {
            display: inline-block;
            line-height: 40px;
            padding: 0 40px 0 0;
            font-weight: 700;
            cursor: pointer;
          }

        }
        div:nth-of-type(2){
          float: right;
          line-height: 40px;
          height: 40px;
          color: #4A3F91;
          font-weight: 600;
          p{
            display: inline-block;
            min-width: 120px;
          }
        }
      }
      .file_name{
        height: 40px;line-height: 40px;
      }
      .paybtn{
        text-align: right;
        .el-button{
          background-color: #F08519;
          color: white;
          width: 120px;
          font-size: 20px;
          font-weight: 600;
          padding: 5px 0;
        }
      }
    }
    .canceling{
      text-align: right;
      margin:20px 0 0 0;
      .el-button{
        background: none;
        border:1px solid #4A3F91 ;
        color: #4A3F91;
      }
    }
  }
</style>
<style  lang="scss">
  .el-step__icon{
    width: 50px;
    height: 50px;
    background: #4A3F91;
    color: white;
    border:none!important;
  }
  .el-step.is-horizontal .el-step__line{
    top:25px;
    background: #4A3F91;
  }
  .el-step__head.is-finish{
    color: #F08619;
    border-color: #F08619;
      .el-step__icon{
        background: #F08619;
      }
  }
  .el-step__title.is-wait{
    font-weight: 200;
    color: #303133;
  }
  .el-step__description.is-process{
    color: #BABABA;
  }
  .el-step__title.is-process{
    font-weight: 200;
    color: #303133;
  }
  .el-step__title.is-finish{
    color: #F08619;
  }
  .el-step__description.is-finish{
    color: #BABABA;
  }
  .changedate{
    .el-input__prefix{
      left:80%;
      right: 15px;
    }
  }
</style>
<template>
  <section class="container" v-loading="loading">
    <div class="processingDetial">
      <div class="item1">
        <div class="title">
          <p class="orderid">订单编号：<span>{{orderInfo.sn}}</span></p>
          <p v-if="type==='processinglist'&&!isaskkefu" class="orderbtn1" @click="ask()">联系客服</p>
          <p v-if="type==='processinglist'&&isaskkefu" class="orderbtn1" @click="ask()">联系客服</p>
          <el-button v-if="type==='processinglist'&&orderInfo.status === 'in_exec'" class="orderbtn2" @click="calcel(1)">取消订单</el-button>
          <el-button v-if="type==='canceling'" class="orderbtn2" @click="calcel(2)">取消订单进度</el-button>
          <p class="orderstatus" v-if="type === 'canceled'">已取消</p>
        </div>
        <template v-if="orderInfo.status == 'exec'">
        <div class="ties" v-if="orderInfo.type===4||orderInfo.type===5||orderInfo.type===6||orderInfo.type===7">
          <p>您预定的拖柜日期为{{trailer.trailer_date}}日，在此日期前24小时您仍可以修改拖柜日期或取消订单，如超过此期限所产生的一切费用都需要您负担，为了避免造成损失请您留意。</p>
        </div>
        </template>
        <div class="finishInfo">
          <div class="title">
            <i class="icon iconfont icon-dingdan"></i>
            <p>订单完成情况</p>
          </div>
          <div class="finishInfo-content">
            <el-row :gutter="40">
            <el-col :span="6" v-if="orderInfo.type===1||orderInfo.type===3||orderInfo.type===5||orderInfo.type===7"><div class="grid-content bg-purple" >
              <div class="grid-content-item">
                <div class="img">
                  <img src="../../assets/img/detail1.png" />
                </div>
                <div class="text">订舱</div>
                <div class="finish">
                  <img v-if="shipping_complete_time!==''" src="../../assets/img/gou.png" height="22" width="22"/>
                </div>
              </div>
            </div></el-col>
              <el-col :span="6" v-if="orderInfo.type===4||orderInfo.type===5||orderInfo.type===6||orderInfo.type===7"><div class="grid-content bg-purple">
                <div class="grid-content-item">
                  <div class="img">
                    <img src="../../assets/img/detail2.png" />
                  </div>
                  <div class="text">拖车</div>
                  <div class="finish">
                    <img v-if="tuoche_complete_time!==''" src="../../assets/img/gou.png" height="22" width="22"/>
                  </div>
                </div>
              </div></el-col>
              <el-col :span="6" v-if="orderInfo.type===2||orderInfo.type===3||orderInfo.type===6||orderInfo.type===7"><div class="grid-content bg-purple">
                <div class="grid-content-item">
                  <div class="img">
                    <img src="../../assets/img/detail3.png" />
                  </div>
                  <div class="text">报关</div>
                  <div class="finish">
                    <img v-if="baoguan_customs_pass_time!==''" src="../../assets/img/gou.png" height="22" width="22"/>
                  </div>
                </div>
              </div></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="item-tab">
        <el-row :gutter="30">
          <el-col :span="5" v-if="orderInfo.type===1||orderInfo.type===3||orderInfo.type===5||orderInfo.type===7"><div class="grid-content bg-purple" :class="{'grid-content-active':tab===1}" @click="choosetab(1)">
            订舱
          </div></el-col>
          <el-col :span="5" v-if="orderInfo.type===4||orderInfo.type===5||orderInfo.type===6||orderInfo.type===7"><div class="grid-content bg-purple" :class="{'grid-content-active':tab===2}" @click="choosetab(2)">
            拖车
          </div></el-col>
          <el-col :span="5" v-if="orderInfo.type===2||orderInfo.type===3||orderInfo.type===6||orderInfo.type===7"><div class="grid-content bg-purple" :class="{'grid-content-active':tab===3}" @click="choosetab(3)">
            报关
          </div></el-col>
        </el-row>
      </div>
      <div v-show="tab===1" class="dingcangtabs">
        <div class="jindu">
           <div class="title">
             <img src="../../assets/img/jindu.png" height="22" width="22"/>
             <p>订舱进度</p>
           </div>
           <el-steps :active="dingcangactive" align-center>
             <el-step title="订单创建" :description="shipping_create_time"></el-step>
             <el-step title="发送BOOKING" :description="shipping_booking_time"></el-step>
             <el-step title="收到SO凭证" :description="shipping_receive_so_time"></el-step>
             <el-step title="上传补料信息" :description="shipping_buliao_time"></el-step>
             <el-step title="订舱完成" :description="shipping_complete_time"></el-step>
           </el-steps>
         </div>
        <div class="Info">
          <div class="title">
            <img src="../../assets/img/order.png" height="20" width="20"/>
            <p>订舱信息</p>
          </div>
          <div class="items">
            <p >起运港（码头）：</p>
            <p >{{shipping_goods_info.pol_en_name}} {{shipping_goods_info.pol_cn_name}}</p>
          </div>
          <div class="items">
            <p>目的港（码头）：</p>
            <p>{{shipping_goods_info.pod_en_name}} {{shipping_goods_info.pod_cn_name}}</p>
          </div>
          <div class="items">
            <p>运输方式：</p>
            <p>
              <span>海运</span><span class="fenge">|</span>
              <span>行程：{{shipping_goods_info.days}}天</span><span class="fenge">|</span>
              <span>开航日期：{{shipping_goods_info.sail_date}}</span>
            </p>
          </div>
          <div class="items">
            <p>有效日期：</p>
            <p>
              <span>【预计开船】</span> <span class="content">{{shipping_goods_info.sail_date}}</span><span class="fenge">|</span>
              <span>【截止订舱】</span> <span class="content">{{shipping_goods_info.end_date}}</span>
            </p>
          </div>
          <div class="items">
            <p>船期：</p>
            <p>
              <span>周{{kai}}/{{jie}}截{{kai}}开</span>
            </p>
          </div>
          <div class="items">
            <p>船东：</p>
            <p>
              <span>VSL/VOY:{{shipping_goods_info.carrier_code}}</span><span class="fenge">|</span>
              <span>航线代码</span> <span class="content">{{shipping_goods_info.carrier_code}}</span>
            </p>
          </div>
          <div class="items">
            <p>箱货详情：</p>
            <p>
              <span>{{shipping.gp20_num}}x 20'GP</span> <span class="content">单箱重{{shipping.gp20_weight}}KG</span> <span class="fenge">|</span>
              <span>{{shipping.gp40_num}}x 40'GP</span> <span class="content">单箱重{{shipping.gp40_weight}}KG</span><span class="fenge">|</span>
              <span>{{shipping.hq40_num}}x 40'HQ</span> <span class="content">单箱重{{shipping.hq40_weight}}KG</span>
            </p>
          </div>
          <div class="items">
            <p>订舱联系人：</p>
            <p>
              <span>姓名</span> <span class="content">{{orderInfo.contact_name}}</span> <span class="fenge">|</span>
              <span>邮箱</span> <span class="content">{{orderInfo.contact_email}}</span><span class="fenge">|</span>
              <span>电话</span> <span class="content">{{orderInfo.contact_phone}}</span><span class="fenge">|</span>
              <span>手机</span> <span class="content">{{orderInfo.contact_mobile}}</span>
            </p>
          </div>
          <div class="items">
            <p>箱属性：</p>
            <p>
              <span>{{shipping.container_attr}}</span>
            </p>
          </div>
          <div class="items">
            <p>货物特征：</p>
            <p>
              <span>{{shipping.product_characteristics}}</span>
            </p>
          </div>
          <div class="items">
            <p>Shipper：</p>
            <p>
              <span>{{shipping.shipper}}</span>
            </p>
          </div>
          <div class="items">
            <p>Consignee：</p>
            <p>
              <span>{{shipping.consignee}}</span>
            </p>
          </div>
          <div class="items">
            <p>Notity Party：</p>
            <p>
              <span>{{shipping.notify_party}}</span>
            </p>
          </div>
          <div class="items1">
            <p>其他信息：</p>
            <div class="list">
              <div class="items-item">
                <div>提单类型：<span>{{shipping.bill_lading_type}}</span></div>
                <div>电话：<span>{{shipping.phone}}</span></div>
              </div>
              <div class="items-item">
                <div>运输条款：<span>{{shipping.transport_terms}}</span></div>
                <div>手机：<span>{{shipping.mobile}}</span></div>
              </div>
            </div>
          </div>
          <div class="items1">
            <p>货物信息：</p>
            <div class="list">
              <div class="items-item">
                <div>货物准备好的日期：<span></span></div>
                <div>总重量：<span>100KG</span></div>
              </div>
              <div class="items-item">
                <div>包装种类：<span></span></div>
                <div>总尺寸：<span>100CBM</span></div>
              </div>
            </div>
          </div>
          <div class="items">
            <p>唛头：</p>
            <p>
              <span>{{shipping.shipping_mark}}</span>
            </p>
          </div>
          <div class="items">
            <p>货物描述：</p>
            <p>
              <span>{{shipping.product_remark}}</span>
            </p>
          </div>
          <div class="items">
            <p>备注：</p>
            <p>
              <span>{{shipping.remark}}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-show="tab===2" class="tuochetabs">
        <div class="jindu">
          <div class="title">
            <img src="../../assets/img/trailer_title.jpg" height="20" width="32"/>
            <p>拖车进度</p>
          </div>
          <el-steps :active="tuoche_active" align-center>
            <el-step title="订单创建" :description="tuoche_create_time"></el-step>
            <el-step title="收到SO凭证" :description="tuoche_receive_so_time"></el-step>
            <el-step title="装柜" :description="tuoche_loading_time"></el-step>
            <el-step title="还柜" :description="tuoche_back_time"></el-step>
            <el-step title="完成" :description="tuoche_complete_time"></el-step>
          </el-steps>
          <template v-if="orderInfo.status == 'exec'">
          <div class="ties">
            <p>您预定的拖柜日期为{{trailer.trailer_date}}日，在此日期前24小时您仍可以修改拖柜日期或取消订单，如超过此期限却未能拖柜，所产生的一切费用都
              需要您负担，为避免造成损失请您留意。</p>
          </div>
          <div class="changedate">
            <el-date-picker
              v-model="date1"
              type="date"
              placeholder="修改拖柜日期">
            </el-date-picker>
            <el-button>确认修改</el-button>
            <el-button>取消订单</el-button>
            <el-button v-if="!isaskkefu1" @click="ask1()">联系客服</el-button>
            <el-button v-if="isaskkefu1"  @click="ask1()">联系客服</el-button>
          </div>
          </template>
        </div>
        <div class="Info">
          <div class="title">
            <img src="../../assets/img/order.png" height="20" width="20"/>
            <p>拖车信息</p>
          </div>
          <div class="items">
            <p >拖柜地点：<span>{{trailer_goods.district_full_name}}</span></p>
          </div>
          <div class="items">
            <p>起运港（码头）：<span>{{trailer_goods.port_cn_name}}</span></p>
          </div>
          <div class="items">
            <p>拖柜日期：<span>{{trailer.trailer_date}}</span></p>
          </div>
          <div class="items">
            <p>模式：</p>
            <p>
              <span v-if="orderInfo.type===4">自行报关</span>
              <span v-if="orderInfo.type===6">委托报关</span>
            </p>
          </div>
          <div class="items">
            <p>20'GP柜数量:{{trailer.gp20_num}}</p>
            <p>
              40'GP柜数量:<span>{{trailer.gp40_num}}</span>
            </p>
            <p>40'HQ柜数量:<span>{{trailer.hq40_num}}</span></p>
          </div>
          <div class="items">
            <p>孖拖：</p>
            <p>
              <span>20'GP柜允许孖拖</span>
            </p>
            <p>孖拖数量：<span>{{trailer.gp20_twin_num}}</span></p>
          </div>
          <div class="items">
            <p >过磅类型：</p><span>{{show_weigh_type}}</span>
          </div>
          <div class="items">
            <p>熏蒸柜：</p>
            <p>
              <span v-if="trailer.need_fumigating_cabinet === 1">是</span>
              <span v-if="trailer.need_fumigating_cabinet === 0">否</span>
            </p>
            <p v-if="trailer.need_fumigating_cabinet === 1">熏蒸数量：</p>  <span>{{trailer.fumigating_cabinet_num}}</span>
          </div>
          <div class="items1" v-for="(item,index,key) in address_detail" :key="key">
            <p>拖柜地点{{index+1}}：</p>
            <div class="list">
              <div>{{trailer_goods.district_full_name}}  <span class="spangray">{{item.address}}</span></div>
              <div>备注：  <span class="spangray">{{item.comment}}</span></div>
              <div>
                <p>工厂名称：<span class="spangray">{{item.company_name}}</span></p>
                <p>工厂联系人：<span>{{item.contact_name}} </span></p>
                <p>联系电话/手机：<span>{{item.contact_phone}}</span></p>
              </div>
              <div>装货时间：  {{trailer.trailer_date}}   {{item.load_time}}</div>
            </div>
          </div>
          <div class="items2">
            <div v-show="trailer.kc_datetime!==null&&trailer.kc_datetime!==''&&trailer.kc_datetime!=='undefined'"><p>开仓时间：</p><span>{{trailer.kc_datetime}}</span></div>
            <div  v-show="trailer.jg_datetime!==null&&trailer.jg_datetime!==''&&trailer.jg_datetime!=='undefined'"><p>截关时间：</p><span>{{trailer.jg_datetime}}</span></div>
          </div>
          <div class="items">
            <p>PO编号：</p>
            <p>
              <span>{{trailer.po_no}}</span>
            </p>
          </div>
          <div class="items">
            <p>VGM：</p>
            <p>
              <span class="spangray">{{trailer.vgm}}</span>
            </p>
          </div>
          <div class="items">
            <p>摆放位置：</p>
            <p>
              <span class="spangray">{{put_position}}</span>
            </p>
          </div>
          <div class="items" v-if="Number(trailer.gp20_twin_num)>0 && address_detail.length && address_detail.length>1 ">
            <p>两地装货：</p>
            <p>
              <span class="spangray">详细</span>
            </p>
          </div>
          <div class="items">
            <p>备注：</p>
            <p>
              <span class="spangray">{{trailer.comment}}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-show="tab===3" class="baoguantabs">
        <div class="jindu">
          <div class="title">
            <img src="../../assets/img/trailer_title.jpg" height="20" width="32"/>
            <p>报关进度</p>
          </div>
          <el-steps :active="baoguan_active" align-center>
            <el-step title="订单创建" :description="baoguan_create_time"></el-step>
            <el-step title="申报" :description="baoguan_customs_check_time"></el-step>
            <el-step title="海关审核" :description="baoguan_declare_time"></el-step>
            <el-step title="海关放行" :description="baoguan_customs_pass_time"></el-step>
          </el-steps>
        </div>
        <div class="Info">
          <div class="title">
            <img src="../../assets/img/order.png" height="20" width="20"/>
            <p>报关信息</p>
          </div>
          <div class="items">
            <p>报关地点：</p>
            <p>
              <span>{{baoguan.port_cn_name}}</span>
            </p>
          </div>
          <div class="items">
            <p>船名：</p>
            <p>
              <span>{{baoguan.ship_name}}</span>
            </p>
          </div>
          <div class="items">
            <p>航次：</p>
            <p>
              <span>{{baoguan.ship_no}}</span>
            </p>
          </div>
          <div class="items">
            <p>提单号：</p>
            <p>
              <span>{{baoguan.bl_no}}</span>
            </p>
          </div>
          <div class="items">
            <p>报关方式：</p>
            <p>
              <span v-if="baoguan.has_paper === '0'">有纸化报关</span>
              <span v-if="baoguan.has_paper === '1'">无纸质化</span>
            </p>
          </div>
          <div class="items">
            <p>报关行名称：</p>
            <p>
              <span>{{baoguan.customs_broker_name}}</span>
            </p>
          </div>
          <div class="items">
            <p>报关行地址：</p>
            <p>
              <span>{{baoguan.customs_broker_address}}</span>
            </p>
          </div>
          <div class="items">
            <p>联系方式：</p>
            <p>
              <span>{{baoguan.customs_broker_contact_info}}</span>
            </p>
          </div>
          <div class="items">
            <p>预计报关日期：</p>
            <p>
              <span>{{baoguan.customs_date}}</span>
            </p>
          </div>
          <div class="items">
            <p>委托备注：</p>
            <p>
              <span class="spangray">{{baoguan.comment}}</span>
            </p>
          </div>
          <div class="title lianxi">
            <img src="../../assets/img/wenzhang.png" height="20" width="17"/>
            <p>填写联系信息</p>
          </div>
          <div class="items">
            <p>公司名称：</p>
            <p>
              <span>{{baoguan.company_name}}</span>
            </p>
          </div>
          <div class="items">
            <p>联系人：</p>
            <p>
              <span>{{orderInfo.contact_name}}</span>
            </p>
          </div>
          <div class="items">
            <p>手机号码：</p>
            <p>
              <span>{{orderInfo.contact_phone}}</span>
            </p>
          </div>
          <div class="items">
            <p>备用联系QQ：</p>
            <p>
              <span>{{orderInfo.contact_qq}}</span>
            </p>
          </div>
          <div class="items">
            <p>备用WhatsApp：</p>
            <p>
              <span>{{orderInfo.contact_whatsapp}}</span>
            </p>
          </div>
          <div class="items">
            <p>贸易订单号：</p>
            <p>
              <span>{{baoguan.trade_order_sn}}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-show="tab===3&&baoguan.has_paper === '1'" class="baoguanInfo">
        <div class="title">
          <img src="../../assets/img/info.png"/>
          <p>您的报关凭证</p>
        </div>
        <div class="Info">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item,index,key) in baoguan_attr" :key="key"><div class="grid-content bg-purple">
              <div class="pzname"><span>{{item.title}}</span><a :href="item.url" download style="margin-left:5px;color: #4A3F91;;">下载</a></div>
            </div></el-col>
          </el-row>
        </div>
      </div>
      <div v-if="type==='processinglist'"  class="sopingzheng">
        <div class="title" v-if="orderInfo.type===2||orderInfo.type===3||orderInfo.type===6||orderInfo.type===7">
          <img src="../../assets/img/sopinzheng.png" height="22" width="21"/>
          <p>您的SO凭证</p>
        </div>
        <div class="items" v-if="orderInfo.type===2||orderInfo.type===3||orderInfo.type===6||orderInfo.type===7">
          <div class="showname">{{orderInfo.so_file_name}} <a :href="orderInfo.so_file" download style="margin-left:5px;">下载</a></div>
        </div>
        <div class="items6" v-if="orderInfo.type===1||orderInfo.type===3||orderInfo.type===5||orderInfo.type===7">
          <p> <a :href="orderInfo.so_file" download>下载补料文件格式表格</a></p>
        </div>
        <div class="items7" v-if="orderInfo.type===1||orderInfo.type===3||orderInfo.type===5||orderInfo.type===7">
          <div class="shangchuanwenjian">
            <label class="ui_button ui_button_primary" for="xFile">上传补料文件</label>
            <form><input type="file" id="xFile" @change="getfiledata" style="position:absolute;clip:rect(0 0 0 0);"/></form>
          </div>
          <div><el-button @click="update">提交</el-button></div>
          <div> <el-progress v-show="jindu>0&&isjindu"   style=" width: 160px;" :percentage="jindu"></el-progress> </div>
          <div style="cursor: none">
            <p  v-if="showbuliaofile_name!==''">选择的文件：{{showbuliaofile_name}}</p>
            <div>
              <p v-if="buliao_file!==''">已上传的文件：{{buliao_file}}</p>
              <p v-if="shipping.buliao_file!==''">已上传的文件：{{shipping.buliao_file}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="type==='processinglist'" class="paypingzheng">
        <div class="items">
          <div v-if="orderInfo.status === 'wait_pay'">
            <label class="ui_button ui_button_primary" for="paypz">上传支付凭证</label>
            <form><input type="file" @change="updatepay" id="paypz" style="position:absolute;clip:rect(0 0 0 0);"/></form>
          </div>
          <div v-if="orderInfo.status !== 'wait_pay'">
            &nbsp;
            <span v-if="orderInfo.status === 'check_for_pay'">支付凭证：{{orderInfo.payment_voucher}}</span>
          </div>
          <div><p>订单金额：</p><span>$&nbsp;&nbsp;{{orderInfo.total_price_dollar}}&nbsp;&nbsp;+&nbsp;&nbsp;￥&nbsp;&nbsp;{{orderInfo.total_price}}</span></div>
        </div>
        <div>
          <el-progress v-show="jindu1>0&&isjindu1"   style=" width: 160px;" :percentage="jindu1"></el-progress>
        </div>
        <div class="file_name">{{paypingzheng_name}}</div>
        <div class="paybtn" v-if="orderInfo.status === 'wait_pay'">
          <el-button @click="surepay">确认付款</el-button>
        </div>
      </div>
      <div v-if="type==='canceling'" class="canceling">
        <el-button  class="orderbtn2" @click="calcel(2)">取消订单进度</el-button>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'processingDetial',
    data(){
      return{
        showHeader:'',
        initData:{},
        weigh_type:{},
        vgmway_options:{},
        put_position_options:{},
        date1:'',
        show1:true,
        show2:true,
        show3:false,
        tab:1,
        type:this.$route.query.type,
        orderInfo:{},
        trailer:{},
        baoguan:{},
        baoguan_attr:{},
        trailer_goods:{},
        address_detail:{},
        show_weigh_type:'',
        put_position:'',
        so_file_type:'',
        tuoche_active:1,
        baoguan_active:1,
        tuoche_complete_time:'',
        tuoche_back_time:'',
        tuoche_loading_time:'',
        tuoche_receive_so_time:'',
        tuoche_create_time:'',
        //上传的补料文件
        tempe:'',
        showbuliaofile_name:'',
        buliao_file:'',
        buliao_file_name:'',
        buliao_e:'',
        //支付凭证文件名
        paypingzheng_name:'',
        payment_voucher:'',
        //报关时间
        baoguan_customs_pass_time:'',
        baoguan_declare_time:'',
        baoguan_customs_check_time:'',
        baoguan_create_time:'',
        //订舱信息
        shipping:{},
        dingcangactive:1,
        shipping_goods_info:{},
        shipping_complete_time:'',
        shipping_buliao_time:'',
        shipping_receive_so_time:'',
        shipping_booking_time:'',
        shipping_create_time:'',
        product_characteristics:{},
        bill_lading_type:{},
        transport_terms:{},
        jindu1:0,
        isjindu1:false,
        jindu:0,
        isjindu:false,
        loading:true,
        loading1:false,
        loading2:false,
        isaskkefu:false,
        isaskkefu1:false,
        kai:'',
        jie:'',
        fileobj:[]
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
      ask1(){
        this.isaskkefu1 = !this.isaskkefu1;
        if(this.isaskkefu1){
          _MEIQIA('showPanel')
        }else{
          _MEIQIA('hidePanel')
        }
      },
      choosetab(index){
        this.tab = index;
      },
      calcel(index){
        if(index === 1){
          this.$router.push({name:'member-cancelOrder',query:{id:this.$route.query.id}})
        }
        if(index === 2){
          this.$router.push({name:'member-cancelOrder'})
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
            //订舱信息
            if (that.orderInfo.type === 1 || that.orderInfo.type === 3 || that.orderInfo.type === 5 || that.orderInfo.type === 7) {
              that.shipping = resp.data.data.shipping;
              if(that.shipping.container_attr !==null){
                that.shipping.container_attr = that.shipping.container_attr.toUpperCase();
              }
              if(that.shipping.product_characteristics !==null){
                for(key in that.product_characteristics){
                  if(that.shipping.product_characteristics === key ){
                    that.shipping.product_characteristics = that.product_characteristics[key]
                  }
                }
              }
              if(that.shipping.bill_lading_type !==null){
                for(key in that.bill_lading_type){
                  if(that.shipping.bill_lading_type === key ){
                    that.shipping.bill_lading_type = that.that.bill_lading_type[key]
                  }
                }
              }
              if(that.shipping.transport_terms !==null){
                for(key in that.transport_terms){
                  if(that.shipping.transport_terms === key ){
                    that.shipping.transport_terms = that.that.transport_terms[key]
                  }
                }
              }
              that.shipping_goods_info = resp.data.data.shipping.goods_info ;
              if(that.shipping_goods_info === null){
                tempalert("订舱信息不存在！", {
                  confirmButtonText: '确定',
                  callback: action => {
                    that.$router.go(-1);
                    return
                  }
                });
                return
              }
              if(Number(that.shipping.complete_time)> 0){
                that.dingcangactive = 5;
                that.shipping_complete_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.complete_time*1000));
                that.shipping_buliao_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.upload_buliao_time*1000));
                that.shipping_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.receive_so_time*1000));
                that.shipping_booking_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.send_booking_time*1000));
                that.shipping_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.create_time*1000));
              }else if(Number(that.shipping.upload_buliao_time) > 0){
                that.dingcangactive = 4;
                that.shipping_buliao_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.upload_buliao_time*1000));
                that.shipping_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.receive_so_time*1000));
                that.shipping_booking_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.send_booking_time*1000));
                that.shipping_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.create_time*1000));
              }else if(Number(that.shipping.receive_so_time) > 0){
                that.dingcangactive = 3;
                that.shipping_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.receive_so_time*1000));
                that.shipping_booking_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.send_booking_time*1000));
                that.shipping_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.create_time*1000));
              }else if(Number(that.shipping.send_booking_time) > 0){
                that.dingcangactive = 2;
                that.shipping_booking_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.send_booking_time*1000));
                that.shipping_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.create_time*1000));
              }else{
                that.dingcangactive = 1;
                that.shipping_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.shipping.create_time*1000));
              }
              if(resp.data.data.shipping.goods_info.end_weed_day==='1'){
                that.jie = '一'
              }else if(resp.data.data.shipping.goods_info.end_weed_day==='2'){
                that.jie = '二'
              }else if(resp.data.data.shipping.goods_info.end_weed_day==='3'){
                that.jie = '三'
              }else if(resp.data.data.shipping.goods_info.end_weed_day==='4'){
                that.jie = '四'
              }else if(resp.data.data.shipping.goods_info.end_weed_day==='5'){
                that.jie = '五'
              }else if(resp.data.data.shipping.goods_info.end_weed_day==='6'){
                that.jie = '六'
              }else if(resp.data.data.shipping.goods_info.end_weed_day==='7'){
                that.jie = '日'
              }
              if(resp.data.data.shipping.goods_info.sail_week_day==='1'){
                that.kai = '一'
              }else if(resp.data.data.shipping.goods_info.sail_week_day==='2'){
                that.kai = '二'
              }else if(resp.data.data.shipping.goods_info.sail_week_day==='3'){
                that.kai = '三'
              }else if(resp.data.data.shipping.goods_info.sail_week_day==='4'){
                that.kai = '四'
              }else if(resp.data.data.shipping.goods_info.sail_week_day==='5'){
                that.kai = '五'
              }else if(resp.data.data.shipping.goods_info.sail_week_day==='6'){
                that.kai = '六'
              }else if(resp.data.data.shipping.goods_info.sail_week_day==='7'){
                that.kai = '日'
              }
            }
            //拖车信息
            if(that.orderInfo.type===4||that.orderInfo.type===5||that.orderInfo.type===6||that.orderInfo.type===7) {
              that.trailer = resp.data.data.trailer;
              that.address_detail = resp.data.data.trailer.address_detail;
              for (var key in that.weigh_type) {
                if (that.trailer.weigh_type === key) {
                  that.show_weigh_type = that.weigh_type[key];
                }
              }
              for (var key in that.put_position_options) {
                if (that.trailer.put_position === key) {
                  that.put_position = that.put_position_options[key];
                }
              }

               for (var key in that.vgmway_options) {
                if(that.trailer.vgm === key){
that.trailer.vgm = that.vgmway_options[key];
                }
              }
              //进度
              if(Number(that.trailer.complete_time) > 0){
                that.tuoche_active = 5;
                that.tuoche_complete_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.complete_time*1000));
                that.tuoche_back_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.back_time*1000));
                that.tuoche_loading_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.loading_time*1000));
                that.tuoche_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.receive_so_time*1000));
                that.tuoche_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.create_time*1000));
              }else if(Number(that.trailer.back_time) > 0){
                that.tuoche_active = 4;
                that.tuoche_back_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.back_time*1000));
                that.tuoche_loading_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.loading_time*1000));
                that.tuoche_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.receive_so_time*1000));
                that.tuoche_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.create_time*1000));
              }else if(Number(that.trailer.loading_time) >0){
                that.tuoche_active = 3;
                that.tuoche_loading_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.loading_time*1000));
                that.tuoche_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.receive_so_time*1000));
                that.tuoche_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.create_time*1000));
              }else if(Number(that.trailer.receive_so_time) > 0){
                that.tuoche_active = 2;
                that.tuoche_receive_so_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.receive_so_time*1000));
                that.tuoche_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.create_time*1000));
              }else{
                that.tuoche_active = 1;
                that.tuoche_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.trailer.create_time*1000));
              }
              that.gettuocheInfo(that.orderInfo.trailer.trailer_goods_id);
            }

            //报关信息
            if(that.orderInfo.type===2||that.orderInfo.type===3||that.orderInfo.type===6||that.orderInfo.type===7) {
              that.baoguan = resp.data.data.customs_declare_info;
              that.baoguan_attr = resp.data.data.customs_declare_info.attr;
              //进度
              if(Number(that.baoguan.customs_pass_time) > 0 && that.baoguan.customs_pass_time !== ''&&that.baoguan.customs_pass_time !== null){
                that.baoguan_active = 4;
                that.baoguan_customs_pass_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.customs_pass_time*1000)));
                that.baoguan_declare_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.declare_time*1000)));
                that.baoguan_customs_check_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.customs_check_time*1000)));
                that.baoguan_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.create_time*1000)));
              }else if(Number(that.baoguan.declare_time) > 0 && that.baoguan.declare_time !== ''&&that.baoguan.declare_time !== null){
                that.baoguan_active = 3;
                that.baoguan_declare_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.declare_time*1000)));
                that.baoguan_customs_check_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.customs_check_time*1000)));
                that.baoguan_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.create_time*1000)));
              }else if(Number(that.baoguan.customs_check_time) > 0 &&  that.baoguan.customs_check_time !== ''&&that.baoguan.customs_check_time !== null){
                that.baoguan_active = 2;
                that.baoguan_customs_check_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.customs_check_time*1000)));
                that.baoguan_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.create_time*1000)));
              }else{
                that.baoguan_active = 1;
                that.baoguan_create_time = that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(Number(that.baoguan.create_time*1000)));
              }
            }
            //默认显示的进度条内容
            if (that.orderInfo.type === 1 || that.orderInfo.type === 3 || that.orderInfo.type === 5 || that.orderInfo.type === 7) {
              that.tab = 1;
            } else if (that.orderInfo.type === 4 || that.orderInfo.type === 5 || that.orderInfo.type === 6 || that.orderInfo.type === 7) {
              that.tab = 2;
            } else {
              that.tab = 3;
            }
            that.loading2 = true;
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
      //获取订单拖车信息
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
      },
      //下载so凭证
      downloadso(url){
        var iframe = document.createElement("iframe")
        iframe.style.display = "none";
        iframe.src = url;
        document.body.appendChild(iframe);
      },
      //上传补料文件
      getfiledata(e){
        this.buliao_e = e;
        this.showbuliaofile_name = e.target.files[0].name;
        //设置批量上传
        /*this.fileobj.push({file_e:e,name:e.target.files[0].name})*/
      },
      update(){
        let tempalert = this.$alert;
        let e = this.buliao_e;
        this.jindu = 0;
        this.isjindu  = true;
        if(e !== ''){
          const jsonUsers = localStorage.getItem('token');
          let file = e.target.files[0];
          let type = e.target.files[0].name.split('.');
          let tempvalue = ''
          this.comment.getfile_md5(file,function (resp) {
            tempvalue = resp + '.' + type[type.length - 1];
          })

          let times = 1
          window.setInterval(() => {
            times--;
            if (times === 0) {
              let d = new Date();
              let param = new FormData(); //创建form对象
              var putExtra = {
                fname: "",
                params: {},
                mimeType: null
              };
              putExtra.params["x:name"] = file.name.split(".")[0];
              param.append('file',file,file.name,putExtra);
              param.append('key', tempvalue)
              //FormData私有类对象，访问不到，可以通过get判断值是否传进去
              let config = {
                onUploadProgress: progressEvent => {
                  var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                  this.jindu = complete
                },
                headers:{'Content-Type':'multipart/form-data'},
                useCdnDomain: true,
                disableStatisticsReport: false,
                retryCount: 6,
              };
              //先从自己的服务端拿到七牛token
              this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
                headers:{
                  token:jsonUsers
                }
              })
                .then(response=>{
                  this.token = response.data.data.token;
                  this.showHeader =  response.data.data.domain;
                  param.append('token',this.token);
                  this.uploading(param,config,file.name,file,putExtra);//然后将参数上传七牛
                })
            }
          }, 1000)
        }else{
          tempalert('请先选择文件', {
            confirmButtonText: '确定',
            callback: action => {
              return
            }
          });
        }
      },
      //七牛上传图片
      uploading(param,config,pathName,file,putExtra){
        let that = this;
        that.$axios.post('http://upload-as0.qiniup.com/',param,config,file,putExtra)
          .then(response=>{
            that.buliao_e ='';
            that.showbuliaofile_name ='';
            that. buliao_file = that.showHeader+response.data.key;
            that. buliao_file_name = pathName;
            that.shipping.buliao_file = '';
            that.submitbuliao();
            that.isjindu  = false;
          })
      },
      //上传支付凭证
      updatepay(e){
        const jsonUsers = localStorage.getItem('token');
        this.jindu1 = 0;
        this.isjindu1 = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
        window.setInterval(() => {
            times--;
            if (times === 0) {
              let param = new FormData(); //创建form对象
              var putExtra = {
                fname: "",
                params: {},
                mimeType: null
              };
              putExtra.params["x:name"] = file.name.split(".")[0];
              param.append('file',file,file.name,putExtra)
              param.append('key', tempvalue)
              //FormData私有类对象，访问不到，可以通过get判断值是否传进去
              let config = {
                onUploadProgress: progressEvent => {
                  var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                  this.jindu1 = complete
                },
                headers:{'Content-Type':'multipart/form-data'},
                useCdnDomain: true,
                disableStatisticsReport: false,
                retryCount: 6,
              };
              //先从自己的服务端拿到七牛token
              this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
                headers:{
                  token:jsonUsers
                }
              })
                .then(response=>{
                  this.token = response.data.data.token;
                  this.showHeader =  response.data.data.domain;
                  param.append('token',this.token);
                  this.uploading1(param,config,file.name,file,putExtra);//然后将参数上传七牛
                })
            }
        }, 1000)
      },
      //七牛上传图片
      uploading1 (param,config,pathName,file,putExtra){
        let that = this;
        that.$axios.post('http://upload-as0.qiniup.com/',param,config,file,putExtra)
          .then(response=>{
            that.paypingzheng_name = pathName;
            that.payment_voucher = that.showHeader+response.data.key;
            that.isjindu1 = false;
          })
      },
      //确认支付
      surepay(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order/payment_voucher';
        let tempalert = that.$alert;
        let params = {
          order_id:Number(that.$route.query.id),
          payment_voucher:that.payment_voucher
        }
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                that.$router.push({name:'member-menberHome'});
              }
            });
          }
        })
      },
      //提交补料凭证
      submitbuliao(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order/submit_buliao';
        let params = {
          order_id:Number(that.orderInfo.id),
          id:Number(that.shipping.id),
          buliao_file:that.buliao_file
        }
        let tempalert = that.$alert;
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                return
              }
            });
          }
        })
      }
    },
    mounted(){
      window.scrollTo( 0, 0 );
      let that = this;
      //基础数据
      that.comment.initData(that.$store,that.$axios).then(function (resp) {
        localStorage.setItem('initData',JSON.stringify(resp));
        localStorage.setItem('initDataTime',new Date().getTime());
        that.initData =JSON.parse(localStorage.getItem('initData'));
        that.weigh_type = that.initData.freight.weigh_type;
        that.vgmway_options = that.initData.freight.vgm;
        that.put_position_options = that.initData.freight.put_position;
        that.product_characteristics = that.initData.freight.product_characteristics;
        that.loading1 = true;
        that.$store.commit('SET_TITLE',resp.freight.freight_name)
      });
      
     that.getOrderdata();
    },
    watch:{
      'loading1':function (val) {
        if(this.loading1&&this.loading2){
          this.loading = false;
        }
      },
      'loading2':function (val) {
        if(this.loading1&&this.loading2){
          this.loading = false;
        }
      }
    }
  }
</script>
