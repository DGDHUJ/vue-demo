<style scoped lang="scss">
.booking {
  font-family: MicrosoftYaHei, "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  height: 450px;
  position: relative;
}
h3 {
  font-size: 18px;
}
.book-btn {
  position: absolute;
  bottom: 0;
  width: calc(100%-30px);
  height: 45px;
  background: #ff6600;
  border: 0;
  color: #fff;
  font-size: 18px;
  font-family: MicrosoftYaHei, "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  outline: none;
  cursor: pointer;
}
.select-box {
  margin-top: 10px;
  font-size: 16px;
  input {
    padding: 4px 6px;
    width: 280px;
    height: 34px;
    margin-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #000;
  }
}
.span_width {
  width: 70px;
  display: inline-block;
}
.searchBox {
  position: absolute;
  padding: 10px;
  width: 370px;
  height: 250px;
  border: 1px solid #cdcdcd;
  box-shadow: 1px 1px 4px #ddd;
  background-color: #fff;
  z-index: 9;
}
.searchBox1 {
  top: 142px;
  left: 14px;
}
.searchBox2 {
  top: 186px;
  left: 14px;
}
.searchBox3 {
  top: 142px;
  left: 14px;
}
.searchBox4 {
  top: 270px;
  left: 14px;
}
.searchBox-box {
  padding: 20px 0px 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 197px;
}
.select-box-custom {
  display: inline-block;
  margin-left: 8px;
  width: 280px;
  vertical-align: top;
  line-height: 38px;
}
.searchBox-box-items {
  display: inline-block;
  width: 50%;
  text-align: center;
  margin-bottom: 30px;
  font-size: 13px;
}
#showaddress {
  position: absolute;
  background: white;
  z-index: 11;
  top: 268px;
  left: 0px;
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
.swiper-slide {
  cursor: pointer;
  // padding: 0 6px;
}
.slide_active {
  color: #4a3f91;
  font-weight: 600;
}
.swiper-container {
  border-bottom: 1px solid #dedede;
  height: 30px;
  font-size: 16px;
}

.booking-generalize {
  margin: 0 10px;
  font-size: 18px;
  p {
    text-align: center;
    line-height: 38px;
    .icon-Phone-InTalk {
      margin-right: 10px;
      color: #ff6600;
      font-weight: 600;
      font-size: 24px;
      vertical-align: middle;
    }
  }
}
.booking-generalize-push {
  font-size: 16px;
  margin-bottom: 2px;
  span {
    padding: 0 10px;
  }
  .booking-generalize-push-type {
    color: #ff6600;
  }
}
.icon-make {
  float: right;
  margin-top: 2px;
  width: 43px;
  height: 18px;
  text-align: center;
  color: #666666;
  font-size: 12px;
  border: 1px solid #e5d9d0;
  border-radius: 2px;
  background-color: #fae8e2;
}
.icon-laba {
  color: #ff6600;
}
</style>
<style lang="scss">
.el-card__body {
  padding: 0;
}
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  color: #fff !important;
  background: #4a3f91;
  font-size: 18px;
  line-height: 48px;
}
.el-tabs--top.el-tabs--border-card .el-tabs__item {
  width: 34%;
  height: 50px;
  border-top: 4px solid #4a3f91;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  border-top: 4px solid #ea5a29;
}
.is-active {
  color: #4a3f91 !important;
  font-weight: 600;
}
.el-tabs--border-card > .el-tabs__content {
  overflow: visible;
  height: 268px;
}
.el-tabs--border-card {
  box-shadow: 0;
  border: 0;
}
.el-input-number--small {
  width: 80px;
}
.el-input-number--small .el-input-number__decrease,
.el-input-number--small .el-input-number__increase {
  width: 20px;
  font-size: 12px;
}
.el-input-number--small .el-input__inner {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
<template>
  <div class="booking">
    <el-card v-loading="loading" class="box-card">
      <el-tabs type="border-card" v-model="type">
        <el-tab-pane name="订舱" label="订舱">
          <span slot="label">
            <i class="icon iconfont icon-dingdan1"></i> 订舱
          </span>
          <h3>订舱详情</h3>
          <div class="select-box">
            <span class="span_width">起运港</span>
            <input
              id="search_1_1"
              class="search_1_1"
              v-model="inputVal_1_1.cn_name"
              placeholder="请选择起运港"
              @keyup="keyfunc(11)"
            >
          </div>
          <div class="select-box">
            <span class="span_width">目的港</span>
            <input
              id="search_1_2"
              class="search_1_2"
              v-model="inputVal_1_2.cn_name"
              placeholder="请选择起运港"
              @keyup="keyfunc(12)"
            >
          </div>
          <div>
            <button class="book-btn" @click="gobaoguan">查询价格</button>
          </div>
        </el-tab-pane>
        <el-tab-pane name="拖车" label="拖车">
          <span slot="label">
            <i class="icon iconfont icon-huoche"></i> 拖车
          </span>
          <h3>订舱详情</h3>
          <div class="select-box">
            <span class="span_width">起运港</span>
            <input
              id="search_2_1"
              class="search"
              v-model="inputVal_2_1.cn_name"
              placeholder="请选择起运港"
              @keyup="keyfunc(21)"
            >
          </div>
          <div class="select-box">
            <span class="span_width" style="margin-top:7px;">货柜数量</span>
            <div class="select-box-custom">
              <span>&nbsp;20GP:&nbsp;&nbsp;</span>
              <el-input-number
                type="number"
                v-model="inputVal_2_2"
                size="small"
                :min="0"
                :max="99999"
                label="描述文字"
              ></el-input-number>
              <span>&nbsp;40GP:&nbsp;</span>
              <el-input-number
                type="number"
                v-model="inputVal_2_3"
                size="small"
                :min="0"
                :max="99999"
                label="描述文字"
              ></el-input-number>
              <span>&nbsp;40HQ:&nbsp;</span>
              <el-input-number
                type="number"
                v-model="inputVal_2_4"
                size="small"
                :min="0"
                :max="99999"
                label="描述文字"
              ></el-input-number>
            </div>
          </div>
          <div class="select-box">
            拖柜地点
            <input
              id="search_2_5"
              class="search"
              v-model="showtuoguididian"
              placeholder="请选择起运港"
              @keyup="keyfunc(22)"
            >
          </div>
          <button class="book-btn" @click="trailerQuery()">查询价格</button>
        </el-tab-pane>
        <el-tab-pane name="报关" label="报关">
          <span slot="label">
            <i class="icon iconfont icon-dingdan2"></i> 报关
          </span>
          <h3>订舱详情</h3>
          <div class="select-box">
            选择城市
            <input
              id="search_3_1"
              class="search"
              v-model="inputVal_3_1.cn_name"
              placeholder="请选择起运港"
              @keyup="keyfunc(31)"
            >
          </div>
          <button class="book-btn" @click="customsDeclaration()">查询价格</button>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- No.1 -->
    <!-- <transition>
      <div class="searchBox" v-if="showSelectBox">
        <div class="my-swiper" v-swiper:mySwiper="swiperOption2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner, key) in banners" :key="key">{{banner}}</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </transition>-->
    <transition name="el-fade-in">
      <div class="searchBox" v-if="showSelectBox" :class="classObject">
        <div class="my-swiper" v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide red-slide"
              :class="{'slide_active' : activeIndex == index}"
              v-for="(items,index) in tabsData"
              :key="index"
              @click="getprot(items,index)"
              :id="items.id"
            >{{items.cn_name}}</div>
          </div>
        </div>
        <div class="searchBox-box" v-loading="activeLoading">
          <div
            v-for="(items,index) in activeData"
            :key="index"
            class="searchBox-box-items"
            @click="chooseProt(items,index,openBoxObjId)"
          >
            {{items.cn_name}}
            <br>
            {{items.en_name}}
          </div>
        </div>
      </div>
    </transition>
    <div id="showaddress" class="address-box" v-show="isseletetuogui">
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

    <div class="booking-generalize">
      <p>
        <i class="icon iconfont icon-Phone-InTalk"></i>客户服务热线：0757-82581931
      </p>
      <div class="booking-generalize-push">
        <i class="icon iconfont icon-laba"></i>
        <span class="booking-generalize-push-type">海运</span>广东-曼谷
        <span>佛山客户</span>
        <div class="icon-make">成交</div>
      </div>
      <div class="booking-generalize-push">
        <i class="icon iconfont icon-laba"></i>
        <span class="booking-generalize-push-type">海运</span>广东-曼谷
        <span>佛山客户</span>
        <div class="icon-make">成交</div>
      </div>
    </div>
    <div>
      <!-- 成交记录滚动效果区域 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home_booking",
  props: [
    "city",
    "domlist",
    "listData",
    "shipping_route",
    "countryData",
    "initData",
    "cms_list"
  ],
  data() {
    return {
      type: "订舱",
      loading: false,

      inputVal_1_1: { cn_name: "" },
      inputVal_1_2: { cn_name: "" },

      inputVal_2_1: { cn_name: "" },
      inputVal_2_2: 0, //20gp
      inputVal_2_3: 0, //40gp
      inputVal_2_4: 0, //40hq
      inputVal_2_5: {},

      inputVal_3_1: { cn_name: "" },
      // No.1
      showSelectBox: false, //窗体开关
      swiperOption: {
        slidesPerView: 5
      },
      openBoxObjId: "",
      tabsData: [],
      tabsShow: true,
      tabsSelect: [null, null], //存放tabs-下标[1]是为inputVal_1_2单独预留
      activeData: [],
      activeIndex: null,
      activeLoading: false,

      // 地区选择
      showtuoguididian: "",
      showtuoguididian_id: "",
      isseletetuogui: false,
      showactive: 1,

      address_sheng: "",
      address_city: "",
      address_area: "",
      address_zhen: "",

      address_sheng_obj: null,
      address_city_obj: null,
      address_area_obj: null,
      address_zhen_obj: null
    };
  },
  methods: {
    // 搜索模块
    keyfunc(index, type) {
      this.showSelectBox = true;
      let url = this.$store.state.headerUrl + "freight/port";
      let params = {};

      if (index === 11 && this.inputVal_1_1.cn_name !== "") {
        params = {
          keyword: this.inputVal_1_1.cn_name
        };
      } else if (index === 12 && this.inputVal_1_2.cn_name !== "") {
        params = {
          keyword: this.inputVal_1_2.cn_name
        };
      } else if (index === 21 && this.inputVal_2_1.cn_name !== "") {
        params = {
          keyword: this.inputVal_2_1.cn_name
        };
      } else if (index === 31 && this.inputVal_3_1.cn_name !== "") {
        params = {
          keyword: this.inputVal_3_1.cn_name
        };
      } else {
        this.tabsShow = true;
        this.getprot(this.tabsData[0], 0);
        return;
      }
      this.comment
        .axiosPost(url, this.$axios, this.$store, params, "")
        .then(res => {
          this.activeData = res.data.data;
          this.tabsShow = false;
        })
        .catch(error => {
          this.$alert("搜索失败", {
            confirmButtonText: "确定",
            callback: action => {}
          });
        });
    },
    initFn() {
      this.getaddress(0, 0);
      let oBtn_1_1 = document.getElementById("search_1_1");
      let oBtn_1_2 = document.getElementById("search_1_2");
      let oBtn_2_1 = document.getElementById("search_2_1");
      let oBtn_2_5 = document.getElementById("search_2_5");
      let oBtn_3_1 = document.getElementById("search_3_1");
      oBtn_1_1.onclick = () => {
        if (this.showSelectBox !== true) {
          setTimeout(() => {
            this.showSelectBox = !this.showSelectBox;
          }, 0);
        }
        this.tabsData = this.city;
        if (this.city) {
          this.getprot(this.city[0], 0);
        }
        this.openBoxObjId = "search_1_1";
        this.tabsShow = true;
      };
      oBtn_1_2.onclick = () => {
        if (this.showSelectBox !== true) {
          setTimeout(() => {
            this.showSelectBox = !this.showSelectBox;
          }, 0);
        }
        this.tabsData = this.shipping_route;
        // 注释：因为目的港不同，造就数据设置为自定义
        if (this.shipping_route) {
          this.activeData = this.shipping_route[0].recommend_port;
          this.activeIndex = 0;
          this.openBoxObjId = "search_1_2";
        }
      };
      oBtn_2_1.onclick = () => {
        if (this.showSelectBox !== true) {
          setTimeout(() => {
            this.showSelectBox = !this.showSelectBox;
          }, 0);
        }
        this.tabsData = this.city;
        if (this.city) {
          this.getprot(this.city[0], 0);
        }
        this.openBoxObjId = "search_2_1";
        this.tabsShow = true;
      };
      oBtn_2_5.onclick = () => {
        setTimeout(() => {
          this.isseletetuogui = !this.isseletetuogui;
        }, 0);
      };
      oBtn_3_1.onclick = () => {
        if (this.showSelectBox !== true) {
          setTimeout(() => {
            this.showSelectBox = !this.showSelectBox;
          }, 0);
        }
        this.tabsData = this.city;
        if (this.city) {
          this.getprot(this.city[0], 0);
        }
        this.openBoxObjId = "search_3_1";
        this.tabsShow = true;
      };

      // 点击document隐藏
      document.onclick = event => {
        let e = event || window.event; //兼容ie和非ie的event
        let aim = e.srcElement || e.target; //兼容ie和非ie的事件源
        if (this.showSelectBox == true) {
          // 凡是点击到tabss或searchBox范围内的，check都为false。(用作继续判断)
          let check = true;
          this.getParents(aim).forEach(el => {
            if (
              (el.className && el.className.indexOf("tabss") > -1) ||
              (el.className && el.className.indexOf("searchBox") > -1)
            ) {
              check = false;
            }
          });
          if (check && aim.className !== "searchBox") {
            this.showSelectBox = false;
          } else if (check == false && aim.className == "searchBox-box-items") {
            this.showSelectBox = false;
            this.showSelectBox2 = false;
          }
        } else if (this.isseletetuogui == true) {
          let check = true;
          this.getParents(aim).forEach(el => {
            if (
              (el.className && el.className.indexOf("address-box") > -1) ||
              aim.id == "search_2_5"
            ) {
              check = false;
            }
          });
          if (check) {
            this.isseletetuogui = false;
          }
        }
      };
    },
    //获取全部父元素
    getParents(elem) {
      var parents = [];
      while (elem.parentNode) {
        parents.push(elem.parentNode);
        elem = elem.parentNode;
      }
      return parents;
    },
    //获取港口数据
    getprot(obj, index) {
      // 注释：因为目的港不同，造就数据设置为自定义
      if (this.openBoxObjId === "search_1_2") {
        this.tabsSelect[1] = obj.route_id;
        this.activeData = this.shipping_route[index].recommend_port;
        this.activeIndex = index;
        this.activeLoading = false;
        return;
      }
      this.tabsSelect[0] = obj.route_id;
      this.activeLoading = true;
      let url = this.$store.state.headerUrl + "freight/port_by_pid/" + obj.id;
      let tempalert = this.$alert;
      this.comment
        .axiosGet(url, this.$axios, this.$store, {}, tempalert, this)
        .then(resp => {
          this.activeData = resp.data.data;
          this.activeIndex = index;
          this.activeLoading = false;
        });
    },
    //选择港口
    chooseProt(item, num, obj) {
      switch (obj) {
        case "search_1_1":
          this.inputVal_1_1 = item;
          break;
        case "search_1_2":
          this.inputVal_1_2 = item;
          break;
        case "search_2_1":
          this.inputVal_2_1 = item;
          break;
        case "search_2_5":
          this.inputVal_2_5 = item;
          break;
        case "search_3_1":
          this.inputVal_3_1 = item;
          break;
        default:
          break;
      }
    },
    //切换tab
    qietab(index) {
      this.showactive = index;
    },
    // 拖车查询
    trailerQuery() {
      let params = {
        address_sheng: this.address_sheng,
        address_sheng_id: this.address_sheng_id,
        address_city: this.address_city,
        address_city_id: this.address_city_id,
        address_area: this.address_area,
        address_area_id: this.address_area_id,
        address_zhen: this.address_zhen,
        address_zhen_id: this.address_zhen_id,
        num1: this.inputVal_2_2,
        num2: this.inputVal_2_3,
        // num3: this.containers_20hq,
        num4: this.inputVal_2_4,
        id: this.tabsSelect[0],
        id11: this.inputVal_2_1.id,
        name: this.inputVal_2_1.cn_name,
        // item: JSON.stringify(this.inputVal_2_1),
        showtuoguididian: this.showtuoguididian,
        showtuoguididian_id: this.showtuoguididian_id,
        showactive: this.showactive
      };
      this.$router.push({ path: "/trailer", query: params });
    },
    customsDeclaration() {
      let params = {
        id: this.tabsSelect[0],
        name: this.inputVal_3_1.cn_name
      };
      this.$router.push({ path: "/customs", query: params });
    },
    //选中选项
    chooseAddress(index, item) {
      if (index === 1) {
        this.address_city_obj = null;
        this.address_area_obj = null;
        this.address_zhen_obj = null;
        this.address_sheng = item.name;
        this.address_city = "";
        this.address_area = "";
        this.address_zhen = "";
        this.address_sheng_id = item.id;
        this.address_city_id = null;
        this.address_area_id = null;
        this.address_zhen_id = null;
        this.getaddress(item.id, 1);
      } else if (index === 2) {
        this.address_area_obj = null;
        this.address_zhen_obj = null;
        this.address_city = item.name;
        this.address_area = "";
        this.address_zhen = "";
        this.address_city_id = item.id;
        this.address_area_id = null;
        this.address_zhen_id = null;
        this.getaddress(item.id, 2);
      } else if (index === 3) {
        this.address_zhen_obj = null;
        this.address_area = item.name;
        this.address_zhen = "";
        this.address_area_id = item.id;
        this.address_zhen_id = null;
        this.getaddress(item.id, 3);
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
    //获取地址
    getaddress(id, index) {
      let url = this.$store.state.headerUrl + "district/" + id;
      this.comment
        .axiosGet(url, this.$axios, this.$store, {}, {}, this)
        .then(res => {
          let data = res.data;
          let address =
            this.address_sheng +
            this.address_city +
            this.address_area +
            this.address_zhen;
          if (data.code === 0) {
            if (index === 0) {
              this.address_sheng_obj = data.data;
            } else if (index === 1) {
              if (data.data.length === 0) {
                this.showtuoguididian_id = id;
                this.showtuoguididian = address;
                this.isseletetuogui = false;
              } else {
                this.address_city_obj = data.data;
                this.showactive = 2;
              }
            } else if (index === 2) {
              if (data.data.length === 0) {
                this.showtuoguididian_id = id;
                this.showtuoguididian =
                  this.address_sheng +
                  this.address_city +
                  this.address_area +
                  this.address_zhen;
                this.isseletetuogui = false;
              } else {
                this.address_area_obj = data.data;
                this.showactive = 3;
              }
            } else if (index === 3) {
              if (data.data.length === 0) {
                this.showtuoguididian_id = id;
                this.showtuoguididian =
                  this.address_sheng +
                  this.address_city +
                  this.address_area +
                  this.address_zhen;
                this.isseletetuogui = false;
              } else {
                this.address_zhen_obj = data.data;
                this.showactive = 4;
              }
            }
          }
        });
    },
    gobaoguan() {
      let params = {
        id1: this.tabsSelect[0],
        id11: this.inputVal_1_1.id,
        name1: this.inputVal_1_1.cn_name,
        id2: this.tabsSelect[1],
        id22: this.inputVal_1_2.id,
        name2: this.inputVal_1_2.cn_name
      };
      this.$router.push({ path: "/cabinOffer", query: params });
    }
  },
  computed: {
    classObject: function() {
      return {
        searchBox1:
          this.openBoxObjId == "search_1_1" ||
          this.openBoxObjId == "search_3_1",
        searchBox2: this.openBoxObjId == "search_1_2",
        searchBox3: this.openBoxObjId == "search_2_1",
        searchBox4: this.openBoxObjId == "search_2_5"
      };
    }
  },
  mounted() {
    this.initFn();
  }
};
</script>

