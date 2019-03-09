<style scoped lang="scss">
  .container{
    font-size: 14px;
  }
  .content_1{
    background: #fff;
    padding: 20px;
    margin-top: 40px;
    .title{
      overflow: hidden;
      img{
        float: left;
      }
      p{
        height: 25px;
        line-height: 24px;
        font-size: 1rem;
        margin: 0 0 0 30px;
        font-weight: 600;
        color: #4a3f91 !important;
      }
    }
    .title2{
      margin: 20px 0 20px 0;
      .cen{
        color: #ec8f3a;
      }
      span:nth-of-type(2){
        margin: 0 50px 0 50px;
      }
    }
  }
  .content_2{
    background: #fff;
    padding: 20px;
    margin-top: 40px;
    position: relative;
    .text{
      position: absolute;
      top: 44%;
      left: 22%;
    }
  }
</style>
<style>

</style>
<template>
  <section class="container">
    <div class="content_1">
      <div class="title">
        <img src="../../assets/img/tongji_icon.png" height="22" width="22"/>
        <p>订单统计</p>
      </div>
      <p class="title2"><span>2018年订单总金额：</span><span class="cen">USD 100000</span><span class="cen">CNY 100000</span></p>

      <div id="main" style="width: 100%;height:300px;"></div>
      <div id="main2" style="width: 100%;height:300px;"></div>
    </div>

    <div class="content_2">
      <div id="main3" style="width: 100%;height:300px;"></div>
      <div class="text">
        <div>订单总数：<span>100</span>单</div>
        <div>订舱：<span>50</span>单</div>
        <div>拖车：<span>25</span>单</div>
        <div>拖车：<span>25</span>单</div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'statisticsOder',
    data(){
      return{

      }
    },
    methods:{
      aa(){
       var myChart = this.$echarts.init(document.getElementById('main'));
       let option = {
          xAxis: {
//            这个是加箭头
            axisLine:{
              symbol:['none','arrow']
            },

            type: 'category',
            boundaryGap : false,

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
            data: [820, 932],
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
            data: [820, 932],
            type: 'line'
          }]
        };
        myChart2.setOption(option2);
      },


      cc(){
        var myChart3 = this.$echarts.init(document.getElementById('main3'));
        let option3 = {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['订舱','拖车','报关']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:50, name:'订舱'},
                {value:25, name:'拖车'},
                {value:25, name:'报关'},

              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
              },

//              显示百分百
              label:{           //饼图图形上的文本标签
                normal:{
                  show:true,
                  position:'inner', //标签的位置
                  textStyle : {
                    fontWeight : 300 ,
                    fontSize : 16,    //文字的字体大小
                  },
//                  formatter:'{d}%'这个是单单指百分百
                  formatter: '{b}\n{d}%'
                }
              },



            }
          ]
        };
        myChart3.setOption(option3);
      },

    },
    mounted(){
      this.aa();
      this.bb();
      this.cc();

    }
  }
</script>
