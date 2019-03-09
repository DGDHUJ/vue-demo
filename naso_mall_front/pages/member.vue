<style lang="scss" scoped>
  .orderpage{
    overflow: hidden;
    background: white;
    position: relative;
  .orderpage-content{
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    background: white;
    margin-bottom:50px;
  }
  .tabcontent{
    line-height: 40px;
    margin: 0 10%;
  }

  .orderpage-title2{
    border-bottom: 1px solid #ddd;
    font-weight: 600;
    font-size: 1rem;
    color: #4B3F91;
    line-height: 60px;
  }
  .footline{
    height: 6px;
    background: #4B3F91;
  }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
</style>
<style lang="scss">
  .el-breadcrumb__inner.is-link:hover{
    color: #4B3F91;
    cursor: pointer;
  }
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    font-weight: 500;
  }
  .el-breadcrumb{
    font-size: 1rem;
    line-height: 40px;
  .el-breadcrumb__item{
    cursor: pointer;
  .el-breadcrumb__inner{
    cursor: pointer;
  }
  .el-breadcrumb__inner.is-link:hover{
    color: #4B3F91;
  }
  }
  }
</style>
<template>
  <section class="container">
    <div class="orderpage __main">
      <headerbar ></headerbar>
      <div class="orderpage-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <el-row :gutter="0" class="layout">
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="20"><div class="grid-content bg-purple">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/member/allorder'}">Member</el-breadcrumb-item>
              </el-breadcrumb>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        <membercontent :showindex="showindex"></membercontent>
        <div  class="layout" v-if="showchange">
          <el-row :gutter="0">
            
            <el-col :span="24"><div class="grid-content bg-purple orderpage-title2">
              <i class="icon iconfont "><img src="../assets/img/hot_recomment_06.jpg"/></i>
              <span> Recommended products</span>
            </div></el-col>
           
          </el-row>
        </div>
        <commonimgchange v-if="showchange"></commonimgchange>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>
<script>
  import $ from 'jquery/dist/jquery.slim.min'
  import headerbar from '../components/common/headerbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonimgchange from '../components/common/commonimgchange.vue'
  import membercontent from '../components/membercommon/membercontent.vue'
  import righttab from '../components/common/righttab.vue'
  export default {
    name:'member',
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
        showindex:'0',
        token:'',
        showchange:true,
      }
    },
    components:{
      'headerbar': headerbar,
      'footerbar': footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'commonimgchange':commonimgchange,
      'membercontent':membercontent,
      'righttab':righttab,
    },
    mounted(){
      if(window.location.pathname.split('?')[0] ==='/member/negotiatedorderdetail'){
        this.showchange = false;
      }
      this.showindex = this.comment.checkshowindex(window.location.pathname);
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
            this.$router.push({
          path:'/login',
          query:{
            back:'1'
          }
        });
          }
        });
      }
    },
    watch:{
      '$route':function (val,oval) {
        this.showindex = this.comment.checkshowindex(window.location.pathname);
      }
    }
  }
</script>
