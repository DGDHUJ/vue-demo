<template>
  <div class="DynamicRouter">
    <div class="backBtn" @click="_goback">Home</div>
    <input class="keyid" v-model="keyword" type="text">
    <div class="okBtn" @click="_changeKey">确定</div>
    <div>动态路由</div>
    <div>{{$route.params.id}}</div>
  </div>
</template>
<script>
  export default {
    name:'DynamicRouter',
    data(){
      return{
        keyword:'',
      }
    },
    methods:{
      _goback(){
        this.$router.push({path:'/'})
      },
      _changeKey(){
        let tempurl = '/DynamicRouter/'+this.keyword;
        this.$router.push({path:tempurl})
      }
    },

    //监听路由的变化，实现相应的操作
    watch:{
      '$route'(to,from) {
        console.log(this.$route)
      }
    }

  }
</script>
<style scoped lang="scss">
  .DynamicRouter{
    overflow: hidden;
    .backBtn{
      text-align: left;
      line-height: 50px;
      height: 50px;
      color: #959851;
      cursor: pointer;
    }
    .keyid{
      margin:20px 0;
      padding:0 0 0 20px;
      line-height: 40px;
      height: 40px;
      display: inline-block;
      width:300px;
      margin-right: 30px;
    }
    .okBtn{
      line-height: 40px;
      height: 40px;
      width: 200px;
      background: aqua;
      color:black;
      display: inline-block;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
    .okBtn:active{
      font-size: 17px;
    }
  }

</style>
