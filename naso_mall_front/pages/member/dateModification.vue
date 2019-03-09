<style lang="scss" scoped>
.datemodification {
  margin-left: 20px;
  .datemodification-title {
    line-height: 40px;
    font-size: 1rem;
    color: #4b3f91;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }
  .datemodification-content {
    padding: 10px 0px;
    margin: 10px 0 0 0;
    border: 1px solid #ddd;
  }
  .datemodification-content-list1 {
    overflow: hidden;
    display: flex;
    border-bottom: 1px solid #ddd;
    margin: 0 20px;
    padding: 20px 0;
  }
  .datemodification-content-list1-img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    float: left;
  }
  .datemodification-content-list1-text {
    line-height: 30px;
    margin-left: 15px;
    width: 100%;
  }
  .datemodification-content-list1-textitem1 {
    font-size: 15px;
    font-weight: 500;
  }
  .datemodification-content-list1-textitem2 {
   overflow: hidden;
  }
  .datemodification-content-list1-textitem2-span1 {
    float: left;
    width: 25%;
  }
  .datemodification-content-list1-textitem2-span {
    float: left;
    overflow: hidden;
    position: relative;
    width: 25%;
    cursor: pointer;
    img {
      float: left;
      margin: 6px 6px 0 0;
    }
  }
  .datemodification-content-list2 {
    line-height: 60px;
    margin: 0 20px;
  }
  .datemodification-content-list2-p {
    overflow: hidden;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #4b3f91;
  }
  .datemodification-content-list2-p-span {
    float: right;
    font-size: 14px;
    color: black;
    cursor: pointer;
  }
  .datemodification-content-list3 {
    .datemodification-content-list3-outer {
      padding: 5px 10px;
      line-height: 30px;
    }
    .datemodification-content-list3-inner {
      // display: flex;
      font-size: 14px;
      color: #bdbdbd;
      .delete-btn {
        text-align: right;
        width: 100%;
        .deletespan {
          cursor: pointer;
          padding: 0 10px;
        }
        .deletespan:first-of-type {
          border-right: 1px solid #ddd;
        }
        .deletespan:active {
          color: #4b3f91;
        }
      }
    }
    .datemodification-content-list3-inner-p {
      margin-left: 5px;
      display: inline-block;
      color: #656565;
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .bg-purple-dark {
      background: white;
    }
    .bg-purple {
      background: white;
      border: 1px solid #ddd;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      min-height: 36px;
      margin: 10px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
  .showset {
    .close {
      text-align: right;
      margin: 0 20px;
      i {
        cursor: pointer;
        width: 100px;
      }
    }
    .content1 {
      padding: 20px;
      .elinput {
        width: 30%;
        display: inherit;
        margin: 0 0 20px 0;
      }
      .elbutton {
        width: 30%;
        background-color: #4b3f91;
        border-color: #4b3f91;
      }
    }
    .content2 {
      .items {
        width: 30%;
        .elinput {
          margin: 10px;
        }
        .code {
          overflow: hidden;
          .elinput {
            float: left;
            margin: 10px;
            width: 45%!important;
          }
          span {
                margin-top: 10px;
            float: left;
            width: 45%!important;
            text-align: center;
            align-self: center;
            cursor: pointer;
            background: #4b3f91;
            color: white;
            line-height: 38px;
            border-radius: 5px;
            font-size: 1rem;
          }
        }
      }
    }
    .content3 {
      margin: 20px 0;
      .items {
        margin: 10px;
        .elinput {
          width: 50%;
        }
        .elbutton {
          width: 30%;
          background-color: #4b3f91;
          border-color: #4b3f91;
        }
        .elcascader {
          width: 50%;
        }
      }
    }
    .content4 {
      .chooseimgtitle {
        margin: 20px 0 10px 0;
        text-align: center;
        font-size: 18px;
      }
      .showchooseimg {
        min-height: 80px;
        text-align: center;
        margin-bottom: 10px;
        img {
          width: 60px;
        }
      }
      .chooseimg {
        margin-bottom: 10px;
        text-align: center;
        .elbutton {
          width: 30%;
          background-color: #4b3f91;
          border-color: #4b3f91;
        }
      }
    }
    .elbutton {
      margin: 10px 0;
      width: 30%;
      background-color: #4b3f91;
      border-color: #4b3f91;
    }
    .elbutton1 {
      margin: 10px;
      width: 30%;
      background-color: #4b3f91;
      border-color: #4b3f91;
    }
  }
  .datemodification-success {
    height: 200px;
    text-align: center;
    padding-top: 80px;
    p {
      font-size: 16px;
    }
  }
}
.el-button:focus {
  color: white;
}
.el-button:active {
  color: white;
}
.el-button:hover {
  color: white;
}
</style>
<template>
  <section class="container">
    <div class="datemodification">
      <div class="datemodification-title">
        <p>Maintain Account Information</p>
      </div>
      <div class="datemodification-content">
        <div class="datemodification-content-list1">
          <!-- <img class="datemodification-content-list1-img" @click="setitems(5)" :src="users.avatar"> -->
          <img v-if="users.avatar !== '' &&
      users.avatar !== null &&
      users.avatar !== undefined" class="datemodification-content-list1-img" @click="setitems(5)" :src="users.avatar">
          <img v-if="users.avatar === '' ||
      users.avatar === null ||
      users.avatar === undefined"
          class="datemodification-content-list1-img" @click="setitems(5)" src="../../assets/img/LOGO_NO_100x100.png">
          <div class="datemodification-content-list1-text">
            <div class="datemodification-content-list1-textitem1">
              <p>
                UserAccount:
                <span>{{users.nickname}}</span>
              </p>
            </div>
            <div class="datemodification-content-list1-textitem2">
              <span class="datemodification-content-list1-textitem2-span1">{{users.email}}</span>
              <span @click="setitems(1)" class="datemodification-content-list1-textitem2-span">
                <img src="../../assets/img/info01_03.jpg" height="18" width="16">
                Set user name
              </span>
              <span @click="setitems(2)" class="datemodification-content-list1-textitem2-span">
                <img src="../../assets/img/info02_03.jpg" height="21" width="25">
                Change login password
              </span>
              <span @click="setitems(3)" class="datemodification-content-list1-textitem2-span">
                <img src="../../assets/img/info03.jpg" height="18" width="23">
                Modify account email
              </span>
            </div>
          </div>
        </div>
        <div v-show="setindex===0" class="datemodification-content-list2">
          <p class="datemodification-content-list2-p">
            My contact information
            <span
              @click="setitems(4)"
              class="datemodification-content-list2-p-span"
            >
              <i class="icon iconfont icon-yuanquanjiahao"></i> Add new contacts
            </span>
          </p>
        </div>
        <div v-show="setindex===0" class="datemodification-content-list3">
          <el-row :gutter="0">
            <el-col :span="12" :key="item.id" v-for="item in addressdata">
              <div class="grid-content bg-purple">
                <div class="datemodification-content-list3-outer">
                  <div class="datemodification-content-list3-inner">Name:
                    <p class="datemodification-content-list3-inner-p">{{item.name}}</p>
                  </div>
                  <div class="datemodification-content-list3-inner">Phone number:
                    <p class="datemodification-content-list3-inner-p">{{item.phone}}</p>
                  </div>
                  <div class="datemodification-content-list3-inner">My email address:
                    <p class="datemodification-content-list3-inner-p">{{item.email}}</p>
                  </div>
                  <div class="datemodification-content-list3-inner">Purpose of port:
                    <p
                      class="datemodification-content-list3-inner-p"
                    >{{item.country_en_name}}-{{item.port_en_name}}</p>
                  </div>
                  <div class="datemodification-content-list3-inner">
                    <p class="delete-btn">
                      <span class="deletespan" @click="Modifyaddress(item)">Modify</span>
                      <span class="deletespan" @click="dialogopen(item.id)">Delete</span>
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-show="setindex===1" class="showset">
          <div class="close">
            <i class="el-icon-error" @click="setitems(0)"></i>
          </div>
          <div class="content1">
            <el-input class="elinput" v-model="input" placeholder="Enter news user name"></el-input>
            <el-button class="elbutton" type="primary" @click="modifyuserInfo(1)">submit</el-button>
          </div>
        </div>
        <div v-show="setindex===2" class="showset">
          <div class="close">
            <i class="el-icon-error" @click="setitems(0)"></i>
          </div>
          <div class="content2">
            <div class="items">
              <!-- <el-input class="elinput" type="email" v-model="email" placeholder="Enter your email"></el-input> -->
              <el-input
                class="elinput"
                type="password"
                v-model="old_password"
                placeholder="old password"
              ></el-input>
              <div class="code">
                <el-input class="elinput" v-model="code" placeholder="Enter your code"></el-input>
                <span @click="sendgetcode">get code</span>
              </div>
              <el-input
                class="elinput"
                type="password"
                v-model="password"
                placeholder="Enter news password"
              ></el-input>
              <el-input
                class="elinput"
                type="password"
                v-model="repassword"
                placeholder="Confirm password"
              ></el-input>
            </div>
          </div>
          <el-button class="elbutton1" type="primary" @click="modifyuserInfo(2)">submit</el-button>
        </div>
        <div v-show="setindex===3" class="showset">
          <div class="close">
            <i class="el-icon-error" @click="setitems(0)"></i>
          </div>
          <div class="content1">
            <el-input class="elinput" v-model="email1" placeholder="Enter your email"></el-input>
            <el-button class="elbutton" type="primary" @click="modifyuserInfo(3)">submit</el-button>
          </div>
        </div>
        <div v-show="setindex===4" class="showset">
          <!--<div class="close"><i class="el-icon-error" @click="setitems(0)"></i></div>-->
          <div class="close">
            <span
              style="font-size: 14px;cursor: pointer;font-weight: bold"
              @click="setitems(0)"
            >Close>></span>
          </div>
          <div class="content3">
            <div class="items">
              <el-input class="elinput" placeholder="Enter your name" v-model="newName">
                <template slot="prepend">Name:</template>
              </el-input>
            </div>
            <div class="items">
              <el-input
                class="elinput"
                placeholder="Enter your phone number"
                v-model="newphonenumber"
              >
                <template slot="prepend">Phone number:</template>
              </el-input>
            </div>
            <div class="items">
              <el-input class="elinput" placeholder="Enter your email address" v-model="newemail">
                <template slot="prepend">email address:</template>
              </el-input>
            </div>
            <div class="items">
              <el-cascader
                class="elcascader"
                :options="city"
                @change="addressschange"
                @active-item-change="handleItemChange"
                :props="props"
              ></el-cascader>
            </div>
            <div class="items">
              <el-button class="elbutton" type="primary" @click="addaddressdata">submit</el-button>
            </div>
          </div>
        </div>
        <div v-show="setindex===5" class="showset">
          <div class="close">
            <i class="el-icon-error" @click="setitems(0)"></i>
          </div>
          <div class="content4">
            <div class="chooseimgtitle">
              <p>
                <span>Change your avatar</span>
              </p>
            </div>
            <div class="showchooseimg">
              <img v-loading="loading" :src="showImgurl">
              <el-progress
                v-show="jindu>0&&showImgurl===''"
                style=" width: 160px;left: 42%;"
                :percentage="jindu"
              ></el-progress>
            </div>
            <div class="chooseimg">
              <label for="tempip">Upload your avatar</label>
              <input
                id="tempip"
                v-show="false"
                class="file"
                name="file"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                @change="update"
              >
            </div>
            <div class="chooseimg">
              <el-button class="elbutton" type="primary" @click="modifyuserInfo(5)">submit</el-button>
            </div>
          </div>
        </div>
        <div v-show="setindex===6" class="showset">
          <div class="close">
            <i class="el-icon-error" @click="setitems(0)"></i>
          </div>
          <div class="content3">
            <div class="items">
              <el-input class="elinput" placeholder="Enter your name" v-model="tempName">
                <template slot="prepend">Name:</template>
              </el-input>
            </div>
            <div class="items">
              <el-input
                class="elinput"
                placeholder="Enter your phone number"
                v-model="tempphonenumber"
              >
                <template slot="prepend">Phone number:</template>
              </el-input>
            </div>
            <div class="items">
              <el-input class="elinput" placeholder="Enter your email address" v-model="tempemail">
                <template slot="prepend">email address:</template>
              </el-input>
            </div>
            <div class="items">
              <el-cascader
                class="elcascader"
                :placeholder="tempaddress"
                :options="city"
                @change="addressschange1"
                @active-item-change="handleItemChange"
                :props="props"
              ></el-cascader>
            </div>
            <div class="items">
              <el-button class="elbutton" type="primary" @click="updataaddress">submit</el-button>
            </div>
          </div>
        </div>
        <div v-show="setindex===8" class="datemodification-success">
          <p>
            <span>{{showmsg}}</span>
          </p>
          <p>
            <span>Enter the Member Centre page after {{times}} seconds</span>
          </p>
        </div>
      </div>
      <changeuserInfobar></changeuserInfobar>
      <el-dialog title="remind" :visible.sync="dialogVisible" width="30%">
        <span>Are you sure you want to delete this item?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogclose">Cancel</el-button>
          <el-button type="primary" @click="deleteaddress(tempdeleteid)">Determine</el-button>
        </span>
      </el-dialog>
    </div>
  </section>
</template>

<script>
import changeuserInfobar from "../../components/ordercommon/changeuserInfobar.vue";
export default {
  components: {
    changeuserInfobar: changeuserInfobar
  },
  name: "dateModification",
  data() {
    return {
      dialogVisible: false,
      setindex: 0,
      successtab: false,
      loading: false,
      users: this.$store.state.users,
      newName: "",
      newphonenumber: "",
      newemail: "",
      newaddress: "",
      input: "",
      imageUrl: "",
      code: "",
      email: "",
      old_password: "",
      password: "",
      repassword: "",
      email1: "",
      bucket: "naso_test",
      token: "",
      images: [],
      showHeader: "",
      showaddress: "",
      showImgurl: "",
      times: 5,
      showmsg: "",
      city: [],
      props: {
        value: "id",
        children: "cities"
      },
      addressid: null,
      tempName: "",
      tempphonenumber: "",
      tempemail: "",
      tempaddress: "",
      tempid: null,
      tempaddressid: null,
      addressdata: [],
      tempdeleteid: null,
      jindu: 0
    };
  },
  mounted() {
if (localStorage.getItem("users")) {
      this.getcity();
    this.getaddressdata();
    this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    this.users = this.$store.state.users;
    this.token = JSON.parse(localStorage.getItem('users')).token;
    if (this.$route.query.index) {
      this.setindex = 4;
    }
    }


   
  },
  methods: {
    Modifyaddress(item) {
      this.tempid = item.id;
      this.tempName = item.name;
      this.tempphonenumber = item.phone;
      this.tempemail = item.email;
      this.tempaddress = item.country_en_name + "/" + item.port_en_name;
      this.tempaddressid = item.pod_id;
      this.setitems(6);
    },
    handleItemChange(val, e) {
      let that = this;
      let portUrl =
        this.$store.state.headerUrl + "freight/port_by_country_id/" + val;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(portUrl, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            for (var i = 0; i < resp.data.data.length; i++) {
              resp.data.data[i]["label"] = resp.data.data[i]["en_name"];
            }
            for (var i = 0; i < that.city.length; i++) {
              if (that.city[i].id === val[0]) {
                that.city[i].cities = resp.data.data;
              }
            }
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.getcity();
              }
            });
          }
        });
    },
    addressschange(val) {
      this.addressid = val[1];
    },
    addressschange1(val) {
      this.tempaddressid = val[1];
    },
    addaddressdata() {
      let that = this;
      let addaddressUrl = that.$store.state.headerUrl + "address";
      let tempalert = that.$alert;
      let data = {
        name: that.newName,
        email: that.newemail,
        pod_id: that.addressid,
        phone: that.newphonenumber
      };
      that.comment
        .axiosPost(addaddressUrl, that.$axios, that.$store, data, tempalert)
        .then(function(resp) {
          if (resp.data.code === 10012) {
            tempalert("Your login has expired, please try again.", {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.$router.push("/login");
              }
            });
          } else if (resp.data.code === 0) {
            that.getaddressdata();
            that.setindex = 8;
          }
        });
    },
    getcity() {
      let that = this;
      let cityUrl = that.$store.state.headerUrl + "country";
      let tempalert = that.$alert;
      that.comment
        .axiosGet(cityUrl, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            for (var i = 0; i < resp.data.data.length; i++) {
              resp.data.data[i]["label"] = resp.data.data[i]["en_name"];
              resp.data.data[i]["cities"] = [];
            }
            //            that.city.push(resp.data.data[0])
            that.city = resp.data.data;
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.getcity();
              }
            });
          }
        });
    },
    successtime() {
      this.times = 5;
      window.setInterval(() => {
        this.times--;
        if (this.times === 0) {
          this.setindex = 0;
          this.showmsg = "";
        }
      }, 1000);
    },
    setitems(index) {
      this.setindex = index;
    },
    modifyuserInfo(index) {
      var modifyUrl = this.$store.state.headerUrl + "member";
      var tempalert = this.$alert;
      const jsonUsers = JSON.parse(localStorage.getItem("users"));
      var putdata = {};
      switch (index) {
        case 1:
          putdata = {
            nickname: this.input
          };
          break;
        case 2:
          var tempalert = this.$alert;
          var resendurl = this.$store.state.headerUrl + "member";
          if (
            this.old_password === "" ||
            this.code === "" ||
            this.password === "" ||
            this.repassword === ""
          ) {
            tempalert("Information is incomplete, Please improve", {
              confirmButtonText: "ok",
              center: true
            });
          } else {
            const loading = this.$loading({
              lock: true,
              text: "Loading",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            var that = this;
            this.$axios
              .put(
                resendurl,
                {
                  nickname: this.users.nickname,
                  email: this.users.email,
                  old_password: this.old_password,
                  code: Number(this.code),
                  password: this.password,
                  rpassword: this.repassword
                },
                {
                  headers: {
                    token: this.$store.state.users.token
                  }
                }
              )
              .then(function(resp) {
                if (resp.data.code === 0) {
                  loading.close();
                  that.showmsg = "Your password has been set successfully .";
                  that.setindex = 8;
                } else {
                  loading.close();
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
          break;
        case 3:
          putdata = {
            email: this.email1
          };
          break;
        case 5:
          putdata = {
            avatar: this.showImgurl
          };
          break;
      }
      if (index !== 2) {
        var that = this;
        this.$axios
          .put(modifyUrl, putdata, { headers: { token: jsonUsers.token } })
          .then(function(resp) {
            if (index === 1) {
              if (resp.data.code === 10012) {
                tempalert("Your login has expired, please try again.", {
                  confirmButtonText: "ok",
                  center: true,
                  callback: action => {
                    that.$router.push("/login");
                  }
                });
              } else if (resp.data.code === 0) {
                that.$store.dispatch(
                  "_Information",
                  JSON.stringify(resp.data.data)
                );
                localStorage.setItem("users", JSON.stringify(resp.data.data));
                that.users = JSON.parse(localStorage.getItem("users"));
                that.showmsg = "Your nickname has been set successfully .";
                that.setindex = 8;
              }
            } else if (index === 3) {
              if (resp.data.code === 10012) {
                tempalert("Your login has expired, please try again.", {
                  confirmButtonText: "ok",
                  center: true,
                  callback: action => {
                    that.$router.push("/login");
                  }
                });
              } else if (resp.data.code === 0) {
                that.$store.dispatch(
                  "_Information",
                  JSON.stringify(resp.data.data)
                );
                localStorage.setItem("users", JSON.stringify(resp.data.data));
                that.users = JSON.parse(localStorage.getItem("users"));
                that.showmsg = "Your email has been set successfully .";
                that.setindex = 8;
              }
            } else if (index === 5) {
              if (resp.data.code === 10012) {
                tempalert("Your login has expired, please try again.", {
                  confirmButtonText: "ok",
                  center: true,
                  callback: action => {
                    that.$router.push("/login");
                  }
                });
              } else if (resp.data.code === 0) {
                that.$store.dispatch(
                  "_Information",
                  JSON.stringify(resp.data.data)
                );
                localStorage.setItem("users", JSON.stringify(resp.data.data));
                that.users = JSON.parse(localStorage.getItem("users"));
                that.showmsg = "Your avatar has been set successfully .";
                that.setindex = 8;
              }
            }
          })
          .catch(function(error) {
            tempalert(error, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.$router.push("/login");
              }
            });
          });
      }
    },
    sendgetcode() {
      var tempalert = this.$alert;
      var getcodeurl = this.$store.state.headerUrl + "send_mail_code";
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.$axios
        .post(getcodeurl, { email: this.users.email })
        .then(function(resp) {
          if (resp.data.code === 0) {
            loading.close();
            tempalert("send success!", {
              confirmButtonText: "ok",
              center: true
            });
          } else {
            loading.close();
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true
            });
          }
        });
    },
    deleteinfo() {
      alert("1132132");
    },
    //选去图片触发事件
    update(e) {
      const jsonUsers = JSON.parse(localStorage.getItem("users"));
      this.loading = true;
      this.showImgurl = "";
      this.jindu = 0;
      let file = e.target.files[0];
      let d = new Date();
      let type = file.name.split(".");
      let param = new FormData(); //创建form对象
      var putExtra = {
        fname: "",
        params: {},
        mimeType: null
      };
      putExtra.params["x:name"] = file.name.split(".")[0];
      param.append("file", file, file.name, putExtra);
      // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        onUploadProgress: progressEvent => {
          var complete =
            ((progressEvent.loaded / progressEvent.total) * 100) | 0;
          console.log(complete); //进度值
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
            token: jsonUsers.token
          }
        })
        .then(response => {
          this.token = response.data.data.token;
          this.showHeader = response.data.data.domain;
          param.append("token", this.token);
          /*if(this.images.length>1){
              alert('不能超过1张');
              return;
            }*/
          this.uploading(param, config, file.name, file, putExtra); //然后将参数上传七牛
        });
    },
    //七牛上传图片
    uploading(param, config, pathName, file, putExtra) {
      this.$axios
        .post("http://upload-as0.qiniup.com/", param, config, file, putExtra)
        .then(response => {
          var testqiniu = this.comment.qiniuimg(
            this.showHeader + response.data.key,
            "imageMogr2/thumbnail/",
            "60",
            "x",
            "60",
            ""
          );
          this.showImgurl = testqiniu;
          this.loading = false;
          /* let localArr = this.images.map((val,index,arr)=>{
              return arr[index].localSrc;
            })
            if(!~localArr.indexOf(pathName)){
              this.images.push({'src':this.showUrl+response.data.key,'localSrc':pathName});
            }else{
              alert('已上传该图片');
            }*/
        });
    },
    getaddressdata() {
      var that = this;
      let addressUrl = that.$store.state.headerUrl + "address";
      let tempalert = that.$alert;
      that.comment
        .axiosGet(addressUrl, that.$axios, that.$store)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.addressdata = resp.data.data;
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.getaddressdata();
              }
            });
          }
        });
    },
    updataaddress() {
      var that = this;
      let updateUrl = that.$store.state.headerUrl + "address";
      let data = {
        id: Number(that.tempid),
        name: that.tempName,
        email: that.tempemail,
        pod_id: Number(that.tempaddressid),
        phone: that.tempphonenumber
      };
      console.log(data);
      let tempalert = that.$alert;
      that.comment
        .axiosPut(updateUrl, that.$axios, that.$store, data, tempalert)
        .then(function(resp) {
          that.dialogVisible = false;
          if (resp.data.code === 0) {
            //            that.users = JSON.parse(localStorage.getItem('users'));
            that.showmsg = "Your addresss has been set successfully .";
            that.getaddressdata();
            that.setindex = 8;
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {}
            });
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "ok",
            center: true,
            callback: action => {}
          });
        });
    },
    deleteaddress(id) {
      var that = this;
      let tempid = Number(id);
      let params = {
        id: tempid
      };
      let delUrl = this.$store.state.headerUrl + "address/" + tempid;
      let tempalert = that.$alert;
      that.comment
        .axiosDelete(delUrl, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          that.dialogVisible = false;
          if (resp.data.code === 0) {
            that.showmsg = "Finished delete address .";
            that.getaddressdata();
            that.setindex = 8;
          } else {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {}
            });
          }
        });
    },
    dialogopen(id) {
      this.tempdeleteid = id;
      this.dialogVisible = true;
    },
    //关闭弹出框
    dialogclose() {
      this.dialogVisible = false;
    }
  },
  watch: {
    setindex: function(val, oldval) {
      if (val === 8) {
        this.successtime();
      }
      if (val !== 6) {
        (this.tempName = ""), (this.tempphonenumber = "");
        this.tempemail = "";
        this.tempaddress = "";
        this.tempid = null;
        this.tempaddressid = null;
      }
    }
  }
};
</script>
