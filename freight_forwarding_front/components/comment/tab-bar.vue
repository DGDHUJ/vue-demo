<style scoped lang="scss">
  .tab-bar{

    .tab-bar-tab{
      height: 60px;
      line-height: 60px;
      font-size: 1rem;
      .el-breadcrumb{
        height: 60px;
        line-height: 60px;
        font-size: 1rem;
      }
    }
  }
</style>
<template>
  <div class="layout tab-bar">
    <!-- <div class="pageouter"></div> -->
    <div class="">
      <div class="tab-bar-tab">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  v-for="(item,index,key) in items" :key="key" :to="{ path:item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
  export default {
    name:'tab-bar',
    props:['items'],
    data(){
      return{

      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>
