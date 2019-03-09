<style lang="scss" scoped>
.showdynamic {
  width: 100%;
  background-color: #ffffff;
  min-height: 620px;
  padding: 30px 10px 10px;
}
.dynamic {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f2f2f2;
}
.dynamic-item {
  float: left;
  overflow: hidden;
  width: 33.33%;
  margin: 5px 10px;
  width: calc(33.33% - 20px);
}
.dynamic-img {
  width: calc(100%-20px);
  height: calc(100%-20px);
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
}
.dynamic-img:hover {
  width: 100%;
  border-radius: 10px;
  margin: 0px 0 9px 0;
}
.gundong1 {
  height: 240px;
  overflow: hidden;
}
.gundong2 {
  height: 240px;
  overflow: hidden;
}
.gundong3 {
  height: 240px;
  overflow: hidden;
}
.swiper-wrapper {
  height: 40px;
  line-height: 40px;
  img {
    float: left;
    margin-top: 16px;
    margin-left: 10px;
  }
  p {
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 20px;
    width: 285px;
    font-family: MicrosoftYaHei;
    font-size: 1rem;
    cursor: pointer;
    white-space: nowrap;
    font-weight: normal;
    font-stretch: normal;
    color: #999999;
  }
  p:hover {
    color: #333;
  }
  span {
    float: right;
    margin-left: 20px;
    color: #999999;
  }
}
.content-title {
  width: 440px;
}
</style>
<template>
  <div class="layout-1200">
    <div class="dynamic">
      <div class="content">
        <div class="showdynamic">
          <div class="content-title">
            <h2>
              <i class="left-icon icon_line"></i>掌握最新动态
              <i class="right-icon icon_line"></i>
            </h2>
            <p>专业、专诚、专注</p>
          </div>
          <div class="dynamic-item">
            <nuxt-link :to="{path:'information',query:{tabactive:'0'}}">
              <img class="dynamic-img" src="../../assets/img/dynamic1_11.png" alt>
            </nuxt-link>
            <div class="gundong1">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item1,index) in listData[3]||[]" :key="index">
                  <nuxt-link
                    :to="{path:'information',query:{tabactive:'0',detailid:item1.id,detailindex:index}}"
                  >
                    <img src="../../assets/img/yuandian.png" alt>
                    <p>{{item1.title}}</p>
                    <span>{{comment.formate('dd/MM',new Date(item1.update_time * 1000))}}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="dynamic-item">
            <nuxt-link :to="{path:'information',query:{tabactive:'1'}}">
              <img class="dynamic-img" src="../../assets/img/dynamic2_11.png" alt>
            </nuxt-link>
            <div class="gundong2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item1,index) in listData[4]||[]" :key="index">
                  <nuxt-link
                    :to="{path:'information',query:{tabactive:'1',detailid:item1.id,detailindex:index}}"
                  >
                    <img src="../../assets/img/yuandian.png" alt>
                    <p>{{item1.title}}</p>
                    <span>{{comment.formate('dd/MM',new Date(item1.update_time * 1000))}}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="dynamic-item">
            <nuxt-link :to="{path:'information',query:{tabactive:'2'}}">
              <img class="dynamic-img" src="../../assets/img/dynamic3_11.png" alt>
            </nuxt-link>
            <div class="gundong3">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item1,index) in listData[5]||[]" :key="index">
                  <nuxt-link
                    :to="{path:'information',query:{tabactive:'2',detailid:item1.id,detailindex:index}}"
                  >
                    <img src="../../assets/img/yuandian.png" alt>
                    <p>{{item1.title}}</p>
                    <span>{{comment.formate('dd/MM',new Date(item1.update_time * 1000))}}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homedynamic",
  props: ["listData"],
  data() {
    return {
      tempdata: [
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 }
      ]
    };
  },
  methods: {
    setswiper() {
      // let swiper1 = new Swiper(".gundong1", {
      //   direction: "vertical",
      //   height: 240,
      //   slidesPerView: 6,
      //   spaceBetween: 0,
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false
      //   }
      // });
      // let swiper2 = new Swiper(".gundong2", {
      //   direction: "vertical",
      //   height: 240,
      //   slidesPerView: 6,
      //   spaceBetween: 0,
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false
      //   }
      // });
      // let swiper3 = new Swiper(".gundong3", {
      //   direction: "vertical",
      //   height: 240,
      //   slidesPerView: 6,
      //   spaceBetween: 0,
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false
      //   }
      // });
    }
  },
  mounted() {
    console.log(this.listData);
    // setTimeout(() => this.setswiper(), 3500);
  }
};
</script>

