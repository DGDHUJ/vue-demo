<style lang="scss" scoped>
  .successful{
    overflow: hidden;
    background: white;
    .successful-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      height: 73%;
      width: 100%;
      .el-row {
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
          line-height: 3;
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
      .detail{
        text-align: center;margin-top:4rem;
        .p1{
          line-height: 20px;
        }
        .p2{
          line-height: 20px;
          span{
            color:#4B3F91;font-size: 1rem;font-weight: 600;
          }
        }
      }
    }
    .footline{
      height: 6px;
      background: #4B3F91;
      margin-top: 11rem;
    }
    .footerbar{
      position: relative;
      padding: 18px 0;
    }
  }
</style>
<template>
  <section class="container">
    <div class="successful">
      <headerbar></headerbar>
      <div class="successful-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <div ><div class="grid-content bg-purple">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>Home</el-breadcrumb-item>
              <el-breadcrumb-item>Cooking equipment</el-breadcrumb-item>
              <el-breadcrumb-item>Shopping cart</el-breadcrumb-item>
            </el-breadcrumb>
          </div></div>
        </div>
       <div class="detail">
         <img  src="../assets/img/successful_03.png" />
         <p class="p1">The order has been established,please pay the order fee and upload the payment voucher</p>
         <p class="p2">Enter the order page after <span>{{times}}</span> seconds</p>
       </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>

<script>
  import headerbar from '../components/common/headerbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import righttab from '../components/common/righttab.vue'
  export default {
    name:'successfullyordered',
    async asyncData({store}) {
      //菜单
      let category = []
      await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{store}).then(res => {
        category = res.data
      })
      return {category};
    },
    components: {
      'headerbar':headerbar,
      'footerbar':footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'righttab': righttab,
    },
    data(){
      return{
        email:'',
        password:'',
        repassword:'',
        checked:false,
        times:5,
      }
    }
    ,methods:{
      gotwo(){
        this.$router.push('/one/two')
      }
    },
    mounted() {
      window.setInterval(() => {
        this.times--;
        if (this.times === 0) {
          this.$router.push('/member/allorder');
        }
      }, 1000)
    }
  }
</script>

<style>

</style>
