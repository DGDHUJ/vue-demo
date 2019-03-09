<style scoped lang="scss">
@import "~/styles/public.scss";
.quotation {
  position: relative;
  overflow: hidden;
  font-size: 16px;
}
.headContent {
  position: relative;
  overflow: hidden;
  background: white;
  margin-bottom: 100px;
  .headContent1 {
    margin-top: 40px;
  }
}
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}


</style>
<style lang="scss">
.quotation_params{
  .el-input__inner{
    padding: 0;
    background: #fafafa;
  }
  @media screen and (min-width: 1200px) {
    .el-input__inner{
      padding: 0 22px;
    }
  }
}
</style>

<template>
  <section class="container">
    <div class="consulting">
      <headerbar></headerbar>
      <div class="headContent">
        <commonheader class="headContent1"></commonheader>
        <commonheaderbar class="headContent2"  :category="category"></commonheaderbar>
        <div class="layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item>Consulting</el-breadcrumb-item>
          </el-breadcrumb>
          <!--内容头文字-->
          <div class="consulting-layout">

          </div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
  </section>
</template>

<script>
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";

export default {
  name: "consulting",
  components: {
    headerbar: headerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    footerbar: footerbar,
  },
  async asyncData({ store }) {
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY",{
        store
      })
      .then(res => {
        category = res.data;
      });
    return { category };
  },
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>


