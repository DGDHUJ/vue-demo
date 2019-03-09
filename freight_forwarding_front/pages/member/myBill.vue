<style scoped lang="scss">
  .el-row{
    margin-top:20px;
  }
  .processingOrderlist{
    background-color: #fff;
    padding: 20px;
    margin-top: 40px;
    .title{
      height: 40px;
      line-height: 40px;
      font-size: 1.2rem;
      font-weight: 600;
      color:#4A3F91;
      margin-bottom: 20px;
    }
    .form{
      .el-input{
        width: 300px;
        margin: 0 10px;
        font-size: 14px;
      }
      .el-button{
        width: 150px;
        background-color: #f08519;
        color: #fff;
      }
    }
    .p{
      font-size: 14px;
      color: #f08519;
      margin: 20px 0;
      display: block;
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
        border: 1px solid #dcdcdc;
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
</style>
<template>
  <section class="container" v-loading="loading">
    <div class="processingOrderlist">
      <div class="title">我的订单-所有类型</div>
      <div class="form">
        <span>订单号：</span>
        <el-input v-model="keyvalue" placeholder="请输入内容"></el-input>
        <el-button @click="seachBykey">搜索</el-button>
      </div>
      <p class="p">下面是你最近的10张订单，有你需要的吗？</p>
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
        <div class="list-content">
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
                <div v-if="item.status ==='check_for_pay'" >付款后待审核</div>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                ￥{{item.total_price}}
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple look" @click="check(item)">
                查看
              </div></el-col>
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
    name:'myBill',
    data(){
      return{
        currentpage:1,
        listdata:[],
        keyvalue:'',
        loading:true
      }
    },
    methods:{
      check(item){
        this.$router.push({path:'/member/myorderdetails',query:{id:item.id,sn:item.sn}})
      },
      getlistdata(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order';
        that.loading = true;
        let params =
          {
            page:that.currentpage,
            limit:10,
            status:'',
            sn:that.keyvalue,
          }
        let tempalert = that.$alert;
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            that.listdata = resp.data.data;
            that.loading = false;
          }
        })
      },
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
        this.currentpage =val
        this.getlistdata();
      },
      //搜索
      seachBykey(){
        let that = this;
        that.currentpage = 1;
        this.getlistdata();
      }
    },
    mounted(){
      let that = this;
      that.getlistdata();
    }
  }
</script>
