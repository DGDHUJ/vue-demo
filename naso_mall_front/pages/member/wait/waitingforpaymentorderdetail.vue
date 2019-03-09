<style lang="scss" scoped>
.submitpendingorder {
  margin-left: 20px;
  .submitpendingorder-title {
    line-height: 40px;
    font-size: 1rem;
    color: #4b3f91;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }
  .submitpendingorder-content {
    padding: 10px 20px;
    margin: 10px 0 0 0;
    border: 1px solid #ddd;
    .submitpendingorder-content-line1 {
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;
      font-weight: 600;
      color: #4b3f91;
      line-height: 45px;
      img {
        float: left;
        margin-top: 10px;
      }
      .submitpendingorder-content-line1-cancel {
        display: inline-block;
        margin-top: 6px;
        width: 6rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        border-radius: 0.4rem;
        background-color: #4b3f91;
        color: #fff;
        cursor: pointer;
        user-select: none;
      }
      .submitpendingorder-content-line1-cancel:hover {
        background-color: #fff;
        color: #4b3f91;
        border: 1px solid #4b3f91;
      }
    }
    .submitpendingorder-content-line2 {
      font-size: 18px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      .bg-purple-dark {
        background: white;
      }
      .bg-purple {
        background: white;
      }
      .bg-purple-light {
        background: white;
      }
      .grid-content {
        min-height: 36px;
      }
      .orderid {
        font-size: 1rem;
        line-height: 40px;
        .orderidcontent {
          font-weight: 600;
        }
      }
      .ordertext1 {
        color: #666666;
      }
      .ordertext2 {
        margin: 0 10px;
        color: #f08619;
        font-size: 20px;
      }
      .payment {
        font-size: 1rem;
        p {
          width: 30%;
          display: inline-block;
        }
        p:last-of-type {
          width: 40%;
        }
      }
    }
    .submitpendingorder-content-line3 {
      border-bottom: 1px solid #ddd;
      .schedule {
        overflow: hidden;
        margin-top: 20px;
        // display: flex;
        // flex-direction: row;
        // flex-wrap: nowrap;
        .scheduleout-item1 {
          float: left;
          width: 13%;
          border: 1px solid #ddd;
          text-align: center;
          .scheduleout-item1-img {
            padding: 30px 0 20px 0;
            img {
              width: 40px;
              height: 42px;
            }
          }
          .scheduleout-item1-text {
            min-height: 51px;
            padding-bottom: 15px;
            color: #a0a0a0;
          }
        }
        .scheduleout-item2 {
          float: left;
          width: 4.4%;
          line-height: 10;
          text-align: center;
        }
      }
      .schedule-time {
        display: inline-block;
        margin: 20px 0;
        text-align: center;
        width: 13%;
        margin-right: 4.4%;
      }
      .schedule-time:last-of-type {
        margin-right: 0;
      }
    }
    .submitpendingorder-content-line4 {
      margin-top: 40px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      .listout {
        // display: flex;
        // flex-direction: row;
        // flex-wrap: nowrap;
        overflow: hidden;
        .listimg {
          float: left;
          width: 120px;
          img {
            width: 120px;
            height: 120px;
            border: 1px solid #ddd;
          }
        }
        .list-right {
          float: left;
          width: calc(100% - 140px);
          margin: 5px 0 0 20px;
          .list-right-line1 {
            overflow: hidden;
            line-height: 30px;
            .list-right-line1-1 {
              float: left;
              width: 55%;
              font-size: 1rem;
              cursor: pointer;
            }
            .list-right-line1-2 {
              float: left;
              width: 15%;
              text-align: center;
              font-size: 1rem;
              cursor: pointer;
            }
            .list-right-line1-3 {
              float: left;
              width: 15%;
              font-size: 1rem;
              text-align: center;
              cursor: pointer;
            }
            .list-right-line1-4 {
              float: left;
              width: 15%;
              font-size: 1rem;
              text-align: center;
              cursor: pointer;
              p {
                margin-bottom: 0.5rem;
                // border: 1px solid #4b3f91;
                border-radius: 6px;
                color: #fff;
                background-color: #4b3f91;
              }
            }
          }
          .list-right-line2 {
            line-height: 30px;
            text-align: right;
            font-size: 0.93rem;
            color: #999999;
          }
          .list-right-line3 {
            text-align: center;
            a {
              color: #f08619;
              float: right;
              cursor: pointer;
            }
          }
        }
      }
    }
    .submitpendingorder-content-line5 {
      margin-top: 20px;
      .submitpendingorder-content-line5-1 {
        line-height: 40px;
        font-size: 1rem;
        color: #4b3f91;
        font-weight: 600;
      }
      .submitpendingorder-content-line5-2 {
        // display: flex;
        overflow: hidden;
        line-height: 30px;
        font-size: 0.93rem;
        .submitpendingorder-content-line5-2-1 {
          float: left;
          width: 240px;
        }
        .submitpendingorder-content-line5-2-2 {
          float: left;
          width: calc(100% - 250px);
        }
      }
      .submitpendingorder-content-line5-3 {
        line-height: 30px;
        font-size: 0.93rem;
      }
      .submitpendingorder-content-line5-4 {
        overflow: hidden;
        line-height: 30px;
        font-size: 0.93rem;
        .submitpendingorder-content-line5-4-1 {
          float: left;
          width: 33.33%;
        }
        .submitpendingorder-content-line5-4-2 {
          float: left;
          width: 33.33%;
        }
        .submitpendingorder-content-line5-4-3 {
          float: left;
          width: 33.33%;
        }
      }
      .submitpendingorder-content-line5-5 {
        line-height: 30px;
        font-size: 0.93rem;
        span {
          margin-right: 20px;
        }
        span:last-of-type {
          margin-right: 0;
        }
      }
    }
    .payment_price {
      font-size: 14px;
      span {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .payment {
      font-size: 0.93rem;
      // margin-top: 20px;
      line-height: 40px;
      p {
        width: 30%;
        display: inline-block;
      }
      p:last-of-type {
        width: 70%;
      }
      img {
        width: 170px;
      }
      .payment-title {
        color: #4b3f91;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .payment-item {
        line-height: 2rem;
        > div > div {
          display: inline-block;
          width: calc(100%-46px);
        }
        span {
          display: inline-block;
          width: 44px;
          height: 24px;
          line-height: 22px;
          color: #4b3f91;
          border: 1px solid #4b3f91;
          border-radius: 4px;
          text-align: center;
          user-select: none;
          cursor: pointer;
          &:hover {
            color: #fff;
            background-color: #4b3f91;
          }
        }
      }
    }

    .submitpendingorder-content-line6-left {
      line-height: 50px;
      margin: 10px 0;
      .inputgroung {
        line-height: 50px;
        .el-input {
          width: 60%;
        }
      }
      .addimg {
        img {
          width: 170px;
        }
      }
      .add-btn {
        .add-btn-a {
          padding: 15px 0;
          width: 100%;
          font-size: 1rem;
          color: #f08619;
          .add-btn-a-i {
            color: #f08619;
            font-size: 25px;
          }
        }
      }
    }
    .submitpendingorder-content-line6-right {
      margin: 10px 0;
      .p-btn {
        cursor: pointer;
        width: 170px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background: #4b3f91;
        border-radius: 6px;
        font-size: 1rem;
        color: white;
      }
    }
  }
}
.add-btn-a-i {
  color: #f08619;
  font-size: 25px;
}
.alreadyshowimg {
  width: 170px;
  height: 170px;
  margin-right: 20px;
  border: 1px solid #ddd;
}

.attachment-text1 {
  display: inline-block;
  vertical-align:middle;
}

.attachment-text1 .add_img {
  margin-top: 14px;
  padding-top: 20px;
  width: 160px;
  height: 150px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  i {
    font-size: 14px;
    color: #999;
  }
  img {
    width: 90px !important;
  }
  p {
    line-height: 40px;
  }
}

.payment-prompt {
  margin: 20px 0;
  font-size: 16px;
  color: red;
}
</style>

<template>
  <section class="container">
    <div class="submitpendingorder">
      <div class="submitpendingorder-title">
        <p>My Order</p>
      </div>
      <div class="submitpendingorder-content">
        <div class="submitpendingorder-content-line1">
          <p>
            <img src="../../../assets/img/waitepaydetailtitle_03.jpg" height="27" width="28">
            Upload Payment Document
          </p>
          <!-- <div class="submitpendingorder-content-line1-cancel">
            Cancel
          </div>-->
        </div>
        <div class="submitpendingorder-content-line2">
          <p class="orderid">
            Order ID :
            <span class="orderidcontent">{{listdata.sn}}</span>
          </p>

          <!-- <p>
            <span class="ordertext1">if the payment voucher is not uploaded after</span>
            <span class="ordertext2">5days,59:59</span>
            <span class="ordertext1">,the order will be close automatically</span>
          </p>-->
          <p class="payment_price">
            Price:
            <span>{{ listdata.fob_total_price | numFilter(2) }}</span>&nbsp;
            Deposit:
            <span>{{ deposit | numFilter(2) }}</span>&nbsp;
            Final Payment:
            <span>{{ fobcount | numFilter(2) }}</span>
          </p>
          <div class="payment">
            <div>Payment information</div>
            <p>Account name:佛山市纳信贸易有限公司</p>
            <p>Bank:中国农业银行</p>
            <p>Account no:44438414040000023</p>
          </div>
        </div>
        <div class="submitpendingorder-content-line3">
          <div class="schedule">
            <div class="scheduleout-item1">
              <div class="scheduleout-item1-img">
                <img src="../../../assets/img/00001.png">
              </div>
              <div class="scheduleout-item1-text">Set up the order</div>
            </div>
            <div class="scheduleout-item2">
              <i class="icon iconfont icon-arrow-right-copy-copy"></i>
            </div>
            <div class="scheduleout-item1">
              <div class="scheduleout-item1-img">
                <img v-if="listdata.exec_status<10" src="../../../assets/img/00002.png">
                <img v-if="listdata.exec_status>=10" src="../../../assets/img/00002-1.png">
              </div>
              <div class="scheduleout-item1-text">To pay a deposit</div>
            </div>
            <div class="scheduleout-item2">
              <i class="icon iconfont icon-arrow-right-copy-copy"></i>
            </div>
            <div class="scheduleout-item1">
              <div class="scheduleout-item1-img">
                <img src="../../../assets/img/00003.png">
              </div>
              <div class="scheduleout-item1-text">In prodiction</div>
            </div>
            <div class="scheduleout-item2">
              <i class="icon iconfont icon-arrow-right-copy-copy"></i>
            </div>
            <!-- <div class="scheduleout-item1" v-if="listdata.has_pay_second === 1"> -->
            <div class="scheduleout-item1">
              <div class="scheduleout-item1-img">
                <img src="../../../assets/img/00004.png">
              </div>
              <div class="scheduleout-item1-text">Pay the second installment</div>
            </div>
            <!-- <div class="scheduleout-item2" v-if="listdata.has_pay_second === 1"> -->
            <div class="scheduleout-item2">
              <i class="icon iconfont icon-arrow-right-copy-copy"></i>
            </div>
            <div class="scheduleout-item1">
              <div class="scheduleout-item1-img">
                <img src="../../../assets/img/00005.png">
              </div>
              <div class="scheduleout-item1-text">Settlement of final payment</div>
            </div>
            <div class="scheduleout-item2">
              <i class="icon iconfont icon-arrow-right-copy-copy"></i>
            </div>
            <div class="scheduleout-item1">
              <div class="scheduleout-item1-img">
                <img src="../../../assets/img/00006.png">
              </div>
              <div class="scheduleout-item1-text">Delicery</div>
            </div>
          </div>
          <div class="schedule-time" v-if="listdata.set_up_time">
            <p>{{comment.formate('hh:mm:ss',new Date(listdata.set_up_time*1000))}}</p>
            <p>{{comment.formate('yyyy/MM/dd',new Date(listdata.set_up_time*1000))}}</p>
          </div>
          <div class="schedule-time" v-if="listdata.pay_deposit_time && listdata.exec_status>=10">
            <p>{{comment.formate('hh:mm:ss',new Date(listdata.pay_deposit_time*1000))}}</p>
            <p>{{comment.formate('yyyy/MM/dd',new Date(listdata.pay_deposit_time*1000))}}</p>
          </div>
        </div>

        <div
          class="submitpendingorder-content-line4"
          :key="key"
          v-for="(item,index,key) in listdata.goods_list"
        >
          <div class="listout">
            <div class="listimg">
              <img :src="item.img_url">
            </div>
            <div class="list-right">
              <div class="list-right-line1">
                <div class="list-right-line1-1">
                  <nuxt-link
                    :to="{name: 'product-id',params:{id:item.goods_id}}"
                    target="_blank"
                  >{{item.title}}</nuxt-link>
                </div>
                <div
                  class="list-right-line1-2"
                  v-if="item.delivery_type === 'exw'"
                  v-show="item.sell_price"
                >
                  Price:
                  <span>{{item.price|money}}</span>
                </div>
                <div
                  class="list-right-line1-2"
                  v-if="item.delivery_type !== 'exw'"
                  v-show="item.fob_price"
                >
                  Price:
                  <span>{{item.fob_price|money}}</span>
                </div>
                <div
                  class="list-right-line1-3"
                  v-if="item.delivery_type === 'exw'"
                  v-show="item.sell_price"
                >${{(comment.cul(item.num,item.sell_price))|money}}</div>
                <div
                  class="list-right-line1-3"
                  v-if="item.delivery_type !== 'exw'"
                  v-show="item.fob_price"
                >${{(comment.cul(item.num,item.fob_price))|money}}</div>
                <div class="list-right-line1-4">
                  <nuxt-link :to="{path: '/member/forwarding'}" target="_blank">
                    <p>Space Booking</p>
                  </nuxt-link>
                </div>
              </div>
              <div
                class="list-right-line2"
              >Do you need efficient and cheap freight forwarding services? For more information, click here</div>
              <div class="list-right-line3">
                <div class="list-right-line3-2">
                  <a onclick="$crisp.push(['do', 'chat:open'])">Customer Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="submitpendingorder-content-line5">
          <div class="submitpendingorder-content-line5-1">
            <p>Order details</p>
          </div>
          <div>
            <p class="payment_price">
              Price:
              <span>{{ listdata.fob_total_price | numFilter(2) }}</span>&nbsp;
              Deposit:
              <span>{{ deposit | numFilter(2) }}</span>&nbsp;
              Final Payment:
              <span>{{ fobcount | numFilter(2) }}</span>
            </p>
          </div>
          <div class="submitpendingorder-content-line5-2">
            <p class="submitpendingorder-content-line5-2-1">
              he delicery way:
              <span>{{listdata.delivery_type}}</span>
            </p>
            <p class="submitpendingorder-content-line5-2-2">{{listdata.custom_comment}}</p>
          </div>
          <div class="submitpendingorder-content-line5-3">
            <p>
              Payment settlement:
              <span>{{listdata.payment_type}}</span>
            </p>
          </div>
          <div class="submitpendingorder-content-line5-4">
            <p class="submitpendingorder-content-line5-4-1">Payment date:{{listdata.delivery_date}}</p>
            <p class="submitpendingorder-content-line5-4-2">1.Down payment time:</p>
            <p class="submitpendingorder-content-line5-4-3">2.Clearing balance payment time:</p>
          </div>
          <div class="submitpendingorder-content-line5-5">
            <p v-if="listdata.contact_type">{{listdata.contact_type}}:{{listdata.contact_info}}</p>
            <p>
              <span>{{listdata.contact_name}}</span>
              <span>{{listdata.contact_phone}}</span>
              <span>{{listdata.contact_email}}</span>
              <span
                v-if="listdata.contact_email"
              >{{listdata.contact_email}}/{{listdata.contact_email}}</span>
            </p>
          </div>
          <hr style="height: 1px;margin-top: 20px;border:none;border-top:1px dashed #ddd;">
        </div>
        <div class="payment">
          <div class="payment-title">Payment information</div>
          <el-row class="payment-item" :gutter="6">
            <el-col :span="8">
              <div>Factory Inspection Report</div>
              <span
                @click="goInfo(1,tempid)"
                v-show="QA.factory_inspection_file.length > 0 || QA.factory_inspection_photo.length > 0 || QA.factory_inspection_video.length > 0"
              >view</span>
              <div>Key Components Inspection Report</div>
              <span
                @click="goInfo(4,tempid)"
                v-show="QA.important_inspection_file.length > 0 || QA.important_inspection_photo.length > 0 || QA.important_inspection_video.length > 0"
              >view</span>
              <div>Third Party Inspection Report</div>
              <span
                @click="goInfo(7,tempid)"
                v-show="QA.test_report.length > 0 || QA.test_photo.length > 0 || QA.test_video.length > 0"
              >view</span>
            </el-col>
            <el-col :span="8">
              <div>Packaging Plan</div>
              <span
                @click="goInfo(2,tempid)"
                v-show="QA.packaging_scheme_file.length > 0 || QA.packaging_photo.length > 0 || QA.packaging_video.length > 0"
              >view</span>
              <div>First Inspection Report</div>
              <span
                @click="goInfo(5,tempid)"
                v-show="QA.first_inspection_report.length > 0 || QA.first_inspection_photo.length > 0 || QA.first_inspection_video.length > 0"
              >view</span>
              <div>Finished Products Inspection Report</div>
              <span
                @click="goInfo(8,tempid)"
                v-show="QA.acceptance_file.length > 0 || QA.acceptance_file.length > 0 || QA.acceptance_file.length > 0"
              >view</span>
            </el-col>
            <el-col :span="8">
              <div>Sample Confirmation</div>
              <span
                @click="goInfo(3,tempid)"
                v-show="QA.template_confirm_file.length > 0 || QA.template_photo.length > 0 || QA.template_video.length > 0"
              >view</span>
              <div>Manufacturing Process Inspection Report</div>
              <span
                @click="goInfo(6,tempid)"
                v-show="QA.routing_inspection_file.length > 0 || QA.routing_inspection_photo.length > 0 || QA.routing_inspection_video.length > 0"
              >view</span>
              <div>Loading Supervision Report</div>
              <span
                @click="goInfo(9,tempid)"
                v-show="QA.loading_supervision_file.length > 0 || QA.loading_supervision_photo.length > 0 || QA.loading_supervision_video.length > 0"
              >view</span>
            </el-col>
          </el-row>
          <div
            class="payment-prompt"
          >Please upload the payment voucher as soon as you finish your payment. Thanks!</div>
          <div>
            <img
              class="alreadyshowimg"
              v-if="item.voucher_att && item.voucher_att.length > 10"
              v-for="(item,index,key) in listdata.receivables_records"
              :key="key"
              :src="item.voucher_att"
            >
          </div>
        </div>
        <div class="submitpendingorder-content-line6-left">
          <div class="addimg" v-if="listdata.status ==='wait_pay'">
            <a :href="showImgurl" target="_blank>">
              <img v-show="showImgurl" :src="showImgurl" stlye="margin-right:10px;" >
            </a>
            <div class="attachment-text1">
              <!-- <label
                class="ui_button ui_button_primary add-btn-a"
                style="cursor: pointer;position: relative;color: #F08619;font-size:1rem;"
                for="xFile"
              >
                <i class="icon iconfont icon-yuanquanjiahao add-btn-a-i"></i> Add payment voucher
              </label>-->
              <div class="add_img">
                <label for="xFile">
                  <img src="../../../assets/img/LOGO_NO_100x100.png">
                  <p>
                    <i class="icon iconfont icon-yuanquanjiahao"></i> Add payment voucher
                  </p>
                </label>
              </div>
              <el-progress
                v-show="jindu> 0 && showImgurl===''"
                style="width: 160px;left: 4px;position: relative;top: 5px;"
                :percentage="jindu"
              ></el-progress>
              <form>
                <input
                  type="file"
                  id="xFile"
                  accept="image/png, image/gif, image/jpeg"
                  @change="update"
                  style="position:absolute;clip:rect(0 0 0 0);"
                >
              </form>
            </div>
          </div>
        </div>
        <div class="submitpendingorder-content-line6-right">
          <p class="p-btn" @click="submitorder">Submit</p>
        </div>
      </div>
      <changeuserInfobar></changeuserInfobar>
    </div>
  </section>
</template>

<script>
import changeuserInfobar from "../../../components/ordercommon/changeuserInfobar.vue";

export default {
  components: {
    changeuserInfobar: changeuserInfobar
  },
  name: "waitingforpaymentorderdetail",
  data() {
    return {
      tempid: this.$route.query.id,
      token: "",
      showImgurl: "",
      showImgurl1: "",
      templength: "",
      listdata: {},

      deposit: 0,
      fobcount: 0,
      payment_info: {},
      images: [],
      paymentAccount: "",
      paymentNo: "",
      isaddvoucher: false,
      pay_process: 0,
      pay_processid: -10,
      jindu: 0,
      //品控报告文件数据
      QA: {
        factory_inspection_file: [],
        factory_inspection_photo: [],
        factory_inspection_video: [],
        template_confirm_file: [],
        template_photo: [],
        template_video: [],
        packaging_scheme_file: [],
        packaging_photo: [],
        packaging_video: [],
        important_inspection_file: [],
        important_inspection_photo: [],
        important_inspection_video: [],
        first_inspection_report: [],
        first_inspection_photo: [],
        first_inspection_video: [],
        routing_inspection_file: [],
        routing_inspection_photo: [],
        routing_inspection_video: [],
        test_report: [],
        test_photo: [],
        test_video: [],
        acceptance_file: [],
        acceptance_photo: [],
        acceptance_video: [],
        loading_supervision_file: [],
        loading_supervision_photo: [],
        loading_supervision_video: []
      }
    };
  },
  methods: {
    //显示添加支付凭证
    showaddimg() {
      this.isaddvoucher = true;
    },
    //获取品控报告文件
    getOA() {
      let url =
        this.$store.state.headerUrl + "member/order_qa_report/" + this.tempid;
      this.comment.axiosGet(url).then(({ data }) => {
        if (data.code === 0) {
          this.QA = data.data;
        }
      });
    },
    //获取订单信息
    getorderdetail() {
      let that = this;
      let itemUrl = that.$store.state.headerUrl + "member/order/" + that.tempid;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(itemUrl, that.$axios, that.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            that.listdata = resp.data.data;
            if (that.listdata.receivables_records) {
              for (
                var i = 0;
                i < that.listdata.receivables_records.length;
                i++
              ) {
                if (that.listdata.receivables_records[i].pay_process === 1) {
                  that.showImgurl1 =
                    that.listdata.receivables_records[i].voucher_att;
                  that.pay_process =
                    that.listdata.receivables_records[i].pay_process;
                  that.pay_processid = that.listdata.receivables_records[i].id;
                }
              }
            }
            this.deposit =
              that.listdata.fob_total_price *
              (that.listdata.down_payment / 100);
            this.fobcount =
              that.listdata.fob_total_price *
              (that.listdata.final_payment / 100);
            that.templength = that.listdata.goods_list.length;
            // console.log(that.listdata);
          } else {
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
    },
    //上传图片
    update(e) {
      const jsonUsers = JSON.parse(localStorage.getItem("users"));
      this.loading = true;
      this.showImgurl = "";
      this.jindu = 0;
      let file = e.srcElement.files[0] || e.target.files[0];
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
          /* if(this.images.length>1){
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
          var testqiniu = this.showHeader + response.data.key;
          this.showImgurl = testqiniu;
          this.loading = false;
          /*  let localArr = this.images.map((val,index,arr)=>{
              return arr[index].localSrc;
            })
            if(!~localArr.indexOf(pathName)){
              this.images.push({'src':this.showUrl+response.data.key,'localSrc':pathName});
            }else{
              alert('已上传该图片');
            }*/
        });
    },
    //操作订单
    submitorder() {
      var that = this;
      if (that.listdata.status === "wait_confirm_offer") {
        let agressUrl =
          that.$store.state.headerUrl +
          "/member/order/agree_price/" +
          that.tempid;
        let tempalert = that.$alert;
        that.comment
          .axiosGet(agressUrl, that.$axios, that.$store)
          .then(function(resp) {
            if (resp.data.code === 0) {
              tempalert(resp.data.msg, {
                confirmButtonText: "ok",
                center: true,
                callback: action => {
                  that.getorderdetail();
                }
              });
            } else {
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
      } else if (
        that.listdata.status === "wait_pay" &&
        that.listdata.exec_status < 10
      ) {
        let submitUrl =
          that.$store.state.headerUrl + "member/order/payment_voucher";
        let tempalert = that.$alert;
        let tempdata = {
          order_id: Number(that.$route.query.id),
          /*  account_name:that.paymentAccount,
            account_no:that.paymentNo,*/
          voucher_att: that.showImgurl
        };
        if (tempdata.account_name === "") {
          tempalert("Account name cannot be empty", {
            confirmButtonText: "ok",
            center: true
          });
        } else if (tempdata.account_no === "") {
          tempalert("Account no cannot be empty", {
            confirmButtonText: "ok",
            center: true
          });
        } else if (tempdata.voucher_att === "") {
          tempalert("Payment document cannot be empty", {
            confirmButtonText: "ok",
            center: true
          });
        } else {
          that.comment
            .axiosPost(submitUrl, that.$axios, that.$store, tempdata, tempalert)
            .then(function(resp) {
              if (resp.data.code === 0) {
                tempalert(resp.data.msg, {
                  confirmButtonText: "ok",
                  center: true,
                  callback: action => {
                    that.getorderdetail();
                    that.isaddvoucher = false;
                    that.showImgurl = "";
                  }
                });
              } else {
                tempalert(resp.data.msg, {
                  confirmButtonText: "ok",
                  center: true
                });
              }
            });
        }
      } else if (
        that.listdata.status === "wait_pay" &&
        that.listdata.exec_status === 10
      ) {
        let submitUrl =
          that.$store.state.headerUrl + "member/order/payment_voucher";
        let tempalert = that.$alert;
        let tempimgUrl = "";

        if (that.showImgurl === "") {
          tempimgUrl = that.showImgurl1;
        } else {
          tempimgUrl = that.showImgurl;
        }
        let tempdata = {
          id: Number(that.pay_processid),
          /* account_name:that.paymentAccount,
            account_no:that.paymentNo,*/
          voucher_att: tempimgUrl
        };
        if (tempdata.account_name === "") {
          tempalert("Account name cannot be empty", {
            confirmButtonText: "ok",
            center: true
          });
        } else if (tempdata.account_no === "") {
          tempalert("Account no cannot be empty", {
            confirmButtonText: "ok",
            center: true
          });
        } else if (tempdata.voucher_att === "") {
          tempalert("Payment document cannot be empty", {
            confirmButtonText: "ok",
            center: true
          });
        } else {
          that.comment
            .axiosPut(submitUrl, that.$axios, that.$store, tempdata, tempalert)
            .then(function(resp) {
              if (resp.data.code === 0) {
                tempalert(resp.data.msg, {
                  confirmButtonText: "ok",
                  center: true,
                  callback: action => {
                    that.getorderdetail();
                    that.isaddvoucher = false;
                    that.showImgurl = "";
                  }
                });
              } else {
                tempalert(resp.data.msg, {
                  confirmButtonText: "ok",
                  center: true
                });
              }
            });
        }
      }
    },
    goInfo(type, id) {
      let routeUrl = this.$router.resolve({
        path: "/member/wait/info",
        query: {
          type,
          id
        }
      });
      window.open(routeUrl.href, "_blank");
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.getorderdetail();
      this.getOA();
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
  },
  watch: {
    //监听路由变化，刷新页面
    $route(to, from) {
      this.$router.go(0);
    }
  }
};
</script>

