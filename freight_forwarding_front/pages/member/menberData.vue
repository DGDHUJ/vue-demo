<style scoped lang="scss">
  .menberHeader{
    margin-top: 40px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    padding: 20px;
    background-color: #fff;
    .el-row .el-col:nth-of-type(1){
      overflow: hidden;
      div{
        float: left;
        color: #666;
        margin-left: 10px;
      }
    }
    .el-row .el-col:nth-of-type(2){
      overflow: hidden;
      >div{
        float: left;
        margin-top: 12px;
        font-size: 14px;
        img{
          position: relative;
          top:3px;
          margin-right: 2px;
        }
        span{
          margin-right: 60px;
          color: #f08519;
        }
      }
    }
    .updateusers{
      cursor: pointer;
    }
  }
  .processingOrderlist{
    .title{
      height: 40px;
      line-height: 40px;
      color:#4A3F91;
      overflow: hidden;
      .title1{
        font-size: 1.2rem;
        float: left;
        font-weight: 600;
      }
      .title2{
        font-size: 0.8rem;
        float: right;
        cursor: pointer;
      }
      .aaacity{
        .el-form-item__label{
          margin-top:10px;
        }
        .select-ground{
          div{
            display: inline-block;
            margin-left: 2%;
            margin-top:10px;
          }
        }
      }
    }
    .list{
      .list-header{
        overflow: hidden;
        background: #4A3F91;
        >div {
          float: left;
          min-height: 40px;
          color: white;
          line-height: 40px;
          font-size: 1rem;
          text-align: center;
        }
        div:nth-of-type(1) {
          width: 18.75%;
        }
        div:nth-of-type(2) {
          width: 37.5%;
        }
        div:nth-of-type(3) {
          width: 14.58%;
        }
        div:nth-of-type(4) {
          width: 13.54%;
        }
        div:nth-of-type(5) {
          width: 14.58%;
        }
      }
      .list-content{
        background: white;
        .list-content_main{
          min-height: 640px;
          padding: 20px 0;
        }
        .items{
          margin-bottom: 20px;
          font-size: 1rem;
          text-align: center;
          height: 40px;
          line-height: 40px;
          overflow: hidden;
          >div{
            display: inline-block;
          }
          div:nth-of-type(1) {
            width: 18.75%;
            min-width: 18.75%;
          }
          div:nth-of-type(2) {
            width: 37.5%;
            min-width: 37.5%;
          }
          div:nth-of-type(3) {
            width: 14.58%;
            min-width: 14.58%;
          }
          div:nth-of-type(4) {
            width: 13.54%;
            min-width: 13.54%;
          }
          div:nth-of-type(5) {
            width: 14.58%;
            min-width: 14.58%;
            color: #f08519;
            .update{
              cursor: pointer;
            }
            .delete{
              cursor: pointer;
            }
          }
        }
        .pages{
          text-align: center;
          padding: 0 0 20px 0;
          .el-pagination{
            .el-pager li.active{
              background: #4A3F91;
              color: white;
            }
          }
        }
      }
    }
  }
  .updateuser_item{
    text-align: center;margin-bottom: 20px;
    span{
      margin-right: 10px;min-width: 70px;
    }
    .longitem{
      margin-right: 10px;min-width: 70px;margin-left: -25px;
    }
    .el-input{
      width: 40%;
    }
  }
</style>
<style lang="scss">
  .el-pager li.active{
    background: #4A3F91;
    color: white;
  }
  /*这里是弹窗的样式，因为设计稿出来了要修改，所以备注*/
  .el-dialog__title{
    color: #795da3 !important;
    font-weight: bold !important;
  }
  .el-dialog__body{
    color: #795da3 !important;
  }
  .aaacity{
    .el-form-item__label{
      margin-top:20px;
    }
  }
</style>
<template>
  <section class="container" v-loading="loading">
    <div class="menberHeader">
      <el-row>
        <el-col :span="8">
          <div><img :src="users.avatar" alt=""></div>
          <div>
            <p>User ID: &nbsp;&nbsp;<span style="color: #333">{{users.nickname}}</span></p>
            <p>NS:&nbsp;&nbsp;<span>{{users.email}}</span></p>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="updateusers" @click="openupdatesuers(1)">
            <img src="../../assets/img/dada-1.png" alt=""><span>设置你的用户昵称</span>
          </div>
          <div class="updateusers" @click="openupdatesuers(2)">
            <img src="../../assets/img/data-2.png" alt=""><span>修改密码</span>
          </div>
          <div class="updateusers" @click="openupdatesuers(3)">
            <img src="../../assets/img/data-3.png" alt=""><span>修改绑定邮箱</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="processingOrderlist">
      <div  class="title">
        <div class="title1">我的拖柜地点</div>
        <!--这里添加一个弹窗-->
        <div class="title2" @click="opentanchuan(0,null)">+新增拖柜地点</div>
        <!--这是弹窗内容，后面设计-->
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="公司名称" :label-width="formLabelWidth">
              <el-input v-model="form.company_name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item v-show="form.district_full_name !== null" label="所在城市" :label-width="formLabelWidth">
              <span style="color: black">{{form.district_full_name}}</span><span style="cursor: pointer;margin-left: 20px;color: black" @click="updatecity">修改</span>
            </el-form-item>
            <el-form-item class="aaacity" v-show="showupdatefull_name" label="所在城市" :label-width="formLabelWidth">
              <div class="select-ground">
                <div class="departure-city">
                  <el-select class="departure-select"  @change="getaddresscity" v-model="address_sheng" placeholder="请选择省份">
                    <el-option
                      v-for="item in address_sheng_obj"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </div>
                <div class="departure-city" >
                  <el-select class="departure-select" @change="getaddressarea" v-model="address_city" placeholder="请选择城市">
                    <el-option
                      v-for="item in address_city_obj"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </div>
                <div class="departure-city">
                  <el-select class="departure-select" @change="getaddresszhen" v-model="address_area" placeholder="请选择区域">
                    <el-option
                      v-for="item in address_area_obj"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </div>
                <div class="departure-port" >
                  <el-select class="departure-select" @change="changeaddresszhen"  v-model="address_zhen" placeholder="请选择乡镇/村">
                    <el-option
                      v-for="item in address_zhen_obj"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="公司详细地址" :label-width="formLabelWidth">
              <el-input v-model="form.address" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="工厂联系人" :label-width="formLabelWidth">
              <el-input v-model="form.contact_name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="form.contact_phone" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button v-show="form.district_full_name !== null" type="primary" @click="updateaddress" > 修改 </el-button>
            <el-button v-show="form.district_full_name === null" type="primary" @click="addaddress" > 新 增 </el-button>
          </div>
        </el-dialog>
      </div>
      <div class="list">
        <div class="list-header">
          <div><span>公司名称</span></div>
          <div>公司详细地址</div>
          <div>工厂联系人</div>
          <div>联系电话</div>
          <div>操作</div>
        </div>
        <div class="list-content">
          <div class="list-content_main">
            <div v-for="(item,index,key) in myaddress" :key="key" class="items">
              <div><span>{{item.company_name}}</span></div>
              <div><span>{{item.address}}</span></div>
              <div><span>{{item.contact_name}} </span></div>
              <div><span>{{item.contact_phone}}</span></div>
              <div><span class="update" @click="opentanchuan(1,item)">修改</span><span>/ </span><span class="delete" @click="opendialog(item.id)">删除</span></div>
            </div>
          </div>
          <div class="pages">
            <el-pagination
              layout="prev, pager, next"
              prev-text="上一页"
              next-text="下一页"
              :total="myaddress.length">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" center>
      <span>是否删除该地址</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="closedialog">取 消</el-button>
    <el-button type="primary" @click="deleteaddress">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog :title="updatausers" :visible.sync="dialogVisible1" width="30%" center>
      <div class="updateuser_item" v-if="updatausers_type === 1" ><span >新的昵称</span><el-input  v-model="new_nichen" placeholder=""></el-input></div>
      <div class="updateuser_item" v-if="updatausers_type === 2" ><span >原密码</span><el-input  type="password" v-model="password" placeholder=""></el-input></div>
      <div class="updateuser_item" v-if="updatausers_type === 2" ><span >新密码</span><el-input  type="password" v-model="new_password" placeholder=""></el-input></div>
      <div class="updateuser_item" v-if="updatausers_type === 2" ><span class="longitem">确认新密码</span><el-input  type="password" v-model="sure_new_password" placeholder=""></el-input></div>
      <div class="updateuser_item" v-if="updatausers_type === 3" ><span >新的邮箱</span><el-input  type="email" v-model="new_email" placeholder=""></el-input></div>
      <span slot="footer" class="dialog-footer">
      <el-button style="width: 50%" type="primary" @click="updateUser(updatausers_type)">确 定</el-button>
  </span>
    </el-dialog>
  </section>
</template>
<script>

  export default {
    name:'menberdata',
    data(){
      return{
        loadingstatus1:false,
        loadingstatus2:false,
        loadingstatus3:false,
        loading:true,
        new_email:'',
        password:'',
        new_password:'',
        sure_new_password:'',
        updatausers:'',
        updatausers_type:3,
        new_nichen:'',

        value1: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        time1:'',
        time2:'',
        dialogVisible:false,
        dialogFormVisible: false,
        form: {
          district_id:null,
          company_name: '',
          address: '',
          contact_name: '',
          contact_phone: '',
          district_full_name: null,
        },
        formLabelWidth: '120px',
        users:{},
        myaddress:[],
        address_sheng:'',//拖柜省
        address_sheng_obj:null,//拖柜省
        address_sheng_id:null,
        address_city:'',//拖柜市
        address_city_obj:null,//拖柜市
        address_city_id:null,
        address_area:'',//拖柜区域
        address_area_obj:null,//拖柜区域
        address_area_id:null,
        address_zhen:'',//拖柜乡镇
        address_zhen_obj:null,//拖柜乡镇
        address_zhen_id:null,
        showupdatefull_name:true,
        title:'新增拖柜地点',
        updateid:null,
        deleteid:null,
        dialogVisible1:false,
      }
    },
    methods: {
      //打开修改用户信息弹出框
      openupdatesuers(index){
        if(index === 1){
         this.updatausers = '修改昵称'
        }else if(index === 2){
          this.updatausers = '修改密码'
        }else{
          this.updatausers = '修改邮箱'
        }
        this.updatausers_type = index;
        this.dialogVisible1 = true;
      },
      //提交修改用户信息的内容
      updateUser(index){
        let that = this;
        let tempalert = that.$alert;
        let params ={};
        if(index === 1){
            params = {
              nickname:that.new_nichen,
            }
        }else if(index === 2){
          params = {
            old_password:that.password,
            new_password:that.new_password,
            rpassword:that.sure_new_password,
          }
        }else{
          params = {
            email:that.new_email,
          }
        }
        let url = that.$store.state.headerUrl + 'member';
        that.comment.axiosPut(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0 ){
            that.users = resp.data.data;
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              callback: action => {
                that.dialogVisible1 = false;
                that.new_email='';
                  that.password='';
                  that.new_password='';
                  that.sure_new_password='';
                  that.updatausers='';
                return
              }
            });
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: 'ok',
            callback: action => {
              return
            }
          });
        })

      },

      updatecity() {
        this.showupdatefull_name = true;
      },
      check(index) {
        this.$router.push({path: '/member/processingDetial'})
      },
      //打开弹出框
      opentanchuan(index, item) {
        let that = this;
        if (index === 1) {
          that.form.district_id = item.district_id;
          that.form.company_name = item.company_name;
          that.form.address = item.address;
          that.form.contact_name = item.contact_name;
          that.form.contact_phone = item.contact_phone;
          that.form.district_full_name = item.district_full_name;
          that.showupdatefull_name = false;
          that.title = '修改拖柜地点';
          that.updateid = item.id;
        }
        that.dialogFormVisible = true;
      },
      //获取用户信息
      getuserInfo() {
        let that = this;
        let url = that.$store.state.headerUrl + 'member';
        let temptoken = localStorage.getItem('token');
        let headers = {
          headers: {token: temptoken}
        }
        let tempalert = that.$alert;
        that.$axios.get(url, headers).then(function (resp) {
          if (resp.data.code === 0) {
            that.users = resp.data.data;
            that.loadingstatus1 = true;
          } else {
            tempalert('获取用户信息失败，请重新获取', {
              confirmButtonText: 'ok',
              callback: action => {
                that.loadingstatus1 = true;
              }
            });
            return
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: 'ok',
            callback: action => {
              that.loadingstatus1 = true;
              that.getuserInfo();
            }
          });
          return
        })
      },
      //获取拖柜地点
      getmyaddress() {
        let that = this;
        let url = that.$store.state.headerUrl + 'freight/trailer/address';
        that.loadingstatus2 = false;
        let tempalert = that.$alert;
        that.comment.axiosGet(url, that.$axios, that.$store,{},tempalert,that).then(function (resp) {
          if (resp.data.code === 0) {
            if(resp.data.data !== null){
              that.myaddress = resp.data.data;
            }else{
              that.myaddress = [];
            }
            that.loadingstatus2 = true;
          }
        }).catch(function (error) {
          that.loadingstatus2 = true;
        })
      },
      //新增地址
      addaddress() {
        let that = this;
        let url = that.$store.state.headerUrl + 'freight/trailer/address';
        let tempalert = that.$alert;
        let district_id = null;
        if (that.address_zhen_id !== null) {
          district_id = Number(that.address_zhen_id);
        } else if (that.address_area_id !== null) {
          district_id = Number(that.address_area_id);
        } else if (that.address_city_id !== null) {
          district_id = Number(that.address_city_id);
        } else if (that.address_sheng_id !== null) {
          district_id = Number(that.address_sheng_id);
        }
        let params = {
          district_id: district_id,
          company_name: that.form.company_name,
          address: that.form.address,
          contact_name: that.form.contact_name,
          contact_phone: that.form.contact_phone
        }
        that.comment.axiosPost(url, that.$axios, that.$store, params, tempalert,that).then(function (resp) {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              callback: action => {
                that.form = {
                  district_id: null,
                  company_name: '',
                  address: '',
                  contact_name: '',
                  contact_phone: '',
                  district_full_name: '',
                }
                that.dialogFormVisible = false;
                that.getmyaddress();
                return
              },
            });
          }
        })
      },
      //查询省市区镇 id,index[0：省，1：市，2：区，3：镇]
      getaddress(id, index) {
        let that = this;
        let url = that.$store.state.headerUrl + 'district/' + id;
        let tempalert = that.$alert;
        that.comment.axiosGet(url, that.$axios, that.$store,{},tempalert,that).then(function (resp) {
          if (resp.data.code === 0) {
            if (index === 0) {
              that.address_sheng_obj = resp.data.data;
              that.loadingstatus3 = true;
            } else if (index === 1) {
              that.address_city_obj = resp.data.data;
            } else if (index === 2) {
              that.address_area_obj = resp.data.data;
            } else if (index === 3) {
              that.address_zhen_obj = resp.data.data;
            }
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        })
      },
      //监听省变化
      getaddresscity(value) {
        let that = this;
        that.address_sheng_id = value;
        that.address_city_obj = null;
        that.address_area_obj = null;
        that.address_zhen_obj = null;
        that.address_city = '';
        that.address_area = '';
        that.address_zhen = '';
        that.address_city_id = null;
        that.address_area_id = null;
        that.address_zhen_id = null;
        that.getaddress(value, 1);
      },
      //监听市变化
      getaddressarea(value) {
        let that = this;
        that.address_city_id = value;
        that.address_area_obj = null;
        that.address_zhen_obj = null;
        that.address_area = '';
        that.address_zhen = '';
        that.address_area_id = null;
        that.address_zhen_id = null;
        that.getaddress(value, 2);
      },
      //监听市变化
      getaddresszhen(value) {
        let that = this;
        that.address_area_id = value;
        that.address_zhen_obj = null;
        that.address_zhen = '';
        that.address_zhen_id = null;
        that.getaddress(value, 3);
      },
      //监听乡镇变化
      changeaddresszhen(value) {
        let that = this;
        that.address_zhen_id = value;
      },
      //修改地址
      updateaddress() {
        let that = this;
        let url = that.$store.state.headerUrl + 'freight/trailer/address';
        let tempalert = that.$alert;
        let district_id = null;
        if (that.address_zhen_id !== null) {
          district_id = Number(that.address_zhen_id);
        } else if (that.address_area_id !== null) {
          district_id = Number(that.address_area_id);
        } else if (that.address_city_id !== null) {
          district_id = Number(that.address_city_id);
        } else if (that.address_sheng_id !== null) {
          district_id = Number(that.address_sheng_id);
        } else {
          district_id = that.form.district_id;
        }
        let params = {
          id: Number(that.updateid),
          district_id: district_id,
          company_name: that.form.company_name,
          address: that.form.address,
          contact_name: that.form.contact_name,
          contact_phone: that.form.contact_phone
        }
        that.comment.axiosPut(url, that.$axios, that.$store, params, tempalert,that).then(function (resp) {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: 'ok',
              callback: action => {
                that.form = {
                  district_id: null,
                  company_name: '',
                  address: '',
                  contact_name: '',
                  contact_phone: '',
                  district_full_name: '',
                }
                that.dialogFormVisible = false;
                that.getmyaddress();
                return
              },
            });
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: 'ok',
            callback: action => {
              return
            }
          });
        })
      },
//打开删除框
      opendialog(id) {
        this.deleteid = id;
        this.dialogVisible = true;
      },
      //关闭删除框
      closedialog(){
        this.deleteid = null;
       this.dialogVisible = false;
      },
      //删除地址
      deleteaddress(){
       let that = this;
       let url = that.$store.state.headerUrl + 'freight/trailer/address/' + that.deleteid;
       let tempalert = that.$alert;
       that.comment.axiosDelete(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
         if(resp.data.code === 0){
           tempalert(resp.data.msg, {
             confirmButtonText: 'ok',
             callback: action => {
               that.getmyaddress();
               that.deleteid = null;
               that.dialogVisible = false;
               return
             }
           });
         }
       }).catch(function (error) {
         tempalert(error, {
           confirmButtonText: 'ok',
           callback: action => {
             that.deleteid = null;
             that.dialogVisible = false;
             return
           }
         });
       })
      }

    },
    mounted(){
      let that = this;
      that.getuserInfo();
      that.getmyaddress();
      that.getaddress(0,0);
    },
    watch:{
      'loadingstatus1':function (val){
        if(this.loadingstatus1&&this.loadingstatus2&&this.loadingstatus3){
          this.loading = false
        }
      },
      'loadingstatus2':function (val){
        if(this.loadingstatus1&&this.loadingstatus2&&this.loadingstatus3){
          this.loading = false
        }
      },
      'loadingstatus3':function (val){
        if(this.loadingstatus1&&this.loadingstatus2&&this.loadingstatus3){
          this.loading = false
        }
      }
    }
  }
</script>
