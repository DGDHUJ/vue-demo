<style scoped lang="scss">
.headContent {
  margin-top: 40px;
  position: relative;
  margin-bottom: 100px;
}
.middle_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  p {
    font-size: 16px;
  }
  span {
    font-weight: normal;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

.mandatory {
  margin: 10px;
  font-size: 22px;
  padding-bottom: 15px;
  .fileinput-button {
    width: 60px;
    height: 55px;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid #d2d2d2;
    background-color: #fff;
    line-height: 50px;
    text-align: center;
    color: #d2d2d2;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .fileinput-button input {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 0px;
    top: 0px;
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
  }

  .file_text {
    position: relative;
    top: -34px;
    left: 2%;
  }

  &-select {
    display: flex;
    justify-content: flex-start;
    margin-top: 6px;
    span {
      margin-top: 10px;
      font-size: 16px;
      color: #555;
      font-weight: bold;
    }
    .selected {
      margin-left: 10px;
      line-height: 40px;
    }
    .el-input{
      margin-left: 10px;
      width: 120px;
    }
    .selected .el-radio {
      line-height: 40px;
    }
    .el-checkbox {
      margin-bottom: 10px 0;
    }
  }
}
.selectItem {
  color: #4b3f91;
  font-weight: bold;
}
.condition .border-card {
  li {
    cursor: pointer;
    float: left;
    padding: 10px;
    &:hover {
      text-decoration: underline;
      color: #4b3f91;
    }
  }
}

.inquiry-input {
  background-color: #f0f0f0;
  padding: 15px;
}

.inquiry-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

.text-red {
  color: #ff3333;
  font-size: 16px;
}
.text-purple {
  color: #4b3f91;
  font-size: 14px;
  font-weight: bold;
  i{
    color: #ff3333;
  }
}
</style>
<style lang="scss">
.condition {
  background-color: #f0f0f0;
  .el-tabs__nav-scroll {
    background-color: #f0f0f0;
    height: 50px;
    padding-top: 10px;
    // margin-right: 8px;
  }
  .el-tabs--border-card
    > .el-tabs__header
    .el-tabs__item:not(.is-disabled):hover {
    background-color: #4a3f91;
    color: white;
  }
  .el-tabs--border-card > .el-tabs__header {
    border: none;
    background-color: white;
    color: #4a3f91;
    .el-tabs__item {
      margin-left: 10px;
      border-radius: 4px 4px 0 0;
      border-top: 4px solid #4a3f91;
      background-color: #fff;
      color: #555;
    }
    .is-active {
      background: #4a3f91;
      color: #fff !important;
    }
  }
  .el-tabs__nav-wrap.is-scrollable{
    padding: 0 35px;
  }
  .el-tabs__nav-next, .el-tabs__nav-prev{
    width: 40px;
    padding: 4px 10px;
  }
  .el-tabs__nav-next{
    text-align:right;
  }
  .el-tabs--border-card > .el-tabs__content {
    background: #fff;
    border-top: 1px solid #d2d2d2;
    margin: 0 10px 10px;
  }
  .el-card__body {
    padding: 0;
    height: 100%;
  }
  .el-tabs--border-card {
    height: 100%;
    box-shadow: none;
    background-color: #f0f0f0;
  }
  .el-input-number__decrease,
  .el-input-number__increase {
    top: 2px; //加减bug边框
  }
  
}

.condition .el-tabs--border-card > .el-tabs__header {
  background-color: #f0f0f0;
}
.mandatory {
 .el-radio+.el-radio{
   margin-left: 14px;
 }
}

.condition .el-tabs__item {
  padding: 0 12px;
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
.inquiry .el-message {
  top: 65px;
}

// 图片
.el-upload-list--picture-card .el-upload-list__item,
.el-upload--picture-card {
  width: 80px;
  height: 80px;
  line-height: 80px;
}
.el-icon-upload-success {
  position: absolute;
  top: 0;
  right: 14px;
}
.el-upload--picture-card .el-icon-plus {
  width: 80px;
  height: 80px;
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
          <!--这里是面包屑-->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/inquiry' }">Want inquire</el-breadcrumb-item>
            <el-breadcrumb-item>Inquiry Add</el-breadcrumb-item>
          </el-breadcrumb>
          <!--内容头文字-->
          <div class="middle_header">
            <p class="text-purple">Want to inquire</p>
            <span @click="GoToinquiry">&#60;&#60; Go back to the previous page</span>
          </div>
          <div class="condition">
            <custom-tabs type="border-card" v-model="type" class="border-card">
              <el-tab-pane
                v-for="large in categoryChildList"
                :key="large.id"
                :name="large.en_name"
                :label="large.en_name"
              >
                <ul>
                  <li
                    v-for="(item,index) in large.children"
                    :key="index"
                    @click="selectItem = item,selectedCategory(item.id)"
                    :class="{'selectItem': (item.id == selectItem.id)}"
                  >{{item.en_name}}</li>
                </ul>
              </el-tab-pane>
            </custom-tabs >
            <div class="mandatory">
              <div style="width:320px;">
                <i style="display:inlink-block;color:red;font-size:14px;">* </i>
                <el-input v-model="title" placeholder="Product name" style="width:294px"></el-input>
                <span style="font-size:14px;">Planned purchase quantity: </span>
                <el-input-number
                  v-model="quantity"
                  :min="0"
                  :max="999999"
                  size="small"
                  label="quantity"
                ></el-input-number>
              </div>
              <span class="text-red">All fields are Mandatory</span>
              <div style="margin:4px 0;">
                <el-upload
                  action="http://upload-as0.qiniup.com/"
                  :before-upload="beforeAvatarUpload"
                  :data="updataHeaders"
                  list-type="picture-card"
                  :file-list="fileList"
                  :on-success="handleAvatarSuccess"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
              <span class="text-purple">What you need to<i>*</i></span>
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 5}"
                resize="none"
                v-model="textarea1"
              ></el-input>
              <div class="mandatory-select" v-for="(item,index,key) in parameterList" :key="key">
                <span>{{item.name}}</span>
                <div class="selected">
                  {{item.select}}
                  <el-checkbox-group v-model="item.selected" v-if="item.type === 'checkbox'">
                    <el-checkbox
                      v-for="(checkbox_text,key) in item.values"
                      :label="checkbox_text"
                      :key="key"
                    ></el-checkbox>
                    <el-checkbox
                      v-if="item.has_custom === '1'"
                      v-model="item.select"
                      label="other"
                    >other
                      <el-input
                        v-model="item.otherValue"
                        v-show="item.selected.indexOf('other') >= 0"
                        size="small"
                        :maxlength="56"
                      ></el-input>
                    </el-checkbox>
                  </el-checkbox-group>
                  <template v-if="item.type === 'radio'">
                    <el-radio
                      v-model="item.selected"
                      v-for="(radio_text,x_index,key) in item.values"
                      :key="key"
                      :label="radio_text"
                    >{{radio_text}}</el-radio>
                    <el-radio
                      v-model="item.selected"
                      label="other"
                    >other</el-radio>
                      <el-input
                        v-model="item.otherValue"
                        :maxlength="56"
                        v-show="item.selected.indexOf('other') >= 0"
                        size="small"
                      ></el-input>
                    
                  </template>
                  <template v-if="item.type === 'input'">
                    <el-input style="width:200px" v-model="item.values" size="small"></el-input>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="inquiry-input mb10">
            <span class="text-purple">Packaging and printing</span>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 5}"
              resize="none"
              v-model="textarea2"
            ></el-input>
          </div>
          <div class="inquiry-input">
            <span class="text-purple">Other requirements</span>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 5}"
              resize="none"
              v-model="textarea3"
            ></el-input>
          </div>
          <div class="inquiry-right">
            <span class="mr20" @click="GoToinquiry">&#60;&#60; Go back to the previous page</span>
            <div class="btn_submit">
              <el-button
                @click="submit()"
                :disabled="!(title && textarea1)"
              >submit</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="footline">
        <footerbar></footerbar>
      </div>
    </div>
  </section>
</template>

<script>
// import $ from "jquery";
import headerbar from "~/components/common/headerbar.vue";
import footerbar from "~/components/common/footbar.vue";
import commonheader from "~/components/common/commonheader.vue";
import commonheaderbar from "~/components/common/commonheaderbar.vue";
import { remove } from "~/utils/methods.js";
import CustomTabs from '~/components/tabscommon/tabs.vue';
export default {
  name: "inquiryAdd",
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
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    footerbar: footerbar,
    CustomTabs
  },
  data() {
    return {
      token: "",
      type: "",
      selectItem: {},
      images: [],

      SubmitConditions: false, // 提交开关
      categoryId: null,
      title: "",
      quantity: 0,
      categoryChildList: [], // 分类列表
      parameterList: [], // 分类该有参数
      textarea1: "", //输入框1
      textarea2: "", //输入框2
      textarea3: "", //输入框3

      updataHeaders: {},
      uploadToken: {
        token: ""
      },
      fileList:[], // 图片
      fileListObj:{},
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    submit() {
      // 抽取自定义产品参数 ---------------------------
      let ProductData = [];
      this.parameterList.forEach(el => {
        if (el.type == "checkbox") {
          let select = [];
          if (el.selected.indexOf("other") > -1) {
            select = remove(el.selected, "other");
            select.push(el.otherValue);
          } else {
            select = el.selected;
          }
          ProductData.push({
            name: el.name,
            select: select
          });
        }else if (el.type == "radio") {
          let select = [];
          if (el.selected.indexOf("other") > -1) {
            select = [el.otherValue]
          } else {
            select = [el.selected]
          }
          ProductData.push({
            name: el.name,
            select: select
          });
        }
        else if (el.type == "input") {
          ProductData.push({
            name: el.name,
            select: el.values
          })
        }
      });
      let params = {
        category_id: this.categoryId,
        title: this.title || this.selectItem.en_name,
        type:this.type,
        quantity: this.quantity,
        product_params: ProductData,
        custom_comment: this.textarea1,
        package_print: this.textarea2,
        other_require: this.textarea3
      };
      params = Object.assign(params, this.fileListObj);
      params.imgList = this.fileList
      //判断inquiryItem是否已经存在所选参数----------------------------------
      let inquiryItemData = JSON.parse(localStorage.getItem("inquiryItem"));
      if (inquiryItemData) {
        if (this.$route.query.sub >= 0) {
          console.log('修改');
          inquiryItemData[this.$route.query.sub] = params;
          this.messages("Modify successfully");
        } else {
          console.log('添加');
          inquiryItemData.push(params);
          this.messages("Successfully added");
        }
        localStorage.setItem("inquiryItem", JSON.stringify(inquiryItemData));
      } else {
        // console.log('创建第一个');
        localStorage.setItem("inquiryItem", JSON.stringify([params]));
        this.$store.commit("SET_inquiryItem", params);
        this.messages("Successfully added");
      }
    },
    messages(msg) {
      this.$confirm(msg, "", {
        confirmButtonText: "Back to the list",
        cancelButtonText: "Close",
        type: "success"
      })
        .then(() => {
          this.GoToinquiry();
        })
        .catch(() => {});
    },
    selectedCategory(id) {
      return new Promise((resolve, reject) => {
      this.categoryId = id;
      this.SubmitConditions = true;
      let url = this.$store.state.headerUrl + "product_spec/" + id;
      this.$axios.get(url).then(el => {
        if (el.data.status === 400) {
          console.log(el.data.msg);
          this.parameterList = [];
        } else if (el.data.status === 200) {
          let tempData = el.data.data || [];
          tempData.forEach(item => {
            if (item.type == "checkbox" && item.selected === null) {
              item.selected = [];
            }else if(item.type == "radio" && item.selected === null){
              item.selected = '';
            }
          });
          this.parameterList = tempData;
        }
        resolve(this.parameterList)
      }).catch(err=>{
        reject(err)
      })
      })
    },
    closeWindow() {
      window.opener = null;
      window.close();
    },
    GoToinquiry() {
      this.$router.push("/inquiry");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt4M = file.size / 1024 / 1024 < 4;
      if (!isJPG) {
        this.$message.error("Uploading images can only be JPG/PNG format!");
      }
      if (!isLt4M) {
        this.$message.error("Upload image size cannot exceed 4MB!");
      }

      return isJPG && isLt4M;
    },
    handleAvatarSuccess(res, file, fileList) {
      let obj = {};
      let arr = [];
      fileList.forEach((el, i) => {
        obj["pic" + (i + 1)] = this.updataHeaders.domain + el.response.key;
        arr.push(el)
      });
      arr.forEach((el,i)=>{
        arr[i].url = this.updataHeaders.domain + el.response.key;
      })
      this.fileList = arr;
      this.fileListObj = obj;
    },
    handleRemove(file, fileList) {
      let obj = {};
      let arr = [];
      fileList.forEach((el, i) => {
        obj["pic" + (i + 1)] = this.updataHeaders.domain + el.response.key;
        arr.push(el)
      });
      arr.forEach((el,i)=>{
        arr[i].url = this.updataHeaders.domain + el.response.key;
      })
      this.fileList = arr;
      this.fileListObj = obj;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    sortListData(arr) {
      if (arr === undefined) {
        return [];
      }
      let data = arr.sort(this.comment.compare("id", true));
      data.forEach(el => {
        if (el.children) {
          el.children.sort(this.comment.compare("id", true));
          el.children.forEach(e => {
            if (e.children) {
              e.children.sort(this.comment.compare("id", true));
            }
          });
        }
      });
      // showDataByThis = data[0]
      return data;
    }
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("users"));
    //qiniu_token
    this.$axios
      .get(this.$store.state.headerUrl + "qiniu_uptk", {
        headers: {
          token: userInfo ? userInfo.token : ""
        }
      })
      .then(res => {
        if (res.data.data.length > 0) {
          this.updataHeaders = {
            domain: "",
            token: ""
          };
        } else {
          this.updataHeaders = res.data.data;
        }
      });
    this.sortListData(this.category).forEach(el => {
      this.categoryChildList = this.categoryChildList.concat(el.children);
    });
      // 判断是否更改
    if (this.$route.query.sub >= 0) {
      let thisData = JSON.parse(localStorage.getItem("inquiryItem"))[this.$route.query.sub]
      console.log("thisData");
      console.log(thisData);
      // 载入当前数据
      this.selectItem.id = thisData.category_id;
      this.categoryId = thisData.category_id;
      this.title = thisData.title;
      this.type = thisData.type;
      this.quantity = thisData.quantity;
      this.fileList = thisData.imgList
      this.textarea1 = thisData.custom_comment;
      this.textarea2 = thisData.package_print;
      this.textarea3 = thisData.other_require;
      if (thisData.imgList) {
        thisData.imgList.forEach((el,i)=>{
          this.fileListObj["pic" + (i + 1)] = el.url
        })
      }
      //读取localStorage数据
      this.selectedCategory(thisData.category_id).then(()=>{
        this.parameterList.forEach(el=>{
          thisData.product_params.forEach(e=>{
            if (el.name == e.name && el.type == 'radio') {
              if (el.values.indexOf(e.select[0]) > -1) {
                el.selected = e.select[0]
              }else{
                if (e.select[0].length === 0) {return}
                el.selected = 'other'
                el.otherValue = e.select[0]
              }
            }
            else if(el.name ==e.name && el.type == 'checkbox'){
              let arr = []
              e.select.forEach(item=>{
                let index = el.values.indexOf(item)
                if ( index > -1) {
                  arr.push(el.values[index])
                }else{
                  arr.push('other')
                  el.otherValue = item
                }
              })
              el.selected = arr
            }
            else if(el.name == e.name && el.type == 'input'){
              el.values = e.select
            }
          })
        })
      })
    }else{
      //新选产品-默认选项
      if (this.categoryChildList.length) {
        this.type = this.categoryChildList[0].en_name;
        if (this.categoryChildList[0].children.length > 0) {
          this.selectItem = this.categoryChildList[0].children[0]
          this.selectedCategory(this.categoryChildList[0].children[0].id)
        }
      }
    }
  }
};
</script>


