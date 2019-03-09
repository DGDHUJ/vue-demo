<style lang="scss" scoped>
.receivedReply {
  overflow: hidden;
  background: white;
  .receivedReply-content {
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    background: white;
    height: 73%;
    width: 100%;
    .receivedReplycontent {
      background: #f0f0f0;
      min-height: 400px;
      padding: 10px 20px;
      .title {
        color: #4b3f91;
        font-size: 17px;
        overflow: hidden;
        line-height: 40px;
        .title-item1 {
          float: left;
          font-weight: bold;
          margin-right: 50px;
        }
        .title-item2 {
          float: left;
          margin-right: 50px;
        }
        .title-item3 {
          float: left;
          margin-right: 50px;
        }
      }
      .showtext {
        font-size: 16px;
        line-height: 35px;
      }
      .showtext1 {
        font-size: 16px;
        line-height: 35px;
        overflow: hidden;
        .p1 {
          float: left;
        }
        .qubtn {
          float: left;
          margin: 0 20px;
          padding: 0 10px;
          border: 1px solid #ddd;
          background: #4b3f91;
          color: white;
          border-radius: 5px;
          // cursor: pointer;
        }
        .p2 {
          float: left;
        }
      }
      .product {
        background: white;
        border: 1px solid #ddd;
        border-radius: 10px;
        min-height: 300px;
        margin-top: 20px;
        .product-header {
          padding: 10px 20px;
          border-bottom: 1px solid #ddd;
          .header-img {
            float: left;
            width: 100px;
            height: 100px;
            border: 1px solid #ddd;
          }
          .header-p {
            font-size: 16px;
            line-height: 100px;
            padding: 0 0 0 120px;
          }
        }
        .product-list {
          padding: 10px 20px;
          overflow: hidden;
          .list-item {
            float: left;
            overflow: hidden;
            width: 49%;
            border: 1px solid #ddd;
            padding: 10px;
            margin: 0 0 20px 0;
            .item-i {
              float: left;
              line-height: 60px;
              width: 30px;
              cursor: pointer;
            }
            .item-img {
              float: left;
              width: 60px;
              height: 60px;
              border: 1px solid #ddd;
            }
            .item-p {
              overflow: hidden;
              font-size: 14px;
              line-height: 30px;
              padding: 0 0 0 20px;

              .productPrice {
                float: right;
                span {
                  color: #e77b1e;
                }
              }
              .productId {
                float: left;
                width: 150px;
              }
              .item-p {
                overflow: hidden;
                font-size: 14px;
                line-height: 30px;
                padding: 0 0 0 10px;
                .productPrice {
                  float: right;
                  span {
                    color: #e77b1e;
                  }
                }
                .productId {
                  float: left;
                }
                .item-title {
                  line-height: 18px;
                }
              }
            }
          }
          .list-item-left {
            float: left;
          }
          .list-item-right {
            float: right;
          }
        }
      }
    }
    .talk {
      margin: 20px 0 0 0;
      background: white;
      .talk-left {
        float: left;
        width: 70%;
        background: #eeeeee;
        .shuruneirong {
          background: #eeeeee;
          margin-right: 10px;
          border: 1px solid #ddd;
          .showtalk {
            border: 1px solid #ddd;
            height: 181px;
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
            height: 30px;
            line-height: 30px;
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
          margin-bottom: 10px;
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
      }
    }
    .Info {
      margin: 20px 0 20px 0;
      background: #eeeeee;
      border-radius: 5px;
      .Info-item {
        overflow: hidden;
        line-height: 40px;
        font-size: 16px;
        padding: 10px 20px;
        .text {
          float: left;
        }
        .textbtn {
          float: right;
          border: 1px solid #ddd;
          color: white;
          background: #4b3f91;
          text-align: center;
          width: 110px;
          border-radius: 5px;
          cursor: pointer;
        }
        .not_use {
          pointer-events: none;
          color: #999;
          background-color: #ddd;
          border: 1px solid #bbb;
          cursor: not-allowed;
        }
      }
    }
  }
  .footline {
    height: 6px;
    background: #4b3f91;
    background: #4b3f91;
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
  left: 95px;
  height: 0;
  top: 57px;
  border-right: 12px solid white;
  border-bottom: 12px solid transparent;
  border-top: 12px solid transparent;
  position: absolute;
  z-index: 11;
}
.textbtnundefing {
  background-color: #47494e !important;
  cursor: none !important;
}
</style>
<template>
  <section class="container">
    <div class="receivedReply">
      <headerbar></headerbar>
      <div class="receivedReply-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/'}">Message Centre</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/'}">Cooperation reply</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="receivedReplycontent">
            <div class="title">
              <p class="title-item1">Cooperation reply</p>
              <p class="title-item3">DATE：{{messageData.create_time}}</p>
            </div>
            <div class="showtext">
              <p>Here’s the product recommendation list for you，is it what you are looking for？</p>
            </div>
            <div class="showtext1">
              <p class="p1">You can choose the products you’re interested in and click</p>
              <div class="qubtn">Quotation</div>
              <p class="p2">to get an official quotation list.</p>
            </div>
            <div class="showtext">
              <p>If you cannot find your ideal products from the recommendation list, please tell us more detail and we shall rematch your requirement.</p>
            </div>
            <!-- 产品列表 -->
            <div class="product" v-for="(item,findex) in inquire_products" :key="findex">
              <div class="product-header">
                <img class="header-img" :src="item.pic1 | noImg100x100()">
                <p class="header-p">{{item.title}}</p>
              </div>
              <!-- 推荐产品列表 -->
              <div class="product-list">
                <div
                  class="list-item"
                  v-for="(items,index,key) in item.goods_info"
                  :key="key"
                  :class="{'list-item-left':(index%2)===0,'list-item-right':(index%2)!==0}"
                  @click="seletProduct(findex,index,items.goods_id)"
                >
                  <i v-show="!items.select" class="iconfont icon-xuanzekuang item-i"></i>
                  <i v-show="items.select" class="iconfont icon-xuanzhong item-i"></i>

                  <nuxt-link
                    :to="{name: 'product-id',params:{id:items.goods_id}}"
                    target="_blank"
                  >
                    <img class="item-img" :src="items.img_url | noImg100x100()">
                  </nuxt-link>
                  <div class="item-p">
                    <nuxt-link
                      :to="{name: 'product-id',params:{id:items.goods_id}}"
                      target="_blank"
                    >
                      <p
                        class="item-title"
                        v-clampy="1"
                        @click="GoProduct(items.goods_id)"
                      >{{items.title}}</p>
                    </nuxt-link>

                    <p class="productId">Product ID：{{items.goods_id}}</p>
                    <p class="productPrice">
                      price:
                      <span>＄{{items.exw_price|money}}</span>
                    </p>
                  </div>
                  <!--Electric fan——USB fan——voltage：5V——specification：8° -->
                </div>
              </div>
            </div>
          </div>

          <div class="talk">
            <div class="talk-left">
              <div class="shuruneirong">
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
                        src="../assets/img/LOGO_NO_100x100.png"
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
                  <!-- <div class="attachment-text2">
                    Remaining:
                    <span>16000</span>
                  </div>-->
                </div>
              </div>
              <div class="send">
                <div class="sendbtn" @click="recordMessage">Send inquiry now</div>
              </div>
            </div>
            <!-- 右边纳信客服信息 -->
            <div class="talk-right">
              <div class="sale-touxiang">
                <img :src="naso_user.avatar_url" height="340" width="349">
              </div>
              <div class="sale-name">{{naso_user.nickname}}</div>
              <!-- <div  class="sale-address">China.guangzhou</div> -->
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
              <div class="sale-Info">
                <p class="Info-title">QQ：</p>
                <p class="Info-content">{{naso_user.qq}}</p>
              </div>
            </div>
            <div style="clear: both;"></div>
          </div>

          <div class="Info">
            <div class="Info-item">
              <p class="text">
                If you cannot find any ideal products from the recommendation list，please click
                <a>"Rematch"</a> for new recommendations
              </p>
              <div
                class="textbtn"
                @click="rematch"
                :class="{'not_use':inquire.rematching !==0||inquire.place_order !==0}"
              >Rematch</div>
            </div>
            <!-- <div class="Info-item">
              <p
                class="text"
              >If you cannot find any ideal products from the recommendation list，please click
                <a @click="rematch">"Rematch"</a> for new recommendations
              </p>
              <div class="textbtn" :class="{'textbtnundefing':inquire.rematching !==0}" @click="rematch">Rematch</div>
            </div>-->
            <div class="Info-item">
              <p class="text">
                If you find your interested products from the recommendation list，please click
                <a
                  @click="goquotation"
                >"Quotation"</a>for an official quotation list.
              </p>
              <div
                class="textbtn"
                :class="{'not_use':inquire.place_order !==0}"
                @click="goquotation"
              >Quotation</div>
            </div>
          </div>
        </div>
        <register-model
          @on-close="closeThis()"
          :is-show="isShowLog"
          :username="username"
          :validToken="validToken"
        ></register-model>
        <div class="footline"></div>
        <footerbar></footerbar>
        <righttab></righttab>
      </div>
    </div>
  </section>
</template>
<script>
import $ from "jquery/dist/jquery.slim.min";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";
import righttab from "../components/common/righttab.vue";
import PickerArea from "vue-emoji-mart-picker";
import clampy from "@clampy-js/vue-clampy";
import registerModel from "~/components/common/registerModel";
export default {
  name: "receivedReply",
  directives: {
    clampy
  },
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
    PickerArea,
    registerModel
  },
  data() {
    return {
      input: "",
      textarea3: "",
      num1: null,
      productList: [{ id: 1 }],
      messageData: {},
      inquire: {},
      inquire_products: [],
      record_list: [],
      naso_user: {},
      dialogVisible: false,
      productID: null,
      fileName: null,
      fileUrl: null,
      jindu: 0,
      selectValue: [],
      isShowLog: false,
      username: "",
      validToken: ""
    };
  },
  methods: {
    closeThis() {
      this.isShowLog = false;
    },
    handleChange(value) {
      console.log(value);
    },
    //获取详细的信息数据
    getData() {
      let that = this;
      let tempalert = that.$alert;
      let id = that.$route.query.id || that.$route.query.message_id;
      let valid_token = that.$route.query.valid_token;
      let url = that.$store.state.headerUrl + "/inquire/" + id;
      if (valid_token) {
        url += "?valid_token=" + valid_token;
      }
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            that.messageData = resp.data.data;
            that.messageData.record_list = that.comment.bubbleSort(
              resp.data.data.record_list
            );
            that.naso_user = resp.data.data.user;
            that.inquire = that.messageData.inquire;
            that.inquire_products = that.messageData.inquire.inquire_products;
            for (let j = 0; j < that.inquire_products.length; j++) {
              if (
                that.inquire_products[j].goods_info &&
                that.inquire_products[j].goods_info.length > 0
              ) {
                for (
                  let i = 0;
                  i < that.inquire_products[j].goods_info.length;
                  i++
                ) {
                  that.inquire_products[j].goods_info[i].select = false;
                }
              }
            }
          } else if (resp.data.code == 90100) {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true
            });
            this.isShowLog = true;
            this.username = resp.data.data.email;
            this.validToken = that.$route.query.valid_token;
            //注册操作
          } else if (resp.data.code == 90000) {
            console.log("登录");
            //登录操作
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
    //打开文件
    mydownload(url) {
      window.open(url);
    },
    GoProduct(id) {},
    opentankuang() {
      this.dialogVisible = true;
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
            that.getData();
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
    // 重新匹配
    rematch() {
      if (this.inquire.place_order === 0) {
        let that = this;
        let url =
          that.$store.state.headerUrl + "inquire_rematching/" + that.inquire.id;
        let tempalert = that.$alert;
        that.comment
          .axiosGet(url, that.$axios, that.$store)
          .then(function(resp) {
            // debugger;
            if (resp.data.code === 0) {
              that.$router.push("/member/infoList");
            }
          });
      } else {
        return;
      }
    },
    //跳转购物车下一步
    goquotation() {
      if (this.inquire.place_order === 0) {
        let tempalert = this.$alert;
        if (this.selectValue.length === 0) {
          tempalert("Please select a product", {
            confirmButtonText: "ok",
            center: true
          });
        } else {
          if (localStorage.getItem("carttempData")) {
            localStorage.removeItem("carttempData");
          }
          if (localStorage.getItem("adivsoryData")) {
            localStorage.removeItem("adivsoryData");
          }
          localStorage.setItem(
            "receivedReplyData",
            JSON.stringify(this.selectValue)
          );
          localStorage.setItem(
            "receivedReplyId",
            JSON.stringify(this.inquire.id)
          );
          this.$router.push({ name: "quotation" });
        }
      } else {
        return;
      }

      // this.$store.commit('SET_quotationIdList',data)
      // this.$router.push('quotation')
    },
    seletProduct(findex, index, id) {
      // 数据层次太多，render自动刷新不触发，以下是手动触发更新
      this.$forceUpdate();
      if (this.inquire_products[findex].goods_info[index].select) {
        this.$set(
          this.inquire_products[findex].goods_info[index],
          "select",
          false
        );
        for (let i = 0; i < this.selectValue.length; i++) {
          if (this.selectValue[i] == id) {
            this.selectValue.splice(i, 1);
          }
        }
      } else {
        this.$set(
          this.inquire_products[findex].goods_info[index],
          "select",
          true
        );
        this.selectValue.push(id);
      }
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("users"));
    this.getData();
  },
  updated: function() {
    this.$nextTick(function() {
      var div = document.getElementById("showtalk");
      div.scrollTop = div.scrollHeight;
    });
  }
};
</script>
