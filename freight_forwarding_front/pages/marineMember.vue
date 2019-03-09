<template>
  <section  class="container">
    <div>
      <topheader/>
      <contentheader/>
      <tabbar :items="tabitems"/>
      <marineMembercontent/>
      <homeguarantees/>
      <webfooter/>
    </div>
  </section>
</template>
<script>
  import topheader from '../components/comment/topheader.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import tabbar from '../components/comment/tab-bar.vue'
  import marineMembercontent from '../components/marineMember/marineMembercontent.vue'
  export default {
    name:'marineMember',
    components: {
      topheader,
      contentheader,
      webfooter,
      homeguarantees,
      tabbar,
      marineMembercontent,
    },
    data(){
      return{
        tabitems:[
          {name:'首页',path:'/'},
          {name:'会员中心',path:'/marineMember'}
        ],
      }
    },
    methods:{

    },
    mounted(){

    }

  }
</script>
