<style lang="scss" scoped>
.advisory {
  overflow: hidden;
  background: white;
  .advisory-content {
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    background: white;
    height: 73%;
    width: 100%;
    .talk {
      /*overflow: hidden;*/
      background: #eeeeee;
      padding: 10px;
      .talk-left {
        float: left;
        width: 70%;
        .shuruneirong {
          background: #eeeeee;
          margin-right: 10px;
          border: 1px solid #ddd;
          .shuruneirong-title {
            overflow: hidden;
            height: 40px;
            line-height: 40px;
            border: 1px solid #ddd;
            font-size: 14px;
            padding: 0 10px;
            .title-p1 {
              float: left;
            }
            .title-p2 {
              float: right;
            }
          }
          .showtalk {
            border: 1px solid #ddd;
            height: 470px;
            overflow-y: scroll;
            padding: 20px 0;
            .talk-list {
              overflow: hidden;
              .talk-time {
                text-align: center;
                line-height: 40px;
                font-size: 14px;
              }
              .talker {
                overflow: hidden;
                float: left;
                margin-left: 20px;
                text-align: center;
                .talker-img {
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                }
              }
              .talk-content {
                font-size: 15px;
                float: left;
                width: 70%;
                margin-left: 20px;
                overflow: hidden;
                padding: 10px 10px 20px 20px;
                background: white;
                border-radius: 10px;
                .talk-file {
                  overflow: hidden;
                  margin: 10px 0 0 0;
                  .file-name {
                    float: left;
                    width: 350px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .file-down {
                    float: right;
                    color: #e77b1e;
                    cursor: pointer;
                  }
                }
              }
            }
            .talk-list1 {
              overflow: hidden;
              .talk-time {
                text-align: center;
                line-height: 40px;
                font-size: 14px;
              }
              .talker {
                overflow: hidden;
                float: right;
                margin: 0 20px;
                text-align: center;
                .talker-img {
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                }
              }
              .talk-content {
                background: #4b3f91;
                color: white;
                font-size: 15px;
                float: right;
                width: 70%;
                margin-left: 20px;
                overflow: hidden;
                padding: 10px 10px 20px 20px;
                border-radius: 10px;
                .talk-file {
                  overflow: hidden;
                  margin: 10px 0 0 0;
                  .file-name {
                    float: left;
                    width: 350px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .file-down {
                    float: right;
                    color: #e77b1e;
                    cursor: pointer;
                  }
                }
              }
            }
          }
          .attachment {
            overflow: hidden;
            height: 40px;
            line-height: 40px;
            .attachment-text1 {
              float: left;
              font-size: 15px;
              color: #e75640;
              font-weight: bold;
              cursor: pointer;
            }
            .attachment-text2 {
              float: right;
              span {
                color: #e75640;
              }
            }
          }
        }
        .send {
          margin-top: 10px;
          overflow: hidden;
          .sendbtn {
            float: right;
            margin-right: 15px;
            width: 155px;
            text-align: center;
            height: 40px;
            line-height: 40px;
            border: 1px solid #4b3f91;
            background: #4b3f91;
            font-size: 16px;
            color: white;
            cursor: pointer;
            border-radius: 5px;
          }
        }
      }
      .talk-right {
        float: left;
        background: white;
        width: 30%;
        border: 1px solid #ddd;
        height: 700px;
        overflow-y: scroll;
        .sale-touxiang {
          text-align: center;
          height: 180px;
          padding-top: 25px;
          img {
            height: 150px;
            width: 150px;
            border-radius: 50%;
          }
        }
        .sale-name {
          text-align: center;
          font-size: 18px;
        }
        .sale-address {
          text-align: center;
          color: #47494e;
          font-size: 17px;
        }
        .sale-Info {
          overflow: hidden;
          margin: 0 10px 0 10px;
          border-bottom: 1px solid #ddd;
          height: 40px;
          line-height: 40px;
          .Info-title {
            float: left;
            font-size: 16px;
          }
          .Info-content {
            float: right;
            font-size: 16px;
          }
        }

        .product-Info1-outer {
          overflow: hidden;
          border: 1px solid #ddd;
          margin: 10px;
          position: relative;
          .outer-i {
            color: red;
            position: absolute;
            right: 10px;
            cursor: pointer;
            top: 10px;
          }
          .product-Info1 {
            margin: 10px 10px 0 10px;
            overflow: hidden;
            .product-img {
              float: left;
              height: 90px;
              width: 90px;
              border: 1px solid #ddd;
              margin: 10px 10px 0 0;
            }
            .product-data {
              float: left;
              height: 110px;
              width: 132px;
              .product-data-p {
                height: 60px;
                line-height: 30px;
                font-size: 14px;
                margin: 10px 0 0 0;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .data-text {
                height: 30px;
                line-height: 30px;
                font-size: 14px;
              }
            }
          }
          .product-Info2 {
            margin: 10px 10px 0 10px;
            .data-text {
              font-size: 16px;
              span {
                color: #e77e26;
              }
            }
            .data-text1 {
              margin: 10px 0;
              font-size: 16px;
            }
          }
        }

        .product-add1 {
          height: 40px;
          line-height: 40px;
          border: 1px solid #ddd;
          padding: 0 0 0 10px;
          font-size: 16px;
          color: #e75640;
          font-weight: bold;
          cursor: pointer;
        }
        .addorder {
          padding: 10px 0;
          overflow: hidden;
          .addorderBtn {
            float: right;
            background: #4b3f91;
            color: white;
          }
        }

        .product-add {
          margin: 10px 10px 0 10px;
          .product-btn {
            float: right;
            height: 35px;
            line-height: 35px;
            color: white;
            background: #4b3f91;
            border-radius: 5px;
            width: 120px;
            text-align: center;
            font-size: 15px;
            cursor: pointer;
          }
        }
      }
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
.addproduct-dialog {
  .addproduct {
    padding: 20px 60px;
    overflow: hidden;
    .shuoming {
      margin: 20px 0;
    }
    .addBtn {
      background: #4b3f91;
      border-radius: 5px;
      float: right;
      padding: 0 20px;
      line-height: 40px;
      color: white;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    }
  }
}
.sanjiao-span-right {
  width: 0;
  position: absolute;
  right: 90px;
  height: 0;
  top: 57px;
  border-left: 12px solid #4b3f91;
  border-bottom: 12px solid transparent;
  border-top: 12px solid transparent;
  z-index: 11;
}
.sanjiao-span-left {
  width: 0;
  left: 90px;
  height: 0;
  top: 57px;
  border-right: 12px solid white;
  border-bottom: 12px solid transparent;
  border-top: 12px solid transparent;
  position: absolute;
  z-index: 11;
}
</style>
<style lang="scss">
//登录的样式
.addproduct-dialog {
  .el-dialog__header {
    line-height: 0px;
  }
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog__headerbtn {
    top: 5px;
  }
}
</style>
<template>
  <section class="container">
    <div class="advisory">
      <headerbar></headerbar>
      <div class="advisory-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name:'member-infoList'}">Message Centre</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/'}">New Message</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="talk">
            <div class="talk-left">
              <div class="shuruneirong">
                <div class="shuruneirong-title">
                  <p class="title-p1">Inquiry ID：{{messageData.id}}</p>
                  <p class="title-p2">{{messageData.title}}</p>
                </div>
                <div class="showtalk" id="showtalk">
                  <div
                    style="position: relative"
                    v-for="(item,index,key) in messageData.record_list"
                    :key="key"
                    :class="{'talk-list1':item.from_member === 1,'talk-list':item.from_member !== 1}"
                  >
                    <div
                      class="talk-time"
                    >{{comment.formate('yyyy-MM-dd hh:mm:ss', new Date(Number(item.create_time)*1000))}}</div>
                    <div class="talker" v-if="item.from_member === 1">
                      <img
                        v-if="userInfo.avatar !== '' &&
                         userInfo.avatar !== null &&
                         userInfo.avatar !== undefined"
                        class="talker-img"
                        :src="userInfo.avatar"
                      >
                      <img
                        v-if="userInfo.avatar === '' ||
                        userInfo.avatar === null ||
                          userInfo.avatar === undefined"
                        class="talker-img"
                        src="../../assets/img/LOGO_NO_100x100.png"
                      >
                      <p>{{userInfo.nickname}}</p>
                    </div>
                    <div class="talker" v-if="item.from_member !== 1">
                      <img class="talker-img" :src="naso_user.avatar_url">
                      <p>{{naso_user.nickname}}</p>
                    </div>
                    <div class="talk-content">
                      <p class="main-content">{{item.content}}</p>
                      <div
                        class="talk-file"
                        v-if="item.attr_link!==null&&item.attr_link!==''&&item.attr_link!==undefined"
                      >
                        <p class="file-name">{{item.attr_link}}</p>
                        <a class="file-down" @click="mydownload(item.attr_link)">Download</a>
                      </div>
                    </div>
                    <div
                      :class="{'sanjiao-span-right':item.from_member === 1,'sanjiao-span-left':item.from_member !== 1}"
                    ></div>
                  </div>
                </div>
                <div class="textarea">
                  <no-ssr placeholder="Loading...">
                    <picker-area v-model="textarea3" emoji="point_up"/>
                  </no-ssr>
                </div>
                <div class="showfile">{{fileName}}</div>
                <div class="attachment">
                  <div class="attachment-text1">
                    <label
                      class="ui_button ui_button_primary"
                      style="cursor: pointer;"
                      for="xFile"
                    >+ Add attachment</label>
                    <form>
                      <input
                        type="file"
                        id="xFile"
                        @change="update"
                        style="position:absolute;clip:rect(0 0 0 0);"
                      >
                    </form>
                  </div>
                  <el-progress
                    v-show="fileUrl===null && jindu>0 "
                    style="float: left;width: 150px;height: 40px;margin-left: 30px;line-height: 40px;"
                    :percentage="jindu"
                  ></el-progress>
                  <!-- <div class="attachment-text2">Remaining: <span>16000</span></div> -->
                </div>
              </div>
              <div class="send">
                <div class="sendbtn" @click="recordMessage">Send inquiry now</div>
              </div>
            </div>
            <div class="talk-right">
              <div class="sale-touxiang">
                <img :src="naso_user.avatar_url" height="340" width="349">
              </div>
              <div class="sale-name">{{naso_user.nickname}}</div>
              <!--<div  class="sale-address">China.guangzhou</div>-->
              <div class="sale-Info">
                <p class="Info-title">E-mail：</p>
                <p class="Info-content">{{naso_user.email}}</p>
              </div>
              <div class="sale-Info">
                <p class="Info-title">Phone：</p>
                <p class="Info-content">{{naso_user.mobile}}</p>
              </div>
              <div class="sale-Info">
                <p class="Info-title">Whatsapp：</p>
                <p class="Info-content">{{naso_user.whatsapp}}</p>
              </div>
              <!--  <div class="sale-Info">
                <p class="Info-title">Wechat：</p>
                <p class="Info-content">txcgg159</p>
              </div>-->
              <div class="sale-Info">
                <p class="Info-title">QQ：</p>
                <p class="Info-content">{{naso_user.qq}}</p>
              </div>

              <div class="product-Info1-outer" v-for="(item,index,key) in goods_list" :key="key">
                <i class="el-icon-error outer-i" @click="deleteproduct(index)"></i>
                <div class="product-Info1">
                  <img class="product-img" :src="item.img_url">
                  <div class="product-data">
                    <p class="product-data-p">{{item.goods_info.title}}</p>
                    <p class="data-text">Product ID：{{item.goods_info.id}}</p>
                  </div>
                </div>
                <div class="product-Info2">
                  <p class="data-text">
                    EXW price:
                    <span>${{item.goods_info.sell_price|money}} ~ ${{item.goods_info.msell_price|money}}</span>
                  </p>
                  <div class="data-text1">
                    <span>Quantity：</span>
                    <el-input-number
                      style="width:150px;"
                      v-model="item.quantity"
                      @change="changeNum(item.goods_info.id,item.quantity)"
                      :min="Number(item.goods_info.minimum)"
                    ></el-input-number>
                  </div>
                  <p class="data-text">Minimum order quantity：{{item.goods_info.minimum || ''}} price</p>
                </div>
              </div>

              <div class="product-add1" @click="opentankuang">+ Add product</div>
              <div class="addorder">
                <el-button class="addorderBtn" @click="goquotation">quotation</el-button>
              </div>
            </div>

            <div style="clear:both"></div>
          </div>
        </div>
        <div class="footline"></div>
        <footerbar></footerbar>
        <righttab></righttab>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="450px" class="addproduct-dialog">
      <div class="addproduct">
        <el-input v-model="productID" placeholder></el-input>
        <div
          class="shuoming"
        >Please fill in the input ID of the product ID you need to consult.Click "Add Product" add to the message.</div>
        <img
          src="../../assets/img/addproduct-demo.png"
          style="width: 330px;border-bottom: 1px solid #ddd;"
        >
        <div class="addBtn" @click="getproduct">Add Product</div>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import $ from "jquery/dist/jquery.slim.min";
import headerbar from "../../components/common/headerbar.vue";
import footerbar from "../../components/common/footbar.vue";
import commonheader from "../../components/common/commonheader.vue";
import commonheaderbar from "../../components/common/commonheaderbar.vue";
import righttab from "../../components/common/righttab.vue";
import PickerArea from "vue-emoji-mart-picker";
export default {
  name: "advisory",
  async asyncData({ store }) {
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY",{
        store
      })
      .then(res => {
        category = res.data;
      });

    return { category };
  },
  components: {
    headerbar: headerbar,
    footerbar: footerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    righttab: righttab,
    PickerArea
  },
  data() {
    return {
      input: "",
      textarea3: "",
      num1: null,
      messageData: {},
      userInfo: {},
      goods_list: [],
      naso_user: {},
      dialogVisible: false,
      productID: null,
      fileName: null,
      fileUrl: null,
      jindu: 0
    };
  },
  methods: {
    //去下单
    goquotation() {
      let tempalert = this.$alert;
      if (this.goods_list.length === 0) {
        tempalert("Please select a product", {
          confirmButtonText: "ok",
          center: true
        });
      } else {
        if (localStorage.getItem("receivedReplyData")) {
          localStorage.removeItem("receivedReplyData");
        }
        if (localStorage.getItem("carttempData")) {
          localStorage.removeItem("carttempData");
        }
        localStorage.setItem("adivsoryData", JSON.stringify(this.goods_list));
        this.$router.push({ name: "quotation" });
      }
    },

    //修改商品数量
    changeNum(id, quantity) {
      let that = this;
      let url = that.$store.state.headerUrl + "message/goods";
      let params = {
        message_id: Number(that.messageData.id),
        goods_info: { id: Number(id) },
        //          goods_id:Number(id),
        quantity: Number(quantity)
      };
      let tempalert = that.$alert;
      that.comment
        .axiosPut(url, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.getmessageData();
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
    //回复消息
    recordMessage() {
      let that = this;
      let url = that.$store.state.headerUrl + "message/record";
      let tempalert = that.$alert;
      let params = {};
      if (that.textarea3 === "" && that.fileUrl === null) {
        tempalert("Input can not be empty", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      } else {
        params = {
          message_id: Number(that.messageData.id),
          content: that.textarea3,
          attr_name: that.fileName,
          attr_link: that.fileUrl
        };
      }
      that.comment
        .axiosPost(url, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.getmessageData();
            that.fileName = null;
            that.fileUrl = null;
            that.jindu = 0;
            that.textarea3 = "";
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

    //上传文件
    update(e) {
      const jsonUsers = this.userInfo.token;
      let file = e.target.files[0];
      let type = e.target.files[0].name.split(".");
      let tempvalue = "";
      this.comment.getfile_md5(file, function(resp) {
        tempvalue = resp + "." + type[type.length - 1];
      });
      let times = 1;
      window.setInterval(() => {
        times--;
        if (times === 0) {
          this.jindu = 0;
          this.fileUrl = null;
          let d = new Date();
          let param = new FormData(); //创建form对象
          var putExtra = {
            fname: "",
            params: {},
            mimeType: null
          };
          putExtra.params["x:name"] = file.name.split(".")[0];
          param.append("file", file, file.name, putExtra);
          param.append("key", tempvalue);
          //FormData私有类对象，访问不到，可以通过get判断值是否传进去
          let config = {
            onUploadProgress: progressEvent => {
              var complete =
                ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              this.jindu = complete;
            },
            headers: { "Content-Type": "multipart/form-data" },
            useCdnDomain: true,
            disableStatisticsReport: false,
            retryCount: 6
          };
          //先从自己的服务端拿到七牛token
          this.$axios
            .get(this.$store.state.headerUrl + "qiniu_token", {
              headers: {
                token: jsonUsers
              }
            })
            .then(response => {
              this.token = response.data.data.token;
              this.showHeader = response.data.data.domain;
              param.append("token", this.token);
              this.uploading(param, config, file.name, file, putExtra); //然后将参数上传七牛
            });
        }
      }, 1000);
    },
    //七牛上传图片
    uploading(param, config, pathName, file, putExtra) {
      let that = this;
      that.$axios
        .post("http://upload-as0.qiniup.com/", param, config, file, putExtra)
        .then(response => {
          that.fileName = pathName;
          that.fileUrl = that.showHeader + response.data.key;
        });
    },
    opentankuang() {
      this.dialogVisible = true;
    },
    getproduct() {
      //新消息用迷你接口
      let that = this;
      let tempalert = that.$alert;
      if (that.productID === null || that.productID === "") {
        tempalert("productId can not be empty", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      } else {
        for (let i = 0; i < that.goods_list.length; i++) {
          if (Number(that.goods_list[i].goods_id) === Number(that.productID)) {
            tempalert("The product already existsy", {
              confirmButtonText: "ok",
              center: true
            });
            return;
          }
        }
        let url = that.$store.state.headerUrl + "message/goods";
        let pramas = {
          message_id: Number(that.messageData.id),
          goods_info: { id: Number(that.productID) }
        };
        that.comment
          .axiosPost(url, that.$axios, that.$store, pramas, tempalert)
          .then(function(resp) {
            if (resp.data.code === 0) {
              that.getmessageData();
              that.dialogVisible = false;
            } else {
              tempalert(resp.data.msg, {
                confirmButtonText: "ok",
                center: true
              });
            }
            console.log(resp.data.data);
          })
          .catch(function(error) {
            tempalert(error, {
              confirmButtonText: "ok",
              center: true
            });
          });

        //          if(that.productList.length === 0){
      }
    },
    deleteproduct(index) {
      let that = this;
      let tempalert = that.$alert;
      console.log(that.goods_list[index]);
      if (that.goods_list.length === 1) {
        tempalert("The number of products cannot be less than one", {
          confirmButtonText: "ok",
          center: true
        });
        return;
      } else {
        let url =
          that.$store.state.headerUrl +
          "message/goods/" +
          that.goods_list[index].id;
        that.comment
          .axiosDelete(url, that.$axios, that.$store)
          .then(function(resp) {
            if (resp.data.code === 0) {
              that.getmessageData();
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
      }
    },
    //打开文件
    mydownload(url) {
      window.open(url);
    },
    getmessageData() {
      let that = this;
      let tempalert = that.$alert;
      let url =
        that.$store.state.headerUrl + "message/" + that.$route.params.id;
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.messageData = resp.data.data;
            that.messageData.record_list = that.comment.bubbleSort(
              resp.data.data.record_list
            );
            console.log(resp.data.data.record_list);
            //            for(let )
            that.goods_list = resp.data.data.goods_list;
            that.naso_user = resp.data.data.naso_user;
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
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("users"));
    this.getmessageData();
  },
  updated: function() {
    this.$nextTick(function() {
      var div = document.getElementById("showtalk");
      div.scrollTop = div.scrollHeight;
    });
  }
};
</script>
