<style lang="scss" scoped>
.register {
  overflow: hidden;
  background: white;
  .register-content {
    position: relative;
    min-height: 735px;
    min-width: 1000px;
    overflow-x: scroll;
    .register-titleout {
      border-bottom: 1px solid #ddd;
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .bg-purple-dark {
        background: white;
      }
      .bg-purple {
        background: white;
      }
      .bg-purple-light {
        background: white;
        .register-title-img {
          overflow: hidden;
          .register-imgout {
            .register-imgin {
              width: 50%;
              line-height: 60px;
              margin: 25px 0;
            }
          }
        }
        .register-title-text {
          line-height: 110px;
          .register-textout {
            width: 100%;
            text-align: right;
            padding: 0 10px 0 0;
            font-size: 16px;
            cursor: pointer;
            i {
              color: #f1841b;
            }
          }
        }
      }
      .grid-content {
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
  }
  .footerbar {
    padding: 18px 0;
  }
}
</style>
<template>
  <section class="container">
    <div class="register __main">
      <headerbar></headerbar>
      <div class="register-content __main">
        <div class="register-titleout">
          <el-row>
            <el-col :span="2">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light">
                <div class="register-title-img" @click="tohome">
                  <div class="register-imgout">
                    <img class="register-imgin" src="../assets/img/naxinlogo.png">
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple-light">
                <div class="register-title-text">
                  <div class="register-textout">
                    <p @click="tologin">Already have member account，please click here to login.
                      <i class="icon iconfont icon-zuoyou1"></i>
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </div>
        <router-view></router-view>
      </div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>

<script>
import $ from "jquery/dist/jquery.slim.min";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import righttab from "../components/common/righttab.vue";
export default {
  name: "forgetpassword",
  components: {
    headerbar: headerbar,
    footerbar: footerbar,
    righttab: righttab
  },
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
      checked: false
    };
  },
  methods: {
    gotwo() {
      this.$router.push("/one/two");
    },
    tohome() {
      this.$router.push("/");
    },
    tologin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
