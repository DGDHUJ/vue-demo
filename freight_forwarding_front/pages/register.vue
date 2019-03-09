<style lang="scss" scoped>
  .register{
    overflow: hidden;
    background: white;
    .register-content {
      min-height: 600px;
      .register-titleout {
        border-bottom: 1px solid #ddd;
        position: relative;
        overflow: hidden;
        .register-imgin {
          width: 130px;
          float: left;
          margin: 25px 0;
        }
      }
    }
    .footerbar{
      padding: 18px 0;
    }
  }
</style>
<template>
  <section class="container">
    <topheader></topheader>
    <div class="register ">
        <div class="register-content ">
          <div class="register-titleout">
            <!-- <div class="pageouter"></div> -->
              <div class="layout">
                <img class="register-imgin" src="../assets/img/naxinlogo.png"/>
                <p  style="float: right;    float: right;line-height: 98px;" @click="tologin">Already have member account，please click here to login. <i class="icon iconfont icon-zuoyou1"></i></p>
              </div>
            <div class="pageouter"></div>
         </div>
          <router-view></router-view>
        </div>
        <!-- <div class="pageouter"></div> -->
      </div>
    <webfooter></webfooter>
  </section>
</template>

<script>
  import topheader from '../components/comment/topheader.vue'
  import webfooter from '../components/comment/webfooter.vue'

  export default {
    name:'register',
    components: {
      'topheader':topheader,
      'webfooter':webfooter
    },
    data(){
      return{
        email:'',
        password:'',
        repassword:'',
        checked:false
      }
    }
    ,methods:{
      gotwo(){
        this.$router.push('/one/two')
      },
      tohome(){
        this.$router.push('/');
      },
      tologin(){
        this.$router.push('/login');
      }

    }
  }
</script>

<style>

</style>
