<style lang="scss" scoped>
  .negotiatedorder{
    .neod{
      border-radius: 5px;
      background: #4B3F91;
      color: white;
      padding: 5px 10px;
      cursor: pointer;
      text-align: center;
    }
    margin-left:20px;
    .negotiatedorder-title{
      line-height: 40px;
      font-size: 1rem;
      color: #4B3F91;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .negotiatedorder-content{
    padding: 10px 20px 0 20px;
    border: 1px solid #ddd;
    margin: 10px 0 0 0;
      .negotiatedorder-content-list2{
      line-height: 60px;
      display: flex;
        .negotiatedorder-content-list2-p{
        overflow: hidden;
        width: 100%;
        font-size: 1.1rem;
        font-weight: 600;
        color: #4b3f91;
        }
      }
      .negotiatedorder-content-list2-p2 {
        font-size: 0.93rem;
        color: #b9b3b3;
        font-weight: 500;
      }
      .negotiatedorder-content-list10{
        border-bottom:1px solid #ddd;
        margin: 0 20px;
        .el-row {
          /*margin-bottom: 20px;*/
          &:last-child {
            margin-bottom: 0;
          }
        }
        .el-col {
          border-radius: 4px;
        }
        .bg-purple-dark {
          background: white;
        }
        .bg-purple {
          background: white;
          .p2-1{
            color: #4B3F91;
            padding:5px 10px ;
            font-weight: 600;
            text-align: center;
            font-size: 1rem;
          }
        }
        .bg-purple-light {
          background:white;
        }
        .grid-content {
          min-height: 36px;
        }
      }

      .negotiatedorder-content-list3outer{
        .negotiatedorder-content-list3-title{
          font-size: 14px;
          font-weight: 600;
          color: #4B3F91;
          margin: 10px 20px;
        }
        .negotiatedorder-content-list3{
          display: flex;flex-direction: row;flex-wrap:wrap;margin: 10px 20px;border-bottom: 1px solid #ddd;
          .el-col {
            height: 100%;
          }
          .bg-purple-dark {
            background: white
          }
          .bg-purple-light {
            background: white;
            height: 100%;
            .goodslist{
              padding: 10px 0 20px 0;border-bottom: 1px dashed #DDD;
              overflow: hidden;
              .negotiatedorder-content-list3-left-textouter{
                float: left;
                width: 83.32%;
                margin-top:1%;
                padding-left: 20px;
                cursor: pointer;
                .negotiatedorder-content-list3-left-text1{
                  font-size: 1rem;font-weight: 500;
                }
                .negotiatedorder-content-list3-left-text2{
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
                  .grid-content {
                    min-height: 36px;
                    .negotiatedorder-listcolor{
                      width:5px;color: #0086b3;
                    }
                  }
                  .row-bg {
                    padding: 10px 0;
                    background-color: #f9fafc;
                  }

                }
              }
              .negotiatedorder-content-list3-left-imgouter{
                float: left;
                border: 1px solid #ddd;
                width: 10%;
                .negotiatedorder-content-list3-left-img{
                  width: 68px;
                  height: 68px;
                }
              }
            }
            .goodslist:last-of-type{
              display: flex;padding: 10px 0 0 0;border-bottom: none;
            }
            .negotiatedorder-content-list3-center1{
              font-size: 1rem;
              color: #F08619;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              .negotiatedorder-aftersales{
                line-height: 85px;
                a{
                  color: #F08619;
                }
              }
            }
            .orderbtn{
              display: flex;
              justify-content: center;
              // align-items: center;
              margin-top: -30px;
              height: 100%;
              .negotiatedorder-content-footer-btn{
                padding: 0 10px;border: 1px solid #ddd;border-radius: 3px;background: #4B3F91;color: white;cursor: pointer;
                border-radius: 5px;
                background: #4B3F91;
                color: white;
                height: 30px;
                line-height: 30px;
                width: 100px;
                font-size: 1rem;
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
          .negotiatedorder-content-footer{
            line-height: 42px;
            margin: 0px 20px 20px 20px;
            width:100%;
            overflow: hidden;
            .negotiatedorder-content-footer-textout{
              float: right;margin-right: 80px;font-size: 12px;
              .negotiatedorder-content-footer-text{
                font-size: 18px;
                margin-left: 10px;
                color: #F08619;
                font-weight: 600;
              }
            }
          }
        }
      }
      .negotiatedorder-pagination{
        text-align: center;
      }
    }
  }
</style>

<template>
  <section class="container">
    <div class="negotiatedorder">
      <div class="negotiatedorder-title"><p>My Order</p></div>
      <div class="negotiatedorder-content">
        <div class="negotiatedorder-content-list2">
          <p class="negotiatedorder-content-list2-p">
            <img src="../../assets/img/allordertitle_03.jpg" height="20" width="28"/>
            Negotiated order
            <!-- <span>(You can modify the planned purchase queantity and tell us the expected purchase price.We will reply you within 24 hours)</span> -->
          </p>
        </div>
        <p class="negotiatedorder-content-list2-p2">
          (You can modify the planned purchase queantity and tell us the expected purchase price.We will reply you within 24 hours)
        </p>
        <div class="negotiatedorder-content-list10">
          <el-row >
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><div class="grid-content bg-purple">
            </div></el-col>
            <el-col :xs="13" :sm="17" :md="17" :lg="17" :xl="17"><div class="grid-content bg-purple">
            </div></el-col>
            <!-- <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple">
              <div class=""><p class="p2-1">Repling</p></div>
            </div></el-col> -->
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple">
              <div class=""><p class="p2-1">Operation</p></div>
            </div></el-col>
          </el-row>
        </div>
        <div class="negotiatedorder-content-list3outer" :key="item.id" v-for="item in orderlist.list">
          <div class="negotiatedorder-content-list3-title"><p>Order ID :{{item.sn}}</p></div>
          <div class="negotiatedorder-content-list3">
            <el-row :gutter="20">
              <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20"><div class="grid-content bg-purple-light">
                <div :key="index" v-for="(items,index) in item.goods_list" class="goodslist">
                  <div class="negotiatedorder-content-list3-left-imgouter">
                    <img class="negotiatedorder-content-list3-left-img" :src="comment.qiniuimg(items.img_url,'imageMogr2/thumbnail/','147','x','147','')"/>
                  </div>
                  <div class="negotiatedorder-content-list3-left-textouter">
                <nuxt-link :to="{name: 'product-id',params:{id:items.goods_id}}" target="_blank">
                  <p class="negotiatedorder-content-list3-left-text1">
                    {{items.title}}
                  </p>
                </nuxt-link>

                  </div>
                </div>
              </div></el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" style="padding-right:0;"><div class="grid-content bg-purple-light">
                <div class="orderbtn">
                  <p @click="submitorder(item.id)" class="negotiatedorder-content-footer-btn neod">View order</p>
                </div>
              </div></el-col>
            </el-row>
          </div>
        </div>
        <div class="negotiatedorder-pagination">
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
    name:'negotiatedorder',
    data(){
      return{
        orderlist:{},
        limit:3,
        token:''
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
        this.$router.push({path:'/member/negotiatedorderdetail',query:{id:id}})
      },
      getordrlist(){
        var that = this;
        let listUrl = that.$store.state.headerUrl + 'member/order';
        let data = {
          page:Number(this.$route.query.page)||1,
          limit:that.limit,
          status:'wait_offer'
        }
        let tempalert = that.$alert;
        that.comment.axiosPost(listUrl,that.$axios,that.$store,data,tempalert).then(function (resp) {
          if(resp.data.code === 0){
           /* for(var key in resp.data.data.list){
              let key1 = key;
              for(var key in resp.data.data.list[key1]['goods_list']){
                resp.data.data.list[key1]['goods_list'][key].img_url = resp.data.data.list[key1]['goods_list'][key].img_url + this.$store.state.show147x147;
              }
            }*/
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
        this.getordrlist();
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

