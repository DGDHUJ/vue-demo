<template>
  <div>
    <topheader/>
    <contentheader/>
    <div>
      <!-- <div class="pageouter"></div> -->
      <div class="layout" >
        <!--面包屑-->
        <div class="orderConfirm-tab" style="line-height: 50px;height: 50px">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: 50px;height: 50px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/agentOutlet' }">代理出口</el-breadcrumb-item>
            <el-breadcrumb-item>出口商品明细</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="form2">
          <div class="table">
            <div class="form-header">
              <div class="header-item">唛头</div>
              <div class="header-item">商品编码</div>
              <div class="header-item">开票工厂</div>
              <div class="header-item">税号</div>
              <div class="header-item">货物名称</div>
              <div class="header-item">毛重</div>
              <div class="header-item">净重</div>
              <div class="header-item">体积</div>
              <div class="header-item">数量</div>
              <div class="header-item">单位</div>
              <div class="header-item">单价</div>
              <div class="header-item">币制</div>
              <div class="header-item">包装件数</div>
              <div class="header-item">申报要素</div>
              <div class="header-item">报关金额</div>
            </div>
            <div class="form-content">
              <div class="line1" v-for="(item,index) in goods_list" :key="index">
                <div class="line-item">{{item.mark}}</div>
                <div class="line-item">{{item.goods_sn}}</div>
                <div class="line-item">{{item.ticket_factory}}</div>
                <div class="line-item">{{item.duty_paragraph}}</div>
                <div class="line-item">{{item.goods_name}}</div>
                <div class="line-item">{{item.rough_weight}}</div>
                <div class="line-item">{{item.net_weight}}</div>
                <div class="line-item">{{item.volume}}</div>
                <div class="line-item">{{item.num}}</div>
                <div class="line-item">{{item.unit}}</div>
                <div class="line-item">{{item.price}}</div>
                <div class="line-item">{{item.currency}}</div>
                <div class="line-item">{{item.package_num}}</div>
                <div class="line-item">{{item.declare_element}}</div>
                <div class="line-item">{{item.customs_sum}}</div>
              </div>
              <div class="line3">
                <div class="line3-item">小计</div>
                <div class="line3-item">-</div>
                <div class="line3-item">-</div>
                <div class="line3-item">-</div>
                <div class="line3-item">-</div>
                <div class="line3-item">{{countmaozhong}}</div>
                <div class="line3-item">{{countjinzhong}}</div>
                <div class="line3-item">{{counttiji}}</div>
                <div class="line3-item">{{countnum}}</div>
                <div class="line3-item">-</div>
                <div class="line3-item">-</div>
                <div class="line3-item">-</div>
                <div class="line3-item">{{countjiannum}}</div>
                <div class="line3-item">-</div>
                <div class="line3-item">{{countcustoms_sum}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="pageouter"></div> -->
    </div>
    <homeguarantees/>
    <webfooter/>
  </div>
</template>
<script>
  import topheader from '../components/comment/topheader.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  export default {
    name:'breakdown',
    components:{
      topheader:topheader,
      contentheader:contentheader,
      homeguarantees:homeguarantees,
      webfooter:webfooter
    },
    data(){
      return{
        goods_list:[],
        countmaozhong:null,
        countjinzhong:null,
        counttiji:null,
        countnum:null,
        countjiannum:null,
        countcustoms_sum:null,
      }
    },
    methods:{
      _getgoodsList(){
        let that = this;
        let id = that.$route.query.id;
        let tempalert = that.$alert;
        let url = that.$store.state.headerUrl + 'member/export_agent_order_goods/'+id;
        that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code === 0){
            that.goods_list = resp.data.data;
            for(let i = 0;i<that.goods_list.length;i++){
              that.countmaozhong  = that.countmaozhong + Number(that.goods_list[i].rough_weight);
              that.countjinzhong  = that.countjinzhong + Number(that.goods_list[i].net_weight);
              that.counttiji  = that.counttiji + Number(that.goods_list[i].volume);
              that.countnum  = that.countnum + Number(that.goods_list[i].num);
              that.countjiannum  = that.countjiannum + Number(that.goods_list[i].package_num);
              that.countcustoms_sum  = that.countcustoms_sum + Number(that.goods_list[i].customs_sum);
            }
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        })
      },
    },
    mounted(){
      let that = this;
      that._getgoodsList();
    }
  }
</script>
<style scoped lang="scss">
  .form2{
    margin: 0 0 10px 0;background: white;min-height: 263px;
    .table{
      overflow-x: scroll;
      margin-top: 20px;
      .form-header{
        width: 1950px;
        .header-item{
          display: inline-block;
          text-align: center;
          border:0.5px solid #DDD;
          border-right: none;
          line-height: 40px;
          height: 40px;
          background:#4A3F91 ;
          color: white;
          font-size: 14px;
          font-weight: bold;
          width: 130px;
        }
      }
      .form-content{
        width: 1950px;
        .line1{
          width:100%;
          .line-item{
            display: inline-block;
            text-align: center;
            border:0.5px solid #DDD;
            border-right: none;
            line-height: 40px;
            height: 40px;
            font-size: 14px;
            overflow: hidden;
            width: 130px;
          }
          .line-item:last-of-type{
            border-right: 0.5px solid #DDD;
          }
        }
        .line2{
          height: 40px;
          overflow: hidden;
          .line2-item{
            float: left;
            text-align: center;
            border:0.5px solid #DDD;
            border-right: none;
            border-top: none;
            line-height: 40px;
            height: 40px;
            font-size: 14px;
            width: 130px;

          }
          .line2-item:last-of-type{
            border-right: 0.5px solid #DDD;
          }
        }
        .line3{
          height: 40px;
          overflow: hidden;
          .line3-item{
            float: left;
            width: 130px;
            text-align: center;
            border:0.5px solid #DDD;
            border-right: none;
            border-top: none;
            line-height: 40px;
            background: #F1F1F1;
            height: 40px;
            font-size: 14px;
          }
          .line3-item:last-of-type{
            border-right: 0.5px solid #DDD;
          }
        }
      }
    }
  }
</style>
