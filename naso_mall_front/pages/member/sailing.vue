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
  width: 30%;
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
.btn {
  float: right;
  width: 18%;
  font-size: 0.81rem;
  .innerBtn {
    width: 90%;
    margin: 0 0 0 10%;
    color: white;
    font-size: 0.81rem;
  }
}
.items-line {
  .innerBtn {
    background-color: rgb(240, 133, 25);
  }
  .package {
    .title {
      p {
        color: rgb(74, 63, 145);
        width: 25%;
      }
    }
    .value {
      p {
        color: rgb(240, 133, 25);
        width: 25%;
        
      }
    }
  }
}
.items-line1 {
  .innerBtn {
    background-color: rgb(74, 63, 145);
  }
  .package {
    .title {
      padding: 0 0 0 17px;
      p {
        color: rgb(74, 63, 145);
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
.value-title{
    text-align: left!important;
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
          <span>Order No:{{$route.query.sn}}</span>
        </div>
        <div style="order-item" v-if="!datalist||datalist.length === 0">
          <p style="    padding: 10px 0;text-align: center;">No suitable boat</p>
        </div>
        <div class="order-item" v-for="(item,index) in datalist" :key="index">
          <div class="ordertitle">
            <span>Port of departure (pier) /Destination port (pier)</span>
          </div>
          <div class="items-line">
            <div class="yuan"></div>
            <div class="prot">
              <p><span>{{item.pod_en_name}}</span> <span>&nbsp;&nbsp;·&nbsp;&nbsp;{{item.pod_cn_name}}</span></p>
              <p class="p2">by sea · direct · {{item.days}} days</p>
            </div>
            <div class="package">
              <div class="title">
                <p>1 * 20GP</p>
                <p>1 * 40GP</p>
                <p>1 * 40HQ</p>
                <p>surcharge</p>
                <!-- <p>Close/Leave</p> -->
              </div>
              <div class="value">
                <p>${{item.gp20_price|money}}</p>
                <p>${{item.gp40_price|money}}</p>
                <p>${{item.hq40_price|money}}</p>
                <p>surcharge</p>
                <!-- <p>HP1-5，NS4/5</p> -->
              </div>
            </div>
            <div class="btn">
              <el-button class="innerBtn" @click="_booking(item)">booking</el-button>
            </div>
            <div class="clear"></div>
            <div class="lianxian"></div>
          </div>

          <div class="items-line1">
            <div class="yuan1"></div>
            <div class="prot">
              <p> <span>{{item.pol_en_name}}</span> {{item.pol_cn_name}}</p>
              <p class="p2">VSL/VOY：{{item.carrier_en_name}}{{item.carrier_cn_name}}</p>
            </div>
            <div class="package">
              <div class="title">
                <p class="value-title">Date of validity</p>
              </div>
              <div class="value">
                <p >
                  <span class="date1">【Departure date】</span>
                  <span class="date2">{{item.sail_date}}</span>
                  <span class="date1">【Closing date】</span>
                  <span class="date2">{{item.end_date}}</span>
                </p>
              </div>
            </div>
            <div class="btn">
              <el-button class="innerBtn" onclick="$crisp.push(['do', 'chat:open'])">Counseling center</el-button>
            </div>
            <div class="clear"></div>
          </div>
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
  name: "sailing",
  data() {
    return {
      datalist:[],
    };
  },
  methods: {
      _booking(item){
        localStorage.removeItem('ferryData')
      localStorage.setItem(
        "ferryData",
        JSON.stringify(item)
      );
          this.$router.push({path:'/member/booking',query:{sn:this.$route.query.sn}})
      },
      getorderData(){
          let that = this;
          let url = that.$store.state.headerUrl + 'freight/shipping/goods'
          let params = {
            pol:Number(that.$route.query.go),//起运港
            pod:Number(that.$route.query.to),//目的港
            shipping_deadline:that.$route.query.date
          }
            let tempalert = that.$alert;
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert).then( (resp) => {
          if(resp.data.code === 0){
            console.log(resp)
            that.datalist = resp.data.data;
          }
        })
          
      }
  },
  created(){

  },
  mounted() {
     if (localStorage.getItem("users")) {
     this.getorderData();
    }
    
  },
  watch: {}
};
</script>

