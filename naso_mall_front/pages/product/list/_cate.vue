<style lang="scss" scoped>
@import "../../../styles/public.scss";

$bd_1px: 1px solid #dcdcdc;
.l2-list {
  position: relative;
  width: 100%;
  height: auto;
  background: white;
}

.headercontent {
  margin-top: 40px;
  position: relative;
  // overflow: hidden;
  background: white;
}
.tabcontent .el-breadcrumb {
  line-height: 40px;
}
._main {
  width: 100%;
  margin-bottom: 60rem;

  //去掉下面开启宽屏模式  - Widescreen mode
  // background: #eee;
  max-width: 1200px;
  margin: 0 auto;
}
.banner {
  img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
.level_2-sl_warp_screen{
  border:1px solid #dcdcdc;
}
.level_2 {
  margin-bottom: 80px;
  &-sl_warp {
    border: $bd_1px;
    background-color: #f1effa;
    border-top: 0;
    // &:last-child {
    //   background-color: #000;
    // }
    &:first-child {
      border-top: $bd_1px;
    }
    &_key {
      float: left;
      padding: 10px 6px 0 10px;
      width: 13%;
      font-weight: bold;
      color: #666666;
    }
    &_value {
      float: left;
      width: 87%;
      background-color: #fff;
      position: relative;
      ul {
        padding: 10px 24px 0px 24px;
      }

      ul li {
        float: left;
        padding-right: 15px;
        width: 175px;
        // line-height: 3;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          color: #4a3f91;
        }
        @media screen and (min-width: 1200px) {
          & {
            width: 175px;
          }
        }
      }
      &-stretch {
        padding-bottom: 10px;
        text-align: center;
        color: #4a3f91;
        font-size: 14px;
        font-weight: 800;
        span {
          display: inline-block;
          width: 200px;
          height: 36px;
          line-height: 36px;
          border: 1px solid #4a3f91;
          border-radius: 4px;
        }
      }
    }
  }
  &-sl_warp:first-child {
    .level_2-sl_warp_value {
      ul {
        // height: 150px;
        overflow: hidden;
      }
    }
  }

  @at-root &-sort {
    margin-top: 2rem;
    padding-left: 1rem;
    line-height: 3rem;
    background-color: #f1f1f1;
    div {
      display: inline-block;
      position: relative;
      padding-right: 16px;
      text-align: center;
      vertical-align: middle;
      border: $bd_1px;
      border-right: 0;
      height: 1.9rem;
      line-height: 1.8rem;
      width: 9rem;
      color: #555;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #4a3f91;
        color: #fff;
      }
      .icon {
        position: absolute;
        right: 5px;
        top: 0.2rem;
        color: #999999;
        &:last-child {
          top: 9px;
        }
      }
      &:first-child {
        width: 7rem;
        padding-right: 0;
      }
      &:last-child {
        border-right: $bd_1px;
      }
    }
  }

  &-product {
    margin: 1.6rem 0 2rem 0;
    ul li {
      // float: left;
      display: inline-block;
      margin: 0 20px 20px 0;
      &:nth-of-type(4n) {
        margin-right: 0;
      }
    }
    &-item {
      position: relative;
      padding: 0.2rem;
      width: 235px;
      height: 320px;
      border: 1px solid #e1e1e1;
      cursor: pointer;

      &_img {
        display: block;
        height: 230px;
        overflow: hidden;
        img {
          position: relative;
          width: 100%;
          height: auto;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      &_title {
        position: absolute;
        padding: 0 1rem;
        margin-top: 0.8rem;
        color: #666;
      }
      &_price {
        position: absolute;
        bottom: 0.6rem;
        padding: 0 1rem;
        font-weight: bold;
        color: #e60012;
      }
    }
    @media screen and (min-width: 1200px) {
      & ul li:nth-of-type(4n) {
        margin-right: 20px;
      }
      & ul li:nth-of-type(5n) {
        margin-right: 0;
      }
      &-item {
        width: 224px;
      }
    }
  }
}

.level_2-sort .sort-active_up {
  .icon {
    color: #888;
  }
}

.level_2-sort .sort-active2_down {
  .icon {
    color: #888;
  }
}
.level_2-sort .select_sort{
  color: #fff;
  background-color: #4a3f91;
}
.sort-active2_down .select_sort{
  color: #fff;
  background-color: #4a3f91;
}
.level_2-sort .sort-active2_down .select_icon{
  color: #fff;
}
.level_2-sort .sort-active_up .select_icon{
  color: #fff;
}
.select_active {
  line-height: 4rem;
  // padding-left: 2rem;
  span {
    display: inline-block;
    position: relative;
    margin-left: 1rem;
    padding: 0 1.2rem 0 1rem;
    height: 1.6rem;
    line-height: 1.4rem;
    color: #4a3f91;
    border: 1px solid #4a3f91;
    border-radius: 1rem;
    i {
      position: absolute;
      border-radius: 1.2rem;
      font-size: 1.2rem;
      right: -0.5rem;
      top: -0.5rem;
    }
  }
}
.hide-btn-layout {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.hide-btn-article-box {
  padding-top: 50px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(255, 255, 255, 0)),
    color-stop(70%, #fff)
  );
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0) 0%,
    #fff 50%
  );
}
.clearSec {
  display: inline-block;
  margin-left: 2rem;
  color: #f08519;
}
.content-stretch {
  height: auto !important;
}
.footline {
  margin-top: 40px;
}
  .productpage-content {
    margin: 50px 0;
    text-align: center;
  }
  .curpoint{
    cursor: pointer;
  }
</style>
<template>
  <div class="l2-list">
    <headerbar></headerbar>
    <div class="headercontent">
      <commonheader @upup="updatedata" :searchkeyword="$route.query.keyword"></commonheader>
      <commonheaderbar :category="category"></commonheaderbar>
    </div>
    <div class="layout">
      <div>
        <div class="tabcontent">
          <el-breadcrumb separator-class="el-icon-arrow-right">
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
            >{{item.en_name }}</el-breadcrumb-item>          </el-breadcrumb>
        </div>
      </div>

      <div class="level_2">
        <transition name="el-fade-in-linear">
          <div class="level_2-sl_warp_screen clear" v-if="secFir.price || secFir.elecName">
            <div class="level_2-sl_warp_value clear select_active">
              <div>
                <span v-show="secFir.elecName" :value="secFir.elecId">
                  {{secFir.elecName}}
                  <i class="el-icon-circle-close curpoint" @click="delSecFir($event)"></i>
                </span>
                <span v-show="secFir.price" :value="secFir.priceValue">
                  {{secFir.price}}
                  <i class="el-icon-circle-close curpoint" @click="delSecFir"></i>
                </span>
                <div class="clearSec curpoint" @click="delAllValue()">Reset</div>
              </div>
            </div>
          </div>
        </transition>

        <div class="level_2-sl_warp clear" v-show="!secFir.elecName">
          <div class="level_2-sl_warp_key">Product category :</div>
          <div class="level_2-sl_warp_value clearfix">
            <ul :class="{'content-stretch' : isShow}">
              <li
                v-for="item in productCategory"
                :key="item.id"
                @click="addSecFir(item.id,item.en_name)"
              >
                    <!--列表页点击第二层-->
                    <nuxt-link :to="{name: 'product-list-cate',params:{cate:item.id}}">{{item.en_name}}</nuxt-link>
              </li>
            </ul>
            <div
              v-if="categoryList.length > 18"
              class="level_2-sl_warp_value-stretch hide-btn-layout"
              :class="{'hide-btn-article-box': !isShow}"
              @click="showOn()"
            >
              <span>{{isShow?'Hidden part':'Show All'}}</span>
            </div>
          </div>
        </div>
        <div class="level_2-sl_warp clear" v-if="!secFir.price">
          <div class="level_2-sl_warp_key">Price Range :</div>
          <div class="level_2-sl_warp_value">
            <ul>
              <li v-for="(item,key) in priceRange" :key="key">
                <span
                  @click="addPriceValue(key,$event)"
                >{{ item[0] | numFilter}} ~ {{ item[1] | numFilter }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="level_2-sort">
          <div @click="defaultSort()" :class="{'select_sort':!$route.query.order_by}">The default</div>
          <!-- <div @click="defaultSort()" class="select_sort">The default</div> -->
          <div class="sort-active2_down" @click="priceSorted()"  :class="{'select_sort':$route.query.order_by=='price'}">
            Price sort
            <i class="icon el-icon-caret-top" :class="{'select_icon':$route.query.order_by=='price' && $route.query.asc_or_desc == '0'}"></i>
            <i class="icon el-icon-caret-bottom" :class="{'select_icon':$route.query.order_by=='price' && $route.query.asc_or_desc == '1'}"></i>
          </div>
          <div class="sort-active_up" @click="timeSequence()" :class="{'select_sort':$route.query.order_by=='time'}">
            Time to market
            <i class="icon el-icon-caret-top" :class="{'select_icon':$route.query.order_by=='time' && $route.query.asc_or_desc == '0'}"></i>
            <i class="icon el-icon-caret-bottom" :class="{'select_icon':$route.query.order_by=='time' && $route.query.asc_or_desc == '1'}"></i>
          </div>
        </div>
        <productlists :goods_list="adata.list"></productlists>
        <div class="productpage-content">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :current-page="Number($route.query.page)"
            @current-change="handleCurrentChange"
            :page-size="limit"
            :total="adata.total"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div class="footline"></div>
    <footerbar></footerbar>
    <righttab></righttab>
  </div>
</template>
<script>
import headerbar from "../../../components/common/headerbar.vue";
import commonheader from "../../../components/common/commonheader.vue";
import commonheaderbar from "../../../components/common/commonheaderbar.vue";
import productlists from "../../../components/productlistcommon/productlists.vue";
import footerbar from "../../../components/common/footbar.vue";
import righttab from "../../../components/common/righttab.vue";
import clampy from "@clampy-js/vue-clampy";
import {numFilter} from '~/plugins/filters.js';
export default {
  name: "l2list",
  components: {
    headerbar,
    commonheader,
    commonheaderbar,
    productlists,
    footerbar,
    righttab
  },
  directives: {
    clampy
  },
  async asyncData({ app, params, store, query, redirect }) {
     let url_goods = "";
     let param ={};
    if(query.keyword && query.keyword!==""){
    url_goods = app.store.state.headerUrl + "goods/search";
     param = {
            limit: 10,
            page: Number(query.page) || 1,
            category_id: Number(params.cate) || null,
            keyword: query.keyword || "",
            order_by: query.order_by || null,
            asc_or_desc: Number(query.asc_or_desc) || null,
            min_price: Number(query.min_price) || 0,
            max_price: Number(query.max_price) || 0
          };
    }else{
     url_goods = app.store.state.headerUrl + "goods";
           param = {
            limit: 10,
            page: Number(query.page) || 1,
            category_id: Number(params.cate) || null,
            keyword: query.keyword || "",
            order_by: query.order_by || null,
            asc_or_desc: Number(query.asc_or_desc) || null,
            brand_id: Number(query.brand_id) || null,
            min_price: Number(query.min_price) || 0,
            max_price: Number(query.max_price) || 0
          };
    }
    
     let data = await app.$axios
            .post(url_goods, param, { header: { token: query.token } })
            .then(res => {
                if (res.data.code == 1) {
                  redirect({
                    path:'/nofind',
                    query:{
                      limit:30,
                      page:1,
                      keyword:query.keyword
                    }
                  })
                }

              if(res.data.data === null){
                return [];
              }else{                
                  res.data.data.list.forEach((item)=>{
                    if(item.pic){
                      item.img_url = item.pic;
                    }
                  })
                return res.data.data;
              }
            })
            .catch(err => {
              console.error(err);
            });
    
    //菜单
    let category = [];
    let categoryList = [];
    await store.dispatch("GET_CATEGORY", { store }).then(res => {
      res.data.forEach(element => {
        if (element.children) {
          categoryList = categoryList.concat(element.children);
        }
      });
      
      category = res.data;
    });
    //构造商品分类数据
  
    let productCategory = [];
    let nav_bar = [];
    if (category.length && category.length > 0) {
      for (let i = 0; i < category.length; i++) {
        if (Number(params.cate) === Number(category[i].id)) {
          //一层
          //构造面包屑导航
          nav_bar.push({
            en_name: category[i].en_name,
            id: category[i].id
          });
          //构造分类
          if (category[i].children) {
            productCategory = category[i].children;
          } else {
            productCategory = category;
          }
        } else if (category[i].children) {
          for (let j = 0; j < category[i].children.length; j++) {
            if (
              Number(params.cate) === Number(category[i].children[j].id)
            ) {
              //二层
              //构造面包屑导航
              nav_bar.push({
                en_name: category[i].en_name,
                id: category[i].id
              });
              nav_bar.push({
                en_name: category[i].children[j].en_name,
                id: category[i].children[j].id
              });

              //构造分类

              if (category[i].children[j].children) {
                productCategory = category[i].children[j].children;
              } else {
                productCategory = category;
              }
            } else if (category[i].children[j].children) {
              for (
                let n = 0;
                n < category[i].children[j].children.length;
                n++
              ) {
                if (
                  Number(params.cate) ===
                  Number(category[i].children[j].children[n].id)
                ) {
                  //三层
                  //构造面包屑导航
                  nav_bar.push({
                    en_name: category[i].en_name,
                    id: category[i].id
                  });
                  nav_bar.push({
                    en_name: category[i].children[j].en_name,
                    id: category[i].children[j].id
                  });
                  nav_bar.push({
                    en_name: category[i].children[j].children[n].en_name,
                    id: category[i].children[j].children[n].id
                  });

                  //构造分类
                  if (category[i].children[j].children[n].children) {
                    productCategory =
                      category[i].children[j].children[n].children;
                  } else {
                    productCategory = category;
                  }
                } else if (category[i].children[j].children[n].children) {
                  for (
                    let k = 0;
                    k < category[i].children[j].children[n].children.length;
                    k++
                  ) {
                    if (
                      Number(params.cate) ===
                      Number(
                        category[i].children[j].children[n].children[k].id
                      )
                    ) {
                      //四层
                      //构造面包屑导航
                      nav_bar.push({
                        en_name: category[i].en_name,
                        id: category[i].id
                      });
                      nav_bar.push({
                        en_name: category[i].children[j].en_name,
                        id: category[i].children[j].id
                      });
                      nav_bar.push({
                        en_name:
                          category[i].children[j].children[n].en_name,
                        id: category[i].children[j].children[n].id
                      });
                      nav_bar.push({
                        en_name:
                          category[i].children[j].children[n].children[k]
                            .en_name,
                        id:
                          category[i].children[j].children[n].children[k].id
                      });

                      //构造分类
                      if (category[i].children[j].children[n].children) {
                        productCategory =
                          category[i].children[j].children[n].children[k]
                            .children;
                      } else {
                        productCategory = category;
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
      productCategory = category;
    }





    let page = query.page;
    return {
      page,
      adata: data,
      limit: param.limit,
      category,
      categoryList,
      productCategory,
      nav_bar
    };
  },
  data() {
    return {
      keyword: "",
      categoryName: "Cookware",
      priceRange: [[0, 10], [10, 20], [20, 30], [30, 40], [40, 99]],
      secFir: {
        elecName: null,
        elecId: null,
        price: null,
        priceValue: null
      }, //筛选条件
      isShow: false
    };
  },
  mounted() {
    if (this.$route.query.min_price) {
      this.priceRange.forEach((e,i)=>{
        if (e[0]===Number(this.$route.query.min_price)) {
          this.secFir.price = numFilter(e[0]) + ' ~ ' + numFilter(e[1])
          this.secFir.priceValue = i 
        }
      })
    }
    if (this.$route.query.keyword) {
      this.secFir.elecName = this.$route.query.keyword
    }
    // 增加分页 GO按钮
    let parentDom = document.getElementsByClassName('el-pagination')[0]
    let _dom = document.createElement('span');
    _dom.setAttribute('style','border: 1px solid #dedede;border-radius: 4px;line-height: 26px;color: #666;margin-left:8px;')
    _dom.innerHTML  = 'GO';
    parentDom.appendChild(_dom)
  },
  methods: {
    //价格排序
    priceSorted(){
      let asc_or_desc = Number(!this.$route.query.asc_or_desc)
      this.$router.push({
        path: this.$route.path,
        query: {
          keyword: this.$route.query.keyword || null,
          order_by: 'price',
          asc_or_desc: asc_or_desc,
          brand_id: this.$route.query.brand_id,
          min_price: this.$route.query.min_price || null,
          max_price: this.$route.query.max_price || null,
          page: this.$route.query.page
        }
      });
      this.getAdata({order_by:'price',asc_or_desc})
    },
    //时间排序
    timeSequence(){
      let asc_or_desc = Number(!this.$route.query.asc_or_desc)
      this.$router.push({
        path: this.$route.path,
        query: {
          keyword: this.$route.query.keyword || null,
          order_by: 'time',
          asc_or_desc: asc_or_desc,
          brand_id: this.$route.query.brand_id,
          min_price: this.$route.query.min_price || null,
          max_price: this.$route.query.max_price || null,
          page: this.$route.query.page
        }
      });
      
      this.getAdata({order_by:'time',asc_or_desc:asc_or_desc})
    },
    defaultSort(){
      this.$router.push({
        path: this.$route.path,
        query: {
          order_by:null,
          keyword: this.$route.query.keyword || null,
          brand_id: this.$route.query.brand_id,
          min_price: this.$route.query.min_price || null,
          max_price: this.$route.query.max_price || null,
          page: this.$route.query.page
        }
      });
      this.getAdata({},null,true)
    },
    getAdata(obj, delKey, sort) {
      let url_goods = this.$store.state.headerUrl + "goods";
      let comp = () => {
          if (obj.asc_or_desc === 0) {
            return 0
          }else if(obj.asc_or_desc == '' && obj.asc_or_desc == undefined && obj.asc_or_desc== null){
            return null
          }else{
            return obj.asc_or_desc ||  Number(this.$route.query.asc_or_desc) || null
          }
        }
      let param = {
        limit: 10,
        category_id: obj.category_id || Number(this.$route.params.cate) || null,
        page: obj.page || Number(this.$route.query.page) || 1,
        keyword: obj.keyword || this.$route.query.keyword || "",
        order_by: obj.order_by || this.$route.query.order_by || null,
        asc_or_desc:comp(),
        brand_id: obj.brand_id || Number(this.$route.query.brand_id) || null,
        min_price: obj.min_price || Number(this.$route.query.min_price) || null,
        max_price: obj.max_price || Number(this.$route.query.max_price) || null
      };
        if (delKey && typeof delKey == 'object') {
          delKey.forEach(key => {
            delete param[key];
          });
      }
      if (sort) {
        delete param['order_by'];
        delete param['asc_or_desc'];
      }
      this.$axios
        .post(url_goods, param, {
          header: { token: this.$route.query.token || "" }
        })
        .then(res => {
          this.adata = res.data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    handleCurrentChange(val) {
      this.$router.push({
        path: this.$route.path,
        query: {
          keyword: this.$route.query.keyword,
          order_by: this.$route.query.order_by,
          asc_or_desc: this.$route.query.asc_or_desc,
          brand_id: this.$route.query.brand_id,
          min_price: this.$route.query.min_price,
          max_price: this.$route.query.max_price,
          page: val
        }
      });
      this.getAdata({ page: val });
    },
    showOn() {
      this.isShow = !this.isShow;
      console.log(this.isShow);
    },
    addPriceValue(key, el) {
      this.secFir.price = el.target.innerText; //string
      this.secFir.priceValue = key; // array

      this.$router.push({
        path: this.$route.path,
        query: {
          category_id: this.$route.params.category_id,
          keyword: this.$route.query.keyword,
          order_by: this.$route.query.order_by,
          asc_or_desc: this.$route.query.asc_or_desc,
          brand_id: this.$route.query.brand_id,
          min_price: this.priceRange[this.secFir.priceValue][0],
          max_price: this.priceRange[this.secFir.priceValue][1],
          page: this.$route.query.page
        }
      });
      this.getAdata({
        min_price: this.priceRange[this.secFir.priceValue][0],
        max_price: this.priceRange[this.secFir.priceValue][1]
      });
    },
    addSecFir(id, name) {

      // this.$set(this.secFir, "elecName", name);
      // this.$set(this.secFir, "elecId", id);
      // this.queryCateId(id);
      // this.$router.push({
      //   path: this.$route.path,
      //   query: {
      //     keyword: name,
      //     category_id: this.$route.params.category_id,
      //     order_by: this.$route.query.order_by,
      //     asc_or_desc: this.$route.query.asc_or_desc,
      //     brand_id: this.$route.query.brand_id,
      //     min_price: this.$route.query.min_price,
      //     max_price: this.$route.query.max_price,
      //     page: this.$route.query.page
      //   }
      // });
      // this.getAdata({ keyword: name });
    },
    delSecFir(ev, key) {
      let el = ev.target || ev.currentTarget;
      let domText = el.parentNode.innerText;
      let domValue = el.parentNode.getAttribute("value");
      if (this.secFir.elecName == domText && this.secFir.elecId == domValue) {
        // 类别相同时
        this.secFir.elecName = this.secFir.elecId = null; //消除
      } else if (this.secFir.price == domText) {
        // 筛选价格相同时
        this.secFir.price = this.secFir.priceValue = null; //消除
      }
      if (this.secFir.elecId == null || this.secFir.elecId == undefined) {
        this.$router.push({
          path: this.$route.path,
          query: {
            category_id: this.$route.params.category_id,
            order_by: this.$route.query.order_by,
            asc_or_desc: this.$route.query.asc_or_desc,
            brand_id: this.$route.query.brand_id,
            min_price: this.$route.query.min_price,
            max_price: this.$route.query.max_price,
            page: this.$route.query.page
          }
        });
        this.getAdata({}, ["keyword"]);
      } else if (
        this.secFir.priceValue == null ||
        this.secFir.priceValue == undefined
      ) {
        this.$router.push({
          path: this.$route.path,
          query: {
            keyword: this.$route.query.keyword,
            category_id: this.$route.params.category_id,
            order_by: this.$route.query.order_by,
            asc_or_desc: this.$route.query.asc_or_desc,
            brand_id: this.$route.query.brand_id,
            page: this.$route.query.page
          }
        });
        this.getAdata({}, ["min_price", "max_price"]);
      }else{
        this.$router.push({
          path: this.$route.path,
          query: {
            category_id: this.$route.params.category_id,
            order_by: this.$route.query.order_by,
            asc_or_desc: this.$route.query.asc_or_desc,
            brand_id: this.$route.query.brand_id,
            page: this.$route.query.page
          }
        });
        this.getAdata({}, ["keyword", "min_price", "max_price"]);
      }
    },
    delAllValue() {
      for (let key in this.secFir) {
        this.secFir[key] = null;
      }
      this.$router.push({
        path: this.$route.path,
        query: {
          category_id: this.$route.params.category_id,
          order_by: this.$route.query.order_by,
          asc_or_desc: this.$route.query.asc_or_desc,
          brand_id: this.$route.query.brand_id,
          page: this.$route.query.page
        }
      });
      this.getAdata({}, ["keyword", "min_price", "max_price"]);
    },
    updatedata(searchkeyword) {
      if (this.$route.query.keyword === searchkeyword) {
        this.$route.query.keyword = searchkeyword;
        let query = $.extend({ time: new Date().getTime() }, this.$route.query);
        this.$router.push({ path: this.$route.path, query: query });
      }
    },
    inputSecFir(item) {
      console.log(item);
    },
    queryCateId(id) {
      let url = this.$store.state.headerUrl + "/category/" + id;
      this.$axios.get(url).then(res => {
        console.log(res.data);
      });
    }
  },
  watch: {
     '$route':function (val,oval) {
       this.$router.go(0);
      }
  }
};
</script>