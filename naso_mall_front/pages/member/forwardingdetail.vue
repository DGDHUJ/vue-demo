<style lang="scss" scoped>
.forwarding {
  margin-left: 20px;
}

.forwarding-title {
  line-height: 40px;
  font-size: 1rem;
  color: #4b3f91;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
}
.detail-content {
  border: 1px solid #ddd;
  padding: 0 20px 20px 20px;
}
.content-title {
  line-height: 60px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  p {
    display: inline-block;
  }
  .service {
    margin-left: 20px;
    background-color: #4b3f91;
    color: white;
    line-height: 30px;
    padding: 0 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  .service:active {
    font-size: 15px;
    background-color: #4b3f91;
    color: white;
  }
  .cancel {
    float: right;
    line-height: 40px;
    margin: 10px 0;
    border: 1px solid #ddd;
    padding: 0 20px;
    cursor: pointer;
  }
  .cancel:active {
    font-size: 15px;
    background-color: #4b3f91;
    color: white;
  }
  .cancel-i {
    margin: 0 5px 0 0;
  }
}
.schedule {
  line-height: 60px;
  color: #4b3f91;
  font-weight: bold;
  .schedule-img {
    width: 15px;
    margin-top: -5px;
  }
  .schedule-img1 {
    width: 20px;
    margin-top: -5px;
  }
  .schedule-text {
    margin-left: 5px;
    font-size: 15px;
  }
}
.schedule-bar {
  padding-bottom: 20px;
  border-bottom: 1px dashed #ddd;
}
.num-bar {
  width: 25%;
  position: relative;
  display: inline-block;
  .numicon {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #4b3f91;
    border-radius: 50%;
    color: white;
    font-size: 23px;
    margin-left: 40%;
  }
  .num-text1 {
    text-align: center;
    color: #4b3f91;
  }
  .num-text {
    text-align: center;
    color: rgb(153, 153, 153);
  }
  .line {
    top: 25px;
   left: 58%;
    width: 90%;
    height: 5px;
    background-color: #4b3f91;
    position: absolute;
  }
}
.num-bar-active {
  width: 25%;
  position: relative;
  display: inline-block;
  .numicon {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: rgb(240, 133, 25);
    border-radius: 50%;
    color: white;
    font-size: 23px;
    margin-left: 40%;
  }

  .num-text1 {
    text-align: center;
    color: rgb(240, 133, 25);
  }
  .num-text {
    text-align: center;
    color: rgb(153, 153, 153);
  }
  .line {
    top: 25px;
    left: 58%;
    width: 90%;
    height: 5px;
    background-color: rgb(240, 133, 25);
    position: absolute;
  }
}
.num-bar:last-of-type {
  .line {
    display: none;
  }
}
.info {
  font-size: 14px;
  line-height: 35px;
}
.info:last-of-type {
  border-bottom: 1px solid #ddd;
}
.line-label {
  margin-left: 50px;
}
.infotemp {
  overflow: hidden;
}
.left-info {
  float: left;
  width: 95px;
}
.right-info {
  float: right;
  width: 80%;
}
.left-info1 {
  float: left;
  width: 125px;
}
.right-info1 {
  float: right;
  width: 80%;
}
.float-item {
  float: left;
  width: 50%;
}
.float-items {
  float: left;
}
.download {
  overflow: hidden;
  .dan {
    float: left;
    width: 280px;
    height: 190px;
  }
  .dan-text {
    img {
      margin-top: -7px;
    }
    span {
      margin-left: 20px;
    }
    float: left;
    height: 20px;
    margin: 170px 0 0 40px;
    font-size: 14px;
    color: rgb(240, 133, 25);
    cursor: pointer;
    font-weight: bold;
  }
}
.left-items {
  float: left;
  width: 50%;
}
.showprice {
  line-height: 40px;
  font-size: 16px;
  overflow: hidden;
}
.left-span {
  color: #4b3f91;
  cursor: pointer;
}
.right-span1 {
  float: right;
  color: rgb(239, 137, 83);
}
.right-span2 {
  float: right;
  color: black;
}
.btnSubmit {
  height: 35px;
  padding: 0 40px;
  float: right;
  background-color: rgb(74, 63, 145);
  color: white;
}
.ArialMT {
  font-family: ArialMT;
}
.MicrosoftYaHei {
  font-family: MicrosoftYaHei;
}
.AdobeHeitiStd-Regular {
  font-family: AdobeHeitiStd-Regular;
}
</style>

<template>
  <section class="container">
    <div class="forwarding">
      <div class="forwarding-title">
        <p>Freight forwarding</p>
      </div>
      <div class="detail-content">
        <div class="content-title">
          <p class="orderno">Order no : {{orderData.sn}}</p>
          <p class="service" onclick="$crisp.push(['do', 'chat:open'])">Contact Customer Service</p>
          <!-- <p class="cancel">
            <i class="cancel-i el-icon-delete"></i>
            <span>Cancel the order</span>
          </p> -->
        </div>
        <div class="schedule">
          <img class="schedule-img" src="../../assets/img/00001.png">
          <span class="schedule-text">Complete schedule</span>
        </div>
        <div class="schedule-bar">
          <div
            :class="{'num-bar-active':orderData.create_time && orderData.create_time !==0,'num-bar':!orderData.create_time || orderData.create_time ===0}"
          >
            <div class="numicon">1</div>
            <p class="num-text1">Order creation</p>
            <p class="num-text">
              <span v-if="!orderData.create_time ||orderData.create_time === 0">&nbsp;</span>
              <span
                v-if="orderData.create_time && orderData.create_time !==0"
              >{{comment.formate('yyyy-MM-dd hh:mm:ss', new Date(Number(orderData.create_time)*1000))}}</span>
            </p>
            <div class="line">&nbsp;</div>
          </div>
          <div
            :class="{'num-bar-active':shipping.send_booking_time && shipping.send_booking_time !==0,'num-bar':!shipping.send_booking_time || shipping.send_booking_time ===0}"
          >
            <div class="numicon">2</div>
            <p class="num-text1">BOOKING</p>
            <p class="num-text">
              <span v-if="!shipping.send_booking_time ||shipping.send_booking_time === 0">&nbsp;</span>
              <span
                v-if="shipping.send_booking_time && shipping.send_booking_time !== 0"
              >{{comment.formate('yyyy-MM-dd hh:mm:ss', new Date(Number(shipping.send_booking_time)*1000))}}</span>
            </p>
            <div class="line">&nbsp;</div>
          </div>
          <div
            :class="{'num-bar-active':shipping.receive_so_time && shipping.receive_so_time !==0,'num-bar':!shipping.receive_so_time || shipping.receive_so_time ===0}"
          >
            <div class="numicon">3</div>
            <p class="num-text1">SO Credentials</p>
            <p class="num-text">
             <span v-if="!shipping.receive_so_time ||shipping.receive_so_time === 0">&nbsp;</span>
              <span
                v-if="shipping.receive_so_time && shipping.receive_so_time!==0"
              >{{comment.formate('yyyy-MM-dd hh:mm:ss', new Date(Number(shipping.receive_so_time)*1000))}}</span>
            </p>
            <div class="line">&nbsp;</div>
          </div>
          <!-- <div
            :class="{'num-bar-active':shipping.send_booking_time && shipping.send_booking_time !==0,'num-bar':!shipping.send_booking_time || shipping.send_booking_time ===0}"
          >
            <div class="numicon">4</div>
            <p class="num-text1">shipping instruction</p>
            <p class="num-text">2018-7-5 15:36:47</p>
            <div class="line">&nbsp;</div>
          </div>
          <div
            :class="{'num-bar-active':shipping.send_booking_time && shipping.send_booking_time !==0,'num-bar':!shipping.send_booking_time || shipping.send_booking_time ===0}"
          >
            <div class="numicon">5</div>
            <p class="num-text1">Container shipment</p>
            <p class="num-text">2018-7-5 15:36:47</p>
            <div class="line">&nbsp;</div>
          </div> -->
          <div
            :class="{'num-bar-active':shipping.send_booking_time && shipping.send_booking_time !==0,'num-bar':!shipping.send_booking_time || shipping.send_booking_time ===0}"
          >
            <div class="numicon">4</div>
            <p class="num-text1">Complete the order</p>
            <p class="num-text">
                 <span v-if="!shipping.complete_time ||shipping.complete_time === 0">&nbsp;</span>
              <span
                v-if="shipping.complete_time && shipping.complete_time!==0"
              >{{comment.formate('yyyy-MM-dd hh:mm:ss', new Date(Number(shipping.complete_time)*1000))}}</span>
            </p>
            <div
              class="line"
              style="width:90px;height:5px;background-color:red;position:absolute;"
            >&nbsp;</div>
          </div>
        </div>
        <div class="schedule">
          <img class="schedule-img" src="../../assets/img/00001.png">
          <span class="schedule-text">Booking information</span>
        </div>
        <div class="info">
          <label>Port of departure (pier) :</label>
          <span class="ArialMT">{{goods_info.pod_en_name}}&nbsp; {{goods_info.pod_cn_name}}</span>
        </div>
        <div class="info">
          <label>Destination port (pier) :</label>
          <span class="ArialMT">{{goods_info.pol_en_name}}&nbsp; {{goods_info.pol_cn_name}}</span>
        </div>
        <div class="schedule">
          <img class="schedule-img1" src="../../assets/img/icon6.png">
          <span class="schedule-text">SO Credentials</span>
        </div>
        <div class="download">
          <p v-if="orderData.so_file===''">Not uploaded yet</p>
          <img v-if="orderData.so_file!==''" class="dan" :src="orderData.so_file">
          <div v-if="orderData.so_file!==''" class="dan-text">
            <img src="../../assets/img/supervision_title2.png">
            <a :href="orderData.so_file" download="w3logo">Download SO Credentials</a>
          </div>
        </div>
      </div>



      <div class="detail-content">
        <div v-if="fileUrl!==''&&fileUrl!==null" style="margin:20px 0 ;">
          <img style="widht:280px;height:190px;" v-if="fileUrl!==''&&fileUrl!==null" :src="fileUrl">
        </div>
        <div class="showprice">
          <label
            v-if="orderData.status==='wait_pay'"
            class="ui_button ui_button_primary"
            style="cursor: pointer;float:left;"
            for="xFile"
          >
            <i class="el-icon-circle-plus left-span"></i>
            <span class="left-span">Upload payment voucher</span>
          </label>
          <form>
            <input
              type="file"
              id="xFile"
              @change="update"
              style="position:absolute;clip:rect(0 0 0 0);"
            >
          </form>
          <el-progress
            v-show="(fileUrl===''||fileUrl===null) && jindu>0 "
            style="float: left;width: 150px;height: 40px;margin-left: 30px;line-height: 40px;"
            :percentage="jindu"
          ></el-progress>
          <span class="right-span1">&nbsp;&nbsp;USD ${{orderData.total_price_dollar|money}}</span>
          <span class="right-span1">&nbsp;&nbsp;CNY {{orderData.total_price|money}}</span>
          <span class="right-span2">Order amount ：</span>
        </div>
        <el-button
          class="btnSubmit"
          v-if="orderData.status==='wait_pay'"
          @click="_sendpayment"
        >Submit</el-button>
        <div style="clear: both;"></div>
      </div>
      <changeuserInfobar></changeuserInfobar>
    </div>
  </section>
</template>

<script>
import changeuserInfobar from "../../components/ordercommon/changeuserInfobar.vue";
export default {
  components: {
    changeuserInfobar: changeuserInfobar
  },
  name: "forwardingdetail",
  data() {
    return {
      orderData: {},
      shipping: {},
      goods_info: {},
      fileName: null,
      fileUrl: null,
      jindu: 0
    };
  },
  methods: {
    _getData() {
      let that = this;
      let url =
        that.$store.state.headerUrl +
        "member/freight_order/" +
        that.$route.query.id;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            console.log(resp.data.data);
            that.orderData = resp.data.data;
            that.shipping = resp.data.data.shipping;
            that.goods_info = resp.data.data.shipping.goods_info;
            that.fileUrl = resp.data.data.payment_voucher;
          }
        })
        .catch(error => {});
    },
    //提交支付凭证
    _sendpayment() {
      let url =
        this.$store.state.headerUrl + "member/freight_order/payment_voucher";
      let params = {
        order_id: Number(this.orderData.id),
        payment_voucher: this.fileUrl
      };
      let tempalert = this.$alert;
      this.comment
        .axiosPost(url, this.$axios, this.$store, params, tempalert)
        .then(resp => {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                this._getData();
              }
            });
          }
        })
        .catch(() => {});
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
    }
  },
  mounted() {
      if(localStorage.getItem("users")){
         setTimeout(() => {
      this._getData();
    }, 100);
    this.userInfo = JSON.parse(localStorage.getItem("users"));
    }
   
  },
  watch: {}
};
</script>

