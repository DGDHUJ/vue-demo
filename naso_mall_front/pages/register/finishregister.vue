<style lang="scss" scoped>
.registerfinish{
  position: relative;
  width: 100%;
  height: 400px;
}
  .registerfinish-form{
    position:absolute;
    left:50%;
    top:55%;
    width:100%;
    text-align: center;
    transform: translate(-50%,-50%);
    line-height: 50px;
    .text1{
      line-height: 30px;
      font-size: 30px;
    }
    .text2{
      line-height: 30px;
      color: #F1841B;
    }
  }
</style>
<template>
  <div class="registerfinish">
    <div class="registerfinish-form">
      <div><img src="../../assets/img/finish_register.jpg"/></div>
      <div class="text1"><p>Ok! You have already finished the registration.</p></div>
      <div class="text2"><p>You will go back to the Home page in {{times}} seconds</p></div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'finishregister',
    data(){
      return{
        times:5,
      }
    },
    methods:{

    },mounted() {
      window.setInterval(() => {
        this.times--;
        if (this.times === 0) {
          if(this.$route.query.type === '1'){
            this.$router.push({path:'/',query:{type:1}})
          }else{
            this.$router.push({path:'/'})
          }
        }
      }, 1000)
    }
  }
</script>
