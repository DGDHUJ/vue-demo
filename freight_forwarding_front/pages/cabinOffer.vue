<style scoped lang="scss" >
  .cabinOffer{
    position: relative;
    min-height: 342px;
  }
  .cabinOffer{
    margin-top: 20px;
    .content{
      font-size: 14px;
      .box-card_1{
        background-color: #eae9ee;
        border: 1px solid #4a3f91;
        margin: 20px 0 20px 0;
        .title{
          font-size: 18px;
          img{
            float: left;
            margin-top: -2px;
          }
          p{
            margin-left: 40px;
            font-weight: 600;
          }
        }
        .content{
          margin: 20px 0 20px 0;
          div:first-child{
            margin-bottom: 10px;
            /*这里是改div变成输入框形式*/
            .search_s:nth-of-type(2){
              margin-left: 2%;
              margin-right: 6.8%;
            }
            .search_s{
              width: 20%;
              height: 40px;
              float: left;
              line-height: 40px;
              text-indent: 1em;
              border: 1px solid #dcdcdc;
              border-radius: 4px;
              overflow: hidden;
              cursor: pointer;
              background-color: #fff;
              i{
                float: right;
                margin-top:15px;
                margin-right: 12px;
              }
             }
          }
          .el-input{
            width: 20%;
          }
          .el-select{
            width: 20%;
          }

          .bq_mian{
            overflow: hidden;
            .el-select{
              float: left;
            }
          }
          .banqi{
            width: 77.9%;
            float: left;
            .banqi_left{
              background-color: #fff;
              float: left;
              width: 612px;
              height: 40px;
              line-height: 40px;
              margin-top: 1px;
              span{
                float: left;
                margin-left: 10px;
                margin-right: 10px;
              }
              .el-checkbox-group{
                overflow: hidden;
                .el-checkbox:nth-of-type(1){
                  margin-left: 20px;
                }
              }
            }
            .el-checkbox+.el-checkbox{
              margin-left: 10px !important;
            }

            .el-checkbox{
              float: left;
            }
            .el-button{
               float: left;
               background-color: #4a3f91;
               color: #fff;
               width: 20%;
             }
          }

        }
      }

      .box-card_2{
        margin: 20px 0 0 0;
        background-color: #4a3f91;
        color: #fff;
        p{
          display: inline-block;
          width: 9%;
        }
        P:nth-of-type(5){
          width: 8%;
        }
        P:nth-of-type(1){
          width: 30%;

        }
        p:last-of-type{
          text-align: center;
        }
      }

      .box-card_3{
        /*margin: 20px 0 20px 0;*/

        background: white;
        padding:20px 24px 10px 0px;
        /*padding:10px 24px 0 24px;*/
        .content1:nth-of-type(1){
          margin-top: -5px;
        }
        .content1{
          overflow: inherit;
          padding:0 0 10px 0;
          /*overflow: hidden;*/
          /*background-color: azure;*/
          /*height: 140px;*/
          min-height: 140px;
          font-size: 12px;
          margin-top:20px;
          position: relative;
          border-bottom: 1px solid #dcdcdc;
          display: flex;
          .liuchen{
            /*position: absolute;*/
            float: left;
            width: 24px;
            height: 80px;
          }
          >div{
             width: 9%;
          }
          .title{
            font-size: 14px;
          }
          >div:nth-of-type(1){
            width: 29%;
            padding: 0 20px 0 0;

            /*margin-right: 9.6%;
            margin-bottom: 20px;
            max-width: 293.33px;*/
            p:nth-of-type(3){
              margin-top: 20px;
            }
            button{
              width: 64px;
              height: 20px;
              border: 1px solid #f08519;
              color: #f08519;
              background-color: #fff;
              font-size: 12px;
              margin-top: 10px;
            }
            button:nth-of-type(1){
              margin-right: 10px;
            };
          }
          >div:nth-of-type(2){
            /*margin-right: 4.5%;*/
            margin-top: 46px;
            color: #f08519;
          }
          >div:nth-of-type(3){
            /*margin-right: 4.5%;*/
            margin-top: 46px;
            color: #f08519;
          }
          >div:nth-of-type(4){
            /*margin-right: 5.5%;*/
            margin-top: 46px;
            color: #f08519;
          }
          >div:nth-of-type(5){
            /*margin-right: 5.4%;*/
            margin-top: 40px;
            cursor: pointer;
            /*padding-left: 10px;*/
            width: 8%;
          }
          >div:nth-of-type(6){
            /*margin-right: 4%;*/
            p:nth-of-type(3){
              margin-top: 20px;
            }
          }
          >div:nth-of-type(7){
            /*margin-right: 6%;*/
            margin-top: 28px;
            text-align: center;
          }
          >div:nth-of-type(8){
            text-align: center;
            margin-top: 16px;
            button{
              width: 93px;
              height: 30px;
              border: 0px;
              border-radius: 4px;
              color: #fff;
            }
            .btn1{
              background-color: #f08519;
              cursor: pointer;
            }
            .btn2{
              background-color: #4a3f91;
              margin-top: 10px;
              cursor: pointer;
            }
          }
          .fujiafei{
            position: absolute;
            background: white;
            z-index: 1;
            width: 600px;
            border: 1px solid #ddd;
            left: 34%;
            top: 75px;
            /*padding:10px 20px;*/
            .fujiafei-title{
              height: 40px;
              line-height: 40px;
              padding-right: 15px;
              p{
                text-align: center;
               display: inline-block;
                width: 25%;
              }
            }
            .fujiafei-list{
              max-height: 130px;
              overflow-y: scroll;
              .itemlist{
                height: 30px;
                line-height: 30px;
                p{
                  text-align: center;
                  display: inline-block;
                  width: 25%;
                }
              }
            }
            .count{
              background: #4a3f91;
              color: white;
              display: flex;
              div{
                text-align: center;
                border-right: 1px solid white;
                width: 25%;
                p{
                  height: 40px;
                  line-height: 40px;
                }
                p:first-of-type{
                  border-bottom: 1px solid white;
                }
              }
              div:nth-of-type(1){
                 align-self: center;
                 height: 80px;
                 line-height: 80px;
               }
              div:last-of-type{
                border-right: none;
              }
            }
            .nofee{
              p{
                text-align: center;
                line-height: 40px;
                height: 40px;
              }
            }
          }
        }
      }
      /*.list{
        .item-title{
          padding: 0 20px;
          background:#4a3f91 ;
          color: white;
          div{
            text-align: center;
          }
          div:nth-of-type(1){
            text-align: left;
          }
        }
        .item-content{
          padding: 0 20px;
          background: white;
          div{
            text-align: center;
          }
          div:nth-of-type(1){
            text-align: left;
          }
        }
      }*/
      /*这是弹窗*/
      .showform{
        position: absolute;
        background: white;
        z-index: 11;
        top: 150px;
        left: 15.5%;
        border: 1px solid #ddd;
        width: 650px;
        padding:0 10px 20px 10px;
        .swiper-container{
          line-height: 40px;
          height: 40px;
          border-bottom: 1px solid #ddd;
          .swiper-slide{
            text-align: center;
            cursor: pointer;
            /*width: 62.8333px;*/
            /*min-width: 70px;*/
          }
          .swiper-slide-active1{
            border-bottom: 3px solid #4B3F91;
            color: #4B3F91;
            font-weight: 600;
          }
          .swiper-slide-active2{
            border-bottom: 3px solid #4B3F91;
            color: #4B3F91;
            font-weight: 600;
          }
        }
        .port{
          cursor: pointer;
          p{
            width: 33.33%;
            display: inline-block;
            text-align: center;
            padding: 20px 0 0 0;
            font-size: 0.875rem;
          }
        }
      }
      #searchBox1{
        left: 21px;
        top:143px;
        max-height: 227px;
        overflow-y: scroll;
      }
      #searchBox2{
        left: 275px;
        top:143px;
        max-height: 227px;
        overflow-y: scroll;
      }
    }
  }
</style>
<template>
  <section class="container">
    <div >
      <topheader/>
      <contentheader/>
      <div class="layout" v-loading="loading1">
        <!-- <div class="pageouter"></div> -->
        <div class=" cabinOffer">
          <div class="orderConfirm-tab">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>订舱列表</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="content">
            <!--第1卡片内容-->
            <el-card class="box-card_1">
              <div class="title">
                <img src="../assets/img/dc_Icon.png" height="30" width="30"/>
                <p>订舱</p>
              </div>
              <div class="content">
                <div style="overflow: hidden;">
                  <input style="cursor:pointer;padding-left: 15px;height: 40px;width: 20%;" id="search1" class="search" v-model="showqiyungang" placeholder="请选择起运港"  @keyup="keyfunc(1)">
                  <i id="searchi1" style="    margin-left: -25px;padding-top: 14px;" :class="{'el-icon-arrow-down':!showchoosecity,'el-icon-arrow-up':showchoosecity}"></i>
                  <input style="cursor:pointer;padding-left: 15px;margin-left: 3%;height: 40px;width: 20%;" id="search2" class="search" v-model="showmudegang" placeholder="请选择目的港"  @keyup="keyfunc(2)">
                  <i id="searchi2" style="    margin-left: -25px;padding-top: 14px;" :class="{'el-icon-arrow-down':!mudigan,'el-icon-arrow-up':mudigan}"></i>
                  <span style="margin-left: 40px;">开船日期：</span>
                  <el-date-picker  v-model="value4" type="date" placeholder=""></el-date-picker>
                  <span style="margin: 0 10px;">至</span>
                  <el-date-picker v-model="value5" type="date" placeholder="" ></el-date-picker>
                </div>
                <div class="bq_mian">
                <!--  <el-select v-model="value6"  placeholder="选择中转方式">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>-->
                  <div class="banqi">
                    <!-- <div class="banqi_left">
                      <span>班期</span>
                      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                      </el-checkbox-group>
                    </div> -->
                    <!--<button>清除</button>-->
                    <el-button @click="checkPrice">查询</el-button>
                  </div>
                </div>
              </div>
            </el-card>
             <!--查询出来的数据列表-->
            <el-card v-show="ischecked" class="box-card_2">
              <div class="content">
                  <p>起运港(码头) / 中转方式 · 行程 / 目的港(码头)</p>
                  <p>20GP</p>
                  <p>40GP</p>
                  <p>40HG</p>
                  <p>附加费</p>
                  <p>有效日期</p>
                  <p>船期</p>

              </div>
            </el-card>
            <div v-show="ischecked" class="box-card_3">
              <div v-for="(item,index) in checklistData" :key="item.id" class="content1" style="position: relative;">
                <img class="liuchen" src="../assets/img/dc_jiantou.jpg" alt="">
                <div>
                  <P class="title">{{item.pol_en_name}}&nbsp;{{item.pol_cn_name}}</P>
                  <P >海运 · {{item.days}}天</P>
                  <!--<P v-if="item.transshipment === '0'">海运 · 直达 · {{item.days}}天</P>-->
                  <!--<P v-if="item.transshipment !== '0'">海运 · 中转 · {{item.days}}天</P>-->
                  <P class="title">{{item.pod_en_name}}&nbsp;{{item.pod_cn_name}}</P>
                  <P>VSL/VOY：{{item.carrier_en_name}}/{{item.carrier_cn_name}}</P>
                  <button>{{(item.carrier_en_name).split(' ')[0]}}</button>
                  <button>{{item.carrier_code}}</button>
                </div>
                <div>
                  <p class="title">${{item.gp20_price}}</p>
                </div>
                <div>
                  <p class="title">${{item.gp40_price}}</p>
                </div>
                <div>
                  <p class="title">${{item.hq40_price}}</p>
                </div>
                <div >
                  <img class="bug" @click="showlist1(index)" src="../assets/img/dc_fu.jpg" alt="">
                </div>
                <div>
                  <p>[预计开船]</p>
                  <p>{{item.sail_date}}</p>
                  <p>[截至定舱]</p>
                  <p>{{item.end_date}}</p>
                </div>
                <div>
                  <p v-if="item.sail_week_day === '1'">周一</p>
                  <p v-if="item.sail_week_day === '2'">周二</p>
                  <p v-if="item.sail_week_day === '3'">周三</p>
                  <p v-if="item.sail_week_day === '4'">周四</p>
                  <p v-if="item.sail_week_day === '5'">周五</p>
                  <p v-if="item.sail_week_day === '6'">周六</p>
                  <p v-if="item.sail_week_day === '7'">周日</p>
                  <p>{{item.jie}}载{{item.kai}}开</p>
                </div>
                <div>
                  <!--<nuxt-link :to="{name:'cabinOrder'}">-->
                    <button class="btn1" @click="dingcang(index)">定舱</button>
                  <!--</nuxt-link>-->
                  <br>
                  <button class="btn2" onclick="_MEIQIA('showPanel')">咨询客服</button>
                </div>
                <!--弹出的附加费用弹框未写-->
                <div class="fujiafei bug" v-if="item.showlist">
                  <div class="fujiafei-title bug">
                    <p class="bug">费用名称</p>
                    <p class="bug">币种</p>
                    <p class="bug">单价</p>
                    <p class="bug">单位</p>
                  </div>
                  <div class="fujiafei-list bug" >
                    <div class="itemlist bug" v-for="(items,index,key) in item.surcharge" :key="key">
                      <p class="bug">{{items.surcharge_cn_name}}</p>
                      <p class="bug">{{items.currency}}</p>
                      <p class="bug" v-if="items.type === '0'">{{items.price}}</p>
                      <p class="bug" v-if="items.type === '1'">{{items.gp20_price}}/{{items.gp40_price}}/{{items.hq40_price}}</p>
                      <p class="bug" v-if="items.type === '0'">ticket</p>
                      <p class="bug" v-if="items.type === '1'">20GP/40GP/40HQ</p>
                    </div>
                  </div>
                  <div class="nofee bug" v-if="item.surcharge === null || item.surcharge.length === 0">
                    <p >没有附加费</p>
                  </div>
                </div>
              </div>
              <div v-show="checklistData.length === 0" style="text-align: center;">没有相应的数据</div>
            </div>
            <!--弹出内容-->
            <!--第一个-->
            <div id="searchBox1" class="showform" v-show="showchoosecity">
              <div id="searchBox_title1" class="swiper-container swiper-container0" v-show="!iskey">
                <div class="swiper-wrapper swiper-wrapper0 wrap" >
                  <div  :class="{'swiper-slide-active1':(item.id === tanguangid1)} " class="swiper-slide swiper-slide0" :id="item.id" :key="key" v-for="(item,index,key) in city" @click="choosecity(item.id,1)">{{item.cn_name}}</div>
                </div>
              </div>
              <div class="port" v-show="!iskey" v-loading="loading">
                <p v-for="(item,index,key) in port1" :key="key" @click="choosecity2(item,1)">
                  <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                  <br>
                  <span>({{item.en_name}}/{{item.countryen_name}})</span>
                </p>
              </div>
              <!--添加的搜索的显示-->
              <div class="port" v-show="iskey" >
                <p v-for="(item,index,key) in keyport1" :key="key" @click="choosecity2(item,1)">
                  <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                  <br>
                  <span>({{item.en_name}}/{{item.countryen_name}})</span>
                </p>
              </div>
            </div>
            <!--第二个-->
            <div id="searchBox2" class="showform" v-show="mudigan">
              <div id="searchBox_title2" class="swiper-container swiper-container1" v-show="!iskey2">
                <div class="swiper-wrapper swiper-wrapper1">
                  <div :class="{'swiper-slide-active2':(item.id === tanguangid2)}" class="swiper-slide" :id="item.id" :key="key" v-for="(item,index,key) in shipping_route" @click="mudegangxz(index)">{{item.cn_name}}</div>
                </div>
              </div>
              <div class="port" v-show="!iskey2">
                <p v-for="(item,index,key) in mudegangshuju" :key="key" @click="choosemudegang2(item)">
                  <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                  <br>
                  <span>({{item.en_name}}/{{item.countryen_name}})</span>
                </p>
              </div>
              <!--添加的搜索的显示-->
              <div class="port" v-show="iskey2" >
                <p v-for="(item,index,key) in keyport2" :key="key" @click="choosemudegang2(item)">
                  <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                  <br>
                  <span>({{item.en_name}}/{{item.countryen_name}})</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="pageouter"></div> -->
      </div>
      <homeguarantees/>
      <webfooter/>
    </div>
  </section>
</template>

<script>
  import topheader from '../components/comment/topheader.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  const cityOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  // import Swiper from 'swiper/dist/js/swiper.min'
  import axios from 'axios'
  export default {
    name:'cabinOffer',
    async asyncData({ app, params, query }) {
      let city = '';
      let port1 = [];
      let shipping_route = [];
      let tanguangid2 = '';
      let tanguangid1 = '';
      let mudegangshuju = '';
      let getcountryurl = app.store.state.headerUrl + 'country';
      let country = await axios.get(getcountryurl).then(function(resp) {
        return resp.data.data
        })
        .catch(function(error) {
          
        });
      let countryData = [];
      for(var i = 0; i <country.length; i++ ){
        countryData[country[i].id] =  country[i];
      }
      app.store.state.countryData =  countryData;
      let initUrl =  app.store.state.headerUrl + 'freight/init';
      let initData =  await axios.get(initUrl).then(function(resp) {
          return resp.data.data;
        }).catch(function(error) {
          
        });
        city = initData.city;
        tanguangid1 = city[0].id;
        shipping_route = initData.shipping_route;
        tanguangid2 = shipping_route[0].id;
        app.store.commit('SET_TITLE',initData.freight.freight_name)

      let porturl = app.store.state.headerUrl + 'freight/port_by_pid/'+city[0].id;
      port1 =  await axios.get(porturl).then(function(resp) {
          for(var i = 0 ; i < resp.data.data.length; i++){
            resp.data.data[i].countrycn_name = countryData[Number(resp.data.data[i].country_id)].cn_name;
            resp.data.data[i].countryen_name = countryData[Number(resp.data.data[i].country_id)].en_name;
          }
          return resp.data.data;
        }).catch(function(error) {
          
        });
      for(var i = 0 ; i < shipping_route[0].recommend_port.length; i++){
          shipping_route[0].recommend_port[i].countrycn_name = countryData[Number(shipping_route[0].recommend_port[i].country_id)].cn_name;
          shipping_route[0].recommend_port[i].countryen_name = countryData[Number(shipping_route[0].recommend_port[i].country_id)].en_name;
        }
      mudegangshuju = shipping_route[0].recommend_port;

      let qiyungang = {};
      let mudegang = {};
      let showqiyungang = '';
      let showmudegang = '';


      if(query.id1){
        tanguangid1 = query.id1;
        tanguangid2 = query.id2;
        qiyungang.cn_name = query.name1;
        showqiyungang = query.name1;
        mudegang.cn_name = query.name2;
        showmudegang = query.name2;
        qiyungang.id = Number(query.id11);
        mudegang.id = Number(query.id12);
      }
      return {
        initData:initData,
        city:city,
        tanguangid1:tanguangid1,
        tanguangid2:tanguangid2,
        mudegangshuju:mudegangshuju,
        shipping_route:shipping_route,
        port1:port1,
        qiyungang:qiyungang,
        mudegang:mudegang,
        showqiyungang:showqiyungang,
        showmudegang:showmudegang,
        countryData:countryData,
      };
    },
    components: {
      topheader,
      contentheader,
      homeguarantees,
      webfooter,
    },
    data(){
      return{
        iskey2:false,
        keyport2:[],
        iskey:false,
        keyport1:[],
        options1: [],
        value2: [],
        value3: [],
        value4: '',
        value5: '',
        value6: '',
        // checkAll: false,
        // checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
        checklistData:[],//查询的订舱数据
        ischecked:false,

        showchoosecity:false,
        mudigan:false,
        port:[],
        port2:[],
        options3: [{
          value: 0,
          label: '直达'
        },  {
          value: 1,
          label: '中转'
        }],
        loading:false,
        loading1:false,
        isask:false
      }
    },


    methods:{
      showask(){
        this.isask  = !this.isask;
        if(this.isask){
          _MEIQIA('showPanel')
        }else{
          _MEIQIA('hidePanel')
        }
      },
      keyfunc(index){
        let that = this;
        if(index === 1){
          that.showchoosecity =true;
          if(that.showqiyungang === ''){
            that.iskey = false;
            that.tanguangid1 = that.city[0].id;
          }else{
            let url = that.$store.state.headerUrl + 'freight/port';
            let tempalert = that.$alert;
            let params = {
              keyword:that.showqiyungang
            };
            that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert).then(function (resp) {
              if(resp.data.code === 0){
                for(var i = 0 ; i < resp.data.data.length; i++){
                  resp.data.data[i].countrycn_name = that.$store.state.countryData[Number(resp.data.data[i].country_id)].cn_name;
                  resp.data.data[i].countryen_name = that.$store.state.countryData[Number(resp.data.data[i].country_id)].en_name;
                }
                that.keyport1 = resp.data.data;
                that.iskey = true;
              }else{
                that.keyport1 = [];
                that.iskey = true;
              }
            }).catch(function (error) {
              tempalert('搜索失败', {
                confirmButtonText: '确定',
                callback: action => {
                }
              });
            })
          }
        }
        if(index === 2){
          that.mudigan =true;
          if(that.showmudegang === ''){
            that.iskey2 = false;
            that.tanguangid2 = that.shipping_route[0].id;
          }else{
            let url = that.$store.state.headerUrl + 'freight/port';
            let tempalert = that.$alert;
            let params = {
              keyword:that.showmudegang
            };
            that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert).then(function (resp) {
              if(resp.data.code === 0){
                for(var i = 0 ; i < resp.data.data.length; i++){
                  resp.data.data[i].countrycn_name = that.$store.state.countryData[Number(resp.data.data[i].country_id)].cn_name;
                  resp.data.data[i].countryen_name = that.$store.state.countryData[Number(resp.data.data[i].country_id)].en_name;
                }
                that.keyport2 = resp.data.data;
                that.iskey2 = true;
              }else{
                that.keyport2 = [];
                that.iskey2 = true;
              }
            }).catch(function (error) {
              tempalert('搜索失败', {
                confirmButtonText: '确定',
                callback: action => {
                }
              });
            })
          }
        }
      },
      // handleCheckAllChange(val) {
      //   this.checkedCities = val ? cityOptions : [];
      //   this.isIndeterminate = false;
      // },
      // handleCheckedCitiesChange(value) {
      //   this.checkedCities = value;
      //   let checkedCount = value.length;
      //   this.checkAll = checkedCount === this.cities.length;
      //   this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      // },
      setswiper() {
        // let swiper0 = new Swiper('.swiper-container0', {
        //   slidesPerView: 6,
        //   spaceBetween: 30,
        //   width: 550,
        //   freeMode : true,
        //   freeModeMinimumVelocity : 1,

        // });
        // let swiper1 = new Swiper('.swiper-container1', {
        //   slidesPerView: 6,
        //   spaceBetween: 30,
        //   width: 550,
        //   freeMode : true,
        //   freeModeMinimumVelocity : 1,
        // });
        // let swiper2 = new Swiper('.gundong',{
        //   direction: 'vertical',
        //   slidesPerView: 3,
        //   spaceBetween: 0,
        //   autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   },
        // });
      },
      mudegangxz(index){
        this.tanguangid2 =  this.shipping_route[index].id;
        for(var i = 0 ; i < this.shipping_route[index].recommend_port.length; i++){
          this.shipping_route[index].recommend_port[i].countrycn_name = this.$store.state.countryData[Number(this.shipping_route[index].recommend_port[i].country_id)].cn_name;
          this.shipping_route[index].recommend_port[i].countryen_name = this.$store.state.countryData[Number(this.shipping_route[index].recommend_port[i].country_id)].en_name;
        }
        this.mudegangshuju = this.shipping_route[index].recommend_port;
      },
      choosemudegang2(item){
        this.mudegang = item;
        this.showmudegang = item.cn_name;
      },
      //获取港口数据
      getprot(id){
        var that = this;
        let url = that.$store.state.headerUrl + 'freight/port_by_pid/'+id;
        let tempalert = that.$alert;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          for(var i = 0 ; i < resp.data.data.length; i++){
            resp.data.data[i].countrycn_name = that.$store.state.countryData[Number(resp.data.data[i].country_id)].cn_name;
            resp.data.data[i].countryen_name = that.$store.state.countryData[Number(resp.data.data[i].country_id)].en_name;
          }
            that.port1 = resp.data.data;
            if(id === that.city[0].id){
              that.loading = false;
            }
        })
      },
      //选择起运港城市
      choosecity(id,index){
        if(index === 1){
          this.tanguangid1 =  id;
          this.getprot(id,1);
        }else if(index === 2){
          this.tanguangid2 =  id;
          this.getprot(id,2);
        }
      },
      //选择目的港城市
      choosecity2(item){
        this.qiyungang = item;
        this.showqiyungang = item.cn_name;
      },
      //查询价格
      checkPrice(){
        var that = this;
        let url = that.$store.state.headerUrl + 'freight/shipping/goods';
        let tempalert = that.$alert;
        //判断中转方式
        let tempzhongzhuanways = null;
        if(that.value6 === ''){
          tempzhongzhuanways = -1;
        }else{
          tempzhongzhuanways = that.value6;
        }
        // let temp_sail_week_day =[];
        //拼装班期
        // if(that.checkedCities !== []){
        //   for(let i = 0;i< that.checkedCities.length;i++){
        //     if(that.checkedCities[i] === '周一'){
        //       temp_sail_week_day.push(1);
        //     }else if(that.checkedCities[i] === '周二'){
        //       temp_sail_week_day.push(2);
        //     }else if(that.checkedCities[i] === '周三'){
        //       temp_sail_week_day.push(3);
        //     }else if(that.checkedCities[i] === '周四'){
        //       temp_sail_week_day.push(4);
        //     }else if(that.checkedCities[i] === '周五'){
        //       temp_sail_week_day.push(5);
        //     }else if(that.checkedCities[i] === '周六'){
        //       temp_sail_week_day.push(6);
        //     }else if(that.checkedCities[i] === '周日'){
        //       temp_sail_week_day.push(7);
        //     }
        //   }
        // }
        let tempvalue4 = '';
        let tempvalue5 = '';
        if(that.value4 !== ''){
          tempvalue4 = that.comment.formate('yyyy-MM-dd',new Date(that.value4))
        }
        if(that.value5 !== ''){
          tempvalue5 = that.comment.formate('yyyy-MM-dd',new Date(that.value5))
        }
        let params ={
          pol:that.qiyungang.id,
          pod:that.mudegang.id,
          is_dir:tempzhongzhuanways,
          begin_date:tempvalue4,
          end_date:tempvalue5,
          sail_week_day:[]
        }
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            if(resp.data.data === null){
              that.checklistData = []
            }else{
              that.checklistData = resp.data.data;
              if(that.checklistData!==[]||that.checklistData!==null){
                for(var i = 0;i< that.checklistData.length;i++){
                  that.checklistData[i].showlist = false;
                  if(that.checklistData[i].end_weed_day==='1'){
                    that.checklistData[i].jie = '一'
                  }else if(that.checklistData[i].end_weed_day==='2'){
                    that.checklistData[i].jie = '二'
                  }else if(that.checklistData[i].end_weed_day==='3'){
                    that.checklistData[i].jie = '三'
                  }else if(that.checklistData[i].end_weed_day==='4'){
                    that.checklistData[i].jie = '四'
                  }else if(that.checklistData[i].end_weed_day==='5'){
                    that.checklistData[i].jie = '五'
                  }else if(that.checklistData[i].end_weed_day==='6'){
                    that.checklistData[i].jie = '六'
                  }else if(that.checklistData[i].end_weed_day==='7'){
                    that.checklistData[i].jie = '日'
                  }
                  if(that.checklistData[i].sail_week_day==='1'){
                    that.checklistData[i].kai = '一'
                  }else if(that.checklistData[i].sail_week_day==='2'){
                    that.checklistData[i].kai = '二'
                  }else if(that.checklistData[i].sail_week_day==='3'){
                    that.checklistData[i].kai = '三'
                  }else if(that.checklistData[i].sail_week_day==='4'){
                    that.checklistData[i].kai = '四'
                  }else if(that.checklistData[i].sail_week_day==='5'){
                    that.checklistData[i].kai = '五'
                  }else if(that.checklistData[i].sail_week_day==='6'){
                    that.checklistData[i].kai = '六'
                  }else if(that.checklistData[i].sail_week_day==='7'){
                    that.checklistData[i].kai = '日'
                  }
                }
              }
            }
            that.ischecked = true;
          }
        })
      },
      showlist1(index){
        if(this.checklistData[index].showlist){
          this.checklistData[index].showlist = false
        }else{
          for(var i = 0;i< this.checklistData.length;i++){
            this.checklistData[i].showlist = false;
          }
          this.checklistData[index].showlist = !this.checklistData[index].showlist;
        }
        this.$forceUpdate();
      },
//      订舱
      dingcang(index){
        
        let querydata = JSON.stringify(this.checklistData[index]);
        localStorage.removeItem("cabintempnum");
        localStorage.setItem("cabintempData",querydata);
        localStorage.setItem("cabintempDataways",this.value6)
        this.$router.push({name:'cabinOrder'})  //,query:{data:querydata,ways:this.value6
      }
    },

    mounted(){
      let that = this;
      sessionStorage.setItem('countryData',JSON.stringify(that.countryData))
      // setTimeout(() => that.setswiper(),1000);
      var obj_title1 = document.getElementById("searchBox_title1")
      var obj_title2 = document.getElementById("searchBox_title2")
      var obj1 = document.getElementById("searchBox1");
      var oBtn1 = document.getElementById("search1");
      var oBtni1 = document.getElementById("searchi1");
      var obj2 = document.getElementById("searchBox2");
      var oBtn2 = document.getElementById("search2");
      var oBtni2 = document.getElementById("searchi2");
//     这里是先阻止冒泡
      obj_title1.onclick = function(e) {
        var e = e || window.event;
        e.cancelBubble = true
      }
      obj_title2.onclick = function(e) {
        var e = e || window.event;
        e.cancelBubble = true
      }
      oBtn1.onclick=()=>{
        setTimeout(() => {that.showchoosecity = !that.showchoosecity;}, 0);
      }
      oBtni1.onclick=()=>{
        setTimeout(() => {that.showchoosecity = !that.showchoosecity;}, 0);
      }
      oBtn2.onclick=()=>{
        setTimeout(() => {that.mudigan = !that.mudigan;}, 0);
      }
       oBtni2.onclick=()=>{
        setTimeout(() => {that.mudigan = !that.mudigan;}, 0);
      }
      //     下面是点击document隐藏
      document.onclick=function(event){
        let e=event || window.event;//兼容ie和非ie的event
        let aim=e.srcElement || e.target; //兼容ie和非ie的事件源
        if (that.showchoosecity == true || that.mudigan == true) {
          if(aim!=oBtn1 && aim!=obj1 && aim!=oBtni1){
            that.showchoosecity = false;
          }
          if(aim!=oBtn2 && aim!=obj2 && aim!=oBtni2){
            that.mudigan = false;
          }
        }
        let temparr = aim.className.split(' ')
        for (var i = 0; i < temparr.length; i++) {
          if (temparr[i] !== 'bug') {
            for(var j = 0 ;j< that.checklistData.length;j++){
              that.checklistData[j].showlist = false;
            }
            that.$forceUpdate();
            break
          }
        }
      }
      if(that.$route.query.id1){
        that.checkPrice();
      }
    },
    watch:{
      'showchoosecity':function (val) {
        if(!val){
          this.iskey = false;
          this.keyport1 =[];
          if(this.showqiyungang !== this.qiyungang.cn_name){
            this.qiyungang = {};
            this.showqiyungang ='';
            this.tanguangid1 = this.city[0].id;
          }
        }
      },
      'mudigan':function (val) {
        if(!val){
          this.iskey2 = false;
          this.keyport2 =[];
          if(this.showmudegang !== this.mudegang.cn_name){
            this.mudegang = {};
            this.showmudegang ='';
            this.tanguangid2 = this.shipping_route[0].id;
          }
        }
      },
      'iskey':function () {
        if(!this.iskey){
          if(this.port1 === []){
            this.loading = true;
          }
        }
      },
    }
  }
</script>



