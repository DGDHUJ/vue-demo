<style lang="scss" scoped>
@import "~/styles/public.scss";

.inquiry {
  position: relative;
  overflow: hidden;
  font-size: 16px;
}

.headContent {
  /*margin-top: 40px;*/
  position: relative;
  overflow: hidden;
  background: white;
  margin-bottom: 100px;
  .headContent1 {
    margin-top: 40px;
  }
}

/*这里要面包屑*/
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}
.middle_text {
  @extend .ptb10;
  color: #666;
  span {
    color: red;
    margin-right: 10px;
  }
}
.addfile {
  padding: 5px 10px;
  background-color: #f5f5f5;
  color: red;
}

.form {
  border: 1px solid #d2d2d2;
  // border-top: 0;
  &_title {
    margin: 10px;
    color: #4b3f91;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #d2d2d2;
    i {
      float: right;
      margin: 10px;
      font-size: 20px;
      left: 20px;
      color: red;
      cursor: pointer;
    }
  }
  .form-layout {
    display: flex;
    justify-content: start;
    // align-items: center;
    padding: 10px;

    .form-layout_img {
      padding: 6px;
      width: 100px;
      height: 100px;
      overflow: hidden;
      border: 1px solid #d2d2d2;
      img {
        width: 100%;
      }
    }
    &_p {
      font-size: 16px;
      margin-left: 16px;
      color: #555;
    }
  }
  .text-center {
    text-align: center;
  }
  &_add {
    display: inline-block;
    margin: 10px 10px;
    padding: 2px 10px;
    color: #4b3f91;
    border: 1px solid #4b3f91;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
  }
}

.contact {
  display: flex;
  justify-content: start;
  margin: 10px;
  margin-right: 0;
  span {
    padding: 4px 4px 0 0;
  }
  .contact-item {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 20px;
    i {
      color: #555;
      font-size: 28px;
    }
    &_input {
      margin: 6px;
    }
  }
}
.select-whatsapp {
  display: flex;
  align-items: center;
  i {
    font-size: 28px;
    margin: 0 4px;
  }
}
.contact-submit {
  cursor: pointer;
}
.icon-whatsapp {
  color: #999 !important;
}
</style>

<style lang="scss">
input[type="file"] {
  color: transparent;
}
.btn_submit {
  float: right;
  // width: 100px;
  .el-button {
    background: #4b3f91;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
  }
  .el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
.el-message {
  top: 65px;
}
.upload-demo {
  position: relative;
  margin-top: 6px;
  width: 340px;
  height: 46px;
  .el-upload-list {
    position: absolute;
    top: 0;
    left: 120px;
    .el-upload-list__item:first-child {
      margin-top: 0;
    }
  }
}
.el-upload ._disabled {
  background-color: #eee;
  color: #555;
  border: 0;
}
.el-select-dropdown__item.selected {
  color: #4b3f91;
}
</style>

<template>
  <section class="container">
    <div class="inquiry">
      <headerbar></headerbar>
      <div class="headContent">
        <commonheader class="headContent1"></commonheader>
        <commonheaderbar class="headContent2" :category="category"></commonheaderbar>
        <div class="layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item>Post Buying Leads</el-breadcrumb-item>
          </el-breadcrumb>
          <!--内容头文字-->
          <div class="middle_text">
            <span>*</span>Message: Enter product details such as color, size, materials etc. and other specification requirements to receive an accurate quote.
          </div>
          <div>
            <no-ssr placeholder="Loading...">
              <picker-area v-model="text" emoji="point_up"/>
            </no-ssr>
            <!-- <span class="fileinput-box">
              <input
                type="file"
                class="file-btn"
                @change="update"
                name="fname"
                accept="image/jpg, image/png, image/jpeg, image/gif, application/vnd.ms-excel, application/msword, text/plain"
              >Choose File
            </span>-->
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :before-upload="getQiniuToken"
              :on-success="handleAvatarSuccess"
              :data="updataHeaders"
              :before-remove="beforeRemove"
              :multiple="false"
              :limit="1"
              :accept="typeLimit"
              :file-list="fileList"
            >
              <el-button
                size="small"
                type="primary"
                :disabled="Boolean(fileList.length>0)"
                :class="{'_disabled':true}"
              >Choose File</el-button>
            </el-upload>
            <el-progress
              style="width: 168px;display: inline-block;left: -140px;"
              v-show="jindu>0&&showImgurl===''"
              :percentage="jindu"
            ></el-progress>
          </div>
          <div class="form">
            <el-row class="form_title">
              <el-col :span="18" class="p10">Product information</el-col>
              <el-col :span="6" class="p10 text-center">Quantity</el-col>
              <!-- <el-col :span="3" class="p10 text-center">
                Unit
              </el-col>-->
            </el-row>
            <el-row>
              <el-col :span="18" class="form_content">
                <div class="form-layout">
                  <div class="form-layout_img">
                    <img :src="product.images[0].url" alt>
                  </div>
                  
                <nuxt-link :to="{name: 'product-id',params:{id:product.id}}" target="_blank">
                  <p class="form-layout_p">{{product.title}}</p>
                </nuxt-link>
                </div>
              </el-col>
              <el-col :span="6" class="text-center mt10">
                <p>{{num}}</p>
              </el-col>
              <!-- <el-col :span="3" class="text-center mt10">
                <p>{{product.sell_price | numFilter}}</p>
              </el-col>-->
            </el-row>
            <div></div>
          </div>
          <div>
            <div class="contact">
              <span style="color:red;">*</span>
              <el-row style="width:100%;">
                <el-col :span="8" class="select-whatsapp">
                  <i class="iconfont icon-whatsapp"></i>
                  <el-select
                    v-model="code"
                    size="mini"
                    filterable
                    placeholder="code"
                    style="width:90px;"
                    clearable
                    @blur="blur_Input"
                    @focus="restaurants_screen = restaurants"
                    :filter-method="quickSearch"
                  >
                    <el-option
                      v-for="(item,i) in restaurants_screen"
                      :key="i"
                      :label="item.code"
                      :value="item.code"
                    >
                      <span style="float: left">{{ item.en_name }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
                    </el-option>
                  </el-select>
                  <el-input
                    v-model.number="contact.whatsapp"
                    placeholder="whatsapp"
                    size="mini"
                    @keydown.native="comment.inputLimit"
                    class="contact-item_input"
                    style="width:76%;"
                  ></el-input>
                </el-col>
                <el-col :span="8">
                  <div class="contact-item">
                    <i class="iconfont icon-weixin"></i>
                    <el-input
                      v-model="contact.wechat"
                      placeholder="wechat"
                      size="mini"
                      class="contact-item_input"
                    ></el-input>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="contact-item">
                    <i class="iconfont icon-qq"></i>
                    <el-input
                      v-model.number="contact.qq"
                      @keydown.native="comment.inputLimit"
                      placeholder="QQ"
                      size="mini"
                      class="contact-item_input"
                    ></el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="btn_submit">
              <el-button
                @click="submit()"
                :loading="submitLoading"
                :disabled="!(this.text && Boolean(this.contact.whatsapp || this.contact.wechat || this.contact.qq) && !submitIO)"
              >submit</el-button>
              <!-- <input type="submit" value="submit" class="contact-submit plr20" @click="submit()" :disabled="submitIO"> -->
            </div>
          </div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
  </section>
</template>

<script>
// import $ from "jquery";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";
import { imgCompress } from "~/plugins/filters.js";
import PickerArea from "vue-emoji-mart-picker";
import CountryCode from "~/assets/CountryCode.json";
export default {
  name: "product-inquiry",
  components: {
    headerbar: headerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    footerbar: footerbar,
    PickerArea
  },
  async asyncData({ app, store, params, query }) {
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY",{
        store
      })
      .then(res => {
        category = res.data;
      });
    let product = null;
    let goodsUrl = store.state.headerUrl + "goods/" + query.id;
    let temptoken = "";
    let goods = await store.$axios.get(goodsUrl).then(res => {
      product = res.data.data;
    });
    let num = query.num;
    return { category, product, id: query.id, num };
  },
  data() {
    return {
      text: "",
      userId: "",
      imageUrl: "",
      userInfo: {
        token:''
      },

      contact: {
        email: "",
        whatsapp: "",
        wechat: "",
        qq: ""
      },
      //国家区号快速建议搜索
      restaurants_screen: [],
      code: "",

      submitIO: false,
      submitLoading: false,
      loading: false,
      showImgurl: "",
      jindu: 0,
      images: [],
      domain: "",
      fileName: "",
      fileUrl: "",
      typeLimit:
        "image/jpg,image/png,image/jpeg,image/gif,text/plain,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
      updataHeaders: {},
      fileList: []
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.en_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      this.code = item.code;
    },
    //获取七牛上传token
    getQiniuToken(e) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get(this.$store.state.headerUrl + "qiniu_uptk", {
            headers: {
              token: this.userInfo ? this.userInfo.token : ""
            }
          })
          .then(res => {
            if (res.data.data.length > 0) {
              this.updataHeaders = {
                domain: "",
                token: ""
              };
            } else {
              this.domain = res.data.data.domain;
              this.updataHeaders = res.data.data;
            }
            if (!Boolean(e.type) || this.typeLimit.indexOf(e.type) < 0) {
              this.$message.error("This type of file is not supported");
              reject();
            } else {
              resolve(res.data);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    //上传完返回数据写入
    handleAvatarSuccess(res, file, fileList) {
      this.fileList = fileList;
      this.fileName = file.response.name;
      this.fileUrl = this.domain + file.response.key;
    },
    beforeRemove(file, fileList) {
      return (this.fileList = []);
    },
    quickSearch(val) {
      let temp = [];
      this.restaurants.forEach(item => {
        if (item.en_name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          temp.push(item);
        }
      });
      this.code = val;
      this.restaurants_screen = temp;
    },
    blur_Input(e) {
      // console.log(typeof Number(this.code));
      function checkNumber(theObj) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
          return true;
        }
        return false;
      }
      if (!checkNumber(Number(this.code))) {
        console.log("是");
        this.code = "";
      }
    },
    submit() {
      this.submitLoading = true;
      let url = this.$store.state.headerUrl + "message";
      let params = {
        title: "",
        naso_user: { id: this.userInfo ? Number(this.userInfo.id) : null },
        goods_list: [
          { goods_info: { id: Number(this.id) }, quantity: Number(this.num) }
        ],
        record: {
          content: this.text,
          attr_name: this.fileName,
          attr_link: this.fileUrl
        },
        member_info: {
          whatsapp: '+' + this.code + this.contact.whatsapp,
          wechat: this.contact.wechat,
          qq: this.contact.qq
        }
      };
      this.comment.axiosPost(url, "", "", params).then(res => {
        this.submitLoading = false;
        // this.$message({
        //   message: res.data.msg,
        //   type: 'success'
        // });
        if (res.data.status === 200) {
          this.images = [];
          this.showImgurl = "";
          this.imageUrl = "";
          this.text = "";
          this.jindu = 0;
          //   this.$message({
          //   message: res.data.msg,
          //   type: 'success',
          //   showClose:false,
          //   customClass:'customClass'
          // });
          this.$router.push("/inquiryReturn");

          // this.$alert(res.data.msg, "", {
          //   confirmButtonText: "Close",
          //   type: "success",
          //   callback: action => {
          // window.close();
          // this.$router.push("/inquiryReturn");
          //   }
          // });
        } else {
          console.error(res.data.msg);
        }
      });
    }
  },
  computed: {
    restaurants: function() {
      let Temp = [];
      CountryCode.forEach(item => {
        let arr = item.split("-");
        Temp.push({ en_name: arr[0], cn_name: arr[1], code: arr[2] });
      });
      return Temp;
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.userInfo = JSON.parse(localStorage.getItem("users"));
      this.contact.whatsapp = this.userInfo.whatsapp;
      this.contact.wechat = this.userInfo.wechat;
      this.contact.qq = this.userInfo.qq;
    }
    this.restaurants_screen = this.restaurants;

  }
};
</script>


