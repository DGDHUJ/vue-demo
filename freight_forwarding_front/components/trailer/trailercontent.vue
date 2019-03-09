<style scoped lang="scss">
.trailercontent {
  .content {
    position: relative;
    .box-card {
      margin: 10px 0 0 0;
      .el-card__body {
        // padding:20px 0;
        .bigtitle {
          padding: 0 20px;
          overflow: hidden;
          img {
            float: left;
          }
          p {
            font-size: 16px;
            margin-left: 40px;
            font-weight: 600;
          }
        }
        .departure {
          padding: 0 20px;
          overflow: hidden;
          .title {
            float: left;
            width: 100px;
            line-height: 40px;
            height: 40px;
            font-size: 1rem;
          }
          .select-ground {
            display: inline-block;
            width: 80%;
            .departure-city {
              width: 150px;
              display: inline-block;
              margin-right: 20px;
            }
            .departure-port {
              width: 150px;
              display: inline-block;
            }
            .departure-city-search {
              cursor: pointer;
              padding-left: 15px;
              height: 40px;
              width: 150px;
              border: 1px solid #dcdcdc;
              border-radius: 4px;
            }
            .search1_i {
              margin-left: -25px;
              padding-top: 14px;
            }
          }
        }
        .containers-num {
          margin-top: 20px;
          overflow: hidden;
          padding: 0 20px;
          .title {
            float: left;
            width: 100px;
            line-height: 40px;
            height: 40px;
            font-size: 1rem;
          }
          .containers-ground {
            width: 80%;
            display: inline-block;
            .containers-input {
              width: 270px;
              display: inline-block;
              position: relative;
              margin: 0 20px 20px 0;
              .containers-span {
                right: 10%;
                height: 40px;
                line-height: 40px;
                color: black;
              }
              .tempdate {
                width: 150px;
              }
            }
            .containers-input1 {
              cursor: pointer;
              font-size: 1.1rem;
            }
            .containers-input1-active {
              cursor: pointer;
              color: #409eff;
            }
          }
        }
        .radio-grounp {
          padding: 0 20px;
          margin-left: 100px;
          margin-top: 20px;
          font-size: 1rem;
        }
        .check-btn {
          padding: 0 20px;
          margin-left: 100px;
          margin-top: 20px;
          font-size: 1rem;
          .check-price {
            width: 150px;
            background: #f08519;
            color: white;
            font-size: 1.1rem;
          }
        }
        .tuocheInfo {
          padding: 20px 0 10px 0;
          background: white;
          overflow: hidden;
          .item1 {
            width: 25%;
          }
          .item2 {
            width: 25%;
          }
          .item3 {
            width: 16%;
          }
          .item4 {
            width: 11%;
          }
          .item5 {
            width: 11%;
          }
          .item6 {
            width: 12%;
            .item6btn {
              p {
                width: 80px;
                text-align: center;
                border: 1px solid #ddd;
                height: 25px;
                line-height: 25px;
                cursor: pointer;
                font-size: 12px;
                border-radius: 5px;
              }
              p:nth-of-type(1) {
                margin-bottom: 5px;
                background: #4a3f91;
                color: white;
              }
              p:nth-of-type(2) {
                margin-top: 5px;
              }
            }
          }
          .title {
            background: #4a3f91;
            color: white;
            font-size: 1rem;
            padding: 0 20px;
            .grid-content {
              min-height: 40px;
              line-height: 40px;
            }
          }
          .Info {
            padding: 10px 20px;
            font-size: 0.875rem;
            .grid-content {
              min-height: 60px;
              line-height: 60px;
            }
          }
        }
      }
    }

    /*这是弹窗*/
    .showform {
      position: absolute;
      background: white;
      z-index: 11;
      border: 1px solid #ddd;
      width: 600px;
      // padding:0 10px 20px 10px;
      .swiper-container {
        line-height: 40px;
        height: 40px;
        border-bottom: 1px solid #ddd;
        .swiper-slide {
          text-align: center;
          cursor: pointer;
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
      left: 121px;
      top: 88px;
      max-height: 227px;
      overflow-y: scroll;
    }
    #showaddress {
      position: absolute;
      background: white;
      z-index: 11;
      top: 227px;
      left: 121px;
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
    }
    #tuoguiaddress {
      display: inline-block;
      position: relative;
      div {
        cursor: pointer;
        border: 1px solid #ddd;
        padding: 0px 40px 0 20px;
        line-height: 40px;
        min-width: 150px;
        border-radius: 5px;
      }
      i {
        position: absolute;
        top: 16px;
        right: 16px;
      }
    }
  }
}
.result {
  overflow: hidden;
}
.tableHeader {
  text-align: center;
  line-height: 40px;
  font-size: 1rem;
  background: #4b3f91;
  color: white;
  overflow: hidden;
  padding: 0 20px;
}

.tableContent {
  text-align: center;
  line-height: 40px;
  font-size: 1rem;
  overflow: hidden;
  margin: 0 20px;
  border-bottom: 1px solid #ddd;
}
.Headerp1 {
  width: 25%;
  float: left;
  text-align: left;
}
.Headerp2 {
  width: calc(50% / 7);
  float: left;
}
.expected {
  overflow: hidden;
  line-height: 40px;
}
.expectedP {
  float: right;
  margin-right: 20px;
  font-size: 1rem;
}
.ContentBtn {
  overflow: hidden;
  line-height: 40px;
  margin-right: 20px;
}
.ContentBtn-p1 {
  width: 90px;
  font-size: 0.93rem;
  text-align: center;
  line-height: 25px;
  float: right;
  cursor: pointer;
  background: #4a3f91;
  color: white;
  border-radius: 5px;
}
.ContentBtn-p2 {
  width: 90px;
  font-size: 0.93rem;
  text-align: center;
  line-height: 25px;
  border: 1px solid #ddd;
  float: right;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
<style lang="scss">
.trailercontent {
  .content {
    .box-card {
      .el-card__body {
        padding: 20px 0 !important;
      }
    }
  }
}
</style>

<template>
  <div>
    <tabbar :items="tabitems"/>
    <div class="trailercontent" v-loading="loading">
      <div class="layout">
        <div class="content">
          <el-card class="box-card">
            <div class="bigtitle">
              <img src="../../assets/img/trailer_title.jpg" height="20" width="32">
              <p>拖车</p>
            </div>
            <div class="departure">
              <div class="title">起运港:</div>
              <div class="select-ground">
                <input
                  id="search1"
                  class="search departure-city-search"
                  v-model="showqiyungang"
                  placeholder="请选择起运港"
                  @keyup="keyfunc(1)"
                >
                <i
                  id="search1_i"
                  class="search1_i"
                  :class="{'el-icon-arrow-down':!showchoosecity,'el-icon-arrow-up':showchoosecity}"
                ></i>
              </div>
            </div>
            <div class="containers-num">
              <div class="title">货柜数量：</div>
              <div class="containers-ground">
                <div class="containers-input">
                  <span class="containers-span">20GP:
                  </span>
                  <el-input-number
                    type="number"
                    v-model="containers_20gp"
                    @change="handleChange"
                    size
                    :min="0"
                    :max="99999999999"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div class="containers-input">
                  <span class="containers-span">40GP:
                  </span>
                  <el-input-number
                    type="number"
                    v-model="containers_40gp"
                    @change="handleChange"
                    size
                    :min="0"
                    :max="99999999999"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div class="containers-input">
                  <span class="containers-span">40HQ:</span>
                  <el-input-number
                    type="number"
                    v-model="containers_40hq"
                    @change="handleChange"
                    size
                    :min="0"
                    :max="99999999999"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div class="containers-input">
                  <el-date-picker
                    class="tempdate"
                    v-model="tempdate"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                </div>
                <div
                  :class="{'containers-input1-active':checked}"
                  class="containers-input containers-input1"
                  @click="check"
                >
                  <i v-show="checked" class="icon iconfont icon-danxuankuangxuanzhong"></i>
                  <i v-show="!checked" class="icon iconfont icon-danxuankuang1"></i>
                  <span>20'GP可以孖拖</span>
                </div>
              </div>
            </div>
            <div class="departure" style="margin-top: 20px;">
              <div class="title">拖柜地点:</div>
              <div id="tuoguiaddress">
                <div @click="opentuogui" v-show="showtuoguididian!==''">{{showtuoguididian}}</div>
                <div @click="opentuogui" v-show="showtuoguididian===''">请选择</div>
                <i
                  @click="opentuogui"
                  :class="{'el-icon-arrow-down':!isseletetuogui,'el-icon-arrow-up':isseletetuogui}"
                ></i>
              </div>
            </div>
            <div class="radio-grounp">
              <el-radio v-model="radio" label="1">委托报关</el-radio>
              <el-radio v-model="radio" label="0">自行报关</el-radio>
            </div>
            <div class="check-btn">
              <el-button class="check-price" @click="checkPrice">查询价格</el-button>
            </div>
            <div v-show="selectprice" class="tuocheInfo">
              <el-row class="title">
                <el-col class="item1">
                  <div class="grid-content bg-purple">拖柜地点</div>
                </el-col>
                <el-col class="item2">
                  <div class="grid-content bg-purple">起运港（码头）</div>
                </el-col>
                <el-col class="item3">
                  <div class="grid-content bg-purple">拖柜日期</div>
                </el-col>
                <el-col class="item4">
                  <div class="grid-content bg-purple">模式</div>
                </el-col>
                <el-col class="item5">
                  <div class="grid-content bg-purple">预计费用</div>
                </el-col>
                <el-col class="item6">
                  <div class="grid-content bg-purple"></div>
                </el-col>
              </el-row>
              <el-row
                v-for="(item,index,key) in checkedPrice"
                :key="key"
                class="Info"
                v-if="checkedPrice!==null"
              >
                <el-col class="item1">
                  <div class="grid-content bg-purple">
                    <p v-if="checkedPrice!==null">{{item.district_full_name}}</p>
                  </div>
                </el-col>
                <el-col class="item2">
                  <div class="grid-content bg-purple">
                    <p v-if="checkedPrice!==null">{{item.port_name}}</p>
                  </div>
                </el-col>
                <el-col class="item3">
                  <div class="grid-content bg-purple">
                    <p v-if="tempdate!==''">{{comment.formate('yyyy-MM-dd',new Date(tempdate))}}</p>
                  </div>
                </el-col>
                <el-col class="item4">
                  <div class="grid-content bg-purple">
                    <p v-if="radio === '0'">自行报关</p>
                    <p v-if="radio === '1'">委托报关</p>
                  </div>
                </el-col>
                <el-col class="item5">
                  <div class="grid-content bg-purple">
                    <p v-if="checkedPrice!==null">{{item.total_price}}</p>
                  </div>
                </el-col>
                <el-col class="item6">
                  <div class="grid-content bg-purple">
                    <div class="item6btn">
                      <p @click="submitorder(item)">立即下单</p>
                      <p onclick="_MEIQIA('showPanel')">咨询客服</p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="result">
              <div class="tableHeader">
                <p class="Headerp1">拖柜地点</p>
                <p class="Headerp1">起运港（码头）</p>
                <p class="Headerp2">柜型</p>
                <p class="Headerp2">数量</p>
                <p class="Headerp2">单价</p>
                <p class="Headerp2">模式</p>
                <p class="Headerp2">孖拖</p>
                <p class="Headerp2">脱轨日期</p>
                <p class="Headerp2">预计费用</p>
              </div>
              <div class="tableOuter">
                <div class="tableContent" v-for="item in 3" :key="item">
                  <p class="Headerp1">拖柜地点</p>
                  <p class="Headerp1">起运港（码头）</p>
                  <p class="Headerp2">20'GP</p>
                  <p class="Headerp2">2</p>
                  <p class="Headerp2">CNY 400</p>
                  <p class="Headerp2">委托报关</p>
                  <p class="Headerp2">是（否）</p>
                  <p class="Headerp2">2019-2-25</p>
                  <p class="Headerp2">CNY 800.00</p>
                  <!-- <div class="tableContentBtn">
                  <p class="p1" @click="submitorder(item)">立即下单</p>
                  <p class="p2" onclick="_MEIQIA('showPanel')">咨询客服</p>
                  </div>-->
                </div>
                <div class="expected">
                  <p class="expectedP">预估费用总计：&nbsp;&nbsp;&nbsp; CNY 1,600.00</p>
                </div>
                <div class="ContentBtn">
                  <p class="ContentBtn-p1" @click="alert('下单')">立即下单</p>
                  <p class="ContentBtn-p2" onclick="_MEIQIA('showPanel')">咨询客服</p>
                </div>
              </div>
            </div>
          </el-card>
          <!--弹出内容-->
          <!--第一个-->
          <!-- <div id="searchBox1" class="showform" v-show="showchoosecity"> -->
          <div id="searchBox1" class="showform" style="dispaly:none!important">
            <div
              id="searchBox_title1"
              class="swiper-container"
              v-show="!iskey"
              v-swiper:mySwiper="swiperOption"
            >
              <div class="swiper-wrapper wrap">
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
            <div class="port" v-show="!iskey" v-loading="loading">
              <p v-for="(item,index,key) in port1" :key="key" @click="choosecity2(item,1)">
                <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                <br>
                <span>({{item.en_name}}/{{item.countryen_name}})</span>
              </p>
            </div>
            <!--添加的搜索的显示-->
            <div class="port" v-show="iskey">
              <p v-for="(item,index,key) in keyport1" :key="key" @click="choosecity2(item,1)">
                <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                <br>
                <span>({{item.en_name}}/{{item.countryen_name}})</span>
              </p>
            </div>
          </div>
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
      </div>
    </div>
  </div>
</template>
<script>
import tabbar from "../comment/tab-bar.vue";
export default {
  name: "trailercontent",
  components: {
    tabbar
  },
  props: ["initData", "countryData"],
  data() {
    return {
      showactive: 1,
      isseletetuogui: false,
      showtuoguididian: "",
      showtuoguididian_id: "",
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
      tabitems: [
        { name: "首页", path: "/" },
        { name: "拖车列表", path: "/trailer" }
      ],
      city: [],
      port: [],
      tempdate: "",
      containers_20gp: null,
      containers_40gp: null,
      containers_40hq: null,
      containers_45hq: 0,
      checked: false, //是否孖拖
      selectprice: false,
      radio: "1",
      checkedPrice: null, //查询结果
      checkedInfo: null,
      loading: true,
      loading1: false,
      loading2: false,
      showqiyungang: "",
      showchoosecity: false,
      qiyungang: {}, //起运港绑定值
      tanguangid1: null, //选中城市id
      iskey: false,
      port1: [],
      keyport1: [],
      district_id: null,
      swiperOption: {
        slidesPerView: 6
      }
    };
  },
  methods: {
    handleChange(value) {},
    //是否孖拖
    check() {
      this.checked = !this.checked;
    },
    //下单
    submitorder(item) {
      let temp_is_gp_20_twin = null;
      let tempalert = this.$alert;
      if (this.checked) {
        temp_is_gp_20_twin = "1"; // 孖拖
      } else {
        temp_is_gp_20_twin = "0"; //不孖拖
      }
      let tempcontainers_20gp = 0;
      let tempcontainers_40gp = 0;
      let tempcontainers_40hq = 0;
      if (this.containers_20gp === null) {
        tempcontainers_20gp = 0;
      } else {
        tempcontainers_20gp = this.containers_20gp;
      }
      if (this.containers_40gp === null) {
        tempcontainers_40gp = 0;
      } else {
        tempcontainers_40gp = this.containers_40gp;
      }
      if (this.containers_40hq === null) {
        tempcontainers_40hq = 0;
      } else {
        tempcontainers_40hq = this.containers_40hq;
      }
      if (this.tempdate === "") {
        tempalert("请选择日期", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      let querydata = {
        containers_20gp: tempcontainers_20gp,
        containers_40gp: tempcontainers_40gp,
        containers_40hq: tempcontainers_40hq,
        containers_45hq: this.containers_45hq,
        is_gp_20_twin: temp_is_gp_20_twin, //是否孖拖
        tempdate: this.comment.formate("yyyy-MM-dd", new Date(this.tempdate)),
        baoguan: this.radio,
        id: item.id,
        district_id: this.district_id
      };

      localStorage.removeItem("trailerinput");
      localStorage.setItem("trailertempData", JSON.stringify(querydata));
      this.$router.push({ name: "trailerOrder" });
    },
    //查询价格
    // checkedPrice(){
    //    let that = this;
    //    let tempalert = that.$alert;
    //    let url = that.state.headerUrl + "freight/trailer/goods"
    // },


    checkPrice() {
      let that = this;
      let tempalert = that.$alert;
      let url = that.$store.state.headerUrl + "freight/trailer/goods";

      //是否孖拖取值
      let temp_is_gp_20_twin = null;
      if (that.checked) {
        temp_is_gp_20_twin = 1; // 孖拖
      } else {
        temp_is_gp_20_twin = 0; //不孖拖
      }
      //脱轨地点取值
      let temp_district_id = null;
      if (that.address_zhen_id === null) {
        if (that.address_zhen_obj === null) {
          if (that.address_area_id === null) {
            if (that.address_area_obj === null) {
              if (that.address_city_id === null) {
                if (that.address_city_obj === null) {
                  if (that.address_city_id === null) {
                    tempalert("请选择拖柜地点", {
                      confirmButtonText: "确定",
                      callback: action => {}
                    });
                    return;
                  } else {
                    temp_district_id = that.address_zhen_id;
                  }
                } else {
                  tempalert("请选择拖柜地点", {
                    confirmButtonText: "确定",
                    callback: action => {}
                  });
                  return;
                }
              } else {
                temp_district_id = that.address_zhen_id;
              }
            } else {
              tempalert("请选择拖柜地点", {
                confirmButtonText: "确定",
                callback: action => {}
              });
              return;
            }
          } else {
            temp_district_id = that.address_zhen_id;
          }
        } else {
          tempalert("请选择拖柜地点", {
            confirmButtonText: "确定",
            callback: action => {}
          });
          return;
        }
      } else {
        temp_district_id = that.address_zhen_id;
      }
      let params = {
        port_id: Number(that.qiyungang.id),
        district_id: Number(temp_district_id),
        gp_20_num: Number(that.containers_20gp),
        gp_40_num: Number(that.containers_40gp),
        hq_40_num: Number(that.containers_40hq),
        hq_45_num: Number(that.containers_45hq),
        has_customs_declare: Number(that.radio),
        is_gp_20_twin: temp_is_gp_20_twin
      };
      that.district_id = temp_district_id;
      that.comment
        .axiosPost(url, that.$axios, that.$store, params, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.checkedPrice = resp.data.data;
            that.selectprice = true;
          }
          /*  else{
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          }*/
        });
    },
    //搜索
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
    },
    //获取港口数据
    getprot(id) {
      var that = this;
      let url = that.$store.state.headerUrl + "freight/port_by_pid/" + id;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          for (var i = 0; i < resp.data.data.length; i++) {
            resp.data.data[i].countrycn_name =
              that.$store.state.countryData[
                Number(resp.data.data[i].country_id)
              ].cn_name;
            resp.data.data[i].countryen_name =
              that.$store.state.countryData[
                Number(resp.data.data[i].country_id)
              ].en_name;
          }
          that.port1 = resp.data.data;
          if (id === that.city[0].id) {
            that.loading = false;
          }
        });
    },
    //选择起运港城市
    choosecity(id, index) {
      this.tanguangid1 = id;
      this.getprot(id, 1);
    },
    //选择目的港城市
    choosecity2(item) {
      this.qiyungang = item;
      this.showqiyungang = item.cn_name;
    },
  
    //查询省市区镇 id,index[0：省，1：市，2：区，3：镇]
    getaddress(id, index) {
      let that = this;
      let url = that.$store.state.headerUrl + "district/" + id;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            if (index === 0) {
              that.address_sheng_obj = resp.data.data;
              that.loading2 = true;
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
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "确定",
            callback: action => {}
          });
        });
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
      this.district_id = null;
    },
    //打开选择拖柜地点选择框
    opentuogui() {
      this.isseletetuogui = !this.isseletetuogui;
    }
  },
  mounted() {
    let that = this;
    that.getaddress(0, 0);
    that.city = that.initData.city;
    that.tanguangid1 = that.city[0].id;
    that.getprot(that.city[0].id);
    that.loading1 = true;
    that.$store.commit("SET_TITLE", that.initData.freight_name);
    if (that.$route.query.id) {
      that.address_sheng = that.$route.query.address_sheng;
      that.address_sheng_id = that.$route.query.address_sheng_id;
      that.address_city = that.$route.query.address_city;
      that.address_city_id = that.$route.query.address_city_id;
      that.address_area = that.$route.query.address_area;
      that.address_area_id = that.$route.query.address_area_id;
      that.address_zhen = that.$route.query.address_zhen;
      that.address_zhen_id = that.$route.query.address_zhen_id;
      that.radio = that.$route.query.radio;
      that.containers_20gp = that.$route.query.num1;
      that.containers_40gp = that.$route.query.num2;
      that.containers_40hq = that.$route.query.num3;
      that.containers_45hq = that.$route.query.num4;
      that.showqiyungang = that.$route.query.name;
      that.tanguangid1 = that.$route.query.id;
     
      that.qiyungang.id = that.$route.query.id11;
      that.showtuoguididian = that.$route.query.showtuoguididian;
      that.showtuoguididian_id = that.$route.query.showtuoguididian_id;
      that.showactive = Number(that.$route.query.showactive);
      that.getaddress(that.address_sheng_id, 1);
      that.getaddress(that.address_city_id, 2);
      that.getaddress(that.address_area_id, 3);
      that.checkPrice();
    }
    var obj_title1 = document.getElementById("searchBox_title1");
    var obj1 = document.getElementById("searchBox1");
    var oBtn1 = document.getElementById("search1");
    let oBtn1i = document.getElementById("search1_i");
    var obj_address = document.getElementById("showaddress");
    var obj_tuoguiaddress = document.getElementById("tuoguiaddress");
    //     这里是先阻止冒泡
    obj_title1.onclick = function(e) {
      var e = e || window.event;
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
      setTimeout(() => {
        that.showchoosecity = !that.showchoosecity;
      }, 0);
    };
    oBtn1i.onclick = () => {
      setTimeout(() => {
        that.showchoosecity = !that.showchoosecity;
      }, 0);
    };
    //     下面是点击document隐藏
    document.onclick = function(event) {
      let e = event || window.event; //兼容ie和非ie的event
      let aim = e.srcElement || e.target; //兼容ie和非ie的事件源
      if (
        that.showchoosecity == true ||
        that.mudigan == true ||
        that.isseletetuogui === true
      ) {
        if (
          aim != oBtn1 &&
          aim != obj1 &&
          aim != obj_address &&
          aim != obj_tuoguiaddress &&
          aim != oBtn1i
        ) {
          that.showchoosecity = false;
          if (aim != obj_address && aim != obj_tuoguiaddress) {
            that.isseletetuogui = false;
          }
        }
      }
    };
  },
  watch: {
    loading1: function() {
      if (this.loading1 && this.loading2) {
        this.loading = false;
      }
    },
    loading2: function() {
      if (this.loading1 && this.loading2) {
        this.loading = false;
      }
    },
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
    iskey: function() {
      if (!this.iskey) {
        if (this.port1 === []) {
          this.loading = true;
        }
      }
    }
  }
};
</script>
