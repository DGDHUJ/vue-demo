<style scoped lang="scss">
  .member-bar{
    .tab1{
      background: white;

      padding:20px 30px ;
      .tab-title{
        cursor: pointer;
        padding:5px 0;
        img{
          float:left;
        }
        p{
          font-size: 1.2rem;
          font-weight: 600;
          margin-left: 30px;
          color: #4A3F91;
        }
      }
      .tabs{
        .item{
          padding:5px 0;
          cursor: pointer;
          font-size: 0.875rem;
          margin-left: 30px;
        }
        .item-active{
          color: #4A3F91;
        }
        .jige{
          margin-top: 10px;
          height: 30px;
          width: 150%;
          margin-left: -29%;
          min-width: 30px;
          background: #F4F4F4;
          position: relative;
          overflow: hidden;
        }
        .el-menu{
          border-right: solid 0px #e6e6e6;
          .el-menu-item{
            height: 30px;
            line-height: 30px;
            .el-submenu__title{
              padding-left: 30px!important;
              height: 30px!important;
              line-height: 30px!important;
            }
          }
        }
        .el-submenu{
          height: 30px;
          line-height: 30px;
        }
        .el-submenu .el-menu-item{
          min-width: 0;
        }
      }
    }
  }
</style>
<style  lang="scss">
  .member-bar{
    .tabs{
      .el-menu{
        .el-submenu{
          .el-submenu__title{
            height: 30px!important;
            line-height: 30px!important;
          }
        }
      }
    }
  }

</style>
<template>
    <div class="member-bar">
      <div class="tab1">
        <div class="tab-title">
          <img src="../../assets/img/my-member.png" height="17" width="23"/>
          <p>我的会员</p>
        </div>
        <div class="tabs">
          <el-menu
            :default-active="tabslect"
            class="el-menu-vertical-demo"
            @select="handleselect"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
              <span slot="title">会员首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">待确认订单</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">进行中订单</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">待结款订单</span>
            </el-menu-item>
            <el-menu-item index="9">
              <span slot="title">审核中的取消订单</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">已取消订单</span>
            </el-menu-item>
            <el-menu-item index="10">
              <span slot="title">代理出口</span>
            </el-menu-item>
            <div class="jige"></div>
            <div class="tab-title" style="padding: 25px 0 0 0;">
              <img src="../../assets/img/my-member.png" height="17" width="23"/>
              <p>我的会员</p>
            </div>
            <el-menu-item index="6">
              <span slot="title">会员资料</span>
            </el-menu-item>
            <el-menu-item index="8">
              <span slot="title">我的单据证明</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
</template>
<script>
  export  default {
    name:'member-bar',
    data(){
      return{
        tab1value:'会员首页',
        tabslect:"1",
        tab1:[
          {name:'会员首页',path:'/member'},
          {name:'待确认订单',path:'/member'},
          {name:'进行中订单',path:'/member'},
          {name:'待结款订单',path:'/member'},
          {name:'待结款订单',path:'/member'},
          {name:'已取消订单',path:'/member'},
        ],
      }
    },
    methods:{
      handletab(item,index){
        if(item.list){
          item.isshow = !item.isshow;
        }
      },
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      handleselect(index){
        if(index==='1'){
          this.$router.push({path:'/member/menberHome'})
        }
        if(index==='2'){
          this.$router.push({path:'/member/pendingOrderlist'})
        }
        if(index === '3'){
          this.$router.push({path:'/member/processingOrderlist'})
        }
        if(index === '4'){
          this.$router.push({path:'/member/pendingMoney'})
        }
        if(index === '5'){
          this.$router.push({path:'/member/CancOrder'})
        }
        if(index === '6'){
          this.$router.push({path:'/member/menberData'})
        }
        if(index === '7'){
          this.$router.push({path:'/member/statisticsOder'})
        }
        if(index === '8'){
          this.$router.push({path:'/member/myBill'})
        }
        if(index === '9'){
          this.$router.push({path:'/member/cancelingOrderCheckingList'})
        }
        if(index === '10'){
          this.$router.push({path:'/member/outletHome'})
        }
      }

    },
    mounted(){
      this.tabslect = this.comment.checkshowindex(window.location.pathname);

    }

  }
</script>
