<style lang="scss" scoped>
  .finishreset-form{
    position:absolute;
    left:50%;
    top:55%;
    text-align: center;
    transform: translate(-50%,-50%);
    line-height: 50px;
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
    .text1{
      font-size: 29px;
    }
    .text2{
      line-height: 20px;
      color: #F1841B;
    }

  }
</style>
<template>
  <div class="finishreset-form">
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
          <div class="step2 numtext numtextative "><p>Resetting Your Password</p></div>
        </div>
        <div class="step-to sstep-to-active">
          <i class="icon iconfont icon-arrow-right-copy-copy"></i>
        </div>
        <div class="step-content">
          <div class="num numative"><p>03</p></div>
          <div class="numtext numtextative"><p>Ok！</p></div>
        </div>
      </div>
    </div>
    <div class="text1"><p>Your Password has been reset!</p></div>
    <div class="text2"><p>You will go back to the Login page in {{times}} seconds</p></div>
  </div>
</template>
<script>
  export default {
    name:'finishreset',
    data(){
      return{
        times:5,
      }
    },
    methods:{

    },
    mounted(){
      window.setInterval(() => {
        this.times--;
        if (this.times === 0) {
          this.$router.push('/login');
        }
      }, 1000)
    }
  }
</script>
