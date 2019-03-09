<style scoped lang="scss">
  .righttab{
    position: fixed;
    top: 60%;
    right: 20px;
    .content{
      width:80px;
      .kefu1{
        cursor: pointer;
        margin-left:40px;
        background: #4A3F91;width: 40px;height: 40px;border-radius: 5px;
        .kefu1-img{
          width:100%;padding: 10px;height: 40px;
          img{
            width: 100%;
          }
        }
      }
      .kefu2{
        cursor: pointer;
        background: #4A3F91;width: 80px;height: 40px;border-radius: 5px;text-align: center;
        color: white;
        .line1{
          font-size: 10px;
        }
        .line2{
          font-size: 10px;
        }
      }
      .totop{
        cursor: pointer;
        margin-left:40px;
        background: #F08519;width: 40px;height: 40px;border-radius: 5px;margin-top: 20px;
        .totop-img{
          width:100%;padding: 10px;height: 40px;
          img{
            width: 100%;
          }
        }
      }
    }

  }
  .tab_meiqia {
    position: fixed;
    z-index: 999999;
    bottom: 0;
    right: 105px!important;
    width: 21rem;
    height: 32rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    background-color: #fff;
    color: #666;
    .tab_header {
      padding: 0 1rem;
      background-color: #4b3f91;
      color: #fff;
      height: 5rem;
      line-height: 5rem;
      font-size: 14px;
    }
    .tab_body {
      padding: 1rem;
      word-break: break-all;
      line-height: 1.8;
      .ml05r {
        display: inline-block;
        padding: 0.5rem;
      }
    }
    .tab_footer {
      padding: 0 1rem;
      .tab_submit {
        display: inline-block;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        border-radius: 3px;
        font-size: 1rem;
        background-color: #4b3f91;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  #MEIQIA-PANEL-HOLDER{
    right: 105px!important;
  }
</style>
<template>
  <div class="righttab" v-show="isrightbar">
    <div class="content">
      <div @click="show" v-if="!askkefu" class="kefu1">
        <div class="kefu1-img">
          <img src="../../assets/img/kefu.png"/>
        </div>
      </div>
      <div @click="show" v-if="askkefu" class="kefu2">
        <div class="line1">
          <i class="icon iconfont icon-kefu3"></i><span>客服</span>
        </div>
        <div class="line2">9:00 - 17:30</div>
      </div>
      <div @click="totop" class="totop">
        <div class="totop-img">
          <img src="../../assets/img/totop .png"/>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'righttab',
    data(){
      return{
        askkefu:false,
        isrightbar:false,
        positionx:0,
      }
    },
    methods:{
      show(){
        this.askkefu = !this.askkefu;
        if(this.askkefu){
          _MEIQIA('showPanel')
        }else{
          _MEIQIA('hidePanel')
        }
      },
      totop(){

        var scrollToTop = window.setInterval(function() {
          var pos = window.pageYOffset;
          if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
          } else {
            window.clearInterval( scrollToTop );
          }
        }, 16);
        if(this.askkefu === true){
          this.askkefu = false;
        }
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 300 && this.isrightbar === false) {
          this.isrightbar = true;
        }
        if(scrollTop<300 && this.isrightbar === true){
          this.isrightbar = false;
        }
      },


    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>
