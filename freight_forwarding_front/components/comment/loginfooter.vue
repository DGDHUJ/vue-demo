<style scoped lang="scss">
.footer-outer {
  .line {
    background: #4a3f91;
    height: 5px;
  }
  .footer {
    background: white;
    color: black;
    .content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      .item {
        text-align: center;
      }
      .item1 {
        width: 25%;
        padding: 10px 20px 40px 20px;
        .title {
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 30px 0 20px 80px;
        }
        .link {
          padding: 0 0 0 80px;
          .p1 {
            text-align: left;
            display: inline-block;
            width: 30%;
            cursor: pointer;
            padding: 3px 0;
            font-size: 0.93rem;
          }
          .p2 {
            text-align: left;
            display: inline-block;
            width: 70%;
            cursor: pointer;
            padding: 3px 0;
            font-size: 0.93rem;
          }
        }
      }
      .item2 {
        width: 25%;
        padding: 10px 20px 40px 0px;
        .title {
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 30px 0 20px 80px;
        }
        .link {
          .p1 {
            text-align: left;
            width: 100%;
            cursor: pointer;
            padding: 3px 3px 3px 80px;
            font-size: 0.93rem;
          }
        }
      }
      .item3 {
        width: 25%;
        padding: 10px 20px 40px 0px;
        .title {
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 30px 0 20px 80px;
        }
        .link {
          position: relative;
          overflow: hidden;
          .code {
            text-align: left;
            padding-left: 80px;
            img {
              width: 120px;
              height: 120px;
            }
          }
          .text {
            position: absolute;
            margin-left: 31%;
            transform: translate(0, 50%);
            font-size: 0.93rem;
          }
        }
      }
      .item4 {
        padding: 10px 0px 40px 0px;
        width: 25%;
        .item4showimg {
          float: left;
          margin: 30px 0 0 0;
          width: 50px;
          img {
            width: 100%;
          }
        }
        .title {
          text-align: left;
          margin-left: 80px;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 30px 0 10px 0;
        }
        .phone {
          text-align: left;
          margin-left: 80px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #4b3f91;
        }
      }
    }
    .banquan {
      text-align: center;
      padding: 0px 0 60px 0;
      .banquantext {
        font-size: 1rem;
        font-weight: bold;
      }
      .showhr {
        margin-bottom: 30px;
        height: 24px;
        overflow: hidden;
      }
      .hr-left {
        float: left;
        width: 48%;
        background-color: #4b3f91;
        margin-top: 10px;
        height: 4px;
      }
      .hr-dian {
        float: left;
        width: 4%;
      }
      .hr-right {
        float: right;
        width: 48%;
        background-color: #4b3f91;
        margin-top: 10px;
        height: 4px;
      }
    }
  }
}
</style>
<template>
  <div class="footer-outer">
    <div class="line"></div>
    <div class="footer layout">
      <!-- <div class="pageouter"></div> -->
      <div class="">
        <div class="content">
          <div class="item item1">
            <div class="title">网站导航</div>
            <div class="link">
              <p class="p1">首页</p>
              <p class="p2">合作伙伴</p>
              <p class="p1">订舱</p>
              <p class="p2">资讯中心</p>
              <p class="p1">拖车</p>
              <p class="p2">关于纳信</p>
              <p class="p1">报关</p>
              <p class="p2">服务协议</p>
            </div>
          </div>
          <div class="item item2">
            <div class="title">服务帮助</div>
            <div class="link">
              <p class="p1">订舱服务</p>

              <p class="p1">拖车服务</p>

              <p class="p1">报关服务</p>
            </div>
          </div>
          <div class="item item3">
            <div class="title">诚邀合作</div>
            <div class="link">
              <div class="code">
                <img src="../../assets/img/code.png">
              </div>
            </div>
          </div>
          <div class="item item4">
            <div class="item4showimg">
              <img src="../../assets/img/customer.png" alt>
            </div>
            <div class="title">客服热线</div>
            <div class="phone">0757-82581931</div>
          </div>
        </div>
        <div class="banquan">
          <div class="showhr">
            <hr class="hr-left">
            <div class="hr-dian">
              <img src="../../assets/img/dian.png" alt>
            </div>
            <hr class="hr-right">
          </div>

          <p
            class="banquantext"
          >Copyright © 2004 - 2018 nasotrading.com 版权所有|消费者维权热线：0757-82581931 经营证照</p>
        </div>
      </div>
      <!-- <div class="pageouter"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "webfooter",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
