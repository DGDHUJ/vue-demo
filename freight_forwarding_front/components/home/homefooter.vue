<style lang="scss" scoped>
.tempfoot {
  background-color: white;
  min-height: 400px;
  position: relative;
  display: flex;
}
.footitem1 {
  float: left;
  width: calc(100% / 6);
  h1 {
    width: 100%;
    height: 30px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 1px;
    color: #333333;
    margin: 10px 0;
    font-weight: bold;
  }
  .item1Child {
    a:nth-child(1) {
      width: 33px;
      margin-right: 38px;
      height: 17px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 30px;
      letter-spacing: 1px;
      color: #333333;
    }
    a:nth-child(2) {
      width: 67px;
      height: 17px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 30px;
      letter-spacing: 1px;
      color: #333333;
    }
  }
}
.footitem2 {
  float: left;
  width: calc(100% / 6 * 1.5);
  h1 {
    width: 100%;
    height: 30px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 1px;
    color: #333333;
    margin: 10px 0;
    font-weight: bold;
  }
  .item1Child {
    a:nth-child(1) {
      width: 33px;
      margin-right: 38px;
      height: 17px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 30px;
      letter-spacing: 1px;
      color: #333333;
    }
    a:nth-child(2) {
      width: 67px;
      height: 17px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 30px;
      letter-spacing: 1px;
      color: #333333;
    }
  }
}
.item2-list {
  width: 100%;
  overflow: hidden;
  height: 80px;
}
.item2-list-left {
  float: left;
  margin-top: 20px;
}
.item2-list-right {
  float: left;
  margin-left: 20px;
}
.right-h1 {
  height: 17px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 1px;
  color: #333333;
}
.right-h2 {
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #333333;
}
.textCenter {
  text-align: center;
}
.textCenter-h1 {
  height: 17px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 1px;
  color: #333333;
}
.textCenter-p {
  height: 17px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #333333;
}
.imgCode {
  width: 108px;
  height: 108px;
  margin: 10px 0;
}
.imgCustomer {
  width: 40px;
}
.imgEmail {
  width: 40px;
}
.banquan {
  text-align: center;
  margin:40px 10% 0 10%;
  padding: 30px 0 60px 0;
  border-top: 2px solid #333333;
  p{
    height: 18px;
	font-family: MicrosoftYaHei;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 30px;
	letter-spacing: 0px;
	color: #333333;
  }
}
</style>

<template>
    <div class="tempfoot layout-1200">
      <div class=" layout-1200">
        <div class=" content" style="padding: 20px 20px 0 20px;">
          <div class="footitem2">
            <h1>网站导航</h1>
            <div class="item1Child">
              <a href>首页</a>
              <a href>合作伙伴</a>
            </div>
            <div class="item1Child">
              <a href>订舱</a>
              <a href>资讯中心</a>
            </div>
            <div class="item1Child">
              <a href>拖车</a>
              <a href>关于我们</a>
            </div>
            <div class="item1Child">
              <a href>报关</a>
              <a href>服务协议</a>
            </div>
          </div>
          <div class="footitem1">
            <h1>特色服务</h1>
            <div class="item1Child">
              <a href>订舱服务</a>
            </div>
            <div class="item1Child">
              <a href>拖车服务</a>
            </div>
            <div class="item1Child">
              <a href>货运服务</a>
            </div>
            <div class="item1Child">
              <a href>报关保险</a>
            </div>
            <div class="item1Child">
              <a href>亚马逊FBA</a>
            </div>
          </div>
          <div class="footitem1">
            <h1>品牌服务</h1>
            <div class="item1Child">
              <a href>纳信购</a>
            </div>
            <div class="item1Child">
              <a href>纳运通</a>
            </div>
            <div class="item1Child">
              <a href>纳贸通</a>
            </div>
            <div class="item1Child">
              <a href>纳理通</a>
            </div>
          </div>
          <div class="footitem2">
            <div class="item2-list" style>
              <div class="item2-list-left">
                <img class="imgCustomer" src="../../assets/img/customer.png" alt>
              </div>
              <div class="item2-list-right" style>
                <h1 class="right-h1">客服热线</h1>
                <h2 class="right-h2">0757-82581931</h2>
              </div>
            </div>
            <div class="item2-list">
              <div class="item2-list-left">
                <img class="imgEmail" src="../../assets/img/email.png" alt>
              </div>
              <div class="item2-list-right">
                <h1 class="right-h1">服务投诉邮箱</h1>
                <h2 class="right-h2">logistics@getnaso.com</h2>
              </div>
            </div>
          </div>
          <div class="footitem1 textCenter">
            <h1 class="textCenter-h1">微信公众号</h1>
            <img class="imgCode" src="../../assets/img/erweima.png" alt>
            <p class="textCenter-p">关注公众号，了解更多</p>
          </div>
          <div style="clear:both"></div>
          <div class="banquan">
            <p>copyright © 2004-2019 getnaso.com 版权所有|消费者维权热线：0757-82581931 经营执照</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'homefooter'
}
</script>

