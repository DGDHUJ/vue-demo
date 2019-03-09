<style scoped lang="scss">
  .home{
    background: white;
  }
</style>
<template>
  <section class="container">
    <div class="home">
      <topheader/>
      <contentheader/>
      <carousel :top_banner_list="top_banner_list" />
      <homecontentone :domlist="domlist" :listData="listData" :shipping_route="shipping_route" :city="city" :countryData="countryData" :initData="initData" :cms_list="cms_list" />
      <homehotline :hot_shipping_goods="hot_shipping_goods"/>
      <homeservice/>
      <homecustommade/>
      <newManpage/>
      <homedatanum/>
      <homedynamic :listData="listData"/>
      <homefooter/>  
      <homeguarantees/>
      <webfooter/>
    </div>
  </section>
</template>

<script>
import topheader from '../components/comment/topheader.vue'
import contentheader from '../components/comment/contentheader.vue'
import carousel from '../components/comment/carousel.vue'
import homecontentone from '../components/home/homecontentone.vue'
import homehotline from '../components/home/homehotline.vue'
import homeservice from '../components/home/homeservice.vue'
import homecustommade from '../components/home/homeCustommade.vue'
import homeguarantees from '../components/home/homeguarantees.vue'
import newManpage from '../components/home/newManpage.vue'
import homefooter from '../components/home/homefooter.vue'
import homedynamic from '../components/home/homedynamic.vue'
import homedatanum from '../components/home/homedatanum.vue'

import webfooter from '../components/comment/webfooter.vue'
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  async asyncData({ app, params, query }) {
    //国家数据
    let getcountryurl = app.store.state.headerUrl + 'country';
    let country = await axios.get(getcountryurl).then(function(resp) {
      return resp.data.data
    }).catch(function(error) {
        
      });
    let countryData = [];
    for(var i = 0; i <country.length; i++ ){
      countryData[country[i].id] =  country[i];
    }
    app.store.state.countryData =  countryData;
//    基础数据
    let initUrl =  app.store.state.headerUrl + 'freight/init';
    let initData =  await axios.get(initUrl).then(function(resp) {
      return resp.data.data;
    }).catch(function(error) {
      
    });
    app.store.commit('SET_TITLE',initData.freight.freight_name);
    //首页数据
    let homeurl = app.store.state.headerUrl + 'freight/home';
    let homeData = await axios.get(homeurl).then(function(resp) {
      return resp.data.data;
    }).catch(function(error) {
      
    });
    let top_banner_list = homeData.top_banner_list;
    let cms_list = homeData.cms_list;
    let hot_shipping_goods = homeData.hot_shipping_goods;
    //
    //获取文章数据

      let listUrl = app.store.state.headerUrl + 'cms/column/2';
      let domlist   =  await axios.get(listUrl).then(function(resp) {
      return resp.data.data;
    }).catch(function(error) {
      
    });
      let showtabid = null;
      if(query.cms){
        showtabid = query.cms;
      }else{
        showtabid = domlist[0].id;
      }
      //获取所有的文章内容
      let Cmsurl = app.store.state.headerUrl + 'cms';
      let listData = [];
      for( let i= 0;i<domlist.length;i++){
        let paramsData ={
          limit:10,
          page:1,
          cid:Number(domlist[i].id),
        }
        let templsitData =  await axios.post(Cmsurl,paramsData).then(function(resp) {
          let temparr = null;
          if(resp.data.code === 0){
            if(resp.data.data.list === null){
              temparr = null;
            }else{
              temparr = resp.data.data.list;
            }
          }
          return temparr;
        }).catch(function(error) {
          
        });
        listData[domlist[i].id] = templsitData;
      }

    let city = initData.city;
    let shipping_route = initData.shipping_route;

    return {
      initData:initData,
      countryData:countryData,
      homeData:homeData,
      top_banner_list:top_banner_list,
      cms_list:cms_list,
      hot_shipping_goods:hot_shipping_goods,
      city:city,
      shipping_route:shipping_route,
      domlist:domlist,
      listData:listData,
    };
  },
  components: {
    newManpage,
    topheader,
    contentheader,
    carousel,
    homecontentone,
    homehotline,
    homeservice,
    homecustommade,
    homeguarantees,
    webfooter,
    homefooter,
    homedynamic,
    homedatanum,
  },

  data(){
    return{
      token:'',
    }
  },
  methods:{
    /*gethomeData(){
      let that = this;
      let url = that.$store.state.headerUrl + 'freight/home';
      let tempalert = that.$alert;
      that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
        if(resp.data.code === 0){
          that.homeData = resp.data.data;

        }
      }).catch(function (error) {
        tempalert(error, {
          confirmButtonText: 'ok',
          callback: action => {
            return
          }
        });
      })
    }*/
  },
  beforeCreate(){

  },
  mounted() {
    this.$store.state.countryData =  this.countryData;
    /*let that =this;*/
//    that.gethomeData();
  }
}
</script>

