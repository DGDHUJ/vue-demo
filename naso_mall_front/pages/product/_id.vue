<style lang="scss" scoped>
.productdetail {
  overflow: hidden;
  background: white;
  .productdetail-content {
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    background: white;
    height: 73%;
    width: 100%;
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
      .el-breadcrumb {
        line-height: 3;
      }
      .content-line1 {
        margin-top: 10px;
        .el-row {
          margin-bottom: 10px;
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
          .productimg {
            position: relative;
            text-align: center;
            border: 1px solid #ddd;
            height: 248px;
            .bigimg {
              width: 100%;
            }
            .enlarged {
              display: none;
              position: absolute;
              background: #fff;
              left: 250px;
              top: 0;
              z-index: 5;
              overflow: hidden;
              width: 500px;
              height: 500px;
              border: 1px solid #888;
            }
          }
          @media screen and (min-width: 1200px) {
            .productimg {
              height: 290px;
            }
          }
          .productcontent {
            margin: 0px 30px;
            .title {
              font-size: 16px;
              color: #333;
            }
            &-parameter {
              position: absolute;
              bottom: 0;
              width: 700px;
            }

            @media screen and (max-width: 1200px) {
              &-parameter {
                width: 600px;
              }
            }
            .line1 {
              line-height: 35px;
              font-size: 16px;
              span {
                font-size: 18px;
                color: #f08e2b;
                font-weight: 600;
              }
            }
            .line2 {
              line-height: 35px;
              .line2-span {
                color: #f18f2e;
              }
            }
            .line3 {
              line-height: 20px;
              margin: 10px 0;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              p {
                border-radius: 4px;
                margin: 0 10px;
                padding: 0 20px;
                border: 1px solid #ddd;
              }
              .pactive {
                border: 1px solid #4b3f91;
                color: #4b3f91;
              }
            }
            .line4 {
              line-height: 20px;
              margin: 10px 0;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              img {
                margin: 0px 13px;
                border: 4px solid #ddd;
              }
              .imgactive {
                border: 4px solid #4b3f91;
                color: #4b3f91;
              }
            }
            .line5 {
              line-height: 20px;
              margin: 00px 0;
              // display: flex;
              // flex-direction: row;
              // flex-wrap: nowrap;
              overflow: hidden;
              .line5-title {
                float: left;
                align-self: center;
              }
              .input1 {
                float: left;
                margin: 0px 13px;
                // display: flex;
                width: 30%;
                overflow: hidden;
                .btnground {
                  float: left;
                  width: 20px;
                  text-align: center;
                  margin-left: -1px;
                  z-index: 1;
                  .btn {
                    .addbtn {
                      width: 100%;
                      height: 20px;
                      font-size: 14px;
                      user-select: none;
                      border: 1px solid #ddd;
                      line-height: 17px;
                    }
                    .addbtn:active {
                      font-size: 16px;
                      border: 1px solid deepskyblue;
                    }
                    .reducebtn {
                      width: 100%;
                      height: 20px;
                      user-select: none;
                      border: 1px solid #ddd;
                      line-height: 17px;
                    }
                    .reducebtn:active {
                      font-size: 16px;
                      border: 1px solid deepskyblue;
                    }
                  }
                }
              }
              .line5-text {
                margin: 0 0 0 10px;
                color: #f08e2b;
                p {
                  display: inline-block;
                  width: 50%;
                }
              }
            }
            .line6 {
              padding-top: 10px;
              .icon-contact {
                font-size: 28px;
                vertical-align: middle;
              }
              .line6-el-button-orange {
                color: white;
                background: #e67819;
                font-size: 12px;
                padding: 9px 20px 3px;
              }
              .line6-el-button-pruple {
                color: white;
                background: #4b3f91;
                font-size: 14px;
              }
            }
            @media screen and (min-width: 1200px) {
              .line1 {
              }
              .line2 {
              }
              .line3 {
              }
              .line4 {
              }
              .line5 {
                line-height: 20px;
              }
              .line6 {
                padding-top: 20px;
              }
            }
          }
        }
        .bg-purple-light {
          background: #e5e9f2;
        }
        .grid-content {
          border-radius: 4px;
          min-height: 36px;
        }
        .row-bg {
          padding: 10px 0;
          background-color: white;
        }
      }
      .content-line2 {
        border: 1px solid #ddd;
        padding: 30px 20px;
        line-height: 24px;
        margin: 20px 0 0 0;
        background: #f8f8f8;
        .params-outer {
          // display: flex;
          // flex-wrap: wrap;
          overflow: hidden;
          .params {
            float: left;
            width: 33%;
            text-align: left;
            p {
              color: #999999;
              font-size: 0.9rem;
              span {
                color: #000;
              }
            }
          }
          .params-50 {
            width: 50%;
          }
          .params-100 {
            width: 100%;
          }
        }
        .bg-purple-dark {
          background: #f8f8f8;
        }
        .bg-purple {
          background: #f8f8f8;
          font-size: 0.9rem;
          p {
            color: #999999;
            span {
              color: #000;
            }
          }
        }
        .grid-content {
          min-height: 36px;
        }
        .lastline {
          p {
            color: #999999;
            font-size: 0.9rem;
            span {
              color: #000;
            }
          }
        }
      }
      .content-line3 {
        margin: 20px 0 0 0;
        // .bg-purple-dark {
        //   background: white;
        // }
        // .bg-purple {
        // background: white;
        .content-line3-left-item {
          img {
            width: 100%;
          }
          // 左侧
          .content-line3-left-item-title {
            font-size: 1rem;
            font-weight: 600;
            line-height: 40px;
          }
          .content-line3-left-item-p1 {
            font-size: 1rem;
            font-weight: 600;
            color: #333;
            &:hover {
              color: red;
            }
          }
          .content-line3-left-item-p3 {
            margin-top: 4px;
            color: red;
            font-size: 14px;
            font-weight: bold;
            span {
              color: #aaa;
              text-decoration: line-through;
            }
          }
        }

        // 右侧
        .content-line3-right-title {
          font-size: 1rem;
          font-weight: 600;
          line-height: 40px;
          margin: 0 0 0 20px;
        }
        .content-line3-right {
          margin: 0 0 0 20px;
        }
        // }
        .grid-content {
          min-height: 36px;
        }
      }
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
  .footline {
    height: 6px;
    background: #4b3f91;
    margin-top: 11rem;
  }
  .footerbar {
    position: relative;
    padding: 18px 0;
  }
}
.go_style {
  border: 1px solid #ddd;
  border-radius: 4px;
  line-height: 26px;
  color: #666;
}
.text-content {
  text-align: center;
  margin-top: 100px;
  line-height: 100px;
  font-size: 26px;
  color: #555;
}
//登录的样式
.header-title {
  padding: 0px 0 0 22px;
  background: #ff9200;
  color: white;
  height: 35px;
  line-height: 35px;
}
.backgroundimg {
  position: relative;
  .login-form {
    width: 300px;
    padding: 0 20px 20px;
    top: 40px;
    /*right: 8.66%;*/
    right: 18.66%;
    line-height: 3rem;
    border: 1px solid #ddd;
    background: white;
    .form-title {
      font-size: 18px;
      overflow: hidden;
      img {
        float: left;
        margin-top: 10px;
        margin-right: 10px;
      }
    }
    .form-btn {
      text-align: center;
      color: white;
      background: #4b3f91;
      font-size: 16px;
    }
    .form-link {
      line-height: 20px;
      margin-top: 10px;
      .form-link-p1 {
        a {
          font-weight: 600;
        }
      }
      .form-link-p2 {
        a {
          color: #f1841b;
          font-weight: 600;
        }
      }
    }
    .form-hr {
      height: 1px;
      border-bottom: 1px #ddd solid;
      margin: 9px -20px 0 -20px;
    }
    .form-order-login {
      margin-top: 17px;
    }
  }
}
.downloadLink {
  font-size: 14px;
  float: left;
  padding: 10px;
  text-de &:hover {
    color: #4b3f91;
    text-decoration: underline;
  }
}
.productright {
  margin-bottom: 127px;
  padding: 0 25px 25px;
  border-radius: 7px;
  box-shadow: 0px 0px 0px 0px;
  cursor: pointer;
}
</style>
<style lang="scss">
#_magnifier_layer {
  position: absolute;
  z-index: 9999;
  background: #f9f9f9;
  border: 2px solid #aaa;
}
._magnifier {
  position: relative;
  display: inline-block;
}
._magnifier img {
  vertical-align: middle;
}
._magnifier_zoom {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
}
.descreption {
  font-size: 15px;
  img {
    vertical-align: middle !important;
    width: 50%;
    display: block;
  }
}
.el-breadcrumb__item:last-child {
  float: none;
}
//登录的样式
.login-dialog {
  .el-dialog__header {
    padding: 0px 0 0 22px;
    background: #ff9200;
    color: white;
    height: 0px;
    line-height: 0px;
  }
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog__headerbtn {
    top: 5px;
    .el-dialog__close {
      color: white;
    }
  }
  .el-dialog__title {
    color: white;
  }
}
.el-message--error {
  top: 60px;
}
.sharelink {
  min-width: 270px;
  float: right;
  padding-left: 34px;
  background-color: #f8f8f8;
  border: solid 1px #e0e0e0;
  overflow: hidden;
  .imgout1 {
    height: 42px;
    float: left;
    p {
      line-height: 20px;
    }
  }

  .shareline {
    text-align: center;
    width: 40px;
    height: 38px;
    margin: 1px 0;
    line-height: 40px;
    display: inline-block;
    border-right: 1px solid #ddd;
  }
  .imgout {
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    cursor: pointer;
  }
}

.-mob-share-facebook {
  background-image: url("") !important;
}
.-mob-share-twitter {
  background-image: url("") !important;
}
.-mob-share-google {
  background-image: url("") !important;
}
.-mob-share-pinterest {
  background-image: url("") !important;
}
</style>
<template>
  <section class="container">
    <div class="productdetail __main">
      <headerbar></headerbar>
      <div class="productdetail-content __main">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="layout" :gutter="0" v-if="goods">
          <div>
            <div class="grid-content bg-purple">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
                <el-breadcrumb-item
                  
                  v-for="(item,index) in nav_bar"
                  :key="index"
                  :replace="true"
                    v-if="nav_bar.length !== index+1"
                  :to="{name: 'product-list-cate',params:{cate:item.id},query:{
                token:$route.query.token,
                keyword:$route.query.keyword,
                order_by:$route.query.order_by,
                asc_or_desc:$route.query.asc_or_desc,
                brand_id:$route.query.brand_id,
                page:$route.query.page,
                min_price:$route.query.min_val,
                max_price:$route.query.max_val,
              }}"
                >{{item.en_name}}</el-breadcrumb-item>
                <el-breadcrumb-item
                  v-for="(item,index) in nav_bar"
                  :key="index"
                  :replace="true"
                  v-if="nav_bar.length === index+1"
                >{{item.en_name }}</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="content-line1">
                <el-row :gutter="10">
                  <el-col :span="5" class="grid-content bg-purple">
                    <div class="productimg">
                      <img
                        class="bigimg"
                        :src="showimgs + '?imageMogr2/thumbnail/240x240!'"
                        @mouseenter="handOver(showimgs,$event)"
                        @mousemove="handMove($event)"
                        @mouseout="handOut($event)"
                      >
                      <smallcommonimgchange
                        :images="goods.images"
                        :showimgs="showimgs"
                        @changeimgs="changephoto"
                      ></smallcommonimgchange>
                      <div class="enlarged">
                        <img :src="showimgs">
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="13" class="grid-content bg-purple">
                    <div class="productcontent">
                      <div class="title">
                        <p v-clampy="3" :title="goods.title">{{goods.title}}</p>
                      </div>
                      <div class="productcontent-parameter">
                        <div class="line1">
                          <p>Product ID:&nbsp;&nbsp;{{goods.id}}</p>
                        </div>
                        <div class="line1">
                          <p>
                            price:
                            <span>&nbsp;${{goods.sell_price|money}}&nbsp;~ &nbsp;</span>
                            <span v-if="goods.msell_price">${{goods.msell_price|money}}</span>
                          </p>
                        </div>
                        <div class="line2">
                          <p>
                            State of Supply:
                            <span
                              class="line2-span"
                            >The supply of this product is sufficient and can give constant supply,welcome to order</span>
                          </p>
                        </div>
                        <div class="line5">
                          <p class="line5-title">Quantity:</p>
                          <div class="input1">
                            <el-input
                              style="float:left;width:88%;"
                              v-model="goods.num"
                              @change="restrictQuantity(goods)"
                            ></el-input>
                            <div class="btnground">
                              <div class="btn" @click="setnumber('add')">
                                <p class="addbtn">+</p>
                              </div>
                              <div
                                v-show="Number(goods.minimum) < goods.num"
                                class="btn"
                                @click="setnumber('reduce')"
                              >
                                <p class="reducebtn">-</p>
                              </div>
                            </div>
                          </div>
                          <span
                            style="color: red;position: relative;top: 8px;left: 10px"
                          >Minimum order quantity</span>
                        </div>
                        <div class="line6">
                          <el-button
                            class="line6-el-button-orange"
                            @click="contactCart(goods.id,goods.num)"
                          >
                            <i class="icon iconfont icon-contact"></i>CONTACT SUPPLIER
                          </el-button>
                          <el-button
                            class="line6-el-button-pruple"
                            @click="addtocart(goods.id,goods.num)"
                          >
                            <i class="icon iconfont icon-gouwuche"></i>ADD TO CART
                          </el-button>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="productright" onclick="$crisp.push(['do', 'chat:open'])">
                      <img src="../../assets/img/contact.png">
                    </div>
                    <div class="sharelink">
                      <div class="imgout1">
                        <p>Share</p>
                        <p>Link</p>
                      </div>
                      <div class="shareline">
                        <img src="../../assets/img/share1.png" alt>
                      </div>

                      <div class="imgout -mob-share-google">
                        <img src="../../assets/img/share.png" alt>
                      </div>
                      <div class="imgout -mob-share-pinterest">
                        <img src="../../assets/img/share4.png" alt>
                      </div>
                      <div class="imgout -mob-share-twitter">
                        <img src="../../assets/img/share3.png" alt>
                      </div>
                      <div class="imgout -mob-share-facebook">
                        <img src="../../assets/img/share2.png" alt>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="content-line2">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane
                    :label="item.name_en"
                    :value="item.name_en"
                    :key="key"
                    v-for="(item,index,key) in goodsparamgroup"
                  >
                    <div class="params-outer">
                      <div
                        :key="key"
                        v-for="(items,index,key) in item.item_sort"
                        :class="parameterized_Style(items.title,items.value)"
                      >
                        <p>
                          {{items.title}}:
                          <span>{{items.value}}</span>
                        </p>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Download Product Specification" v-if="goods.documents">
                    <div>
                      <p style="font-size:16px;color:#4b3f91;font-weight:bold;">Download:</p>
                      <div v-for="(item,index,key) in goods.documents" :key="key">
                        <a :href="item.path" class="downloadLink" target="_block">{{item.name}}</a>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
              <div class="content-line3">
                <el-row :gutter="0">
                  <el-col :span="4">
                    <div class="content-line3-left-item-title">
                      <p>Sell like hot cakes</p>
                    </div>
                    <div
                      v-for="(items,index) in hotData"
                      :key="index"
                      @click="openProduct(items.id)"
                      class="content-line3-left-item"
                    >
                      <img :src="items.img_url">
                      <div class="content-line3-left-item-text">
                        <p
                          class="content-line3-left-item-p1"
                          :title="items.title"
                        >{{items.title | ellipsis(40,items.title)}}</p>
                        <p class="content-line3-left-item-p3">
                          {{items.sell_price | numFilter}}
                          <span>{{items.msell_price | numFilter}}</span>
                        </p>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="20">
                    <div class="content-line3-right-title">
                      <p>Commodity details</p>
                    </div>
                    <div class="content-line3-right">
                      <div class="descreption" v-html="goods.description"></div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-content">
          <i class="el-icon-error"></i>
          Unfortunately！the product is lost
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
    <modal @on-close="closeThis()" :is-show="isShowLogin"></modal>
  </section>
</template>
<script>
import $ from "jquery/dist/jquery.slim.min";
import headerbar from "../../components/common/headerbar.vue";
import footerbar from "../../components/common/footbar.vue";
import commonheader from "../../components/common/commonheader.vue";
import commonheaderbar from "../../components/common/commonheaderbar.vue";
import smallcommonimgchange from "../../components/common/smallcommonimgchange.vue";
import righttab from "../../components/common/righttab.vue";
import { imgCompress } from "~/plugins/filters.js";
import { _fastsort,_debounce } from "../../utils/methods";
import clampy from "@clampy-js/vue-clampy";
const modal = () => import("~/components/common/loginModel");
export default {
  name: "productId",
  directives: {
    clampy
  },
  async asyncData({ app, params, store, query }) {
    let goodsUrl = app.store.state.headerUrl + "goods/" + params.id;
    // let temptoken = query.token;
    let temptoken ='';
    let goods = await app.$axios
      .get(goodsUrl, { headers: { token: temptoken } })
      .then(function(resp) {
        if (resp.status === 200 && resp.data.status === 400) {
          return "";
        } else {
          resp.data.data.params1 = [];
          if (resp.data.data.params) {
            var tempindex = 0;
            for (var i = 0; i < resp.data.data.params.length; i++) {
              if (i === 0) {
                resp.data.data.params1[tempindex] = [];
                resp.data.data.params1[tempindex].title = "params" + tempindex;
                resp.data.data.params1[tempindex].push(
                  resp.data.data.params[i]
                );
              } else if (
                resp.data.data.params[i].gid ===
                resp.data.data.params[i - 1].gid
              ) {
                resp.data.data.params1[tempindex].push(
                  resp.data.data.params[i]
                );
              } else {
                tempindex = tempindex + 1;
                resp.data.data.params1[tempindex] = [];
                resp.data.data.params1[tempindex].title = "params" + tempindex;
                resp.data.data.params1[tempindex].push(
                  resp.data.data.params[i]
                );
              }
            }
          }
          return resp.data.data;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    goods.num = goods.minimum;

    let goodsparamgroup = [];
    let category = []; // 菜单
    let showimgs = "";
    let nav_bar = [];
    let hotData = [];
    if (goods != "") {
      let initUrl = app.store.state.headerUrl + "init";
      let initData = await app.$axios
        .get(initUrl, { headers: { token: temptoken } })
        .then(function(resp) {
          return resp.data.data;
        });
      //构造参数显示数据
      goodsparamgroup = initData.mall.goods_param_group;
      let tempitem = [];
      if (
        goods.length === null ||
        goods.length === "0.00" ||
        goods.width === null ||
        goods.width === "0.00" ||
        goods.height === null ||
        goods.height === "0.00"
      ) {
      } else {
        tempitem.push({
          title: "Product Size",
          value:
            goods.length +
            "  " +
            "*" +
            "  " +
            goods.width +
            "  " +
            " * " +
            goods.height +
            "  " +
            "(cm)"
        });
      }
      if (goods.net_weight === null || goods.net_weight === "0.00") {
      } else {
        tempitem.push({
          title: "Net weight",
          value: goods.net_weight + "  " + "(kg)"
        });
      }
      if (goods.gross_weight === null || goods.gross_weight === "0.00") {
      } else {
        tempitem.push({
          title: "Gross weight",
          value: goods.gross_weight + "  " + "(kg)"
        });
      }
      if (
        goods.package_length === null ||
        goods.package_length === "0.00" ||
        goods.package_width === null ||
        goods.package_width === "0.00" ||
        goods.package_height === null ||
        goods.package_height === "0.00"
      ) {
      } else {
        tempitem.push({
          title: "Package Size",
          value:
            goods.package_length +
            "  " +
            "*" +
            "  " +
            goods.package_width +
            "  " +
            " * " +
            goods.package_height +
            "  " +
            "(cm)"
        });
      }

      //新增的柜型装货数量
      // if(goods.gp20_goods_num === null || (goods.gp20_goods_num === "0" ){

      // }
      tempitem.push({
        title: "20GP",
        value: goods.gp20_goods_num
      });

      tempitem.push({
        title: "40GP",
        value: goods.gp40_goods_num
      });
      tempitem.push({
        title: "40HQ",
        value: goods.hq40_goods_num
      });

      for (var i = 0; i < goodsparamgroup.length; i++) {
        for (var j = 0; j < goods.params1.length; j++) {
          if (goodsparamgroup[i].id === goods.params1[j][0].gid) {
            goodsparamgroup[i].item = goods.params1[j];
          }
        }
        if (goodsparamgroup[i].id === "3") {
          if (!goodsparamgroup[i].item) {
            goodsparamgroup[i].item = [];
          }
          goodsparamgroup[i].item = goodsparamgroup[i].item.concat(tempitem);
        } else if (goodsparamgroup[i].id === "2") {
          if (!goodsparamgroup[i].item) {
            goodsparamgroup[i].item = [];
          }
          let tempitem1 = [
            { title: "Minimum order quantity", value: goods.minimum }
          ];
          goodsparamgroup[i].item = goodsparamgroup[i].item.concat(tempitem1);
        } else {
          if (goods.goods_sn != "") {
            let tempitem1 = [{ title: "Model", value: goods.goods_sn }];
            if (!goodsparamgroup[i].item) {
              goodsparamgroup[i].item = [];
            }
            goodsparamgroup[i].item = goodsparamgroup[i].item.concat(tempitem1);
          }
        }
      }
      /**
       * @desc 自定义_快速排序(字符串由短到长)
       */
      function fastsort_UDF(arr) {
        if (arr.length < 2) {
          return arr;
        }
        let left = [];
        let right = [];
        let pivotIndex = Math.floor(arr.length / 2);
        let pivot = arr.splice(pivotIndex, 1)[0];
        arr.forEach((el, i) => {
          if (arr[i][0] < pivot[0]) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        });
        return fastsort_UDF(left).concat([pivot], fastsort_UDF(right));
      }

      // 增加item_sort键值，由键值的字符串长度总和排序（短至长）
      goodsparamgroup.forEach(element => {
        let temp = [];
        if (element.item && element.item.length > 0) {
          element.item.forEach((el, i) => {
            let strLength = (el.title + el.value).length || 0;
            temp.push([strLength, i]);
          });
        }
        let order = fastsort_UDF(temp);
        let array = [];
        order.forEach(e => {
          element.item.forEach((el, i) => {
            if (e[1] == i) {
              array.push(el);
            }
          });
        });
        element.item_sort = array;
      });
      // --新增完毕--

      let categoryUrl = app.store.state.headerUrl + "category";
      let categorydata = await app.$axios.get(categoryUrl).then(function(resp) {
        for (let i = 0; i < resp.data.data.length; i++) {
          resp.data.data[i].showindex = (i + 1).toString();
          for (var j = 0; j < resp.data.data[i].children.length; j++) {
            resp.data.data[i].children[j].showindex = i + 1 + "-" + (j + 1);
          }
        }
        return resp.data.data;
      });

      //构造显示面包屑
     
      // console.log(categorydata);
      // debugger
      for (let i = 0; i < categorydata.length; i++) {//一层
        if (Number(goods.category_id) === Number(categorydata[i].id)) {
          nav_bar.push({
            en_name: categorydata[i].en_name,
            id: categorydata[i].id
          });
        } else if (categorydata[i].children) { //二层
          for (let j = 0; j < categorydata[i].children.length; j++) {
            if (
              Number(goods.category_id) ===
              Number(categorydata[i].children[j].id)
            ) {
              nav_bar.push({
                en_name: categorydata[i].en_name,
                id: categorydata[i].id
              });
              nav_bar.push({
                en_name: categorydata[i].children[j].en_name,
                id: categorydata[i].children[j].id
              });
            } else if (categorydata[i].children[j].children) {  //三层
              for (
                let z = 0;
                z < categorydata[i].children[j].children.length;
                z++
              ) {
                if (
                  
                  Number(goods.category_id) ===
                  Number(categorydata[i].children[j].children[z].id)
                ) {
                  nav_bar.push({
                    en_name: categorydata[i].en_name,
                    id: categorydata[i].id
                  });
                  nav_bar.push({
                    en_name: categorydata[i].children[j].en_name,
                    id: categorydata[i].children[j].id
                  });
                  nav_bar.push({
                    en_name: categorydata[i].children[j].children[z].en_name,
                    id: categorydata[i].children[j].children[z].id
                  });
                }else if(categorydata[i].children[j].children[z].children){ //四层
                  for(let k= 0; k<categorydata[i].children[j].children[z].children.length;k++){
                     if (Number(goods.category_id) === Number(categorydata[i].children[j].children[z].children[k].id) ) {
                            nav_bar.push({
                              en_name: categorydata[i].en_name,
                              id: categorydata[i].id
                            });
                            nav_bar.push({
                              en_name: categorydata[i].children[j].en_name,
                              id: categorydata[i].children[j].id
                            });
                            nav_bar.push({
                              en_name: categorydata[i].children[j].children[z].en_name,
                              id: categorydata[i].children[j].children[z].id
                            });
                              nav_bar.push({
                              en_name: categorydata[i].children[j].children[z].children[k].en_name,
                              id: categorydata[i].children[j].children[z].children[k].id
                            });
                    }
                  }
                }
      
              }
            }
          }
        }
      }
      nav_bar.push({ en_name: goods.title, id: goods.id });//当前商品
      showimgs = goods.images[0].url;

      // 热销商品列表 // old:goods/hot/

      let hotUrl = app.store.state.headerUrl + "goods_recommend/like/" + 3;
      hotData = await app.$axios.get(hotUrl).then(function(resp) {
        return resp.data.data;
      });
      //菜单
      await store
        .dispatch("GET_CATEGORY",{
          store
        })
        .then(res => {
          category = res.data;
        });
    }


    return {
      goods: goods,
      goodsparamgroup: goodsparamgroup,
      category: category,
      showimgs: showimgs,
      nav_bar: nav_bar,
      hotData: hotData
    };
  },
  components: {
    headerbar,
    footerbar,
    commonheader,
    commonheaderbar,
    smallcommonimgchange,
    righttab,
    modal
  },
  data() {
    return {
      // 分享参数

      isShowLogin: false,
      //登录的参数
      username: "",
      userpassword: "",
      dialogVisible: false,
      checked1: false,

      token: "",
      chooseparamsindex: 0,
      email: "",
      password: "",
      repassword: "",
      checked: false,
      number1: 1,
      input5: "",
      value2: "WeChat",
      activeName: "second",
      fuwu: false,
      product_params: [],

      imgRect: {},
      imgObj: {},
      imgLayer: {},
      bigImg: {
        src: ""
      },
      configs: {
        height: 300,
        width: 480,
        maskWidth: 50,
        maskHeight: 50,
        maskColor: "red",
        maskOpacity: 0.1
      }
    };
  },
  methods: {
    handOver(src,e) {
      this.imgObj = this.$el.getElementsByClassName("bigimg")[0];
      this.imgRect = this.imgObj.getBoundingClientRect();
      this.bigImg = new Image();
      this.bigImg.src = src;
      //创建鼠标选择区域
      this.mouseMask = document.createElement("div");
      this.mouseMask.className = "_magnifier_zoom";
      this.mouseMask.style.background = this.configs.maskColor;
      this.mouseMask.style.height = this.configs.maskWidth + "px";
      this.mouseMask.style.width = this.configs.maskHeight + "px";
      this.mouseMask.style.opacity = '0';
      if (!this.isIE() || !this.isIE11()) {
        this.imgObj.parentNode.appendChild(this.mouseMask);
      }
      //创建预览框
      let imgLayer = document.createElement("div");
      this.imgLayer = imgLayer;
      let _layerHeight = this.configs.height;
      let _layerWidth = this.configs.width;
      imgLayer.id = "_magnifier_layer";
      imgLayer.style.width = _layerWidth + "px";
      imgLayer.style.height = _layerHeight + "px";
      imgLayer.style.left = this.imgRect.left + 4 + this.imgRect.width + "px";
      imgLayer.style.top = this.imgRect.top + "px";
      imgLayer.style.backgroundImage = `url('${src}')`;
      imgLayer.style.backgroundRepeat = "no-repeat";
      let imgLayer_forIE = document.createElement("div");
      imgLayer_forIE.id = "_layer_forIE";
      imgLayer_forIE.appendChild(imgLayer);
      document.body.appendChild(imgLayer_forIE);
      
    },
    handMove(e) {
      let objX = e.clientX - this.imgRect.left;
      let objY = e.clientY - this.imgRect.top;
      let backgroundX =
        objX * (Math.ceil(this.bigImg.width / this.imgObj.offsetWidth) / 2) -
        this.mouseMask.offsetWidth;
      let backgroundY =
        objY *
          (Math.ceil(this.bigImg.height / this.imgObj.offsetHeight) / 1.25) -
        this.mouseMask.offsetWidth;

      // //判断是否超出界限
      let _maskX = objX - this.mouseMask.offsetHeight / 2;
      let _maskY = objY - this.mouseMask.offsetWidth / 2;
      
      if (_maskY <= 0) {
        _maskY = 0;
      }
      if (_maskY + this.mouseMask.offsetHeight >= 240) {
        _maskY = 240 - this.mouseMask.offsetHeight;
      }

      if (_maskX <= 0) {
        _maskX = 0;
      }
      if (_maskX + this.mouseMask.offsetWidth >= 240) {
        _maskX = 240 - this.mouseMask.offsetWidth;
      }
      this.mouseMask.style.opacity = '0.1';

      if (this.isIE() || this.isIE11()) {
        this.mouseMask.style.msTransform  = `translate(${_maskX}px,${_maskY}px)`;
      } else {
        this.mouseMask.style.webkitTransform = `translate3d(${_maskX}px,${_maskY}px,0)`;
      }
      // //判断背景图是否小于预览框
      if (backgroundY + this.configs.height >= this.bigImg.height) {
        backgroundY = this.bigImg.height - this.configs.height;
      }
      if (backgroundX + this.configs.width >= this.bigImg.width) {
        backgroundX = this.bigImg.width - this.configs.width;
      }
        this.imgLayer.style.backgroundPositionX = `-${backgroundX}px `;
        this.imgLayer.style.backgroundPositionY = `-${backgroundY}px `;
    },
    handOut(e) {
      let removeNode = (obj, parentDiv) => {
        if (obj.parentNode) {
          if (this.isIE() || this.isIE11()) {
            obj.parentNode.removeChild(obj);
          } else {
            obj.remove();
            parentDiv.remove();
          }
        }
      };
      let parentDiv = document.getElementById("_layer_forIE");
      removeNode(this.imgLayer, parentDiv); // 放大图
      removeNode(this.mouseMask, parentDiv); // 鼠标区域
    },
    parameterized_Style(key, value) {
      return {
        params: true,
        "params-100": value ? key.length + value.length > 50 : false
      };
    },
    
      isIE() {
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
          return true;
        } else {
          return false;
        }
      },
      isIE11() {
        if (/Trident\/7\./.test(navigator.userAgent)) {
          return true;
        } else {
          return false;
        }
      },
    handleClick(tab) {},
    //选择商品模型
    selectmodel(name) {
      $(".pactive").removeClass("pactive");
      $("." + name).addClass("pactive");
    },
    //选择商品颜色
    selectcolor(name) {
      $(".imgactive").removeClass("imgactive");
      $("." + name).addClass("imgactive");
    },
    //设置商品数量
    setnumber(type) {
      this.goods.num = Number(this.goods.num);
      if (type === "add") {
        this.goods.num++;
      } else if (type === "reduce" && this.goods.num > this.goods.minimum) {
        this.goods.num--;
      }
    },
    changeNum(id, num, price) {},
    restrictQuantity(el) {
      if (el.num < Number(el.minimum)) {
        this.goods.num = Number(el.minimum);
        this.$message({
          message: "Not less than the minimum order quantity",
          type: "warning"
        });
      }
    },
    // 单产品询单
    openProduct(id, num) {
      //        this.$router.push({name: 'product-id',params:{id:item.id}})
      const { href } = this.$router.resolve({
        name: "product-id",
        params: { id, Quantity },
        query: { token: "" }
      });
      window.open(href, "_blank");
    },
    //加入购物车
    addtocart(id, num) {
      // console.log();

      let that = this;
      if (localStorage.getItem("users")) {
        this.$store.state.users = JSON.parse(localStorage.getItem("users"));
        this.token = JSON.parse(localStorage.getItem("users")).token;
        this.users = this.$store.state.users;
        that.$router.push({ name: "shoppingcart-cartlist" });

        let addtocartUrl = that.$store.state.headerUrl + "cart";
        let params = {
          goods_id: Number(id),
          num: Number(num)
        };
        let tempalert = that.$alert;
        that.comment
          .axiosPost(
            addtocartUrl,
            that.$axios,
            that.$store,
            params,
            that.$alert
          )
          .then(function(resp) {
            if (resp.data.code === 0) {
            } else {
            }
          });
      } else {
        that.isShowLogin = true;
      }
    },
    //切换图片
    changephoto(url) {
      this.showimgs = url;
    },
    fuxian() {
      let that = this;
      that.fuwu = true;
    },
    closeThis() {
      this.isShowLogin = false;
    },
    //登录弹出框的方法
    QQlogin() {},
    FBlogin() {},
    contactCart(id, num) {
      if (localStorage.getItem("users") !== null) {
        const { href } = this.$router.resolve({
          path: "/product-inquiry",
          query: { id, num }
        });
        window.open(href, "_blank");
      } else {
        this.addtocart(id, num);
      }
    },
    login() {
      var that = this;
      var tempalert = that.$alert;
      if (that.checked1) {
        localStorage.setItem("username", that.username);
        localStorage.setItem("userpassword", that.userpassword);
        localStorage.setItem("checked", that.checked1);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("userpassword");
        localStorage.removeItem("checked");
      }
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (mailReg.test(that.username)) {
        var url = that.$store.state.headerUrl + "login";
        var params = {
          user_name: that.username,
          password: that.userpassword
        };
        const loading = that.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        this.$axios
          .post(url, params)
          .then(resp => {
            //信息写入 for vuex
            this.$store.dispatch(
              "_Information",
              JSON.stringify(resp.data.data)
            );

            if (resp.data.code === 0) {
              loading.close();
              that.dialogVisible = false;
            } else {
              loading.close();
              tempalert("wrong user name or password!!!!!Please try again", {
                confirmButtonText: "ok"
              });
            }
          })
          .catch(function(error) {
            loading.close();
            tempalert("Please try again", {
              confirmButtonText: "ok"
            });
          });
      } else {
        tempalert("Please enter the correct mailbox format", {
          confirmButtonText: "ok"
        });
      }
    },
    //谷歌登录
    gLogin() {
      this.isShowLogin = true;
    },
    //登录本系统
    gLoginSelf() {
      let that = this;
      let url = that.$store.state.headerUrl + "/google/login/" + that.id_token;
      var tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(function(resp) {
          //信息写入 for vuex
          that.$store.dispatch("_Information", JSON.stringify(resp.data.data));
          if (resp.data.code === 0) {
            localStorage.setItem("users", JSON.stringify(resp.data.data));
            that.dialogVisible = false;
            location.reload();
          } else {
            tempalert("wrong user name or password!!!!!Please try again", {
              confirmButtonText: "ok"
            });
          }
        })
        .catch(function(error) {});
    }
  },
   head () {
    return {
      script:[{src:'http://f1.webshare.mob.com/code/mob-share.js?appkey=299cb38e266a0',id:"-mob-share",defer: true,async:false}],
      title: this.goods.title,
       meta: [
        { hid: 'description', name: 'description', content: this.goods.title }
      ]
    }
  },
  mounted() {
    function has3d() {
    if (!window.getComputedStyle) {
        return false;
    }

    var el = document.createElement('p'), 
        has3d,
        transforms = {
            'webkitTransform':'-webkit-transform',
            'OTransform':'-o-transform',
            'msTransform':'-ms-transform',
            'MozTransform':'-moz-transform',
            'transform':'transform'
        };

    // Add it to the body to get the computed style.
    document.body.insertBefore(el, null);

    for (var t in transforms) {
        if (el.style[t] !== undefined) {
            el.style[t] = "translate3d(1px,1px,1px)";
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
    }

    document.body.removeChild(el);

    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}
console.log('是否支持transform:' + has3d());

    if (localStorage.getItem("checked") === "true") {
      this.username = localStorage.getItem("username");
      this.userpassword = localStorage.getItem("userpassword");
      this.checked1 = true;
    } else {
      this.checked1 = false;
    }

    let temptitle = this.goods.title;
    let tempimg = this.showimgs+'?imageMogr2/thumbnail/45x45!';
    // console.log(this.goods);
    let tempid = this.goods.id;
    setTimeout(()=>{
      
    mobShare.config({
      debug: true, // 开启调试，将在浏览器的控制台输出调试信息

      appkey: '299cb38e266a0', // appkey

      params: {
        url: "http://www.getnaso.com/product/" + tempid + "?token=", // 分享链接
        title:temptitle, // 分享标题
        description: temptitle, // 分享内容
        pic:tempimg +'?imageMogr2/thumbnail/45x45!' // 分享图片，使用逗号,隔开
      },

      /**
       * 分享时触发的回调函数
       * 分享是否成功，目前第三方平台并没有相关接口，因此无法知道分享结果
       * 所以此函数只会提供分享时的相关信息
       *
       * @param {String} plat 平台名称
       * @param {Object} params 实际分享的参数 { url: 链接, title: 标题, description: 内容, pic: 图片连接 }
       */
      callback: function(plat, params) {}
    });
    })
  }
};
</script>
