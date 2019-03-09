<template>
  <div>
    <div class="dialog-modal">
      <!-- 根元素，z-index 需要高于父容器其他元素 -->
      <div class="dialog-wrapper" @click="onClose" v-show="isShow"></div>
      <!-- 加载一个具有透明度的背景，使根元素透明，子元素会继承该透明度 -->
      <transition name="drop">
        <div class="dialog-container" v-show="isShow">
          <!-- 模态框容器，z-index 需要高于背景 -->
          <span class="close-btn" @click="onClose">x</span>
          <slot>
            <div class="header-title">
              <i class="iconfont icon-about"></i>
              <span>请先登录之后再进行操作!</span>
            </div>
            <div class="backgroundimg">
              <div class="login-form">
                <div>
                  <div class="form-title">
                    <img src="../../assets/img/logintouxiang.png" height="27" width="24">登录
                  </div>
                  <div>
                    <el-input type="email" v-model="username" placeholder="请输入账号"></el-input>
                  </div>
                  <div>
                    <el-input
                      type="password"
                      v-model="userpassword"
                      placeholder="请输入密码"
                      @keyup.enter.native="login"
                    ></el-input>
                  </div>
                  <div>
                    <el-checkbox class="point cursor" v-model="checked">记住账号</el-checkbox>
                  </div>
                  <!-- <div class="form-btn point cursor" @click="login" >
                    <p>Submit</p>
                  </div>-->
                  <el-button @click="login" :loading="loading" class="form-submit">登录</el-button>
                  <div class="form-link">
                    <p class="form-link-p1">
                      <a href="/forgetpassword/resetfirststep">忘记密码?</a>
                    </p>
                    <p class="form-link-p2">
                      <a href="/register/registering">新用户? 马上注册</a>
                    </p>
                  </div>
                  <hr class="form-hr">
                  <div class="form-order-login">
                    <img
                      class="point cursor"
                      src="../../assets/img/login_08.jpg"
                      height="37"
                      width="49"
                      @click="QQlogin"
                    >
                    <img
                      class="point cursor"
                      src="../../assets/img/login_03.jpg"
                      height="38"
                      width="49"
                      @click="FBlogin"
                    >
                    <img
                      class="point cursor"
                      src="../../assets/img/login_04.jpg"
                      height="38"
                      width="42"
                      @click="gLogin"
                    >
                    <img
                      class="point cursor"
                      src="../../assets/img/login_05.jpg"
                      height="37"
                      width="42"
                      @click="WeChatLogin"
                    >
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [{ src: "https://apis.google.com/js/api:client.js", defer: true,async:true}]
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      username: "",
      userpassword: "",
      checked: "",
      loading: false
    };
  },
  methods: {
    onClose() {
      this.$emit("on-close");
    },
    login() {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (mailReg.test(this.username)) {
        var url = this.$store.state.headerUrl + "login";
        var params = {
          user_name: this.username,
          password: this.userpassword
        };
        this.loading = true;
        this.$axios
          .post(url, params)
          .then(resp => {
            //信息写入 for vuex
           
            if (resp.data.code === 0) {
              this.loading = false;
              this.$store.dispatch(
              "_Information",
              JSON.stringify(resp.data.data)
            );
                if (this.checked) {
                  localStorage.setItem("username", this.username);
                  localStorage.setItem("userpassword", this.userpassword);
                  localStorage.setItem("checked", this.checked);
                } else {
                  localStorage.removeItem("username");
                  localStorage.removeItem("userpassword");
                  localStorage.removeItem("checked");
                }
                // localStorage.setItem("users", JSON.stringify(resp.data.data));
                location.reload();
                //  this.onClose();
              
            } else {
              this.loading = false;
              this.$alert("wrong user name or password!!!!!Please try again", {
                confirmButtonText: "ok"
              });
            }
          })
          .catch(error => {
            this.loading = false;
            this.$alert("Please try again", {
              confirmButtonText: "ok"
            });
          });
      } else {
        this.$alert("Please enter the correct mailbox format", {
          confirmButtonText: "ok"
        });
      }
    },
    QQlogin() {},
    FBlogin() {},
    //谷歌登录
    gLogin() {
      let _this = this
      gapi.load("auth2", () => {
        let auth2 = gapi.auth2.init({
          client_id:
            "122336125624-schs0nlud1mj1i7gn1a7ouq31t0qpqns.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin"
        });

        //登录成功的回调函数
        auth2.signIn().then(() => {
          let token = auth2.currentUser.get().getAuthResponse().id_token;
          let userId = auth2.currentUser
            .get()
            .getBasicProfile()
            .getId();
          _this.id_token = token;
          //把token通过post方法传递给后端验证即可
          _this.gLoginSelf();
        });
      });
    },
    WeChatLogin() {},
    //登录本系统
    gLoginSelf() {
      let url = this.$store.state.headerUrl + "/google/login/" + this.id_token;
      var tempalert = this.$alert;
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then((resp) => {
          //信息写入 for vuex
          
          if (resp.data.code === 0) {
            this.$store.dispatch("_Information", JSON.stringify(resp.data.data));
            // localStorage.setItem("users", JSON.stringify(resp.data.data));
            this.dialogVisible = false;
            // this.onClose();
            location.reload();
          } else {
            tempalert("用户名或密码错误，请重输！", {
              confirmButtonText: "ok"
            });
          }
        })
        .catch((error) => {});
    }
  },
  mounted() {
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
  }
};
</script>
<style lang="scss">
.drop-enter-active {
  transition: all 0.2s;
}
.drop-leave-active {
  transition: all 0.2s;
}
.drop-enter {
  opacity: 1;
  transform: translateY(-50px);
}
.drop-leave-active {
  opacity: 0;
  transform: translateY(-50px);
}

.dialog-modal {
  position: absolute;
  z-index: 5;
}
.dialog-wrapper {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.dialog-wrapper {
  background-color: #eee;
  opacity: 0.5;
}
.dialog-container {
  position: fixed;
  z-index: 80;
  top: 20%;
  left: 50%;
  // width: 50%;
  // margin: 0 auto;
  transform: translate(-50%);
  background-color: #eee;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
span.close-btn {
  padding: 0 5px;
  float: right;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

//登录的样式
.header-title {
  padding: 0px 0 0 22px;
  background: #ff9200;
  color: white;
  height: 35px;
  line-height: 35px;
}
.backgroundimg {
  position: relative;
  .login-form {
    width: 300px;
    padding: 0 20px 20px;
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
    .form-submit {
      width: 100%;
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
</style>