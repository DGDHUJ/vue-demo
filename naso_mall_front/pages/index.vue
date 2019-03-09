<style lang="scss">
// .mpimgcontent {
//   margin: 10px 0 0 0;
//   position: relative;
// }
.floor_banner {
  margin-top: 10px;
  width: 100%;
  a img{width: 100%;}
}
</style>

<style lang="scss" scoped>
@import "~/styles/index.scss";
</style>
<template>
  <div class="body">
    <div class="header">
      <div class="layout">
        <headerbar></headerbar>
      </div>
    </div>
      <div class="container">
        <mpcontent1 :top_banner_list="homeData.top_banner_list" :categorydata="category" :category="category"></mpcontent1>
        
        <div class="layout">
          <mpcontent2 :latest_goods="homeData.latest_goods" :pin_dan_goods="homeData.pin_dan_goods"></mpcontent2>
          <mpcontent3
           v-for="(item,key,index) in homeData.floor_list.floor"
           v-if="key<2"
          :tempindex ="key"
          :keyvalue="item.id"
          :floor_list="homeData.floor_list"
          :key="index"></mpcontent3>
          <div class="floor_banner" v-html="homeData.floor_banner.content"></div>
          <mpcontent3
           v-for="(item,key,index) in homeData.floor_list.floor"
          v-if="key>=2"
          :tempindex ="key"
          :keyvalue="item.id"
          :floor_list="homeData.floor_list"
          :key="index"></mpcontent3>
        
<!-- 隐藏掉的 -->
          <!-- <mpcontent6></mpcontent6> -->
          <yqlink :linkList = "linkList"></yqlink>
          <righttab></righttab>
        </div>
      </div>
    <div class="footer">
      <footerbar class="layout"></footerbar>
    </div>
  </div>
</template>
<script>
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import mpcontent1 from "../components/mainpagecommon/mpcontent1.vue";
import mpcontent2 from "../components/mainpagecommon/mpcontent2.vue";
import mpcontent3 from "../components/mainpagecommon/mpcontent3.vue";
import mpcontent6 from "../components/mainpagecommon/mpcontent6.vue";
import Yqlink from "../components/common/youqinglink.vue";
import righttab from "../components/common/righttab.vue";
export default {
  name: "index",

  async asyncData({ app, params,store, query, localStorage }) {
    let homeUrl = app.store.state.headerUrl + "home";
    let homeData = await app.$axios.get(homeUrl).then(resp => resp.data.data);
    // let categoryUrl = app.store.state.headerUrl + "category";
    // let categorydata = await app.$axios.get(categoryUrl).then(resp => {
    //   resp.data.data.forEach((element, i) => {
    //     resp.data.data[i].showindex = (i + 1).toString();
    //     resp.data.data[i].children.forEach((el, j) => {
    //       resp.data.data[i].children[j].showindex = i + 1 + "-" + (j + 1);
    //     });
    //   });
    //   return resp.data.data;
    // });
    let link_url = app.store.state.headerUrl + "/cms/link";
    let link_data = {
      "limit":99,
      "page":1,
      "module_id":4,
      "type":2
    }
    let linkList = await app.$axios.post(link_url,link_data).then(res=>res.data.data)

    //菜单
    let category_url = app.store.state.headerUrl + "category";
    let category = await app.$axios.get(category_url).then(res => res.data.data);
    // await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{app}).then(res => {
    //   category = res.data
    //   return
    // })
    // console.log(homeData.floor_list);

    return { homeData,category,linkList:linkList.list };
  },
  data() {
    return {
      contentonedata: []
    };
  },
  methods: {},
  mounted() {
    // console.log(this.homeData.floor_list)
    // console.log(this.homeData.floor_list.floor)
    // window.FB.init({
    //   appId      : '302444133908747',
    //   cookie     : true,
    //   xfbml      : true,
    //   version    : 'v3.1'
    // })
  },
  components: {
    Yqlink,
    headerbar: headerbar,
    footerbar: footerbar,
    mpcontent1: mpcontent1,
    mpcontent2: mpcontent2,
    mpcontent3: mpcontent3,
    mpcontent6: mpcontent6,
    righttab: righttab
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

