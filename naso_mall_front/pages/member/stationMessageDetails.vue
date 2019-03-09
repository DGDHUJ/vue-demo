<style lang="scss" scoped>
.nasomessagedetail {
  .neod {
    border-radius: 5px;
    background: #4b3f91;
    color: white;
    padding: 5px 10px;
  }
  margin-left: 20px;
  .nasomessagedetail-title {
    line-height: 40px;
    font-size: 1rem;
    color: #4b3f91;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }
  .nasomessagedetail-content {
    padding: 10px 20px 0 20px;
    border: 1px solid #ddd;
    margin: 10px 0 0 0;
  }
  .showcontent {
    padding: 10px;
  }
  .titleout {
    line-height: 40px;
    height: 40px;
    font-size: 1.1rem;
    .content-title {
      // display: inline-block;
      width: 100%;
      // overflow: hidden;
    }
    .content-date {
      // display: inline-block;
      float: right;
      width: 20%;
    }
  }
}
.showhtml {
  margin-top: 30px;
  font-size: 1rem;
}
</style>

<template>
  <section class="container">
    <div class="nasomessagedetail">
      <div class="nasomessagedetail-title">
        <p>Naso Message</p>
      </div>
      <div class="showcontent">
        <div class="titleout">
          <p class="content-title">{{messageData.title}}</p>
          <p v-if="showDate" class="content-date">{{showDate}}</p>
        </div>
        <div class="showhtml">
          <div v-html="contentData"></div>
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
  name: "stationMessageDetails",
  data() {
    return {
      messageData: {},
      showDate: "",
      contentData: ""
    };
  },
  methods: {
    //站内消息设置位已读
    setalready() {
      let url =
        this.$store.state.headerUrl +
        "station_msg/set_read/" +
        this.$route.query.id;
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            return;
          }
        })
        .catch(error => {
          return;
        });
    },
    //获取消息详情
    getMessageData() {
      let url = this.$store.state.headerUrl + "message/" + this.$route.query.id;
      this.comment
        .axiosGet(url, this.$axios, this.$store)
        .then(resp => {
          if (resp.data.code === 0) {
            this.messageData = resp.data.data;
            this.showDate = this.comment.formate(
              "yyyy-MM-dd hh:mm:ss",
              new Date(Number(resp.data.data.update_time) * 1000)
            );
            this.contentData = resp.data.data.record_list[0].content;
            //加载完之后将消息设为已读状态
            // this.setalready();
          }
        })
        .catch(error => {
          return;
        });
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      //获取站内消息内容
      this.token = JSON.parse(localStorage.getItem("users")).token;
      this.users = this.$store.state.users;
       this.getMessageData();
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

