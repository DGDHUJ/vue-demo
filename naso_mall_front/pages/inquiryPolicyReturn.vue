<style lang="scss" scoped>
.inquiryPolicyReturn {
  overflow: hidden;
  background: white;
  .inquiryPolicyReturn-content {
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    background: white;
    height: 73%;
    width: 100%;
    .inquiryPolicyReturncontent {
      text-align: center;
      padding: 100px 16% 50px 16%;
      font-size: 16px;
      .text {
        text-align: left;
        line-height: 30px;
      }
      .link {
        margin: 50px 0;
        text-align: left;
        .link-item {
          div {
            width: 50%;
            line-height: 40px;
            font-size: 16px;
            float: left;
            a {
              color: #59b9ff;
            }
          }
        }
      }
    }
  }
  .footline {
    height: 6px;
    background: #4b3f91;
    margin-top: 11rem;
  }
}
</style>
<template>
  <section class="container">
    <div class="inquiryPolicyReturn">
      <headerbar></headerbar>
      <div class="inquiryPolicyReturn-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/'}">Want inquire</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="inquiryPolicyReturncontent">
            <div class="text">
              We have received your quotation requirement, and we will send the quotation list back to you
              within 2 working days. Please pay attention to your mail box. Plus, our staff will also contact
              you directly, please keep your contact valid.
            </div>
            <div class="link">
              <p>Now your registration is successful, you can enjoy more services. Would you like to:</p>
              <div class="link-item">
                <div>
                  <nuxt-link :to="{path:'/'}">· Go back to Home Page for More Products?</nuxt-link>
                </div>
                <div>
                  <nuxt-link
                    :to="{path: isLogin ? '/member/allorder':'/login'}"
                  >· Get to Know the Smart Logistic Service?</nuxt-link>
                </div>
                <div>
                  <nuxt-link :to="{path:'/help'}">· Get to Know the Membership?</nuxt-link>
                </div>
                <div><a href="#" @click="closeWindow">· No, Close This Window.</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>

<script>
import $ from "jquery/dist/jquery.slim.min";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";
import righttab from "../components/common/righttab.vue";
export default {
  name: "inquiryPolicyReturn",
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
  components: {
    headerbar: headerbar,
    footerbar: footerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    righttab: righttab
  },
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    closeWindow() {
      window.opener = null;
      window.close();
    }
  },
  mounted() {
    this.isLogin = Boolean(localStorage.getItem("users"));
  }
};
</script>