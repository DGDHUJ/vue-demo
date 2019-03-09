<style scoped lang="scss">
  .marineMembercontent{
    .memberCentre-title{
      overflow: hidden;
      height: 40px;
      line-height: 27px;
      font-size: 1.3rem;
      color: #4A3F91;
      font-weight: bold;
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
      display: flex;
      .left-bar{
        //  display: inline-block;
        width: 18%;
        overflow: hidden;
      }
      .right-content{
        //  display: inline-block;
        width: 82%;
        margin-left:20px;
      }
    }
  }

</style>
<template>
  <div>
    <!-- <div class="pageouter"></div> -->
    <div class="layout marineMembercontent">
      <div class="content">
        <div class="left-bar">
          <div class="memberCentre-title" >
            <img src="../../assets/img/member.png" />
            <p>会员中心</p>
          </div>
          <leftbar/>
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
  import leftbar from '../marineMember/leftbar.vue'
  export default {
    name:'marineMembercontent',
    components:{
      leftbar,
    },
    data(){
      return{

      }
    },
    methods:{

    },
  }
</script>
