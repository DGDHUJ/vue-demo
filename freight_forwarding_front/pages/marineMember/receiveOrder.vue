<style scoped lang="scss">
.receiveOrder {
  margin-top: 40px;
  .receiveOrder-header {
    background: white;
    font-size: 0.875rem;
    overflow: hidden;
    padding: 20px;
    p {
      display: inline-block;
      height: 40px;
      line-height: 40px;
    }
    p:nth-of-type(2) {
      background: #4a3f91;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 20px;
      height: 25px;
      line-height: 25px;
      margin-left: 20px;
    }
    .el-button {
      float: right;
      padding: 10px 40px;
    }
  }
  .receiveOrder-Info {
    margin-top: 20px;
    padding: 20px;
    background: white;
    .title {
      overflow: hidden;
      img {
        float: left;
      }
      p {
        height: 25px;
        line-height: 24px;
        font-size: 1rem;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .items {
      font-size: 0.875rem;
      p:nth-of-type(1) {
        display: inline-block;
        min-width: 110px;
        line-height: 40px;
        height: 40px;
      }
      p:nth-of-type(2) {
        display: inline-block;
        line-height: 40px;
        height: 40px;
        .content {
          margin: 0 0 0 20px;
        }
        .fenge {
          margin: 0 20px;
          color: #bababa;
        }
      }
    }
    .items1 {
      font-size: 0.875rem;
      padding: 5px 0;
      p:nth-of-type(1) {
        float: left;
        min-width: 110px;
        line-height: 40px;
        height: 40px;
      }
      .list {
        display: flex;
        padding: 10px 0 0 0;
        .items-item {
          width: 50%;
          span {
            padding: 0 0 0 10px;
          }
        }
      }
    }
  }
  .receiveOrder-Info1 {
    margin-top: 20px;
    padding: 20px;
    background: white;
    .title {
      overflow: hidden;
      img {
        float: left;
      }
      p {
        height: 25px;
        line-height: 24px;
        font-size: 1rem;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .items {
      font-size: 0.875rem;
      p:nth-of-type(1) {
        display: inline-block;
        min-width: 110px;
        line-height: 40px;
        height: 40px;
      }
      p:nth-of-type(2) {
        display: inline-block;
        line-height: 40px;
        height: 40px;
        .content {
          margin: 0 0 0 20px;
        }
      }
      p:nth-of-type(3) {
        display: inline-block;
        line-height: 40px;
        height: 40px;
        padding: 0 0 0 10%;
      }
      .spangray {
        color: #acacac;
      }
    }
    .items1 {
      font-size: 0.875rem;
      padding: 5px 0;
      display: flex;
      p:nth-of-type(1) {
        float: left;
        min-width: 110px;
        line-height: 40px;
        height: 40px;
      }
      .list {
        width: 82%;
        div {
          height: 40px;
          line-height: 40px;
          .spangray {
            color: #acacac;
          }
        }
        div:nth-of-type(3) {
          display: flex;
          p {
            width: 25%;
          }
        }
      }
    }
    .items2 {
      font-size: 0.875rem;
      padding: 5px 0;
      display: flex;
      div {
        width: 33.33%;
        line-height: 40px;
        height: 40px;
        p {
          display: inline-block;
          min-width: 110px;
        }
      }
    }
  }
  .receiveOrder-Info2 {
    margin-top: 20px;
    padding: 20px;
    background: white;
    .title {
      overflow: hidden;
      img {
        float: left;
      }
      p {
        height: 25px;
        line-height: 24px;
        font-size: 1rem;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .items {
      font-size: 0.875rem;
      p:nth-of-type(1) {
        display: inline-block;
        min-width: 110px;
        line-height: 40px;
        height: 40px;
      }
      p:nth-of-type(2) {
        display: inline-block;
        line-height: 40px;
        height: 40px;
        .content {
          margin: 0 0 0 20px;
        }
      }
      p:nth-of-type(3) {
        display: inline-block;
        line-height: 40px;
        height: 40px;
        padding: 0 0 0 10%;
      }
      .spangray {
        color: #acacac;
      }
    }
    .lianxi {
      margin-top: 40px;
    }
  }
  .cost {
    margin-top: 20px;
    padding: 20px;
    background: white;
    min-height: 200px;
    .title {
      overflow: hidden;
      img {
        float: left;
      }
      p {
        height: 25px;
        line-height: 24px;
        font-size: 1rem;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .item {
      .dingchuancount {
        font-size: 0.875rem;
        margin: 10px 0 30px 0;
        border-bottom: 3px solid #e6e6e6;
        .dingchuancount-title {
          color: black;
          font-weight: 600;
        }
        .dingchuancount-content {
          margin: 10px 0 20px 0;
          .grid-content {
            margin: 0 0 10px 0;
          }
        }
      }
      .count {
        overflow: hidden;
        margin: 30px 0;
        .grid-content {
          font-size: 1rem;
          img {
            float: left;
          }
          p {
            height: 30px;
            line-height: 30px;
            margin-left: 40px;
            font-size: 1.2rem;
            font-weight: 600;
          }
          span {
            color: #f08619;
            font-weight: 600;
          }
        }
        .el-button {
          float: right;
          padding: 12px 30px;
          margin-right: 20px;
          background: #f08519;
          color: white;
        }
      }
    }
  }
}
</style>
<template>
  <section class="container">
    <div class="receiveOrder">
      <div class="receiveOrder-header">
        <p>订单编号：1234566789</p>
        <p>联系客服</p>
        <el-button>取消订单</el-button>
      </div>
      <div v-if="type === 'dingcang'" class="receiveOrder-Info">
        <div class="title">
          <img src="../../assets/img/order.png" height="20" width="20">
          <p>订舱信息</p>
        </div>
        <div class="items">
          <p>起运港（码头）：</p>
          <p>SHEN ZHEN · CHINA 深圳</p>
        </div>
        <div class="items">
          <p>目的港（码头）：</p>
          <p>ROTTERDAM · NETHER</p>
        </div>
        <div class="items">
          <p>运输方式：</p>
          <p>
            <span>海运</span>
            <span class="fenge">|</span>
            <span>中转方式： 直达</span>
            <span class="fenge">|</span>
            <span>行程：23天</span>
            <span class="fenge">|</span>
            <span>开航日期：2018-6-29</span>
          </p>
        </div>
        <div class="items">
          <p>有效日期：</p>
          <p>
            <span>【预计开船】</span>
            <span class="content">2018-7-20</span>
            <span class="fenge">|</span>
            <span>【截止订舱】</span>
            <span class="content">2018-7-15</span>
          </p>
        </div>
        <div class="items">
          <p>船期：</p>
          <p>
            <span>周一/六截一开</span>
          </p>
        </div>
        <div class="items">
          <p>船东：</p>
          <p>
            <span>VSL/VOY:MOGENS MAERSK/828W</span>
            <span class="fenge">|</span>
            <span>航名/航次</span>
            <span class="content">MEERSK</span>
            <span class="fenge">|</span>
            <span>航线代码</span>
            <span class="content">AE1</span>
          </p>
        </div>
        <div class="items">
          <p>箱货详情：</p>
          <p>
            <span>1x 20'GP</span>
            <span class="content">单箱重10KG</span>
            <span class="fenge">|</span>
            <span>2x 40'GP</span>
            <span class="content">单箱重10KG</span>
            <span class="fenge">|</span>
            <span>1x 40'HQ</span>
            <span class="content">单箱重10KG</span>
          </p>
        </div>
        <div class="items">
          <p>订舱联系人：</p>
          <p>
            <span>姓名</span>
            <span class="content">张三</span>
            <span class="fenge">|</span>
            <span>邮箱</span>
            <span class="content">naso@naso.com</span>
            <span class="fenge">|</span>
            <span>电话</span>
            <span class="content">123456789</span>
            <span class="fenge">|</span>
            <span>手机</span>
            <span class="content">123456789</span>
          </p>
        </div>
        <div class="items">
          <p>箱属性：</p>
          <p>
            <span>COC</span>
          </p>
        </div>
        <div class="items">
          <p>货物特征：</p>
          <p>
            <span>普通货</span>
          </p>
        </div>
        <div class="items">
          <p>Shipper：</p>
          <p>
            <span>详细描述</span>
          </p>
        </div>
        <div class="items">
          <p>Consignee：</p>
          <p>
            <span>详细描述</span>
          </p>
        </div>
        <div class="items">
          <p>Notity Party：</p>
          <p>
            <span>详细描述</span>
          </p>
        </div>
        <div class="items1">
          <p>其他信息：</p>
          <div class="list">
            <div class="items-item">
              <div>提单类型：
                <span></span>
              </div>
              <div>电话：
                <span></span>
              </div>
            </div>
            <div class="items-item">
              <div>运输条款：
                <span></span>
              </div>
              <div>手机：
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="items1">
          <p>货物信息：</p>
          <div class="list">
            <div class="items-item">
              <div>货物准备好的日期：
                <span></span>
              </div>
              <div>总重量：
                <span>100KG</span>
              </div>
            </div>
            <div class="items-item">
              <div>包装种类：
                <span></span>
              </div>
              <div>总尺寸：
                <span>100CBM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="items">
          <p>唛头：</p>
          <p>
            <span>详细描述</span>
          </p>
        </div>
        <div class="items">
          <p>货物描述：</p>
          <p>
            <span>详细描述</span>
          </p>
        </div>
        <div class="items">
          <p>备注：</p>
          <p>
            <span>详细描述</span>
          </p>
        </div>
      </div>
      <div v-if="type === 'tuoche'" class="receiveOrder-Info1">
        <div class="title">
          <img src="../../assets/img/order.png" height="20" width="20">
          <p>拖车信息</p>
        </div>
        <div class="items">
          <p>拖柜地点：
            <span>广东省 · 佛山市 · 三水区 · 大塘镇</span>
          </p>
        </div>
        <div class="items">
          <p>起运港（码头）：
            <span>SHEN ZHEN · CHINA 深圳</span>
          </p>
        </div>
        <div class="items">
          <p>拖柜日期：
            <span>2018-6-30</span>
          </p>
        </div>
        <div class="items">
          <p>模式：</p>
          <p>
            <span>委托报关</span>
          </p>
        </div>
        <div class="items">
          <p>孖拖：</p>
          <p>
            <span>20'GP柜允许孖拖</span>
          </p>
          <p>孖拖数量：
            <span>4</span>
          </p>
        </div>
        <div class="items">
          <p>过磅类型：
            <span>重柜过磅</span>
          </p>
        </div>
        <div class="items">
          <p>熏蒸柜：</p>
          <p>
            <span>是</span>
          </p>
          <p>熏蒸数量：
            <span>4</span>
          </p>
        </div>
        <div class="items1">
          <p>拖柜地点1：</p>
          <div class="list">
            <div>广东省 · 佛山市 · 三水区 · 大塘镇
              <span class="spangray">详细地址</span>
            </div>
            <div>备注：
              <span class="spangray">详细描述</span>
            </div>
            <div>
              <p>工厂名称：
                <span class="spangray">详细</span>
              </p>
              <p>工厂联系人：
                <span>张三</span>
              </p>
              <p>联系电话/手机：
                <span>123456798</span>
              </p>
            </div>
            <div>装货时间： 2018-6-30 15:30</div>
          </div>
        </div>
        <div class="items1">
          <p>拖柜地点2：</p>
          <div class="list">
            <div>广东省 · 佛山市 · 三水区 · 大塘镇
              <span class="spangray">详细地址</span>
            </div>
            <div>备注：
              <span class="spangray">详细描述</span>
            </div>
            <div>
              <p>工厂名称：
                <span class="spangray">详细</span>
              </p>
              <p>工厂联系人：
                <span>张三</span>
              </p>
              <p>联系电话/手机：
                <span>123456798</span>
              </p>
            </div>
            <div>装货时间： 2018-6-30 15:30</div>
          </div>
        </div>
        <div class="items1">
          <p>拖柜地点3：</p>
          <div class="list">
            <div>广东省 · 佛山市 · 三水区 · 大塘镇
              <span class="spangray">详细地址</span>
            </div>
            <div>备注：
              <span class="spangray">详细描述</span>
            </div>
            <div>
              <p>工厂名称：
                <span class="spangray">详细</span>
              </p>
              <p>工厂联系人：
                <span>张三</span>
              </p>
              <p>联系电话/手机：
                <span>123456798</span>
              </p>
            </div>
            <div>装货时间： 2018-6-30 15:30</div>
          </div>
        </div>
        <div class="items">
          <p>最迟补料时间：
            <span>2018-6-30 15：30</span>
          </p>
        </div>
        <div class="items2">
          <div>
            <p>开仓时间：</p>
            <span>2018-6-30 15:30</span>
          </div>
          <div>
            <p>截关时间：</p>
            <span>2018-6-30 15:30</span>
          </div>
        </div>
        <div class="items">
          <p>PO编号：</p>
          <p>
            <span>123456798</span>
          </p>
        </div>
        <div class="items">
          <p>VGM：</p>
          <p>
            <span class="spangray">详细</span>
          </p>
        </div>
        <div class="items">
          <p>摆放位置：</p>
          <p>
            <span class="spangray">详细</span>
          </p>
        </div>
        <div class="items">
          <p>两地装货：</p>
          <p>
            <span class="spangray">详细</span>
          </p>
        </div>
        <div class="items">
          <p>备注：</p>
          <p>
            <span class="spangray">详细</span>
          </p>
        </div>
      </div>
      <div v-if="type === 'baoguan'" class="receiveOrder-Info2">
        <div class="title">
          <img src="../../assets/img/order.png" height="20" width="20">
          <p>报关信息</p>
        </div>
        <div class="items">
          <p>报关地点：</p>
          <p>
            <span>广东省 · 深圳市</span>
          </p>
        </div>
        <!--<div class="items">
          <p>报关票数：</p>
          <p>
            <span>100</span>
          </p>
        </div>-->
        <div class="items">
          <p>船名：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>航次：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>提单号：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>报关方式：</p>
          <p>
            <span>无纸质化</span>
          </p>
        </div>
        <div class="items">
          <p>报关行名称：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>报关信息：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>报关行地址：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>联系方式：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>预计报关日期：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>委托备注：</p>
          <p>
            <span class="spangray">详细描述</span>
          </p>
        </div>
        <div class="title lianxi">
          <img src="../../assets/img/wenzhang.png" height="20" width="17">
          <p>填写联系信息</p>
        </div>
        <div class="items">
          <p>公司名称：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>联系人：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>手机号码：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>备用联系QQ：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>备用WhatsApp：</p>
          <p>
            <span></span>
          </p>
        </div>
        <div class="items">
          <p>贸易订单号：</p>
          <p>
            <span></span>
          </p>
        </div>
      </div>
      <div class="cost">
        <div class="title">
          <img src="../../assets/img/oktitle.png" height="28" width="30">
          <p>确认费用信息</p>
        </div>
        <div v-if="type === 'dingcang'" class="item">
          <div class="dingchuancount">
            <div class="dingchuancount-title">订舱费用——</div>
            <div class="dingchuancount-content">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content bg-purple">海运费：20'GP:USD 315×1</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">紧急燃油附加费20'GP：USD 60×1</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">OHC 20'GP:CNY 565×1</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">单运费：CNY 450×1</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">VGM 20'GP：CNY 20×1</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">订舱操作费20'GP：USD 10×1</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">封条费 20'GP:CNY 50×1</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="count">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img src="../../assets/img/qian.png" height="30" width="31">
                  <p>实际费用总计</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span>USD 1066 起</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span>CNY 1255</span>
                </div>
              </el-col>
            </el-row>
            <el-button>确认接单</el-button>
          </div>
        </div>
        <div v-if="type === 'tuoche'" class="item">
          <div class="dingchuancount">
            <div class="dingchuancount-title">拖车费用——</div>
            <div class="dingchuancount-content">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content bg-purple">拖车费:</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">拖车服务费:</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">报关服务费:</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">报关服务费:</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="count">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img src="../../assets/img/qian.png" height="30" width="31">
                  <p>实际费用总计</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span>USD 1066 起</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span>CNY 1255</span>
                </div>
              </el-col>
            </el-row>
            <el-button>确认接单</el-button>
          </div>
        </div>
        <div v-if="type === 'baoguan'" class="item">
          <div class="dingchuancount">
            <div class="dingchuancount-title">报关费用——</div>
            <div class="dingchuancount-content">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content bg-purple">报关服务费：CNY1255</div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">联单费：CNY1255</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="count">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img src="../../assets/img/qian.png" height="30" width="31">
                  <p>实际费用总计</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span>CNY1255</span>
                </div>
              </el-col>
            </el-row>
            <el-button>确认接单</el-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "receiveOrder",
  data() {
    return {
      type: "dingcang"
    };
  },
  methods: {
    check(index) {
      this.$router.push({ path: "/member/processingDetial" });
    }
  },
  mounted() {}
};
</script>
