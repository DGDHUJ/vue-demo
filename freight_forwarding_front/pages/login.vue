<style lang="scss" scoped>
  .point{
    cursor: pointer;
  }
  .login{
    overflow: hidden;
    background: white;
    .login-content{
      margin-top: 20px;
      position: relative;
      overflow: hidden;
      background: white;
      .login-titleout{
        /*line-height: 50px;*/
        background: white;
        .login-imgin{
          float: left;
          width: 130px;
        }
        p{
          color: #F1841B;
          float: right;
          height: 45.55px;
          font-size: 16px;
          line-height: 45.55px;
        }
      }
      .backgroundimg{
        position: relative;
        height:480px;
        min-height: 480px;
        .background-img{
          width: 100%;
          height: 100%;
        }
        .textcontent{
          width: 400px;
          position: absolute;
          padding: 20px;
          top: 135px;
          right: 35%;
          color: white;
          p:nth-of-type(1){
            font-size: 3rem;
          }
          P:nth-of-type(2){
            font-size: 2rem;
          }
        }
        .login-form{
          width: 300px;
          position: absolute;
          padding: 20px;
          top: 40px;
          /*right: 8.66%;*/
          right: 18.66%;
          line-height: 3rem;
          border: 1px solid #ddd;
          background: white;
          .form-title{
            font-size: 18px;
            overflow: hidden;
            img{
              float: left;
              margin-top: 10px;
              margin-right: 10px;
            }
          }
          .form-btn{
            text-align: center;
            color: white;
            background: #4B3F91;
            font-size: 16px;
          }
          .form-link{
            line-height: 20px;
            margin-top: 10px;
            .form-link-p1{
              a{
                font-weight: 600;
              }
            }
            .form-link-p2{
              a{
                color: #F1841B;
                font-weight: 600;
              }

            }
          }
          .form-hr{
            height:1px;
            border-bottom: 1px #ddd solid;
            margin: 9px -20px 0 -20px;
          }
          .form-order-login{
            margin-top: 17px;
          }
        }
      }
    }
    .footerbar{
      position: relative;
      padding: 3% 0;
    }
  }
</style>
<template>
  <section class="container">
    <div class="login">
      <topheader></topheader>
      <div class="login-content ">
        <div style="margin-bottom: 20px">
          <!-- <div class="pageouter"></div> -->
          <div class="login-titleout layout">
            <img @click="gohome" class="login-imgin point" src="../assets/img/naxinlogo.png"/>
            <p style="">欢迎来到纳信环球</p>
          </div>
          <!-- <div class="pageouter"></div> -->
        </div>

        <div class="backgroundimg">
          <img class="background-img" src="../assets/img/login_background.jpg"/>
          <!-- <div class="textcontent">
            <p>LOG IN</p>
            <p>EASY SHOPPING</p>
          </div> -->
          <div class="login-form">
            <div>
              <div class="form-title"><img src="../assets/img/logintouxiang.png" height="27" width="24"/> 登录</div>
              <div ><el-input  type="email" v-model="username" placeholder="请输入账户"></el-input></div>
              <div><el-input  type="password" v-model="userpassword" placeholder="请输入密码"></el-input></div>
              <div>
                <el-checkbox class="point" v-model="checked">记住账号</el-checkbox>
              </div>
              <div class="form-btn point" @click="login">
                <p>登录</p>
              </div>
              <div class="form-link">
                <p class="form-link-p1"><a href="/forgetpassword/resetfirststep">忘记密码?</a> </p>
                <p class="form-link-p2"><a href="/register/registering">新用户? 马上注册</a></p>
              </div>
              <hr class="form-hr">
              <div class="form-order-login">
                <img class="point" src="../assets/img/login_08.jpg"  @click="checkFB_status" height="37" width="49"/>
                <img class="point" src="../assets/img/login_03.jpg"  @click="facebook_login" height="38" width="49"/>
                <img class="point" src="../assets/img/login_04.jpg"  @click="gLogin" height="38" width="42"/>
                <img class="point" src="../assets/img/login_05.jpg"  @click="WeChatLogin" height="37" width="42"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <loginfooter></loginfooter>
    </div>
  </section>
</template>

<script>
  import topheader from '../components/comment/topheader.vue'
  import loginfooter from '../components/comment/loginfooter.vue'
  export default {
     head() {
    return {
      script: [{ src: "https://apis.google.com/js/api:client.js", defer: true }]
    };
  },
    name:'login',
    components: {
      'topheader':topheader,
      'loginfooter':loginfooter
    },
    data () {
      return {
        username:'',
        userpassword:'',
        checked:false,
      }
    }
    ,methods:{
      gohome(){
        this.$router.push('/');
      },
      goback(){
        this.$router.go(-1);
      },
      login() {
        var that = this;
        var tempalert = this.$alert;
        if(that.checked){
          localStorage.setItem('username',that.username);
          localStorage.setItem('userpassword',that.userpassword);
          localStorage.setItem('checked',that.checked);
        }else{
          localStorage.removeItem('username');
          localStorage.removeItem('userpassword');
          localStorage.removeItem('checked');
        }
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(mailReg.test(this.username)){
          var url = that.$store.state.headerUrl+'login';
          var params = {
            "user_name":this.username,
            "password":this.userpassword
          }
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          that.$axios.post(url,params).then(function (resp) {
            if(resp.data.code === 0){
              loading.close();
              that.$store.dispatch("_Information",JSON.stringify(resp.data.data));
              that.gohome();
            }else{
              loading.close();
              tempalert('用户名或密码错误，请重输！', {
                confirmButtonText: 'ok',
              });
            }
          }).catch(function (error) {
            loading.close();
            tempalert('请重输！', {
              confirmButtonText: 'ok',
            });
          })
        }else{
          tempalert('邮箱格式错误，请重输', {
            confirmButtonText: 'ok',
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
          $this.id_token = token;
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
         
          if (resp.data.code === 0) {
             that.$store.dispatch("_Information", JSON.stringify(resp.data.data));
            // localStorage.setItem("users", JSON.stringify(resp.data.data));
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
    mounted(){
      this.username = localStorage.getItem('username');
      this.userpassword = localStorage.getItem('userpassword');
      if(localStorage.getItem('checked')==='true'){
        this.checked = true;
      }else{
        this.checked = false;
      }
    }
  }
</script>
