<style lang="scss" scoped>
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
  <div class="registerfinish-form">
    <div><img src="../../../assets/img/finish_register.jpg"/></div>
    <div class="text1"><p>Success!Registration Completed</p></div>
    <div class="text2"><p>Return to the mail homw page after {{times}} s</p></div>
  </div>
</template>
<script>
//  import axios from "../../../.nuxt/axios";

  export default {
    name:'activate',
    data(){
      return{
        times:5,
      }
    },
    methods:{
       Accountche(code){
         var tempalert = this.$alert;
         const loading = this.$loading({
           lock: true,
           text: 'Loading',
           spinner: 'el-icon-loading',
           background: 'rgba(0, 0, 0, 0.7)',
           opacity: 0.5
         });
         var that = this;
         this.$axios.get(this.$store.state.headerUrl+'activate/'+code).then(function (resp) {
           if(resp.data.code===0){
             loading.close();
             window.setInterval(() => {
               this.times--;
               if (this.times === 0) {
                 this.$router.push('/');
               }
             }, 1000)
           }else{
             tempalert(resp.data.msg, {
               confirmButtonText: 'ok',
               callback: action => {
                 loading.close();
                 that.$router.push('/login');

               }
             });
//             alert('激活失败请重试！')
           }
         }).catch(function (error) {

         })
       }
    },mounted() {
      const tempurl = window.location.href;
      const tempcode = tempurl.split('/activate/')[1];

      this.Accountche(tempcode);
    }
  }
</script>
