<style lang="scss" scoped>
// .commonchange {
//   text-align: center;
//   border: 1px solid #ddd;
//   margin: 10px;
//   margin-top: 20px;
//   padding: 4px;
//   cursor: pointer;
//   img {
//     width: 100%;
//     height: 160px;
//   }

//   &:hover .swiper-wrapper-text1 {
//     color: red;
//   }
// }
// .commonimgchange {
//   // .commonimgchange-left {
//   // }
//   height: 215px;
//   .swiper-wrapper-text1 {
//     font-size: 0.9rem;
//   }
//   .swiper-wrapper-text2 {
//     line-height: 26px;
//     font-size: 0.9rem;
//     color: red;
//     span {
//       color: #aaa;
//       text-decoration: line-through;
//     }
//   }
//   .commonimgchange-left {
//     height: 100%;
//     text-align: center;
//     padding-top: 170px;
//   }
//   .commonimgchange-right {
//     height: 100%;
//     text-align: center;
//     padding-top: 170px;
//   }
//   .swiper-wrapper-textout {
//     text-align: left;
//   }
//   // .el-row {
//   //   height: 240px;
//   // }

//   .swiper-container{
//     height: 215px;
//     background-color: #555;
//   }
// }
.swiper-container {
  margin-top: 20px;
  width: 100%;
  height: 200px;
}
.commonchange {
  padding: 14px;
  cursor: pointer;
  img {
    width: 100%;
    max-width: 140px;
    max-height: 140px;
  }
}
.swiper-wrapper-textout {
  margin-top: 6px;
  .swiper-wrapper-text1 {
    font-size: 14px;
  }
  .swiper-wrapper-text2 {
    line-height: 26px;
    font-size: 14px;
    color: red;
    span {
      color: #aaa;
      text-decoration: line-through;
    }
  }
}
.commonimgchange-up_down {
  line-height: 200px;
  text-align: center;
  cursor: pointer;
}
</style>
<template>
  <div>
    <div class="commonimgchange" v-if="hotData && hotData!=null&&hotData != ''">
      <el-row :gutter="0">
        <el-col :span="4">
          <div class="commonimgchange-up_down" @click="mySwiper.swipePrev()">
            <i class="icon iconfont icon-zuoyou2"></i>
          </div>
        </el-col>
        <el-col :span="16">
          <!-- <div class="swiper-container" v-if="hotData && hotData!=null&&hotData != ''">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide commonchange"
                v-for="(items,index) in hotData"
                :key="index"
                @click="openProduct(items.id)"
              >
                <img :src="items.img_url">
                <div class="swiper-wrapper-textout">
                  <p class="swiper-wrapper-text1">{{items.title | ellipsis(40,items.title)}}</p>
                  <p class="swiper-wrapper-text2">
                    {{items.sell_price | numFilter}}
                    <span>{{items.msell_price | numFilter}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>-->
          <div class="swiper-container" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class="commonchange"
                  v-for="(items,index) in hotData"
                  :key="index"
                  @click="openProduct(items.id)"
                >
                  <img :src="items.img_url">
                  <div class="swiper-wrapper-textout">
                    <p class="swiper-wrapper-text1">{{items.title | ellipsis(40,items.title)}}</p>
                    <p class="swiper-wrapper-text2">
                      {{items.sell_price | numFilter}}
                      <span>{{items.msell_price | numFilter}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="hotData==null||hotData == ''|| !hotData">&nbsp;</div>
        </el-col>
        <el-col :span="4">
          <div class="commonimgchange-up_down" @click="mySwiper.swipeNext()">
            <i class="icon iconfont icon-zuoyou1"></i>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import $ from "jquery/dist/jquery.slim.min";
// import Swiper from "swiper/dist/js/swiper.min";
// import "swiper/dist/css/swiper.css";
export default {
  name: "commonimgchange",
  data() {
    return {
      hotData: [],
      swiperOption: {
        slidesPerView: 5,
        loop: true,
        slidesPerGroup: 5,
        autoplay: 5000
      }
    };
  },
  methods: {
    openProduct(id) {
      const { href } = this.$router.resolve({
        name: "product-id",
        params: { id },
        query: { token: "" }
      });
      window.open(href, "_blank");
    }
  },
  mounted() {
    this.$store.dispatch("GET_hotList").then(res => {
      this.hotData = res.data;
      if (
        this.hotData != "undefined" &&
        this.hotData != null &&
        this.hotData != ""
      ) {
        // let swiper = new Swiper(".swiper-container", {
        //   slidesPerView: 5,
        //   spaceBetween: 30,
        //   pagination: {
        //     el: ".swiper-pagination",
        //     type: "progress",
        //     clickable: true,
        //     runCallbacks: true
        //   }
        // });
        // $(".commonimgchange-left").click(function() {
        //   swiper.slidePrev();
        // });
        // $(".commonimgchange-right").click(function() {
        //   swiper.slideNext();
        // });
        // setTimeout(() => {
        //   swiper.updateSlides();
        // }, 1);
      }
    });
  }
};
</script>
