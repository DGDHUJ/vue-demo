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
  padding: 0 10px 20px 10px;
}
.orderno {
  line-height: 45px;
  color: #4b3f91;
  font-size: 14px;
}
.ordertitle {
  line-height: 45px;
  font-size: 14px;
  color: rgb(51, 51, 51);
}
.order-items {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}
.items {
  overflow: hidden;
  line-height: 25px;
  font-size: 14px;
  .label-left {
    float: left;
    margin-right: 20px;
  }
  .label-right {
    float: left;
    .right-span {
      margin-left: 40px;
    }
  }
}
.show-title {
  line-height: 45px;
  font-size: 14px;
}
.btns {
  overflow: hidden;
  margin-top: 30px;
  font-size: 14px;
  .nextBtn {
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0;
    background-color: #4b3f91;
    color: white;
    width: 160px;
  }
  .previousBtn {
    float: left;
    margin-left: 40px;
    color: rgb(240, 133, 25);
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .previousBtn:active {
    font-size: 15px;
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
          <span>Order No:{{orderInfo.sn}}</span>
        </div>

        <div class="order-items">
          <div class="items">
            <label>Port of departure (pier) :</label>
            <span>{{port_pol_info.country_en_name}}</span>
            <span
              v-if="port_pol_info.en_name!==''"
            >&nbsp;&nbsp;·&nbsp;&nbsp;{{port_pol_info.en_name}}</span>
            <span>{{port_pol_info.country_cn_name}}</span>
            <span
              v-if="port_pol_info.cn_name!==''"
            >&nbsp;&nbsp;·&nbsp;&nbsp;{{port_pol_info.cn_name}}</span>
          </div>
          <div class="items">
            <label>Destination port (pier) :</label>
            <span>{{port_info.country_en_name}}</span>
            <span v-if="port_info.en_name!==''">&nbsp;&nbsp;·&nbsp;&nbsp;{{port_info.en_name}}</span>
            <span>{{port_info.country_cn_name}}</span>
            <span v-if="port_info.cn_name!==''">&nbsp;&nbsp;·&nbsp;&nbsp;{{port_info.cn_name}}</span>
          </div>
          <div class="items">
            <label>Order No :</label>
            <span>{{orderInfo.sn}}</span>
          </div>
          <div class="items">
            <label>Details of your order——</label>
          </div>
          <div class="items">
            <label class="label-left">Case cargo details:</label>
            <div class="label-right">
              <p>
                <label>{{orderInfo.gp20_num}}× 20'GP</label>
                <!-- <span class="right-span">Weight(KG) 10 KG</span> -->
              </p>
              <p>
                <label>{{orderInfo.gp40_num}}× 40'GP</label>
                <!-- <span class="right-span">Weight(KG) 10 KG</span> -->
              </p>
              <p>
                <label>{{orderInfo.hq40_num}}× 40'HQ</label>
                <!-- <span class="right-span">Weight(KG) 10 KG</span> -->
              </p>
            </div>
          </div>
        </div>

        <div class="show-title">
          <span>Please select your booking date：</span>
        </div>
        <el-date-picker v-model="selectdate" type="date" placeholder="Booking date"></el-date-picker>

        <div class="btns">
          <el-button class="nextBtn" @click="_next_step">NEXT STEP</el-button>
          <p class="previousBtn" @click="_previous_step">
            <i class="el-icon-arrow-left"></i> PREVIOUS STEP
          </p>
        </div>
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
  name: "selectDate",
  data() {
    return {
      ordernum: null,
      selectdate: null,
      orderInfo: {},
      port_pol_info: {},
      port_info: {}
    };
  },
  methods: {
    _previous_step() {
      this.$router.push("/member/forwarding");
    },
    _next_step() {
      // Cookies.set(
      //   "tempdate",
      //   this.comment.formate("yyyy-MM-dd", this.selectdate)
      // );
      // Cookies.set("tempsn", this.orderInfo.sn);
      this.$router.push({path:"/member/sailing",query:{date:this.comment.formate("yyyy-MM-dd", this.selectdate),sn:this.orderInfo.sn,go:this.orderInfo.pol_id,to:this.orderInfo.contact_pod_id,id:this.orderInfo.id}});
    },
    _getorderInfo() {
      let that = this;
      let url =
        that.$store.state.headerUrl +
        "member/order_by_sn/" +
        that.$route.query.no;
      let tempalert = that.$alert;
      that.comment.axiosGet(url, that.$axios, that.$store).then(function(resp) {
        if (resp.data.code === 0) {
          console.log(resp);
          that.orderInfo = resp.data.data;
          that.port_pol_info = resp.data.data.port_pol_info;
          that.port_info = resp.data.data.port_info;
        } else {
          // tempalert(resp.data.msg, {
          //   confirmButtonText: 'ok',
          //   center:true,
          //   callback: action => {
          //     that.getcity();
          //   }
          // });
        }
      });
    }
  },
  mounted() {
     if (localStorage.getItem("users")) {
       this._getorderInfo();
    }
  
  },
  watch: {}
};
</script>

