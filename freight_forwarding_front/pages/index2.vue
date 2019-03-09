<style scoped lang="scss">
</style>
<template>
  <section>
    <div class="home">
      <topheader/>
      <contenthead/>
      <banner
        :top_banner_list="top_banner_list"
        :domlist="domlist"
        :listData="listData"
        :shipping_route="shipping_route"
        :city="city"
        :countryData="countryData"
        :initData="initData"
        :cms_list="cms_list"
      />
      <snap-up/>
      <homeservice/>
      <newManpage/>
      <homedatanum/>
      <!-- <homedynamic/> -->
      <homefooter/>
    </div>
  </section>
</template>

<script>
import topheader from "../components/comment/topheader.vue";
import contenthead from "../components/comment/head.vue";
import banner from "../components/comment/banner.vue";
import snapUp from "../components/home/homeSnap_up.vue";
import homeservice from "../components/home/home_server.vue";
import newManpage from "../components/home/newManpage.vue";
import homedatanum from "../components/home/homedatanum.vue";
import homedynamic from "../components/home/homedynamic.vue";
import homefooter from "../components/home/homefooter.vue";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  async asyncData({ app, params, query }) {
    //国家数据
    let getcountryurl = app.store.state.headerUrl + "country";
    let country = await axios
      .get(getcountryurl)
      .then(function(resp) {
        return resp.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    let countryData = [];
    for (var i = 0; i < country.length; i++) {
      countryData[country[i].id] = country[i];
    }
    app.store.state.countryData = countryData;
    //    基础数据
    let initUrl = app.store.state.headerUrl + "freight/init";
    let initData = await axios
      .get(initUrl)
      .then(function(resp) {
        return resp.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    app.store.commit("SET_TITLE", initData.freight.freight_name);
    //首页数据
    let homeurl = app.store.state.headerUrl + "freight/home";
    let homeData = await axios
      .get(homeurl)
      .then(function(resp) {
        return resp.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    let top_banner_list = homeData.top_banner_list;
    let cms_list = homeData.cms_list;
    let hot_shipping_goods = homeData.hot_shipping_goods;
    //
    //获取文章数据

    let listUrl = app.store.state.headerUrl + "cms/column/2";
    let domlist = await axios
      .get(listUrl)
      .then(function(resp) {
        return resp.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    let showtabid = null;
    if (query.cms) {
      showtabid = query.cms;
    } else {
      showtabid = domlist[0].id;
    }
    //获取所有的文章内容
    let Cmsurl = app.store.state.headerUrl + "cms";
    let listData = [];
    for (let i = 0; i < domlist.length; i++) {
      let paramsData = {
        limit: 10,
        page: 1,
        cid: Number(domlist[i].id)
      };
      let templsitData = await axios
        .post(Cmsurl, paramsData)
        .then(function(resp) {
          let temparr = null;
          if (resp.data.code === 0) {
            if (resp.data.data.list === null) {
              temparr = null;
            } else {
              temparr = resp.data.data.list;
            }
          }
          return temparr;
        })
        .catch(function(error) {
          console.log(error);
        });
      listData[domlist[i].id] = templsitData;
    }

    let city = initData.city;
    let shipping_route = initData.shipping_route;

    return {
      initData: initData,
      countryData: countryData,
      homeData: homeData,
      top_banner_list: top_banner_list,
      cms_list: cms_list,
      hot_shipping_goods: hot_shipping_goods,
      city: city,
      shipping_route: shipping_route,
      domlist: domlist,
      listData: listData
    };
  },
  components: {
    topheader,
    contenthead,
    banner,
    snapUp,
    homeservice,
    newManpage,
    homedatanum,
    homedynamic,
    homefooter
  },

  data() {
    return {
      token: ""
    };
  },
  methods: {},
  beforeCreate() {},
  mounted() {
    this.$store.state.countryData = this.countryData;
    /*let that =this;*/
    //    that.gethomeData();
  }
};
</script>

