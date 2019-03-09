<style lang="scss" scoped>
  .newMessage{
    overflow: hidden;
    background: white;
    .newMessage-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      height: 73%;
      width: 100%;
      .talk{
        /*overflow: hidden;*/
        .talk-left{
          float: left;
          width:70%;
          .shuruneirong{
            background: #eeeeee;
            margin-right: 10px;
            padding:0 10px 10px 10px;
            .title{
              color:#4B3F91;
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 10px;
              height: 40px;
              line-height: 40px;
            }
            .to{
              .top{
                float: left;
                height: 40px;
                line-height: 40px;
                width: 5%;
              }
              .toinput{
                width: 95%;
              }
            }
            .subject{
              margin-top: 10px;
              .subjectp{
                float: left;
                height: 40px;
                line-height: 40px;
                width: 10%;
              }
              .subjectinput{
                width: 90%;
              }
            }
            .textarea{
              margin-top:10px;
            }
            .attachment{
              overflow: hidden;
              height: 40px;
              line-height: 40px;
              .attachment-text1{
                float: left;
                font-size: 15px;
                color: #E75640;
                font-weight: bold;
                cursor: pointer;
              }
              .attachment-text2{
                float: right;
                span{
                  color: #E75640;
                }
              }
            }
          }
          .send{
            margin-top:10px;
            overflow: hidden;
            .sendbtn{
              float: right;
              margin-right: 15px;
              width: 75px;
              text-align: center;
              height: 40px;
              line-height: 40px;
              border: 1px solid #4B3F91;
              background: #4B3F91;
              font-size: 16px;
              color: white;
              cursor: pointer;
              border-radius: 5px;
            }
          }

        }
        .talk-right{
          float: left;
          width: 30%;
          border:1px solid #ddd;
          max-height: 700px;
          overflow-y: scroll;
          min-height: 433px;
          .sale-touxiang{
            text-align: center;
            height: 140px;
            padding-top: 25px;
            img{
              height: 110px;
              width:110px;
              border-radius: 50%;
            }
          }
          .sale-name{
            text-align: center;
            font-size: 18px;
          }
          .sale-address{
            text-align: center;
            color: #47494e;
            font-size: 17px;
          }
          .sale-Info{
            overflow: hidden;
            margin:0 10px 0 10px;
            border-bottom: 1px solid #ddd;
            height: 40px;
            line-height: 40px;
            .Info-title{
              float: left;
              font-size: 16px;
            }
            .Info-content{
              float: right;
              font-size: 16px;
            }
          }
          .enterID{
            margin:10px 10px 0 10px;
          }
          .product-Info{
            margin:10px 10px 0 10px;
            position: relative;
            .product-img{
              float: left;
              width: 110px;
              height: 110px;
              border:1px solid #ddd;
              margin: 10px 10px 0 0;
            }
            .product-data{
              margin-top: 10px;
              .data-text{
                height: 30px;
                line-height: 30px;
                font-size: 14px;
              }
            }
          }
          .product-Info{
            margin: 0;
            border-bottom: 1px solid #ddd;
            .delete{
              color: red;position: absolute;right: 10px;cursor: pointer;
            }
            .product-Info1{
              margin:10px 10px 0 10px;
              overflow: hidden;
              .product-img{
                float: left;
                width: 110px;
                height: 110px;
                border:1px solid #ddd;
                margin: 10px 10px 0 0;
              }
              .product-data{
                margin-top: 10px;
                .data-text{
                  height: 30px;
                  line-height: 30px;
                  font-size: 14px;
                }
              }
            }
            .product-Info2{
              margin:10px 10px 0 10px;
              .data-text{
                font-size: 16px;
                span{
                  color: #E77E26;
                }
              }
              .data-text1{
                margin:10px 0;
                font-size: 16px;
              }
            }

          }

          .product-add1{
            height: 40px;
            line-height: 40px;
            border: 1px solid #ddd;
            padding: 0 0 0 10px;
            font-size: 16px;
            color: #E75640;
            font-weight: bold;
            cursor: pointer;
          }

          .product-add{
            margin:10px 10px 0 10px;
            .product-btn{
              float: right;
              height: 35px;
              line-height: 35px;
              color: white;
              background: #4B3F91;
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
    .footline{
      height: 6px;
      background: #4B3F91;
      margin-top: 11rem;
    }
    .footerbar{
      position: relative;
      padding: 18px 0;
    }
  }
  .addproduct-dialog{
    .addproduct{
      padding:20px 60px;
      overflow: hidden;
      .shuoming{
        margin: 20px 0;
      }
      .addBtn{
        background: #4B3F91;
        border-radius: 5px;
        float: right;
        padding: 0 20px;
        line-height: 40px;
        color: white;
        cursor:pointer;
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
</style>
<style lang="scss">
  //登录的样式
  .addproduct-dialog{
  .el-dialog__header{
    line-height: 0px;
  }
  .el-dialog__body{
    padding:0;
  }
  .el-dialog__headerbtn{
    top:5px;
  }
  }
  .Info-content{
    .el-input__inner{
      border: none;
      text-align: right;
    }
  }
</style>
<template>
  <section class="container">
    <div class="newMessage">
      <headerbar></headerbar>
      <div class="newMessage-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/'}">Message Centre </el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/'}">New Message </el-breadcrumb-item>
          </el-breadcrumb>
          <div class="talk">
            <div class="talk-left">
              <div class="shuruneirong">
                <div class="title">Message Centre</div>
                <div class="to">
                  <p class="top">TO:</p>
                  <el-select class="toinput"  v-model="nasoUser" placeholder="Please select customer service" >
                    <el-option
                      v-for="item in salesman"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <!--<el-input class="toinput" v-model="nasoUser" placeholder=""></el-input>-->
                </div>
                <div class="subject">
                  <p class="subjectp">Subject:</p>
                  <el-input class="subjectinput" v-model="subject" placeholder=""></el-input>
                </div>
                <div class="textarea">
              <!--    <el-input
                    type="textarea"
                    :autosize="{ minRows: 8, maxRows: 18}"
                    placeholder=""
                    v-model="textarea3">
                  </el-input>-->
                  <div>
                    <no-ssr placeholder="Loading...">
                      <picker-area v-model="textarea3" emoji="point_up"/>
                    </no-ssr>
                    <!--<span class="fileinput-button"><input type="file" @change="update" name="fname" >-->
                      <!-- <div class="addfile">+ Add attachment</div> -->
                    <!--</span>-->
                    <!--<img :src="showImgurl" alt="" style="width: 60px;position: relative;left: -140px;">-->
                    <!--<el-progress style="width: 168px;display: inline-block;left: -140px;" v-show="jindu>0&&showImgurl===''"  :percentage="jindu"></el-progress>-->
                  </div>
                </div>
                <div class="showfile">{{fileName}}</div>
                <div class="attachment">
                  <div class="attachment-text1"><label class="ui_button ui_button_primary" style="cursor: pointer;" for="xFile">+ Add attachment</label>
                    <form><input type="file" id="xFile" @change="update" style="position:absolute;clip:rect(0 0 0 0);"/></form>
                  </div>
                  <el-progress v-show="fileUrl===null && jindu>0 " style="float: left;width: 150px;height: 40px;margin-left: 30px;line-height: 40px;" :percentage="jindu"></el-progress>
                  <!-- <div class="attachment-text2">Remaining: <span>16000</span></div> -->
                </div>
              </div>
              <div class="send" >
                <div class="sendbtn" @click="sendmessage">Send</div>
              </div>

            </div>
            <div class="talk-right">
              <div class="sale-touxiang">
                 <img :src="userInfo.avatar" height="340" width="349"/>
               </div>
              <div class="sale-name">{{userInfo.nickname}}</div>


              <!--<div class="sale-address">China.guangzhou</div>-->
              <div class="sale-Info">
                <p class="Info-title">E-mail：</p>
                <div class="Info-content"><el-input v-model="userInfo.email"></el-input></div>
              </div>
            <!--  <div class="sale-Info">
                <p class="Info-title">Phone:</p>
                <p class="Info-content"><el-input v-model="userInfo.phone"></el-input></p>
              </div>-->
              <div class="sale-Info">
                <p class="Info-title">Whatsapp:</p>
                <div class="Info-content"><el-input v-model="userInfo.whatsapp"></el-input></div>
              </div>
              <div class="sale-Info">
                <p class="Info-title">Wechat：</p>
                <div class="Info-content"><el-input v-model="userInfo.wechat"></el-input></div>
              </div>
              <div class="sale-Info">
                <p class="Info-title">QQ：</p>
                <div class="Info-content"><el-input v-model="userInfo.qq"></el-input></div>
              </div>
              <!--<div v-show="productList.length===0" class="enterID">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="Please enter the product ID you desired,and then click “Add Product”"
                  v-model="textarea3">
                </el-input>
              </div>
              <div v-show="productList.length===0" class="product-Info">
                <img class="product-img" src="../assets/img/home2_31.jpg" />
                <div class="product-data">
                  <p class="data-text">ozone air purifier 2W</p>
                  <p class="data-text">Product ID：1234567</p>
                  <p class="data-text">EXW price:  $8.50 ~  $0.00</p>
                  <div >
                    <span>Quantity：</span>
                    <el-input-number style="width:118px;" v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                  </div>
                </div>
              </div>
              <div v-show="productList.length===0" class="product-add">
                <div class="product-btn">Add Product</div>
              </div>-->
              <div class="product-Info" v-show="productList.length !== 0" v-for="(item,index) in productList" :key="index">
                <i class="el-icon-error delete" @click="mydelete(index)"></i>
                <div class="product-Info1">
                  <img class="product-img" :src="item.goods_img" />
                  <div class="product-data">
                    <p class="data-text">{{item.title}}</p>
                  </div>
                </div>
                <div class="product-Info2">
                  <p class="data-text">EXW price:  <span>${{item.sell_price|money}} ~  ${{item.msell_price|money}}</span></p>
                  <div class="data-text1">
                    <span>Quantity：</span>
                    <el-input-number style="width:150px;" v-model="item.num" @change="handleChange" :min="Number(item.minimum)" ></el-input-number>
                  </div>
                  <p class="data-text">Minimum order quantity：{{item.minimum}} price</p>
                </div>
              </div>

              <div class="product-add1" @click="opentankuang">
                +  Add product
              </div>
          </div>
            <div style="clear: both;"></div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="450px" class="addproduct-dialog">
      <div class="addproduct">
        <el-input v-model="productID" placeholder=""></el-input>
        <div class="shuoming">Please fill in the input ID of the product ID you need to consult.Click "Add Product" add to the message.</div>
        <img src="../assets/img/addproduct-demo.png" style="width: 330px;border-bottom: 1px solid #ddd;"/>
        <div class="addBtn" @click="getproduct">Add Product</div>
      </div>
    </el-dialog>
  </section>
</template>

<script>
  import $ from 'jquery/dist/jquery.slim.min'
  import headerbar from '../components/common/headerbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import righttab from '../components/common/righttab.vue'
  import PickerArea from 'vue-emoji-mart-picker'
  export default {
    name:'newMessage',
    async asyncData({store}) {
      //菜单
      let category = []
      await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{store}).then(res => {
        category = res.data
      })
      return {category};
    },
    components: {
      'headerbar':headerbar,
      'footerbar':footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'righttab': righttab,
      PickerArea
    },
    data(){
      return{
        input:'',
        textarea3:'',
        num1: null,
        productList:[],
        userInfo:{},
        dialogVisible:false,
        productID:null,
        nasoUser:null,
        subject:null,
        fileUrl:null,
        fileName:null,
        jindu:0,
        salesman: [],
      }
    },
    methods:{
      //上传so文件
      update(e){
        const jsonUsers = this.userInfo.token;
        let file = e.target.files[0];
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })
        let times = 1
        window.setInterval(() => {
          times--;
          if (times === 0) {
            this.jindu =0;
            this.fileUrl = null;
            let d = new Date();
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
                token:jsonUsers
              }
            }).then(response=>{
              this.token = response.data.data.token;
              this.showHeader =  response.data.data.domain;
              param.append('token',this.token);
              this.uploading(param,config,file.name,file,putExtra);//然后将参数上传七牛
            })
          }
        }, 1000)
      },
      //七牛上传图片
      uploading(param,config,pathName,file,putExtra){
        let that = this;
        that.$axios.post('http://upload-as0.qiniup.com/',param,config,file,putExtra)
          .then(response=>{
            that.fileName = pathName;
            that.fileUrl = that.showHeader+response.data.key;

          })
      },
      mydelete(index){
        this.productList.splice(index,1)
      },
      opentankuang(){
        this.dialogVisible = true
      },
      handleChange(value) {
        console.log(value);
      },
      getproduct(){
        //新消息用迷你接口
        let that = this;

        let tempalert = that.$alert;
        if(that.productID === null ||that.productID === ''){
          tempalert('productId can not be empty', {
            confirmButtonText: 'ok',
            center: true,
          });
          return
        }else{
//          if(that.productList.length === 0){
            let url = that.$store.state.headerUrl + 'goods/mini/' + that.productID;
            that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
              if(resp.data.code === 0){
                resp.data.data.num = resp.data.data.minimum;
                that.productList.push(resp.data.data)
                that.dialogVisible =false;
              }else{
                tempalert(resp.data.msg, {
                  confirmButtonText: 'ok',
                  center: true,
                });
              }
              console.log(resp.data.data)
            }).catch(function (error) {

            })

        }
      },
      sendmessage(){
        let that = this;
        let url = that.$store.state.headerUrl + 'message';
        let tempalert = that.$alert;
        let temp_goods_list = [];
        if(that.productList.length === 0){
          tempalert('Please select a product', {
            confirmButtonText: 'ok',
            center: true,
          });
          return
        }else{
          for(let i = 0; i < that.productList.length; i++){
            temp_goods_list.push({
              goods_info:{id:Number(that.productList[i].id)},
              quantity: Number(that.productList[i].num)
            })
          }
        }
        let temp_record = {};
        if(that.textarea3 === ''&&that.fileUrl === null){
          tempalert('Input can not be empty', {
            confirmButtonText: 'ok',
            center: true,
          });
          return
        }else{
           temp_record = {
            content: that.textarea3,
            attr_name:that.fileName,
            attr_link:that.fileUrl
          }
        }



        let temp_member_info = {
          whatsapp: that.userInfo.whatsapp,
          wechat:that.userInfo.wechat,
          qq:that.userInfo.qq,
        }
        if(that.nasoUser === null){
          tempalert('Please select customer service', {
            confirmButtonText: 'ok',
            center: true,
          });
          return
        }
        let params = {
          title: that.subject,
          naso_user:{id:Number(that.nasoUser)},
          goods_list:temp_goods_list,
          record: temp_record,
          member_info:temp_member_info
        }
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert).then(function (resp) {
          if(resp.data.code == 0){
            that.$router.push({name:'member-infoList'})
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              center: true,
            });
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: 'ok',
            center: true,
          });
        })
      },
      getnasouserData(){
        let that = this;
        let url = that.$store.state.headerUrl + 'get_salesman'
        that.comment.axiosGet(url,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code === 0&&resp.data.data !== null){
//            that.salesman = [];
            for(var i = 0;i<resp.data.data.length;i++){
              that.salesman.push(
                {
                  value: resp.data.data[i].id,
                  label: resp.data.data[i].nickname
                }
              );
            }

            console.log(that.salesman)
            console.log(resp)
          }
        }).catch(function (error) {

        })
      }

    },
    mounted() {
      this.getnasouserData();
      console.log(JSON.parse(localStorage.getItem('users')));
      this.userInfo = JSON.parse(localStorage.getItem('users'));
    /*  if(this.userInfo.phone === undefined){
        this.userInfo.phone =''
      }*/
    },
    watch:{
      'nasoUser':function (val) {
        console.log(val)
      }
    }
  }
</script>
