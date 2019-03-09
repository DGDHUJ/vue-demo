<style lang="scss" scoped>
@import "~/styles/public.scss";
@import "~/styles/common.scss";
.allCategories {
  position: relative;
  width: 100%;
  height: auto;
  background: white;
  // overflow: hidden;
}

.headercontent {
  margin-top: 40px;
  position: relative;
  background: white;
}
.tabcontent .el-breadcrumb {
  line-height: 40px;
}
.footline {
  margin-top: 80px;
}
.category {
  padding: 1.43rem;
  border: 1px solid #e5e5e5;
  &-title {
    // font-family: Arial;
    padding-bottom: 1.8rem;
    color: $main_color;
    font-size: 1.23rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    border-bottom: 1px solid #dcdcdc;
  }
  &-sub {
    margin-top: 1.5rem;
    padding: 0.92rem 1.38rem;

    background: #edecf4;
    font-weight: bold;
    font-size: 0.92rem;
    color: #333333;
    // 图片
    &-pic {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      margin-top: 4px;
    }
    &-item {
      width: 180px;
      height: 120px;
      line-height: 120px;
      overflow: hidden;
        border: 1px solid #dcdcdc;
        text-align: center;
      img {
        display: inline-block;
        width: auto;
        max-width: 180px;
        max-height: 120px;
        padding: 4px;
        cursor: pointer;
      }
    }
    // 文字
    &-list {
      display: flex;
      justify-content: space-around;
      ul {
        width: 555px;
        overflow: hidden;
        zoom: 1;
      }
      li {
        cursor: pointer;
        font-size: 0.857rem;
        color: #666666;
        float: left;
        width: 185px;
        padding: 5px;
        &:hover {
          color: red;
        }
      }
    }
  }

  &-p {
    padding: 1rem 1.53rem;
    border-bottom: 1px solid #dcdcdc;
  }

  &-item {
    margin-right: 1rem;
    font-size: 0.92rem;
    line-height: 2.15rem;
    color: #666666;
    cursor: pointer;
  }
}

@media screen and (min-width: 1200px) {
  .category {
    padding: 1.43rem;
    &-title {
      font-size: 1.23rem;
    }
    &-sub {
      margin-top: 1.5rem;
      padding: 0.92rem 1.38rem;
      font-size: 0.92rem;
      // 图片
      &-pic {
      }
    }
  }
}
</style>

<template>
  <div class="allCategories">
    <headerbar></headerbar>
    <div class="headercontent">
      <commonheader @upup="updatedata"></commonheader>
      <commonheaderbar :category="category"></commonheaderbar>
    </div>
    <div class="layout">
      <div class="tabcontent">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>All categories</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="category" v-for="(items,index) in category" :key="index">
        <div class="category-title">{{items.en_name}}</div>
        <div>
          <!-- 行-信息 by [0] -->
          <div class="category-sub">{{items.children[0].en_name}}</div>
          <p class="category-p" v-for="(level2,i_2) in items.children" :key="i_2" v-if="i_2 === 0">
            <!-- <a class="category-item" v-for="(item,i) in items.children[0].children" :key="i">
                      {{item.en_name}}
            </a>-->
            <nuxt-link
              class="category-item"
              v-for="(level3,i_3) in level2.children"
              :key="i_3"
              :to="{name: 'product-list-cate',params:{id:level3.id},query:{'token':token}}"
              target="_blank"
            >{{level3.en_name}}</nuxt-link>
          </p>
          <!-- 列-信息 [1] + [2]-->
          <el-row :gutter="30">
            <el-col :span="12" v-for="(level2,i_2) in items.children" :key="i_2" v-if="i_2 >0">
              <div class="category-sub">{{level2.en_name}}</div>
              <div class="category-sub-layout">
                <div class="category-sub-pic">
                  <div
                    v-for="(level2_img,img_i) in level2.banners"
                    :key="level2_img.id"
                    v-if="img_i < 3"
                    class="category-sub-item"
                  >
                    <img :src="level2_img.path" alt="">
                  </div>
                </div>
                <div class="category-sub-list">
                  <ul>
                    <nuxt-link
                      v-for="(level3,i_3) in level2.children"
                      :key="i_3"
                      :to="{name: 'product-list-cate',params:{id:level3.id},query:{'token':token}}"
                      target="_blank"
                    >
                      <li>{{level3.en_name}}</li>
                    </nuxt-link>
                  </ul>
                </div>
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
</template>
<script>
import headerbar from "../../components/common/headerbar.vue";
import commonheader from "../../components/common/commonheader.vue";
import commonheaderbar from "../../components/common/commonheaderbar.vue";
import footerbar from "../../components/common/footbar.vue";
import righttab from "../../components/common/righttab.vue";
export default {
  name: "allcat",
  async asyncData({ store }) {
    //菜单
    let category = [];
    await store
      .dispatch("GET_CATEGORY",{ store })
      .then(res => {
        category = res.data;
      });
    return { category };
  },
  components: {
    headerbar,
    commonheader,
    commonheaderbar,
    footerbar,
    righttab
  },
  data() {
    return {
      token: "",
      keyword: "",
      categoryName: "Cookware",
      arr: [],
      list: [],
      children_list: {}
    };
  },

  methods: {
    updatedata(key) {
      this.keyword = key;
    }
  },
  mounted() {
    // console.log(this.category);
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
    //   this.$store.dispatch("GET_CATEGORY").then(data => {
    //   //以数据的id排序
    //   this.list = data.data.sort(this.comment.compare("id", true));
    //   this.list.forEach(el => {
    //     if (el.children) {
    //       el.children.sort(this.comment.compare("id", true));
    //       el.children.forEach(e => {
    //         if (e.children) {
    //           e.children.sort(this.comment.compare("id", true));
    //         }
    //       });
    //     }
    //   });
    //   // console.log(this.list);

    // });
  }
};
</script>
