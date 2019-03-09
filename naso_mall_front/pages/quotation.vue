<style scoped lang="scss">
@import "~/styles/public.scss";
.quotation {
  position: relative;
  /*overflow: hidden;*/
  font-size: 16px;
}
.headContent {
  position: relative;
  /*overflow: hidden;*/
  background: white;
  padding-bottom: 100px;
  .headContent1 {
    margin-top: 40px;
  }
}
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}

.quotation-info {
  font-size: 16px;
  color: $main_color;
  font-weight: bold;
  span {
    margin-left: 100px;
    font-weight: normal;
  }
}
.quotation-main {
  padding: 20px;
  border: 1px solid #d2d2d2;
  .quotation-title {
    padding-bottom: 10px;
    color: $main_color;
    font-size: 16px;
    font-weight: bold;
  }

  .quotation_param {
    margin: 2px 0 10px;
  }
  .item-img {
    width: 100px;
    height: 100px;
    padding: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
    img {
      width: 100%;
      // height: 100px;
    }
  }
  .item-title {
    height: 100%;
    padding: 0 10px 0 14px;
    p {
      position: relative;
      word-break: normal;
      width: auto;
      display: block;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: hidden;
    }
    span {
      position: absolute;
      bottom: 0;
    }
  }
  .item_params {
    @extend .bd1;
    padding: 5px 5px 5px 10px;
    margin: 0 -1px -1px 0;
    width: 25%;
    &:nth-of-type(2n-1) {
      background-color: #f4f4f4;
    }
  }
}

.quotation-main-requirements {
  margin-top: 10px;
  border: 1px solid #d2d2d2;
  padding: 10px;
}
.requirements_linkheigth > span {
  line-height: 44px;
}
.requirements_linkheigth > .departure {
  width: 160px;
  margin-left: 20px;
}
.showform {
  position: absolute;
  background: white;
  z-index: 11;
  top: 54px;
  left: 195px;
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
.tabs {
  padding: 8px;
  width: 600px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-bottom: 0px;
  font-size: 12px;
  a {
    margin: 0 8px;
  }
}
.area_selection {
  position: absolute;
  left: 194px;
  z-index: 999;
}
.area_selection_item {
  position: absolute;
  width: 600px;
  background-color: #fff;
  border: 1px solid #aaa;
}
.area_selection_item .content-slide {
  padding: 10px 20px;
  min-height: 134px;
  max-height: 300px;
  overflow-y: scroll;
}
.item_child {
  width: 33.33%;
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #4b3f91;
    font-weight: bold;
  }
}

.active_tab_index {
  color: #4b3f91;
  font-weight: 600;
}

.quotation-submit {
  margin-top: 20px;
}
#searchBox2 {
  top: 209px;
  max-height: 227px;
  overflow-y: scroll;
}
.mudigangcss {
  line-height: 30px;
  height: 30px;
  margin-left: 20px;
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 5px;
}
.required {
  border: 2px solid red !important;
}
</style>
<style lang="scss">
.quotation_params {
  .el-input__inner {
    padding: 0;
    background: #fafafa;
    width: 115px;
  }
  @media screen and (min-width: 1200px) {
    .el-input__inner {
      padding: 0 22px;
      width: 115px;
    }
  }
}
.emoji-mart {
  height: 300px !important;
}
.el-input--mini .el-input__inner {
  height: 30px;
}
.el-input-number--mini {
  line-height: 25px;
}
.el-col {
  padding-top: 10px;
}
.img_url {
  width: 116px;
  height: 116px;
  float: left;
  border: 1px solid #ddd;
}
.img-text-p {
  padding-left: 126px;
}
.required2 .el-input__inner {
  border: 2px solid red !important;
}
</style>

<template>
  <section class="container">
    <div class="quotation">
      <headerbar></headerbar>
      <div class="headContent">
        <commonheader class="headContent1"></commonheader>
        <commonheaderbar class="headContent2" :category="category"></commonheaderbar>
        <div class="layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item>Quantity</el-breadcrumb-item>
          </el-breadcrumb>
          <!--内容头文字-->
          <div class="quotation-layout">
            <!-- <div class="quotation-info mtb10 pl20">
              Quotation:123456789
              <span>Data: {{nowtime}}</span>
            </div>-->
            <div class="quotation-main" v-for="(item,index,key) in prduct_spec" :key="key">
              <div class="quotation-main-item">
                <el-row class="quotation-title">
                  <el-col :span="11">Title</el-col>
                  <el-col :span="3">Current Price</el-col>
                  <el-col :span="4">Quotation</el-col>
                  <el-col :span="6">Products Requirements Description</el-col>
                </el-row>
                <hr>
                <el-row class="quotation_param">
                  <el-col :span="2">
                    <div class="item-img">
                      <img style="height:70px;width:70px;" :src="item.img_url" alt>
                    </div>
                  </el-col>
                  <el-col :span="9" class="item-title" style="padding-top:10px;">
                    <p class="item-title">{{item.title}}</p>
                    <span
                      style="position:absolute;bottom: 0;padding-left:12px;"
                    >Inquiry ID：{{item.id}}</span>
                  </el-col>
                  <el-col :span="3">${{item.sell_price|money}} ~ ${{item.msell_price|money}}</el-col>
                  <el-col :span="4">
                    <el-input-number
                      v-model="numberList[index]"
                      size="mini"
                      @change="updataNum(numberList[index],index)"
                      :min="Number(item.minimum)"
                      :max="9999999999"
                    ></el-input-number>
                  </el-col>
                  <el-col :span="6" class="p10">
                    <el-input type="textarea" :rows="3" resize="none" v-model="item.textarea"></el-input>
                  </el-col>
                </el-row>
                <div class="bold">Please modify the info as below according to your requirements</div>
                <div class="quotation_params">
                  <!-- 根据pro_spec_list的长度判断需要分成几行  -->
                  <el-form
                    label-width="150px"
                    label-position="left"
                    :inline="true"
                    size="mini"
                    style="display: table;"
                    v-for="tempitem in (Math.ceil(item.pro_spec_list.length/4))"
                    :key="tempitem"
                  >
                    <el-form-item
                      v-for="(items,key,index) in item.pro_spec_list"
                      :label="items.name +':'+items.value"
                      :key="index"
                      class="item_params"
                      style="display: table-cell;"
                      v-if="(Math.ceil((key+1)/4)) == tempitem"
                    >
                      <el-input v-model="items.custom_value"></el-input>
                    </el-form-item>
                    <!-- 判断最后一行是否满4个，不满用空元素补满 -->
                    <el-form-item
                      v-for="showitem in ((item.pro_spec_list.length)%4)"
                      label
                      :key="showitem"
                      style="display: table-cell;"
                      v-if="tempitem === (Math.ceil(item.pro_spec_list.length/4)) && ((item.pro_spec_list.length)%4)!==0"
                    ></el-form-item>
                  </el-form>
                </div>
              </div>
            </div>

            <div class="quotation-main-requirements">
              <div class="quotation-info">Complete Your Requirements</div>
              <el-row>
                <el-col :span="14">
                  <div style="position: relative" class="requirements_linkheigth">
                    <span>Destination Port/Country</span>
                    <!-- <input
                      id="search"
                      v-model="showmudegang"
                      style="    line-height: 40px;height: 40px;margin-left: 20px;width: 150px; border: 1px solid #ddd;border-radius: 2px;padding-left: 5px;"
                      @keyup="keyfunc"
                      autocomplete="off"
                    >
                    <i
                      id="search-i"
                      style="    margin-left: -25px;padding-top: 13px;position: absolute;"
                      :class="{'el-icon-arrow-down':!mudigan,'el-icon-arrow-up':mudigan}"
                    ></i>
                  </div>
                  <div id="searchBox" class="showform" v-show="mudigan">
                    <div
                      id="searchBox_title"
                      class="swiper-container swiper-container1"
                      style="font-size: 13px"
                      v-show="!iskey2"
                    >
                      <div class="swiper-wrapper swiper-wrapper1">
                        <div
                          :class="{'swiper-slide-active2':item.id===showtabid}"
                          class="swiper-slide"
                          :id="item.id"
                          :key="key"
                          v-for="(item,index,key) in shipping_route"
                          @click="mudegangxz(index)"
                        >{{item.cn_name}}</div>
                      </div>
                    </div>
                    <div
                      class="port"
                      style="font-size: 12px;max-height: 300px;overflow-y: scroll"
                      v-show="!iskey2"
                    >
                      <p
                        v-for="(item,index,key) in mudegangshuju"
                        :key="key"
                        @click="choosemudegang2(item)"
                      >
                        <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                        <br>
                        <span>({{item.en_name}}/{{item.countryen_name}})</span>
                      </p>
                    </div>-->
                    <div style="display:inline-block;">
                      <input
                        id="search"
                        v-model="showDestination_text"
                        class="mudigangcss"
                        :class="{'required':required == -1}"
                        @keyup="selectSwiperKey(showDestination_text)"
                        autocomplete="off"
                        @click.stop="openDialog"
                      >
                      <i
                        id="searchI"
                        style="margin-left: -25px;padding-top: 8px;position: absolute;cursor: pointer;"
                        :class="{'el-icon-arrow-down':!showKey,'el-icon-arrow-up':showKey}"
                        @click.stop="openDialog"
                      ></i>
                      <span style="color:red;font-size:14px;" v-show="required == -1">* required</span>
                    </div>
                    <!--添加的搜索的显示-->
                    <div
                      class="port"
                      style="font-size: 12px;max-height: 300px;overflow-y: scroll"
                      v-show="iskey2"
                    >
                      <p
                        v-for="(item,index,key) in keyport2"
                        :key="key"
                        @click="choosemudegang2(item)"
                      >
                        <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                        <br>
                        <span>({{item.en_name}}/{{item.countryen_name}})</span>
                      </p>
                    </div>
                    <!-- 目的港 模态框 -->
                    <div class="area_selection modalDiaLog" v-show="showKey" @click.stop>
                      <div class="tabs">
                        <a
                          href="javascript:void(0);"
                          :class="{'active_tab_index':activeIndex == index}"
                          v-for="(item,index) in shipping_route"
                          :id="item.id"
                          :key="index"
                          @click="toSwiperIndex(index)"
                        >{{item.cn_name}}</a>
                      </div>
                      <div
                        class="swiper-container area_selection_item"
                        v-swiper:mySwiper="swiperOption"
                        @click.stop
                      >
                        <div class="swiper-wrapper" @click.stop>
                          <div
                            class="swiper-slide"
                            v-for="(item_child_arr,index) in shipping_route"
                            :key="index"
                            @click.stop
                          >
                            <div class="content-slide" @click.stop>
                              <div
                                class="item_child"
                                v-for="(item_child_item,i) in item_child_arr.recommend_port"
                                :key="i"
                                @click.stop="selectDestination(item_child_item)"
                              >
                                {{item_child_item.cn_name}}
                                <p>({{item_child_item.en_name}})</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="requirements_linkheigth">
                    <span>Factory Inspection：</span>
                    <el-radio v-model="inspection" label="0">Online Inspection</el-radio>
                    <el-radio v-model="inspection" label="1">Filed Survey</el-radio>
                    <!-- <el-date-picker
                      style="margin-left: 20px"
                      v-show="inspection==='1'"
                      v-model="online_inspection_date"
                      type="date"
                      placeholder="Select Date"
                    ></el-date-picker>-->
                  </div>
                  <div class="requirements_linkheigth">
                    <span>Third Party Detection：</span>
                    <el-radio v-model="partyDetection" label="0">No</el-radio>
                    <el-radio v-model="partyDetection" label="1">Yes</el-radio>
                    <el-input
                      style="width:  220px;margin-left: 20px;"
                      v-show="partyDetection==='1'"
                      v-model="partyDetection_name"
                      placeholder="Name of Third-party Detection"
                    ></el-input>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="requirements_linkheigth">
                    <span>Port of Departure：</span>
                    <el-radio v-model="departure" label="0">No</el-radio>
                    <el-radio v-model="departure" label="1">Yes</el-radio>
                    <el-select
                      class="departure"
                      v-model="value8"
                      clearable
                      filterable
                      placeholder="Port of Departure"
                      v-show="departure==='1'"
                    >
                      <el-option
                        placeholder="请选择"
                        v-for="item in optionsa"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="requirements_linkheigth">
                    <span>Sample Requirements：</span>
                    <el-radio v-model="requirements" label="0">No</el-radio>
                    <el-radio v-model="requirements" label="1">Yes</el-radio>
                    <el-input
                      style="width: 110px;margin: 0 20px;"
                      v-show="requirements==='1'"
                      v-model="requirements_num"
                      placeholder
                    ></el-input>
                    <span v-show="requirements==='1'">Piece</span>
                  </div>
                  <div class="requirements_linkheigth">
                    <span>Sample Express：</span>
                    <el-radio v-model="express" label="0">No</el-radio>
                    <el-radio v-model="express" label="1">Yes</el-radio>
                  </div>
                  <!--  <div>
                    <span>Third Party Detection：</span>
                    <el-radio v-model="partyDetection" label="1">Yes</el-radio>
                    <el-radio v-model="partyDetection" label="0">No</el-radio>
                    <el-input style="width: 100px;margin-left: 20px;" v-show="partyDetection==='1'" v-model="partyDetection_name" placeholder=""></el-input>
                  </div>-->
                </el-col>
              </el-row>
              <div class="requirements_linkheigth">
                <span>Quality Acceptance Standards：</span>
                <el-radio v-model="standards" label="1">NASO Acceptance Standards</el-radio>
                <el-radio v-model="standards" label="0">Other Acceptance Standards</el-radio>
                <el-input
                  style="width: 300px;margin-left: 20px;"
                  v-show="standards==='0'"
                  v-model="orderstandards"
                  placeholder="Please Specify Your Acceptance Standards"
                ></el-input>
              </div>
              <div class="requirements_linkheigth">
                <span>Shipment date（T/T Payment Only）Ship in&nbsp;&nbsp;
                  <el-input
                    v-model="shipment"
                    size="mini"
                    style="width:100px;"
                    :class="{'required2':required2 == -1}"
                    @keydown.native="comment.inputLimit"
                    @change="checkVal2(shipment,required2)"
                  ></el-input>&nbsp;&nbsp;&nbsp;day(s) after supplier receives the Initlal Payment .
                </span>
                <span style="color:red;font-size:14px;" v-show="required2 == -1">* required</span>
              </div>
              <div class="requirements_linkheigth">
                <span>Final payment：</span>
                <el-radio v-model="payment" label="1">Before Loading</el-radio>
                <el-radio v-model="payment" label="0">After Loading</el-radio>
              </div>
            </div>
            <div class="show-emoji" style="margin-top: 10px">
              <no-ssr placeholder="Loading...">
                <picker-area
                  v-model="textarea"
                  emoji="point_up"
                  placeholder="Tell us more details about your requirements, so that we can provide you with better services.
You can directly talk with us here, or contact us via WhatsApp/ Email/WeChat/Skype.
"
                />
              </no-ssr>
            </div>
            <!-- <div
              style="text-align: right;padding: 5px 10px;border: 1px solid #ddd;background:  #eeeeee;"
            >
              Remaining:
              <span>16000</span>
            </div>-->
            <div class="quotation-submit mt10">
              <input
                style="cursor: pointer"
                type="submit"
                value="Proceed to Quote"
                class="contact-submit plr10"
                @click="send()"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
  </section>
</template>

<script>
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";
import PickerArea from "vue-emoji-mart-picker";
// import Swiper from "swiper/dist/js/swiper.min";
export default {
  name: "quotation",
  components: {
    headerbar: headerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    footerbar: footerbar,
    PickerArea
  },
  async asyncData({ app, store }) {
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY", {
        store
      })
      .then(res => {
        category = res.data;
      });
    return { category };
  },
  data() {
    return {
      optionsa: [],
      value8: "",

      nowtime: "",
      textarea: "",
      port: "",
      inspection: "0",
      requirements: "0",
      departure: "0",
      requirements_num: null,
      express: "0",
      partyDetection: "0",
      partyDetection_name: "",
      standards: "1",
      payment: "1",
      orderstandards: "",
      shipment: "",
      cate_product_spec: [],
      prduct_spec: [],
      // online_inspection_date: "",

      //报关地点选择
      showseach: false,
      countryData: [],
      shipping_route: [
        { id: -1, cn_name: null },
        { id: -2, cn_name: null },
        { id: -3, cn_name: null }
      ],
      shipping_route_backup: [],
      initData: [],
      mudegang: [],
      showmudegang: null,
      mudegangshuju: [],
      iskey2: false,
      keyport2: [],
      mudigan: false,
      showtabid: null,
      numberList: [],
      swiperOption: {}, //swiper参数
      activeIndex: 0, //tabs索引
      showKey: false, //选择框控制IO
      destination_obj: {}, //选中目的港对象
      showDestination_text: "", //输入框显示文字
      //目的港搜索
      destination_list: [{}],

      //必填提示
      required: 0, //-1：触发，0:默认，1：正常 Destination Port
      required2: 0 //-1：触发，0:默认，1：正常 Shipment date
    };
  },
  methods: {
    // 有废弃代码，可删除
    checkVal2(val) {
      if (val && val !== "") {
        this.required2 = 1;
      } else {
        this.required2 = 0;
      }
    },
    //swiper2.x
    toSwiperIndex(index) {
      this.activeIndex = index;
      this.mySwiper.swipeTo(index);
    },
    selectSwiperKey(val) {
      this.showKey = true;
      // console.log("执行打开");
      // console.log(this.shipping_route);
      if (val == "") {
        this.shipping_route = this.shipping_route_backup;
      } else {
        function returnVal_for_list(arr, val) {
          let tempList = [];
          arr.forEach(el => {
            el.recommend_port.forEach(e => {
              if (
                e &&
                e.en_name.toLowerCase().indexOf(val.toLowerCase()) > -1
              ) {
                tempList.push(e);
              }
            });
          });
          // console.log(tempList);
          return tempList;
        }
        this.shipping_route = [
          {
            recommend_port: [],
            cn_name: "搜索",
            en_name: "search"
          }
        ];
        this.shipping_route[0].recommend_port = returnVal_for_list(
          this.shipping_route_backup,
          val
        );
        // console.log(this.destination_list);
      }
    },
    openDialog() {
      setTimeout(() => {
        // console.log("执行打开");
        this.showKey = !this.showKey;
      }, 0);
    },
    selectDestination(obj) {
      this.showKey = false; //关闭选择框
      this.destination_obj = obj;
      this.showDestination_text = obj.en_name;
    },

    choosemudegang2(item) {
      this.mudegang = item;
      this.showmudegang = item.en_name;
      this.port = item.id;
    },
    //获取全国港口
    getnativeport() {
      let url = this.$store.state.headerUrl + "/freight/port_by_country_id/48";
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then(resp => {
          resp.data.data.forEach(item => {
            this.optionsa.push({
              value: Number(item.id),
              label: item.en_name
            });
          });
        })
        .catch(error => {
          alert(error);
        });
    },
    //获取国家地区
    getcountryData() {
      let url = this.$store.state.headerUrl + "country";
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            for (var i = 0; i < resp.data.data.length; i++) {
              this.countryData[resp.data.data[i].id] = resp.data.data[i];
            }
          }
        })
        .catch(error => {});
    },
    keyfunc() {
      this.mudigan = true;
      if (this.showmudegang === "") {
        this.iskey2 = false;
        this.showtabid = this.shipping_route[0].id;
      } else {
        let url = this.$store.state.headerUrl + "freight/port";
        let tempalert = this.$alert;
        let params = {
          keyword: this.showmudegang
        };
        this.comment
          .axiosPost(url, this.$axios, this.$store, params, tempalert)
          .then(resp => {
            if (resp.data.code === 0 && resp.data.data !== null) {
              for (var i = 0; i < resp.data.data.length; i++) {
                resp.data.data[i].countrycn_name = this.countryData[
                  Number(resp.data.data[i].country_id)
                ].cn_name;
                resp.data.data[i].countryen_name = this.countryData[
                  Number(resp.data.data[i].country_id)
                ].en_name;
              }
              this.keyport2 = resp.data.data;
              this.iskey2 = true;
            } else {
              this.keyport2 = [];
              this.iskey2 = true;
            }
          })
          .catch(error => {
            tempalert("Search failed", {
              confirmButtonText: "ok",
              callback: action => {}
            });
          });
      }
    },
    mudegangxz(index) {
      this.showtabid = this.shipping_route[index].id;
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
    updataNum(val, i) {
      this.prduct_spec[i].number = val;
    },
    getinitData() {
      let that = this;
      let url = this.$store.state.headerUrl + "freight/init";
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            this.initData = resp.data.data;
            this.shipping_route = resp.data.data.shipping_route;
            this.shipping_route_backup = resp.data.data.shipping_route;
            // console.log(this.shipping_route);

            this.mudegangshuju = this.shipping_route[0].recommend_port;
            this.showtabid = this.shipping_route[0].id;
            // let obj = document.getElementById("searchBox");
            // let oBtn = document.getElementById("search");
            // let oBtni = document.getElementById("searchI");
            // let obj_title = document.getElementById("searchBox_title");
            // obj_title.onclick = function(event) {
            //   let e = event || window.event;
            //   e.cancelBubble = true;
            // };
            // oBtn.onclick = () => {
            //   alert("cvv")
            //   setTimeout(() => {
            //     this.mudigan = !this.mudigan;
            //   }, 0);
            // };
            // oBtni.onclick = () => {
            //   alert("dsafd")
            //   setTimeout(() => {
            //     this.mudigan = !this.mudigan;
            //   }, 0);
            // };
            // 下面是点击document隐藏
            // document.onclick = function(event) {
            //   let e = event || window.event; //兼容ie和非ie的event
            //   let aim = e.srcElement || e.target; //兼容ie和非ie的事件源
            //   if (that.mudigan == true) {
            //     if (aim != oBtn && aim != oBtni && aim != obj) {
            //       that.mudigan = false;
            //     }
            //   }
            // };
            // let swiper1 = new Swiper(".swiper-container1", {
            //   slidesPerView: 6,
            //   spaceBetween: 30,
            //   width: 550,
            //   freeMode: true,
            //   freeModeMinimumVelocity: 1
            // });
          }
        })
        .catch(error => {});
    },

    get_cate_product_spec() {
      let url = this.$store.state.headerUrl + "goods/cate_product_spec";
      let params = this.cate_product_spec;
      let tempalert = this.$alert;
      this.comment
        .axiosPost(url, this.$axios, this.$store, params, tempalert)
        .then(resp => {
          if (resp.data.code === 0) {
            this.prduct_spec = resp.data.data;
            if (this.prduct_spec !== null) {
              this.prduct_spec.forEach((el, i) => {
                this.prduct_spec[i].number = 0;
                if (
                  el.pro_spec_list !== null &&
                  el.pro_spec_list !== "" &&
                  el.pro_spec_list !== undefined
                ) {
                  el.show_pro_spec_list = [];
                  el.pro_spec_list.forEach((ele, j) => {
                    ele.custom_value = "";
                  });
                } else {
                  el.pro_spec_list = [];
                  el.show_pro_spec_list = [];
                }
                // debugger
                // let tempyushu = (el.pro_spec_list.length)%4;
                // console.log(tempyushu)
                // console.log(el.pro_spec_list.length)
                // for(let i = 0;i<tempyushu;i++){
                //   el.pro_spec_list.push({
                //     name: "",
                //     value: "",
                //     custom_value : ""
                //   })
                // }

                if (
                  localStorage.getItem("carttempData") ||
                  localStorage.getItem("receivedReplyData")
                ) {
                  let cartData =
                    JSON.parse(localStorage.getItem("carttempData")) || null;
                  if (cartData) {
                    cartData.listdata.forEach(e => {
                      if (Number(el.id) == Number(e.goods_id)) {
                        this.numberList.push(Number(e.num));
                        this.prduct_spec[i].number = Number(e.num);
                        el.textarea = "";
                      }
                    });
                  } else {
                    this.prduct_spec[i].number = Number(el.minimum);
                    this.numberList.push(Number(el.minimum));
                    el.number = Number(el.minimum);
                  }
                } else if (localStorage.getItem("adivsoryData")) {
                  let cartData =
                    JSON.parse(localStorage.getItem("adivsoryData")) || null;
                  if (cartData) {
                    cartData.forEach(e => {
                      if (Number(el.id) == Number(e.goods_info.id)) {
                        this.numberList.push(Number(e.quantity));
                        this.prduct_spec[i].number = Number(e.quantity);
                        el.textarea = "";
                      }
                    });
                  } else {
                    this.prduct_spec[i].number = Number(el.minimum);
                    this.numberList.push(Number(el.minimum));
                    el.number = Number(el.minimum);
                  }
                }
              });
            }
          }
        })
        .catch(error => {});
    },
    send() {
      if (this.required == 0 || this.required == -1) {
        this.required = -1;
      }
      if (this.required2 == 0 || this.required2 == -1) {
        this.required2 = -1;
      }
      if (this.required == -1 || this.required2 == -1) {
        return;
      }
      let tempalert = this.$alert;
      let url = this.$store.state.headerUrl + "inquiry/add";
      let order_goods_list = [];
      for (let i = 0; i < this.prduct_spec.length; i++) {
        let spec_list = [];
        if (this.prduct_spec[i].pro_spec_list) {
          for (let j = 0; j < this.prduct_spec[i].pro_spec_list.length; j++) {
            spec_list.push({
              title: this.prduct_spec[i].pro_spec_list[j].name,
              value: this.prduct_spec[i].pro_spec_list[j].value,
              custom_value: this.prduct_spec[i].pro_spec_list[j].custom_value
            });
          }
        }
        order_goods_list.push({
          goods_id: Number(this.prduct_spec[i].id),
          num: Number(this.prduct_spec[i].number),
          custom_comment: this.prduct_spec[i].textarea,
          spec_list: spec_list
        });
      }
      let params = {};

      if (this.destination_obj.id === "") {
        tempalert("Please select the port", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      }
      if (this.shipment === "") {
        tempalert("Please complete the information", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      }
      //  let online_inspection_dates = "";
      // if (that.online_inspection_date !== "") {
      //   online_inspection_dates = that.comment.formate(
      //     "yyyy-MM-dd",
      //     new Date(that.online_inspection_date)
      //   );
      //   params = {
      //     source: "cart",
      //     market_comment: "",
      //     contact_pod_id: Number(that.port),
      //     sample_requirements: Number(that.requirements),
      //     sample_quantity: Number(that.requirements_num),
      //     sample_express: Number(that.express),
      //     factory_inspection: Number(that.inspection),
      //     online_inspection_date: online_inspection_dates,
      //     quality_acceptance_standards: Number(that.standards),
      //     other_acceptance_standards: that.orderstandards,
      //     final_payment_type: Number(that.payment),
      //     third_party_detection: Number(that.partyDetection),
      //     third_party_detection_name: that.partyDetection_name,
      //     shipment_date: Number(that.shipment),
      //     custom_comment: that.textarea,
      //     order_goods_list: order_goods_list,
      //   };
      // } else {
      params = {
        source: "cart",
        market_comment: "",
        contact_pod_id: Number(this.destination_obj.id),
        sample_requirements: Number(this.requirements),
        sample_quantity: Number(this.requirements_num),
        sample_express: Number(this.express),
        factory_inspection: Number(this.inspection),
        quality_acceptance_standards: Number(this.standards),
        other_acceptance_standards: this.orderstandards,
        final_payment_type: Number(this.payment),
        third_party_detection: Number(this.partyDetection),
        third_party_detection_name: this.partyDetection_name,
        shipment_date: Number(this.shipment),
        custom_comment: this.textarea,
        order_goods_list: order_goods_list
      };
      // }
      if (this.departure === "1") {
        params.reference_pol_id = Number(this.value8);
      }
      this.comment
        .axiosPost(url, this.$axios, this.$store, params, tempalert)
        .then(resp => {
          if (resp.data.code === 0) {
            if (localStorage.getItem("carttempData")) {
              localStorage.removeItem("carttempData");
              this.$router.push("/successfullyordered");
            } else if (localStorage.getItem("receivedReplyData")) {
              this.sendid();
            }
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true
            });
          }
        })
        .catch(error => {
          tempalert(error, {
            confirmButtonText: "ok",
            center: true
          });
        });
    },
    emitFn(data) {
      this.$store.commit("SET_quotationIdList", data);
      // console.log(this.$store.state.quotationIdList);
    },
    sendid() {
      let tempalert = this.$alert;
      let tempid = localStorage.getItem("receivedReplyId");
      let url = this.$store.state.headerUrl + "inquire/place_order/" + tempid;
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            localStorage.removeItem("receivedReplyData");
            localStorage.removeItem("receivedReplyId");
            this.$router.push("/successfullyordered");
          }
        })
        .catch(error => {
          tempalert(error, {
            confirmButtonText: "ok",
            center: true
          });
        });
    }
  },
  mounted() {
    // document.addEventListener('click', (e)=> {
    //   console.log(e.path);
    //   console.log(e.path.classList);

    //     if (e.target.className != 'area_selection') {

    //     }
    // })
    document.body.addEventListener(
      "click",
      () => {
        // console.log("执行关闭");
        this.showKey = false;
      },
      false
    );

    this.nowtime = this.comment.formate("yyyy-MM-dd hh:mm:ss", new Date());
    let tempalert = this.$alert;
    if (localStorage.getItem("carttempData")) {
      for (
        let i = 0;
        i < JSON.parse(localStorage.getItem("carttempData")).listdata.length;
        i++
      ) {
        this.cate_product_spec[i] = Number(
          JSON.parse(localStorage.getItem("carttempData")).listdata[i].goods_id
        );
      }
      this.get_cate_product_spec();
    } else if (localStorage.getItem("receivedReplyData")) {
      this.cate_product_spec = JSON.parse(
        localStorage.getItem("receivedReplyData")
      );
      this.get_cate_product_spec();
    } else if (localStorage.getItem("adivsoryData")) {
      let temp_adivsoryData = JSON.parse(localStorage.getItem("adivsoryData"));
      console.log(temp_adivsoryData);
      for (let i = 0; i < temp_adivsoryData.length; i++) {
        this.cate_product_spec[i] = Number(temp_adivsoryData[i].goods_info.id);
      }
      this.get_cate_product_spec();
    }

    this.getinitData();
    this.getcountryData();
    this.getnativeport();
  },
  watch: {
    mudigan: function(val) {
      if (!val) {
        this.iskey2 = false;
        this.keyport2 = [];
        if (this.showmudegang !== this.mudegang.en_name) {
        this.shipping_route = this.shipping_route_backup;

          this.mudegang = {};
          this.showmudegang = "";
          this.showtabid = this.shipping_route[0].id;
        }
      }
    },
    showKey: function(val) {
      if (!val) {
        if (
          Boolean(this.destination_obj) &&
          this.showDestination_text !== this.destination_obj.en_name
        ) {
          this.showDestination_text = "";
        } else if (
          this.destination_obj.id == null &&
          this.showDestination_text !== ""
        ) {
          this.showDestination_text = "";
        } else {
          this.required = 1;
        }
      }
    },
    // inspection: function(val) {
    //   if (Number(val) === 0) {
    //     this.online_inspection_date = "";
    //   }
    // },
    departure: function(val) {
      if (Number(val) === 0) {
        this.value8 = "";
      }
    }
  }
};
</script>


