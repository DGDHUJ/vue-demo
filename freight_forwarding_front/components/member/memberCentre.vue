<style scoped lang="scss">
  .memberCentre{
    .memberCentre-title{
      overflow: hidden;
      height: 40px;
      line-height: 27px;
      font-size: 1.3rem;
      img{
        float: left;
        margin-top: 2px;
        height:22px;
        width:26px;
      }
      p{
        margin-left:40px;
      }
    }
    .content{
      margin-bottom: 40px;
      // display: flex;
      overflow: hidden;
      .left-bar{
        width: 16%;
        float: left;
      }
      .right-content{
        width: 82%;
        float: left;
        margin-left:20px;
      }
    }
  }
</style>
<template>
  <div  class="layout memberCentre">
    <!-- <div class="pageouter"></div> -->
    <div class="">
      <div class="content">
        <div class="left-bar">
          <div class="memberCentre-title">
            <img src="../../assets/img/member.png" />
            <p>会员中心</p>
          </div>
          <memberbar/>
        </div>
        <div class="right-content">
          <router-view/>
        </div>
      </div>
    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
  import memberbar from '../member/member-bar.vue'
  export  default {
    name:'memberCentre',
    components:{
      memberbar,
    },
    data(){
      return{

      }
    },
    methods:{

    },
    mounted(){

    }

  }
</script>
