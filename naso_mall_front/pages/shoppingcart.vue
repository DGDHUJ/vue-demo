<style lang="scss" scoped>
  .shoppingcart{
    overflow: hidden;
    background: white;
    position: relative;
    .shoppingcart-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      margin-bottom: 50px;
      .el-row {
        width: 75.4%;
        min-width: 1200px;
        max-width: 1920px;
        margin: 0 auto;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: white;
      }
      .bg-purple {
        background: white;
        .el-breadcrumb{
          line-height: 30px;
        }
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
    .shoppingcart-foot-title{
      .el-row {
        width: 75.4%;
        min-width: 1200px;
        max-width: 1920px;
        margin: 0 auto;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: white;
      }
      .bg-purple {
        background: white;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
      .orderpage-title2{
        border-bottom: 1px solid #ddd;
        font-weight: 600;
        font-size: 1rem;
        color: #4B3F91;
        line-height: 60px;
      }
    }
    .shoppingcart-commonimgchange{
      margin-bottom: 40px;
    }
    .footline{
      height: 6px;
      background: #4B3F91;
    }
  }
</style>
<template>
  <section class="container">
    <div class="shoppingcart __main">
      <headerbar ></headerbar>
      <div class="shoppingcart-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <div ><div class="grid-content bg-purple">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
              <el-breadcrumb-item :to="{name: 'product-list-cate',query:{'token':token,'limit':30,'page':1}}" >Cooking equipment</el-breadcrumb-item>
              <el-breadcrumb-item>Shopping cart</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </div></div>
        </div>
      </div>
      <div  class="shoppingcart-foot-title">
        <el-row :gutter="0">
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple orderpage-title2">
            <i class="icon iconfont "><img src="../assets/img/hot_recomment_06.jpg"/></i>
            <span> Recommended products</span>
          </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
      <div class="shoppingcart-commonimgchange">
        <commonimgchange></commonimgchange>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
  </section>
</template>
<script>
  import headerbar from '../components/common/headerbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonimgchange from '../components/common/commonimgchange.vue'
  export default {
    name:'shoppingcart',
    async asyncData({store}) {
      //菜单
      let category = []
      await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{store}).then(res => {
        category = res.data
      })
      return {category};
    },
    data(){
      return{
        token:'',
      }
    },

    components:{
      'headerbar': headerbar,
      'footerbar': footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'commonimgchange': commonimgchange,
    },
    mounted(){
      var that = this;
      if(localStorage.getItem('users')){
        this.$store.state.users = JSON.parse(localStorage.getItem('users'));
        this.token = JSON.parse(localStorage.getItem('users')).token;
        this.users =  this.$store.state.users;
      }else{
        var tempalert = this.$alert;
        tempalert('Please log in！', {
          confirmButtonText: 'ok',
          center:true,
          callback: action => {
            this.$router.push('/login');
          }
        });
      }
    },
  }
</script>
