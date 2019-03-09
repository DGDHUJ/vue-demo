<style lang="scss" scoped>
  .resetfirststep-form{
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
            margin: 0 -10px;
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
    .step1btn{
      cursor: pointer;
      background:#4B3F91;
      color: white;
      margin-top: 10px;
      font-size: 20px;
    }
  }
</style>
<template>
  <div class="resetfirststep-form">
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
          <div class="num"><p>02</p></div>
          <div class="step2"><p>Resetting Your Password</p></div>
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
    <div><el-input v-model="emailtext" type="email" placeholder="Input Your Registered E-mail"></el-input></div>
    <div class="step1btn" @click="submitstep"><p>Submit</p></div>
  </div>
</template>
<script>
  export default {
    name:'resetfirststep',
    data(){
      return{
        emailtext:'',
      }
    },
    methods:{
      submitstep(){
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var tempalert = this.$alert;
        if(mailReg.test(this.emailtext)) {
          this.$router.push({name:'forgetpassword-resetsecondstep',query:{reemail:this.emailtext}})
        }else{
          tempalert('Please enter the correct mailbox format', {
            confirmButtonText: 'ok',
          });
        }
      }
    }
  }
</script>
