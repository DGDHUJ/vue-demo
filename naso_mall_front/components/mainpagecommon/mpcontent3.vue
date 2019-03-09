<style lang="scss">
//这里是第三个模块
//home/content3
.mpcontentlist{
   float: left;
}
.leftlunbo {
  float: left;
  width: 20%;
  text-align: center;
  // padding: 5px 10px;

  .el-carousel {
    .el-carousel__container {
      height: 370px !important;
      @media screen and (min-width: 1200px) {
      height: 444px !important;
      }
      cursor: pointer;
      .el-carousel__item {
        .imgdiv {
          height: 100%;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .el-carousel__indicators {
      .el-carousel__indicator {
        bottom: 30px !important;
        opacity: 1;

        .el-carousel__button {
          background-color: white;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 1;
        }
      }
      .el-carousel__indicator.is-active button {
        opacity: 1;
        background: #4b3f91;
      }
    }
  }

  .mpcontentlist-itemimg img {
    margin-top: 25% !important;
    background-color: #000000;
  }



  //显盛改的按钮
  .leftlunbo-btn {
    height: 110px;
    //display: flex;
    //flex-direction: row;
    //flex-wrap: wrap;
    margin-top: 18px;
    //padding:0 0 0 45px;
    margin: 10px auto 0;
  
    .leftlunbo-btn-item {
      height: 28px;
      padding: 6px 0;
      width: 80%;
      font-size: 12px;
      margin: 10px auto;
      border: 1px solid #ddd;
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
      a {
        color: black;
      }
    }
    @media screen and (min-width: 1200px) {
    & {height: 70px;margin-top: 24px;}
      .leftlunbo-btn-item {
        float: left;
        height: 25px;
        padding-top: 5px;
        width: 96px;
        margin: 5px;
          & {
            width: 45%;
          }
        }
    }
  }

  .leftlunbo-foot {
    display:inline-block;
    height: 20px;
    line-height: 20px;
    text-align: right;
    font-size: 1rem;
    margin-right: 10px;
    @media screen and (min-width: 1200px) {

    }
  }
}
</style>
<style lang="scss" scoped>
.mpcontent3 {
  margin: 10px 0 0 0;
  position: relative;
}
.mpcontent3-title {
  // display: flex;
  background: white;
  width: 100%;
  line-height: 50px;
}
.mpcontent3-title-list1 {
  display:inline-block;
  text-align:center;
  width: 240px;
  margin-right: 20px;
}
@media screen and (max-width: 1200px) {
  .mpcontent3-title-list1 {
    width: 200px;
  }
}
.mpcontent3-title-list {
  display: inline-block;
  margin-top: 4px;
  margin-right: 20px;
  width: 190px;
  cursor: pointer;
}
.mpcontent3-title-list2 {
  display: inline-block;
  float: right;
  margin-right: 8px;
  width: 42px;
  font-size: 16px;
}
.mpcontent3-title-list-span {
  display: block;
  margin-top: 10px;
  padding: 5px 6px;
  text-align: center;
  color: #686868;
  font-size: 14px;
  line-height: 16px;
  width: 192px;
  border: 2px solid white;
}
.mpcontent3-title-list-span:hover {
  // margin-top: 6px;
  border: 2px solid #4c4192;
  color: #4c4192;
  border-radius: 7px;
}
.mpcontent3-title-list-span-active {
  margin-top: 6px;
  border: 2px solid #4c4192;
  color: #4c4192;
  border-radius: 7px;
}
.mpcontent3-title-list1-span1 {
  font-size: 16px;
  font-weight: bold;
  color: #4c4192;
  line-height: 30px;
}
.mpcontent3-title-list1-span2 {
  font-size: 14px;
  margin-left: 5px;
}
.mpcontent3-body {
  // display: flex;
  overflow: hidden;
  background: white;
  width: 100%;
  line-height: 15px;
}
</style>
<template>
  <div class="mpcontent3">
    <div class="__main">
        <div class="mpcontent3-title">
          <div class="mpcontent3-title-list1">
            <p>
              <span class="mpcontent3-title-list1-span1">{{tempindex+1}}F</span>
              <span class="mpcontent3-title-list1-span2">{{floor_list.floor[tempindex].title}}</span>
            </p>
          </div>
          <div class="mpcontent3-title-list" 
          v-for="(item,index,key) in floor_list[keyvalue]" 
          :class="keyvalue" 
          @click="choose(index,item.id)" 
          :key="key" >
            <p><span class="mpcontent3-title-list-span" :class="{'mpcontent3-title-list-span-active':index ===choosed}" >{{item.title}}</span></p>
          </div>
          <div class="mpcontent3-title-list2 ">
            <p class="">
              <span>
                <nuxt-link :to="{name: 'product-list-cate',params:{cate:floor_list.floor[tempindex].id}}">&rsaquo;&rsaquo;&rsaquo;</nuxt-link>
              </span>
            </p>
          </div>
        </div>
        <!--这里是显盛改的-->
        <div class="mpcontent3-body" >
          <!-- 轮播 -->
          <div v-if="tempindex%2===0" class="leftlunbo" >
            <el-carousel >
              <el-carousel-item v-for="(item,index,key) in floor_list.floor[tempindex].banners" :key="key">
                <a class="imgdiv" :href="item.url">
                  <img :src="item.img_url" />
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 列产品 -->
          <mpcontentlist class="mpcontentlist" :floor_list="floor_list" :keyvalue="keyvalue" :select="select"></mpcontentlist>
          <!-- 轮播 2n -->
          <div v-if="tempindex%2!==0" class="leftlunbo" >
            <el-carousel >
              <el-carousel-item v-for="(item,index,key) in floor_list.floor[tempindex].banners" :key="key">
                <a class="imgdiv" :href="item.url">
                  <img  :src="item.img_url"/>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- End -->
        </div>
    </div>

  </div>
</template>
<script>
import $ from "jquery/dist/jquery.slim.min";
import mpcontentlist from "./mpcontentlist.vue";
export default {
  name: "mpcontent3",
  props: ["floor_list", "tempindex", "keyvalue"],
  data() {
    return {
      choosed:0,
      token: "",
      showdata: {},
      select:this.floor_list[this.keyvalue][0].id
    };
  },
  methods: {
    goproductdetail() {
      this.$router.push("/productdetail");
    },
    choose(index, id) {
      this.choosed = index;
      this.select = id
    },
    // selectshowdata(id) {
    //   this.showdata = this.floor_list[this.keyvalue][id] || [];
    // }
  },
  components: {
    mpcontentlist: mpcontentlist
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
  }
};
</script>
