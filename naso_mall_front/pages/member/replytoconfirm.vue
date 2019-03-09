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
.content-sailing {
  border: 1px solid #ddd;
  padding: 0 10px 10px 10px;
}
.orderno {
  line-height: 45px;
  color: #4b3f91;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}
.ordertitle {
  line-height: 45px;
  font-size: 14px;
  color: rgb(51, 51, 51);
}
.items-line {
  position: relative;
}
.order-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
.order-item:last-of-type {
  border-bottom: none;
}
.items-line1 {
  position: relative;
  overflow: hidden;
  margin-top: 10px;
}
.yuan {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4b3f91;
}
.lianxian {
  height: 48px;
  width: 2px;
  background-color: #4b3f91;
  position: absolute;
  top: 18px;
  left: 9px;
}
.yuan1 {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(240, 133, 25);
}
.prot {
  display: inline-block;
  width: 40%;
  padding-left: 20px;
  font-size: 0.73rem;
  .p2 {
    color: rgb(153, 153, 153);
  }
}
.package {
  display: inline-block;
  width: 50%;
  font-size: 0.73rem;
  .title {
    position: relative;
    p {
      display: inline-block;
      text-align: center;
    }
  }
  .value {
    position: relative;
    p {
      display: inline-block;
      text-align: center;
    }
  }
}
.items-line {
  .package {
    .title {
      p {
        color: rgb(74, 63, 145);
        width: 19%;
      }
      p:last-of-type {
        width: 24%;
      }
    }
    .value {
      p {
        color: rgb(240, 133, 25);
        width: 19%;
      }
      p:last-of-type {
        width: 24%;
      }
    }
  }
}
.items-line1 {
  .package {
    .title {
      padding: 0 0 0 17px;
      p {
        color: rgb(74, 63, 145);
        width: 19%;
      }
      p:last-of-type {
        width: 24%;
      }
    }
    .value {
      padding: 0 0 0 12px;
    }
  }
}
.clear {
  clear: both;
}
.date1 {
  color: black;
}
.date2 {
  color: rgb(153, 153, 153);
  margin: 0 10px;
}
.value-title {
  text-align: left !important;
}
.schedule {
  line-height: 60px;
  color: #4b3f91;
  font-weight: bold;
  overflow: hidden;
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
  .schedule-btn {
    float: right;
    margin-top: 10px;
    width: 150px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    font-size: 14px;
    color: white;
    background-color: #4b3f91;
  }
}
.Chargedetails {
  margin-top: 20px;
}
.show-item {
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  .items {
    float: left;
    width: 33.33%;
    line-height: 30px;
    overflow: hidden;
    .items-left {
      float: left;
    }
  }
}
.show-count {
  line-height: 50px;
  font-size: 14px;
  margin-top: 10px;
  .show-label {
    color: rgb(74, 63, 145);
    font-size: 16px;
  }
  .show-span {
    color: rgb(240, 133, 25);
    margin-left: 40px;
    font-size: 16px;
  }
  .count-btn {
    float: right;
    padding: 0;
    margin-top: 10px;
    width: 150px;
    height: 30px;
    line-height: 30px;
    background-color: rgb(240, 133, 26);
    color: white;
  }
}
</style>

<template>
  <section class="container">
    <div class="forwarding">
      <div class="forwarding-title">
        <p>Freight forwarding</p>
      </div>
      <div class="content-sailing">
        <div class="orderno">
          <span>Order No:{{replytoconfirmData.sn}}</span>
        </div>
        <div class="order-item">
          <div class="ordertitle">
            <span>Port of departure (pier) /Destination port (pier)</span>
          </div>
          <div class="items-line">
            <div class="yuan"></div>
            <div class="prot">
              <p>
                <span>{{goods_info.pod_en_name}}</span>
                <span>&nbsp;&nbsp;·&nbsp;&nbsp;{{goods_info.pod_cn_name}}</span>
              </p>
              <p class="p2">by sea · direct · 23 days</p>
            </div>
            <div class="package">
              <div class="title">
                <p>{{shipping.gp20_num}} * 20GP</p>
                <p>{{shipping.gp40_num}} * 40GP</p>
                <p>{{shipping.hq40_num}} * 40HQ</p>
                <p>surcharge</p>
              </div>
              <div class="value">
                <p>${{goods_info.gp20_price}}</p>
                <p>${{goods_info.gp40_price}}</p>
                <p>${{goods_info.hq40_price}}</p>
                <p>surcharge</p>
              </div>
            </div>
            <div class="clear"></div>
            <div class="lianxian"></div>
          </div>

          <div class="items-line1">
            <div class="yuan1"></div>
            <div class="prot">
              <p>
                <span>{{goods_info.pol_en_name}}</span>
                <span>&nbsp;&nbsp;·&nbsp;&nbsp;{{goods_info.pol_cn_name}}</span>
              </p>
              <p class="p2">VSL/VOY：{{goods_info.carrier_en_name}}{{goods_info.carrier_cn_name}}</p>
            </div>
            <div class="package">
              <div class="title">
                <p class="value-title">Date of validity</p>
              </div>
              <div class="value">
                <p>
                  <span class="date1">【Departure date】</span>
                  <span class="date2">{{goods_info.sail_date}}</span>
                  <span class="date1">【Closing date】</span>
                  <span class="date2">{{goods_info.end_date}}</span>
                </p>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="content-sailing Chargedetails">
        <div class="schedule">
          <img class="schedule-img" src="../../assets/img/costInfo.png">
          <span class="schedule-text">Charge Details</span>
          <el-button class="schedule-btn" onclick="$crisp.push(['do', 'chat:open'])">Counseling center</el-button>
        </div>
        <div class="show-item">
          <div>
            <div
              class="items"
              v-for="(item,index) in surcharge"
              :key="index"
              v-if="item.price !== '0.00' && item.price !== '' "
            >
              <label class="items-left">{{item.surcharge_en_name}} :</label>
              <div class="items-left">
                <p
                  v-if="item.price !== '0.00' && item.price !== '' "
                >{{item.currency}} &nbsp;&nbsp; {{item.price}}</p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="items"
              v-for="(item,index) in surcharge"
              :key="index"
              v-if="item.price === '0.00' || item.price === ''"
            >
              <label class="items-left">{{item.surcharge_en_name}} :</label>
              <div class="items-left">
                <p
                  v-if="item.price === '0.00' || item.price === '' "
                >20'GP：&nbsp;&nbsp;{{item.currency}} &nbsp;&nbsp; {{item.gp20_price}} &nbsp;X &nbsp;{{shipping.gp20_num}}</p>
                <p
                  v-if="item.price === '0.00' ||item.price === '' "
                >40'GP：&nbsp;&nbsp;{{item.currency}} &nbsp;&nbsp; {{item.gp40_price}} &nbsp;X &nbsp;{{shipping.gp40_num}}</p>
                <p
                  v-if="item.price === '0.00' || item.price === '' "
                >40'HQ：&nbsp;&nbsp;{{item.currency}} &nbsp;&nbsp; {{item.hq40_price}} &nbsp;X &nbsp;{{shipping.hq40_num}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="show-count">
          <label class="show-label">Estimate the cost :</label>
          <span class="show-span">USD {{UsdcountValue}}</span>
          <span class="show-span">CNY {{CnycountValue}}</span>
          <el-button class="count-btn" @click="_sureorder" :disabled="replytoconfirmData.status ==='wait_offer'">Confirm to entrust</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import changeuserInfobar from "../../components/ordercommon/changeuserInfobar.vue";
export default {
  components: {
    changeuserInfobar: changeuserInfobar
  },
  name: "replytoconfirm",
  data() {
    return {
      replytoconfirmData: {},
      shipping: {},
      goods_info: {},
      surcharge: [],
      UsdcountValue: null,
      CnycountValue: null
    };
  },
  methods: {
    //计算总价
    _count() {
      let tempcount = 0; //中间变量，统计usd附加费
      let tempcount1 = 0; //中间变量，统计cny附加费
      if (this.surcharge) {
        for (let i = 0; i < this.surcharge.length; i++) {
          if (
            this.surcharge[i].price === "0.00" ||
            this.surcharge[i].price === ""
          ) {
            if (this.surcharge[i].currency === "CNY") {
              tempcount1 =
                tempcount1 +
                Number(this.shipping.gp20_num) *
                  Number(this.surcharge[i].gp20_price) +
                Number(this.shipping.gp40_num) *
                  Number(this.surcharge[i].gp40_price) +
                Number(this.shipping.gp40_num) *
                  Number(this.surcharge[i].hq40_price);
            } else {
              tempcount =
                tempcount +
                Number(this.shipping.gp20_num) *
                  Number(this.surcharge[i].gp20_price) +
                Number(this.shipping.gp40_num) *
                  Number(this.surcharge[i].gp40_price) +
                Number(this.shipping.gp40_num) *
                  Number(this.surcharge[i].hq40_price);
            }
          } else {
            if (this.surcharge[i].currency === "CNY") {
              tempcount1 = tempcount1 + Number(this.surcharge[i].price);
            } else {
              tempcount = tempcount + Number(this.surcharge[i].price);
            }
          }
        }
      }
      this.CnycountValue = tempcount1;
      this.UsdcountValue =
        Number(this.shipping.gp20_num) * Number(this.goods_info.gp20_price) +
        Number(this.shipping.gp40_num) * Number(this.goods_info.gp40_price) +
        Number(this.shipping.gp40_num) * Number(this.goods_info.hq40_price) +
        tempcount;
    },
    //确认报价
    _sureorder() {
      let that = this;
      let url = that.$store.state.headerUrl + "member/freight_order_from_mall";
      let params = {
        order_id: Number(that.replytoconfirmData.id)
      };
      let tempalert = that.$alert;
      that.comment
        .axiosPut(url, that.axios, that.$store, params, tempalert)
        .then(resp => {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true,
              callback: action => {
                that.$router.push("/member/forwarding");
              }
            });
          }
        })
        .catch(error => {});
    }
  },

  mounted() {
    if (localStorage.getItem("replytoconfirmData")) {
      setTimeout(() => {
        this.replytoconfirmData = JSON.parse(
          localStorage.getItem("replytoconfirmData")
        );
        this.shipping = JSON.parse(
          localStorage.getItem("replytoconfirmData")
        ).shipping;
        this.goods_info = JSON.parse(
          localStorage.getItem("replytoconfirmData")
        ).shipping.goods_info;
        this.surcharge = JSON.parse(
          localStorage.getItem("replytoconfirmData")
        ).shipping.surcharge;
        this._count();
      }, 500);
    } else {
      this.$router.push("/member/forwarding");
    }
  },
  watch: {}
};
</script>

