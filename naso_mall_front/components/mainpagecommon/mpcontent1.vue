<style lang="scss" scoped >
.mainpage-content {
  margin-top: 40px;
  position: relative;
  // overflow: hidden;
  background: white;
  min-width: 1000px;
  .content-body {
    .mainpage-content-detail-celan {
      display: none; // 菜单控制

      background: #4b3f91;
      color: white;
      z-index: 99;
      opacity: 0.9;
    }
    .mainpage-content-detail-celan-outer {
      margin: 0 0 30px 10px;
      padding: 10px 0;
    }
    .mainpage-content-detail-celan-listspanouter {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .mainpage-content-detail-celan-listspanouter span {
      margin-right: 15px;
      cursor: pointer;
    }
    .mainpage-content-detail-celan-p {
      font-size: 16px;
      padding-left: 10px;
      cursor: pointer;
    }

    .grid-content {
      min-height: 36px;
    }
    .mainpage-content-detail {
      margin: 0 10%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      position: relative;
    }
    .mainpage-celan-a {
      color: white;
    }
    .mainpage-content-hr {
      margin: 0 10px 0 0;
      border: 0.5px dashed #d0d0d0;
    }
    .mainpage-content-elinput {
      height: 30px;
      margin: 0 10px;
    }
    .fontSize01rem {
      font-size: 0.9rem;
    }
    .celanhr {
      padding: 0;
      margin: 0px;
      height: 3px;
      background: #eeeeee;
    }
    .overflowH {
      overflow: hidden;
    }
    .celantitle {
      margin-left: 1rem;
    }
    .paddingL10 {
      padding-left: 10px;
    }
    .aactive {
      color: #5f53ad !important;
    }
  }
}

.swiper-container {
  width: 100%;
  height: 90px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: 30px;
  line-height: 30px;
}
.el-menu-items {
  display: flex;
  .el-menu-items1 {
    width: 70%;
    .el-menu-items1-title {
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      .items {
        font-size: 16px;
        line-height: 3;
        cursor: pointer;
        nuxt-link {
          color: black;
        }
      }
      .items1 {
        .items1-span {
          /*display: -webkit-inline-box;*/
          .line-a {
            padding: 0 20px;
          }
        }
      }
    }
  }
  .img-ground {
    width: 30%;
    text-align: center;
    img {
      margin-bottom: 15px;
    }
    img:last-of-type {
      margin-bottom: 0px;
    }
  }
}

/*我加的css*/
.el-submenu {
  height: 89px;
}
.el-submenu_title {
  margin: 20px;
}
.el-menu-vertical-demo {
  position: relative;
  top: 45px;
  border-right: 1px solid #5d4f96;
}
.el-select .el-input__inner {
  /*padding-right: 5px!important;*/
  padding-right: 3px;
}
.el-input-group {
  padding: 0 10px;
}

.biglunbo {
  position: relative;
  height: 440px;
}

.mainpage-content-detail {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.mainpage-content-detail-right {
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 99;
  width: 210px;
  height: 100%;
  overflow: hidden;
}
.mainpage-content-detail-right-headerbar {
  display: flex;
  line-height: 40px;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 1rem;
}
.mainpage-content-detail-right-headerbaritem {
  width: 25%;
  text-align: center;
}
.mainpage-content-detail-right-celan {
  background: white;
  border-radius: 3px;
  z-index: 10;
  box-shadow: 0px 0px 2px 1px #d0c8c8;
}
.mainpage-content-detail-right-celan-user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .mainpage-content-detail-right-celan-title {
    vertical-align: top;
    line-height: 40px;
    margin-top: 8px;
    span {
      display: inline-block;
      vertical-align: top;
    }
    i {
      font-size: 32px;
    }
  }
  p {
    width: 70px;
  }
}
.mainpage-content-detail-right-celan-title {
  /*line-height: 40px;*/
  padding-left: 10px;
  font-size: 0.8rem;
  color: #606060;
  overflow: hidden;
  .headPortrat {
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userID {
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    position: relative;
  }
}

.mainpage-content-detail-right-celan-btnground {
  padding-left: 5px;
}
.mainpage-content-detail-right-celan-btn {
  line-height: 25px;
  text-align: center;
  width: 50%;
  margin: 8px 11px;
  border-radius: 3px;
  box-shadow: 0px 0.5px 1px 0;
  cursor: pointer;
  font-size: 12px;
}
.mainpage-content-detail-right-celan-btn11 {
  border: 1px solid;
  text-align: center;
  line-height: 30px;
  background: #4b3f91;
  margin: 4px 10px;
  padding: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.mainpage-content-detail-right-celan-btn12 {
  border: 1px solid;
  text-align: center;
  line-height: 30px;
  background: #f08619;
  margin: 4px 10px;
  padding: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.mainpage-content-detail-right-celan-body {
  line-height: 35px;
  font-size: 0.9rem;
  text-align: center;
  color: #5f5f5f;
  font-weight: 600;
}
.mainpage-content-detail-right-celan-body-floatL {
  float: left;
  margin-left: 15px;
  cursor: pointer;
}
.mainpage-content-detail-right-celan-body-floatR {
  float: right;
  margin-right: 15px;
  cursor: pointer;
}
.mainpage-content-detail-right-celan-content {
  /*line-height: 25px;*/
  /* height:170px;
           overflow: hidden;*/
  color: #858585;
  position: relative;
}
</style>
<style>
.mainpage-content-detail .el-input-group__prepend {
  width: 38%;
  padding: 0 14px;
}
.mainpage-content-detail .el-input-group__prepend .el-select {
  margin: 0 -16px;
}
.mainpage-content-detail .el-input--suffix .el-input__inner {
  padding-right: 20px;
}
.mainpage-content-detail .el-input-group > .el-input__inner {
  font-size: 12px;
}

.biglunbo .el-carousel__container {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 1950px;
}
.biglunbo .el-carousel__arrow--left {
  left: 16%;
}
.biglunbo .el-carousel__arrow--right {
  left: 82%;
}
.biglunbo .el-carousel__container .el-carousel__item img {
  width: 1945px;
  height: 440px;
}
/* 右侧登录框 */

/* banner 中间切换键 */
.el-carousel__indicator {
  padding: 12px 8px;
}
.el-carousel__indicator .el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background: #fff;
}
.is-active .el-carousel__button {
  background: #4b3f91 !important;
}
.lunbo-index{
  z-index: 9;
}
</style>
<template>
  <div class="mainpage-content">
    <commonheader @upup="updatedata"></commonheader>
    <commonheaderbar :category="category"></commonheaderbar>



    <div class="biglunbo">
      <el-carousel class="lunbo-index" :interval="6000" height="440px" arrow="always">
        <el-carousel-item :key="item.id" v-for="item in top_banner_list">
          <div v-html="item.content"></div>
        </el-carousel-item>
      </el-carousel>


      <div class="layout mainpage-content-detail">
        <div class="mainpage-content-detail-right">
          <div class="mainpage-content-detail-right-celan">
            <div class="mainpage-content-detail-right-celan-title" v-show="islogin">
              <div class="headPortrat">
                <img v-if="userdata.avatar !== '' &&
                         userdata.avatar !== null &&
                         userdata.avatar !== undefined"
                  :src="userdata.avatar"
                  alt
                >
                <img v-if="userdata.avatar === '' ||
                        userdata.avatar === null ||
                          userdata.avatar === undefined"
                  src="../../assets/img/LOGO_NO_100x100.png"
                >
              </div>

              <div style="float: left;margin:20px 0 0 10px">
                <p>Hi !</p>
                <p>{{userdata.nickname || userdata.email}}</p>
              </div>
            </div>
            <div class="mainpage-content-detail-right-celan-user">
              <div class="mainpage-content-detail-right-celan-title" v-show="!islogin">
                <i class="iconfont icon-touxiang"></i>
                <span>Hi! Welcome</span>
              </div>
              <div class="mainpage-content-detail-right-celan-btnground" v-show="!islogin">
                <p class="mainpage-content-detail-right-celan-btn aactive">
                  <nuxt-link :to="{path: '/register/registering'}">Sign Up</nuxt-link>
                </p>
                <p class="mainpage-content-detail-right-celan-btn">
                  <nuxt-link :to="{path:'/login'}">Login</nuxt-link>
                </p>
              </div>
            </div>
            <hr>
            <div>
              <div
                style="margin: 4px 0"
                class="mainpage-content-detail-right-celan-title"
              >Get the Quotation</div>
              <el-input
                placeholder=""
                size="mini"
                v-model="input"
                class="input-with-select"
              >
                <el-select v-model="type2" slot="prepend" placeholder="contact">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-input>
              <div class="mainpage-content-detail-right-celan-btn11">Contact Us.</div>
              <div
                class="mainpage-content-detail-right-celan-btn12"
                onclick="$crisp.push(['do', 'chat:open'])"
              >Let's Chat Now!</div>
            </div>
            <hr class="celanhr">
            <div>
              <div class="mainpage-content-detail-right-celan-body">Latest Transactions</div>
              <div class="mainpage-content-detail-right-celan-content">
                <div>
                  <p class="overflowH">
                    <span class="mainpage-content-detail-right-celan-body-floatL">Account</span>
                    <span class="mainpage-content-detail-right-celan-body-floatR">Turnover</span>
                  </p>
                </div>

                <div class="swiper-container swiper-container-vertical">
                  <!-- <div class="swiper-wrapper" >
                    <div class="swiper-slide"  v-for="item in 10" :key="item">
                      <p class="overflowH">
                        <span class="mainpage-content-detail-right-celan-body-floatL">Ke.......n</span>
                        <span
                          class="mainpage-content-detail-right-celan-body-floatR"
                        >
                        {{100*Math.round(Math.random()*10)}}
                        </span>
                      </p>
                    </div>
                  </div> -->
                  <div class="swiper-wrapper"  v-swiper:mySwiper="swiperOption">
                    
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="item in 10" :key="item">
                        <span class="mainpage-content-detail-right-celan-body-floatL">Ke.......n</span>
                        <span
                          class="mainpage-content-detail-right-celan-body-floatR"
                        >
                        {{100*Math.round(Math.random()*10)}}
                        </span>
                      </div>
                    </div>
                    <!-- <div class="swiper-slide"  v-for="item in 10" :key="item">
                      <p class="overflowH">
                        <span class="mainpage-content-detail-right-celan-body-floatL">Ke.......n</span>
                        <span
                          class="mainpage-content-detail-right-celan-body-floatR"
                        >
                        {{100*Math.round(Math.random()*10)}}
                        </span>
                      </p>
                    </div> -->
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-body __main"></div>
  </div>
</template>
<script>
import commonheader from "../common/commonheader.vue";
import commonheaderbar from "../common/commonheaderbar.vue";
import $ from "jquery/dist/jquery.slim.min";
// import Swiper from "swiper/dist/js/swiper.min";
// import Swiper from '~/plugins/swiper2.7.6/idangerous.swiper.min.js'
// import '~/plugins/swiper2.7.6/idangerous.swiper.css'
// import "swiper/dist/css/swiper.css";
export default {
  name: "mpcontent1",
  props: ["top_banner_list", "categorydata", "category"],
  data() {
    return {
      token: "",
      imglist: ["1", "2", "3"],
      input: "",
      isCollapse: true,
      keyword: "",
      select: "",
      type2: "Wechat",
      options: [
        {
          value: "选项1",
          label: "Wechat"
        },
        {
          value: "选项2",
          label: "Skype"
        },
        {
          value: "选项3",
          label: "WhatsApp"
        },
        {
          value: "选项4",
          label: "Facebook"
        },
        {
          value: "选项5",
          label: "Email"
        }
      ],
      islogin: false,
      userdata: "",
      avatar: "",
      mouseteen: false,
      
      swiperOption: {
        mode: "vertical",
        slidesPerView: 3,
        loop: true,
        autoplay: 2500
      }
    };
  },
  methods: {
    updatedata(searchkeyword) {
      this.keyword = searchkeyword;
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    goproductList() {},
    // setswiper() {
    //   var swiper1 = new Swiper(".swiper-container", {
    //     direction: "vertical",
    //     slidesPerView: 3,
    //     loop: true,
    //     autoplay:1000,
    //     speed:1000,
    //   });
    // },
    //      这里是会员信息的接口
    modifyuserInfo() {
      var that = this;
      var modifyUrl = that.$store.state.headerUrl + "member";
      var tempalert = that.$alert;
      const jsonUsers = JSON.parse(localStorage.getItem("users"));
      that.comment
        .axiosGet(modifyUrl, that.$axios, that.$store, {
          headers: { token: jsonUsers.token }
        })
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.userdata = resp.data.data;
          }
          if (resp.data.code === 10012) {
            tempalert("Your login has expired, please try again.", {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.$store.dispatch("_signOut");
                that.$router.push("/login");
              }
            });
          } else if (resp.data.code === 0) {
            localStorage.setItem("users", JSON.stringify(resp.data.data));
            that.users = JSON.parse(localStorage.getItem("users"));
            that.showmsg = "Your nickname has been set successfully .";
            that.setindex = 8;
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "ok",
            center: true,
            callback: action => {
              that.$router.push("/login");
            }
          });
        });
    },
    go() {
      this.mouseteen = true;
    },
    leave() {
      this.mouseteen = false;
    }
  },
  mounted() {

    if (localStorage.getItem("users")) {
      this.islogin = true;
    } else {
      this.islogin = false;
    }

    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
      this.modifyuserInfo();
    }
    // setTimeout(this.setswiper(),1000)
    // this.setswiper();
    //      console.log(localStorage)
  },
  components: {
    commonheader: commonheader,
    commonheaderbar: commonheaderbar
  }
};
</script>

