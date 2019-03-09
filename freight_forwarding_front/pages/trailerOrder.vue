<style scoped lang="scss" >
.orderConfirm-tab {
  margin-top: 20px;
}
 .box-card_1 {
    width: 100%;
    .content_1 {
      .content_1_title {
        overflow: hidden;
        p {
          display: inline-block;
          color: #4a3f91;
          font-size: 1rem;
          font-weight: bold;
        }
        p:nth-of-type(1) {
          width: 24%;
          float: left;
          min-width: 238px;
        }
        p:nth-of-type(2) {
          width: calc(24%-20px);
          float: left;
          margin-left: 20px;
        }
        p:nth-of-type(3) {
          width: 10%;
          float: left;
        }
        p:nth-of-type(4) {
          width: 30%;
          float: left;
        }
        p:nth-of-type(5) {
          width: 10%;
          float: left;
        }
      }
      .content_1_data {
        padding: 10px 0 0 0;
        font-size: 0.875rem;
        overflow: hidden;
        .content_1_dataP1 {
          width: 24%;
          float: left;
          min-width: 238px;
        }
        .content_1_dataP2 {
          width: calc(24%-20px);
          margin-left: 20px;
          float: left;
        }
        .content_1_dataP3 {
          width: 10%;
          float: left;
        }
        .content_1_dataP4 {
          width: 10%;
          float: left;
        }
        .showdiv {
          width: 30%;
          float: left;
          overflow: hidden;
        }
        .showdivP {
          width: 32%;
          float: left;
        }
      }
    }
  }
.content {
  font-size: 14px;
  margin: 20px 0 20px 0;

 

  .box-card_2 {
    margin: 20px 0 0 0;
    .content_1 {
      > div:nth-of-type(1) {
        padding: 30px 0;
        border-bottom: 1px solid #cdcdcd;
        p {
          margin-bottom: 20px;
          span {
            margin-right: 84px;
          }
        }
      }
      .checkbox1 {
        margin-left: 84px;
        margin-right: 10px;
      }
      .input1 {
        width: 60px;
        margin-left: 30px;
      }
      .select_1 {
        width: 220px;
        margin: 20px 60px 20px 70px;
      }
      .select_2 {
        width: 148px;
        margin-left: 10px;
      }
      .label1 {
        margin: 20px 0 20px 0;
        border-bottom: 1px solid #cdcdcd;
        .labelRight > div {
          margin-bottom: 20px;
        }
        .input2 {
          width: 250px;
        }
        .input3 {
          width: 150px;
        }
        .input4 {
          width: 250px;
        }
        .input5 {
          width: 450px;
        }
        .input6 {
          width: 630px;
          margin-right: 24px;
        }
        button {
          width: 253px;
          background-color: #4a3f91;
          color: #fff;
          margin-left: 25px;
        }
        .label1_span {
          margin-left: 20px;
        }
      }
    }
  }

  .box-card_3 {
    margin-top: 20px;
    position: relative;
    overflow: initial;
    .title {
      overflow: hidden;
      img {
        float: left;
      }
      p {
        height: 25px;
        line-height: 24px;
        font-size: 18px;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .content {
      .el-input {
        width: 220px;
        margin: 0 0 20px 20px;
      }
      /*这里是改div变成输入框形式*/
      overflow: hidden;
      .title-span {
        height: 40px;
        line-height: 40px;
      }
      .search {
        float: left;
        display: inline-block;
        width: 220px;
        margin: 0 20px 0 20px;
        height: 40px;
        line-height: 40px;
        text-indent: 1em;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        i {
          float: right;
          margin-top: 15px;
          margin-right: 12px;
        }
      }
      .el-select {
        width: 220px;
        margin: 0 20px 0 20px;
      }
      .el-button {
        width: 130px;
        background-color: #4a3f91;
        color: #fff;
      }
      .fee-content {
        margin-top: 32px;
        .tuochefuwufee {
          display: flex;
          div:nth-of-type(1) {
            margin-right: 10px;
          }
          div:nth-of-type(2) {
            font-size: 0.875rem;
          }
        }
      }
    }
  }

  .content_5 {
    text-align: center;
    .el-button {
      width: 275px;
      background-color: #f08519;
      color: #fff;
      font-weight: bold;
    }
  }

  .box-card_4 {
    background: white;
    /*padding:20px 20px 60px 20px;*/
    margin-top: 20px;
    .title {
      overflow: hidden;
      img {
        float: left;
      }
      p {
        height: 25px;
        line-height: 24px;
        font-size: 18px;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .item {
      .dingchuancount {
        font-size: 0.875rem;
        margin: 10px 0 0 0;
        .dingchuancount-title {
          color: #4a3f91;
          font-weight: 600;
        }
        .dingchuancount-content {
          margin: 10px 0 20px 0;
          .grid-content {
            margin: 0 0 10px 0;
          }
        }
      }
      .tuochecount {
        font-size: 0.875rem;
        margin: 10px 0 30px 0;
        border-bottom: 1px solid #e6e6e6;
        .tuochecount-title {
          color: #4a3f91;
          font-weight: 600;
        }
        .tuochecount-content {
          margin: 10px 0 20px 0;
          .grid-content {
            margin: 0 0 10px 0;
            .tuochefuwufee {
              display: flex;
              div:nth-of-type(1) {
                margin-right: 10px;
              }
              div:nth-of-type(2) {
                font-size: 0.875rem;
              }
            }
          }
        }
      }
      .count {
        .grid-content {
          font-size: 1rem;
          img {
            float: left;
          }
          p {
            height: 30px;
            line-height: 30px;
            margin-left: 40px;
            /*font-size: 1.2rem;*/
            font-size: 18px;
            font-weight: 600;
          }
          span {
            color: #f08619;
            font-weight: 600;
          }
        }
      }
      .el-button {
        width: 186px;
        background-color: #f08519;
        color: #fff;
        font-weight: bold;
      }
    }
  }

  .box-card_8 {
    overflow: hidden;
    margin: 40px 0 40px 0;
    width: 100%;
    border: 0;
    text-align: center;
    .el-button {
      width: 18.4%;
      height: 50px;
      color: #fff;
      font-weight: bold;
      background-color: #f08519;
      /*border: 0;*/
      font-size: 16px;
      /*margin:0 auto;*/
    }
    .boder {
      width: 39%;
      height: 24px;
      border-bottom: 1px solid #dcdcdc;
    }
    .b1 {
      float: left;
    }
    .b2 {
      float: right;
    }
  }
}
// }
.myaddress {
  .eldialog-title {
    p {
      display: inline-block;
      width: 20%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
    }
  }
  .eldialog-list {
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    p {
      display: inline-block;
      width: 20%;
    }
  }
}
.showform {
  position: absolute;
  background: white;
  z-index: 11;
  top: 110px;
  left: 9.2%;
  border: 1px solid #ddd;
  width: 549px;
  padding: 0 10px 20px 10px;
  .swiper-container {
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #ddd;
    .swiper-slide {
      text-align: center;
      cursor: pointer;
      /*width: 62.8333px;*/
      /*min-width: 70px;*/
    }
    .swiper-slide-active1 {
      border-bottom: 3px solid #4b3f91;
      color: #4b3f91;
      font-weight: 600;
    }
    .swiper-slide-active2 {
      border-bottom: 3px solid #4b3f91;
      color: #4b3f91;
      font-weight: 600;
    }
  }
  .port {
    cursor: pointer;
    p {
      width: 33.33%;
      display: inline-block;
      text-align: center;
      padding: 10px 0 0 0;
    }
  }
}
#searchBox1 {
  top: 110px;
}
.fileform {
  overflow: hidden;
  background: white;
  padding: 20px;
  margin: 20px 0 0 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.formTitle {
  font-size: 1rem;
  font-weight: bold;
  line-height: 45px;
}
.star {
  float: left;
  color: red;
}
.form-load {
  overflow: hidden;
  line-height: 40px;
  .load-title {
    float: left;
  }
  .upload-demo {
    float: left;
    color: white;
    margin-left: 20px;
  }
}
.form-dc {
  overflow: hidden;
  line-height: 40px;
  margin-top: 10px;
  .dctitle {
    float: left;
  }
  .load-input {
    float: left;
    margin-left: 20px;
    width: 200px;
  }
}
.trailerInfo {
  margin: 20px 0 0 0;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.trailerInfo-title {
  font-size: 1rem;
  font-weight: bold;
  line-height: 45px;
}
.Info-weight {
  overflow: hidden;
}
.showguiList {
  width: calc(100%-110px);
  overflow: hidden;
}
.Info-weight-star{
margin-top: 20px;
  float: left;
  color: red;
}
.star {
  float: left;
}
.showguiListweight {
  float: left;
  width: 100px;
   margin-top: 20px;
}
.listItem {
  float: left;
  width: 20%;
  line-height: 40px;
  overflow: hidden;
  margin: 10px 0;
}
.listItemSpan {
  float: left;
  margin-right: 20px;
}
.listItemselect {
  width: 90px;
}
.type-yue {
  overflow: hidden;
  line-height: 40px;
}
.type-bang {
  float: left;
  margin-right: 40px;
  span {
    float: left;
    width: 100px;
  }
}
.yue-gui {
  float: left;
  span {
    float: left;
    width: 140px;
  }
}
.xungui {
  overflow: hidden;
  line-height: 40px;
  margin: 10px 0 0 0;
  span {
    float: left;
    width: 100px;
  }
  .checkbox1 {
    margin-right: 10px;
  }
}
.feature {
  overflow: hidden;
  line-height: 40px;
  margin: 10px 0 0 0;
  span {
    float: left;
    width: 100px;
  }
}
.feature-select {
  float: left;
  margin-right: 20px;
}
.feature-input {
  float: left;
  width: 600px;
}
.threeTime {
  overflow: hidden;
  line-height: 40px;
  margin: 10px 0 0 0;
}
.lastTime {
  float: left;
  width: 33%;
  overflow: hidden;
  span {
    float: left;
    width: 100px;
  }
}
.openTime {
  float: left;
  width: 33%;
  overflow: hidden;
  span {
    float: left;
    width: 100px;
  }
}
.jiezhiTime {
  float: left;
  width: 33%;
  overflow: hidden;
  span {
    float: left;
    width: 100px;
  }
}
.po-vgm {
  overflow: hidden;
  line-height: 40px;
  margin: 10px 0 0 0;
}
.pocode {
  float: left;
  width: 33%;
  overflow: hidden;
  span {
    float: left;
    width: 100px;
  }
  .po-input {
    width: 220px;
  }
}
.vgmcode {
  float: left;
  width: 33%;
  overflow: hidden;
  span {
    float: left;
    width: 100px;
  }
}
.sealing {
  overflow: hidden;
  line-height: 40px;
  margin: 10px 0 0 0;
  span {
    float: left;
    width: 100px;
  }
  .sealing-input {
    float: left;
    width: 420px;
  }
}
.informationexchange {
  overflow: hidden;
  line-height: 40px;
  margin: 10px 0 0 0;
  span {
    float: left;
    width: 100px;
  }
  .informationexchange-input {
    float: left;
    width: 420px;
  }
}
.cabinetlocation {
  margin: 10px 0 0 0;
  border-top: 1px solid #ddd;
  overflow: hidden;
  line-height: 40px;
}
.location {
  overflow: hidden;
  margin-top: 20px;
  span {
    float: left;
    width: 100px;
  }
  .locationContent {
    float: left;
    overflow: hidden;
    width: calc(100%-100px);
    .guinum {
      .star {
        width: auto;
        color: red;
        float: left;
      }
      .text1 {
        float: left;
        width: auto;
        margin-right: 20px;
      }
      .locationContent-input1 {
        width: 80px;
        float: left;
        margin-right: 20px;
      }
      .guinum-checkbox {
        float: left;
        margin-right: 20px;
      }
      .guinum-btn {
        background: #4a3f91;
        color: white;
        font-size: 0.93rem;
      }
    }
    .locationaddress {
      margin: 10px 0 0 0;
      .star {
        width: auto;
        color: red;
        float: left;
      }
      .addressText {
        width: auto;
        margin-right: 10px;
        float: left;
      }
      .addressText1 {
        width: auto;
        margin-right: 5px;
        float: left;
      }
      .address-input1 {
        float: left;
        width: 400px;
        margin-right: 40px;
      }
    }
    .factory {
      overflow: hidden;
      margin: 10px 0 0 0;
      .star {
        width: auto;
        color: red;
        float: left;
      }
      .factoryText {
        float: left;
        width: auto;
        margin-right: 10px;
      }
      .factory-input1 {
        float: left;
        width: 200px;
        margin-right: 20px;
      }
    }
    .remarks {
      overflow: hidden;
      margin: 10px 0 0 0;
      .remarksText {
        float: left;
        width: 100px;
      }
      .remarks-input1 {
        float: left;
        width: 400px;
      }
      .remarks-checkbox {
        float: left;
        margin-left: 20px;
      }
    }
  }
}
.add {
  border-top: 1px solid #ddd;
  margin: 20px 0 0 0;
  .addText {
    margin-left: 100px;
    color: #4a3f91;
    cursor: pointer;
  }
}
.customsInfo {
  margin: 20px 0 0 0;
  padding: 20px;
  background: white;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  line-height: 50px;
}
.customsTitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.feeInfo{
  margin: 20px 0 0 0;
  padding: 20px;
  background: white;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.feeInfoTitle{
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.feeInfoContent{
  overflow: hidden;
  line-height: 40px;
  text-align: center;
  .feeInfoHeader{
    overflow: hidden;
    p{
      float: left;
      width: 20%;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  .feeInfoTable{
    overflow: hidden;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    p{
       float: left;
      width: 20%;
      font-size: 1rem;
    }
  }
}
.feeCount{
  overflow: hidden;
  font-size: 1rem;
  font-weight: bold;
  line-height: 40px;
  padding: 0 90px 0 0;
  .feeCountP1{
    float:right;
    margin-right: 40px;
  }
  .feeCountP2{
    float:right;
    margin-right: 40px;
    
  }
  .feeCountP3{
    float:right;
    
  }
}
.protocol{
  overflow: hidden;
  font-size: 1rem;
  line-height: 40px;
  padding: 0 90px 0 0;
  .protocolChecked{
    float: right;
  }
}
.submitBtns{
   overflow: hidden;
  font-size: 1rem;
  line-height: 40px;
  padding: 0 90px 0 0;
  .submitBtn{
    float: right;
    width: 200px;
    background: #4a3f91;
    color: white;
  }
}
</style>
<style lang="scss">
.trailerOder-section {
  .el-dialog {
    width: 62% !important;
    .el-dialog__header {
      text-align: center;
      color: #000;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .el-dialog__body {
      padding: 0 20px 30px 20px;
    }
  }
}
</style>
<template>
  <section class="container trailerOder-section">
    <div>
      <topheader/>
      <contentheader/>
      <div>
        <div class="layout">
          <div class="orderConfirm-tab">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>拖车下单</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="content">
            <!--第1卡片内容-->
            <el-card class="box-card_1">
              <div class="content_1">
                <div class="content_1_title">
                  <p>
                    拖柜地点
                    <img src="../assets/img/dc_jiantou2.jpg" alt>
                  </p>
                  <p>起运港（码头）</p>
                  <!-- <p>拖柜日期</p> -->
                  <p>模式</p>
                  <p>总货柜量</p>
                  <p>20'GP孖拖</p>
                </div>
                <div class="content_1_data">
                  <p class="content_1_dataP1">{{goods_price.district_full_name}}</p>
                  <p class="content_1_dataP2">{{goods_price.port_cn_name}}</p>
                  <!-- <p>{{comment.formate('yyyy-MM-dd',new Date(tempdate))}}</p> -->
                  <p class="content_1_dataP3" v-if="baoguan === '0'">自行报关</p>
                  <p class="content_1_dataP3" v-if="baoguan === '1'">委托报关</p>
                  <div class="showdiv">
                    <p class="showdivP">2 x20GP</p>
                    <p class="showdivP">2 x40GP</p>
                    <p class="showdivP">2 x40HQ</p>
                  </div>
                  <p class="content_1_dataP4">是/否</p>
                </div>
              </div>
            </el-card>

            <div class="fileform">
              <div class="formTitle">上传SO文件/电子号码 （支持pdf、jpg、png、gif、Word格式的文件）</div>
              <div class="form-load">
                <span class="star">*</span>
                <p class="load-title">SO文件上传：</p>
                <el-upload
                  class="upload-demo"
                  action="http://upload-as0.qiniup.com/"
                  :data="updataHeaders"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="onsuccess"
                  :limit="1"
                  :on-exceed="onexceed"
                  :before-remove="beforeremove"
                >
                  <el-button slot="trigger" size="small" type="primary">上传SO</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </div>
              <div class="form-dc">
                <span class="star">*</span>
                <p class="dctitle">订舱号</p>
                <el-input class="load-input" v-model="dccode" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <!-- 拖车信息 -->
            <div class="trailerInfo">
              <div class="trailerInfo-title">
                <p>拖车信息 (带*为必填项目)</p>
              </div>
              <div class="Info-weight">
                <span class="Info-weight-star">*</span>
                <span class="showguiListweight">货重:</span>
                <div class="showguiList" style>
                  <div class="listItem" style="    " v-for="item in 12" :key="item">
                    <span class="listItemSpan">20GP-{{item}}</span>
                    <el-select class="listItemselect" v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="listItem" v-for="item in 2" :key="item">
                    <span class="listItemSpan">40GP-{{item}}</span>
                    <el-select class="listItemselect" v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="listItem" v-for="item in 2" :key="item">
                    <span class="listItemSpan">40HQ-{{item}}</span>
                    <el-select class="listItemselect" v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div class="type-yue">
                <div class="type-bang">
                  <span>过磅类型:</span>
                  <el-select @change="getguobangtype" v-model="value1" placeholder="请选择过磅类型">
                    <el-option
                      v-for="(item,index,key) in weigh_type"
                      :key="key"
                      :label="item"
                      :value="index"
                    ></el-option>
                  </el-select>
                </div>
                <div class="yue-gui">
                  <span>是否平台约柜:</span>
                  <el-select @change="getguobangtype" v-model="value1" placeholder="请选择约柜方式">
                    <el-option
                      v-for="(item,index,key) in weigh_type"
                      :key="key"
                      :label="item"
                      :value="index"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="xungui">
                <span>熏蒸柜：</span>
                <el-checkbox class="checkbox1" v-model="checked4">需要</el-checkbox>
                <el-select
                  v-show="!checked4"
                  disabled
                  class="select_2"
                  v-model="value2"
                  placeholder="请选择熏蒸数量"
                >
                  <el-option
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select
                  v-show="checked4"
                  class="select_2"
                  v-model="value2"
                  placeholder="请选择熏蒸数量"
                >
                  <el-option
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="feature">
                <span>货物特征：</span>
                <el-select class="feature-select" v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-input class="feature-input" v-model="input" placeholder=" 非普通货必须输入货物描述"></el-input>
              </div>
              <div class="threeTime">
                <div class="lastTime">
                  <span>最迟补料时间：</span>
                  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
                <div class="openTime">
                  <span>开仓时间:</span>
                  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
                <div class="jiezhiTime">
                  <span>截关时间：</span>
                  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
              </div>
              <div class="po-vgm">
                <div class="pocode">
                  <span>PO编号:</span>
                  <el-input class="po-input" v-model="input" placeholder="输入PO编号"></el-input>
                </div>
                <div class="vgmcode">
                  <span>VGM:</span>
                  <el-select v-model="value" placeholder="请选择VGM申报方式">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="sealing">
                <span>封关地址：</span>
                <el-input class="sealing-input" v-model="input" placeholder=" 输入封关地址"></el-input>
              </div>
              <div class="informationexchange">
                <span>报关资料交放：</span>
                <el-input
                  class="informationexchange-input"
                  v-model="input"
                  placeholder=" 输入报关资料交放地点"
                ></el-input>
              </div>

              <div class="cabinetlocation">
                <div class="location">
                  <span>地点</span>
                  <div class="locationContent">
                    <div class="guinum">
                      <span class="star">*</span>
                      <span class="text1">该地点的货柜数量：</span>
                      <el-input class="locationContent-input1" v-model="input" placeholder></el-input>
                      <span class="text1">X 20'GP</span>
                      <el-input class="locationContent-input1" v-model="input" placeholder></el-input>
                      <span class="text1">X 40'GP</span>
                      <el-input class="locationContent-input1" v-model="input" placeholder></el-input>
                      <span class="text1">X 40'HQ</span>
                      <el-checkbox class="guinum-checkbox" v-model="checked">20'GP孖拖</el-checkbox>
                      <el-button class="guinum-btn">使用常用地址</el-button>
                    </div>
                    <div class="locationaddress">
                      <span class="star">*</span>
                      <span class="addressText">广东省 · 佛山市 · 三水区 · 大塘镇</span>
                      <el-input class="address-input1" v-model="input" placeholder="工厂详细地址"></el-input>
                      <span class="star">*</span>
                      <span class="addressText1">装货时间:</span>
                      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                    </div>

                    <div class="factory">
                      <span class="star">*</span>
                      <span class="factoryText">工厂名称:</span>
                      <el-input class="factory-input1" v-model="input" placeholder="工厂名称"></el-input>

                      <span class="star">*</span>
                      <span class="factoryText">工厂联系人:</span>
                      <el-input class="factory-input1" v-model="input" placeholder="工厂联系人"></el-input>

                      <span class="star">*</span>
                      <span class="factoryText">电话/手机:</span>
                      <el-input class="factory-input1" v-model="input" placeholder=" 电话/手机号码"></el-input>
                    </div>

                    <div class="remarks">
                      <span class="remarksText">备注：</span>
                      <el-input class="remarks-input1" v-model="input" placeholder="工厂名称"></el-input>
                      <el-checkbox class="remarks-checkbox" v-model="checked">加入到常用地址</el-checkbox>
                    </div>
                  </div>
                </div>
                <div class="add">
                  <p class="addText">+ 新增拖柜地点</p>
                </div>
              </div>
            </div>
            <!-- 报关信息 -->
            <div class="customsInfo">
              <div class="customsTitle">报关信息</div>
              <div>报关票数：1</div>
              <div>报关地点：深圳 · 蛇口港</div>
            </div>
            <!-- 费用信息 -->
            <div class="feeInfo">
                <div class="feeInfoTitle">
                    费用信息
                </div>
                <div class="feeInfoContent">
                   <div class="feeInfoHeader">
                      <p>项目</p>
                      <p>计算单位</p>
                      <p>单价</p>
                      <p>数量</p>
                      <p>金额</p>
                   </div>
                   <div class="feeInfoTable">
                       <div class="tableItem" v-for="item in 4" :key="item">
                          <p>拖车费</p>
                          <p>20'GP-孖拖</p>
                          <p>CNY 400</p>
                          <p>×2</p>
                          <p>CNY 400</p>
                       </div>
                   </div>
                </div>
                <div class="feeCount">
                    <p class="feeCountP3">CNY:2050</p>
                    <p class="feeCountP2">USD:</p>
                    <p class="feeCountP1">费用总计</p>
                </div>
                <div class="protocol">
                    <el-checkbox class="protocolChecked" v-model="checked">我已阅读并同意 《纳信物流综合服务委托协议》</el-checkbox>
                </div>
                <div class="submitBtns">
                   <el-button class="submitBtn">默认按钮</el-button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <homefooter/>
    </div>
<!-- 遮罩层 -->
    <div v-show="isshow" class="layout-man" style="z-index: 99;background: white;position: fixed;height: 100px;top: 0;    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);">
        <div class="layout-1200">
            <el-card style="background: white;background: white;box-shadow: unset;border: none;" class="box-card_1">
              <div class="content_1">
                <div class="content_1_title">
                  <p>
                    拖柜地点
                    <img src="../assets/img/dc_jiantou2.jpg" alt>
                  </p>
                  <p>起运港（码头）</p>
                  <!-- <p>拖柜日期</p> -->
                  <p>模式</p>
                  <p>总货柜量</p>
                  <p>20'GP孖拖</p>
                </div>
                <div class="content_1_data">
                  <p class="content_1_dataP1">{{goods_price.district_full_name}}</p>
                  <p class="content_1_dataP2">{{goods_price.port_cn_name}}</p>
                  <!-- <p>{{comment.formate('yyyy-MM-dd',new Date(tempdate))}}</p> -->
                  <p class="content_1_dataP3" v-if="baoguan === '0'">自行报关</p>
                  <p class="content_1_dataP3" v-if="baoguan === '1'">委托报关</p>
                  <div class="showdiv">
                    <p class="showdivP">2 x20GP</p>
                    <p class="showdivP">2 x40GP</p>
                    <p class="showdivP">2 x40HQ</p>
                  </div>
                  <p class="content_1_dataP4">是/否</p>
                </div>
              </div>
            </el-card>

        </div>
    </div>



    <el-dialog title="我的拖柜地点" :visible.sync="dialogTableVisible">
      <div class="myaddress">
        <div class="eldialog-title">
          <p>公司名称</p>
          <p>公司详细地址</p>
          <p>工厂联系人</p>
          <p>联系电话</p>
          <p>操作</p>
        </div>
        <div
          class="eldialog-list"
          v-for="(item,index,key) in addressdata1"
          :key="key"
          @click="chooseaddress(item)"
          v-show="Number(item.district_id) === Number(district_id)"
        >
          <p>{{item.company_name}}</p>
          <p>{{item.district_full_name}}</p>
          <p>{{item.contact_name}}</p>
          <p>{{item.contact_phone}}</p>
          <p>选择</p>
        </div>
      </div>
    </el-dialog>
    <!--弹出内容-->
    <modal @on-close="closeThis()" :is-show="isShowLogin"></modal>
  </section>
</template>

<script>
import topheader from "../components/comment/topheader.vue";
import contentheader from "../components/comment/contentheader.vue";
import homefooter from '../components/home/homefooter.vue'
import ElButton from "../node_modules/element-ui/packages/button/src/button.vue";
const modal = () => import("~/components/comment/loginModel");
export default {
  name: "trailerOrder",
  components: {
    ElButton,
    topheader,
    contentheader,
    homefooter,
    modal
  },
  data() {
    return {
      isshow:false,
      checked: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",

      dccode: null,
      updataHeaders: {},
      uploadToken: {
        token: ""
      },
      //---------------------------
      isShowLogin: false,
      dialogTableVisible: false,
      murl: this.$store.state.headerUrl,
      //是否熏柜
      checked4: false,
      checked5: false,
      value1: "", //过磅类型的显示
      guobangtype: "", //过磅类型
      value2: "",
      value3: "", //报关地点
      elDate: "",
      input1: "0",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      options5: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" }
      ],
      value4: "",
      //        这个是报关的
      value5: "",
      value6: "",
      //基础数据
      city: [],
      freight: null,
      weigh_type: [],
      //顶部拖车数据
      checkedPrice: [],
      containers_20gp: null,
      containers_40gp: null,
      containers_40hq: null,
      containers_45hq: null,
      is_gp_20_twin: null,
      tempdate: null,
      baoguan: null,
      //拖车价格详情数据
      goods_price: [],
      fujiafee: [],
      //地点数据
      addressdata: [
        {
          district_id: "",
          company_name: "",
          address: "",
          contact_name: "",
          contact_phone: "",
          comment: "",
          isaddtomyaddress: false
        }
      ],
      addressdata1: [],
      //第几个地址中的从我的地址选择
      chooseindex: null,
      //报关地点选择
      showchoosecity: true,
      baoguanitem: {},
      showbaoguan: "",
      iskey: false,
      keyport: [],

      tanguangid1: null,
      port1: [],
      baoguanInfo: null,
      //费用
      tuochefee: null,
      tuocheservicefee: null,
      baoguanservicefee: null,
      liandanfee: null,
      countfee1: null,
      countfee2: null,
      //是否显示委托
      iscul: false,
      cnycount: 0,
      usdcount: 0,
      surcharge_list: [],
      district_id: null,
      so_file: null,
      so_file_name: null
    };
  },
  methods: {
    onexceed() {
      alert("请先删除已上传的图片");
    },
    beforeremove() {
      this.so_file = null;
      this.so_file_name = null;
    },
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    onsuccess(res, file) {
      this.so_file = this.updataHeaders.domain + res.key;
      this.so_file_name = file.name;
    },
    //------------------
    handleChange(value) {},
    addaddress() {
      this.addressdata.push({
        district_id: "",
        company_name: "",
        address: "",
        contact_name: "",
        contact_phone: "",
        comment: "",
        isaddtomyaddress: false
      });
    },
    deladdress(index) {
      this.addressdata.splice(index, 1);
    },
    //获取我的地址数据
    getaddressdata() {
      let that = this;
      let tempalert = that.$alert;
      let url = that.$store.state.headerUrl + "freight/trailer/address";
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            resp.data.data = null;
            if (resp.data.data === null) {
              that.addressdata1 = [];
            } else {
              that.addressdata1 = resp.data.data;
            }
            that.dialogTableVisible = true;
          } else {
            return;
            tempalert(resp.data.msg, {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "确定",
            callback: action => {}
          });
        });
    },
    //打开选择地点弹框
    selectaddress(index) {
      let that = this;
      this.chooseindex = index;
      if (that.addressdata1.length === 0) {
        that.getaddressdata();
      } else {
        that.dialogTableVisible = true;
      }
    },
    //选择地点
    chooseaddress(item) {
      this.addressdata[this.chooseindex] = {
        district_id: item.district_id,
        company_name: item.company_name,
        address: item.address,
        contact_name: item.contact_name,
        contact_phone: item.contact_phone,
        comment: ""
      };
      this.dialogTableVisible = false;
      this.chooseindex = null;
    },
    getguobangtype(value) {
      this.guobangtype = value;
    },
    //价格详情
    getPricedetails() {
      var that = this;
      let tempalert = that.$alert;
      let url =
        that.$store.state.headerUrl +
        "freight/trailer/goods/" +
        JSON.parse(localStorage.getItem("trailertempData")).id;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.goods_price = resp.data.data;
            that.fujiafee = resp.data.data.surcharge;
            if (that.baoguan === "1") {
              that.checkbaoguan();
            }
            if (localStorage.getItem("trailerinput")) {
              that.checked4 = JSON.parse(
                localStorage.getItem("trailerinput")
              ).checked4;
              that.value2 = JSON.parse(
                localStorage.getItem("trailerinput")
              ).value2;
              that.addressdata = JSON.parse(
                localStorage.getItem("trailerinput")
              ).addressdata;
              that.culPrice();
            }
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "确定",
            callback: action => {}
          });
        });
    },

  
    
    
    
    

    // 滚动条控制置顶拖车内容的显隐
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop >= 316){
          this.isshow = true;
        }else{
          this.isshow = false;
        }
      },
  },
  mounted() {
     window.addEventListener('scroll', this.handleScroll);//监听滚动条，绑定事件
    let userInfo = JSON.parse(localStorage.getItem("users"));
    this.$axios
      .get(this.$store.state.headerUrl + "qiniu_uptk", {
        headers: {
          token: userInfo ? userInfo.token : ""
        }
      })
      .then(res => {
        if (res.data.data.length > 0) {
          this.updataHeaders = {
            domain: "",
            token: ""
          };
        } else {
          this.updataHeaders = res.data.data;
        }
      });

    let that = this;
    //      that.setswiper();
    //基础数据
    localStorage.removeItem("initData");
    localStorage.removeItem("initDataTime");
    that.comment.initData(that.$store, that.$axios).then(function(resp) {
      localStorage.setItem("initData", JSON.stringify(resp));
      localStorage.setItem("initDataTime", new Date().getTime());
      that.initData = JSON.parse(localStorage.getItem("initData"));
      that.city = that.initData.city;
      that.tanguangid1 = that.city[0].id;
      that.getprot(that.city[0].id);
      that.freight = that.initData.freight;
      that.weigh_type = that.initData.freight.weigh_type;
      that.$store.commit("SET_TITLE", resp.freight.freight_name);
    });
    let tempData = JSON.parse(localStorage.getItem("trailertempData"));
    that.containers_20gp = tempData.containers_20gp;
    that.containers_40gp = tempData.containers_40gp;
    that.containers_40hq = tempData.containers_40hq;
    that.containers_45hq = tempData.containers_45hq;
    that.is_gp_20_twin = tempData.is_gp_20_twin;
    that.district_id = tempData.district_id;
    that.tempdate = tempData.tempdate;
    that.baoguan = tempData.baoguan;
    if (that.is_gp_20_twin === "1") {
      that.input1 = parseInt(Number(that.containers_20gp) / 2);
    } else {
      that.input1 = 0;
    }
    that.getPricedetails();
    //判断是否是reload

    //      that.bindtanchu();
  },
  watch: {
  
  }
};
</script>



