<style scoped lang="scss">
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
          .el-row{
            margin-bottom: 20px;
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
      <div class="title">待结款订单</div>
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
                <span v-if="item.status==='wait_pay'">待付款</span>
                <span v-if="item.status==='check_for_pay'">付款后待审核</span>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                ￥{{item.total_price}}
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple look" @click="check(item.id)">
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
    name:'pendingMoney',
    data(){
      return{
        listdata:[],
        currentpage:1,
        loading:true,
      }
    },
    methods:{
      check(id){
        this.$router.push({path:'/member/processingDetial',query:{type:'processinglist',id:id}})
      },
      getlistdata(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/freight_order';
        that.loading = true;
        let params =
          {
            page:that.currentpage,
            limit:10,
            status:"wait_pay"
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
      }
    },
    mounted(){
      this.getlistdata();
    }
  }
</script>
