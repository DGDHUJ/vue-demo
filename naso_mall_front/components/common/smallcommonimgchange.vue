<style lang="scss" scoped>
.commonchange1 {
  margin-right: 0px !important;
  width: 45px !important;
  img {
    width: 100%;
    border: 1px solid #ddd;
  }
}
.preview-list {
  margin-top: 4px;
  position: relative;
  width: 100%;
  height: 40px;
  overflow: hidden;
}
.spec-items {
  position: relative;
  width: 200px;
  height: 40px;
  margin: 0 20px;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    width: 156px;
  }
  ul li {
    float: left;
    margin: 2px;
    img {
      border: 1px solid #fff;
      width: 36px;
      height: 36px;
      @media screen and (max-width: 1200px) {
        width: 35px;
        height: 35px;
      }
    }
  }
  .active_li{
    margin: 0px;
    border: 2px solid #4b3f91;
  }
}
.lh {
  position: absolute;
  height: 30px;
  top: 0px;
  left: 0px;
  transition: all 0.2s ease;
}
.img-btn {
  display: block;
  width: 20px;
  height: 32px;
  float: left;
  position: absolute;
  cursor: pointer;
  top: 50%;
  margin-top: -12px;
}
.left {
  left: 0;
  height: 100%;
}
.right {
  right: 0px;
  height: 100%;
}
</style>
<template>
  <div>
    <div class="smallcommonimgchange">
      <div :key="item.url" v-for="item in images" class style="display:none;">
        <img class="cursor" @click="changeshowimg(item.url)" :src="item.url | imgCompress(45,45)">
      </div>
      <div class="preview-list">
        <div class="left img-btn" @click="left()">
          <i class="icon iconfont icon-zuoyou2"></i>
        </div>
        <div class="spec-items">
          <ul id="lh" class="lh">
            <li :key="item.url" v-for="item in images" :class="{'active_li':selectViewer == item.url}">
              <img @mouseenter="changeshowimg(item.url,$event)" :src="item.url | imgCompress(40,40)">
            </li>
          </ul>
        </div>
        <div class="right img-btn" @click="right()">
          <i class="icon iconfont icon-zuoyou1"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imgCompress } from "~/plugins/filters.js";

export default {
  name: "smallsmallcommonimgchange",
  props: ["images", "showimgs"],
  data() {
    return {
      timer: false,
      body_width: null,
      screenWidth: 0,
      ul_obj: null,
      ul_left: 0,
      li_num: 0,
      li_width: 39,
      li_setShow: 4,

      selectViewer:null
    };
  },
  computed: {
    offsetValue: function() {
      return this.li_width * this.li_setShow;
    }
  },
  methods: {
    changeshowimg(url,e) {
      this.$emit("changeimgs", url);
      this.selectViewer = url
      
      // var _ul = document.getElementById("lh");
      // var _li = _ul.getElementsByTagName("li");
      // for (let i = 0; i < _li.length; i++) {
      //   _li[i].style.margin = '2px'
      //   _li[i].style.border = ''

      // }
      
      // e.currentTarget.className = "active_li"
      // e.currentTarget.style.margin = 0
      // e.currentTarget.style.border = '2px solid #4b3f91'
    },
    left() {
      if (this.ul_obj.style.left === "" || this.ul_left === 0) {
        this.ul_obj.style.left = 0;
        this.ul_left = 0;
      } else {
        this.ul_obj.style.left = this.ul_left + this.offsetValue + "px";
        this.ul_left += this.offsetValue;
      }
    },
    right() {
      // console.log("偏移值：" + this.offsetValue);
      // console.log("总长度" + this.li_num * this.li_width);
      // console.log("显示长度" + this.li_setShow * this.li_width);
      // console.log("左边距-绝对值：" + Math.abs(this.ul_left));

      if (this.ul_obj.style.left === "") {
        this.ul_obj.style.left = 0;
        this.ul_left = 0;
      }
      if (
        this.li_num * this.li_width - Math.abs(this.ul_left) >=
        Math.abs(this.ul_left)
      ) {
        this.ul_obj.style.left = this.ul_left - this.offsetValue + "px";
        this.ul_left -= this.offsetValue;
      }

      // console.log("------------------执行后-----------------------");
      // console.log("偏移值：" + this.offsetValue);
      // console.log("总长度" + this.li_num * this.li_width);
      // console.log("显示长度" + this.li_setShow * this.li_width);
      // console.log("绝对值：" + Math.abs(this.ul_left));
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        setTimeout(() => {
          if (this.screenWidth > 1200) {
            this.li_setShow = 5
            this.ul_left = 0
            this.li_width = 40
          }
          
          this.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    //窗口宽度数值首次记录
    this.screenWidth = document.body.clientWidth;
    //窗口改变事件
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
      })();
    };

    this.ul_obj = document.getElementsByClassName("lh")[0];
    // 设置ul宽度宽度
    this.li_num = this.ul_obj.children.length;
    this.ul_obj.style.width = this.li_num + this.li_num * this.li_width+ "px";
  }
};
</script>
