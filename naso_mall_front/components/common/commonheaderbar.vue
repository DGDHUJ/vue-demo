<style lang="scss" scoped>
.commonheaderbar1 {
  z-index: 11;
  font-size: 14px;
  border-bottom: 4px solid #4b3f91;
  .commonheaderbarbtn {
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    font-weight: 300;
    color: #000;
  }
  .commonheaderbar {
    display: flex;
    line-height: 40px;
    margin: 0px 10%;
  }
  .commonheaderbarbtn a {
    text-decoration: none;
    outline: none;
  }
  .commonheaderbar-footline {
    height: 4px;
    background: #4b3f91;
    width: 100%;
    margin-left: -20%;
  }
  .commonheaderbaractive {
    font-size: 15px;
    background: #4b3f91;
    color: white;
  }
  .commonheaderbaractive a {
    color: white;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .tab_label {
      width: 16.66%;
      .commonheaderbarbtn:hover {
        color: #4b3f91;
      }
      &:first-child .commonheaderbarbtn:hover {
        color: white;
      }
    }
  }
  .bg-purple-dark {
    background: none;
  }
  .bg-purple {
    background: none;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
.menu {
  position: relative;
  &-layout {
    position: absolute;
    background: #9b3f9199;
    width: 100%;
    height: 434px;
    z-index: 99999;
  }
}

.menu-main {
  position: relative;
}
</style>
<style lang="scss">
.commonheaderbar1 {
  .el-submenu {
    height: 90px;
  }
  .menu .el-submenu .el-submenu__title,
  .menu .el-submenu .el-submenu__title div {
    height: 90px;
  }
  .menu .el-menu-item span,
  .menu .el-submenu > .el-submenu__title span {
    visibility: visible;
  }
}
</style>

<template>
  <div class="commonheaderbar1">
    <el-row class="__main layout" :gutter="0">
      <el-col :span="24" class="use-nav_size">
        <el-col class="tab_label">
          <div class="grid-content bg-purple menu-main">
            <nuxt-link :to="{name: 'product-allcat'}">
              <div
                class="commonheaderbarbtn commonheaderbaractive one"
                @mouseenter="menuShow()"
                @mouseleave="menuClose()"
              >Categories</div>
            </nuxt-link>
            <transition name="el-fade-in-linear">
              <menu-list
                v-show="menuIO && category"
                v-on:menuClose="menuClose"
                v-on:menuShow="menuShow"
                :category="category"
                :listSize="listSize"
                :menuIO="menuIO"
              ></menu-list>
            </transition>
          </div>
        </el-col>
        <el-col class="tab_label">
          <nuxt-link :to="{path :'/'}">
            <div class="commonheaderbarbtn btn1 two">Home</div>
          </nuxt-link>
        </el-col>
        <el-col class="tab_label">
          <nuxt-link :to="{name :'inquiry'}" target="_blank">
            <div class="commonheaderbarbtn btn1 two">Post Buying Leads</div>
          </nuxt-link>
        </el-col>
        <el-col class="tab_label">
          <a href="http://f.getnaso.com" target="_blank">
            <div class="commonheaderbarbtn btn2 three">Freight Forwarding</div>
          </a>
        </el-col>
        <el-col class="tab_label">
          <nuxt-link :to="{name :'help',query:{linkNub:3}}">
            <div class="commonheaderbarbtn btn3 fout">About Us</div>
          </nuxt-link>
        </el-col>
        <!-- <el-col class="tab_label">
          <nuxt-link :to="{path:'/register/registering'}">
            <div class="commonheaderbarbtn btn4 five">Be a Supplier</div>
          </nuxt-link>
        </el-col> -->
        <el-col class="tab_label">
          <nuxt-link :to="{name:'help',query:{linkNub:3}}">
            <div @click="choose(5)" class="commonheaderbarbtn btn5 six">Help</div>
          </nuxt-link>
        </el-col>
      </el-col>
    </el-row>
    <!-- <div class="commonheaderbar-footline"></div> -->
  </div>
</template>
<script>
import $ from "jquery";
import store from "../../store/index";
import menuList from "./menuCommon.vue";
export default {
  name: "commonheaderbar",
  components: { menuList },
  props: ["category"],
  data() {
    return {
      headeractive: this.$store.state.headerbaractive,
      linkNub: "",
      isCollapse: true,
      token: "",
      menuIO: false,
      setTimeClose: null,
      timer:false,
      screenWidth: 1200,
      listSize: 0
    };
  },
  methods: {
    menuShow() {
      clearTimeout(this.setTimeClose);
      this.menuIO = true;
    },
    menuClose() {
      //定时器效果棒棒哒，鼠标移出去能趁它不在意移回去能继续显示
      this.setTimeClose = setTimeout(() => {
        if (this.$route.fullPath !== "/") {
          this.menuIO = false;
        }
      }, 200);
    },
    choose(index) {
      if (index === 0) {
        this.$router.push("/product/allcat");
      } else if (index === 1) {
        let routeData = this.$router.resolve({
          name: "/inquiry",
          path: "/inquiry"
        });
        window.open(routeData.href, "_blank");
      } else if (index === 2) {
        window.open("http://f.getnaso.com/");
      } else if (index === 3) {
        this.$router.push({
          path: "/help",
          query: {
            linkNub: 3
          }
        });
      } else if (index === 4) {
        this.$router.push({ path: "/register/registering" });
      } else if (index === 5) {
        this.$router.push({
          path: "/help"
        });
      }
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.listSize = [
            $(".use-nav_size").width(),
            $(".menu-main").width(),
            $(".use-nav_size").height()
          ];
          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {


    if (this.$route.fullPath == "/") {
      this.menuIO = true;
    }

    let path = window.location.pathname;
    if (path !== "/inquiry" && path !== "/inquiryAdd") {
      if (localStorage.getItem("inquiryData")) {
        localStorage.removeItem("inquiryData");
      }
    }
    /**
     * @desc 获取菜单宽度
     */

    this.listSize = [
      $(".use-nav_size").width(),
      $(".menu-main").width(),
      $(".use-nav_size").height()
    ];
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
      })();
    };
  }
};
</script>
