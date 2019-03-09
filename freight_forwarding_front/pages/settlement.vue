<template>
  <div>
    <topheader/>
    <contentheader/>
    <div>
      <!-- <div class="pageouter"></div> -->
      <div class="layout" >
        <!--面包屑-->
        <div class="orderConfirm-tab" style="line-height: 50px;height: 50px">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: 50px;height: 50px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'member-menberHome' }">会员中心</el-breadcrumb-item>
            <el-breadcrumb-item >代理出口</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="line1">
          <div><p>出口代理</p> <p> - 编号{{sn}}</p> </div>
          <div @click="gohuiyuancentre">返回会员中心</div>
        </div>
        <div class="count">
          <div class="title">
            <img src="../assets/img/baoguan.png" height="25" width="32"/>
            <p>结汇账号</p>
          </div>
          <div class="count-list">
            <div v-if="readyid=== null" class="list-item" v-for="(item,index) in account" :key="index" @click="choosecount(index)">
              <i class="iconfont icon-14danxuankuangweixuan" :class="showchoose&&showindex===index?'icon-danxuankuang':'icon-14danxuankuangweixuan'"></i>
              <div>收款账号：{{item.account_no}}</div>
              <div>收款公司：{{item.company_name}}</div>
              <div>开户行：{{item.bank_name}}</div>
            </div>
            <div v-if="readyid!== null" class="list-item">
              <div>收款账号：{{showaccount.account_no}}</div>
              <div>收款公司：{{showaccount.company_name}}</div>
              <div>开户行：{{showaccount.bank_name}}</div>
            </div>
          </div>
          <div v-if="readyid=== null" class="addnewcount" @click="addnewaccount(1)">+新增收款账户</div>
          <div v-if="readyid=== null" class="addnewcount" @click="addnewaccount(2)">修改选中的收款账户</div>
          <div v-if="readyid=== null" class="addnewcount" @click="delaccount">删除选中的收款账户</div>
        </div>
        <div class="certificate">
          <div class="title">
            <img src="../assets/img/detail3.png" height="25" width="32"/>
            <p>结汇凭证</p>
          </div>
          <div class="certificate-item">
            <p class="item-label">付款方账户：</p> <span class="star">*</span> <el-input :disabled="readyid!== null" class="enter" v-model="counnt" placeholder=""></el-input>
          </div>
          <div class="certificate-item">
            <p class="item-label">付款方名称：</p> <span class="star">*</span> <el-input :disabled="readyid!== null" class="enter" v-model="payname" placeholder=""></el-input>
          </div>
          <div class="certificate-item">
            <p class="item-label">付款日期：</p> <span class="star">*</span> <el-date-picker :disabled="readyid!== null" class="enter" v-model="paydate" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="certificate-item">
            <p class="item-label">付款金额：</p> <span class="star">&nbsp;</span> <el-input type="number" :disabled="readyid!== null" class="enter" v-model="jine" placeholder="金额，最多保留2位小数"></el-input>
            <!--下拉-->
            <el-select class="enter1" v-model="bizhong" placeholder="请选择">
              <el-option
                :disabled="readyid!== null"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <!-- 上传水单 -->
          <!-- <div class="certificate-item">
            <p class="item-label">付款水单：</p> <span class="star">&nbsp;</span>
            <div class="item-btn" v-if="readyid=== null">
              <label class="ui_button ui_button_primary" for="shuidan">上传水单</label>
              <form><input type="file" @change="shuidanupdate" id="shuidan" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showshuidanjindu">
              <el-progress  style=" width: 160px;    padding-top: 10px;" :percentage="shuidanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showshuidanjindu&&shuidanjindu===100||readyid!==null" @click="openwindow(shuidan_file)">{{shuidan}}</div>
          </div> -->
<div style="margin-top:20px;">
  <p class="item-label">付款水单：</p> <span class="star">&nbsp;</span>
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
              <el-button slot="trigger" size="small" type="primary">上传水单</el-button>
            </el-upload>
          </div>



          <div class="certificate-item">
            <div class="ties">注：请务必上传水单，否则将驳回结汇</div>
          </div>


<!--  -->
          <!-- <div class="certificate-item">
            <p class="item-label">购销发票：</p> <span class="star">&nbsp;</span>
            <div class="item-btn" v-if="readyid=== null">
              <label class="ui_button ui_button_primary" for="gouxiao">上传购销发票</label>
              <form><input type="file" @change="gouxiaodanupdate" id="gouxiao" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showgouxiaodanjindu">
              <el-progress  style=" width: 160px;    padding-top: 10px;" :percentage="gouxiaodanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showgouxiaodanjindu&&gouxiaodanjindu===100||readyid!==null" @click="openwindow(gouxiaodan_file)">{{gouxiaodan}}</div>
          </div> -->
<div style="margin-top:20px;">
   <p class="item-label">购销发票：</p> <span class="star">&nbsp;</span>
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
            <p class="item-label">提单：</p> <span class="star">&nbsp;</span>
            <div class="item-btn" v-if="readyid=== null">
              <label class="ui_button ui_button_primary" for="tidan">上传提单</label>
              <form><input type="file" @change="tidanupdate" id="tidan" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showtidanjindu">
              <el-progress  style=" width: 160px;    padding-top: 10px;" :percentage="tidanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showtidanjindu&&tidanjindu===100||readyid!==null" @click="openwindow(tidan_file)">{{tidan}}</div>
          </div> -->


<div style="margin-top:20px;">
   <p class="item-label">提单：</p> <span class="star">&nbsp;</span>
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
<!--  -->
          <!-- <div class="certificate-item">
            <p class="item-label">报关单：</p> <span class="star">&nbsp;</span>
            <div class="item-btn" v-if="readyid=== null">
              <label class="ui_button ui_button_primary" for="baoguan">上传报关单</label>
              <form><input type="file" @change="baoguandanupdate" id="baoguan" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showbaoguandanjindu">
              <el-progress  style=" width: 160px;    padding-top: 10px;" :percentage="baoguandanjindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showbaoguandanjindu&&baoguandanjindu===100||readyid!==null" @click="openwindow(baoguandan_file)">{{baoguandan}}</div>
          </div> -->


<div style="margin-top:20px;">
  <p class="item-label">报关单：</p> <span class="star">&nbsp;</span>
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :data="updataHeaders"
              :on-preview="handlePreview3"
              :on-remove="handleRemove3"
              :on-success="onsuccess3"
              :limit="1"
              :on-exceed="onexceed3"
              :before-remove="beforeremove3"
            >
              <el-button slot="trigger" size="small" type="primary">上传报关单</el-button>
            </el-upload>
          </div>
          <div class="certificate-item">
            <div class="ties">注：上传发票、提单、报关单电子版进行预审核，结汇退税更快速</div>
          </div>

<!--  -->
          <!-- <div class="certificate-item">
            <p class="item-label">授权委托书：</p> <span class="star">&nbsp;</span>
            <div class="item-btn" v-if="readyid=== null">
              <label class="ui_button ui_button_primary" for="weituoshu">上传授权委托书</label>
              <form><input type="file" @change="weituoshuupdate" id="weituoshu" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showweituoshujindu">
              <el-progress  style=" width: 160px;    padding-top: 10px;" :percentage="weituoshujindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showweituoshujindu&&weituoshujindu===100||readyid!==null" @click="openwindow(weituoshu_file)">{{weituoshu}}</div>
          </div> -->


<div style="margin-top:20px;">
   <p class="item-label">授权委托书：</p> <span class="star">&nbsp;</span>
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :data="updataHeaders"
              :on-preview="handlePreview4"
              :on-remove="handleRemove4"
              :on-success="onsuccess4"
              :limit="1"
              :on-exceed="onexceed4"
              :before-remove="beforeremove4"
            >
              <el-button slot="trigger" size="small" type="primary">上传授权委托书</el-button>
            </el-upload>
          </div>

          <div class="certificate-item">
            <div class="ties">注：报关外商和收汇外商不一致时请上传授权委托书，否则将驳回结汇</div>
          </div>
          <div class="certificate-item">
            <p class="item-label">备注：</p> <span class="star">&nbsp;</span>
            <el-input
              :disabled="readyid!== null"
              class="item-textarea"
              type="textarea"
              :rows="4"
              placeholder=""
              v-model="textarea">
            </el-input>
          </div>
        </div>
        <div class="okbtn" v-if="readyid === null">
          <hr class="left-hr">
          <el-button class="okbtn-btn" @click="weituo">确认委托</el-button>
          <hr class="right-hr">
        </div>
      </div>
      <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form >
          <el-form-item label="收款账号：" :label-width="formLabelWidth">
            <el-input v-model="tempaccount" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="收款公司：" :label-width="formLabelWidth">
            <el-input v-model="tempcompany_name"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="开户行：" :label-width="formLabelWidth">
            <el-input v-model="tempbank_name"  auto-complete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="caozuoaccount" > 确定 </el-button>
        </div>
      </el-dialog>
      <!-- <div class="pageouter"></div> -->
    </div>
    <homeguarantees/>
    <webfooter/>
  </div>
</template>
<script>
  import topheader from '../components/comment/topheader.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  export default {
    name:'settlement',
    components:{
      topheader:topheader,
      contentheader:contentheader,
      homeguarantees:homeguarantees,
      webfooter:webfooter
    },
    data(){
      return{
        readyid:null,
        detailData:{},
        sn:'',
        tempid:null,
        tempaccount:null,
        tempcompany_name:null,
        tempbank_name:null,
        dialogFormVisible: false,
        showchoose:false,
        showindex:null,
        input:'',
        counnt:'',
        payname:'',
        paydate:'',
        jine:'',
        bizhong:'USD',
        options: [{
          value: 'USD',
          label: 'USD'
        }, {
          value: 'EUR',
          label: 'EUR'
        }, {
          value: 'GBP',
          label: 'GBP'
        }],
        textarea:'',
        shuidan:null,
        shuidan_file:null,
        shuidanjindu:null,
        showshuidanjindu:false,
        gouxiaodan:null,
        gouxiaodan_file:null,
        gouxiaodanjindu:null,
        showgouxiaodanjindu:false,
        tidan:null,
        tidan_file:null,
        tidanjindu:null,
        showtidanjindu:false,
        baoguandan:null,
        baoguandan_file:null,
        baoguandanjindu:null,
        showbaoguandanjindu:false,
        weituoshu:null,
        weituoshu_file:null,
        weituoshujindu:null,
        showweituoshujindu:false,
        account:[],
        showaccount:{},
        title:'新增收款账户',
        form: {
          district_id:null,
          company_name: '',
          address: '',
          contact_name: '',
          contact_phone: '',
          district_full_name: null,
        },
        formLabelWidth: '120px',

         //  element上传
      updataHeaders: {},
      uploadToken: {
        token: ""
      }
      }
    },
    methods:{
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
      this.tidan_file = this.updataHeaders.domain + res.key;
    },
    // 上传报关单
    onexceed3() {
      alert("请先删除已上传的图片");
    },
    beforeremove3() {
      this.baoguandan = null;
      this.baoguandan_file = null;
    },
    handleRemove3(file, fileList) {

    },
    handlePreview3(file) {
      let url = this.updataHeaders.domain + file.response.key;
      window.open(url);
    },
    onsuccess3(res, file) {
      this.baoguandan = file.name;
      this.baoguandan_file = this.updataHeaders.domain + res.key;
    },
    // 上传委托单
    onexceed4() {
      alert("请先删除已上传的图片");
    },
    beforeremove4() {
      this.weituoshu = null;
      this.weituoshu_file = null;
    },
    handleRemove4(file, fileList) {

    },
    handlePreview4(file) {
      let url = this.updataHeaders.domain + file.response.key;
      window.open(url);
    },
    onsuccess4(res, file) {
      this.weituoshu = file.name;
      this.weituoshu_file = this.updataHeaders.domain + res.key;
    },
    // 上传水单
    onexceed() {
      alert("请先删除已上传的图片");
    },
    beforeremove() {
      this.shuidan = null;
      this.shuidan_file = null;
    },
    handleRemove(file, fileList) {
      
    },
    handlePreview(file) {
      let url = this.updataHeaders.domain + file.response.key;
      window.open(url);
    },
    onsuccess(res, file) {
  
            
      this.shuidan = file.name;
      this.shuidan_file = this.updataHeaders.domain + res.key;
    },





      openwindow(url){
        window.open(url);
      },
      delaccount(){
       let that = this;
       let tempalert = that.$alert;
       if(that.showindex === null){
         tempalert('请选择需要删除的账户', {
           confirmButtonText: '确定',
           callback: action => {
           }
         });
         return
       }else{
         let url = that.$store.state.headerUrl + 'member/bank_account/'+that.account[that.showindex].id;
         that.comment.axiosDelete(url,that.$axios,that.$store).then(function (resp) {
           if(resp.data.code === 0){
             tempalert(resp.data.msg, {
               confirmButtonText: '确定',
               callback: action => {
                 that.showchoose = false;
                 that.showindex = null;
                 that._getbankInfo();
               }
             });
           }else{
             tempalert(resp.data.msg, {
               confirmButtonText: '确定',
               callback: action => {

               }
             });
           }
         }).catch(function (error) {
           tempalert(error, {
             confirmButtonText: '确定',
             callback: action => {

             }
           });
         })
       }

      },
      addnewaccount(index){
        let tempalert = this.$alert;
        if(index === 1){
          this.title ='新增收款账户';
        }else{
          if(this.showindex === null){
            tempalert('请选择需要修改的账户', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }else{
            this.title ='修改收款账户';
            this.tempid = this.account[this.showindex].id
            this.tempaccount = this.account[this.showindex].account_no
            this.tempcompany_name = this.account[this.showindex].company_name
            this.tempbank_name = this.account[this.showindex].bank_name
          }
        }
        this.dialogFormVisible = true
      },
      caozuoaccount(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/bank_account';
        let tempalert = that.$alert;
        if(that.tempid === null){
          let params ={
            account_no:that.tempaccount,
            company_name:that.tempcompany_name,
            bank_name:that.tempbank_name,
          }
          that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
            if(resp.data.code === 0){
              tempalert(resp.data.msg, {
                confirmButtonText: '确定',
                callback: action => {
                  that._getbankInfo();
                  that.dialogFormVisible =false
                }
              });
            }else{
              tempalert(resp.data.msg, {
                confirmButtonText: '确定',
                callback: action => {
                }
              });
            }

          }).catch(function (error) {
            tempalert(error, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          })
        }else{
          let params ={
            id:Number(that.tempid),
            account_no:that.tempaccount,
            company_name:that.tempcompany_name,
            bank_name:that.tempbank_name,
          }
          that.comment.axiosPut(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
            if(resp.data.code === 0){
              tempalert(resp.data.msg, {
                confirmButtonText: '确定',
                callback: action => {
                  that.showchoose = false;
                  that.showindex = null;
                  that._getbankInfo();
                  that.dialogFormVisible =false
                }
              });
            }else{
              tempalert(resp.data.msg, {
                confirmButtonText: '确定',
                callback: action => {
                }
              });
            }

          }).catch(function (error) {
            tempalert(error, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          })
        }
      },
      _getbankInfo(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/bank_account'
        that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
          that.account = resp.data.data;
        }).catch(function (error) {

        })
      },
      choosecount(index){
        if(index === this.showindex){
          this.showchoose = !this.showchoose
          this.showindex = null
        }else{
          this.showchoose = true
          this.showindex = index
        }
      },
      gohuiyuancentre(){
        this.$router.push({name:'member-menberHome'})
      },
      shuidanupdate(e){
        const jsonUsers = localStorage.getItem('token');
        this.shuidanjindu = 0;
        this.showshuidanjindu = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
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
            param.append('file',file,file.name,putExtra)
            param.append('key', tempvalue)
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              onUploadProgress: progressEvent => {
                var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                this.shuidanjindu = complete
              },
              headers:{'Content-Type':'multipart/form-data'},
              useCdnDomain: true,
              disableStatisticsReport: false,
              retryCount: 6,
            };
            //先从自己的服务端拿到七牛token
            this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
              headers:{
                token:jsonUsers
              }
            })
              .then(response=>{
                this.token = response.data.data.token;
                this.showHeader =  response.data.data.domain;
                param.append('token',this.token);
                this.uploading1(param,config,file.name,file,putExtra,'shuidan');//然后将参数上传七牛
              })
          }
        }, 1000)




      },
      gouxiaodanupdate(e){
        const jsonUsers = localStorage.getItem('token');
        this.gouxiaodanjindu = 0;
        this.showgouxiaodanjindu = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
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
            param.append('file',file,file.name,putExtra)
            param.append('key', tempvalue)
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              onUploadProgress: progressEvent => {
                var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                this.gouxiaodanjindu = complete
              },
              headers:{'Content-Type':'multipart/form-data'},
              useCdnDomain: true,
              disableStatisticsReport: false,
              retryCount: 6,
            };
            //先从自己的服务端拿到七牛token
            this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
              headers:{
                token:jsonUsers
              }
            })
              .then(response=>{
                this.token = response.data.data.token;
                this.showHeader =  response.data.data.domain;
                param.append('token',this.token);
                this.uploading1(param,config,file.name,file,putExtra,'gouxiaodan');//然后将参数上传七牛
              })
          }
        }, 1000)


      },
      tidanupdate(e){
        const jsonUsers = localStorage.getItem('token');
        this.tidanjindu = 0;
        this.showtidanjindu = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
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
            param.append('file',file,file.name,putExtra)
            param.append('key', tempvalue)
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              onUploadProgress: progressEvent => {
                var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                this.tidanjindu = complete
              },
              headers:{'Content-Type':'multipart/form-data'},
              useCdnDomain: true,
              disableStatisticsReport: false,
              retryCount: 6,
            };
            //先从自己的服务端拿到七牛token
            this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
              headers:{
                token:jsonUsers
              }
            })
              .then(response=>{
                this.token = response.data.data.token;
                this.showHeader =  response.data.data.domain;
                param.append('token',this.token);
                this.uploading1(param,config,file.name,file,putExtra,'tidan');//然后将参数上传七牛
              })
          }
        }, 1000)


      },
      baoguandanupdate(e){
       const jsonUsers = localStorage.getItem('token');
        this.baoguandanjindu = 0;
        this.showbaoguandanjindu = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
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
            param.append('file',file,file.name,putExtra)
            param.append('key', tempvalue)
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              onUploadProgress: progressEvent => {
                var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                this.baoguandanjindu = complete
              },
              headers:{'Content-Type':'multipart/form-data'},
              useCdnDomain: true,
              disableStatisticsReport: false,
              retryCount: 6,
            };
            //先从自己的服务端拿到七牛token
            this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
              headers:{
                token:jsonUsers
              }
            })
              .then(response=>{
                this.token = response.data.data.token;
                this.showHeader =  response.data.data.domain;
                param.append('token',this.token);
                this.uploading1(param,config,file.name,file,putExtra,'baoguandan');//然后将参数上传七牛
              })
          }
        }, 1000)



      },
      weituoshuupdate(e){
        const jsonUsers = localStorage.getItem('token');
        this.weituoshujindu = 0;
        this.showweituoshujindu = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
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
            param.append('file',file,file.name,putExtra)
            param.append('key', tempvalue)
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              onUploadProgress: progressEvent => {
                var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                this.weituoshujindu = complete
              },
              headers:{'Content-Type':'multipart/form-data'},
              useCdnDomain: true,
              disableStatisticsReport: false,
              retryCount: 6,
            };
            //先从自己的服务端拿到七牛token
            this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
              headers:{
                token:jsonUsers
              }
            })
              .then(response=>{
                this.token = response.data.data.token;
                this.showHeader =  response.data.data.domain;
                param.append('token',this.token);
                this.uploading1(param,config,file.name,file,putExtra,'weituoshu');//然后将参数上传七牛
              })
          }
        }, 1000)


      },
      weituo(){
        let that = this;
        let url = that.$store.state.headerUrl + 'member/exchange_settlement'
        let tempalert = that.$alert;
        let tempbizhong = (that.bizhong).toLocaleLowerCase();
        if(that.showindex === null){
          tempalert('请选择结汇账号', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.counnt === ''){
          tempalert('请输入付款方账户', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.payname === ''){
          tempalert('请输入付款方名称', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.paydate === ''){
          tempalert('请输入付款日期', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.jine === ''){
          tempalert('请输入付款金额', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.shuidan_file === null){
          tempalert('请上传水单', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.gouxiaodan_file === null){
          tempalert('请上传购销单', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.tidan_file === null){
          tempalert('请上传提单', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.baoguandan_file === null){
          tempalert('请上传报关单', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.weituoshu_file === null){
          tempalert('请上传委托书', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }

        let params ={
          order_id:Number(that.$route.query.id),
          bank_account_id:Number(that.account[that.showindex].id),
          pay_account_no:that.counnt,
          pay_name:that.payname,
          pay_date:that.comment.formate('yyyy-MM-dd',new Date(that.paydate)),
          pay_sum:Number(that.jine),
          currency:tempbizhong,
          pay_file:that.shuidan_file,
          ps_invoice:that.gouxiaodan_file,
          tidan_file:that.tidan_file,
          customs_file:that.baoguandan_file,
          authorize_file:that.weituoshu_file,
          comment:that.textarea
        }
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                that.$router.push({name:'agentOutletDetail',query:{id:that.$route.query.id}})
              }
            });
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        })
      },

      //获取详情
      _getdetial(){
        let that  =this;
        let url = that.$store.state.headerUrl + 'member/exchange_settlement/' + that.$route.query.tempid;
        that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code === 0){
            that.detailData = resp.data.data;
            that.counnt = that.detailData.pay_account_no;
            that.payname = that.detailData.pay_name;
            that.paydate = that.detailData.pay_date;
            that.jine = that.detailData.pay_sum;
            that.bizhong = (that.detailData.currency).toLocaleUpperCase();
            that.shuidan = that.detailData.pay_file;
            that.shuidan_file = that.detailData.pay_file;
            that.gouxiaodan = that.detailData.ps_invoice;
            that.gouxiaodan_file = that.detailData.ps_invoice;
            that.tidan = that.detailData.tidan_file;
            that.tidan_file = that.detailData.tidan_file;
            that.baoguandan = that.detailData.customs_file;
            that.baoguandan_file = that.detailData.customs_file;
            that.weituoshu = that.detailData.authorize_file;
            that.weituoshu_file = that.detailData.authorize_file;
            that.textarea = that.detailData.comment;
          }
        }).catch(function (error) {

        })

      },
      //七牛上传图片
      uploading1 (param,config,pathName,file,putExtra,type){
        let that = this;
        that.$axios.post('http://upload-as0.qiniup.com/',param,config,file,putExtra)
          .then(response=>{
            if(type === 'shuidan'){
              that.shuidan = pathName;
              that.shuidan_file = that.showHeader+response.data.key;
              that.showshuidanjindu = false;
            }
            if(type === 'gouxiaodan'){
              that.gouxiaodan = pathName;
              that.gouxiaodan_file = that.showHeader+response.data.key;
              that.showgouxiaodanjindu = false;
            }
            if(type === 'tidan'){
              that.tidan = pathName;
              that.tidan_file = that.showHeader+response.data.key;
              that.showtidanjindu = false;
            }
            if(type === 'baoguandan'){
              that.baoguandan = pathName;
              that.baoguandan_file = that.showHeader+response.data.key;
              that.showbaoguandanjindu = false;
            }
            if(type === 'weituoshu'){
              that.weituoshu = pathName;
              that.weituoshu_file = that.showHeader+response.data.key;
              that.showweituoshujindu = false;
            }


          })
      },
    },
    mounted(){

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
      if(that.$route.query.tempid){
        that.readyid = that.$route.query.tempid;
        that._getdetial();
      }
    },
    watch:{
      'detailData':function (val) {
        if(this.account.length!==0){
          for(let i = 0;i< this.account.length;i++){
            if(this.account[i].id === val.bank_account_id){
              this.showaccount = this.account[i]
            }
          }
        }
      },
      'account':function (val) {
        if(this.detailData.bank_account_id){

          for(let i = 0;i< val.length;i++){
            if(val[i].id === this.detailData.bank_account_id){
              this.showaccount = val[i]
            }
          }
        }
      },
    }
  }
</script>
<style scoped lang="scss">
  .line1{
    padding:10px 20px;
    background: white;
    margin-top:10px;
    overflow: hidden;
    div:nth-of-type(1){
      float: left;
      p:nth-of-type(1){
        font-size: 20px;
        color: #4A3F91;
        float: left;
        font-weight: bold;
        line-height: 30px;
        height: 30px;
      }
      p:nth-of-type(2){
        /*display: inline-block;*/
        float: left;
        line-height: 30px;
        height: 30px;
        font-size: 16px;
      }
    }
    div:nth-of-type(2){
      float: right;
      line-height: 30px;
      height: 30px;
      color: #F08519;
      cursor: pointer;
      font-size: 14px;
    }
    div:nth-of-type(2):active{
      font-size: 16px;
    }
  }
  .count{
    padding:10px 20px;
    background: white;
    margin-top:20px;
    overflow: hidden;
    .title{
      overflow: hidden;
      img{
        float: left;
      }
      p{
        line-height: 25px;
        height: 25px;
        font-size: 16px;
        margin-left: 46px;
        font-weight: bold;
      }
    }
    .count-list{
      margin:20px 0 ;
      .list-item{
        overflow: hidden;
        font-size: 16px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        i{
          font-size: 16px;
          float: left;
          margin-right:10px;
        }
        div{
          float: left;
          width:30%;
        }
      }
    }
    .addnewcount{
      color: #F08519;
      cursor: pointer;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      width: 200px;
      display: inline-block;
    }
    .addnewcount:active{
      font-size: 17px;
    }
  }
  .certificate{
    padding:10px 20px 20px 20px;
    background: white;
    margin-top:20px;
    overflow: hidden;
    .title{
      overflow: hidden;
      img{
        float: left;
      }
      p{
        line-height: 25px;
        height: 25px;
        font-size: 16px;
        margin-left: 46px;
        font-weight: bold;
      }
    }
    .certificate-item{
      margin:20px 0 0 0;
      font-size: 16px;
      overflow: hidden;
     .item-label{
       float: left;
       line-height: 40px;
       height: 40px;
       width:150px;
     }
      .ties{
        margin-left:170px;
        color: red;
        line-height: 30px;
        height: 30px;

      }
      .star{
        float: left;
        margin-left:15px;
        margin-right:5px;
        line-height: 40px;
        height: 40px;
        color: red;
      }
      .enter{
        float: left;
        width:180px;
        line-height: 40px;
        height: 40px;
      }
      .enter1{
        float: left;
        width:80px;
        line-height: 40px;
        height: 40px;
        margin-left:20px;
      }
      .item-btn{
        float: left;
        width: 150px;
        line-height: 40px;
        height: 40px;
        background: #F08519;
        color: white;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
        margin-right:20px;
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
          background:#F08519;
          color: white;
        }
        label.ui_button:hover {
          background:#F08519;
          color: white;
        }
        .inputshow{
          position:absolute;clip:rect(0 0 0 0);
        }
      }
      .item-textarea{
        float: left;
        width:84%;
      }
      .item-dan{
        float: left;
        line-height: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
  .okbtn{
    margin: 50px 0;
    text-align: center;
    display: flex;
    line-height: 50px;
    height: 50px;
    .left-hr{
      width: 40%;
      margin-top: 25px;
      height: 1px;
    }
    .okbtn-btn{
      width: 200px;
      margin: 0 20px;
      background: #F08619;
      color: white;
      font-size: 1.2rem;
    }
    .right-hr{
      width: 40%;
      margin-top: 25px;
      height: 1px;
    }
  }
</style>
