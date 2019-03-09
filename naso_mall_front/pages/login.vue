
<style lang="scss" scoped>
.point {
  cursor: pointer;
}
.login {
  overflow: hidden;
  background: white;
  .login-content {
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    background: white;
    .login-titleout {
      /*line-height: 50px;*/
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .bg-purple-light {
        background: white;
        .login-title-img {
          overflow: hidden;
          .login-imgout {
            position: relative;
            .login-imgin {
              width: 150px;
              line-height: 60px;
              margin: 25px 0;
            }
          }
        }
        .login-title-text {
          line-height: 110px;
          .login-textout {
            width: 100%;
            text-align: right;
            padding: 0 10px 0 0;
            font-size: 16px;
            color: #f1841b;
          }
        }
      }
      .grid-content {
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
    .backgroundimg {
      position: relative;
      height: 480px;
      min-height: 480px;
      .background-img {
        width: 100%;
        height: 100%;
      }
      .textcontent {
        width: 400px;
        position: absolute;
        padding: 20px;
        top: 135px;
        right: 35%;
        color: white;
        text-shadow: black 0.1em 0.1em 0.5em;
        p:nth-of-type(1) {
          font-size: 3rem;
        }
        p:nth-of-type(2) {
          font-size: 2rem;
        }
      }
      .login-form {
        width: 300px;
        position: absolute;
        padding: 20px;
        top: 40px;
        /*right: 8.66%;*/
        right: 18.66%;
        line-height: 3rem;
        border: 1px solid #ddd;
        background: white;
        .form-title {
          font-size: 18px;
          overflow: hidden;
          img {
            float: left;
            margin-top: 10px;
            margin-right: 10px;
          }
        }
        .form-btn {
          text-align: center;
          color: white;
          background: #4b3f91;
          font-size: 16px;
        }
        .form-link {
          line-height: 20px;
          margin-top: 10px;
          .form-link-p1 {
            a {
              font-weight: 600;
            }
          }
          .form-link-p2 {
            a {
              color: #f1841b;
              font-weight: 600;
            }
          }
        }
        .form-hr {
          height: 1px;
          border-bottom: 1px #ddd solid;
          margin: 9px -20px 0 -20px;
        }
        .form-order-login {
          margin-top: 17px;
        }
      }
    }
  }
  .footerbar {
    position: relative;
    padding: 3% 0;
  }
  #customBtn {
    display: inline-block;
    background: white;
    color: #444;
    width: 190px;
    border-radius: 5px;
    border: thin solid #888;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
  }
  #customBtn:hover {
    cursor: pointer;
  }
  span.label {
    font-family: serif;
    font-weight: normal;
  }
  span.icon {
    background: url("/identity/sign-in/g-normal.png") transparent 5px 50%
      no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
  }
  span.buttonText {
    display: inline-block;
    vertical-align: middle;
    padding-left: 42px;
    padding-right: 42px;
    font-size: 14px;
    font-weight: bold;
    /* Use the Roboto font that is loaded in the <head> */
    font-family: "Roboto", sans-serif;
  }
}
.home-tab{
  position: absolute;
    font-size: 1.2rem;
    right: 15px;
    top: 40px;
}
</style>
<template>
  <section class="container">
    <div class="login __main">
      <headerbar></headerbar>
      <div class="login-content">
        <div class="login-titleout">
          <el-row class="layout">
            <!-- <el-col :span="2"><div class="grid-content bg-purple"></div></el-col> -->
            <el-col :span="5">
              <div class="grid-content bg-purple-light">
                <div class="login-title-img">
                  <div class="login-imgout">
                    <nuxt-link :to="{path:'/'}">
                      <img class="login-imgin" src="../assets/img/naxinlogo.png">
                    </nuxt-link>
                 <nuxt-link class="home-tab" :to="{path:'/'}">
                      <p>Home</p>
                    </nuxt-link>
                  </div>
                    
                </div>
              </div>
            </el-col>
            <el-col :span="19">
              <div class="grid-content bg-purple-light">
                <div class="login-title-text">
                  <div class="login-textout">
                    <p>Welcome to GETnaso</p>
                  </div>
                </div>
              </div>
            </el-col>
            <!-- <el-col :span="2"><div class="grid-content bg-purple"></div></el-col> -->
          </el-row>
        </div>
        <div class="backgroundimg">
          <img v-if="showbackground===''" class="background-img" src="../assets/img/login_background.jpg">
          <img v-if="showbackground!==''" class="background-img" :src="showbackground" alt="">
          <!-- <div class="textcontent">
            <p>LOG IN</p>
            <p>EASY SHOPPING</p>
          </div> -->
          <div class="login-form">
            <div>
              <div class="form-title">
                <img src="../assets/css/img/logintouxiang.png" height="27" width="24">LOGIN
              </div>
              <div>
                <el-input type="email" v-model="username" placeholder="Input Your E-mail"></el-input>
              </div>
              <div>
                <el-input type="password" v-model="userpassword" placeholder="Input Your Password"></el-input>
              </div>
              <div>
                <el-checkbox class="point" v-model="checked">Remember My Account</el-checkbox>
              </div>
              <div class="form-btn point" @click="login">
                <p>Submit</p>
              </div>
              <div class="form-link">
                <p class="form-link-p1">
                  <a href="/forgetpassword/resetfirststep">Forget password?</a>
                </p>
                <p class="form-link-p2">
                  <a href="/register/registering">New User? Free to register now</a>
                </p>
              </div>
              <hr class="form-hr">
              <div class="form-order-login">
                <img
                  class="point"
                  src="../assets/img/login_08.jpg"
                  height="37"
                  width="49"
                  @click="checkFB_status"
                >
                <img
                  class="point"
                  src="../assets/img/login_03.jpg"
                  height="38"
                  width="49"
                  @click="facebook_login"
                >
                <img
                  class="point"
                  src="../assets/img/login_04.jpg"
                  height="38"
                  width="42"
                  @click="gLogin"
                >
                <img class="point" src="../assets/img/login_05.jpg"   @click="WeChatLogin" height="37" width="42">
              </div>
            </div>
          </div>
        </div>
      </div>
      <footerbar></footerbar>
    </div>
  </section>
</template>


<script>
import $ from "jquery/dist/jquery.slim.min";
import comment from "../plugins/comment";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";

export default {
  head() {
    return {
      script: [{ src: "https://apis.google.com/js/api:client.js", defer: true }]
    };
  },
  name: "login",
  components: {
    headerbar: headerbar,
    footerbar: footerbar
  },
  data() {
    return {
      username: "",
      userpassword: "",
      checked: false,
      id_token: null,
      showbackground:""
    };
  },
  methods: {
    tohome() {
      this.$router.push("/");
    },
    login() {
      var that = this;
      var tempalert = this.$alert;
      if (that.checked) {
        localStorage.setItem("username", that.username);
        localStorage.setItem("userpassword", that.userpassword);
        localStorage.setItem("checked", that.checked);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("userpassword");
        localStorage.removeItem("checked");
      }
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (mailReg.test(this.username)) {
        var url = that.$store.state.headerUrl + "login";
        var params = {
          /*  "user_name":"406964108@qq.com",
             "password":"123456",*/
          user_name: this.username,
          password: this.userpassword
        };
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        this.$axios
          .post(url, params)
          .then(resp => {
            //信息写入 for vuex
          
            if (resp.data.code === 0) {
                this.$store.dispatch(
              "_Information",
              JSON.stringify(resp.data.data)
            );
              loading.close();
              // if (that.$route.query.type === "1") {
              //   let token = resp.data.data.token;
              //   window.open("http://127.0.0.1:7777?t=" + token, "_self");
              //   //               window.open('http://f.getnaso.com?token='+token,'_self');
              // } else {
                localStorage.setItem("users", JSON.stringify(resp.data.data));
                //             that.$store.commit('setStorage',JSON.parse(localStorage.getItem('users')));
                if(that.$route.query.back){
                   that.$router.go(-1);
                }else{
  that.tohome();
                }
              
              // }
            } else {
              loading.close();
              tempalert("wrong user name or password!!!!!Please try again", {
                confirmButtonText: "ok"
              });
              //             alert("Please try again")
            }
          })
          .catch(function(error) {
            loading.close();
            tempalert("Please try again", {
              confirmButtonText: "ok"
            });
          });
      } else {
        tempalert("Please enter the correct mailbox format", {
          confirmButtonText: "ok"
        });
      }
    },
    facebook_login() {},
    checkFB_status() {},
     WeChatLogin() {},
    //谷歌登录
    gLogin() {
      let $this = this;
      gapi.load("auth2", function() {
        let auth2 = gapi.auth2.init({
          //          client_id: '886888359245-2j26vjg1ugn96ko3r45f2mucm26us682.apps.googleusercontent.com',
          client_id:
            "122336125624-schs0nlud1mj1i7gn1a7ouq31t0qpqns.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin"
        });

        //登录成功的回调函数
        auth2.signIn().then(function() {
          let token = auth2.currentUser.get().getAuthResponse().id_token;
          let userId = auth2.currentUser
            .get()
            .getBasicProfile()
            .getId();
          // console.log(auth2.currentUser.get().getAuthResponse());
          $this.id_token = token;
          // console.log($this.id_token);
          //把token通过post方法传递给后端验证即可
          $this.gLoginSelf();
        });
      });
    },
    //登录本系统
    gLoginSelf() {
      let that = this;
      let url = that.$store.state.headerUrl + "/google/login/" + that.id_token;
      var tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(function(resp) {
          //信息写入 for vuex
          that.$store.dispatch("_Information", JSON.stringify(resp.data.data));
          if (resp.data.code === 0) {
            localStorage.setItem("users", JSON.stringify(resp.data.data));
               if(that.$route.query.back){
                   that.$router.go(-1);
                }else{
  that.tohome();
                }
          } else {
            tempalert("wrong user name or password!!!!!Please try again", {
              confirmButtonText: "ok"
            });
          }
        })
        .catch(function(error) {});
    }
  },
  mounted() {
    let info = localStorage.getItem("users");
    if (info) {
      this.tohome();
    }
    if (localStorage.getItem("checked") === "true") {
      this.username = localStorage.getItem("username");
      this.userpassword = localStorage.getItem("userpassword");
      this.checked = true;
    } else {
      this.checked = false;
        localStorage.removeItem("username");
        localStorage.removeItem("userpassword");
        localStorage.removeItem("checked");
    }

    if(localStorage.getItem("initData")){
      // console.log( JSON.parse(localStorage.getItem("initData")))
       this.showbackground = JSON.parse(localStorage.getItem("initData")).mall.login_bg
    }
  }
};
</script>

