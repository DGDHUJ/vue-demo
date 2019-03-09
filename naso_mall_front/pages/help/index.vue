<style lang="scss" scoped>
.help {
  overflow: hidden;
  background: white;
  position: relative;

  .help-content {
    position: relative;
    overflow: hidden;
    background: white;
    margin-bottom: 20px;
    margin-top: 40px;
    .help-backgroundimg {
      width: 100%;
    }
    background: white;
    .contents {
      margin-top: 24px;
      .contents-left {
        height: 600px;
        overflow: hidden;
        a:hover {
          color: #fff;
        }
      }
      .contents-right {
        margin: 0 0 0 20px;
        border: 1px solid #ddd;
        min-height: 600px;
        padding: 15px 20px;
        font-size: 18px;
        line-height: 25px;
        color: #666666;
      }
    }
  }
  .el-menu {
    border-right: 0;
  }
  .footline {
    margin-top: 80px;
    height: 6px;
    background: #4b3f91;
  }
}

.main_part {
  font-size: 14px;
  &-li {
    padding: 4px 10px;
    .main_part-li-title {
      cursor: pointer;
    }
    .main_part-li-date {
      text-align: right;
    }
    &:hover {
      a {
        color: #4b3f91;
      }
      padding-bottom: 2px;
      border-bottom: 2px solid #4b3f91;
    }
  }
}
.go_back {
  display: inline-block;
  margin-bottom: 26px;
  padding: 1px 10px;
  color: #4b3f91d0;
  font-size: 12px;
  border-radius: 4px;
  border: 2px solid #ececec;

  cursor: pointer;
  &:hover {
    color: #666;
    border: 2px solid #4b3f91;
  }
}
</style>
<style lang="scss">
.contents-left {
  color: #4b3f91;
  .el-submenu__title:focus,
  .el-submenu__title:hover,
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: #4b3f91;
    color: #ffffff;
    a,
    i {
      color: #ffffff;
    }
  }
  .el-menu-item.is-active {
    background-color: #4b3f91;
    color: #ffffff;
    a,
    i {
      color: #ffffff;
    }
  }
  .el-menu-item {
    font-size: 12px;
  }
}
</style>
<template>
  <section class="container">
    <div class="help">
      <headerbar></headerbar>
      <div class="help-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div>
          <img class="help-backgroundimg" src="~/assets/img/help.jpg">
        </div>
        <div class="layout">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: $route.name }">help</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="contents">
            <el-row class="__main" :gutter="0">
              <el-col :span="5">
                <div class="contents-left">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    unique-opened
                    @close="handleClose"
                  >
                    <template v-for="(item,index) in helpMenu">
                      <!-- <el-menu-item v-if="item.type === 1" :key="item.id" :index="index+''" @click="menuItem(item.id,index)"> -->

                      <nuxt-link
                        :to="{name: 'help-article',params:{article:item.id,keyPath:index}}"
                        :key="item.id"
                        v-if="item.type === 1"
                      >
                        <el-menu-item :index="index+''">
                          <i class="el-icon-menu"></i>
                          <span slot="title" style="font-size:14px;">{{item.name}}</span>
                        </el-menu-item>
                      </nuxt-link>
                      <el-submenu v-else :index="item.id + ''" :key="item.id">
                        <template slot="title">
                          <!-- <nuxt-link :to="{name: 'help-article',params:{article:item.id}}"> -->
                          <i :class="item.icon"></i>
                          <span v-if="item.name" slot="title">{{item.name}}</span>
                          <!-- </nuxt-link> -->
                        </template>
                        <nuxt-link
                          v-for="(child,c_index) in item.children"
                          :to="{name: 'help-article',params:{article:child.id,keyPath:[index,c_index]}}"
                          :key="child.id"
                        >
                          <template>
                            <!-- <el-menu-item :index="index + ',' + c_index" :key="child.id" @click="menuChildItem(child.id,c_index)"> -->
                            <el-menu-item :index="index + ',' + c_index">
                              <span v-if="child.title" slot="title">{{child.title}}</span>
                            </el-menu-item>
                          </template>
                        </nuxt-link>
                      </el-submenu>
                    </template>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="19">
                <div class="contents-right" v-loading="loading">
                  <div v-html="data.content"></div>
                </div>
              </el-col>
            </el-row>
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
import headerbar from "~/components/common/headerbar.vue";
import commonheader from "~/components/common/commonheader.vue";
import commonheaderbar from "~/components/common/commonheaderbar.vue";
import footerbar from "~/components/common/footbar.vue";
import righttab from "~/components/common/righttab.vue";
// import clampy from "@clampy-js/vue-clampy";
import { Trim } from "~/utils/methods.js";
export default {
  name: "help",
  // directives: {
  //   clampy
  // },
  data() {
    return {
      content: "",
      activeNub: "",
      loading: false,
      breadcrumb: "",

      menuList: []
    };
  },
  components: {
    headerbar: headerbar,
    footerbar: footerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    righttab: righttab
  },
  async asyncData({ app, store, params }) {
    let defaultArticle = [8, true]; //默认显示文章
    let helpMenu_URL = app.store.state.headerUrl + "cms/column/1";
    let helpMenu = await app.$axios.get(helpMenu_URL).then(resp => {
      return resp.data.data;
    });

    let childMenu_URL = app.store.state.headerUrl + "cms";

    for (let i = 0; i < helpMenu.length; i++) {
      let data = {
        cid: helpMenu[i].id,
        limit: 30,
        page: 1
      };
      await app.$axios.post(childMenu_URL, data).then(resp => {
        helpMenu[i].children = resp.data.data.list;
      });
    }
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY",{ app })
      .then(res => {
        category = res.data;
      });
    let data = "";
    if (defaultArticle[1]) {
      helpMenu.forEach(element => {
        if (element.id === defaultArticle[0]) {
          data = element;
        }
      });
    } else {
      let cms_url = store.state.headerUrl + "cms/" + defaultArticle[0];
      data = await app.$axios.get(cms_url).then(res => {
        return res.data.data;
      });
    }
    // console.log(data);
    
    return { helpMenu, category, data };
  },
  head() {
    return {
      title: "Naso-Help",
      meta: [
        {
          hid: "help_description",
          name: "description",
          content: "My custom description"
        },
        { hid: "help_key", name: "Keywords", content: "My custom Help Keys" }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  mounted() {},
  watch: {
    $route() {}
  }
};
</script>
