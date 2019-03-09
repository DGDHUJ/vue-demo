<style lang="scss" scoped>
  .register{
    overflow: hidden;
    background: white;
    .register-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      width: 100%;
      min-height: 500px;
      .register-titleout{
        border-bottom: 1px solid #ddd;
        .el-row {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
          background: white;
          .register-title-img{
            overflow: hidden;
            .register-imgout{
              .register-imgin{
                width: 70%;
                // line-height: 60px;
                margin: 25px 0;
              }
            }
          }
          .register-title-text{
            line-height: 110px;
            .register-textout{
              width:100%;
              text-align: right;
              padding:0 10px 0 0;
              font-size: 16px;
              cursor: pointer;
              i{
                color: #F1841B;
              }
            }
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
    <div class="register">
      <headerbar></headerbar>
      <div class="register-content">
        <div class="register-titleout layout">
            <el-row>
              <el-col :span="4">
                <div class="register-title-img" >
                  <div class="register-imgout" >
                    <nuxt-link :to="{path:'/'}">
                      <img class="register-imgin" src="../assets/img/naxinlogo.png"/>
                    </nuxt-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="19">
                <div class="register-title-text">
                  <div class="register-textout">
                    <p @click="tologin">Already have member account，please click here to login. <i class="icon iconfont icon-zuoyou1"></i></p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        <router-view></router-view>
      </div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>

<script>
  import headerbar from '../components/common/headerbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import righttab from '../components/common/righttab.vue'
  export default {
    name:'register',
    components: {
      'headerbar':headerbar,
      'footerbar':footerbar,
      'righttab':righttab,
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
