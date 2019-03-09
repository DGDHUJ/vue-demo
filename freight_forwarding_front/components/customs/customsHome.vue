<style scoped lang="scss">
/*.is-checked .el-radio__inner{*/
/*border-color: #4a3f91 !important;*/
/*background: #4a3f91 !important;*/
/*}*/

/*这个是弹出窗*/
/*.showform{*/
/*position: absolute;*/
/*background: white;*/
/*z-index: 110;*/
/*top: 0px;*/
/*left: 25%;*/
/*border: 1px solid #ddd;*/
/*width: 549px;*/
/*padding:0 10px 20px 10px;*/
/*.swiper-container{*/
/*line-height: 40px;*/
/*height: 40px;*/
/*border-bottom: 1px solid #ddd;*/
/*.swiper-slide{*/
/*text-align: center;*/
/*cursor: pointer;*/
/*}*/
/*.swiper-slide-active1{*/
/*border-bottom: 3px solid #4B3F91;*/
/*color: #4B3F91;*/
/*font-weight: 600;*/
/*}*/
/*.swiper-slide-active2{*/
/*border-bottom: 3px solid #4B3F91;*/
/*color: #4B3F91;*/
/*font-weight: 600;*/
/*}*/
/*}*/
/*.port{*/
/*cursor: pointer;*/
/*p{*/
/*width: 33.33%;*/
/*display: inline-block;*/
/*text-align: center;*/
/*padding: 10px 0 0 0;*/
/*}*/
/*}*/
/*}*/

.pagecontenta {
  margin-top: 20px;
}
.orderConfirm {
  min-height: 343px;
  .content {
    position: relative;
    font-size: 14px;

    .box-card_1 {
      overflow: inherit;
      margin: 20px 0 20px 0;
      .title {
        font-size: 18px;
        img {
          float: left;
          margin-top: -2px;
        }
        p {
          margin-left: 40px;
          font-weight: 600;
        }
      }
      .content {
        margin: 20px 0 20px 0;
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
        /*div:first-child{
            margin-bottom: 20px;
          }*/
        .el-input {
          width: 170px;
          margin-left: 34px;
        }
        .el-select {
          width: 170px;
          margin-left: 34px;
        }
        button {
          width: 134px;
          height: 39px;
          border: 0px;
          background-color: #4a3f91;
          cursor: pointer;
          color: #fff;
          margin-left: 40px;
          position: relative;
          top: 1px;
        }
      }
    }

    .box-card_2 {
      margin: 20px 0 20px 0;
      .title {
        font-size: 18px;
        img {
          float: left;
          margin-top: -2px;
        }
        p {
          margin-left: 40px;
          font-weight: 600;
        }
      }
      .content {
        margin: 20px 0 20px 0;
        .title {
          color: #4a3f91;
          font-weight: bold;
        }
        .span {
          margin-top: 10px;
          .span_son {
            margin-left: 60px;
          }
        }
      }
    }

    .box-card_3 {
      margin-bottom: 40px;
      width: 200px;
      float: right;
      font-size: 18px;
      .el-button {
        width: 200px;
        background-color: #f08519;
        color: #fff;
      }
    }

    /*这里是改div变成输入框形式*/
    /*.search{*/
    /*float: left;*/
    /*width: 170px;*/
    /*height: 40px;*/
    /*margin-left: 34px;*/
    /*line-height: 40px;*/
    /*text-indent: 1em;*/
    /*border: 1px solid #dcdcdc;*/
    /*border-radius: 4px;*/
    /*overflow: hidden;*/
    /*cursor: pointer;*/
    /*i{*/
    /*float: right;*/
    /*margin-top:15px;*/
    /*margin-right: 12px;*/
    /*}*/
    /*}*/
  }
}
.showform {
  position: absolute;
  background: white;
  z-index: 999;
  top: 40px;
  left: 1.8%;
  border: 1px solid #ddd;
  width: 600px;
  padding: 0 10px 20px 10px;
  // padding-bottom: 20px;
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
      padding: 20px 0 0 0;
      font-size: 0.93rem;
    }
  }
}
#searchBox1 {
  top: 40px;
  max-height: 233px;
  overflow-y: scroll;
}
.countfee {
  margin-top: 20px;
}
</style>
<template>
  <div class="orderConfirm layout">
    <!-- <div class="pageouter"></div> -->
    <div class="pagecontenta">
      <div class="orderConfirm-tab">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>海运报关</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content" v-loading="loading">
        <!--第1卡片内容-->
        <el-card class="box-card_1">
          <div class="title">
            <img src="../../assets/img/icon1.png" height="30" width="30">
            <p>海运报关</p>
          </div>
          <div class="content">
            <div>
              <input
                id="search1"
                class="search"
                v-model="showbaoguan"
                placeholder="请选择城市"
                @keyup="keyfunc()"
              >
              <i
                id="searchi1"
                style="    margin-left: -45px;padding-top: 14px;"
                :class="{'el-icon-arrow-down':!showchoosecity,'el-icon-arrow-up':showchoosecity}"
              ></i>
              <!--//弹出框-->
              <div id="searchBox1" class="showform" v-if="showchoosecity">
                <div
                  id="searchBox_title1"
                  class="swiper-container"
                  v-show="!iskey"
                  v-swiper:mySwiper="swiperOption"
                >
                  <div class="swiper-wrapper swiper-wrapper0 wrap">
                    <div
                      :class="{'swiper-slide-active1':(item.id === tanguangid1)} "
                      class="swiper-slide swiper-slide0"
                      :id="item.id"
                      :key="key"
                      v-for="(item,index,key) in city"
                      @click="choosecity(item.id)"
                    >{{item.cn_name}}</div>
                  </div>
                </div>
                <div class="port" v-show="!iskey">
                  <p v-for="(item,index,key) in port1" :key="key" @click="choosecity2(item)">
                    <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                    <br>
                    <span>({{item.en_name}}/{{item.countryen_name}})</span>
                  </p>
                </div>
                <div class="port" v-show="iskey">
                  <p v-for="(item,index,key) in keyport" :key="key" @click="choosecity2(item)">
                    <span>{{item.cn_name}}/{{item.countrycn_name}}</span>
                    <br>
                    <span>({{item.en_name}}/{{item.countryen_name}})</span>
                  </p>
                </div>
              </div>
              <button @click="checkprice">查询价格</button>
            </div>
          </div>
        </el-card>
        <el-card class="box-card_2" v-show="baoguanInfo!==null">
          <div class="title">
            <img src="../../assets/img/icon_01.jpg" height="30" width="30">
            <p>海运报关</p>
          </div>
          <div class="content">
            <div>
              <span class="title">相关费用</span>
            </div>
            <div class="span" style="    overflow: hidden;">
              <span style="float: left">报关服务费：</span>
              <span style="float: left">CNY {{baoguanservicefee}}</span>
              <span class="span_son" style="float: left">附加费：</span>
              <div style="float: left">
                <p v-for="(item,index,key)  in surcharge_list" :key="key">
                  <span>{{item.surcharge_cn_name}}:</span>
                  <span>{{item.currency}}</span>&nbsp;
                  <span>{{item.price}}</span>
                </p>
              </div>
            </div>
            <div class="countfee">
              <span>预估费用总计：</span>
              <span>USD&nbsp;&nbsp;&nbsp;{{usdcount}}</span>&nbsp;&nbsp;&nbsp;
              <span>CNY&nbsp;&nbsp;&nbsp;{{baoguanservicefee + cnycount}}</span>
            </div>
          </div>
        </el-card>
        <div style="overflow:hidden;">
          <div class="box-card_3" v-if="baoguanInfo!==null">
            <el-button @click="weituo">立即委托</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="pageouter"></div> -->
    <!--弹出内容-->
    <modal @on-close="closeThis()" :is-show="isShowLogin"></modal>
  </div>
</template>
<script>
// import Swiper from 'swiper/dist/js/swiper.min'
const modal = () => import("~/components/comment/loginModel");
export default {
  name: "customsHome",
  props: ["initData", "countryData"],
  components: {
    modal
  },
  data() {
    return {
      isShowLogin: false,
      input1: "",
      value: "",
      choosecityid: 375402,
      checkedprice: null,
      //基础数据
      city: [],
      freight: null,
      weigh_type: [],
      //报关地点选择
      showchoosecity: false,
      dialogTableVisible: false,
      baoguanitem: {},
      showbaoguan: "",
      iskey: false,
      keyport: [],
      tanguangid1: null,
      port1: [],
      baoguanInfo: null,
      baoguanservicefee: null,
      liandanfee: null,
      cnycount: 0,
      usdcount: 0,
      surcharge_list: [],
      loading: true,
      swiperOption: {
        slidesPerView: 6
        // loop: true,
        // slidesPerGroup: 5
      }
    };
  },
  methods: {
    closeThis() {
      this.isShowLogin = false;
    },
    //登录弹出框的方法
    QQlogin() {},
    FBlogin() {},
    service(name) {
      this.$router.push({ name: name });
    },
    //绑定弹出框
    setswiper() {
      // let swiper0 = new Swiper('.swiper-container0', {
      //   slidesPerView: 6,
      //   spaceBetween: 30,
      //   width: 550,
      //   freeMode : true,
      //   freeModeMinimumVelocity : 1,
      // });
    },
    bindtanchu() {
      let that = this;
      var obj_title1 = document.getElementById("searchBox_title1");
      var obj1 = document.getElementById("searchBox1");
      var oBtn1 = document.getElementById("search1");
      var oBtni1 = document.getElementById("searchi1");
      // swiper2.x覆盖问题
      //     这里是先阻止冒泡
      // obj_title1.onclick = function(e) {
      //   var e = e || window.event;
      //   e.cancelBubble = true;
      // };
      oBtn1.onclick = function() {
        setTimeout(() => {
          that.showchoosecity = !that.showchoosecity;
        }, 0);
      };
      oBtni1.onclick = function() {
        setTimeout(() => {
          that.showchoosecity = !that.showchoosecity;
        }, 0);
      };
      //     下面是点击document隐藏
      document.onclick = event => {
        var e = event || window.event; //兼容ie和非ie的event
        var aim = e.srcElement || e.target; //兼容ie和非ie的事件源
        if (that.showchoosecity == true) {
          let check = false;
          this.getParents(aim).forEach(el => {
            if (el.className && el.className.indexOf("swiper-container") > -1) {
              check = true;
            }
          });

          if (!check && aim != oBtn1 && aim != obj1 && aim != oBtni1) {
            that.showchoosecity = false;
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
    //选择城市
    choosecity(id) {
      this.tanguangid1 = id;
      this.getprot(id);
    },
    choosecity2(item) {
      this.baoguanitem = item;
      this.showbaoguan = item.cn_name;
    },
    checkprice() {
      let that = this;
      that.cnycount = 0;
      that.usdcount = 0;
      let url =
        that.$store.state.headerUrl +
        "freight/customs_declare/goods/" +
        that.baoguanitem.id;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.baoguanInfo = resp.data.data;
            that.baoguanservicefee = that.baoguanInfo.service_fee;
            that.surcharge_list = that.baoguanInfo.surcharge_list;
            if (that.baoguanInfo.surcharge_list !== null) {
              for (var i = 0; i < that.baoguanInfo.surcharge_list.length; i++) {
                if (that.baoguanInfo.surcharge_list[i].currency === "CNY") {
                  that.cnycount =
                    that.cnycount +
                    Number(that.baoguanInfo.surcharge_list[i].price);
                } else {
                  that.usdcount =
                    that.usdcount +
                    Number(that.baoguanInfo.surcharge_list[i].price);
                }
              }
            }
          }
        });
    },
    weituo() {
      if (localStorage.getItem("token")) {
        let that = this;
        let tempalert = that.$alert;
        let url = that.$store.state.headerUrl + "freight_order";
        let params = {
          customs_declare: {
            customs_declare_goods_id: that.baoguanInfo.id
          }
        };
        that.comment
          .axiosPost(url, that.$axios, that.$store, params, tempalert, that)
          .then(function(resp) {
            if (resp.data.code === 0) {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {
                  that.$router.push({ path: "member/pendingOrderlist" });
                  //                that.$router.push({name:'trailerPendingOrder',query:{id:resp.data.data.id,sn:resp.data.data.sn}})
                }
              });
            }
          });
      } else {
        let tempcustomsData = {
          tanguangid1: this.tanguangid1,
          cn_name: this.baoguanitem.cn_name,
          showbaoguan: this.showbaoguan,
          id: this.baoguanitem.id
        };
        localStorage.setItem("customsData", JSON.stringify(tempcustomsData));
        this.isShowLogin = true;
      }
    },
    keyfunc() {
      let that = this;
      that.showchoosecity = true;
      if (that.showbaoguan === "") {
        that.iskey = false;
        that.tanguangid1 = that.city[0].id;
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
                  that.$store.state.countryData[
                    Number(resp.data.data[i].country_id)
                  ].cn_name;
                resp.data.data[i].countryen_name =
                  that.$store.state.countryData[
                    Number(resp.data.data[i].country_id)
                  ].en_name;
              }
              that.keyport = resp.data.data;
              that.iskey = true;
            } else {
              that.keyport = [];
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
  mounted() {
    let that = this;
    that.city = that.initData.city;
    that.tanguangid1 = that.city[0].id;
    that.getprot(that.city[0].id);
    that.freight = that.initData.freight;
    that.weigh_type = that.initData.freight.weigh_type;
    that.$store.commit("SET_TITLE", that.initData.freight.freight_name);
    setTimeout(that.setswiper, 100);
    setTimeout(that.bindtanchu, 500);
    if (localStorage.getItem("customsData")) {
      that.tanguangid1 = JSON.parse(
        localStorage.getItem("customsData")
      ).tanguangid1;
      that.baoguanitem.cn_name = JSON.parse(
        localStorage.getItem("customsData")
      ).cn_name;
      that.showbaoguan = JSON.parse(
        localStorage.getItem("customsData")
      ).showbaoguan;
      that.baoguanitem.id = JSON.parse(localStorage.getItem("customsData")).id;
      that.checkprice();
      localStorage.removeItem("customsData");
    }
    if (that.$route.query.id) {
      that.tanguangid1 = that.$route.query.id;
      that.baoguanitem.cn_name = that.$route.query.name;
      that.showbaoguan = that.$route.query.name;
      that.baoguanitem.id = that.$route.query.id1;
      that.checkprice();
    }
  },
  watch: {
    showchoosecity: function(val) {
      if (!val) {
        this.iskey = false;
        this.keyport = [];
        if (this.showbaoguan !== this.baoguanitem.cn_name) {
          this.baoguanitem = {};
          this.showbaoguan = "";
          this.tanguangid1 = this.city[0].id;
        }
      }
    }
  }
};
</script>
