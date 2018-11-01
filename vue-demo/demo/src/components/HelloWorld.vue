<template>
  <div>
    <div class="title">{{msg}}</div>
    <div class="hello">
      <div class="tab" @click="_toroute(1)">动态路由</div>
      <div class="tab" @click="_toroute(2)">嵌套路由</div>
      <div class="tab" @click="_toroute(3)">Vuex-Demo</div>
      <div class="tab">动态路由</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'demo'
    }
  },
  methods:{
    _toroute(index){
      if(index === 1){
        this.$router.push({path:'DynamicRouter/87878'})
      }
      if(index === 2){
        this.$router.push({path:'NestingRouter'})
      }
      if(index === 3){
        this.$router.push({path:'showVuex'})
      }

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
  .title{
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-size: 20px;
    margin:20px 0;
  }
   .hello{
     overflow: hidden;
     .tab{
       text-align: center;
       float: left;
       margin-right:20px;
       width: 200px;
       background: deepskyblue;
       color: #000;
       line-height: 40px;
       height: 40px;
       border-radius: 5px;
       font-size: 16px;
       cursor: pointer;
     }
     .tab:active{
       font-size: 17px;
     }
   }
</style>
