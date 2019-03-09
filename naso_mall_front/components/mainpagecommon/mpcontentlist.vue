
<style lang="scss" scoped>
.mpcontentlist {
  // display: box;
  // display: -webkit-box;
  // display: -ms-flexbox;
  width: 80%;

}
.mpcontentlist-layout{
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;

  // display: flex;
  // flex-wrap: wrap;
  // flex-direction: row;
  overflow: hidden;
  align-content: space-between;
  cursor: pointer;
  color:#666666;
}
.mpcontentlist-item {
  float: left;
  width: 20%;
  border: 1px solid #ddd;
  height: 185px;
  .showText {
    // position: absolute;
    position: fixed;
    /*top: 40%;*/
    /*left: 40%;*/
    width: 3000px;
    z-index: 10000;
    span {
      border: 1px solid #dcdcdc;
      background-color: #fff;
      padding: 4px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .mpcontentlist-item {
    height: 222px;
  }
}
.mpcontentlist-itemimg {
  text-align: center;
  img {
    // 因为要固定图片大小，所以先注释65%的大小
    /*width: 65%;*/
    /*height: auto;*/
    width: 120px;
    height: 120px;
    // margin-top: 10px;
  }
  @media screen and (min-width: 1200px) {
    img {
      // 因为要固定图片大小，所以先注释65%的大小
      /*width: 65%;*/
      /*height: auto;*/
      width: 140px;
      height: 140px;
      margin-top: 10px;
    }
  }
}
.mpcontentlist-item{
  position: relative;
}
.mpcontentlist-itemtext {
  margin-top: 6px;
  padding-left: 10px;
  font-size: 12px;
  color:#666666;
  /*超出两行显示。。。*/
  width: 98%;
  /*text-overflow: -o-ellipsis-lastline;*/
  overflow: hidden;
  // text-overflow: ellipsis;
  // display: -webkit-box;
  // -webkit-line-clamp: 2;
  // line-clamp: 2;
  // -webkit-box-orient: vertical;
}

.mpcontentlist-itemtext1 {
  position: absolute;
  bottom: 0;
  padding: 0 0 10px 10px;
  color: #e60012;
  font-size: 0.9rem;
}
.noproducts {
  text-align: center;
  width: 100%;
  margin: 15%;
}
</style>

<template>
  <div class="mpcontentlist">
    <div v-for="(items,k,i) in floor_list[keyvalue]" :key="i"  class="mpcontentlist-layout">
      <div class="mpcontentlist-item" 
      v-show="items.id == select"
      v-for="(item,index,key) in items.goods_list" 
      :key="key"  @mousemove="enter(item.id,$event)" @mouseleave="leave($event)">
        <nuxt-link :to="{name: 'product-id',params:{id:item.id}}"  target="_blank">
          <div class="mpcontentlist-itemimg">
            <img :src="item.img_url | imgCompress(140,140)"/>
          </div>
          <div class="mpcontentlist-itemtext">
            <p v-clampy="2">{{item.title}}</p>
          </div>
          <div class="mpcontentlist-itemtext1">
            <p>
              <span >&nbsp;${{item.sell_price|money}}</span>
              <span v-show="item.msell_price != 0">&nbsp;~ &nbsp; ${{item.msell_price|money}}</span>
            </p>
          </div>
        </nuxt-link>
        <transition name="el-fade-in">
          <div :style="[t,l]" v-show="fuxian === item.id && isShow" class="showText">
            <span >{{item.title}}</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
import { _throttle } from "../../utils/methods";
import clampy from '@clampy-js/vue-clampy';
import {imgCompress} from '~/plugins/filters.js';
export default {
  name: "mpcontentlist",
  props: ["floor_list","keyvalue","select"],
  directives: {
    clampy 
  },
  data() {
    return {
      token: "",
      fuxian: "",
      timer: null,
      isShow: false,
      x: "",
      y: "",
      e: "",
      t: { top: "0" },
      l: { left: "0" },
      selected:''
    };
  },
  methods: {
    /* goproductdetail(){
        this.$router.push('/productdetail');
      }*/
    tiaozhuan(item,token){
      const { href } = this.$router.resolve({
        name: 'product-id',
        params:{id:item.id}
      })
      window.open(href, '_blank')
    },

    enter(id, ev) {
      let e = ev || window.event;
      let el = ev.srcElement || ev.target;
      /**
       * @desc 设置鼠标留在span元素中，span不消失
       */
      if (el.tagName == "SPAN") {
        clearTimeout(this.timer);
      } else {
        this.x = e.clientX;
        this.y = e.clientY;
      }
      this.fuxian = id;
    },
    leave(ev) {
      //      let e = ev || window.event;
      let el = ev.srcElement || ev.target;
      if (el.tagName !== "SPAN") {
        this.isShow = false;
      }
      this.fuxian = "";
      clearTimeout(this.timer);
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
    /**
     * @desc 监看 数据:x 设置节流延迟赋值产品标题位置和显示
     */
    this.$watch(
      "x",
      _throttle(() => {
        this.timer = setTimeout(() => {
          this.l.left = this.x - 20 + "px";
          this.t.top = this.y + 28 + "px";
          this.isShow = true;
        }, 1000);
      }, 100)
    );
  }
};
</script>
