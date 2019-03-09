<style lang="scss" scoped>
.el-menu{
  border-right: 0;
}
.el-menu-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-menu-item.is-active {
  color: #4b3f91;
  font-size: 16px;
  font-weight: 600;
}
.membercontent {
  .membercelan {
    .membercontent-left {
      border: 1px solid #ddd;
      height: 100%;
      .el-menu-vertical-demo {
        .menu-item0 {
          padding: 0 20px;
          height: 56px;
          line-height: 56px;
          font-size: 1.125rem;
          background: #4b3f91;
          color: white;
          i {
            color: white;
          }
        }
        .menu-item-span {
          font-size: 1rem;
        }
      }
    }
  }
  .membercontent-left-title {
    line-height: 40px;
    color: white;
    background: #4b3f91;
    padding-left: 20px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: white;
  }
  .bg-purple {
    background: white;
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
.iconfont {
  margin-right: 6px;
}
</style>
<template>
  <div class="membercontent">
    <div>
      <el-row class="__main layout">
        <el-col :span="5" class="membercelan">
          <div class="membercontent-left">
            <el-row class="tac">
              <el-col :span="24">
                <el-menu :default-active="showindex" class="el-menu-vertical-demo">
                  <el-menu-item style="padding:0;" index="0" @click="go('membercentre')">
                    <div class="menu-item0">
                      <i class="icon iconfont icon-huangguan1"></i>
                      <span slot="title">Member Centre</span>
                    </div>
                  </el-menu-item>
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="icon iconfont icon-order menu-item-span"></i>
                      <span slot="title" class="menu-item-span">Order</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item
                        index="1-6"
                        class="menu-item-span"
                        @click="go('infoList','other')"
                      >My Inquiry</el-menu-item>

                      <el-menu-item
                        index="1-1"
                        class="menu-item-span"
                        @click="go('allorder','self')"
                      >All orders</el-menu-item>
                      <el-menu-item
                        index="1-2"
                        class="menu-item-span"
                        @click="go('negotiatedorder','self')"
                      >Negotiated order</el-menu-item>
                      <el-menu-item
                        index="1-3"
                        class="menu-item-span"
                        @click="go('wait/waitingforpaymentorder','self')"
                      >Waiting for payment order</el-menu-item>
                      <el-menu-item
                        index="1-4"
                        class="menu-item-span"
                        @click="go('pending/pendingorder','self')"
                      >Pending order</el-menu-item>
                      <el-menu-item
                        index="1-5"
                        class="menu-item-span"
                        @click="go('orderHistory','self')"
                      >Completed Order</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="3" @click="go('dateModification','self')">
                    <i class="icon iconfont icon-tianxiedanhao menu-item-span"></i>
                    <span slot="title" class="menu-item-span">Maintain Account Information</span>
                  </el-menu-item>
                  <el-menu-item index="4" @click="go('forwarding','self')">
                    <i class="icon iconfont icon-huoyunche menu-item-span"></i>
                    <span slot="title" class="menu-item-span">Export Freight Forwarder</span>
                  </el-menu-item>
                  <el-menu-item index="5" @click="go('infoList','self')">
                    <i class="el-icon-message"></i>
                    <span slot="title" class="menu-item-span">Message Centre</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="19">
          <div class="membercontent-right">
            <router-view/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "membercontent",
  props: ["showindex"],
  data() {
    return {
      token: ""
    };
  },
  methods: {
    go(name, type) {
      let tempname = "/member/" + name;
      if (type === "other") {
        this.$router.push({
          path: tempname,
          query: { page: 1, status: "replied" }
        });
      } else {
        this.$router.push({ path: tempname, query: { page: 1 } });
      }
    }
  },
  mounted() {
    // if (localStorage.getItem("users")) {
    //   this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    //   this.token = JSON.parse(localStorage.getItem("users")).token;
    //   this.users = this.$store.state.users;
    // } else {
    //   var tempalert = this.$alert;
    //   tempalert("Please log in！", {
    //     confirmButtonText: "ok",
    //     center: true,
    //     callback: action => {
    //       this.$router.push("/login");
    //     }
    //   });
    // }
  }
};
</script>
