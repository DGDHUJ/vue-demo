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
  .change-tab{
    margin: 20px 0;padding:15px 20px;background: white;overflow: hidden;
    .change-tab-item{
      float: left;
      width: 200px;
      overflow: hidden;
      border: 1px solid #4A3F91;
      padding: 15px 20px;margin-right: 20px;border-radius: 5px;cursor: pointer;
      font-size: 17px;
      img{
        float: left;
      }
      .change-tab-item-text{
        height: 45px;
        line-height: 45px;
        font-weight: bold;
        margin-left: 65px;
      }
    }
    .change-tab-item:last-of-type{
      float: left;
      width: 210px;
      overflow: hidden;
      border: 1px solid #4A3F91;
      padding: 15px 20px;margin-right: 0px;
      .change-tab-item-text{
        height: 45px;
        line-height: 45px;
        font-weight: bold;
        margin-left: 55px;
      }
    }

    .change-tab-item:active{
      font-size: 18px;
    }
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
    .el-select{
      width: 100% !important;
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
          <!--<el-col :span="8">
            <span>LV:5</span>
            <el-progress :show-text="false" :percentage="50" :stroke-width='12' color="#4a3f91"></el-progress>
          </el-col>
          <el-col :span="8">
            <img src="../../assets/img/gold.png" alt="">
            <span>3888</span>
            <span>Points for</span>
          </el-col>-->
        </el-row>
      </div>
      <div class="change-tab" >
        <div class="change-tab-item" @click="gotemplink(1)">
          <img src="../../assets/img/form3-02.jpg" height="48" width="48"/>
          <p class="change-tab-item-text" >海运订舱</p>
        </div>
        <div class="change-tab-item" @click="gotemplink(2)">
          <img  src="../../assets/img/form3-01.jpg" height="48" width="53"/>
          <p class="change-tab-item-text">拖车下单</p>
        </div>
        <div class="change-tab-item" @click="gotemplink(3)">
          <img src="../../assets/img/form3-03.jpg" height="48" width="48"/>
          <p class="change-tab-item-text">委托报关</p>
        </div>
        <div class="change-tab-item" @click="gotemplink(4)">
          <img src="../../assets/img/form3-04.jpg" height="48" width="48"/>
          <p class="change-tab-item-text">委托出口代理</p>
        </div>
      </div>
      <div class="content">
        <p>
          <span>待确认订单</span><span class="num">{{ordercount.wait_confirm}}</span>
          <span>进行中订单</span><span class="num">{{ordercount.pending}}</span>
          <span>待结款订单</span><span class="num">{{ordercount.wait_pay}}</span>
        </p>
        <el-row>
          <el-col :span="8">
            <el-form label-width="100px">
              <el-form-item label="订单类型：">
                <el-select v-model="value1" clearable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <span style="margin:0 20px 0 20px;color: #666">订单日期：</span>
        <el-date-picker v-model="time1" type="date" placeholder="选择日期"></el-date-picker>
        <span style="margin: 0 20px 0 20px;color: #666">至</span>
        <el-date-picker v-model="time2" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="processingOrderlist">
        <div class="title">我的订单-所有类型</div>
        <div class="list">
          <div class="list-header">
            <el-row>
              <el-col :span="4"><div class="grid-content bg-purple">
                订单类型
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                订单编号
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                创建日期
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                订单状态
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                订单金额
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                操作
              </div></el-col>
            </el-row>
          </div>
          <div class="list-content"  >
            <div class="items">
              <el-row v-for="(item,index,key) in listdata.list" :key="key">
                <el-col :span="4"><div class="grid-content bg-purple">
                  <p v-if="item.type ===1">订舱</p>
                  <p v-if="item.type ===2">报关</p>
                  <p v-if="item.type ===3">订舱+报关</p>
                  <p v-if="item.type ===4">拖车</p>
                  <p v-if="item.type ===5">订舱+拖车</p>
                  <p v-if="item.type ===6">报关+拖车</p>
                  <p v-if="item.type ===7">订舱+报关+拖车</p>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                  {{item.sn}}
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                  {{comment.formate('yyyy-MM-dd',new Date(item.create_time*1000))}}
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                  <div v-if="item.status ==='wait_confirm_offer'">待确认订单</div>
                  <div v-if="item.status ==='wait_offer'">议价中的订单</div>
                  <div v-if="item.status ==='in_exec'">进行中</div>
                  <div v-if="item.status ==='wait_pay'" >待结款</div>
                  <div v-if="item.status ==='complete'" >已完成</div>
                  <div v-if="item.status ==='closed'" >已取消</div>
                  <div v-if="item.status ==='check_for_cancel'" >取消中</div>
                  <div v-if="item.status ==='cancel_wait_confirm'" >审核取消的订单</div>
                  <div v-if="item.status ==='check_for_pay'" >付款后待审核</div>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                  ￥{{item.total_price}}
                </div></el-col>
                <el-col :span="4">
                  <div v-if="item.status !=='wait_offer'" class="grid-content bg-purple look" @click="check(item.id,item.sn,item.status)">
                    查看
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="pages">
              <!--<div class="mainpage">首页</div>-->
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
    name:'menberHome',
    data(){
      return{
        listdata:[],
        options: [ {
          value: 'wait_offer',
          label: '议价中的订单'
        },{
          value: 'wait_confirm_offer',
          label: '待确认订单'
        }, {
          value: 'in_exec',
          label: '进行中'
        }, {
        value: 'wait_pay',
        label: '待结款'
      }, {
        value: 'complete',
        label: '已完成'
      }, {
        value: 'closed',
        label: '已取消'
      },{
        value: 'check_for_cancel',
        label: '取消中'
      }],
        value1: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        time1:'',
        time2:'',
        ordercount:{},
        users:{},
        type:'',
        loading:true,
        datastatus1:false,
        datastatus2:false,
        datastatus3:false,
      }
    },
    methods:{
      gotemplink(index){
        if(index === 1){this.$router.push({name:'cabinOffer'})}
        if(index === 2){this.$router.push({name:'trailer'})}
        if(index === 3){this.$router.push({name:'customs'})}
        if(index === 4){this.$router.push({name:'agentOutlet'})}

      },
      check(id,sn,status){
        if(status === 'wait_confirm_offer'){
          this.$router.push({name:'trailerPendingOrder',query:{id:id,sn:sn}})
        }
        if(status === 'in_exec' || status === 'complete'){
          this.$router.push({path:'/member/processingDetial',query:{type:'processinglist',id:id}})
        }
        if(status === 'wait_pay'){
          this.$router.push({path:'/member/processingDetial',query:{type:'processinglist',id:id}})
        }
        if(status === 'closed'){
          this.$router.push({path:'/member/processingDetial',query:{type:'canceled',id:id}})
        }
        if(status === 'cancel_wait_confirm'){
          this.$router.push({name:'member-cancelOrderChecking',query:{id:id}})
        }
        if(status === 'check_for_pay'){
          this.$router.push({path:'/member/processingDetial',query:{type:'processinglist',id:id}})
        }
      },
      //订单数量统计查询接口
      getordercount(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order/get_counts';
        let tempalert = that.$alert;
        that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
          that.ordercount = resp.data.data;
          that.datastatus1 = true;
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
              that.datastatus1 = true;
              return
            }
          });
        })
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
        let url = that.$store.state.headerUrl + 'member/freight_order';
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
            type:that.type,
            status:that.value1,
            start_date:time1,
            end_date:time2,
          }
        let tempalert = that.$alert;
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.listdata = resp.data.data;
            that.datastatus3 = true;
          }
        })
      },

      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
        this.currentpage =val
        this.getlistdata();
      }
    },
    mounted(){
      let that = this;
      that.getordercount();
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
      'datastatus1':function (val){
        if(this.datastatus1&&this.datastatus2&&this.datastatus3){
          this.loading = false
        }
      },
      'datastatus2':function (val){
        if(this.datastatus1&&this.datastatus2&&this.datastatus3){
          this.loading = false
        }
      },
      'datastatus3':function (val){
        if(this.datastatus1&&this.datastatus2&&this.datastatus3){
          this.loading = false
        }else{
          this.loading = true
        }
      }
    }
  }
</script>
