<style lang="scss" scoped>
  .pendingorder{
    margin-left:20px;
    .pendingorder-title{
      line-height: 40px;
      font-size: 1rem;
      color: #4B3F91;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .pendingorder-content{
      padding:10px 0px;
      margin:10px 0 0 0 ;
      border: 1px solid #ddd;
      .pendingorder-content-list2{
        line-height: 60px;    margin: 0 20px;display: flex;
        border-bottom:1px solid #ddd;
        .pendingorder-content-list2-p{
          overflow: hidden;width:100%;font-size: 1.1rem;font-weight: 600;color: #4B3F91;
        }
      }
      .pendingorder-content-list3outer{
        .pendingorder-content-list3-title{
          font-size: 1rem;
          font-weight: 600;
          color: #4B3F91;
          margin: 10px 20px;
        }
        .pendingorder-content-list3{
          margin: 10px 20px;border-bottom: 1px solid #ddd;overflow: hidden;
          .el-col {
            height: 100%;
          }
          .bg-purple-dark {
            background: white
          }
          .bg-purple {
            background: white;
            .pendingorder-content-list3-left-imgouter{
              border: 1px solid #ddd;
            }
            .pendingorder-content-list3-left-img{
              width: 100%
            }

            .pendingorder-content-list3-center1{
              line-height: 43px;
              font-size: 1rem;
              text-align: center;
              .pendingorder-aftersales{
                line-height: 85px;
                a{
                  color: #F08619;
                }
              }
            }

          }
          .bg-purple-light {
            background: white;
            .pendingorder-content-list3-left-textouter{
              margin-top:1%;
              .pendingorder-content-list3-left-text1{
                font-size: 1rem;font-weight: 500;
              }
              .pendingorder-content-list3-left-text2{
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
                  .pendingorder-listcolor{
                    width:5px;color: #0086b3
                  }
                }
                .row-bg {
                  padding: 10px 0;
                  background-color: #f9fafc;
                }

              }
            }
            .pendingorder-content-list3-center2{
              line-height: 43px;
              font-size: 1rem;
              text-align: center;
              .pendingorder-aftersales{
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
            cursor: pointer;
            padding-bottom: 15px;
            width: 100%;
            border-bottom: 1px dashed #ddd;
          }
          .el-row:last-child{
            padding-bottom: 15px;
            width: 100%;
            border-bottom: 1px solid #ddd;
          }
          .pendingorder-content-footer{
            line-height: 42px;
            margin: 20px 20px 20px 20px;
            width:100%;
            overflow: hidden;
            .pendingorder-content-footer-btnout{
              float: right;
              cursor: pointer;
              margin-right: 80px;
              .pendingorder-content-footer-btn{
                padding: 0 10px;border: 1px solid #ddd;border-radius: 3px;background: #4B3F91;color: white;font-size: 1rem;
              }
            }
            .pendingorder-content-footer-textout{
              float: right;margin-right: 80px;font-size:0.875rem;
              .pendingorder-content-footer-text{
                font-size: 18px;
                margin-left: 10px;
                color: #F08619;
                font-weight: 600;
              }
            }
          }
        }
      }
      .pendingorder-pagination{
        text-align: center;
      }
    }

  }
</style>
<template>
  <section class="container">
    <div class="pendingorder">
      <div class="pendingorder-title"><p>My Order</p></div>
      <div class="pendingorder-content">
        <div class="pendingorder-content-list2">
          <p class="pendingorder-content-list2-p">
            <img src="../../../assets/img/waitepay_03.jpg" height="22" width="28"/>
            Pending Order
          </p>
        </div>
        <div class="pendingorder-content-list3outer" :key="item.id" v-for="item in orderlist.list">
          <div class="pendingorder-content-list3-title"><p>Order ID :{{item.sn}}</p></div>
          <div class="pendingorder-content-list3">
            <el-row :gutter="20" :key="index" v-for="(items,index) in item.goods_list">
              <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content bg-purple">
                <div class="pendingorder-content-list3-left-imgouter">
                  <img style="width:90px;height:90px;" class="pendingorder-content-list3-left-img" :src="comment.qiniuimg(items.img_url,'imageMogr2/thumbnail/','147','x','147','')"/>
                </div>
              </div></el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple-light">
                <div class="pendingorder-content-list3-left-textouter">
                      <nuxt-link :to="{name: 'product-id',params:{id:items.goods_id}}" target="_blank">
                  <p class="pendingorder-content-list3-left-text1">
                    {{items.title}}
                  </p>
                      </nuxt-link>
                </div>
              </div></el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple">
                <div class="pendingorder-content-list3-center1" v-if="item.delivery_type === 'exw'" v-show="items.sell_price"><p>Price: {{items.sell_price}}</p></div>
                <div class="pendingorder-content-list3-center1" v-if="item.delivery_type !== 'exw'" v-show="items.fob_price"><p>Price: {{items.fob_price}}</p></div>
              </div></el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple-light">
                <div class="pendingorder-content-list3-center2" v-if="item.delivery_type === 'exw'" v-show="items.sell_price"><p>${{comment.cul(items.num,items.sell_price)}}</p></div>
                <div class="pendingorder-content-list3-center2" v-if="item.delivery_type !== 'exw'" v-show="items.fob_price"><p>${{comment.cul(items.num,items.fob_price)}}</p></div>
              </div></el-col>
            </el-row>
            <div class="pendingorder-content-footer" >
              <div class="pendingorder-content-footer-btnout">
                <p @click="submitorder(item.id)" class="pendingorder-content-footer-btn">View order</p>
              </div>
              <p class="pendingorder-content-footer-textout">
                Subotal ({{item.goods_list.length}} items):
                <span class="pendingorder-content-footer-text">${{comment.listcul(item.goods_list)}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="pendingorder-pagination">
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
  import changeuserInfobar from '../../../components/ordercommon/changeuserInfobar.vue'
  export default {
    components: {
      'changeuserInfobar': changeuserInfobar,
    },
    name:'pendingorder',
    data(){
      return{
        limit:3,
        token:'',
        orderlist:{},
        listlength:0,
        pricecount:0,
      }
    },
    methods:{
      handleCurrentChange(val) {
        // this.$router.push({path:this.$route.path,query:{
        //   page:val,
        // }});
           let a = window.location.href.split('?')[0] + '?' + 'page='+val ;
          window.location.href = a;
      },
      submitorder(id){
        this.$router.push({path:'/member/pending/submitpendingorder',query:{id:id,token:this.token}})
      },
      //获取进行中的订单列表数据
      getorderlist(){
        var that = this;
        let listUrl = that.$store.state.headerUrl + 'member/order';
        let data = {
          page:Number(this.$route.query.page)||1,
          limit:that.$store.state.orderlimit,
          status:'in_exec'
        }
        let tempalert = that.$alert;
        that.comment.axiosPost(listUrl,that.$axios,that.$store,data,tempalert).then(function (resp) {
          if(resp.data.code === 0){
            that.orderlist = resp.data.data;
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              center: true,
            });
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
       this.getorderlist();
       this.token = JSON.parse(localStorage.getItem('users')).token;
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

