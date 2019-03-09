<style>
.nasoCursor {
  cursor: pointer;
}
.topbar a {
  color: #9d9d9d;
}
</style>
<style lang="scss" scoped>
.topbar {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 999999;
  width: 100%;
  line-height: 40px;
  background: #eeeeee;
  color: #9d9d9d;
  font-size: 14px;
  &-header-box {
    margin: 0 auto;
  }
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #eeeeee;
  }
  .bg-purple {
    background: #eeeeee;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .signout {
    cursor: pointer;
  }
  .topbar a {
    color: #9d9d9d;
  }
  .iconE {
    margin-right: 5px;
  }
  .topbar-left {
    float: left;
  }
  .topbar-right {
    float: right;
    position: relative;
    .touxian {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      overflow: hidden;
      display: inline-block;
      // background-color: #a71d5d;
      position: relative;
      top: 8px;
      line-height: 1;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .topbar-right span {
    margin: 0 10px;
  }
}
.new-msg {
  min-width: 185px;
    width: 100%;
  line-height: 28px;
  background: white;
  position: absolute;
  padding: 0 10px 0 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  left: -100px;
  top: 40px;
  .newMsgnum {
    font-size: 18px;
    color: red;
    margin: 0 5px;
  }
  span {
    cursor: pointer;
    margin: 0 !important;
  }
  i {
    color: red;
    padding: 0 0 0 10px;
    cursor: pointer;
  }
}
.new-msg:before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 110px;
  border-top: 1px solid #ddd;
  top: -4px;
  border-left: solid 6px transparent;
  border-bottom: solid 6px white;
  border-right: solid 6px transparent;
}
</style>
<template>
  <div class="topbar">
    <header class="topbar-header-box">
      <div class="layout">
        <div class="topbar-left">
          <i class="icon iconfont icon-hulianwang iconE"></i>English
        </div>
        <div class="topbar-right">
          <span v-show="!islogin">Hi ! welcome,Please:</span>
          <span v-show="!islogin">
            <nuxt-link :to="{path:'/register/registering'}">Sign Up Free</nuxt-link>
          </span>
          <span v-show="!islogin">/</span>
          <span v-show="!islogin">
            <nuxt-link :to="{path:'/login'}">Login</nuxt-link>
          </span>

          <div class="touxian" v-show="islogin" style>
            <img
              v-if="userdata.avatar !== '' &&
                         userdata.avatar !== null &&
                         userdata.avatar !== undefined"
              :src="userdata.avatar"
              alt
            >
            <img
              v-if="userdata.avatar === '' ||
                        userdata.avatar === null ||
                          userdata.avatar === undefined"
              src="../../assets/img/LOGO_NO_100x100.png"
            >
          </div>
          <div v-show="islogin" class="userID" style="display: inline-block">
            <el-dropdown  @command="signout">
              <span class="el-dropdown-link">
                <!-- {{userdata.nickname}} -->
                {{userdata.nickname || userdata.email}}
                
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <span v-show="islogin">
                    <a class="nasoCursor">Sign Out</a>
                  </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <!-- <span>
            <nuxt-link :to="{path:'/register/registering'}">Be a Supplier</nuxt-link>
          </span>-->
          <!-- <span> <nuxt-link :to="{path:'/help'}">Help</nuxt-link></span> -->
          <div class="new-msg" v-if="msgnum!== null&&msgnum!== 0&&islogin" v-show="$store.state.closenewmsg">
            <!-- <span  @click="gomsglist">您有</span>  -->
            <span @click="gomsglist" class="newMsgnum">&nbsp;{{msgnum}}&nbsp;</span>
            <span @click="gomsglist" v-show="msgnum == 1">New Message</span>
            <span @click="gomsglist" v-show="msgnum > 1">New Messages</span>
            <i @click="closeNewMsg" class="el-icon-error"></i>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "headerbar",
  data() {
    return {
      islogin: false,
      token: "",
      userdata: "",
      msgnum: -1
    };
  },
  methods: {
    signout(v) {

      
      localStorage.removeItem("users");
      this.$store.dispatch("_signOut");
      this.islogin = false;

      this.$router.push("/login");
    },
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
        .then(resp => {
          if (resp.data.code === 10012) {
            tempalert("Your login has expired, please try again.", {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.$router.push("/login");
              }
            });
          } else if (resp.data.code === 0) {
            that.userdata = resp.data.data;
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
    //消息未读数量
    getIsnewMsg() {
     
      let that = this;
      let url = that.$store.state.headerUrl + "message_list";
      let params = {
        page: 1,
        limit: 10,
        status: "replied"
      };
      let tempalert = that.$alert;
      that.comment
        .axiosPost(url, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.msgnum = resp.data.data.total;
            that.stationmessagenum();
           
          }
        });
    },
    //站内消息未读数量
    stationmessagenum(){
      let url = this.$store.state.headerUrl + 'station_msg/unread_cnt';
      this.comment.axiosGet(url,this.$axios,this.$store).then( (resp) => {
              if(resp.data.code === 0 ){
                  this.msgnum = Number(this.msgnum) + Number(resp.data.data.cnt);
                   this.$store.commit("setnewmsg", true);
              }
          }).catch((error)=>{
                 return
          })

    },
    closeNewMsg() {
      this.$store.commit("setnewmsg", false);
    },
    gomsglist() {
      this.$router.push("/member/infoList");
    }
  },
  mounted() {
    // if (Cookies.get("userInfo")) {
    //   let tempuser = Cookies.get("userInfo");
    //   localStorage.setItem("users", tempuser);
    // } else {
    //   localStorage.removeItem("users");
    // }
    if (localStorage.getItem("users")) {
      this.islogin = true;
      this.token = JSON.parse(localStorage.getItem("users")).token;
      this.modifyuserInfo();
      this.getIsnewMsg();
    } else {
      this.islogin = false;
    }
  }
};
</script>

