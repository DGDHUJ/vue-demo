<style scoped lang="scss">
.inquiry {
  position: relative;
  overflow: hidden;
  font-size: 16px;
}
.headContent {
  position: relative;
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
  height: 140px;
  border: 1px solid #d2d2d2;
  p:first-child {
    color: #4a3f91;
    font-weight: bold;
    line-height: 50px;
    font-size: 18px;
  }
  p {
    color: #a7a7a7;
    margin-left: 2.5%;
  }
}

.form {
  border: 1px solid #d2d2d2;
  border-top: 0;
  padding: 10px 15px;
  &-item {
    margin-top: 10px;
    border: 1px solid #d2d2d2;
  }
  &-item_title {
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    color: #4b3f91;
    font-weight: bold;
    font-size: 18px;
    background-color: #f3f3f3;
    i {
      float: right;
      margin: 10px;
      font-size: 20px;
      left: 20px;
      color: red;
      cursor: pointer;
    }
  }
  .form-item-layout {
    display: flex;
    justify-content: start;
    padding: 10px;
    div {
      display: inline-block;
    }
    &_img {
      padding: 6px;
      width: 90px;
      min-width: 90px;
      height: 90px;
      overflow: hidden;
      border: 1px solid #d2d2d2;
      img {
        width: 100%;
      }
    }
    &_detil {
      word-wrap: break-word;
      font-size: 18px;
      margin-left: 16px;
      color: #333333;
      & > p {
        width: 830px;
      }
      &_params {
        // position: relative;
        // background-color: #f2f2f2;
        p {
          background-color: #f2f2f2;
          display: inline-block;
          font-size: 12px;
          padding: 2px 6px;
          span {
            font-weight: bold;
          }
        }
      }
    }
  }
  &_add {
    display: inline-block;
    margin: 20px 10px 10px;
    padding: 2px 10px;
    color: #4b3f91;
    border: 1px solid #4b3f91;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    &:hover {
      a {
        color: #4b3f91;
      }
      border: 2px solid #4b3f91;
      padding: 1px 9px;
    }
  }
}

.contact {
  // display: flex;
  justify-content: start;
  margin: 10px;
  margin-right: 0;
  overflow: hidden;
  span {
    padding: 4px 4px 0 0;
  }
  .contact-item {
    // display: flex;
    overflow: hidden;
    justify-content: start;
    align-items: center;
    margin-left: 12px;
    i {
      color: #555;
      font-size: 28px;
      width: 12%;
    }
    &_input {
      width: 80%;
      margin: 6px;
    }
  }
}

.select-whatsapp {
  overflow: hidden;
  align-items: center;
  i {
    font-size: 28px;
    margin: 0 4px;
  }
}
.icon-whatsapp {
  color: #999 !important;
}
</style>
<style lang="scss">
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
.email_error .el-input__inner {
  border: 2px solid red;
}
.warning_content {
  position: absolute;
  top: 40px;
  left: 56px;
  color: red;
  font-size: 12px;
}
</style>
<template>
  <section class="container">
    <div class="inquiry __main">
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
            <p>Want to inquire</p>
            <p>Didn't find the goods you needed?</p>
            <!--<br>-->
            <p>Don't worry. Send us the parameters of the goods you need and we will help you find them.</p>
            <p/>
            <p>The service is free of charge.</p>
            <p/>
          </div>
          <div class="form">
            <div v-for="(item, index) in product_list" :key="index" class="form-item">
              <div class="form-item_title">
                <nuxt-link :to="{path:'inquiryAdd',query: {sub:index}}">I need the product</nuxt-link>
                <i class="el-icon-circle-close" @click="delItem(index)"></i>
              </div>
              <div class="form-item-layout">
                <div class="form-item-layout_img" v-if="item.pic1">
                  <img :src="item.pic1 | imgCompress(76,76)" alt>
                </div>
                <div class="form-item-layout_detil">
                  <p v-clampy="2">{{item.title}}</p>
                  <div class="form-item-layout_detil_params">
                    <p v-for="(parameter, i) in item.product_params" :key="i">
                      <span>{{parameter.name + ': '}}</span>
                      {{parameter.select}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form_add">
              <nuxt-link :to="{path:'inquiryAdd'}">+ Add a New Product Requirement</nuxt-link>
            </div>
          </div>
          <div></div>
          <div>
            <div class="contact">
              <span style="float:left;color:red;">*</span>
              <el-row style="width:100%;">
                <el-col :span="5">
                  <div class="contact-item" :class="{'email_error' : submitResults }">
                    <i style="float:left;" class="iconfont icon-youjian"></i>
                    <el-input
                      v-model="contact.email"
                      size="mini"
                      class="contact-item_input"
                      :disabled="contact.email_lock"
                      @blur="checkEmail(contact.email)"
                      @focus="submitResults = false,submitResultsContent='' "
                    ></el-input>
                    <span class="warning_content">{{submitResultsContent}}</span>
                  </div>
                </el-col>
                <el-col :span="6" class="select-whatsapp">
                  <i style="float:left;" class="iconfont icon-whatsapp"></i>
                  <el-select
                    v-model="code"
                    size="mini"
                    filterable
                    placeholder="code"
                    style="width:76px;"
                    clearable
                    @blur="blur_Input"
                    @focus="restaurants_screen = restaurants"
                    :filter-method="quickSearch"
                  >
                    <el-option v-for="(item,i) in restaurants_screen" :key="i" :value="item.code">
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
                    style="width:170px;"
                  ></el-input>
                </el-col>
                <el-col :span="6">
                  <div class="contact-item">
                    <i style="float:left;" class="iconfont icon-weixin"></i>
                    <el-input v-model="contact.weixin" size="mini" class="contact-item_input"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="contact-item">
                    <i style="float:left;" class="iconfont icon-qq"></i>
                    <el-input v-model="contact.qq" size="mini" class="contact-item_input"></el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="btn_submit">
              <el-button @click="clearList()">Clear list</el-button>
              <el-button @click="submit()">submit</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
    <modal @on-close="closeThis()" :is-show="isShowLog"></modal>
  </section>
</template>

<script>
// import $ from "jquery";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";
import clampy from "@clampy-js/vue-clampy";
import modal from "~/components/common/loginModel";
import { imgCompress } from "~/plugins/filters.js";
import CountryCode from "~/assets/CountryCode.json";
export default {
  name: "inquiry",
  components: {
    headerbar: headerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    footerbar: footerbar,
    modal
  },
  directives: {
    clampy
  },
  async asyncData({ store }) {
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY",{store})
      .then(res => {
        category = res.data;
      });

    return { category };
  },
  data() {
    return {
      userInfo: "",
      product_list: [],
      category_id: "",

      contact: {
        email: "",
        weixin: "",
        whatsapp: "",
        qq: ""
      },
      //国家区号快速建议搜索
      restaurants_screen: [],
      code: "",

      contentonedata: [],
      isShowLog: false,

      submitResults: false,
      submitResultsContent: ""
    };
  },
  methods: {
    checkEmail(val) {
      var reg = new RegExp(
        /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      );

      if (val == "") {
        // 请输入邮箱地址
        this.submitResults = true;
        this.submitResultsContent = "Please enter your E-mail address";
      } else if (reg.test(val)) {
        // 可以执行下一步操作
        this.submitResults = false;
      } else {
        // 邮箱地址错误
        this.submitResults = true;
        this.submitResultsContent = "Please enter a valid email address";
      }
    },
    closeThis() {
      this.isShowLog = false;
    },
    submit() {
      if (!this.contact.email) {
        this.submitResults = true;
        this.submitResultsContent = "Please enter a valid email address";
        return;
      }
      let url = this.$store.state.headerUrl + "inquire";
      let list = JSON.parse(JSON.stringify(this.product_list));
      list.forEach(el => {
        delete el["name"];
        el.product_params = JSON.stringify(el.product_params);
      });
      let params = {
        name: "Naso",
        email: this.contact.email,
        wechat: this.contact.weixin,
        whatsapp: "+" + this.code + this.contact.whatsapp,
        qq: this.contact.qq,
        product_list: list
      };
      let header = {
        token: this.token
      };
      this.comment
        .axiosPost(url, this.$axios, this.$store, params)
        .then(res => {
          if (res.data.status === 200 && res.data.code === 0) {
            localStorage.removeItem("inquiryItem");
            this.$router.push("/inquiryPolicyReturn");
          } else if ((res.data.status == 400) & (res.data.code == 90000)) {
            this.$confirm(
              "The email address has been registered. You need to log in your account first and then proceed to the next step",
              "By a hair's breadth",
              {
                confirmButtonText: "Login",
                cancelButtonText: "Close",
                type: "warning"
              }
            )
              .then(() => {
                this.isShowLog = !this.isShowLog;
              })
              .catch(() => {});
          } else {
            this.$alert(res.data.msg);
          }
        });
    },
    clearList() {
      this.$confirm(
        "This action clears the list information, Whether or not to continue?",
        "Are you sure?",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning"
        }
      )
        .then(() => {
          this.product_list = [];
          localStorage.removeItem("inquiryItem");
        })
        .catch(() => {});
    },
    delItem(index) {
      this.$confirm("Delete this list entry?", "Are you sure", {
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        type: "warning"
      })
        .then(() => {
          this.product_list.splice(index, 1);
          let jsonStr = JSON.stringify(this.product_list);
          localStorage.setItem("inquiryItem", jsonStr);
        })
        .catch(() => {});
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
    }
  },
  computed: {
    restaurants: function() {
      let Temp = [];
      CountryCode.forEach(item => {
        let arr = item.split("-");
        Temp.push({ en_name: arr[0], cn_name: arr[1], code: Number(arr[2]) });
      });
      return Temp;
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.userInfo = JSON.parse(localStorage.getItem("users"));
      this.token = this.userInfo.token;
      this.contact.email = this.userInfo.email;
      this.contact.email_lock = true;
      this.contact.whatsapp = this.userInfo.whatsapp;
      this.contact.wechat = this.userInfo.wechat;
      this.contact.qq = this.userInfo.qq;
    }
    let data = localStorage.getItem("inquiryItem");
    if (data) {
      this.product_list = JSON.parse(data);
    }
    this.restaurants_screen = this.restaurants;
  }
};
</script>


