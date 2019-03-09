<style lang="scss" scoped>
.menu_common {
  position: absolute;
  background: #4b3f91e9;
  z-index: 999998;
  width: 100%;
  height: 444px;
  ul.main_ul {
    a {
      color: #fff;
      font-size: 14px;
    }
    letter-spacing: -0.2px;
    height: 430px;
    li {
      padding: 22px 6px 0 6px;
      text-align: left;
      vertical-align: middle;
      height: 130px;
    }
    .main_ul-recommend_list {
      margin-top: 10px;
      a {
        font-size: 11px;
        color: #ffffffaa;
        margin-top: 4px;
        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
        // &:after {
        // content:" | ";
        // }
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
          &:after {
            content: "";
          }
        }
      }
    }
    // ----备注：如果scss嵌套太深，会影响@media的操作 @at-root可用于解救（降权） -----
    @at-root .menu-one {
      white-space: nowrap;
      .iconfont {
        display: inline-block;
        font-size: 16px;
        margin-right: 10px;
      }
      span {
        display: inline-block;
        width: 130px;
        vertical-align: top;
        white-space: pre-wrap;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .main_ul-recommend_list{
      margin-top: 8px;
  }
  .menu_common ul.main_ul {
    letter-spacing: 0px;
    li {
      padding: 22px 6px 0 10px;
    }
  }
  .menu-one span {
    display: inline-block;
    width: 160px;
    vertical-align: top;
    white-space: pre-wrap;
  }
}
.child {
  position: absolute;
  top: 0;
  padding: 2px;
  margin-top: 4px;
  border: 1px solid #ccc;
  width: 988px;
  height: 440px;
  background: #fff;
  .child-layout {
    position: relative !important;
    overflow: hidden !important;
    width: calc(100% - 298px);
  }

  .left {
    position: relative;
    left: 8px;
    top: 0;
    right: -17px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    width: calc(100% - 8px);
    height: 433px;
  }
  .left {
    // display: flex;
    overflow-y: scroll;
    overflow-x: hidden;
    justify-content: space-around;
    word-wrap: break-word;
    div{
      float: left;
      width: 33%;
      // overflow: hidden;
    }
    p {
      margin: 15px 0 15px;
    }
    ul {
      height: 382px;
    }
    ul:last-child {
      padding-right: 10px;
    }
    ul li {
      font-size: 12px;
      padding-bottom: 6px;
    }
  }
  .right {
    // float: right;
    position: absolute;
    top: 0;
    right: 0;
    // width: 18rem;
    height: 438px;
    // background: #ee8;
    text-align: center;
    // padding-top: 16px;
    // border-left: 2px dotted #4b3f9133;
    width: 300px;
    background: #fff;
    img {
      width: 130px;
      height: 130px;
      display: inline-block;
      margin: 8px 10px;
      border: 1px solid #ddd;
      // padding-left: 6px;
      // margin-bottom: 8px;
    }
    // img:last-of-type {
    //   margin-bottom: 0px;
    // }
  }
}

/*滚动条样式*/
.left::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.left::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  box-shadow: inset 0 0 5px #4b3f91;
  -webkit-box-shadow: inset 0 0 5px #4b3f91;
  background: rgba(0, 0, 0, 0.2);
}
.left::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div class="menu_common" v-show="isShow" @mouseenter="menuShow()" @mouseleave="menuClose()">
    <ul class="main_ul">
      <li :style="c_liListHeight" v-for="(item) in list" :key="item.id" @mouseenter="toggle(item)">
        <!-- 主要类别 -->
        <nuxt-link
          class="menu-one"
          :to="{name: 'product-list-cate',params:{cate:item.id}}"
        >
          <i :class="'iconfont ' + item.icon"></i>
          <span>{{item.en_name}}</span>
        </nuxt-link>
        <!-- 推荐产品 -->
        <div class="main_ul-recommend_list">
          <nuxt-link
            v-for="(product,index) in item.recommend_list"
            :key="index"
            v-if="index < 6"
            :to="{name: 'product-list-cate',params:{cate:product.id},query:{'token':token,cate:product.id}}"
            target="_blank"
          >{{product.en_name| ellipsis(20)}}</nuxt-link>
        </div>
      </li>
    </ul>
    <section class="child" v-if="isShow_child" :style="c_listWidth">
      <div class="child-layout clear">
        <div class="left">
          <div v-for="(sub) in children_list.children" :key="sub.id">
            <p>{{sub.en_name}}</p>
            <ul>
              <nuxt-link
                :key="item1.id"
                v-for="(item1) in sub.children"
                :to="{name: 'product-list-cate',params:{cate:item1.id},query:{'token':token}}"
              >
                <li>{{item1.en_name}}</li>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- <img
          v-for="(item,index) in children_list.banners"
          :key="item.id"
          :src="item.path"
          v-show="index<3"
        >-->
         <div>
           <a v-for="(item,index) in children_list.banners"  :key="item.id" :href="item.url | imgCompress(130,130)" target="_blank"><img :src="item.path" v-show="index<6"></a>
        </div>
        <!-- <div>
          <img src="http://img.nasotrading.com/efb8902f680220ffd4625c1b0b012acd.jpg">
          <img src="http://img.nasotrading.com/efb8902f680220ffd4625c1b0b012acd.jpg">
          <img src="http://img.nasotrading.com/efb8902f680220ffd4625c1b0b012acd.jpg">
          <img src="http://img.nasotrading.com/efb8902f680220ffd4625c1b0b012acd.jpg">
          <img src="http://img.nasotrading.com/efb8902f680220ffd4625c1b0b012acd.jpg">
          <img src="http://img.nasotrading.com/efb8902f680220ffd4625c1b0b012acd.jpg">
        </div> -->
      </div>
    </section>
  </div>
</template>
<script>
import $ from "jquery";
import {imgCompress} from '~/plugins/filters.js';
export default {
  name: "menuCommon",
  props: ["listSize", "menuIO", "category"],
  data() {
    return {
      list: [],
      children_list: {},
      toggleId: null,

      isShow: false,
      isShow_child: false,
      setTimeClose: null, //定时器ID
      token: "",

      list_all_w: 0,
      list_w: 0,
      list_h: 0,
      li_list_h: 0
    };
  },
  methods: {
    toggle: function(obj) {
      this.children_list = obj;
      this.isShow = true;
      this.isShow_child = true;
    },
    menuClose() {
      this.$emit("menuClose");
      //定时器效果棒棒哒，鼠标移出去能趁它不在意移回去能继续显示
      this.setTimeClose = setTimeout(() => {
        this.isShow_child = false;
      }, 200);
    },
    menuShow() {
      clearTimeout(this.setTimeClose);
      this.$emit("menuShow");
    },
    sortListData(arr, showDataByThis) {
      if (arr === undefined) {
        return [];
      }
      let data = arr.sort(this.comment.compare("id", true));
      data.forEach(el => {
        if (el.children) {
          el.children.sort(this.comment.compare("id", true));
          el.children.forEach(e => {
            if (e.children) {
              e.children.sort(this.comment.compare("id", true));
            }
          });
        }
      });
      showDataByThis = data[0];
      return data;
    }
  },
  computed: {
    //改变样式方法1：
    // 计算
    c_listWidth: function() {
      return this.list_w > 0 && this.isShow
        ? "left:" +
            this.list_w +
            "px;width:" +
            (this.list_all_w - this.list_w) +
            "px;"
        : "display:none;";
    },
    c_liListHeight: function() {
      return "heigth:" + this.li_list_h + "px";
    }
  },
  watch: {
    listSize: {
      handler: function(val) {
        this.list_all_w = val[0]; //导航栏总宽度
        this.list_w = val[1]; //导航第一个宽度
        this.list_h = val[2]; //banner高度
        //改变样式方法2：
        $(".child").css({ width: val[0] - val[1] });
      },
      deep: true
    },
    menuIO: function(val) {
      this.isShow = val;
    }
  },
  mounted() {
    this.list = this.sortListData(this.category, this.children_list);
    // console.log(this.list);
    let mainList_li = document.getElementsByClassName("main_ul")[0];
    this.li_list_h = this.listSize[0] / mainList_li.children.length;
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
  }
};
</script>
