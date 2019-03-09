<style lang="scss" scoped>
  .orderpage{
    overflow: hidden;
    background: white;
    .orderpage-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      margin-bottom:50px;
    }
    .tabcontent{
      line-height: 40px;
    }
    .tabcontent .el-breadcrumb{
      line-height: 40px;
    }
    .orderpage-title{
      font-weight: 600;
      font-size: 1rem;
      color: #4B3F91;
      line-height: 40px;
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
  }

</style>
<template>
  <section class="container">
    <div class="orderpage __main">
      <headerbar ></headerbar>
      <div class="orderpage-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="tabcontent layout">
          <div>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
                <el-breadcrumb-item :to="{name: 'product-list-cate',query:{'limit':30,'page':1}}" >Cooking equipment</el-breadcrumb-item>
                <el-breadcrumb-item>Shopping cart</el-breadcrumb-item>
              </el-breadcrumb>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          </div>
        </div>
        <div>
            <div class="orderpage-title layout">
              <i class="icon iconfont "> <img src="../assets/img/purchase_order.jpg"/></i>
              <span> Purchase Order</span>
            </div>
        </div>
        <orderlist :datalist = "datalist" @datalistupdate="updatelist" ></orderlist>
        <div  class="">
          <div class="orderpage-title2 layout">
              <i class="icon iconfont "><img src="../assets/img/hot_recomment_06.jpg"/></i>
              <span> Recommended products</span>
          </div>
        </div>
        <commonimgchange></commonimgchange>
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
  import orderlist from '../components/ordercommon/orderlist.vue'
  import commonimgchange from '../components/common/commonimgchange.vue'
  import righttab from '../components/common/righttab.vue'
  export default {
    name:'orderpage',
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
        datalist:[],
        token:'',
      }
    },
    methods:{
      //获取暂存列表数据
      getListdata(){
        var that = this;
        let listUrl = that.$store.state.headerUrl+'cart/store';
        let tempalert = that.$alert;
        this.comment.axiosGet(listUrl,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code ===0){
            /*if(resp.data.data !== null){
              for(var i = 0;i<resp.data.data.length;i++){
                resp.data.data[i].ischoosed =0;
              }
            }*/
            that.datalist = resp.data.data;
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              center:true,
              callback: action => {
                that.$router.push('/login');
              }
            });
          }
        })
      },
      updatelist(data){
        this.datalist = data;
      }
    },
    mounted(){
      this.getListdata();
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
    components:{
      'headerbar': headerbar,
      'footerbar': footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'orderlist': orderlist,
      'commonimgchange':commonimgchange,
      'righttab':righttab
    }
  }
</script>
