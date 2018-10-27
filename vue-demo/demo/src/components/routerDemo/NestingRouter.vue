<template>
  <div class="NestingRouter">
    <div class="backBtn" @click="_goback">Home</div>
    <div>嵌套路由</div>
    <div>外层数据</div>
    <div class="tab" @click="_changetab(1)">跳转到一</div>
    <div class="tab" @click="_changetab(2)">跳转到二</div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name:'NestingRouter',
    data(){
      return{

      }
    },
    methods:{
      _goback(){
        this.$router.push({path:'/'})
      },
      _changetab(index){
        if(index === 1){
          this.$router.push({path:'NestingConentOne'})
        }
        if(index === 2){
          this.$router.push({path:'NestingConentTwo'})
        }
      }
    },
  }
</script>
<style scoped lang="scss">
  .NestingRouter{
    overflow: hidden;
    div{
      line-height: 50px;
      height: 50px;
    }
    .backBtn{
      text-align: left;
      line-height: 50px;
      height: 50px;
      color: #959851;
      cursor: pointer;
    }
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
