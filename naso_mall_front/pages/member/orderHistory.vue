<style lang="scss" scoped>
  .orderhistory{
    margin-left:20px;
    .orderhistory-title{
      line-height: 40px;
      font-size: 1rem;
      color: #4B3F91;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .orderhistory-content{
      padding:10px 0px;
      margin:10px 0 0 0 ;
      border: 1px solid #ddd;
      .orderhistory-content-list2{
        line-height: 60px;    margin: 0 20px;display: flex;border-bottom: 1px solid #ddd;
        .orderhistory-content-list2-p{
          overflow: hidden;width:100%;font-size: 1rem;font-weight: 600;color: #4B3F91;
          img{
            float: left;
            margin-top:17px;
          }
        }
      }
      .orderhistory-content-list2-btng{
        display: flex;
        margin:10px 20px;
        padding-bottom: 20px;
        border-bottom:1px solid #ddd;
        p{
          padding:5px 10px;
          border:1px solid #ddd;
          margin-right: 20px;
          border-radius: 5px;
        }
        .pactive{
          border:1px solid #4B3F91;
          background: #4B3F91;
          color: white;
        }
      }
      .orderhistory-content-list3outer{
        .orderhistory-content-list3{
         margin: 10px 20px;border-bottom: 1px solid #ddd;overflow: hidden;
          .orderhistory-content-list3-title{
            font-size: 1rem;
            font-weight: 600;
            color: #4B3F91;
            margin: 10px 20px;
          }
          .el-col {
            height: 100%;
          }
          .bg-purple-dark {
            background: white
          }
          .bg-purple {
            background: white;
            .orderhistory-content-list3-left-imgouter{
              border: 1px solid #ddd;
            }
            .orderhistory-content-list3-left-img{
              width: 100%
            }

            .orderhistory-content-list3-center1{
              line-height: 43px;
              font-size: 1rem;
              text-align: center;
              .orderhistory-aftersales{
                /*line-height: 85px;*/
                a{
                  color: #F08619;
                }
              }
            }

          }
          .bg-purple-light {
            background: white;
            .orderhistory-content-list3-left-textouter{
              margin-top:1%;
              .orderhistory-content-list3-left-text1{
                font-size: 16px;font-weight: 500;
              }
              .orderhistory-content-list3-left-text2{
                margin-top: 6%;
                .el-row {
                  margin-bottom: 20px;
                  cursor: pointer;
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
                  .orderhistory-listcolor{
                    width:5px;color: #0086b3
                  }
                }
                .row-bg {
                  padding: 10px 0;
                  background-color: #f9fafc;
                }

              }
            }
            .orderhistory-content-list3-center2{
              line-height: 43px;
              font-size: 1rem;
              text-align: center;
              .orderhistory-aftersales{
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
            cursor: pointer;
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
          .orderhistory-content-footer{
            line-height: 42px;
            margin: 20px 20px 20px 20px;
            width:100%;
            overflow: hidden;
            .orderhistory-content-footer-btnout{
              float: right;margin-right: 80px;
              .orderhistory-content-footer-btn{
                padding: 0 10px;border: 1px solid #ddd;border-radius: 3px;background: #4B3F91;color: white;text-align: center;cursor: pointer;font-size: 1rem;
              }
            }
            .orderhistory-content-footer-textout{
              float: right;margin-right: 80px;font-size: 1rem;
              .orderhistory-content-footer-text{
                font-size: 1.125rem;
                margin-left: 10px;
                color: #F08619;
                font-weight: 600;
              }
            }
          }
        }
      }
      .history-pagination{
        text-align: center;
      }
    }

  }
</style>
<template>
  <section class="container">
    <div class="orderhistory">
      <div class="orderhistory-title"><p><span>My Order</span></p></div>
      <div class="orderhistory-content">
        <div class="orderhistory-content-list2">
          <p class="orderhistory-content-list2-p">
            <img src="../../assets/img/waitepaydetailtitle_03.jpg" height="27" width="28"/>
            Completed Order
          </p>
        </div>
        <div class="orderhistory-content-list3outer">
          <div :key="key" v-for="(item,index,key) in orderlist.list" class="orderhistory-content-list3">
            <div class="orderhistory-content-list3-title">
              <p> <span>Order ID :{{item.sn}}</span></p>
            </div>
            <el-row :key="key" v-for="(items,index,key) in item.goods_list" :gutter="20">
              <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content bg-purple">
                <div class="orderhistory-content-list3-left-imgouter">
                  <img class="orderhistory-content-list3-left-img" :src="items.img_url"/>
                </div>
              </div></el-col>
              <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13"><div class="grid-content bg-purple-light">
                <div class="orderhistory-content-list3-left-textouter">
                      <nuxt-link :to="{name: 'product-id',params:{id:items.goods_id}}" target="_blank">
                  <p class="orderhistory-content-list3-left-text1">
                    {{items.title}}
                  </p>                      </nuxt-link>
                  <p class="orderhistory-content-list3-left-text2">
                  </p>
                </div>
              </div></el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple">
                <div class="orderhistory-content-list3-center1">
                  <p v-if="item.delivery_type === 'exw'" v-show="items.sell_price"> <span>Price: {{items.sell_price|money}}</span></p>
                  <p v-if="item.delivery_type !== 'exw'" v-show="items.fob_price"> <span>Price: {{items.fob_price|money}}</span></p>
                  <p class="orderhistory-aftersales"><a href="">After-sales customer service support</a></p>
                </div>
              </div></el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple-light">
                <div class="orderhistory-content-list3-center2">
                  <p v-if="item.delivery_type === 'exw'" v-show="items.sell_price"><span>${{comment.cul(items.num,items.sell_price|money)}}</span></p>
                  <p v-if="item.delivery_type !== 'exw'" v-show="items.fob_price"><span>${{comment.cul(items.num,items.fob_price|money)}}</span></p>
                  <p class="orderhistory-aftersales"><a href="">Evaluation for the order</a></p>
                </div>
              </div></el-col>
            </el-row>
            <div class="orderhistory-content-footer" >
              <div class="orderhistory-content-footer-btnout">
                <p @click="submitorder(item.id)" class="orderhistory-content-footer-btn">View order</p>
              </div>
              <p class="orderhistory-content-footer-textout">Subotal ({{item.goods_list.length}} items):
                <span class="orderhistory-content-footer-text">${{comment.listcul(item.goods_list,item.delivery_type)}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="history-pagination">
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
    name:'orderHistory',
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
      //分页栏控制器
      handleCurrentChange(val) {
        // this.$router.push({path:this.$route.path,query:{
        //   page:val,
        // }});
           let a = window.location.href.split('?')[0] + '?' + 'page='+val ;
          window.location.href = a;
      },
      back(){
        this.$router.push('/one')
      },
      submitorder(id){
        this.$router.push({path:'/member/pending/submitpendingorder',query:{id:id,token:this.token}})
      },
      getorderdata(){
        var that = this;
        let listUrl = that.$store.state.headerUrl + 'member/order';
        let data = {
          page:Number(this.$route.query.page)||1,
          limit:that.$store.state.orderlimit,
          status:'complete'
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
if(localStorage.getItem("users")){
      this.getorderdata();
       this.token = JSON.parse(localStorage.getItem('users')).token;
      this.users = this.$store.state.users;
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

