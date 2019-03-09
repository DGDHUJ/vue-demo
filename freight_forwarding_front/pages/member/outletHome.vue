
<style scoped lang="scss">
  .menberHeader{
    margin-top: 40px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    padding: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    .el-row .el-col:nth-of-type(1){
      overflow: hidden;
      div{
        float: left;
        color: #666;
        margin-left: 10px;
        p:first-of-type{
          margin-top: 10px;
        }
      }
    }
    .el-row .el-col:nth-of-type(2){
      margin-top: 20px;
      overflow: hidden;
      span{
        float: left;
        margin-right: 10px;
      }
    }
    .el-row .el-col:nth-of-type(3){
      margin-top: 20px;
      img{
        margin-right: 10px;
      }
      span:nth-of-type(1){
        margin-right: 20px;
      }
    }
  }
  .addnew{
    height: 40px;line-height: 40px;margin: 20px 0;text-align: center;font-size: 16px;background: white;cursor: pointer;color: #F08417;
  }
  .addnew:active{
    font-size: 17px;
  }
  .content{
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #dcdcdc;
    p span{
      color: #666;
    }
    p .num{
      color: #f08519;
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
      margin-right: 70px;
    }
    .el-row{
      margin-top:20px;
    }
    .show-span{
      margin:0 20px 0 20px;color: #666
    }
   .shuru{
     margin: 10px 0 20px 0;
     .shuru-span{
       margin:0 20px 0 20px;color: #666
     }
     .shuru-input{
       margin-left:25px;width: 200px
     }
     .shuru-input1{
       margin-left:36px;width: 200px
     }
   }
  }
  .processingOrderlist{
    .title{
      height: 40px;
      line-height: 40px;
      font-size: 1.2rem;
      font-weight: 600;
      color:#4A3F91;
    }
    .list{
      .list-header{
        .grid-content {
          min-height: 40px;
          background: #4A3F91;
          color: white;
          line-height: 40px;
          font-size: 1rem;
          text-align: center;
        }
      }
      .list-content{
        background: white;
        .items{
          min-height: 40px;
          line-height: 40px;
          font-size: 1rem;
          text-align: center;
          padding: 20px 0;
          min-height: 640px;
          .look{
            color:#F08417;
            cursor: pointer;
          }
        }
        .pages{
          text-align: center;
          padding: 0 0 20px 0;
          .mainpage{}
          .el-pagination{

            .el-pager li.active{
              background: #4A3F91;
              color: white;
            }
          }

        }

      }
    }
  }
</style>
<style>
  .el-pager li.active{
    background: #4A3F91;
    color: white;
  }

  .el-progress {
    width: 200px!important;
    float: left !important;
    margin-top: 5px !important;
  }
  .el-progress-bar__outer{
    border-radius: 0px!important;
  }
  .el-progress-bar__inner{
    border-radius: 0px!important;
  }
  .el-progress-bar{
    width: 100%!important;
  }
</style>
<template>
  <section class="container" v-loading="loading">
    <div class="menberHeader" >
      <el-row>
        <el-col :span="12">
          <div><img :src="users.avatar" alt=""></div>
          <div>
            <p>User ID:<span style="color: #333">{{users.nickname}}</span></p>
            <p><span>{{users.email}}</span></p>
          </div>
        </el-col>

      </el-row>
    </div>
    <div class="addnew" @click="goneworder">
      <i class="el-icon-circle-plus-outline"></i>添加新的委托
    </div>
    <div class="content">
      <div class="shuru">
        <span class="shuru-span">订单状态：</span>
        <el-select class="shuru-input" v-model="value1" clearable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="shuru">
        <span class="shuru-span">订单号：</span><el-input class="shuru-input1" v-model="ordersn" placeholder="请输入订单号"></el-input>
      </div>
      <span class="show-span" >订单开始日期：</span>
      <el-date-picker v-model="time1" type="date" placeholder="选择日期"></el-date-picker>
      <span class="show-span">订单结束日期：</span>
      <el-date-picker v-model="time2" type="date" placeholder="选择日期"></el-date-picker>
    </div>
    <div class="processingOrderlist">
      <div class="title">代理出口订单</div>
      <div class="list">
        <div class="list-header">
          <el-row>
            <el-col :span="5"><div class="grid-content bg-purple">
              订单编号
            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">
              创建日期
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              订单状态
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              买家名称
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple">
              关联货代服务
            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">
              操作
            </div></el-col>
          </el-row>
        </div>
        <div class="list-content"  >
          <div class="items" >
            <el-row style="height: 40px" v-for="(item,index) in listdata.list" :key="index">
              <el-col :span="5"><div class="grid-content bg-purple">
                <p >{{item.sn}}</p>
              </div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple">
                <p >{{comment.formate('yyyy-MM-dd',new Date(item.load_time))}}</p>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <p v-if="item.status === 5">已建立</p>
                <p v-if="item.status === 10">出口文件已寄出</p>
                <p v-if="item.status === 15">进行中</p>
                <p v-if="item.status === 20">所有结汇已完成</p>
                <p v-if="item.status === 25">出口退税已完成</p>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <p >{{item.buyer_name}}</p>
              </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <p >{{item.third_order_sn}}&nbsp;</p>
              </div></el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple look" @click="check(item)">
                  查看
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="pages">
            <el-pagination
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              prev-text="上一页"
              next-text="下一页"
              :total="listdata.count">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

  export default {
    name:'outletHome',
    data(){
      return{
        listdata:[],
        options: [ {
          value: '5',
          label: '已建立'
        },{
          value: '10',
          label: '出口文件已寄出'
        }, {
          value: '15',
          label: '进行中'
        }, {
          value: '20',
          label: '所有结汇已完成'
        }, {
          value: '25',
          label: '出口退税已完成'
        }],
        value1: '',
        time1:'',
        time2:'',
        ordercount:{},
        users:{},
        type:'',
        loading:true,
        datastatus2:false,
        datastatus3:false,
        ordersn:'',
      }
    },
    methods:{
      //跳转到详情页面
      check(item){
        this.$router.push({name:'agentOutletDetail',query:{id:item.id}})
      },
      //获取用户信息
      getuserInfo(){
        let that = this;
        let  url = that.$store.state.headerUrl + 'member';
        let temptoken = localStorage.getItem('token');
        let headers = {
          headers:{token:temptoken}
        }
        let tempalert = that.$alert;
        that.$axios.get(url,headers).then(function (resp) {
          if(resp.data.code === 0){
//            localStorage.setItem('users',JSON.stringify(resp.data.data));
            that.users = resp.data.data;
            that.datastatus2 = true;
          }else{
            tempalert('获取用户信息失败，请重新获取', {
              confirmButtonText: 'ok',
              callback: action => {
//                that.getuserInfo();
              }
            });
            return
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: 'ok',
            callback: action => {
//              that.getuserInfo();
            }
          });
          return
        })
      },
      //获取订单列表
      getlistdata(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/export_agent_order';
        let time1 = '';
        let time2 = '';
        that.datastatus3 = false;
        if(that.time1 !== ''&&that.time1 !== null){
          time1 = that.comment.formate('yyyy-MM-dd',new Date(that.time1))
        }
        if(that.time2 !== ''&&that.time2 !== null){
          time2 = that.comment.formate('yyyy-MM-dd',new Date(that.time2))
        }
        let params =
          {
            page:that.currentpage,
            limit:10,
            status:Number(that.value1),
            start_date:time1,
            end_date:time2,
            sn:that.ordersn
          }
        let tempalert = that.$alert;
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.listdata = resp.data.data;
            that.loading = false
          }
        })
      },

      handleCurrentChange(val){
        this.currentpage =val
        this.getlistdata();
      },
      goneworder(){
        this.$router.push({name:'agentOutlet'})
      }
    },
    mounted(){
      let that = this;
      that.getuserInfo();
      that.getlistdata();
    },
    watch:{
      'value1':function (val) {
        this.getlistdata();
      },
      'time2':function (val) {
        this.getlistdata();
      },
      'time1':function (val) {
        this.getlistdata();
      },
      'ordersn':function (val) {
        this.getlistdata();
      },
    }
  }
</script>
