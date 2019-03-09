<template>
  <section class="container">
    <div >
      <topheader/>
      <contentheader/>
      <trailercontent :countryData="countryData" :initData="initData" />
      <homeguarantees/>
      <webfooter/>
    </div>
  </section>
</template>

<script>
  import topheader from '../components/comment/topheader.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import trailercontent from '../components/customs/customsHome.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import axios from 'axios'
  export default {
    name:'customs',
    async asyncData({ app, params, query }) {
      let getcountryurl = app.store.state.headerUrl + 'country';
      let country = await axios.get(getcountryurl).then(function(resp) {
        return resp.data.data
      })
        .catch(function(error) {
          
        });
      let countryData = [];
      for(var i = 0; i <country.length; i++ ){
        countryData[country[i].id] =  country[i];
      }
      let initUrl =  app.store.state.headerUrl + 'freight/init';
      let initData =  await axios.get(initUrl).then(function(resp) {
        return resp.data.data;
      }).catch(function(error) {
        
      });
      app.store.commit('SET_TITLE',initData.freight.freight_name)
      return {
        initData:initData,
        countryData:countryData,
      };
    },
    components: {
      topheader,
      contentheader,
      trailercontent,
      homeguarantees,
      webfooter,
    },
    data(){
      return{
        murl:this.$store.state.headerUrl,
      }
    },
    methods:{

    },
    mounted(){
      this.$store.state.countryData =  this.countryData;
    }
  }
</script>

