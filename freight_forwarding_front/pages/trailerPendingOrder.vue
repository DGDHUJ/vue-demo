<template>
  <section class="container">
    <div class="pendingbookingOrder">
      <topheader/>
      <contentheader/>
      <tabbar :items="tabitems"/>
      <trailerPendingOrderContent/>
      <homeguarantees/>
      <webfooter/>
    </div>
  </section>
</template>
<script>
  import topheader from '../components/comment/topheader.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import tabbar from '../components/comment/tab-bar.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import trailerPendingOrderContent from '../components/member/trailerPendingOrderContent.vue'
  export default {
    name:'trailerPendingOrder',
    components: {
      topheader,
      contentheader,
      tabbar,
      homeguarantees,
      webfooter,
      trailerPendingOrderContent,
    },
    data(){
      return{
        tabitems:[
          {name:'首页',path:'/'},
          {name:'拖车下单',path:'/member'},
          {name:'确认订单',path:'/pendingBookingOrder'}
        ],
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>
