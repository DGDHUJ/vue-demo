<template>
  <div>
    <topheader/>
    <contentheader/>
    <div>
      <!-- <div class="pageouter"></div> -->
      <div class="layout">
        <!--面包屑-->
        <div class="orderConfirm-tab" style="line-height: 50px;height: 50px">
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="line-height: 50px;height: 50px"
          >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'member-menberHome' }">会员中心</el-breadcrumb-item>
            <el-breadcrumb-item>代理出口</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="line1">
          <div>
            <p>出口代理</p>
            <p>- 编号{{sn}}</p>
          </div>
          <div>返回会员中心</div>
        </div>
        <div class="count">
          <div class="title">
            <img src="../assets/img/tuishui.png" height="24" width="30">
            <p>退税账号</p>
          </div>
          <div class="count-list">
            <div
              v-if="type===null"
              class="list-item"
              v-for="(item,index) in account"
              :key="index"
              @click="choosecount(index)"
            >
              <i
                class="iconfont icon-14danxuankuangweixuan"
                :class="showchoose&&showindex===index?'icon-danxuankuang':'icon-14danxuankuangweixuan'"
              ></i>
              <div>收款账号：{{item.account_no}}</div>
              <div>收款公司：{{item.company_name}}</div>
              <div>开户行：{{item.bank_name}}</div>
            </div>
            <div v-if="type!== null" class="list-item">
              <div>收款账号：{{showaccount.account_no}}</div>
              <div>收款公司：{{showaccount.company_name}}</div>
              <div>开户行：{{showaccount.bank_name}}</div>
            </div>
          </div>
          <div v-if="type=== null" class="addnewcount" @click="addnewaccount(1)">+新增收款账户</div>
          <div v-if="type=== null" class="addnewcount" @click="addnewaccount(2)">修改选中的收款账户</div>
          <div v-if="type=== null" class="addnewcount" @click="delaccount">删除选中的收款账户</div>
        </div>
        <div class="certificate">
          <div class="title">
            <img src="../assets/img/detail3.png" height="25" width="32">
            <p>退税凭证</p>
          </div>
          <div class="certificate-item" v-if="type!== null">
            <p class="item-label">发票金额：</p>
            <div class="showvalue">{{fabiaojine}}</div>
          </div>
          <div class="certificate-item" v-if="type!== null">
            <p class="item-label">报关金额：</p>
            <div class="showvalue">{{baoguanjine}}</div>
          </div>
          <div class="certificate-item" v-if="type!== null">
            <p class="item-label">开票日期：</p>
            <div class="showvalue">{{kaipiaodate}}</div>
          </div>
          <!-- 上传购销发票 -->
          <!-- <div class="certificate-item">
            <p class="item-label">购销发票：</p>
            <div class="item-btn" v-if="type=== null">
              <label class="ui_button ui_button_primary" for="gouxiao">上传购销发票</label>
              <form><input type="file" @change="gouxiaoupdate" id="gouxiao" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showgouxiaodanjindu">
              <el-progress  class="jindutiao" :percentage="gouxiaodanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showgouxiaodanjindu&&gouxiaodanjindu===100||type!==null" @click="openwindow(gouxiaodan_file)">{{gouxiaodan}}</div>
          </div>-->
          <div style="margin-top:20px;">
             <p class="item-label">购销发票：</p>
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :data="updataHeaders"
              :on-preview="handlePreview1"
              :on-remove="handleRemove1"
              :on-success="onsuccess1"
              :limit="1"
              :on-exceed="onexceed1"
              :before-remove="beforeremove1"
            >
              <el-button slot="trigger" size="small" type="primary">上传购销发票</el-button>
            </el-upload>
          </div>

          <!-- 上传提单 -->
          <!-- <div class="certificate-item">
            <p class="item-label">提单：</p>
            <div class="item-btn" v-if="type=== null">
              <label class="ui_button ui_button_primary" for="tidan">上传提单</label>
              <form><input type="file" @change="tidanupdate" id="tidan" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showtidanjindu">
              <el-progress  class="jindutiao" :percentage="tidanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showtidanjindu&&tidanjindu===100||type!==null" @click="openwindow(tidan_file)">{{tidan}}</div>
          </div>-->
          <div style="margin-top:20px;">
             <p class="item-label">提单：</p>
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :data="updataHeaders"
              :on-preview="handlePreview2"
              :on-remove="handleRemove2"
              :on-success="onsuccess2"
              :limit="1"
              :on-exceed="onexceed2"
              :before-remove="beforeremove2"
            >
              <el-button slot="trigger" size="small" type="primary">上传提单</el-button>
            </el-upload>
          </div>

          <!-- 上传报关单 -->
          <!-- <div class="certificate-item">
            <p class="item-label">报关单：</p>
            <div class="item-btn" v-if="type=== null">
              <label class="ui_button ui_button_primary" for="baoguan">上传报关单</label>
              <form><input type="file" @change="baoguanupdate" id="baoguan" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showbaoguandanjindu">
              <el-progress  class="jindutiao" :percentage="baoguandanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showbaoguandanjindu&&baoguandanjindu===100||type!==null" @click="openwindow(baoguandan_file)">{{baoguandan}}</div>
          </div>-->
          <div style="margin-top:20px;">
             <p class="item-label">报关单：</p>
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :data="updataHeaders"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="onsuccess"
              :limit="1"
              :on-exceed="onexceed"
              :before-remove="beforeremove"
            >
              <el-button slot="trigger" size="small" type="primary">上传报关单</el-button>
            </el-upload>
          </div>

          <div class="certificate-item">
            <div class="ties">注：上传发票、提单、报关单电子版进行预审核，结汇退税更快速。已上传过的若无变更无须重新上传</div>
          </div>

          <div class="certificate-item">
            <p class="item-label">备注：</p>
            <el-input
              class="item-textarea"
              type="textarea"
              :disabled="type!==null"
              :rows="4"
              placeholder
              v-model="textarea"
            ></el-input>
          </div>
        </div>
        <div class="okbtn" v-if="type===null">
          <hr class="left-hr">
          <el-button class="okbtn-btn" @click="weituo">确认委托</el-button>
          <hr class="right-hr">
        </div>
      </div>
      <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="收款账号：" :label-width="formLabelWidth">
            <el-input v-model="tempaccount" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收款公司：" :label-width="formLabelWidth">
            <el-input v-model="tempcompany_name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="开户行：" :label-width="formLabelWidth">
            <el-input v-model="tempbank_name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="caozuoaccount">确定</el-button>
        </div>
      </el-dialog>
      <!-- <div class="pageouter"></div> -->
    </div>
    <homeguarantees/>
    <webfooter/>
  </div>
</template>
<script>
import topheader from "../components/comment/topheader.vue";
import webfooter from "../components/comment/webfooter.vue";
import contentheader from "../components/comment/contentheader.vue";
import homeguarantees from "../components/home/homeguarantees.vue";
export default {
  name: "drawback",
  components: {
    topheader: topheader,
    contentheader: contentheader,
    homeguarantees: homeguarantees,
    webfooter: webfooter
  },
  data() {
    return {
      readyid: null,
      sn: null,
      account: [],
      showaccount: {},
      showchoose: false,
      showindex: null,
      input: "",
      options: [
        {
          value: "USD",
          label: "USD"
        }
      ],
      value1: "",
      value: "USD",
      textarea: "",
      fabiaojine: null,
      baoguanjine: null,
      kaipiaodate: null,

      baoguandan: null,
      baoguandan_file: null,
      baoguandanjindu: null,
      showbaoguandanjindu: false,
      tidan: null,
      tidan_file: null,
      tidanjindu: null,
      showtidanjindu: false,
      gouxiaodan: null,
      gouxiaodan_file: null,
      gouxiaodanjindu: null,
      showgouxiaodanjindu: false,
      type: null,
      detailData: {},
      dialogFormVisible: false,
      title: "新增收款账户",
      form: {
        district_id: null,
        company_name: "",
        address: "",
        contact_name: "",
        contact_phone: "",
        district_full_name: null
      },
      formLabelWidth: "120px",
      tempid: null,
      tempaccount: null,
      tempcompany_name: null,
      tempbank_name: null,
      //  element上传
      updataHeaders: {},
      uploadToken: {
        token: ""
      }
    };
  },
  methods: {
    // 使用element做上传
    // 上传报关单
    onexceed() {
      alert("请先删除已上传的图片");
    },
    beforeremove() {
      this.baoguandan = null;
      this.baoguandan_file = null;
    },
    handleRemove(file, fileList) {
      
    },
    handlePreview(file) {
      let url = this.updataHeaders.domain + file.response.key;
      window.open(url);
    },
    onsuccess(res, file) {
      this.baoguandan = file.name;
      this.baoguandan_file = this.updataHeaders.domain + res.key;
    },
    // 上传购销单
    onexceed1() {
      alert("请先删除已上传的图片");
    },
    beforeremove1() {
      this.gouxiaodan = null;
      this.gouxiaodan_file = null;
    },
    handleRemove1(file, fileList) {
      
    },
    handlePreview1(file) {
      let url = this.updataHeaders.domain + file.response.key;
      window.open(url);
    },
    onsuccess1(res, file) {
      this.gouxiaodan = file.name;
      this.gouxiaodan_file = this.updataHeaders.domain + res.key;
    },
    // 上传提单
    onexceed2() {
      alert("请先删除已上传的图片");
    },
    beforeremove2() {
      this.tidan = null;
      this.tidan_file = null;
    },
    handleRemove2(file, fileList) {
      
    },
    handlePreview2(file) {
      let url = this.updataHeaders.domain + file.response.key;
      window.open(url);
    },
    onsuccess2(res, file) {
      this.tidan = file.name;
      this.tidan_file = tthis.updataHeaders.domain + res.key;
    },

    //打开文件查看
    openwindow(url) {
      window.open(url);
    },
    //打开账号弹框
    addnewaccount(index) {
      let tempalert = this.$alert;
      if (index === 1) {
        this.title = "新增收款账户";
      } else {
        if (this.showindex === null) {
          tempalert("请选择需要修改的账户", {
            confirmButtonText: "确定",
            callback: action => {}
          });
          return;
        } else {
          this.title = "修改收款账户";
          this.tempid = this.account[this.showindex].id;
          this.tempaccount = this.account[this.showindex].account_no;
          this.tempcompany_name = this.account[this.showindex].company_name;
          this.tempbank_name = this.account[this.showindex].bank_name;
        }
      }
      this.dialogFormVisible = true;
    },
    //删除账号
    delaccount() {
      let that = this;
      let tempalert = that.$alert;
      if (that.showindex === null) {
        tempalert("请选择需要删除的账户", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      } else {
        let url =
          that.$store.state.headerUrl +
          "member/bank_account/" +
          that.account[that.showindex].id;
        that.comment
          .axiosDelete(url, that.$axios, that.$store)
          .then(function(resp) {
            if (resp.data.code === 0) {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {
                  that.showchoose = false;
                  that.showindex = null;
                  that._getbankInfo();
                }
              });
            } else {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {}
              });
            }
          })
          .catch(function(error) {
            tempalert(error, {
              confirmButtonText: "确定",
              callback: action => {}
            });
          });
      }
    },
    //新增修改账号
    caozuoaccount() {
      let that = this;
      let url = that.$store.state.headerUrl + "member/bank_account";
      let tempalert = that.$alert;
      if (that.tempid === null) {
        let params = {
          account_no: that.tempaccount,
          company_name: that.tempcompany_name,
          bank_name: that.tempbank_name
        };
        that.comment
          .axiosPost(url, that.$axios, that.$store, params, tempalert, that)
          .then(function(resp) {
            if (resp.data.code === 0) {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {
                  that._getbankInfo();
                  that.dialogFormVisible = false;
                }
              });
            } else {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {}
              });
            }
          })
          .catch(function(error) {
            tempalert(error, {
              confirmButtonText: "确定",
              callback: action => {}
            });
          });
      } else {
        let params = {
          id: Number(that.tempid),
          account_no: that.tempaccount,
          company_name: that.tempcompany_name,
          bank_name: that.tempbank_name
        };
        that.comment
          .axiosPut(url, that.$axios, that.$store, params, tempalert, that)
          .then(function(resp) {
            if (resp.data.code === 0) {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {
                  that.showchoose = false;
                  that.showindex = null;
                  that._getbankInfo();
                  that.dialogFormVisible = false;
                }
              });
            } else {
              tempalert(resp.data.msg, {
                confirmButtonText: "确定",
                callback: action => {}
              });
            }
          })
          .catch(function(error) {
            tempalert(error, {
              confirmButtonText: "确定",
              callback: action => {}
            });
          });
      }
    },
    //获取账号信息
    _getbankInfo() {
      let that = this;
      let url = that.$store.state.headerUrl + "member/bank_account";
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(function(resp) {
          that.account = resp.data.data;
        })
        .catch(function(error) {});
    },
    //选择账号
    choosecount(index) {
      if (index === this.showindex) {
        this.showchoose = !this.showchoose;
        this.showindex = null;
      } else {
        this.showchoose = true;
        this.showindex = index;
      }
    },
    //提交
    weituo() {
      let that = this;
      let url = that.$store.state.headerUrl + "member/drawback";
      let tempalert = that.$alert;
      if (that.showindex === null) {
        tempalert("请选择结汇账号", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      /*   if(that.fabiaojine === null){
          tempalert('请输入发票金额', {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
          return
       }
        if(that.baoguanjine === null){
          tempalert('请输入报关金额', {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
          return
        }
        if(that.kaipiaodate === null){
          tempalert('请输入开票日期', {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
          return
        }*/
      if (that.gouxiaodan_file === null) {
        tempalert("请上购销单文件", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (that.tidan_file === null) {
        tempalert("请上传提单文件", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (that.baoguandan_file === null) {
        tempalert("请上报关文件", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      let params = {
        order_id: Number(that.$route.query.id),
        bank_account_id: Number(that.account[that.showindex].id),
        ps_invoice: that.gouxiaodan_file,
        tidan_file: that.tidan_file,
        customs_file: that.baoguandan_file,
        comment: that.textarea
      };
      that.comment
        .axiosPost(url, that.$axios, that.$store, params, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "确定",
              callback: action => {
                that.$router.push({
                  name: "agentOutletDetail",
                  query: { id: that.$route.query.id }
                });
              }
            });
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "确定",
              callback: action => {}
            });
            return;
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "确定",
            callback: action => {}
          });
          return;
        });
    },
    //获取详情
    _getdetaildata() {
      let that = this;
      let url =
        that.$store.state.headerUrl +
        "member/drawback/by_order_id/" +
        that.$route.query.id;
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.detailData = resp.data.data;
            that.fabiaojine = that.detailData.invoice_sum;
            that.baoguanjine = that.detailData.customs_sum;
            that.kaipiaodate = that.comment.formate(
              "yyyy-MM-dd",
              new Date(that.detailData.invoice_date)
            );
            that.gouxiaodan = that.detailData.ps_invoice;
            that.gouxiaodan_file = that.detailData.ps_invoice;
            that.tidan = that.detailData.tidan_file;
            that.tidan_file = that.detailData.tidan_file;
            that.baoguandan = that.detailData.customs_file;
            that.baoguandan_file = that.detailData.customs_file;
            that.textarea = that.detailData.comment;
          }
        })
        .catch(function(error) {});
    },

    //上传文件
    baoguanupdate(e) {
      const jsonUsers = localStorage.getItem("token");
      this.baoguandanjindu = 0;
      this.showbaoguandanjindu = true;
      let file = e.target.files[0];
      let d = new Date();
      let type = e.target.files[0].name.split(".");
      let tempvalue = "";
      this.comment.getfile_md5(file, function(resp) {
        tempvalue = resp + "." + type[type.length - 1];
      });

      let times = 1;
      window.setInterval(() => {
        times--;
        if (times === 0) {
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
              this.baoguandanjindu = complete;
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
              this.uploading1(
                param,
                config,
                file.name,
                file,
                putExtra,
                "baoguandan"
              ); //然后将参数上传七牛
            });
        }
      }, 1000);
    },
    gouxiaoupdate(e) {
      const jsonUsers = localStorage.getItem("token");
      this.gouxiaodanjindu = 0;
      this.showgouxiaodanjindu = true;
      let file = e.target.files[0];
      let d = new Date();
      let type = e.target.files[0].name.split(".");
      let tempvalue = "";
      this.comment.getfile_md5(file, function(resp) {
        tempvalue = resp + "." + type[type.length - 1];
      });
      let times = 1;
      window.setInterval(() => {
        times--;
        if (times === 0) {
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
              this.gouxiaodanjindu = complete;
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
              this.uploading1(
                param,
                config,
                file.name,
                file,
                putExtra,
                "gouxiaodan"
              ); //然后将参数上传七牛
            });
        }
      }, 1000);
    },
    tidanupdate(e) {
      const jsonUsers = localStorage.getItem("token");
      this.tidanjindu = 0;
      this.showtidanjindu = true;
      let file = e.target.files[0];
      let d = new Date();
      let type = e.target.files[0].name.split(".");
      let tempvalue = "";
      this.comment.getfile_md5(file, function(resp) {
        tempvalue = resp + "." + type[type.length - 1];
      });
      let times = 1;
      window.setInterval(() => {
        times--;
        if (times === 0) {
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
              this.tidanjindu = complete;
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
              this.uploading1(
                param,
                config,
                file.name,
                file,
                putExtra,
                "tidan"
              ); //然后将参数上传七牛
            });
        }
      }, 1000);
    },
    uploading1(param, config, pathName, file, putExtra, type) {
      let that = this;
      that.$axios
        .post("http://upload-as0.qiniup.com/", param, config, file, putExtra)
        .then(response => {
          if (type === "gouxiaodan") {
            that.gouxiaodan = pathName;
            that.gouxiaodan_file = that.showHeader + response.data.key;
            that.showgouxiaodanjindu = false;
          }
          if (type === "tidan") {
            that.tidan = pathName;
            that.tidan_file = that.showHeader + response.data.key;
            that.showtidanjindu = false;
          }
          if (type === "baoguandan") {
            that.baoguandan = pathName;
            that.baoguandan_file = that.showHeader + response.data.key;
            that.showbaoguandanjindu = false;
          }
        });
    }
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("users"));
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
    let that = this;
    that.sn = that.$route.query.sn;
    that._getbankInfo();
    if (that.$route.query.type === "dt") {
      that.type = that.$route.query.type;
      that._getdetaildata();
    }
  },
  watch: {
    detailData: function(val) {
      if (this.account.length !== 0) {
        for (let i = 0; i < this.account.length; i++) {
          if (this.account[i].id === val.bank_account_id) {
            this.showaccount = this.account[i];
          }
        }
      }
    },
    account: function(val) {
      if (this.detailData.bank_account_id) {
        for (let i = 0; i < val.length; i++) {
          if (val[i].id === this.detailData.bank_account_id) {
            this.showaccount = val[i];
          }
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
.line1 {
  padding: 10px 20px;
  background: white;
  margin-top: 10px;
  overflow: hidden;
  div:nth-of-type(1) {
    float: left;
    p:nth-of-type(1) {
      font-size: 20px;
      color: #4a3f91;
      float: left;
      font-weight: bold;
      line-height: 30px;
      height: 30px;
    }
    p:nth-of-type(2) {
      /*display: inline-block;*/
      float: left;
      line-height: 30px;
      height: 30px;
      font-size: 16px;
    }
  }
  div:nth-of-type(2) {
    float: right;
    line-height: 30px;
    height: 30px;
    color: #f08519;
    cursor: pointer;
    font-size: 16px;
  }
}
.count {
  padding: 10px 20px;
  background: white;
  margin-top: 20px;
  overflow: hidden;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      line-height: 25px;
      height: 25px;
      font-size: 16px;
      margin-left: 46px;
      font-weight: bold;
    }
  }
  .count-list {
    margin: 20px 0;
    .list-item {
      overflow: hidden;
      font-size: 16px;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      i {
        font-size: 16px;
        float: left;
        margin-right: 10px;
      }
      div {
        float: left;
        width: 30%;
      }
    }
  }
  .addnewcount {
    color: #f08519;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    width: 200px;
    display: inline-block;
  }
  .addnewcount:active {
    font-size: 17px;
  }
}
.certificate {
  padding: 10px 20px 20px 20px;
  background: white;
  margin-top: 20px;
  overflow: hidden;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      line-height: 25px;
      height: 25px;
      font-size: 16px;
      margin-left: 46px;
      font-weight: bold;
    }
  }
  .certificate-item {
    margin: 20px 0 0 0;
    font-size: 16px;
    overflow: hidden;
    .item-label {
      float: left;
      line-height: 40px;
      height: 40px;
      width: 150px;
    }
    .ties {
      margin-left: 170px;
      color: red;
      line-height: 30px;
      height: 30px;
    }
    .star {
      float: left;
      margin-left: 15px;
      margin-right: 5px;
      line-height: 40px;
      height: 40px;
      color: red;
    }
    .enter {
      float: left;
      width: 180px;
      line-height: 40px;
      height: 40px;
    }
    .enter1 {
      float: left;
      width: 80px;
      line-height: 40px;
      height: 40px;
      margin-left: 20px;
    }
    .item-btn {
      float: left;
      width: 150px;
      line-height: 40px;
      height: 40px;
      background: #f08519;
      color: white;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
      margin-right: 20px;
      .ui_button {
        border-radius: 5px;
        display: inline-block;
        line-height: 40px;
        padding: 0 40px;
        color: white;
        font-weight: 700;
        cursor: pointer;
      }
      .ui_button_primary {
        background: #f08519;
        color: white;
      }
      label.ui_button:hover {
        background: #f08519;
        color: white;
      }
      .inputshow {
        position: absolute;
        clip: rect(0 0 0 0);
      }
    }
    .item-textarea {
      float: left;
      width: 84%;
    }
    .item-dan {
      float: left;
      line-height: 40px;
      height: 40px;
      cursor: pointer;
      .jindutiao {
        width: 160px;
        padding-top: 10px;
      }
    }
    .showvalue {
      line-height: 40px;
      height: 40px;
    }
  }
}
.okbtn {
  margin: 50px 0;
  text-align: center;
  display: flex;
  line-height: 50px;
  height: 50px;
  .left-hr {
    width: 40%;
    margin-top: 25px;
    height: 1px;
  }
  .okbtn-btn {
    width: 200px;
    margin: 0 20px;
    background: #f08619;
    color: white;
    font-size: 1.2rem;
  }
  .right-hr {
    width: 40%;
    margin-top: 25px;
    height: 1px;
  }
}
</style>
