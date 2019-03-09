<style lang="scss" scoped>
  .matchingbuyer{
    overflow: hidden;
    background: white;
    position: relative;
    .el-breadcrumb{
      line-height: 40px;
    }
    .footline{
      height: 6px;
      background: #4B3F91;
    }

    .matchingbuyer-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      margin-bottom:50px;
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
        .infoout1{
          border: 1px solid #ddd;
          line-height: 30px;
          padding: 20px 15px;
          .infoout1-title{
            font-size: 20px;
            font-weight: 600;
            color: #4B3F91;
            line-height: 59px;
          }
          .infoout1-item1{
            font-size: 16px;
          }
          .infoout1-item2{
            font-size: 18px;
            color: #F1841B;
            font-weight: 600;
            line-height: 52px;
            cursor: pointer;
          }
        }
        .infoout2{
          margin-top: 20px;
          border: 1px solid #ddd;
          line-height: 30px;
          padding: 20px 15px;
          .infoout2-title{
            font-size: 20px;
            font-weight: 600;
            color: #4B3F91;
            line-height: 59px;
          }
          .infoout2-item{
            color: #F1841B;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
          .infoout2-form{
            margin: 20px 0;
            .el-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .bg-purple {
              .form-item{
                margin: 10px 0;
                .itemtext{
                  font-size: 16px;
                }
              }
              .form-btn{
                line-height: 60px;
                background: #4B3F91;
                color: white;
                text-align: center;
                font-size: 22px;
                cursor: pointer;
              }
            }
            .grid-content {
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
              background-color: #f9fafc;
            }
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

  }
</style>
<template>
  <section class="container">
    <div class="matchingbuyer">
      <headerbar ></headerbar>
      <div class="matchingbuyer-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <div><div class="grid-content bg-purple">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
              <el-breadcrumb-item :to="{path:'/Member'}">Member</el-breadcrumb-item>
              <el-breadcrumb-item>matching buyer</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="matchingbuyer-contents">
              <div class="infoout1">
                <div class="infoout1-title">
                  <p>Buyer Matching</p>
                </div>
                <div class="infoout1-item1">
                  <p>Pease download the Product Supply Form who would like to export their products. Fill out the form and then sent it back to us. Our staff will contact you after checking the Form via the information that you leave to us.</p>
                </div>
                <div class="infoout1-item2">
                  <p>Download the Product Suppy Form</p>
                </div>
              </div>
              <div class="infoout2">
                <div class="infoout2-title">
                  <p>Send the Product Supply Form</p>
                </div>
                <div class="infoout2-item">
                  <p class="filebtm" @click="toggle">Upload your Product Supply Form</p>
                  <input style="display: none" class="fileinput" type="file" @change="update">
                  <el-progress style="width: 168px;display: inline-block;left: 410px;top: -30px;" v-show="jindu>0&&form_file===''" :percentage="jindu"></el-progress>
                </div>

                <!--表单-->
                <div class="infoout2-form">
                  <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="form-item">
                        <div class="itemtext">*YOUR NAME</div>
                        <div><el-input v-model="username"></el-input></div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="form-item">
                        <div class="itemtext">*YOUR PHONE NO.</div>
                        <div><el-input v-model="phonenumber" type=""></el-input></div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="form-item">
                        <div class="itemtext">*YOUR E-MAIL</div>
                        <div><el-input v-model="email" type="email"></el-input></div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="form-item">
                        <div class="itemtext" >YOUR WhatsApp</div>
                        <div><el-input v-model="whatsapp"></el-input></div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="form-item">
                        <div class="itemtext">YOUR Skype</div>
                        <div><el-input v-model="skype"></el-input></div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="form-item">
                        <div class="itemtext">YOUR WeChat</div>
                        <div><el-input v-model="wechat"></el-input></div>
                      </div>
                    </div></el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <!--<div class="form-btn" @click="goback">-->
                      <div class="form-btn" @click="submit">
                        <p>Send</p>
                      </div>
                    </div></el-col>
                  </el-row>
                </div>

              </div>
            </div>
          </div></div>
          <!--<el-col :span="2"><div class="grid-content bg-purple"></div></el-col>-->
        </div>

      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>
<script>
  import $ from 'jquery/dist/jquery.slim.min'
  import headerbar from '../components/common/headerbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonimgchange from '../components/common/commonimgchange.vue'
  import membercontent from '../components/membercommon/membercontent.vue'
  import righttab from '../components/common/righttab.vue'
  export default {
    name:'matchingbuyer',
    async asyncData({store}) {
      //菜单
      let category = []
      await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{store}).then(res => {
        category = res.data
      })
      return {category};
    },
    data(){
      return{
//        form_file:'http://www.baidu.com/dada.xlsl',
        username:'',
        phonenumber:'',
        email:'',
        whatsapp:'',
        skype:'',
        wechat:'',
        form_file:'',
        jindu:0,
        images:[],
      }
    },
    methods:{
      goback(){
        this.$router.push('/')
      },
      submit(){
        let that = this;
        let formUrl = that.$store.state.headerUrl + 'supplying';
//        let temptoken = query.token;
        let tempalert = that.$alert;
        var dataform = {
          form_file:that.form_file,
          name:that.username,
          phone:that.phonenumber,
          email:that.email,
          whatsapp:that.whatsapp,
          skype:that.skype,
          wechat:that.wechat
        };
        if(dataform.content === ''){
          tempalert('The input cannot be empty',{
            confirmButtonText: 'ok',
          });
        }else{
          that.comment.axiosPost(formUrl,that.$axios,that.$store,dataform,tempalert).then(function (resp) {
            if(resp.data.code === 0){
              tempalert(resp.data.msg, {
                confirmButtonText: 'ok',
                center: true,
                callback : action => {
                  that.textarea = '';
//                  that.getmsg();
                }
              });
            }else{
              tempalert(resp.data.msg, {
                confirmButtonText: 'ok',
                center: true,
                callback: action => {
                  that.textarea = '';
                }
              });
            }
          }).catch(function (error) {
            tempalert(error, {
              confirmButtonText: 'ok',
              center: true,
              callback: action => {
                that.textarea ='';
              }
            });
          })
        }
      },
      //      选取图片触发事件
      update(e){
        const jsonUsers = JSON.parse(localStorage.getItem('users'));
        this.loading =true;
        this.form_file = '';
        this.jindu = 0;
        let file = e.target.files[0];
        let d = new Date();
        let type = file.name.split('.');
        let param = new FormData(); //创建form对象
        var putExtra = {
          fname: "",
          params: {},
          mimeType: null
        };
        putExtra.params["x:name"] = file.name.split(".")[0];
        param.append('file',file,file.name,putExtra)
        // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          onUploadProgress: progressEvent => {
            var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
            console.log(complete)//进度值
            this.jindu = complete
          },
          headers:{'Content-Type':'multipart/form-data'},
          useCdnDomain: true,
          disableStatisticsReport: false,
          retryCount: 6,
        };
        //先从自己的服务端拿到七牛token
        this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
          headers:{
            token:jsonUsers.token
          }
        })
          .then(response=>{
            this.token = response.data.data.token;
            this.showHeader =  response.data.data.domain;
            param.append('token',this.token);
            /*if(this.images.length>1){
              alert('不能超过1张');
              return;
            }*/
            this.uploading(param,config,file.name,file,putExtra);//然后将参数上传七牛
          })
      },
      //七牛上传图片
      uploading(param,config,pathName,file,putExtra){
        this.$axios.post('http://upload-as0.qiniup.com/',param,config,file,putExtra)
          .then(response=>{
            var testqiniu = this.comment.qiniuimg(this.showHeader+response.data.key,'imageMogr2/thumbnail/','60','x','60','');

            this.form_file = testqiniu;
            this.loading = false;
            let localArr = this.images.map((val,index,arr)=>{
              return arr[index].localSrc;
            })
            if(!~localArr.indexOf(pathName)){
              this.images.push({'src':this.showUrl+response.data.key,'localSrc':pathName});
            }else{
              alert('已上传该图片');
            }
            console.log(this.form_file)
          })
      },
      toggle(){
        $(".fileinput").trigger("click");
      },

    },
    mounted(){
    },
    components:{
      'headerbar': headerbar,
      'footerbar': footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'commonimgchange':commonimgchange,
      'membercontent':membercontent,
      'righttab':righttab,
    }
  }
</script>
