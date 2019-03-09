<style lang="scss">
.homecontentone {
  .box-card {
    // .el-tabs__item.is-active{
    //   border-top:4px solid #F08419;
    //   height: 41px;
    //   color: #4A3F91!important;
    // }
    // .el-tabs__nav-scroll{
    //   height: 40px;
    // }
    .el-tabs--border-card
      > .el-tabs__header
      .el-tabs__item:not(.is-disabled):hover {
      color: white;
    }
    .el-tabs--border-card > .el-tabs__header {
      border: none;
      background-color: #4a3f91;
      .el-tabs__item {
        border-top: 4px solid #4a3f91;
        color: white;
      }
      .is-active {
        border-top: 4px solid #f08419;
        color: #4a3f91 !important;
      }
    }
    .el-card__body {
      padding: 0;
      height: 100%;
    }
    .el-tabs--border-card {
      height: 100%;
    }
  }
  .departure-input {
    width: 60% !important;
  }
  .destination-input {
    width: 60% !important;
  }
  .departure-select {
    height: 30px;
    line-height: 30px;
    width: 115px;
    .el-input--suffix {
      .el-input__inner {
        height: 30px !important;
        line-height: 30px !important;
      }
      .el-input__suffix {
        top: 25%;
      }
    }
  }
  .containers-input {
    display: inline-block;
    .el-input__inner {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
<style scoped lang="scss">
.homecontentone {
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
  .content {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    .box-card {
      width: 50%;
      .el-card__body {
        padding: 0px;
        .el-tabs__content {
          min-height: 325.3px;
        }
      }
      .el-tab-pane:nth-of-type(1) {
        min-height: 285.3px;
      }
      .el-tab-pane:nth-of-type(2) {
        min-height: 295.3px;
      }
      .el-tab-pane:nth-of-type(3) {
        min-height: 295.3px;
      }
      .title {
        margin-left: 10%;
        font-size: 1rem;
        margin: 10px 0 10px 10%;
        color: #4b3f91;
      }
      .form {
        position: relative;
        .form-tab {
          display: flex;
          margin-bottom: 10px;
          .departure {
            width: 30%;
            align-self: center;
            text-align: center;
            .departure-input {
              width: 60% !important;
            }
          }
          .destination {
            width: 30%;
            align-self: center;
            text-align: center;
            .destination-input {
              width: 60% !important;
            }
          }
          /*这里是改div变成输入框形式*/
          .search {
            width: 60%;
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
        }
        .check-price {
          .check-price-btn {
            width: 60%;
            margin: 10px 0 20px 30%;
            background-color: #f08619;
            color: white;
            font-size: 1rem;
          }
          .check-price-btn:active {
            font-size: 1.1rem;
          }
        }
      }
      .trailer-form {
        .departure {
          font-size: 0.875rem;
          .departure-title {
            display: inline-block;
            width: 75px;
            float: left;
            margin: 10px 0 0 0px;
          }
          .departure-city {
            display: inline-block;
            width: 115px;
            margin-right: 10px;
            margin: 10px 0 0 0px;
          }
          .departure-port {
            display: inline-block;
            width: 115px;
            margin: 10px 0 0 10px;
          }
          .departure-select {
            height: 30px;
            line-height: 30px;
            width: 100%;
          }
        }
        .containers-num {
          font-size: 0.875rem;
          .containers-title {
            display: inline-block;
            width: 75px;
            float: left;
            margin: 10px 0 0 0px;
          }
          .containers-input {
            padding: 10px 0 0 0px;
            display: inline-block;
            width: 180px;
            margin: 0 10px 0 0;
            position: relative;
            .containers-span {
              // position: absolute;
              width: 100%;
              left: 50px;
              top: 16px;
              color:black;
            }
          }
        }
        .cabinet {
          font-size: 0.875rem;
          margin-top: 20px;
          .cabinet-title {
            display: inline-block;
            width: 75px;
            float: left;
            margin: 10px 0 0 0px;
          }
          .cabinet-select {
            padding: 10px 0 0 0px;
            display: inline-block;
            width: 115px;
            margin: 0 10px 0 0;
            position: relative;
          }
          .cabinet-choose {
            padding: 10px 0 0 0px;
            display: inline-block;
            width: 230px;
            margin: 0 10px 0 0;
            position: relative;
            text-align: center;
            p {
              display: inline-block;
              width: 115px;
              cursor: pointer;
            }
          }
        }
        .check-price {
          text-align: center;
          margin: 10px 0 0 0;
          .check-price-btn {
            width: 60%;
            background-color: #f08619;
            color: white;
            font-size: 1rem;
          }
          .check-price-btn:active {
            font-size: 1.1rem;
          }
        }
      }
      .customs-form {
        text-align: center;
        padding-top: 12%;
        .customs-votes {
          margin-top: 20px;
          .customs-title {
            display: inline-block;
            width: 75px;
          }
          .customs-input {
            display: inline-block;
            width: 60%;
          }
        }
        .form-tab {
          display: flex;
          margin: 10px 0;
          .departure {
            width: 30%;
            align-self: center;
            text-align: center;
            .departure-input {
              width: 60% !important;
            }
          }
          .destination {
            width: 25%;
            align-self: center;
            text-align: right;
            .destination-input {
              width: 60% !important;
            }
          }
          /*这里是改div变成输入框形式*/
          .search {
            width: 60%;
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
        }
        .customs-location {
          margin-top: 20px;
          .customs-title {
            display: inline-block;
            width: 75px;
          }
          .customs-select {
            display: inline-block;
            width: 60%;
          }
        }
        .customs-btn {
          margin-top: 20px;
          .check-price-btn {
            width: 60%;
            background-color: #f08619;
            color: white;
            font-size: 1rem;
            margin-left: 55px;
          }
          .check-price-btn:active {
            font-size: 1.1rem;
          }
        }
      }
      .information {
        padding: 20px;
        .informations {
          font-size: 1rem;
          line-height: 40px;
          .information-title {
            display: inline-block;
            width: 30%;
            font-size: 1.3rem;
            font-weight: 600;
          }
          .information-tabs {
            width: 70%;
            min-width: 200px;
            display: inline-block;
            position: relative;
            .information-tab {
              width: 30%;
              cursor: pointer;
              text-align: center;
              display: inline-block;
              border: 1px solid #ddd;
              margin-right: 10px;
              border-radius: 6px;
            }
            .information-tab:last-of-type {
              margin-right: 0px;
            }
            .information-tab-active {
              background-color: #4b3f91;
              color: white;
            }
          }
        }
        .information-content {
          overflow: hidden;
          margin-top: 20px;
          .content-img {
            float: left;
            width: 36%;
            cursor: pointer;
            img {
              width: 100%;
            }
          }
          .content-text {
            float: left;
            width: 64%;
            height: 100%;
            padding-left: 15px;
            .text-title {
              cursor: pointer;
              font-size: 1rem;
              height: 30px;
              line-height: 30px;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .text-date {
              font-size: 1rem;
              height: 30px;
              line-height: 30px;
            }
            .text-content {
              font-size: 0.875rem;
              color: #bbb6b6;
              padding: 3px 0;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .more {
              color: #f08619;
              font-size: 1rem;
              cursor: pointer;
            }
          }
        }
        .gundongouter {
          position: relative;
          height: 120px;
          overflow: hidden;
          margin: 10px 0 0 0;
          .gundong {
            height: 120px;
            .swiper-wrapper {
              height: 40px;
              line-height: 40px;
              p:nth-of-type(1) {
                display: inline-block;
                cursor: pointer;
                width: 317px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              p:nth-of-type(2) {
                float: right;
              }
            }
          }
        }
      }
    }
    .box-card:first-of-type {
      margin-right: 5px;
    }
    .box-card:last-of-type {
      margin-left: 5px;
    }
    .showform {
      position: absolute;
      background: white;
      z-index: 11;
      top: 157px;
      left: 15.5%;
      border: 1px solid #ddd;
      width: 600px;
      padding: 0 10px 20px 10px;
      .swiper-container {
        line-height: 40px;
        height: 40px;
        border-bottom: 1px solid #ddd;
        .swiper-slide {
          text-align: center;
          cursor: pointer;
          /* width: 62.8333px;
           min-width: 70px;*/
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
          padding: 20px 0 0 0;
        }
      }
    }
    #searchBox1 {
      top: 157px;
      max-height: 227px;
      overflow-y: scroll;
    }
    #searchBox2 {
      top: 209px;
      max-height: 227px;
      overflow-y: scroll;
    }
    #searchBox3 {
      left: 13%;
      top: 192px;
      max-height: 227px;
      overflow-y: scroll;
    }
    #searchBox4 {
      left: 7.6%;
      top: 110px;
      max-height: 227px;
      overflow-y: scroll;
    }
    #search4 {
      padding: 0 0 0 20px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #ddd;
      border-radius: 5px;
      cursor: pointer;
    }
    #showaddress {
      position: absolute;
      background: white;
      z-index: 11;
      top: 203px;
      left: 92px;
      border: 1px solid #ddd;
      width: 549px;
      padding: 0 10px 20px 0px;
      div:nth-of-type(1) {
        margin-top: -2px;
        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 25%;
          display: inline-block;
          line-height: 40px;
          padding: 0 10px;
          border: 1px solid #ddd;
          cursor: pointer;
          border-bottom: 1px solid #4a3f91;
          text-align: center;
          overflow: hidden;
        }
        .divtab_active {
          border: 2px solid #4a3f91;
          border-bottom: none;
          background: white;
        }
        hr {
          margin-top: -6px;
          border: none;
          border-top: 2px solid #4a3f91;
          margin-right: -10px;
        }
      }
      .showitem {
        overflow-y: scroll;
        max-height: 300px;
        min-height: 200px;
        padding: 20px 0 0 0;
        div {
          display: inline-block;
          padding: 0 20px;
          width: 33.33%;
          line-height: 30px;
          cursor: pointer;
        }
      }
      /*.showitem::-webkit-scrollbar {width: 20px}*/
    }
    #tuoguiaddress {
      display: inline-block;
      position: relative;
      div {
        cursor: pointer;
        border: 1px solid #ddd;
        padding: 0px 40px 0 20px;
        line-height: 30px;
        min-width: 150px;
        border-radius: 5px;
      }
      i {
        position: absolute;
        top: 10px;
        right: 16px;
      }
    }
  }
}
</style>
<template>
  <div class="layout homecontentone">
    <!-- <div class="pageouter"></div> -->
    <div class=" layout content">
      <el-card v-loading="loading" class="box-card">
        <el-tabs type="border-card" v-model="type">
          <el-tab-pane name="订舱" label="订舱">
            <h2 class="title">订舱查询</h2>
            <div class="form">
              <div class="form-tab">
                <!--控制弹出-->
                <div class="departure">起运港：</div>
                <input
                  id="search1"
                  class="search"
                  v-model="showqiyungang"
                  placeholder="请选择起运港"
                  @keyup="keyfunc(1)"
                >
                <i
                  id="searchi1"
                  style="    margin-left: -25px;padding-top: 14px;"
                  :class="{'el-icon-arrow-down':!showchoosecity,'el-icon-arrow-up':showchoosecity}"
                ></i>
              </div>
              <div class="form-tab">
                <div class="destination">目的港：</div>
                <input
                  id="search2"
                  class="search"
                  v-model="showmudegang"
                  placeholder="请选择目的港"
                  @keyup="keyfunc(2)"
                >
                <i
                  id="searchi2"
                  style="    margin-left: -25px;padding-top: 14px;"
                  :class="{'el-icon-arrow-down':!mudigan,'el-icon-arrow-up':mudigan}"
                ></i>
              </div>
              <div class="check-price">
                <el-button class="check-price-btn">
                  <nuxt-link
                    style="color: white;"
                    :to="{path:'/cabinOffer',query:{
                      id1:tanguangid1,
                      id2:tanguangid2,
                      id11:qiyungang.id,
                      id12:mudegang.id,
                      name1:qiyungang.cn_name,
                      name2:mudegang.cn_name,}}"
                  >查询价格</nuxt-link>
                </el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="拖车" label="拖车">
            <div class="trailer-form">
              <div class="departure">
                <!--<div class="departure-title">起运港：</div>-->
                <div class="form-tab">
                  <!--控制弹出-->
                  <div class="departure-title">起运港：</div>
                  <input
                    id="search4"
                    class="search"
                    v-model="showtuoche"
                    placeholder="请选择起运港"
                    @keyup="keyfunc(4)"
                  >
                  <i
                    id="searchi4"
                    style="    margin-left: -25px;padding-top: 14px;"
                    :class="{'el-icon-arrow-down':!xuanzetuoche,'el-icon-arrow-up':xuanzetuoche}"
                  ></i>
                </div>
              </div>
              <div class="containers-num">
                <div class="containers-title">货柜数量：</div>
                <div style="display: inline-block;width: 75%">
                  <div class="containers-input">
                     <span class="containers-span">20GP:
                      <!-- <i class="el-icon-arrow-down"></i> -->
                    </span>
                     <el-input-number type="number" v-model="containers_20gp" @change="handleChange" size="mini" :min="0" :max="99999999999" label="描述文字"></el-input-number>
                   
                  </div>
                  <div class="containers-input">
                    <!-- <el-input v-model="containers_40gp"></el-input> -->
                    <span class="containers-span">40GP:
                      <!-- <i class="el-icon-arrow-down"></i> -->
                    </span>
                    <el-input-number type="number" v-model="containers_40gp" @change="handleChange" size="mini" :min="0" :max="99999999999" label="描述文字"></el-input-number>
                    
                  </div>
                  <!-- <div class="containers-input ">
                     <el-input v-model="containers_20hq" ></el-input>
                     <span class="containers-span">*20HG</span>
                  </div>-->
                  <div class="containers-input">
                     <span class="containers-span">40HQ:
                      <!-- <i class="el-icon-arrow-down"></i> -->
                    </span>
                    <!-- <el-input v-model="containers_40hq"></el-input> -->
                       <el-input-number type="number" v-model="containers_40hq" @change="handleChange" size="mini" :min="0" :max="99999999999" label="描述文字"></el-input-number>
                   
                  </div>
                </div>
              </div>
              <div class="cabinet">
                <div class="cabinet-title">拖柜地点：</div>
                <div id="tuoguiaddress">
                  <div @click="opentuogui" v-show="showtuoguididian!==''">{{showtuoguididian}}</div>
                  <div @click="opentuogui" v-show="showtuoguididian===''">请选择</div>
                  <i
                    @click="opentuogui"
                    :class="{'el-icon-arrow-down':!isseletetuogui,'el-icon-arrow-up':isseletetuogui}"
                  ></i>
                </div>
              </div>
              <div class="check-price">
                <el-button class="check-price-btn">
                  <nuxt-link
                    style="color: white;"
                    :to="{path:'/trailer',query:{
                      radio:radio,
                      address_sheng:address_sheng,
                      address_sheng_id:address_sheng_id,
                      address_city:address_city,
                      address_city_id:address_city_id,
                      address_area:address_area,
                      address_area_id:address_area_id,
                      address_zhen:address_zhen,
                      address_zhen_id:address_zhen_id,
                      num1:containers_20gp,
                      num2:containers_40gp,
                      num3:containers_20hq,
                      num4:containers_40hq,
                      id:tanguangid4,
                      id11:tuocheaddress.id,
                      name:tuocheaddress.cn_name,
                      item:tuocheaddress,
                      showtuoguididian:showtuoguididian,
                      showtuoguididian_id:showtuoguididian_id,
                      showactive:showactive,}}"
                  >查询价格</nuxt-link>
                </el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="报关" label="报关">
            <div class="customs-form">
              <div class="form-tab">
                <div class="destination">选择城市：</div>
                <input
                  id="search3"
                  class="search"
                  v-model="showbaoguan"
                  placeholder="请选择城市"
                  @keyup="keyfunc(3)"
                >
                <i
                  id="searchi3"
                  style="margin-left: -25px;padding-top: 14px;"
                  :class="{'el-icon-arrow-down':!xuanzebaoguan,'el-icon-arrow-up':xuanzebaoguan}"
                ></i>
              </div>
              <div class="customs-btn">
                <el-button class="check-price-btn" @click="gobaoguan">
                  <nuxt-link
                    style="color: white;"
                    :to="{path:'/customs',query:{
                     id:tanguangid3,
                     name:baoguanaddress.cn_name,
                     id1:baoguanaddress.id,}}"
                  >查询价格</nuxt-link>
                </el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
      <el-card class="box-card">
        <div class="information">
          <div class="informations">
            <div class="information-title">资讯中心</div>
            <div class="information-tabs">
              <div
                class="information-tab tab1"
                v-for="(item,index,key) in domlist"
                :key="key"
                @click="showtabid = item.id,showindex = index"
                :class="{'information-tab-active':showtabid === item.id}"
              >{{item.name}}</div>
            </div>
          </div>
          <div
            class="information-content"
            v-for="(item,index,key) in listData"
            :key="key"
            v-if="item!==null&&item!==undefined"
            v-show="showtabid===index"
          >
            <nuxt-link
              :to="{path:'information',query:{tabactive:showindex,detailid:item[0].id,detailindex:0}}"
            >
              <div v-if="item!==null&&item!==undefined" class="content-img">
                <img :src="item[0].img_url">
              </div>
            </nuxt-link>

            <div class="content-text" v-if="item!==null&&item!==undefined">
              <nuxt-link
                :to="{path:'information',query:{tabactive:showindex,detailid:item[0].id,detailindex:0}}"
              >
                <p class="text-title">{{item[0].title}}</p>
              </nuxt-link>

              <p
                class="text-date"
              >{{comment.formate('MM/dd',new Date(Number(item[0].create_time)*1000))}}</p>
              <p class="text-content">{{item[0].shorttitle}}</p>
              <nuxt-link :to="{path:'information',query:{tabactive:showindex}}">
                <p class="more">MORE</p>
              </nuxt-link>
            </div>
          </div>
          <div
            class="gundongouter"
            v-for="(item,index,key) in listData"
            :key="key"
            v-if="item!==null&&item!==undefined"
            v-show="showtabid===index"
          >
            <div class="gundong" v-if="item!==null&&item!==undefined">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item1,index) in item" :key="index">
                  <nuxt-link
                    :to="{path:'information',query:{tabactive:showindex,detailid:item1.id,detailindex:index}}"
                  >
                    <p>{{item1.title}}</p>
                    <p>{{comment.formate('yyyy/MM/dd',new Date(Number(item1.update_time)*1000))}}</p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </el-card>
      <!--弹出内容-->
      <!--第一个-->
      <transition name="el-fade-in">
        <div id="searchBox1" class="showform" v-show="showchoosecity">
          <div id="searchBox_title1" class="swiper-container swiper-container0" v-show="!iskey">
            <div class="swiper-wrapper swiper-wrapper0 wrap">
              <div
                :class="{'swiper-slide-active1':(item.id === tanguangid1)} "
                class="swiper-slide swiper-slide0"
                :id="item.id"
                :key="key"
                v-for="(item,index,key) in city"
                @click="choosecity(item.id,1)"
              >{{item.cn_name}}</div>
            </div>
          </div>
          <div class="port" v-show="!iskey">
            <p v-for="(item,index,key) in port1" :key="key" @click="choosecity2(item,1)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
          <div class="port" v-show="iskey">
            <p v-for="(item,index,key) in keyport1" :key="key" @click="choosecity2(item,1)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
        </div>
      </transition>
      <!--第二个-->
      <transition name="el-fade-in">
        <div id="searchBox2" class="showform" v-show="mudigan">
          <div id="searchBox_title2" class="swiper-container swiper-container1" v-show="!iskey2">
            <div class="swiper-wrapper swiper-wrapper1">
              <div
                :class="{'swiper-slide-active2':(item.id === tanguangid2)}"
                class="swiper-slide"
                :id="item.id"
                :key="key"
                v-for="(item,index,key) in shipping_route"
                @click="mudegangxz(index)"
              >{{item.cn_name}}</div>
            </div>
          </div>
          <div class="port" v-show="!iskey2">
            <p v-for="(item,index,key) in mudegangshuju" :key="key" @click="choosemudegang2(item)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
          <div class="port" v-show="iskey2">
            <p v-for="(item,index,key) in keyport2" :key="key" @click="choosemudegang2(item)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
        </div>
      </transition>
      <!--第三个-->
      <transition name="el-fade-in">
        <div id="searchBox3" class="showform" v-show="xuanzebaoguan">
          <div id="searchBox_title3" class="swiper-container swiper-container3" v-show="!iskey3">
            <div class="swiper-wrapper swiper-wrapper0 wrap">
              <div
                :class="{'swiper-slide-active1':(item.id === tanguangid3)} "
                class="swiper-slide swiper-slide0"
                :id="item.id"
                :key="key"
                v-for="(item,index,key) in city"
                @click="choosecity(item.id,3)"
              >{{item.cn_name}}</div>
            </div>
          </div>
          <div class="port" v-show="!iskey3">
            <p v-for="(item,index,key) in port3" :key="key" @click="choosecity2(item,3)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
          <div class="port" v-show="iskey3">
            <p v-for="(item,index,key) in keyport3" :key="key" @click="choosecity2(item,3)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
        </div>
      </transition>
      <!--第四个-->
      <transition name="el-fade-in">
        <div id="searchBox4" class="showform" v-show="xuanzetuoche">
          <div id="searchBox_title4" class="swiper-container swiper-container3" v-show="!iskey4">
            <div class="swiper-wrapper swiper-wrapper0 wrap">
              <div
                :class="{'swiper-slide-active1':(item.id === tanguangid4)} "
                class="swiper-slide swiper-slide0"
                :id="item.id"
                :key="key"
                v-for="(item,index,key) in city"
                @click="choosecity(item.id,4)"
              >{{item.cn_name}}</div>
            </div>
          </div>
          <div class="port" v-show="!iskey4">
            <p v-for="(item,index,key) in port4" :key="key" @click="choosecity2(item,4)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
          <div class="port" v-show="iskey4">
            <p v-for="(item,index,key) in keyport4" :key="key" @click="choosecity2(item,4)">
              <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
              <br>
              <span>({{item.en_name}}/{{item.countryen_name}})</span>
            </p>
          </div>
        </div>
      </transition>
      <div id="showaddress" v-show="isseletetuogui">
        <div>
          <div
            :class="{'divtab_active':showactive===1}"
            @click="qietab(1)"
            v-show="address_sheng!==''&&showactive>=1"
          >{{address_sheng}}</div>
          <div
            :class="{'divtab_active':showactive===1}"
            @click="qietab(1)"
            v-show="address_sheng===''&&showactive>=1"
          >请选择</div>
          <div
            :class="{'divtab_active':showactive===2}"
            @click="qietab(2)"
            v-show="address_city!==''"
          >{{address_city}}</div>
          <div
            :class="{'divtab_active':showactive===2}"
            @click="qietab(2)"
            v-show="address_city===''&&showactive>=2"
          >请选择</div>
          <div
            :class="{'divtab_active':showactive===3}"
            @click="qietab(3)"
            v-show="address_area!==''"
          >{{address_area}}</div>
          <div
            :class="{'divtab_active':showactive===3}"
            @click="qietab(3)"
            v-show="address_area===''&&showactive>=3"
          >请选择</div>
          <div
            :class="{'divtab_active':showactive===4}"
            @click="qietab(4)"
            v-show="address_zhen!==''"
          >{{address_zhen}}</div>
          <div
            :class="{'divtab_active':showactive===4}"
            @click="qietab(4)"
            v-show="address_zhen===''&&showactive>=4"
          >请选择</div>
          <hr>
        </div>
        <div
          class="showitem"
          v-loading="(showactive===1&&address_sheng!==''&&address_city_obj ===null)||(showactive===2&&address_city!==''&&address_city_obj===null)||(showactive===3&&address_area!==''&&address_area_obj===null)"
        >
          <div
            @click="chooseAddress(1,item)"
            v-show="showactive===1"
            v-for="item in address_sheng_obj"
            :key="item.id"
          >{{item.name}}</div>
          <div
            @click="chooseAddress(2,item)"
            v-show="showactive===2"
            v-for="item in address_city_obj"
            :key="item.id"
          >{{item.name}}</div>
          <div
            @click="chooseAddress(3,item)"
            v-show="showactive===3"
            v-for="item in address_area_obj"
            :key="item.id"
          >{{item.name}}</div>
          <div
            @click="chooseAddress(4,item)"
            v-show="showactive===4"
            v-for="item in address_zhen_obj"
            :key="item.id"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
// import Swiper from "swiper/dist/js/swiper.min";
import axios from "axios";
import NuxtLink from "../../.nuxt/components/nuxt-link";
export default {
  components: { NuxtLink },
  name: "homecontentone",
  props: [
    "cms_list",
    "countryData",
    "initData",
    "shipping_route",
    "city",
    "domlist",
    "listData"
  ],
  data() {
    return {
      showactive: 1,
      isseletetuogui: false,
      showtuoguididian: "",
      showtuoguididian_id: "",
      mudegangshuju: [],
      showqiyungang: "",
      showbaoguan: "",
      showtuoche: "",
      showmudegang: "",
      qiyungang: {},
      baoguanaddress: {},
      tuocheaddress: {},
      mudegang: {},
      region: "",
      input1: "",
      input2: "",
      options: [],
      value: "",
      showchoosecity: false,
      mudigan: false,
      xuanzebaoguan: false,
      xuanzetuoche: false,
      type: "订舱",
      tanguangid1: null,
      tanguangid2: null,
      tanguangid3: null,
      tanguangid4: null,
      port: [],
      port1: [],
      iskey: false,
      keyport1: [],
      iskey2: false,
      keyport2: [],
      iskey3: false,
      iskey4: false,
      keyport3: [],
      keyport4: [],
      port2: [],
      port3: [],
      port4: [],
      containers_20gp: 0,
      containers_40gp: 0,
      containers_20hq: 0,
      containers_40hq: 0,
      cabinet_province: "",
      cabinet_city: "",
      cabinet_area: "",
      cabinet_town: "",
      customs_votes: 1,
      customs_location: "",
      //------------------
      radio: "1",
      address_sheng: "", //拖柜省
      address_sheng_obj: null, //拖柜省
      address_sheng_id: null,
      address_city: "", //拖柜市
      address_city_obj: null, //拖柜市
      address_city_id: null,
      address_area: "", //拖柜区域
      address_area_obj: null, //拖柜区域
      address_area_id: null,
      address_zhen: "", //拖柜乡镇
      address_zhen_obj: null, //拖柜乡镇
      address_zhen_id: null,
      //--文章数据
      showtabid: null,
      showindex: 0,
      loading: true,
      loading1: true
    };
  },
  methods: {
     handleChange(value) {
        
      },
    keyfunc(index) {
      let that = this;
      if (index === 1) {
        that.showchoosecity = true;
        if (that.showqiyungang === "") {
          that.iskey = false;
          that.tanguangid1 = that.city[0].id;
        } else {
          let url = that.$store.state.headerUrl + "freight/port";
          let tempalert = that.$alert;
          let params = {
            keyword: that.showqiyungang
          };
          that.comment
            .axiosPost(url, that.$axios, that.$store, params, tempalert)
            .then(function(resp) {
              if (resp.data.code === 0) {
                for (var i = 0; i < resp.data.data.length; i++) {
                  resp.data.data[i].countrycn_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].cn_name;
                  resp.data.data[i].countryen_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].en_name;
                }
                that.keyport1 = resp.data.data;
                that.iskey = true;
              } else {
                that.keyport1 = [];
                that.iskey = true;
              }
            })
            .catch(function(error) {
              tempalert("搜索失败", {
                confirmButtonText: "确定",
                callback: action => {}
              });
            });
        }
      }
      if (index === 2) {
        that.mudigan = true;
        if (that.showmudegang === "") {
          that.iskey2 = false;
          that.tanguangid2 = that.shipping_route[0].id;
        } else {
          let url = that.$store.state.headerUrl + "freight/port";
          let tempalert = that.$alert;
          let params = {
            keyword: that.showmudegang
          };
          that.comment
            .axiosPost(url, that.$axios, that.$store, params, tempalert)
            .then(function(resp) {
              if (resp.data.code === 0) {
                for (var i = 0; i < resp.data.data.length; i++) {
                  resp.data.data[i].countrycn_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].cn_name;
                  resp.data.data[i].countryen_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].en_name;
                }
                that.keyport2 = resp.data.data;
                that.iskey2 = true;
              } else {
                that.keyport2 = [];
                that.iskey2 = true;
              }
            })
            .catch(function(error) {
              tempalert("搜索失败", {
                confirmButtonText: "确定",
                callback: action => {}
              });
            });
        }
      }
      if (index === 3) {
        that.xuanzebaoguan = true;
        if (that.showbaoguan === "") {
          that.iskey3 = false;
          that.tanguangid3 = that.city[0].id;
        } else {
          let url = that.$store.state.headerUrl + "freight/port";
          let tempalert = that.$alert;
          let params = {
            keyword: that.showbaoguan
          };
          that.comment
            .axiosPost(url, that.$axios, that.$store, params, tempalert)
            .then(function(resp) {
              if (resp.data.code === 0) {
                for (var i = 0; i < resp.data.data.length; i++) {
                  resp.data.data[i].countrycn_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].cn_name;
                  resp.data.data[i].countryen_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].en_name;
                }
                that.keyport3 = resp.data.data;
                that.iskey3 = true;
              } else {
                that.keyport3 = [];
                that.iskey3 = true;
              }
            })
            .catch(function(error) {
              tempalert("搜索失败", {
                confirmButtonText: "确定",
                callback: action => {}
              });
            });
        }
      }
      if (index === 4) {
        that.xuanzetuoche = true;
        if (that.showtuoche === "") {
          that.iskey4 = false;
          that.tanguangid4 = that.city[0].id;
        } else {
          let url = that.$store.state.headerUrl + "freight/port";
          let tempalert = that.$alert;
          let params = {
            keyword: that.showtuoche
          };
          that.comment
            .axiosPost(url, that.$axios, that.$store, params, tempalert)
            .then(function(resp) {
              if (resp.data.code === 0) {
                for (var i = 0; i < resp.data.data.length; i++) {
                  resp.data.data[i].countrycn_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].cn_name;
                  resp.data.data[i].countryen_name =
                    that.countryData[
                      Number(resp.data.data[i].country_id)
                    ].en_name;
                }
                that.keyport4 = resp.data.data;
                that.iskey4 = true;
              } else {
                that.keyport4 = [];
                that.iskey4 = true;
              }
            })
            .catch(function(error) {
              tempalert("搜索失败", {
                confirmButtonText: "确定",
                callback: action => {}
              });
            });
        }
      }
    },
    mudegangxz(index) {
      this.tanguangid2 = this.shipping_route[index].id;
      for (
        var i = 0;
        i < this.shipping_route[index].recommend_port.length;
        i++
      ) {
        this.shipping_route[index].recommend_port[
          i
        ].countrycn_name = this.countryData[
          Number(this.shipping_route[index].recommend_port[i].country_id)
        ].cn_name;
        this.shipping_route[index].recommend_port[
          i
        ].countryen_name = this.countryData[
          Number(this.shipping_route[index].recommend_port[i].country_id)
        ].en_name;
      }
      this.mudegangshuju = this.shipping_route[index].recommend_port;
    },
    choosemudegang2(item) {
      this.mudegang = item;
      this.showmudegang = item.cn_name;
    },
    setswiper() {
      let swiper0 = new Swiper(".swiper-container0", {
        slidesPerView: 6,
        spaceBetween: 30,
        width: 550,
        freeMode: true,
        freeModeMinimumVelocity: 1
      });
      let swiper1 = new Swiper(".swiper-container1", {
        slidesPerView: 6,
        spaceBetween: 30,
        width: 550,
        freeMode: true,
        freeModeMinimumVelocity: 1
      });
      let swiper3 = new Swiper(".swiper-container3", {
        slidesPerView: 6,
        spaceBetween: 30,
        width: 550,
        freeMode: true,
        freeModeMinimumVelocity: 1
      });
      let swiper2 = new Swiper(".gundong", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      });
    },
    //获取港口数据
    getprot(id, index) {
      let that = this;
      let url = that.$store.state.headerUrl + "freight/port_by_pid/" + id;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          for (var i = 0; i < resp.data.data.length; i++) {
            resp.data.data[i].countrycn_name =
              that.countryData[Number(resp.data.data[i].country_id)].cn_name;
            resp.data.data[i].countryen_name =
              that.countryData[Number(resp.data.data[i].country_id)].en_name;
          }
          if (index === 1) {
            that.port1 = resp.data.data;
          } else if (index === 2) {
            that.port2 = resp.data.data;
          } else if (index === 3) {
            that.port3 = resp.data.data;
          } else if (index === 4) {
            that.port4 = resp.data.data;
          } else if (index === 5) {
            that.port1 = resp.data.data;
            that.port3 = resp.data.data;
            that.port4 = resp.data.data;
          }
          if (id === that.city[0].id) {
            that.loading = false;
          }
        });
    },
    //选择城市
    choosecity(id, index) {
      if (index === 1) {
        this.tanguangid1 = id;
        this.getprot(id, 1);
      } else if (index === 3) {
        this.tanguangid3 = id;
        this.getprot(id, 3);
      } else if (index === 4) {
        this.tanguangid4 = id;
        this.getprot(id, 4);
      }
    },
    choosecity2(item, index) {
      if (index === 1) {
        let tempitem = item;
        this.qiyungang = tempitem;
        this.showqiyungang = tempitem.cn_name;
      } else if (index === 3) {
        this.baoguanaddress = item;
        this.showbaoguan = item.cn_name;
      } else if (index === 4) {
        this.tuocheaddress = item;
        this.showtuoche = item.cn_name;
      }
    },
    //查询省市区镇 id,index[0：省，1：市，2：区，3：镇]
    getaddress(id, index) {
      let that = this;
      let url = that.$store.state.headerUrl + "district/" + id;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, this.$axios, this.$store, {}, tempalert, that)
        .then(resp => {
          if (resp.data.code === 0) {
            if (index === 0) {
              that.address_sheng_obj = resp.data.data;
            } else if (index === 1) {
              if (resp.data.data.length === 0) {
                that.showtuoguididian_id = id;
                that.showtuoguididian =
                  that.address_sheng +
                  that.address_city +
                  that.address_area +
                  that.address_zhen;
                that.isseletetuogui = false;
              } else {
                that.address_city_obj = resp.data.data;
                that.showactive = 2;
              }
            } else if (index === 2) {
              if (resp.data.data.length === 0) {
                that.showtuoguididian_id = id;
                that.showtuoguididian =
                  that.address_sheng +
                  that.address_city +
                  that.address_area +
                  that.address_zhen;
                that.isseletetuogui = false;
              } else {
                that.address_area_obj = resp.data.data;
                that.showactive = 3;
              }
            } else if (index === 3) {
              if (resp.data.data.length === 0) {
                that.showtuoguididian_id = id;
                that.showtuoguididian =
                  that.address_sheng +
                  that.address_city +
                  that.address_area +
                  that.address_zhen;
                that.isseletetuogui = false;
              } else {
                that.address_zhen_obj = resp.data.data;
                that.showactive = 4;
              }
            }
          }
        })
        .catch(err => {
          tempalert(err, {
            confirmButtonText: "确定",
            callback: action => {}
          });
        });
    },
    //跳转到订舱查询页面
    godingcang() {
      let that = this;
      let params = {
        id1: that.tanguangid1,
        id2: that.tanguangid2,
        id11: that.qiyungang.id,
        id12: that.mudegang.id,
        name1: that.qiyungang.cn_name,
        name2: that.mudegang.cn_name
      };
      that.$router.push({ path: "/cabinOffer", query: params });
    },
    //跳转到拖车查询页面
    gotuoche() {
      let that = this;
      let params = {
        radio: that.radio,
        address_sheng: that.address_sheng,
        address_sheng_id: that.address_sheng_id,
        address_city: that.address_city,
        address_city_id: that.address_city_id,
        address_area: that.address_area,
        address_area_id: that.address_area_id,
        address_zhen: that.address_zhen,
        address_zhen_id: that.address_zhen_id,
        num1: that.containers_20gp,
        num2: that.containers_40gp,
        num3: that.containers_20hq,
        num4: that.containers_40hq,
        id: that.tanguangid4,
        id11: that.tuocheaddress.id,
        name: that.tuocheaddress.cn_name,
        item: that.tuocheaddress,
        showtuoguididian: that.showtuoguididian,
        showtuoguididian_id: that.showtuoguididian_id,
        showactive: that.showactive
      };
      that.$router.push({ path: "/trailer", query: params });
    },
    //跳转到报关查询页面
    gobaoguan() {
      let that = this;
      let params = {
        id: that.tanguangid3,
        name: that.baoguanaddress.cn_name,
        id1: that.baoguanaddress.id
      };
      that.$router.push({ path: "/customs", query: params });
    },
    godetails(id, index) {
      if (index === 1) {
        this.$router.push({
          path: "information",
          query: { tabid: this.showtabid, cid: id }
        });
      } else {
        this.$router.push({
          path: "information",
          query: { tabid: this.showtabid }
        });
      }
    },
    //切换tab
    qietab(index) {
      this.showactive = index;
    },
    //选中选项
    chooseAddress(index, item) {
      if (index === 1) {
        this.address_sheng = item.name;
        this.address_sheng_id = item.id;
        this.address_city_obj = null;
        this.address_area_obj = null;
        this.address_zhen_obj = null;
        this.address_city = "";
        this.address_area = "";
        this.address_zhen = "";
        this.address_city_id = null;
        this.address_area_id = null;
        this.address_zhen_id = null;
        this.getaddress(this.address_sheng_id, 1);
      } else if (index === 2) {
        this.address_city = item.name;
        this.address_city_id = item.id;
        this.address_area_obj = null;
        this.address_zhen_obj = null;
        this.address_area = "";
        this.address_zhen = "";
        this.address_area_id = null;
        this.address_zhen_id = null;
        this.getaddress(this.address_city_id, 2);
      } else if (index === 3) {
        this.address_area = item.name;
        this.address_area_id = item.id;
        this.address_zhen_obj = null;
        this.address_zhen = "";
        this.address_zhen_id = null;
        this.getaddress(this.address_area_id, 3);
      } else if (index === 4) {
        this.address_zhen = item.name;
        this.address_zhen_id = item.id;
        this.showtuoguididian_id = item.id;
        this.showtuoguididian =
          this.address_sheng +
          this.address_city +
          this.address_area +
          this.address_zhen;
        this.isseletetuogui = false;
      }
    },
    //打开选择拖柜地点选择框
    opentuogui() {
      this.isseletetuogui = !this.isseletetuogui;
    }
  },
  mounted() {
    let that = this;
    that.showtabid = that.domlist[0].id;
    that.tanguangid1 = that.city[0].id;
    that.tanguangid4 = that.city[0].id;
    that.tanguangid3 = that.city[0].id;
    that.tanguangid2 = that.shipping_route[0].id;
    that.getaddress(0, 0);
    //国家数据

    that.getprot(that.city[0].id, 5);
    that.mudegangxz(0);
    that.$store.commit("SET_TITLE", that.initData.freight.freight_name);
    // setTimeout(() => that.setswiper(), 1000);

    //      });
    let obj_title1 = document.getElementById("searchBox_title1");
    let obj_title2 = document.getElementById("searchBox_title2");
    let obj_title3 = document.getElementById("searchBox_title3");
    let obj_title4 = document.getElementById("searchBox_title4");
    var obj_address = document.getElementById("showaddress");
    var obj_tuoguiaddress = document.getElementById("tuoguiaddress");
    let obj1 = document.getElementById("searchBox1");
    let oBtn1 = document.getElementById("search1");
    let oBtn1i = document.getElementById("searchi1");
    let obj2 = document.getElementById("searchBox2");
    let oBtn2 = document.getElementById("search2");
    let oBtn2i = document.getElementById("searchi2");
    let obj3 = document.getElementById("searchBox3");
    let oBtn3 = document.getElementById("search3");
    let oBtn3i = document.getElementById("searchi3");
    let obj4 = document.getElementById("searchBox4");
    let oBtn4 = document.getElementById("search4");
    let oBtn4i = document.getElementById("searchi4");
    //     这里是先阻止冒泡
    obj_title1.onclick = function(event) {
      let e = event || window.event;
      e.cancelBubble = true;
    };
    obj_title2.onclick = function(event) {
      let e = event || window.event;
      e.cancelBubble = true;
    };
    obj_title3.onclick = function(event) {
      let e = event || window.event;
      e.cancelBubble = true;
    };
    obj_title4.onclick = function(event) {
      let e = event || window.event;
      e.cancelBubble = true;
    };
    obj_address.onclick = function(e) {
      var e = e || window.event;
      e.cancelBubble = true;
    };
    obj_tuoguiaddress.onclick = function(e) {
      var e = e || window.event;
      e.cancelBubble = true;
    };
    oBtn1.onclick = () => {
      //为了延迟赋值
      setTimeout(() => {
        that.showchoosecity = !that.showchoosecity;
      }, 100);
    };
    oBtn1i.onclick = () => {
      //为了延迟赋值
      setTimeout(() => {
        that.showchoosecity = !that.showchoosecity;
      }, 100);
    };

    oBtn2.onclick = () => {
      setTimeout(() => {
        that.mudigan = !that.mudigan;
      }, 0);
    };
    oBtn2i.onclick = () => {
      setTimeout(() => {
        that.mudigan = !that.mudigan;
      }, 0);
    };
    oBtn3.onclick = () => {
      setTimeout(() => {
        that.xuanzebaoguan = !that.xuanzebaoguan;
      }, 0);
    };
    oBtn3i.onclick = () => {
      setTimeout(() => {
        that.xuanzebaoguan = !that.xuanzebaoguan;
      }, 0);
    };
    oBtn4.onclick = () => {
      setTimeout(() => {
        that.xuanzetuoche = !that.xuanzetuoche;
      }, 0);
    };
    oBtn4i.onclick = () => {
      setTimeout(() => {
        that.xuanzetuoche = !that.xuanzetuoche;
      }, 0);
    };
    // 下面是点击document隐藏
    document.onclick = function(event) {
      let e = event || window.event; //兼容ie和非ie的event
      let aim = e.srcElement || e.target; //兼容ie和非ie的事件源
      if (
        that.showchoosecity == true ||
        that.mudigan == true ||
        that.xuanzebaoguan == true ||
        that.xuanzetuoche === true ||
        that.isseletetuogui === true
      ) {
        if (aim != oBtn1 && aim != obj1 && aim != oBtn1i) {
          that.showchoosecity = false;
        }
        if (aim != oBtn2 && aim != obj2 && aim != oBtn2i) {
          that.mudigan = false;
        }
        if (aim != oBtn3 && aim != obj3 && aim != oBtn3i) {
          that.xuanzebaoguan = false;
        }
        if (aim != oBtn4 && aim != obj4 && aim != oBtn4i) {
          that.xuanzetuoche = false;
        }
        if (aim != obj_address && aim != obj_tuoguiaddress) {
          that.isseletetuogui = false;
        }
      }
    };
    //      that.takeData();
  },
  watch: {
    showchoosecity: function(val) {
      if (!val) {
        this.iskey = false;
        this.keyport1 = [];
        if (this.showqiyungang !== this.qiyungang.cn_name) {
          this.qiyungang = {};
          this.showqiyungang = "";
          this.tanguangid1 = this.city[0].id;
        }
      }
    },
    mudigan: function(val) {
      if (!val) {
        this.iskey2 = false;
        this.keyport2 = [];
        if (this.showmudegang !== this.mudegang.cn_name) {
          this.mudegang = {};
          this.showmudegang = "";
          this.tanguangid2 = this.shipping_route[0].id;
        }
      }
    },
    xuanzebaoguan: function(val) {
      if (!val) {
        this.iskey3 = false;
        this.keyport3 = [];
        if (this.showbaoguan !== this.baoguanaddress.cn_name) {
          this.baoguanaddress = {};
          this.showbaoguan = "";
          this.tanguangid3 = this.city[0].id;
        }
      }
    },
    xuanzetuoche: function(val) {
      if (!val) {
        this.iskey4 = false;
        this.keyport4 = [];
        if (this.showtuoche !== this.tuocheaddress.cn_name) {
          this.tuocheaddress = {};
          this.showtuoche = "";
          this.tanguangid4 = this.city[0].id;
        }
      }
    }
  }
};
</script>
