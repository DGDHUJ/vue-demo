<style lang="scss" scoped>
  .allorder{
    margin-left:20px;
    .allorder-title{
      line-height: 40px;
      font-size: 1rem;
      color: #4B3F91;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .allorder-content{
      padding:10px 0px;
      margin:10px 0 0 0 ;
      border: 1px solid #ddd;
      .allorder-content-list2{
        line-height: 60px;    margin: 0 20px;display: flex;
        border-bottom:1px solid #ddd;
        .allorder-content-list2-p{
          overflow: hidden;width:100%;font-size:1.1rem;font-weight: 600;color: #4B3F91;
        }
      }
      .allorder-content-list3outer{
        .allorder-content-list3-title{
          font-size: 1rem;
          font-weight: 600;
          color: #4B3F91;
          margin: 10px 20px;
        }
        .allorder-content-list3{
          display: flex;flex-direction: row;flex-wrap:wrap;margin: 10px 20px;border-bottom: 1px solid #ddd;
          .el-col {
            height: 100%;
          }
          .bg-purple-dark {
            background: white
          }
          .bg-purple {
            background: white;
            .allorder-content-list3-left-imgouter{
              border: 1px solid #ddd;
            }
            .allorder-content-list3-left-img{
              width: 100%
            }
            .allorder-content-list3-center1{
              line-height: 43px;
              font-size: 1rem;
              .allorder-aftersales{
                line-height: 85px;
                a{
                  color: #F08619;
                }
              }
            }

          }
          .bg-purple-light {
            background: white;
            .allorder-content-list3-left-textouter{
              margin-top:1%;
              .allorder-content-list3-left-text1{
                font-size:1rem;font-weight: 500;
              }
              .allorder-content-list3-left-text2{
                margin-top: 6%;
                .el-row {
                  margin-bottom: 20px;
                  &:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0px;
                    width: 100%;
                    border-bottom: 0px dashed #ddd
                  }
                }
                .bg-purple-dark {
                  background: white;
                }
                .bg-purple {
                  background: white;
                }
                .bg-purple-light {
                  background: white;
                }
                .grid-content {
                  min-height: 36px;
                  .allorder-listcolor{
                    width:5px;color: #0086b3
                  }
                }
                .row-bg {
                  padding: 10px 0;
                  background-color: #f9fafc;
                }
              }
            }
            .allorder-content-list3-center2{
              line-height: 43px;
              font-size: 1rem;
              .allorder-aftersales{
                line-height: 85px;
                a{
                  color: #F08619;
                }
              }
            }
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
          .el-row{
            margin-left:0!important;
          }
          .el-col{
            padding-left:0!important;
          }
          .el-row{
            padding-bottom: 15px;
            width: 100%;
            border-bottom: 1px dashed #ddd;
          }
          .el-row:last-child{
            padding-bottom: 15px;
            width: 100%;
            border-bottom: 1px solid #ddd;
          }
          .allorder-content-footer{
            line-height: 42px;
            margin: 10px 20px 20px 20px;
            width:100%;
            overflow: hidden;
            .allorder-content-footer-btnout{
              cursor: pointer;
              float: right;
              .allorder-content-footer-btn{
                padding: 0 10px;border: 1px solid #ddd;border-radius: 3px;background: #4B3F91;color: white;font-size: 0.93rem;
              }
            }
            .allorder-content-footer-textout{
              float: right;margin-right: 80px;font-size: 0.875rem;
              .allorder-content-footer-text{
                font-size: 1.125rem;
                margin-left: 10px;
                color: #F08619;
                font-weight: 600;
              }
            }
          }
        }
      }
      .allorder-pagination{
        text-align: center;
      }
    }
  }
</style>

<template>
  <section class="container">
    <div class="allorder">
      <div class="allorder-title"><p>My Order</p></div>
      <div class="allorder-content">
        <div class="allorder-content-list2">
          <p class="allorder-content-list2-p">
            <img src="../../assets/img/allordertitle_03.jpg" height="20" width="28"/>
            All order
          </p>
        </div>
        <div class="allorder-content-list3outer" :key="item.id" v-for="item in orderlist.list">
          <div class="allorder-content-list3-title"><p>Order ID :{{item.sn}}</p></div>
          <div class="allorder-content-list3">
            <el-row :key="index" v-for="(items,index) in item.goods_list" :gutter="20">
              <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content bg-purple">
                <div class="allorder-content-list3-left-imgouter">
                  <img class="allorder-content-list3-left-img" :src="items.img_url"/>
                </div>
              </div></el-col>
              <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14"><div class="grid-content bg-purple-light">
                <div class="allorder-content-list3-left-textouter">
                  <p class="allorder-content-list3-left-text1">
                    {{items.title}}
                  </p>
                </div>
              </div></el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple">
                <div class="allorder-content-list3-center1"><p v-if="item.delivery_type === 'exw'" v-show="items.sell_price">Price: ${{items.sell_price}}</p></div>
                <div class="allorder-content-list3-center1"><p v-if="item.delivery_type !== 'exw'" v-show="items.fob_price">Price: ${{items.fob_price}}</p></div>
              </div></el-col>
              <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content bg-purple-light">
                <div class="allorder-content-list3-center2" v-if="item.delivery_type === 'exw'" v-show="items.sell_price"><p>${{comment.cul(items.num,items.sell_price)}}</p></div>
                <div class="allorder-content-list3-center2" v-if="item.delivery_type !=='exw'" v-show="items.fob_price"><p>${{comment.cul(items.num,items.fob_price)}}</p></div>
              </div></el-col>
            </el-row>
            <div class="allorder-content-footer" >
              <div class="allorder-content-footer-btnout">
                <p @click="submitorder(item)" class="allorder-content-footer-btn">TO VIEW THE ORDER</p>
              </div>
              <p class="allorder-content-footer-textout">
                Subotal ({{item.goods_list.length}} items):
                <span class="allorder-content-footer-text">${{comment.listcul(item.goods_list,item.delivery_type)}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="allorder-pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="Number($route.query.page)"
            @current-change="handleCurrentChange"
            :page-size="limit"
            :total="orderlist.count">
          </el-pagination>
        </div>
      </div>
      <changeuserInfobar></changeuserInfobar>
    </div>
  </section>
</template>

<script>
  import changeuserInfobar from '../../components/ordercommon/changeuserInfobar.vue'
  export default {
    components: {
      'changeuserInfobar': changeuserInfobar,
    },
    name:'QuotationOrder',
    data(){
      return{
        limit:3,
        page:1,
        orderlist:{},
        token:'',
      }
    },
    methods:{
      handleCurrentChange(val) {
        this.$router.push({path:this.$route.path,query:{
          page:val,
        }});
      },
      back(){
        this.$router.push('/one')
      },
      submitorder(item){
        if(item.status === 'wait_confirm_offer'||item.status === 'wait_offer'){
          this.$router.push({path:'/member/negotiatedorderdetail',query:{id:item.id,token:this.token}})
        }else if(item.status === 'wait_pay'){
          this.$router.push({path:'/member/wait/waitingforpaymentorderdetail',query:{id:item.id,token:this.token}})
        }else if(item.status === 'in_exec'){
          this.$router.push({path:'/member/pending/submitpendingorder',query:{id:item.id,token:this.token}})
        }else{
          this.$router.push({path:'/member/pending/submitpendingorder',query:{id:item.id,token:this.token}})
        }
      },
      getordrlist(){
        var that = this;
        let listUrl = that.$store.state.headerUrl + 'member/order';
        let data = {
          token:that.token,
          page:Number(this.$route.query.page)||1,
          limit:2,
          status:''
        }
        let tempalert = that.$alert;
        that.comment.axiosPost(listUrl,that.$axios,that.$store,data,tempalert).then(function (resp) {
          if(resp.data.code === 0){
            that.orderlist = resp.data.data;
          }else{

          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: 'ok',
            center: true,
          });
        })
      },
    },
    mounted(){
     
      if(localStorage.getItem('users')){
        this.token = JSON.parse(localStorage.getItem('users')).token;
        this.users =  this.$store.state.users;
        this.getordrlist();
      }
    },
    watch: {
      //监听路由变化，刷新页面
      '$route' (to, from) {
        this.$router.go(0);
      }
    },
  }
</script>

