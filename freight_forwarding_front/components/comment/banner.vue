<style lang="scss" scoped>
.course-class-infos {
  position: relative;
  background: #666;
}
.info-bg,
.cover-img-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.cover-img-wrap {
  z-index: 0;
  overflow: hidden;
  background: url("../../assets/img/banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content_box {
  position: relative;
}
.text {
  position: absolute;
  right: 0;
  top: 100px;
  z-index: 999;
  width: 400px;
  height: 415px;
  background-color: #fff;
  border-radius: 6px;
}
</style>
<template>
  <div class="banner container">
    <div class="course-class-infos">
      <div class="layout content_box" style="min-height: 600px;idth:500px;">
        <!--此处可写自己内容-->
        <div class="text">
          <homebooking
            :domlist="domlist"
            :listData="listData"
            :shipping_route="shipping_route"
            :city="city"
            :countryData="countryData"
            :initData="initData"
            :cms_list="cms_list"
          ></homebooking>
        </div>
      </div>
      <div class="info-bg">
        <div class="cover-img-wrap"></div>
      </div>
    </div>
  </div>
</template>
<script>
import homebooking from "../../components/home/home_booking.vue";
export default {
  name: "banner",
  props: [
    "city",
    "cms_list",
    "countryData",
    "initData",
    "shipping_route",
    "domlist",
    "listData"
  ],
  components: {
    homebooking
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
