<style lang="scss" scoped>
.infoList {
  padding: 0 0 5px 20px;
  .title {
    padding: 0 0 10px 0;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    font-size: 16px;
    .tilte-text {
      float: left;
      color: #4b3f91;
      font-weight: bold;
    }
    .tilte-btn {
      color: #4b3f91;
      text-align: center;
      width: 150px;
      float: right;
      border: 1px solid #4b3f91;
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
    }
  }
  .list {
    margin: 20px 0 0 0;
    font-size: 16px;
    .list-tab {
      overflow: hidden;
      line-height: 30px;
      height: 30px;
      .tabs {
        float: left;
        margin: 0 10px 0 0;
        padding: 0 10px;
        border: 1px solid #ddd;
        border-top: 3px solid #4b3f91;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        cursor: pointer;
      }
      .tabs:nth-of-type(1) {
        width: 100px;
        text-align: center;
      }
      .tabs-active {
        background: #4b3f91;
        color: white;
      }
    }
    .list-content {
      .list-title {
        border: 1px solid #ddd;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        color: #4b3f91;
        font-weight: bold;
        .text1 {
          float: left;
          width: 342px;
          padding: 0 0 0 10px;
        }
        .text2 {
          float: left;
          width: 140px;
        }
        .text3 {
          float: left;
          width: 140px;
        }
        .text4 {
          float: left;
          width: 150px;
        }
        .text5 {
          float: left;
        }
         .text6 {
          float: left;
          width: 75%;
          padding: 0 0 0 10px;
        }
          .text7 {
          float: right;
          width: 20%;
          padding: 0 0 0 10px;
        }
      }
      .list-lu {
        border: 1px solid #ddd;
        .list-li {
          overflow: hidden;
          font-size: 15px;
          color: #544d4d;
          margin: 0 10px;
          border-bottom: 1px solid #ddd;
          .li-title {
            float: left;
            width: 332px;
            padding: 10px 0;
            overflow: hidden;

            .li-img {
              float: left;
              width: 80px;
              height: 80px;
              border: 1px solid #ddd;
            }
            .p-ground {
              float: left;
              width: 240px;
              padding-left: 10px;
              .li-p1 {
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 42px;
                line-height: 20px;
              }
              .li-p2 {
                margin-top: 10px;
              }
            }
          }
          .li-date {
            float: left;
            width: 140px;
            padding: 10px 0 10px 0;
            height: 100px;
            line-height: 80px;
          }
          .li-sender {
            float: left;
            width: 140px;
            padding: 10px 0 10px 0;
            height: 100px;
            line-height: 80px;
          }
          .li-status {
            float: left;
            width: 150px;
            padding: 10px 0 10px 0;
            height: 100px;
            .status-p1 {
              height: 25px;
              margin-top: 13px;
            }
            .status-p2 {
              height: 25px;
            }
          }

           .li-title1 {
              float: left;
            width: 75%;
            padding: 10px 0;
            overflow: hidden;
            .p-ground {
              float: left;
              width: 100%;
              padding-left: 10px;
              .li-p1 {
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 42px;
                line-height: 42px;
              }
              .li-p2 {
                margin-top: 10px;
              }
            }
          }
          .li-action {
            float: left;
            padding: 10px 0 10px 0;
            height: 100px;
            .action-btn {
              padding: 0 15px;
              border: 1px solid #ddd;
              height: 38px;
              line-height: 36px;
              margin-top: 20px;
              background: #4b3f91;
              border-radius: 5px;
              color: white;
              cursor: pointer;
            }
          }
           .li-action1 {
            float: right;
            width: 20%;
            padding: 10px 0 10px 0;
            height: 40px;
            text-align: center;
            .action-btn {
              padding: 0 15px;
              border: 1px solid #ddd;
              height: 38px;
              line-height: 36px;
              // margin-top: 20px;
              background: #4b3f91;
              border-radius: 5px;
              color: white;
              cursor: pointer;
              text-align: center;
            }
          }
          @media screen and (max-width: 1200px) {
            .li-title {
              width:265px;
              .p-ground {
                float: left;
                width: 165px;
                .li-p1 {
                  // padding-top: 10px;
                  height: 60px;
                  line-height: 16px;
                }
                .li-p2 {
                  margin-top: -2px;
                }
              }
            }
            .li-title1{
              width: 75%;
              .p-ground {
                float: left;
                width: 100%;
                .li-p1 {
                  // padding-top: 10px;
                  height: 40px;
                  line-height: 40px;
                  overflow: hidden;
                }
                .li-p2 {
                  margin-top: -2px;
                }
              }
            }
            .li-date {
              width: 100px;
            }
            .li-sender {
              width: 110px;
            }
            .li-status {
              width: 120px;
            }
            .li-action1{
              width: 20%;
            }
          }
        }
        .list-li:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
  .productpage-content {
    margin: 20px 0;
    text-align: center;
  }
  // .el-breadcrumb {
  //   border-break: none;
  // }
}
.shownewreplied {
  float: left;
  width: 25px;
  text-align: center;
  padding: 10px 0px;
  height: 100px;
  line-height: 80px;
  position: relative;
  .repliedicon {
    background: red;
    height: 10px;
    width: 10px;
    color: red;
    position: absolute;
    top: 47%;
    border-radius: 50%;
  }
}
.shownewreplied1 {
  float: left;
  width: 25px;
  text-align: center;
  padding: 10px 0px;
  height: 55px;
  line-height: 55px;
  position: relative;
  .repliedicon {
    background: red;
    height: 10px;
    width: 10px;
    color: red;
    position: absolute;
    top: 47%;
    border-radius: 50%;
  }
}
.shownum{
     color: red;
    margin: 0 5px;
}
</style>
<style>
.el-pagination__jump {
  font-size: 0px !important;
}
</style>
<template>
  <section class="container">
    <div class="infoList">
      <div class="title">
        <p class="tilte-text">Message Centre</p>
        <div class="tilte-btn" @click="gonew">+New Message</div>
      </div>
      <div class="list">
        <div class="list-tab">
          <div class="tabs" :class="{'tabs-active':status === ''}" @click="changestatus('')"> <span>All</span>    <span v-if="replied!= 0||unread!= 0"  class="shownum">({{replied+unread}})</span> </div>
          <!-- <div
            class="tabs"
            :class="{'tabs-active':status === 'pending'}"
            @click="changestatus('pending')"
          >Pending for reply</div> -->
          <div
            class="tabs"
            :class="{'tabs-active':status === 'inquire'}"
            @click="changestatus('inquire')"
          > <span> Inquiry Message</span>   <span v-if="replied!= 0" class="shownum">({{replied}})</span></div>
          <div
            class="tabs"
            :class="{'tabs-active':status === 'nasomessage'}"
            @click="changestatus('nasomessage')"
          > <span>Naso Message</span>    <span v-if="unread!= 0"  class="shownum">({{unread}})</span></div>
        </div>
        <div class="list-content">
          <div v-if="status !== 'nasomessage'"  class="list-title">
            <div class="shownewreplied"></div>
            <div class="text1">Title</div>
            <div class="text2">Date</div>
            <div class="text3">Sender</div>
            <div class="text4">Status</div>
            <div class="text5">Action</div>
          </div>
          <div v-if="status === 'nasomessage'"  class="list-title">
            <div class="shownewreplied1"></div>
            <div class="text6">Title</div>
            <div class="text7">Action</div>
          </div>
          <div class="list-lu">
            <div v-if="status !== 'nasomessage'" class="list-li" v-for="(item,index,key) in orderlist" :key="key">
              <div class="shownewreplied">
                <p v-if="item.status ==='replied'" class="repliedicon"></p>
              </div>
              <div class="li-title">
                <img class="li-img" :src="item.goods_img | noImg100x100()" height="164" width="164">
                <div class="p-ground">
                  <p class="li-p1">{{item.title}}</p>
                  <p class="li-p2">nquiry ID：{{item.id}}</p>
                </div>
              </div>
              <div class="li-date">{{comment.formate('yyyy-MM-dd',new Date(item.update_time*1000))}}</div>
              <div class="li-sender">{{item.naso_user.nickname}}</div>
              <div class="li-status">
                <p class="status-p1">{{item.status}}</p>
                <p class="status-p2">
                  Pending:
                  <span v-if="item.days > 0">{{item.days}}D</span>
                  <span v-if="item.hours > 0">{{item.hours}}H</span>
                  <span v-if="item.hours <= 0&& item.days <= 0">0H</span>
                </p>
              </div>
              <div class="li-action">
                <div class="action-btn" @click="goview(item.id,item.type)">View Update</div>
              </div>
            </div>
            <div v-if="status === 'nasomessage'" class="list-li" v-for="(item,index,key) in orderlist" :key="key">
               <div class="shownewreplied1">
                <p v-if="item.status ==='unread'" class="repliedicon"></p>
              </div>
              <div class="li-title1">
                <div class="p-ground">
                  <p class="li-p1">{{item.title}}</p>
                </div>
              </div>
              <div class="li-action1">
                <!-- <div class="action-btn" @click="goview(item.id,item.type)">View Update</div> -->
                <div class="action-btn" @click="goview(item.id,'station_news')">View Update</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="productpage-content">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :current-page="page"
          @current-change="handleCurrentChange"
          :page-size="limit"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </section>
</template>

<script>
import { noImg100x100 } from "~/plugins/filters.js";
export default {
  name: "infoList",
  scrollToTop: true,
  data() {
    return {
      total: null,
      replied:0,
      unread:0,
      limit: 10,
      page: 1,
      orderlist: [],
      token: "",
      status: ""
    };
  },
  methods: {
    getDataList() {
      let that = this;
      let url = that.$store.state.headerUrl + "message_list";
      let params = {};
      if(that.status ==='nasomessage'){
params = {
        page: that.page,
        limit: that.limit,
        // status: '',
        type:'station_news'
      };
      }else if(that.status ==='inquire'){
params = {
        page: that.page,
        limit: that.limit,
        // status: that.status,
         type:'inquire'
      };
      }else{
        params = {
        page: that.page,
        limit: that.limit,
         type:''
      };
      }
      let tempalert = that.$alert;
      that.comment
        .axiosPost(url, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          console.log(resp.data.data);
          if (resp.data.code === 0) {
            that.orderlist = resp.data.data.list;
            that.total = resp.data.data.total;
            if(resp.data.data.replied !=undefined){
 that.replied = Number(resp.data.data.replied);
            }
            if(resp.data.data.replied !=undefined){
 that.replied = Number(resp.data.data.replied);
            }
            that.unread = Number(resp.data.data.unread);
            for (let i = 0; i < that.orderlist.length; i++) {
              if (that.orderlist[i].update_time === 0) {
                var date2 = new Date(); //结束时间
                var date3 =
                  date2.getTime() - that.orderlist[i].create_time * 1000; //时间差的毫秒数
                //计算出相差天数
                that.orderlist[i].days = Math.floor(date3 / (24 * 3600 * 1000));
                //计算出小时数
                var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
                that.orderlist[i].hours = Math.floor(leave1 / (3600 * 1000));
              } else {
                var date2 = new Date(); //结束时间
                var date3 =
                  date2.getTime() - that.orderlist[i].update_time * 1000; //时间差的毫秒数
                //计算出相差天数
                that.orderlist[i].days = Math.floor(date3 / (24 * 3600 * 1000));
                //计算出小时数
                var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
                that.orderlist[i].hours = Math.floor(leave1 / (3600 * 1000));
              }
            }
          }
        });
    },
    changestatus(status) {
      this.status = status;
      this.getDataList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getDataList();
    },
    gonew() {
      this.$router.push({ name: "newMessage" });
    },
    goview(id, type) {
      if (type === "inquire") {
        this.$router.push({ name: "receivedReply", query: { id: id } });
      }else if(type === "station_news"){
        this.$router.push({ path: "stationMessageDetails", query: { id: id } });
      } else {
        this.$router.push({ name: "advisory-id", params: { id: id } });
      }
    }
  },
  mounted() {
if(localStorage.getItem("users")){
  this.token = JSON.parse(localStorage.getItem('users')).token;
         setTimeout(()=>{
 if (this.$route.query.status) {
      this.changestatus(this.$route.query.status);
    } else {
      this.getDataList();
    }
    },20)
   
    // 增加分页 GO按钮
    let parentDom = document.getElementsByClassName("el-pagination")[0];
    let _dom = document.createElement("span");
    // _dom.className  =  'go_style';
    _dom.setAttribute(
      "style",
      "border: 1px solid #dedede;border-radius: 4px;line-height: 26px;color: #666;margin-left:8px;cursor: pointer"
    );
    _dom.innerHTML = "GO";
    parentDom.appendChild(_dom);
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

