<template>
  <div class="footerbar layout">
    <div class="footer-logo"><img class="footer-logo-img" src="../../assets/img/naxinlogo.png" alt=""></div>
    <!--<div :html="initData.cms.contact"></div>-->

    <div class="footerlink">
      <div>
        <span><a href="http://www.getnaso.com/help/4" target="_blank">About Us</a></span>
        |
        <span><a href="http://www.getnaso.com/help/8" target="_blank"> Procurement Process</a></span>
        <!-- | -->
        <!-- <span><a href="" target="_blank"> Supplier Process</a></span> -->
        |
        <span><a href="http://www.getnaso.com/help/10" target="_blank"> Terms of Service</a></span>
        |
        <span><a href="http://www.getnaso.com/inquiry" target="_blank"> Post Buying Leads</a></span>
        <!-- | -->
        <!-- <span><a href="" target="_blank"> Become a Supplier</a></span> -->
        <!-- | -->
        <!-- <span><a href="" target="_blank"> FAQ</a></span> -->
      </div>
      <!-- <div>
        <span><a href=""> Friendship link : Jingdong</a></span>
        |
        <span><a href=""> Xiaomi</a></span>
        |
        <span><a href=""> QQ </a></span>
        |
        <span><a href=""> Suning</a></span>
        |
        <span><a href=""> Taobao</a></span>
        |
        <span><a href=""> Dangdang </a></span>
        |
        <span><a href=""> Apple</a></span>
      </div> -->
    </div>
    <div class="footertime">
      <span> Service Hotline :</span>
      <span class="footertime-num"> +86 0757 82581931 </span>
      <span> 9:00 A.M. - 6:00 P.M.</span>
    </div>
    <div class="footerbanquan">
      <span>2003-2018 getnaso.com All rights reserved.</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'footerbar',
    data(){
      return{
        token:'',
        fooddata:{},
      }
    },
    methods:{
      getinitData(){
         var that = this;
         if(that.comment.cullocalstorage(localStorage.getItem('initDatatime'))){
           localStorage.removeItem('initData');
           that.comment.initData(that.$store,that.$axios).then(function (resp) {
             localStorage.setItem('initData',JSON.stringify(resp.data.data));
             localStorage.setItem('initDatatime',new Date().getTime());
             that.fooddata = JSON.parse(localStorage.getItem('initData'));
           })
         }else{
           that.fooddata =JSON.parse(localStorage.getItem('initData'));
         }
      },
    },
    mounted(){
      if(localStorage.getItem('users')){
        this.token=JSON.parse(localStorage.getItem('users')).token;
      }

      this.getinitData();

    }

  }
</script>
<style scoped>
  .footerbar{
    padding: 35px 0;
    /* background: white; */
  }
  a{
    color: #AEAEAE;
  }
  .footer-logo-img{
    width: 190px;
  }
  .footer-logo{
    width: 100%;
    text-align: center;
  }
  .footerlink{
    text-align: center;
    line-height: 23px;
    font-size: 0.9rem;
    color: #ddd;
  }
  .footerlink a{
    color: #868686;
  }
  .footertime span{
    color: #868686;
  }
  .footertime{
    font-size: 0.9rem;
    text-align: center;
    line-height: 42px;
  }
  .footertime .footertime-num{
    font-size: 1.5rem;
    color: #4B408F;
    font-weight: 600;
  }
  .footerbanquan{
    text-align: center;
    color: #BBBBBB;
  }
</style>
