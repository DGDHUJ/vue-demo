
<style lang="scss" scoped>
.cartlist-contents {
  .title {
    margin: 10px 0 0 0;
    border-bottom: 1px solid #ddd;
    line-height: 30px;
    padding: 0 0 10px 0;
    .title-item1 {
      .span1 {
        font-size: 16px;
        color: #4b3f92;
        font-weight: 600;
      }
      .span2 {
        font-size: 14px;
        color: #a6a6a6;
      }
    }
    .title-item2 {
      text-align: right;
      font-size: 14px;
      color: #4b3f92;
      font-weight: 600;
      p {
        display: flex;
        flex-direction: row-reverse;
        span {
          text-align: center;
          width: 20%;
        }
      }
    }
  }
  .list {
    /*这个是新加的没登陆显示没有购物车的div样式*/
    .login_shopNone {
      padding: 40px 0 40px;
      border-bottom: 1px solid #ddd;
      .icon {
        background-color: #fff;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        border: 1px solid #d5d5d5;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 20px;
      }
      .el-button {
        width: 150px;
        background-color: #4b3f91;
        color: #fff;
        border: 0;
        margin-right: 20px;
      }
      .spancolor {
        font-size: 14px;
        color: #4b3f91;
        font-weight: bold;
      }
    }
    /*这个是新加的登陆了显示没有购物车的div样式*/
    .shopNone {
      padding: 40px 0 40px;
      border-bottom: 1px solid #ddd;
      .icon {
        background-color: #fff;
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 20px;
      }
      .spancolor {
        font-size: 14px;
        color: #4b3f91;
      }
    }

    .items {
      // display: flex;
      // flex-direction: row;
      // flex-wrap: nowrap;
      overflow: hidden;
      padding: 22px 0;
      border-bottom: 1px solid #ddd;
      .left {
            margin-top: 32.5px;
        float: left;
        width: 40px;
        align-self: center;
        .out {
          width: 25px;
          height: 25px;
          border: 1px solid #ddd;
          padding: 4px;
          .inner {
            width: 15px;
            height: 15px;
          }
          .choosed {
            background: #4b3f91;
          }
        }
      }
      .img {
        float: left;
        width: 90px;
        img {
          width: 100%;
          height: 90px;
          border: 1px solid #ddd;
        }
      }
      .right {
        float: left;
        width: 85%;
        padding-left: 20px;
        .right-line1 {
          // display: flex;
          overflow: hidden;
          .text1 {
            float: left;
            width: 60%;
            font-size: 14px;
            padding-right: 15px;
          }
          .input1 {
            float: left;
            // display: flex;
            width: 20%;
            padding-left: 66px;
            .btnground {
              width: 20px;
              text-align: center;
              .btn {
                .addbtn {
                  width: 100%;
                  height: 15px;
                  font-size: 14px;
                  user-select: none;
                  border: 1px solid #ddd;
                  line-height: 15px;
                }
                .addbtn:active {
                  font-size: 16px;
                  border: 1px solid deepskyblue;
                }
                .reducebtn {
                  width: 100%;
                  height: 15px;
                  user-select: none;
                  border: 1px solid #ddd;
                  line-height: 15px;
                }
                .reducebtn:active {
                  font-size: 16px;
                  border: 1px solid deepskyblue;
                }
              }
            }
          }
          .text2 {
            float: left;
            width: 20%;
            font-size: 14px;
            color: #f08518;
            font-weight: 600;
            align-self: center;
            text-align: center;
            p {
              display: inline-block;
            }
          }
          .input2 {
            display: flex;
            width: 10%;
            position: relative;
            .input2-span {
              align-self: center;
              position: absolute;
              top: 4px;
              left: 8px;
              z-index: 99;
              color: #f08518;
            }
          }
        }
        .right-line2 {
          display: flex;
          margin: 4px 0 0 0;
          font-size: 14px;
          line-height: 30px;
          p {
            min-width: 120px;
            color: #939393;
          }
        }
        .right-line3 {
          margin-top:24px;
          line-height: 30px;
          font-size: 14px;
          color: black;
          .right-line3--item {
            color: black;
            display: inline-block;
            .el-button {
              color: #4b3f91;
              border-color: #4b3f91;
            }
            .el-button:focus,
            .el-button:hover {
              color: #ffffff;
              border-color: #4b3f91;
              background-color: #4b3f91;
            }
            .a1 {
              margin-right: 10px;
            }
          }
          .right-line3--item1 {
            display: inline-block;
            .updatebtn {
              background-color: #4b3f91;
              color: white;
            }
          }
        }
      }
    }
  }
  .note {
    margin: 30px 0 0 0;
    .note-titele {
      line-height: 30px;
      font-size: 16px;
      font-weight: 600;
      color: #4b3f92;
      margin: 0 0 10px 0;
    }
    .note-text {
      .text-title {
        font-size: 18px;
        line-height: 2.5;
      }
      .text-radio {
        font-size: 16px;
        line-height: 2;
      }
      .note-text-line1 {
        line-height: 30px;
        font-size: 14px;
        color: #f08518;
        font-weight: 600;
        span {
          margin-right: 20px;
        }
      }
      .add-address {
        line-height: 3;
        font-size: 18px;
      }
      .add-address {
        span:active {
          color: #4b3f91;
          font-size: 20px;
        }
      }
      .note-text-line2 {
        display: flex;
        .right {
          width: 100%;
          text-align: right;
          align-self: center;
          .el-button {
            width: 150px;
            color: white;
            background: #4b3f91;
          }
        }
      }
      /*弹窗样式*/
      .el-dialog__wrapper {
        .content3 {
          margin: 20px 0;
          .items {
            margin: 10px;
            .elinput {
              width: 100%;
            }
            .elbutton {
              width: 30%;
              background-color: #4b3f91;
              border-color: #4b3f91;
            }
            .elcascader {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-dialog__wrapper {
  width: 850px !important;
  margin: auto !important;
}

.note-textarea {
  .el-textarea__inner {
    background: #f3f1ff;
  }
}

.note-selects {
  display: flex;
  margin: 20px 0;

  span {
    align-self: center;
    text-align: center;
    color: red;
    margin: 0 5px;
  }

  .el-select {
    margin-right: 20px;

    .el-select .el-input {
      width: 200px;
    }

    .el-input__inner {
      width: 200px;
      color: black;
    }
  }

  .el-input-group {
    width: 50%;

    .el-input-group__prepend {
      width: 120px;
      padding-right: 0;

      .el-select {
        width: 120px;
        padding-right: 0;
        margin-right: 0;
        border: 1px solid #ddd;
        background: white;

        .el-input__inner {
          width: 120px;
        }
      }
    }
    .el-input__inner {
      width: 200px;
    }
  }
}
.right-line1 .el-input-number__increase,
.right-line1 .el-input-number__decrease {
  top: 2px;
}
</style>
<template>
  <div class="cartlist-contents">
    <div class="title">
      <div class="title-item1">
        <p>
          <span class="span1">Shopping cart</span>
          <span
            class="span2"
          >(You can modify the planned purchase quantity and tell us the expected purchase price,We will reply you within 24 hours)</span>
        </p>
      </div>
      <div class="title-item2">
        <p>
          <!-- <span>Your Expected Price</span> -->
          <span>Intended Purchase Quantity</span>
          <span>Current Price</span>
        </p>
      </div>
    </div>
    <div class="list">
      <!--这个是登陆了但是没有购物车物品-->
      <div v-if="!cartdata" class="shopNone">
        <div style="margin: 0 auto;width: 345px;">
          <!--<div class="icon"><span>icon</span></div>-->
          <div class="icon">
            <i class="icon iconfont icon-gouwuche"></i>
          </div>
          <p class="spancolor">There is no product in the shopping cart at the moment.</p>
          <div>
            <nuxt-link slot="append" :to="{name: 'product-list-cate'}">
              <a class="cursor spancolor">Go shopping>></a>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="cartdata" :key="item.id" v-for="(item,index) in cartdata" class="items">
        <div class="left" @click="seleted(index)">
          <div class="out">
            <div :class="item.ischoosed==1 ? 'choosed' : '' " class="inner"></div>
          </div>
        </div>
        <div class="img">
          <nuxt-link :to="{name: 'product-id',params:{id:item.goods_id}}">
            <img :src="item.img_url">
          </nuxt-link>
        </div>
        <div class="right">
          <div class="right-line1">
            <div class="text1">
              <nuxt-link :to="{name: 'product-id',params:{id:item.goods_id}}">
                <p>{{item.title}}</p>
              </nuxt-link>
            </div>

            <div class="text2">
              <p>&nbsp;${{item.sell_price}}</p>
              <p v-if="item.msell_price != 0 ">&nbsp;~&nbsp;${{item.msell_price|money}}</p>
            </div>
            <div class="input1">
              <!-- <el-input size="mini" v-on:change="updatedata(item.goods_id,item.num,item.custom_price)" v-model="item.num" ></el-input> -->
              <el-input-number
                v-model="item.num"
                @change="updatedata(item.goods_id,item.num,item.custom_price)"
                size="mini"
                :min="Number(item.minimum)"
              ></el-input-number>
            </div>
          </div>
          <!-- <div class="right-line2">
            <p>model:
              <span></span>
            </p>
            <p>color:
              <span></span>
            </p>
            <p>size:
              <span></span>
            </p>
          </div> -->
          <div class="right-line3">
            <div class="right-line3--item">
              <el-button class="a1" @click="dialogopen(item.id,index)" size="mini">Delete</el-button>
              <el-button
                class="a2"
                @click="storedata(item.id,index)"
                size="mini"
              >temporarily save to the order</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      <div class="note-text">
        <div class="note-text-line2">
          <div class="right">
            <el-button @click="gosureorder">Submit</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="remind" :visible.sync="dialogVisible" width="30%">
      <span>Are you sure you want to delete this item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogclose">Cancel</el-button>
        <el-button type="primary" @click="deletecartdata(tempdeleteid,tempdeleteindex)">Determine</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import $ from "jquery/dist/jquery.slim.min";
// import {_debounce} from '~/utils/methods'
import enLocale from "element-ui/lib/locale/lang/en";
export default {
  name: "cartlist",
  scrollToTop: true,
  data() {
    return {
      token: "",
      newName: "",
      newphonenumber: "",
      newemail: "",
      centerDialogVisible3: false,
      radio2: null,
      dialogVisible: false,
      tempdeleteid: null,
      tempdeleteindex: null,
      twentyGP: 0,
      fortyGP: 0,
      fortyQH: 0,
      totalprice: 0,
      textarea: null,
      options: [],
      options1: [],
      options2: [],
      type: "Delivery Types",
      value: null,
      type1: "Settlement Modes",
      value1: null,
      value2: null,
      type2: null,
      input5: null,
      select: "",
      cartdata: [],
      addressdata: [],
      dialogFormVisible: false,
      addressid: null,
      tempName: "",
      tempphonenumber: "",
      tempemail: "",
      tempaddress: "",
      tempid: null,
      tempaddressid: null,
      city: [],
      props: {
        value: "id",
        children: "cities"
      }
    };
  },
  methods: {
    //跳转到商品详情页
    _goProductdetail() {},
    //打开添加新地址弹窗
    addnewcontacts() {
      this.centerDialogVisible3 = true;
    },
    //跳转到下单页面
    gosureorder() {
      let listdata = [];
      let addressitem = [];
      let tempalert = this.$alert;
      if (this.cartdata === [] && this.cartdata === null) {
        tempalert("Please choose merchandise", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      } else {
        for (var i = 0; i < this.cartdata.length; i++) {
          if (this.cartdata[i].ischoosed === 1) {
            listdata.push(this.cartdata[i]);
          }
        }
      }

      if (this.addressdata === null) {
        tempalert("Please choose address", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      } else {
        for (var i = 0; i < this.addressdata.length; i++) {
          if (this.radio2 === this.addressdata[i].id) {
            addressitem[0] = this.addressdata[i];
          }
        }
      }

      let data = {
        listdata: listdata,
        addressitem: addressitem
        //         date:this.comment.formate('yyyy-MM-dd',new Date(this.value2))
      };

      if (data.listdata.length === 0) {
        tempalert("Please select at least one item", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      }
      if (localStorage.getItem("receivedReplyData")) {
        localStorage.removeItem("receivedReplyData");
      }
      if (localStorage.getItem("adivsoryData")) {
        localStorage.removeItem("adivsoryData");
      }

      localStorage.setItem("carttempData", JSON.stringify(data));
      this.$router.push({ name: "quotation" });
      //       this.$router.push({name:'shoppingcart-confirmorder',query:{data:data}});
    },
    //数量按钮控制
    setnumber(type, index) {
      this.cartdata[index].num = Number(this.cartdata[index].num);
      if (type === "add") {
        this.cartdata[index].num++;
        this.updatedata(
          this.cartdata[index].goods_id,
          this.cartdata[index].num,
          this.cartdata[index].custom_price
        );
      } else if (type === "reduct") {
        this.cartdata[index].num--;
        this.updatedata(
          this.cartdata[index].goods_id,
          this.cartdata[index].num,
          this.cartdata[index].custom_price
        );
      }
    },
    //选中购物车单
    seleted(index) {
      if (this.cartdata[index].ischoosed === 0) {
        this.cartdata[index].ischoosed = 1;
      } else {
        this.cartdata[index].ischoosed = 0;
      }
      //        this.cul();
    },
    //获取购物车数据
    getcartdata() {
      var that = this;
      let cartdataUrl = that.$store.state.headerUrl + "cart";
      let tempalert = this.$alert;
      that.comment
        .axiosGet(cartdataUrl, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            if (resp.data.data !== null) {
              for (var i = 0; i < resp.data.data.length; i++) {
                resp.data.data[i].ischoosed = 0;
              }
            }
            that.cartdata = resp.data.data;
            if (resp.data.data) {
              if (resp.data.data.length > 0) {
                for (let i = 0; i < resp.data.data.length; i++) {
                  resp.data.data[i].num = Number(resp.data.data[i].num);
                }
              }
            }
          } else {
            //              tempalert(resp.data.msg, {
            //                confirmButtonText: 'ok',
            //                center:true,
            //                callback: action => {
            //                  if(resp.data.msg ==='登录已过期'){
            //                    that.$router.push('/login');
            //                  }else{
            //                    that.$router.go(-1);
            //                  }
            //                }
            //              });
          }
        });
    },
    //购物车删除商品
    deletecartdata(id, index) {
      var that = this;
      let deleteCartUrl = that.$store.state.headerUrl + "cart";
      let tempalert = this.$alert;
      let params = {
        id: Number(id)
      };
      that.comment
        .axiosDelete(deleteCartUrl, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          that.dialogVisible = false;
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.cartdata.splice(index, 1);
                //                that.cul();
                //              执行完移除刷新页面
                // location.reload();
              }
            });
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {}
            });
          }
        });
    },
    //打开弹出框
    dialogopen(id, index) {
      this.tempdeleteid = id;
      this.tempdeleteindex = index;
      this.dialogVisible = true;
    },
    //关闭弹出框
    dialogclose() {
      this.dialogVisible = false;
    },
    testA(t) {
      // console.log(t)
    },
    //修改弹出框的内容
    updatedata(id, num, price) {
      var that = this;
      let data = {
        goods_id: Number(id),
        num: Number(num),
        custom_price: Number(price)
      };
      let updateurl = that.$store.state.headerUrl + "cart";
      let tempalert = that.$alert;
      // this._debounce(this.testA('test'))
      that.comment
        .axiosPut(updateurl, that.$axios, that.$store, data, tempalert)
        .then(function(resp) {
          // that.getcartdata();
          if (resp.data.code === 0) {
          } else {
            tempalert(resp.data.msg + "!!   Please try again!", {
              confirmButtonText: "ok",
              center: true
            });
          }
        });
    },
    //商品暂存
    storedata(id, index) {
      var that = this;
      let storeUrl = that.$store.state.headerUrl + "/cart/store";
      let data = {
        id: Number(id)
      };
      let tempalert = that.$alert;
      this.comment
        .axiosPost(storeUrl, that.$axios, that.$store, data, tempalert)
        .then(function(resp) {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.cartdata.splice(index, 1);
              }
            });
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {}
            });
          }
        });
    },
    handleItemChange(val, e) {
      let that = this;
      let portUrl =
        this.$store.state.headerUrl + "freight/port_by_country_id/" + val;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(portUrl, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            for (var i = 0; i < resp.data.data.length; i++) {
              resp.data.data[i]["label"] = resp.data.data[i]["en_name"];
            }
            for (var i = 0; i < that.city.length; i++) {
              if (that.city[i].id === val[0]) {
                that.city[i].cities = resp.data.data;
              }
            }
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.getcity();
              }
            });
          }
        });
    }
  },
  mounted() {
    var that = this;
     if(localStorage.getItem('users')){
         that.token = JSON.parse(localStorage.getItem("users")).token;
    that.getcartdata();
    if (localStorage.getItem("receivedReplyData")) {
      localStorage.removeItem("receivedReplyData");
    }
      }
   
  },
  watch: {
    //监听确认删除的弹出框状态
    dialogVisible: function(val, oldVal) {
      if (val === false) {
        this.tempdeleteid = null;
        this.tempdeleteindex = null;
      }
    }
  }
};
</script>
