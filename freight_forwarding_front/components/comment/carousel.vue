<style lang="scss">
  .carousel{
    .block{
      .el-carousel__container{
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 29%;
      }
      .el-carousel__button{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: white;
        opacity: 1;
      }
      .el-carousel__indicator.is-active button{
        background-color: #4A3F91;
        opacity: 1;
      }
    }
    img{
      width: 100%;
    }
  }
</style>
<style scoped lang="scss">
  .carousel{
    position: relative;

    .carousel-text{
      position: absolute;
      z-index: 11;
      left: 19.75%;
      top: 23%;
      color: #4A3F91;
    }
  }
</style>
<template>
  <div class="carousel" v-loading="loading">
    <div class="block">
      <el-carousel >
       <!-- <el-carousel-item v-for="item in 4" :key="item">
          <img src="../../assets/img/lunbo01.jpg" style="width:100%;"/>
          <div class="carousel-text">
            <h2 style="font-size:4rem;">FIRST-CLASS</h2>
            <p style="font-size: 1.3rem;font-weight: 600;">TRANSPORTATION INDUSTRY</p>
            <p style="font-size: 1.2rem;font-weight: 600;">___</p>
            <p style="font-size: 1.3rem;font-weight: 600;line-height: 3.5;">力争成为国内物流运输行业一流知名企业</p>
          </div>
        </el-carousel-item>-->
        <el-carousel-item v-for="(item,index,key) in top_banner_list" :key="key">
          <div  v-html="item.content"></div>
          <div class="carousel-text">
            <h2 style="font-size:4rem;">FIRST-CLASS</h2>
            <p style="font-size: 1.3rem;font-weight: 600;">TRANSPORTATION INDUSTRY</p>
            <p style="font-size: 1.2rem;font-weight: 600;">___</p>
            <p style="font-size: 1.3rem;font-weight: 600;line-height: 3.5;">力争成为国内物流运输行业一流知名企业</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  export default {
    name:'carousel',
    props:['top_banner_list'],
    data(){
      return{
        loading:true,
      }
    },
    methods:{

    },
    mounted(){
      if(this.top_banner_list!=={}){
        this.loading = false;
      }
    },
    watch:{
      'top_banner_list':function (val) {
        if(val!=={}){
          this.loading = false;
        }
      }
    }
  }
</script>
