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
  .marineMemberHome-header{
    margin-top: 40px;
    background: white;
    padding: 20px 20px 40px 20px;
    .title{
      font-size: 1rem;
    }
    .items{
      font-size: 0.875rem;
      p{
        display: inline-block;
        min-width: 90px;
      }
      P:nth-of-type(2){
        margin:0 0 0 50px;
      }
      .el-input{
        width: 25%;
        margin:10px 0;
      }
    }
  }
  .processingOrderlist{
    margin-top: 30px;
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
          .look{
            color:#F08417;
            cursor: pointer;
          }
          .el-row{
            margin:0 0 20px 0;
            .grid-content{
              div{
                height: 20px;
                line-height: 20px;
              }
            }
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
  <section class="container">
    <div class="marineMemberHome-header">
      <div class="title">
        <p>海运商订单管理</p>
      </div>
      <div class="items">
        <p>出发港：</p><el-input v-model="beginprot" placeholder=""></el-input>
        <p>目的港：</p><el-input v-model="endprot" placeholder=""></el-input>
      </div>
      <div class="items">
        <p>出发港：</p><el-date-picker v-model="begindate" type="date" placeholder="日期"></el-date-picker>
        <p>目的港：</p><el-date-picker v-model="enddate" type="date" placeholder="日期"></el-date-picker>
      </div>
    </div>
    <div class="processingOrderlist">
      <div class="list">
        <div class="list-header">
          <el-row>
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
              起运港
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              目的港
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
              订单金额
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
              操作
            </div></el-col>
          </el-row>
        </div>
        <div class="list-content">
          <div class="items">
            <el-row v-for="(item,index,key) in listdata" :key="key">
              <el-col :span="4"><div class="grid-content bg-purple">
                {{item.code}}
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                {{item.date}}
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                {{item.status}}
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <div>{{item.beginprot}}</div>
                <div class="look">{{item.beginprot1}}</div>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <div>{{item.endprot}}</div>
                <div class="look">{{item.endprot1}}</div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                {{item.count}}
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple look" @click="check(item.typeindex)">
                查看
              </div></el-col>
            </el-row>
          </div>
          <div class="pages">
            <el-pagination
              layout="prev, pager, next"
              prev-text="上一页"
              next-text="下一页"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'marineMemberHome',
    data(){
      return{
        listdata:[
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
          {code:123456789445,date:'2018-7-5',status:'报关中',beginprot:'SHEN ZHEN ',beginprot1:'深圳',endprot:'NETHERLANDS',endprot1:'鹿特丹',count:'￥1080',typeindex:1},
        ],
        beginprot:'',
        endprot:'',
        begindate:'',
        enddate:'',
      }
    },
    methods:{
      check(index){
        this.$router.push({path:'/member/processingDetial'})
      }
    },
    mounted(){

    }
  }
</script>
