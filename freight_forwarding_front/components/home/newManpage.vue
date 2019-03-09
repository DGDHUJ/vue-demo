<style scoped lang="scss">
.showservise {
  width: 100%;
  background-color: #ffffff;
  min-height: 535px;
  margin: 40px 0;
  padding: 30px 10px 10px;
}
.showline {
  width: 100%;
  position: relative;
  display: flex;
}

.servise-item {
  //  display: inline-block;
  float: left;
  overflow: hidden;
  border: 1px solid #ddd;
  width: 50%;
  margin: 5px 10px;
  width: calc(50%-20px);
  background-color: white;
  height: 175px;
  background-color: #ffffff;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}

.item-img {
  float: left;
  width: 134px;
  height: 134px;
}
.item-h2 {
  padding-top: 23px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 42px;
  letter-spacing: 0px;
  color: #333333;
}
.item-p {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #333333;
  padding: 0 40px 0 134px;
}
.content-title{
  width: 400px;
}
</style>
<template>
  <div class="layout-1200">
    <div class="showline">
      <div class="pageouter"></div>
      <div class="pagecontent content">
        <div class="showservise">
          <div class="content-title">
            <h2>
              <i class="left-icon icon_line"></i>我们的优势
              <i class="right-icon icon_line"></i>
            </h2>
            <p>全面、专业、实惠</p>
          </div>
          <div class="servise-item">
            <img class="item-img" src="../../assets/img/11_03.png">
            <h2 class="item-h2">海量路线/覆盖全球</h2>
            <p class="item-p">积累了丰富的行业资源，整合数百家优质 物流服务商，覆盖全球90% 的港口运价。</p>
          </div>
          <div class="servise-item">
            <img class="item-img" src="../../assets/img/12_03.png">
            <h2 class="item-h2">专业团队/诚信服务</h2>
            <p class="item-p">拥有多年贸易清关报关代理经验，体系化的运营机制、丰富的合作案例和良好的海关关系。</p>
          </div>
          <div class="servise-item">
            <img class="item-img" src="../../assets/img/13_03.png">
            <h2 class="item-h2">货物出口/一站解决</h2>
            <p class="item-p">自主研发的信息化国际物流管理平台，集订舱、拖车、报关报验等业务于一身，一站式满足各种物流服务需求。</p>
          </div>
          <div class="servise-item">
            <img class="item-img" src="../../assets/img/14_03.png">
            <h2 class="item-h2">公司担保/利益共同</h2>
            <p class="item-p">卓越的防损保障措施，异常件处理制度，免除客户后顾之忧。</p>
          </div>
        </div>
      </div>
      <div class="pageouter"></div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params, query }) {},
  components: {},
  name: "newManpage",
  data() {
    return {};
  },
  methods: {},
  beforeCreate() {},
  mounted() {}
};
</script>

