<template>
  <section class="container">
    <div >
      <topheader/>
      <contentheader/>
      <trailercontent/>
      <homeguarantees/>
      <webfooter/>
    </div>
  </section>
</template>

<script>
  import topheader from '../components/comment/topheader.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import trailercontent from '../components/trailer/orderConfirm.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  export default {
    name:'order',
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
    }
  }
</script>

<style scoped lang="scss" >

</style>

