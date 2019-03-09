<style lang="scss" scoped>
  .resetsecondstep-form{
    position:absolute;
    left:50%;
    top:55%;
    text-align: center;
    transform: translate(-50%,-50%);
    line-height: 50px;
    .text1{
      line-height: 30px;
      font-size: 30px;
    }
    .text-stepout{
      cursor: pointer;
      text-align: center;
      overflow: hidden;
      margin-top: 10px;
      .text-step{
        display: flex;
        .step-content{
          width:180px;
          .num{
            width: 60px;
            height: 60px;
            border: 1px solid #ddd;
            text-align: center;
            line-height: 60px;
            font-size: 20px;
            font-weight: 600;
            margin: 10px 20px 0 55px;
            border-radius: 50%;
            color: #DDDDDD;
          }
          .numative{
            color:#4B3F91 ;
            border: 1px solid #4B3F91;
          }
          .numtext{
            font-weight: 600;
            color: #DDDDDD;
          }
          .numtextative{
            color:#4B3F91 ;
          }
          .step2{
            margin: 0 -15px;
          }
        }
        .step-to{
          width:50px;
          line-height: 80px;
          color: #DDDDDD;
        }
        .sstep-to-active{
          color:#4B3F91 ;
        }

      }
    }
    .codeout{
      display: flex;
      .getcode{
        width:100%;cursor: pointer
      }
      .getcode:active{
        font-size: 16px;
        color: #4B3F91;
      }
    }
    .step1btn{
      background:#4B3F91;
      color: white;
      margin-top: 10px;
      font-size: 20px;
    }
  }
</style>
<template>
  <div class="resetsecondstep-form">
    <div class="text1"><p>Retrieve Password</p></div>
    <div class="text-stepout">
      <div class="text-step">
        <div class="step-content">
          <div class="num numative"><p>01</p></div>
          <div class="numtext numtextative"><p>Input Your Registered E-mail</p></div>
        </div>
        <div class="step-to sstep-to-active">
          <i class="icon iconfont icon-arrow-right-copy-copy"></i>
        </div>
        <div class="step-content">
          <div class="num numative"><p>02</p></div>
          <div class="step2 numtext  "><p>Resetting Your Password</p></div>
        </div>
        <div class="step-to">
          <i class="icon iconfont icon-arrow-right-copy-copy"></i>
        </div>
        <div class="step-content">
          <div class="num"><p>03</p></div>
          <div class="numtext"><p>Ok！</p></div>
        </div>
      </div>
    </div>
    <div class="codeout"><el-input v-model="code"  placeholder="Enter your code"></el-input> <span class="getcode" @click="sendgetcode">Get the code</span></div>
    <div><el-input v-model="password" type="password" placeholder="Enter your new password"></el-input></div>
    <div><el-input v-model="repassword" type="password" placeholder="Enter your new password again"></el-input></div>
    <div class="step1btn" @click="submitstep"><p>Submit</p></div>
  </div>
</template>
<script>
  export default {
    name:'resetsecondstep',
    data(){
      return{
        reemail:this.$route.query.reemail,
        code:'',
        password:'',
        repassword:'',
      }
    },
    methods:{
      submitstep(){
        var tempalert = this.$alert;
        var resendurl = this.$store.state.headerUrl+'rest_password';
        if(this.code ===''||this.password === ''||this.repassword === ''){
          tempalert('Information is incomplete, Please improve', {
            confirmButtonText: 'ok',
            center:true
          });
        }else{
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          var that = this;
          this.$axios.post(resendurl,
            {
              email:this.reemail,
              code:Number(this.code),
              password:this.password,
              rpassword:this.repassword
            }
          ).then(function (resp) {
            if(resp.data.code===0){
              loading.close();
              that.$router.push('/forgetpassword/finishreset')
            }else{
              loading.close();
              tempalert(resp.data.msg, {
                confirmButtonText: 'ok',
                center:true
              });
            }
          }).catch(function (error) {
            tempalert(error, {
              confirmButtonText: 'ok',
              center:true
            });
          })
        }
      },
      sendgetcode(){
        var tempalert = this.$alert;
        var getcodeurl = this.$store.state.headerUrl+'send_mail_code';
        this.$axios.post(getcodeurl,{email:this.reemail}).then(function (resp) {
          if(resp.data.code===0){
            tempalert('send success!', {
              confirmButtonText: 'ok',
              center:true
            });
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              center:true
            });
          }
        })
      }
    }
    ,mounted(){
      
    }
  }
</script>
