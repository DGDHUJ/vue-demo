<!--
 引入依赖：npm install vue-piczoom --save
 使用
 --script
import PicZoom from 'vue-piczoom'
export default {
  name: 'App',
  components: {
    PicZoom
  }
}
--html
<pic-zoom url="static/imac2.jpg" :scale="3"></pic-zoom>

参数
url	图片地址	string required
big-url	大图地址	string null
scale	图片放大倍数	number 2.5
scroll	放大时页面是否可滚动	boolean fasle
show-edit	是否显示旋转图片按钮	boolean fasle


-->

<template>
  <div>
    <div class="title">图片放大镜查看</div>
    <div class="showcontent">
      <pic-zoom url="http://img.nasotrading.com/0d3436cfbc3e8c25ae33b40510426fca.jpg" :scale="3"></pic-zoom>
    </div>
  </div>
</template>
<script>
  import PicZoom from 'vue-piczoom'
  export default {
    name:'magnifier',
    data(){
      return{

      }
    },
    components: {
      PicZoom
    },
    methods:{

    },
    mounted(){

    }

  }
</script>
<style scoped lang="scss">
   .title{
     width: 100%;
     text-align: center;
     font-size: 16px;
     line-height: 40px;
   }
  .showcontent{
    width: 200px;
  }

</style>
<style>
  .mouse-cover-canvas{
    width: 400px!important;
  }
</style>
