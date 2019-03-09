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
.forwarding-ties {
  padding: 0 20px;
  font-size: 14px;
  margin: 20px 0;
}
.forwarding-input {
  padding: 0 20px;
  margin: 20px 0;
  font-size: 14px;
  .orderinput {
    width: 300px;
  }
}

.forwarding-subBtn {
  padding: 0 20px;
  margin: 20px 0;
  font-size: 14px;
  .subBtn {
    width: 300px;
    background-color: rgb(74, 63, 145);
    color: white;
  }
}
.forwarding-list {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  .list-title {
    line-height: 45px;
    font-size: 1rem;
    color: #4b3f91;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    span {
      margin-left: 10px;
    }
  }
  .list-item {
    line-height: 45px;
    border-bottom: 1px dashed #ddd;
    height: 45px;
    overflow: hidden;
    p {
      float: left;
    }
    .ordernum {
      width: 20%;
      white-space: nowrap;
      // 文本溢出显示省略号
      text-overflow: ellipsis;
      // 溢出的部分隐藏
      overflow: hidden;
    }
    .departure {
      width: 20%;
      white-space: nowrap;
      // 文本溢出显示省略号
      text-overflow: ellipsis;
      // 溢出的部分隐藏
      overflow: hidden;
    }
    .and {
      margin: -4px 20px 0 20px;
      float: left;
      margin-top: 19px;
    }
    .destination {
      width: 20%;
      white-space: nowrap;
      // 文本溢出显示省略号
      text-overflow: ellipsis;
      // 溢出的部分隐藏
      overflow: hidden;
    }
    .container {
      margin-left: 10px;
      width: 22%;
      white-space: nowrap;
      // 文本溢出显示省略号
      text-overflow: ellipsis;
      // 溢出的部分隐藏
      overflow: hidden;
    }
    .view {
      width: 65px;
      padding: 0;
      height: 30px;
      line-height: 30px;
      background-color: rgb(74, 63, 145);
      color: white;
    }
  }
  .list-item:last-of-type {
    border-bottom: none;
  }
}
.allorder-pagination {
  text-align: center;
  margin-top: 20px;
}
</style>

<template>
  <section class="container">
    <div class="forwarding">
      <div class="forwarding-title">
        <p>Freight forwarding</p>
      </div>
      <div class="forwarding-ties">
        <span>To use the booking service, please enter your order number</span>
      </div>
      <div class="forwarding-input">
        <el-input class="orderinput" v-model="ordernum" placeholder></el-input>
      </div>
      <div class="forwarding-subBtn">
        <el-button class="subBtn" @click="selectDate">Submit</el-button>
      </div>
      <div class="forwarding-list">
        <div class="list-title">
          <i class="icon iconfont icon-huoyunche menu-item-span"></i>
          <span>My Freight forwarding Order</span>
        </div>
        <div class="list-item" v-for="(item,index) in listData" :key="index">
          <p class="ordernum">{{item.sn}}</p>
          <p class="departure">
            <span>{{item.shipping.goods_info.pol_en_name}}</span>
            <!-- &nbsp;&nbsp; -->
            <!-- <span>{{item.shipping.goods_info.pol_cn_name}}</span> -->
          </p>
          <img class="and" src="../../assets/img/and.png">
          <p class="destination">
            <span>{{item.shipping.goods_info.pod_en_name}}</span>
            <!-- &nbsp;&nbsp; -->
            <!-- <span>{{item.shipping.goods_info.pod_cn_name}}</span> -->
          </p>
          <p class="container">{{item.shipping.gp20_num}}*20GP&nbsp;&nbsp;{{item.shipping.gp40_num}}*40GP&nbsp;&nbsp;{{item.shipping.hq40_num}}*40HQ</p>
          <el-button class="view"  @click="_godetails(item)">view</el-button>
        </div>
        <div class="allorder-pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="Number($route.query.page)"
            @current-change="handleCurrentChange"
            :page-size="limit"
            :total="count"
          ></el-pagination>
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
  name: "forwarding",
  data() {
    return {
      ordernum: null,
      listData: [],
      limit: 5,
      count: 0
    };
  },
  methods: {
    //分页切换
    handleCurrentChange(val) {
      this.$router.push({
        path: this.$route.path,
        query: {
          page: val
        }
      });
    },
    //跳转到详情页
    _godetails(item) {
      if(item.status === 'wait_confirm_offer'||item.status === 'wait_offer'){
        localStorage.setItem('replytoconfirmData',JSON.stringify(item));
         this.$router.push("/member/replytoconfirm");
      }else{
         this.$router.push({path:"/member/forwardingdetail",query:{id:item.id}});
      }
     
    },
    //发起订单--选择日期
    selectDate() {
      this.$router.push({
        path: "/member/selectDate",
        query: { no: this.ordernum }
      });
    },
    //获取订单列表数据
    getDataList() {
      let that = this;
      let url = that.$store.state.headerUrl + "member/freight_shipping_order";
      let params = {
        page: Number(this.$route.query.page) || 1,
        limit: 5
      };
      let tempalert = that.$alert;
      that.comment
        .axiosPost(url, that.$axios, that.$store, params, tempalert)
        .then(resp => {
          if (resp.data.code === 0) {
            that.listData = resp.data.data.list;
            that.count = resp.data.data.count;
            console.log(that.listData);
          }
        })
        .catch(error => {});
    }
  },
  mounted() {
     if(localStorage.getItem("users")){
         this.getDataList();
    }
   
  }
};
</script>

