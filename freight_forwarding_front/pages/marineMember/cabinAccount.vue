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
    font-size: 14px;
    margin-top: 40px;
    background: white;
    padding: 20px 20px 40px 20px;
    .title{
      overflow: hidden;
      font-size: 1rem;
      p{
        color: #4a3f91;
        font-weight: bold;
        float: left;
      }
      .el-button{
        width: 148px;
        background-color: #4a3f91;
        color: #fff;
        float: right;
      }
    }
    .content{
      overflow: hidden;
      margin-top: 10px;
      .items_1{
        width: 14%;;
        float: left;
        margin-right: 3.3%;
      }
      .items_2{
        width: 48%;
        float: left;
        p{
          margin-bottom: 20px;
        }
        .el-date-editor{
          width: 38%;
          margin-right: 2%;
        }
        .el-button{
          width: 20%;
          background-color: #f08519;
          color: #fff;
        }
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
          >div{
            margin-bottom: 20px;
          }
          font-size: 1rem;
          text-align: center;
          padding: 20px 0;
          min-height: 640px;
          div div:nth-of-type(1) .grid-content{
            margin-top: 10px;
          }
          div div:nth-of-type(2) .grid-content{
            margin-top: 10px;
          }
          div div:nth-of-type(4) .grid-content{
            margin-top: 10px;
          }
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
  .canvers{
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
    font-size: 14px;
    width: 100%;
    .title{
      margin: 20px 0 20px 60px;
      .cen{
        color: #ec8f3a;
      }
      span:nth-of-type(2){
        margin: 0 50px 0 50px;
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
        <p>订单统计</p>
        <el-button v-if="!isaskkefu" @click="ask()">联系客服</el-button>
        <el-button v-if="!isaskkefu" @click="ask()">联系客服</el-button>
      </div>
      <div class="content">
        <div class="items_1">
          <span>待结算金额</span>
        </div>
        <div class="items_1">
          USD <span>80000</span>
        </div>
        <div class="items_1">
          CNY <span>80000</span>
        </div>
        <div class="items_2">
          <p>查看其他月份结算情况</p>
          <el-date-picker v-model="year" type="year" placeholder="选择年"></el-date-picker>
          <el-date-picker v-model="month" type="month" placeholder="选择月"></el-date-picker>
          <el-button>确定</el-button>
        </div>
      </div>
    </div>
    <div class="processingOrderlist">
      <div class="list">
        <div class="list-header">
          <el-row>
            <el-col style="width: 20%"><div class="grid-content bg-purple">
              订单编号
            </div></el-col>
            <el-col style="width: 20%"><div class="grid-content bg-purple">
              创建日期
            </div></el-col>
            <el-col style="width: 20%"><div class="grid-content bg-purple">
              订单金额
            </div></el-col>
            <el-col style="width: 20%"><div class="grid-content bg-purple">
              结款方式
            </div></el-col>
            <el-col style="width: 20%"><div class="grid-content bg-purple">
              操作
            </div></el-col>
          </el-row>
        </div>
        <div class="list-content">
          <div class="items">
            <el-row v-for="(item,index,key) in listdata" :key="key">
              <el-col style="width: 20%"><div class="grid-content bg-purple">
                {{item.code}}
              </div></el-col>
              <el-col style="width: 20%"><div class="grid-content bg-purple">
                {{item.date}}
              </div></el-col>
              <el-col style="width: 20%"><div class="grid-content bg-purple">
                <div>
                  CNY {{item.count1}}
                </div>
                <div>
                  USD {{item.count2}}
                </div>
              </div></el-col>
              <el-col style="width: 20%"><div class="grid-content bg-purple">
                <div>{{item.endprot}}/{{item.endprot1}}</div>
              </div></el-col>
              <el-col style="width: 20%">
                <div class="grid-content bg-purple look" @click="check(item.typeindex1)">查看</div>
                <div class="grid-content bg-purple look" @click="check(item.typeindex2)">申请方式</div>
              </el-col>
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
    <div class="canvers">
      <p class="title"><span>2018年订单总金额：</span><span class="cen">USD 100000</span><span class="cen">CNY 100000</span></p>
      <div id="main" style="width: 100%;height:300px;"></div>
      <div id="main2" style="width: 100%;height:300px;"></div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'cabinAccount',
    data(){
      return{
        listdata:[
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
          {code:123456789445,date:'2018-7-5',beginprot1:'深圳',endprot:'次结',endprot1:'月结',count1:'80000',count2:'80001',typeindex:1,typeindex2:1},
        ],
        beginprot:'',
        endprot:'',
        begindate:'',
        enddate:'',
        year: '',
        month: '',
        isaskkefu:false,
      }
    },
    methods:{
      ask(){
        this.isaskkefu = !this.isaskkefu;
        if(this.isaskkefu){
          _MEIQIA('showPanel')
        }else{
          _MEIQIA('hidePanel')
        }
      },
      check(index){
        this.$router.push({path:'/member/processingDetial'})
      },

      aa(){
        var myChart = this.$echarts.init(document.getElementById('main'));
        let option = {
          xAxis: {
//            这个是加箭头
            axisLine:{
              symbol:['none','arrow']
            },

            type: 'category',
//            boundaryGap : false,

            scale: true,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            name:'USD',
            splitLine:{show: false},
            type: 'value',
            axisLine:{
              symbol:['none','arrow']
            },
          },
          series: [{
            color:['#4a3f91'],
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            data: [420, 432, 600],
            type: 'line'
          }]
        };
        myChart.setOption(option);
      },

      bb(){
        var myChart2 = this.$echarts.init(document.getElementById('main2'));
        let option2 = {
          xAxis: {
            axisLine:{
              symbol:['none','arrow']
            },
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            axisLine:{
              symbol:['none','arrow']
            },
            name:'CNY',
            splitLine:{show: false},
            type: 'value'
          },
          series: [{
            color:['#4a3f91'],
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            data: [420, 432, 600],
            type: 'line'
          }]
        };
        myChart2.setOption(option2);
      },

    },
    mounted(){
      this.aa();
      this.bb();
    }
  }
</script>
