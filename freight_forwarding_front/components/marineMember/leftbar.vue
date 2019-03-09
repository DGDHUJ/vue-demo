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
          width: 154%;
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
            line-height: 32px;
          }
          .el-submenu__title{
            padding-left: 30px!important;
          }
        }
        .el-submenu .el-menu-item{
          min-width: 0;
        }
      }
    }
  }
</style>
<template>
  <div class="member-bar">
    <div class="tab1">
      <div class="tabs">
        <el-menu
          :default-active="tabslect"
          class="el-menu-vertical-demo"
          @select="handleselect"
          @open="handleOpen"
          @close="handleClose">
          <div class="tab-title" >
            <img src="../../assets/img/hiayun1.png"/>
            <p>订舱订单管理</p>
          </div>
          <el-menu-item index="1">
            <span slot="title">订舱订单</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">对账单</span>
          </el-menu-item>
          <div class="jige"></div>
          <div class="tab-title" style="padding: 25px 0 0 0;">
            <img src="../../assets/img/haiyun2.png"/>
            <p>托运订单管理</p>
          </div>
          <el-menu-item index="3">
            <span slot="title">拖车订单</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">对账单</span>
          </el-menu-item>
          <div class="jige"></div>
          <div class="tab-title" style="padding: 25px 0 0 0;">
            <img src="../../assets/img/haiyun3.png"/>
            <p>报关订单管理</p>
          </div>
          <el-menu-item index="5">
            <span slot="title">报关订单</span>
          </el-menu-item>
          <el-menu-item index="6">
            <span slot="title">对账单</span>
          </el-menu-item>
        </el-menu>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'leftbar',
    data(){
      return{
        tab1value:'会员首页',
        tabslect:"1",
        tab1:[
          {name:'会员首页',path:'/member'},
          {name:'待确认订单',path:'/member'},
          {name:'进行中订单',path:'/member'},
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
       alert(index);
      }
    },
  }
</script>
