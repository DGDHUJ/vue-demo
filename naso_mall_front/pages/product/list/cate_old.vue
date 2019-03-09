<style lang="scss" scoped>
.container {
  position: relative;
}
.productpage {
  background: white;
  position: relative;
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .productpage-content {
    margin-top: 40px;
    position: relative;
    // overflow: hidden;
    background: white;
  }
  .footline {
    height: 6px;
    background: #4b3f91;
  }
  .tabcontent {
    line-height: 40px;
    position: relative;
  }
  .tabcontent .el-breadcrumb {
    line-height: 40px;
  }
  .productpage-content-type {
    margin: 10px 0;
    padding-left: 15px;
    // display: flex;
    overflow: hidden;
    background: #dedede;
    line-height: 44px;
  }
  .productpage-content-type-content {
    float: left;
    cursor: pointer;
    line-height: 30px;
    height: 30px;
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    min-width: 100px;
    text-align: center;
    padding: 0 20px;
    border-right: 1px solid #ddd;
    background: white;
    position: relative;
    .el-icon-caret-top,
    .el-icon-caret-bottom {
      color: #ddd;
      font-size: 120%;
      position: absolute;
      right: 5px;
    }
    .el-icon-caret-top {
      top: 3px;
    }
    .el-icon-caret-bottom {
      bottom: 3px;
    }
    .active {
      color: #000;
    }
  }
  .typetwo-btn {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    cursor: pointer;
    line-height: 30px;
    height: 30px;
    text-align: center;
    border-right: 1px solid #ddd;
    margin-left: -1px;
    background: white;
  }
  .type-content-active {
    background: #4b3f91;
    color: white;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    margin: 0;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #f08518;
  }
  .el-pagination.is-background .btn-next.disabled,
  .el-pagination.is-background .btn-next:disabled,
  .el-pagination.is-background .btn-prev.disabled,
  .el-pagination.is-background .btn-prev:disabled,
  .el-pagination.is-background .el-pager li.disabled {
    color: #f08518;
  }
  .el-pagination .btn-next .el-icon,
  .el-pagination .btn-prev .el-icon {
    color: #f08518;
  }
  .productpage-content-pagination {
    margin: 50px 0;
    text-align: center;
  }
}

.productlistpage-line2-right-content {
  float: left;
  line-height: 40px;
  margin-top: 7px;
  margin-left: 10px;
}
.productlistpage-line2-right-contenttext {
  width: 80px;
  line-height: 30px;
  height: 30px;
  border: 1px solid #ddd;
  float: left;
  text-align: center;
}
.icon_cha {
  float: left;
  width: 20px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  color: #4b3f91 !important;
}
</style>
<style>
.el-pagination__jump {
  font-size: 0px !important;
}
</style>
<template>
  <section class="container">
    <headerbar></headerbar>
    <div class="productpage-content">
      <commonheader :searchkeyword="$route.query.keyword" @upup="updatedata"></commonheader>
      <commonheaderbar :category="category"></commonheaderbar>
    </div>
    <div class="productpage">
      {{$route.query.keyword + $route.query.keyword + $route.query.keyword}}
      <div class="layout">
        {{nav_bar}}
        <div class="tabcontent">
          <el-breadcrumb style="float: left" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}">Home</el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="(item,index) in nav_bar"
              :key="index"
              :replace="true"
              v-if="nav_bar.length !== index+1"
              :to="{name: 'product-list-cate',params:{cate:item.id},query:{
                    keyword:$route.query.keyword,
                    order_by:$route.query.order_by,
                    asc_or_desc:$route.query.asc_or_desc,
                    brand_id:$route.query.brand_id,
                    page:$route.query.page,
                    min_price:$route.query.min_val,
                    max_price:$route.query.max_val,
                  }}"
            >{{item.en_name}}</el-breadcrumb-item>

            <el-breadcrumb-item
              v-for="(item,index) in nav_bar"
              :key="index"
              :replace="true"
              v-if="nav_bar.length === index+1"
            >{{item.en_name }}</el-breadcrumb-item>

            <!-- <el-breadcrumb-item v-for="(item,index) in nav_bar" :key="index">{{item.en_name}}</el-breadcrumb-item> -->
          </el-breadcrumb>
          <div
            v-if="on_off"
            class="productlistpage-line2-right-content button_1 click_button cursor"
          >
            <div class="productlistpage-line2-right-contenttext button_1_span dianji">
              <span>{{min_price}}</span>
              <span>~</span>
              <span>{{max_price}}</span>
            </div>
            <div class="icon_cha asdas" @click="del">
              <i class="icon iconfont icon-cha productlistpage-line2-right-contenttexti"></i>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>
        <productcondition :productCategory="productCategory"></productcondition>
        <div class="productpage-content-type">
          <nuxt-link
            class="productpage-content-type-content typeone"
            :to="{name:'product-list-cate',params:{cate:$route.params.cate },query:{brand_id:$route.query.brand_id,keyword:$route.query.keyword,x:0} }"
          >The default</nuxt-link>
          <nuxt-link
            class="productpage-content-type-content typetwo"
            style="display: flex"
            :to="{name:'product-list-cate',params:{cate:$route.params.cate },query:{brand_id:$route.query.brand_id,order_by:'price',asc_or_desc:$route.query.asc_or_desc == 1 ? 0 : 1,keyword:$route.query.keyword,x:2} }"
          >
            Price sort
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
          </nuxt-link>
          <nuxt-link
            class="productpage-content-type-content typethree"
            :to="{name:'product-list-cate', params:{cate:$route.params.cate},query:{brand_id:$route.query.brand_id,order_by:'time',asc_or_desc:$route.query.asc_or_desc == 1 ? 0 : 1,keyword:$route.query.keyword,x:3} }"
          >
            Time to market
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
          </nuxt-link>
        </div>
        <productlists :goods_list="goods_list"></productlists>
        <div class="productpage-content-pagination">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :current-page="Number($route.query.page)"
            @current-change="handleCurrentChange"
            :page-size="limit"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import headerbar from "../../../components/common/headerbar.vue";
import footerbar from "../../../components/common/footbar.vue";
import commonheader from "../../../components/common/commonheader.vue";
import commonheaderbar from "../../../components/common/commonheaderbar.vue";
import productcondition from "../../../components/productlistcommon/productlistcondition.vue";
import productlists from "../../../components/productlistcommon/productlists.vue";
import righttab from "../../../components/common/righttab.vue";
export default {
  name: "productCate",
  scrollToTop: true,
  async asyncData({ app, params, store, query }) {
    let listUrl = app.store.state.headerUrl + "goods";
    var dataform = {
      limit: 10,
      page: Number(query.page) || 1,
      category_id: Number(params.cate) || null,
      keyword: query.keyword || "",
      order_by: query.order_by || null,
      asc_or_desc: Number(query.asc_or_desc) || null,
      brand_id: Number(query.brand_id) || null,
      min_price: Number(query.min_price) || null,
      max_price: Number(query.max_price) || null
    };
    let goods = await app.$axios
      .post(listUrl, dataform, { headers: { token: "" } })
      .then(function(resp) {
        return resp.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    let categoryUrl = app.store.state.headerUrl + "category";
    let categorydata = await app.$axios.get(categoryUrl).then(function(resp) {
      for (let i = 0; i < resp.data.data.length; i++) {
        resp.data.data[i].showindex = (i + 1).toString();
        for (var j = 0; j < resp.data.data[i].children.length; j++) {
          resp.data.data[i].children[j].showindex = i + 1 + "-" + (j + 1);
        }
      }
      console.log(resp.data.data);
      
      return resp.data.data;
    });
    //构造商品分类数据
    let productCategory = [];
    let nav_bar = [];
    if (categorydata.length && categorydata.length > 0) {
      for (let i = 0; i < categorydata.length; i++) {
        if (Number(params.cate) === Number(categorydata[i].id)) {
          //一层
          //构造面包屑导航
          nav_bar.push({
            en_name: categorydata[i].en_name,
            id: categorydata[i].id
          });
          //构造分类
          if (categorydata[i].children) {
            productCategory = categorydata[i].children;
          } else {
            productCategory = categorydata;
          }
        } else if (categorydata[i].children) {
          for (let j = 0; j < categorydata[i].children.length; j++) {
            if (
              Number(params.cate) === Number(categorydata[i].children[j].id)
            ) {
              //二层
              //构造面包屑导航
              nav_bar.push({
                en_name: categorydata[i].en_name,
                id: categorydata[i].id
              });
              nav_bar.push({
                en_name: categorydata[i].children[j].en_name,
                id: categorydata[i].children[j].id
              });

              //构造分类

              if (categorydata[i].children[j].children) {
                productCategory = categorydata[i].children[j].children;
              } else {
                productCategory = categorydata;
              }
            } else if (categorydata[i].children[j].children) {
              for (
                let n = 0;
                n < categorydata[i].children[j].children.length;
                n++
              ) {
                if (
                  Number(params.cate) ===
                  Number(categorydata[i].children[j].children[n].id)
                ) {
                  //三层
                  //构造面包屑导航
                  nav_bar.push({
                    en_name: categorydata[i].en_name,
                    id: categorydata[i].id
                  });
                  nav_bar.push({
                    en_name: categorydata[i].children[j].en_name,
                    id: categorydata[i].children[j].id
                  });
                  nav_bar.push({
                    en_name: categorydata[i].children[j].children[n].en_name,
                    id: categorydata[i].children[j].children[n].id
                  });

                  //构造分类
                  if (categorydata[i].children[j].children[n].children) {
                    productCategory =
                      categorydata[i].children[j].children[n].children;
                  } else {
                    productCategory = categorydata;
                  }
                } else if (categorydata[i].children[j].children[n].children) {
                  for (
                    let k = 0;
                    k < categorydata[i].children[j].children[n].children.length;
                    k++
                  ) {
                    if (
                      Number(params.cate) ===
                      Number(
                        categorydata[i].children[j].children[n].children[k].id
                      )
                    ) {
                      //四层
                      //构造面包屑导航
                      nav_bar.push({
                        en_name: categorydata[i].en_name,
                        id: categorydata[i].id
                      });
                      nav_bar.push({
                        en_name: categorydata[i].children[j].en_name,
                        id: categorydata[i].children[j].id
                      });
                      nav_bar.push({
                        en_name:
                          categorydata[i].children[j].children[n].en_name,
                        id: categorydata[i].children[j].children[n].id
                      });
                      nav_bar.push({
                        en_name:
                          categorydata[i].children[j].children[n].children[k]
                            .en_name,
                        id:
                          categorydata[i].children[j].children[n].children[k].id
                      });

                      //构造分类
                      if (categorydata[i].children[j].children[n].children) {
                        productCategory =
                          categorydata[i].children[j].children[n].children[k]
                            .children;
                      } else {
                        productCategory = categorydata;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if (!productCategory || productCategory == []||productCategory.length==0) {
      productCategory = categorydata;
    }
    let category = [];
    await store.dispatch("GET_CATEGORY", { store }).then(res => {
      category = res.data;
    });
    return {
      goods_list: goods.list,
      total: goods.total,
      limit: dataform.limit,
      categorydata: categorydata,
      category: category,
      productCategory: productCategory,
      nav_bar: nav_bar
    };
  },
  data() {
    return {
      //      productCategory:[],
      min_price: "",
      max_price: "",
      on_off: false
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.$router.push({
        path: this.$route.path,
        query: {
          // token: this.$route.query.token,
          keyword: this.$route.query.keyword,
          order_by: this.$route.query.order_by,
          asc_or_desc: this.$route.query.asc_or_desc,
          brand_id: this.$route.query.brand_id,
          min_price: this.$route.query.min_price,
          max_price: this.$route.query.max_price,
          page: val
        }
      });
    },
    updatedata(searchkeyword) {
      if (this.$route.query.keyword === searchkeyword) {
        this.$route.query.keyword = searchkeyword;
        let query = $.extend({ time: new Date().getTime() }, this.$route.query);
        this.$router.push({ path: this.$route.path, query: query });
      }
    },
    del() {
      //      alert(123)
      let that = this;
      event.stopPropagation();
      that.$router.push({
        path: that.$route.path,
        query: {
          // token: that.$route.query.token,
          keyword: that.$route.query.keyword,
          order_by: that.$route.query.order_by,
          asc_or_desc: that.$route.query.asc_or_desc,
          brand_id: that.$route.query.brand_id,
          page: that.$route.query.page
        }
      });
    }
  },
  mounted() {
    if (!this.$route.query.order_by) {
      $(".typeone").addClass("type-content-active");
    }
    if (this.$route.query.order_by === "time") {
      $(".typethree").addClass("type-content-active");
      if (this.$route.query.asc_or_desc == 1) {
        $(".typethree .el-icon-caret-top").addClass("active");
      } else {
        $(".typethree .el-icon-caret-bottom").addClass("active");
      }
    }
    if (this.$route.query.order_by === "price") {
      $(".typetwo").addClass("type-content-active");
      if (this.$route.query.asc_or_desc == 1) {
        $(".typetwo .el-icon-caret-top").addClass("active");
      } else {
        $(".typetwo .el-icon-caret-bottom").addClass("active");
      }
    }
    if (this.$route.query.min_price) {
      var that = this;
      that.on_off = true;
      that.min_price = this.$route.query.min_price;
      that.max_price = this.$route.query.max_price;
    }
    // console.log(this.nav_bar);

    // 增加分页 GO按钮
    let parentDom = document.getElementsByClassName("el-pagination")[0];
    let _dom = document.createElement("span");
    // _dom.className  =  'go_style';
    _dom.setAttribute(
      "style",
      "border: 1px solid #dedede;border-radius: 4px;line-height: 26px;color: #666;margin-left:8px;"
    );
    _dom.innerHTML = "GO";
    parentDom.appendChild(_dom);
  },
  components: {
    headerbar: headerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    productcondition: productcondition,
    footerbar: footerbar,
    productlists: productlists,
    righttab: righttab
  },
  watch: {
    //监听路由变化，刷新页面
    $route(to, from) {
      this.$router.go(0);
    }
  }
};
</script>

