  <style lang="scss" scoped>
.memberCentre {
  margin-left: 20px;
  .memberCentre-title {
    line-height: 40px;
    font-size: 1rem;
    color: #4b3f91;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }
  .memberCentre-content {
    padding: 10px 0px;
    margin: 10px 0 0 0;
    .memberCentre-content-list1 {
      overflow: hidden;
      display: flex;
      margin: 0 20px;
      padding: 20px 0;
      .memberCentre-content-list1-img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        float: left;
      }
      .memberCentre-content-list1-text {
        line-height: 30px;
        margin-left: 15px;
        width: 100%;
        .memberCentre-content-list1-textitem1 {
          font-size: 1rem;
          font-weight: 500;
        }
        .memberCentre-content-list1-textitem2 {
          display: flex;
          flex-wrap: nowrap;
          .memberCentre-content-list1-textitem2-span {
            width: 33.34%;
            .memberCentre-content-list1-textitem2-spaninner {
              float: left;
              padding-top: 1px;
              font-size: 1rem;
              /*这里是我做的隐藏*/
              /*display: none;*/
            }
            .points-progress {
              /*这里是先隐藏*/
              /*display: none;*/
              position: relative;
              line-height: 31px;
              width: 90%;
              margin-left: 35px;
              .el-progress-bar__outer {
                height: 14px !important;
              }
              .el-progress__text {
                display: none;
              }
              .el-progress-bar__inner {
                border-radius: 0;
              }
              .el-progress-bar__outer {
                border-radius: 0;
              }
            }
          }
          .memberCentre-content-list1-textitem2-span2 {
            font-size: 1rem;
            /*我修改的隐藏*/
            /*display: none;*/
          }
        }
      }
    }
    .memberCentre-content-list2 {
      margin: 0 20px;
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .bg-purple-dark {
        background: white;
      }
      .bg-purple {
        background: white;
        cursor: pointer;
        .card {
          border: 1px solid #ddd;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          min-height: 100px;
          padding: 20px;
          .imgout {
            align-self: center;
            text-align: center;
            img {
              width: 100%;
            }
          }
          .text {
            width: 100%;
            padding: 0 0 0 10px;
            line-height: 20px;
            .p1 {
              font-size: 1rem;
            }
            .p2 {
              margin-top: 15px;
              overflow: hidden;
              .p2-span1 {
                font-size: 1.125rem;
                font-weight: 600;
                color: #f08519;
              }
              .p2-i {
                float: right;
                color: #c4c4c4;
              }
            }
          }
        }
      }
      .bg-purple:hover {
        border: 1px solid #f08519;
      }
      .bg-purple-light {
        background: white;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
    .memberCentre-content-list3 {
      .memberCentre-content-list3outer {
        margin: 20px;
        border: 1px solid #ddd;
        .memberCentre-content-list3out-title {
          font-size: 1rem;
          font-weight: 600;
          color: #4b3f91;
          padding-bottom: 20px;
          border-bottom: 1px solid #ddd;
          margin: 20px 20px 0 20px;
        }
        .memberCentre-content-list3 {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 10px 20px;
          .memberCentre-content-list3-title {
            font-size: 1rem;
            font-weight: 600;
            color: #4b3f91;
            margin: 10px 0;
          }
          .el-col {
            height: 100%;
          }
          .bg-purple-dark {
            background: white;
          }
          .bg-purple {
            background: white;
            .memberCentre-content-list3-left-imgouter {
              border: 1px solid #ddd;
            }
            .memberCentre-content-list3-left-img {
              width: 100%;
            }
            .memberCentre-content-list3-center1 {
              line-height: 43px;
              font-size: 1rem;
              .memberCentre-aftersales {
                a {
                  color: #f08619;
                }
              }
            }
          }
          .bg-purple-light {
            background: white;
            .memberCentre-content-list3-left-textouter {
              margin-top: 1%;
              .memberCentre-content-list3-left-text1 {
                font-size: 1rem;
                font-weight: 500;
              }
              .memberCentre-content-list3-left-text2 {
                margin-top: 6%;
                .el-row {
                  margin-bottom: 20px;
                  &:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0px;
                    width: 100%;
                    border-bottom: 0px dashed #ddd;
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
                  .memberCentre-listcolor {
                    width: 5px;
                    color: #0086b3;
                  }
                }
                .row-bg {
                  padding: 10px 0;
                  background-color: #f9fafc;
                }
              }
            }
            .memberCentre-content-list3-center2 {
              line-height: 43px;
              font-size: 1rem;
              .el-select {
                .el-input {
                  .el-input__inner {
                    border: none;
                  }
                }
              }
            }
            .xialakuang {
              border: 1px solid blue;
              text-align: center;
              img {
                width: 14px;
                height: 14px;
                position: relative;
                top: 2px;
              }
            }
            /*这个是我加的下拉框*/
            .el-dropdown {
              top: 8px;
              left: 30%;
            }
            .el-dropdown-link {
              cursor: pointer;
              color: #000;
              font-size: 16px;
            }
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
          .el-row {
            margin-left: 0 !important;
          }
          .el-col {
            padding-left: 0 !important;
          }
          .el-row {
            padding-bottom: 15px;
            width: 100%;
            border-bottom: 1px solid #ddd;
          }
          .el-row:last-child {
            padding-bottom: 15px;
            width: 100%;
            border-bottom: 1px solid #ddd;
            margin-top: 15px;
          }
          .memberCentre-content-footer {
            line-height: 42px;
            margin: 0px 20px 20px 20px;
            width: 100%;
            overflow: hidden;
            .memberCentre-content-footer-btnout {
              float: right;
              .memberCentre-content-footer-btn {
                padding: 0 10px;
                border: 1px solid #ddd;
                border-radius: 3px;
                background: #4b3f91;
                color: white;
              }
            }
            .memberCentre-content-footer-textout {
              float: right;
              margin-right: 80px;
              font-size: 0.75rem;
              .memberCentre-content-footer-text {
                font-size: 1.125rem;
                margin-left: 10px;
                color: #f08619;
                font-weight: 600;
              }
            }
          }
        }
        .history-pagination {
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.memberCentre-content-list1-textitem2-span {
  width: 33.34%;
  font-size: 0.93rem;
  .points-progress {
    position: relative;
    line-height: 31px;
    width: 90%;
    margin-left: 35px;
    .el-progress-bar__outer {
      height: 14px !important;
    }
    .el-progress__text {
      display: none;
    }
    .el-progress-bar__inner {
      border-radius: 0;
    }
    .el-progress-bar__outer {
      border-radius: 0;
    }
  }
}

.menu_main {
  margin: 10px 20px;
  .title {
    font-weight: bold;
  }
  .content {
    margin-left: 22px;
    margin-bottom: 10px;
    span:nth-of-type(1) {
      margin-right: 10px;
    }
  }
  .xiaotubiao {
    margin-right: 10px;
    font-size: 1px;
    color: #4b3f91;
  }
}
</style>
<template>
  <section class="container">
    <div class="memberCentre">
      <div class="memberCentre-title">
        <p>Member Centre</p>
      </div>
      <div class="memberCentre-content">
        <div class="memberCentre-content-list1">
          <img v-if="users.avatar !== '' &&
      users.avatar !== null &&
      users.avatar !== undefined" class="memberCentre-content-list1-img" :src="users.avatar">
          <img v-if="users.avatar === '' ||
      users.avatar === null ||
      users.avatar === undefined"
           class="memberCentre-content-list1-img" src="../../assets/img/LOGO_NO_100x100.png">
         <div class="memberCentre-content-list1-text">
            <div class="memberCentre-content-list1-textitem1">
              <p>UserAccount:
                <span>{{users.nickname}}</span>
              </p>
            </div>
            <div class="memberCentre-content-list1-textitem2">
              <span class="memberCentre-content-list1-textitem2-span">{{users.email}}</span>
              <div class="memberCentre-content-list1-textitem2-span">
                <span class="memberCentre-content-list1-textitem2-spaninner">Lv5</span>
                <el-progress class="points-progress" :percentage="10" color="#4B3F91"></el-progress>
              </div>
              <span class="memberCentre-content-list1-textitem2-span2">
                <img src="../../assets/img/color1.jpg" height="12" width="12">
                My points : {{users.score}}
              </span>
            </div>
          </div>
        </div>
        <div class="memberCentre-content-list2">
          <el-row :gutter="20">
            <nuxt-link :to="{name :'member-negotiatedorder'}">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <div class="card caractive">
                    <div class="imgout">
                      <img src="../../assets/img/tall.png">
                    </div>
                    <div class="text">
                      <p class="p1">Price Negotiated order</p>
                      <p class="p2">
                        <span class="p2-span1">{{orderlist.negotiated_price|money}}</span>
                        <i class="icon iconfont p2-i icon-zuoyou1"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
            </nuxt-link>
            <nuxt-link :to="{name :'member-wait-waitingforpaymentorder'}">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <div class="card">
                    <div class="imgout">
                      <img src="../../assets/img/pay.png">
                    </div>
                    <div class="text">
                      <p class="p1">Wait for Payment Order</p>
                      <p class="p2">
                        <span class="p2-span1">{{orderlist.wait_pay}}</span>
                        <i class="icon iconfont p2-i icon-zuoyou1"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
            </nuxt-link>
            <nuxt-link :to="{name :'member-pending-pendingorder'}">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <div class="card">
                    <div class="imgout">
                      <img src="../../assets/img/ordermanager.png">
                    </div>
                    <div class="text">
                      <p class="p1">Pending Order</p>
                      <p class="p2">
                        <span class="p2-span1">{{orderlist.pending}}</span>
                        <i class="icon iconfont p2-i icon-zuoyou1"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
            </nuxt-link>
          </el-row>
        </div>
        <div class="memberCentre-content-list3">
          <div class="memberCentre-content-list3outer">
            <div class="memberCentre-content-list3out-title">
              <p>Order history</p>
            </div>
            <div
              :key="key"
              v-for="(item,index,key) in orderlist.list"
              class="memberCentre-content-list3"
            >
              <div class="memberCentre-content-list3-title">
                <p>
                  <span>Order ID :{{item.sn}}</span>
                </p>
              </div>
              <el-row :key="key" v-for="(items,index,key) in item.goods_list" :gutter="20">
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="memberCentre-content-list3-left-imgouter">
                      <img class="memberCentre-content-list3-left-img" :src="items.img_url">
                    </div>
                  </div>
                </el-col>
                <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                  <div class="grid-content bg-purple-light">
                    <div class="memberCentre-content-list3-left-textouter">
                      <p class="memberCentre-content-list3-left-text1">{{items.title}}</p>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="memberCentre-content-list3-center1">
                      <p>
                        <span>Price: {{items.sell_price|money}}</span>
                      </p>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                  <div class="grid-content bg-purple-light">
                    <div class="memberCentre-content-list3-center2">
                      <p>
                        <span>${{comment.cul(items.num,items.sell_price|money)}}</span>
                      </p>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                  <div class="grid-content bg-purple-light">
                    <el-dropdown :hide-on-click="false">
                      <span class="el-dropdown-link">Order status
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <div class="menu_main">
                          <div class="menu_main_content">
                            <p>
                              <i class="xiaotubiao iconfont icon-shixinyuandian"></i>
                              <span class="title">Set up the order</span>
                            </p>
                            <p class="content" v-if="item.set_up_time">
                              <span
                                class="time"
                              >{{comment.formate('hh:mm:ss',new Date(item.set_up_time*1000))}}</span>
                              <span>{{comment.formate('yyyy/MM/dd',new Date(item.set_up_time*1000))}}</span>
                            </p>
                            <p>
                              <i class="xiaotubiao iconfont icon-shixinyuandian"></i>
                              <span class="title">Have to pay a deposit</span>
                            </p>
                            <p class="content" v-if="item.pay_deposit_time">
                              <span
                                class="time"
                              >{{comment.formate('hh:mm:ss',new Date(item.pay_deposit_time*1000))}}</span>
                              <span>{{comment.formate('yyyy/MM/dd',new Date(item.pay_deposit_time*1000))}}</span>
                            </p>
                            <p>
                              <i class="xiaotubiao iconfont icon-shixinyuandian"></i>
                              <span class="title">In production</span>
                            </p>
                            <p class="content" v-if="item.in_production_time">
                              <span
                                class="time"
                              >{{comment.formate('hh:mm:ss',new Date(item.in_production_time*1000))}}</span>
                              <span>{{comment.formate('yyyy/MM/dd',new Date(item.in_production_time*1000))}}</span>
                            </p>
                            <p>
                              <i class="xiaotubiao iconfont icon-shixinyuandian"></i>
                              <span class="title">Settlement of final payment</span>
                            </p>
                            <p class="content" v-if="item.pay_final_time">
                              <span
                                class="time"
                              >{{comment.formate('hh:mm:ss',new Date(item.pay_final_time*1000))}}</span>
                              <span>{{comment.formate('yyyy/MM/dd',new Date(item.pay_final_time*1000))}}</span>
                            </p>
                            <p>
                              <i class="xiaotubiao iconfont icon-shixinyuandian"></i>
                              <span class="title">delivery</span>
                            </p>
                            <p class="content" v-if="item.delivery_time">
                              <span
                                class="time"
                              >{{comment.formate('hh:mm:ss',new Date(item.delivery_time*1000))}}</span>
                              <span>{{comment.formate('yyyy/MM/dd',new Date(item.delivery_time*1000))}}</span>
                            </p>
                          </div>
                        </div>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="history-pagination">
              <el-pagination
                background
                layout="prev, pager, next"
                :current-page="Number($route.query.page)"
                @current-change="handleCurrentChange"
                :page-size="limit"
                :total="orderlist.count"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
      <changeuserInfobar></changeuserInfobar>
    </div>
  </section>
</template>
<script>
import changeuserInfobar from "../../components/ordercommon/changeuserInfobar.vue";
export default {
  name: "membercentre",
  components: {
    changeuserInfobar: changeuserInfobar
  },
  data() {
    return {
      orderlist: {},

      value6: "",
      users: this.$store.state.users,
      limit: 2,
      token: "",
      listlength: 0,
      pricecount: 0,
      listdata: {}
    };
  },
  methods: {
    back() {
      this.$router.push("/one");
    },
    getorderlist() {
      var that = this;
      let listUrl = that.$store.state.headerUrl + "member/order/get_counts";
      let tempalert = that.$alert;
      that.comment
        .axiosGet(listUrl, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.orderlist = resp.data.data;
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true
            });
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "ok",
            center: true
          });
        });
    },
    getorderdata() {
      var that = this;
      let listUrl = that.$store.state.headerUrl + "member/order";
      let data = {
        page: Number(this.$route.query.page) || 1,
        limit: that.$store.state.orderlimit,
        status: "complete"
      };
      let tempalert = that.$alert;
      that.comment
        .axiosPost(listUrl, that.$axios, that.$store, data, tempalert)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.orderlist = resp.data.data;
            console.log(that.orderlist);
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true
            });
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "ok",
            center: true
          });
        });
    },
    //分页栏控制器
    handleCurrentChange(val) {
      this.$router.push({
        path: this.$route.path,
        query: {
          page: val
        }
      });
    }
  },
  mounted() {
 if(localStorage.getItem("users")){
    this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    this.users = this.$store.state.users;
    this.token = JSON.parse(localStorage.getItem('users')).token;
        this.getorderlist();
    this.getorderdata();
    }

   
  }
};
</script>

