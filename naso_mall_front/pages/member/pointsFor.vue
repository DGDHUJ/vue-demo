<style>
  .el-progress-bar__outer{
    height: 14px!important;
  }
  .el-progress__text{
    display: none;
  }
  .el-progress-bar__inner{
    border-radius: 0;
  }
  .el-progress-bar__outer{
    border-radius: 0;
  }
</style>
<style scoped>
  .pointsfor{
    margin-left:20px;
  }
  .pointsfor-title{
    line-height: 40px;
    font-size: 1rem;
    color: #4B3F91;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }
  .pointsfor-content{
    padding:10px 0px;
    margin:10px 0 0 0 ;
    border: 1px solid #ddd;
  }
  .pointsfor-content-list1{
    overflow: hidden;display: flex;border-bottom: 1px solid #ddd;    margin: 0 20px;padding: 20px 0;
  }
  .pointsfor-content-list1-img{
    border-radius: 50%;    width: 60px;height: 60px;float: left;
  }
  .pointsfor-content-list1-text{
    line-height: 30px;margin-left: 15px;width: 100%;
  }
  .pointsfor-content-list1-textitem1{
    font-size:15px;font-weight: 500;
  }
  .pointsfor-content-list1-textitem2{
    display: flex;flex-wrap: nowrap;
  }
  .pointsfor-content-list1-textitem2-span{
    width:33.34%;
  }
  .pointsfor-content-list2{
    line-height: 60px;    margin: 0 20px;display: flex;
  }
  .pointsfor-content-list2-p{
    overflow: hidden;width:65%;font-size: 16px;font-weight: 600;color: #4B3F91;
  }
  .pointsfor-content-list2-p1{
    overflow: hidden;width: 10%;font-size: 16px;font-weight: 600;color: black;
    text-align: center;
  }
  .pointsfor-content-list2-p2{
    overflow: hidden;width: 10%;font-size: 16px;font-weight: 600;color: black;text-align: center;
  }
  .pointsfor-content-list1-textitem2-span2{
    width:33.34%;float: right;font-size: 14px;color: #4B3F91;text-align: center;
  }
  .pointsfor-content-list3{
    display: flex;flex-direction: row;flex-wrap:wrap;margin: 10px 20px;border-bottom: 1px solid #ddd;
  }
  .points-progress{
    position: relative;
    line-height: 31px;
    width: 90%;
    margin-left: 35px;
  }
  .pointsfor-content-list1-textitem2-spaninner{
    float: left;padding-top: 1px;font-size: 16px;
  }
  .pointsfor-content-list3-left{
    width:65%;display: flex;overflow: hidden;cursor: pointer;
  }
  .pointsfor-content-list3-left-imgouter{
    float: left;width: 130px;  height: 130px;border: 1px solid #ddd;
  }
  .pointsfor-content-list3-left-img{
    width: 100%
  }
  .pointsfor-content-list3-left-textouter{
    width: 78%;margin: 15px 20px 0 10px;
  }
  .pointsfor-content-list3-left-text1{
    font-size: 16px;font-weight: 500;
  }
  .pointsfor-content-list3-left-text2{
    margin-top: 15px;font-size: 15px;color: #847f7f;font-weight: 500;
  }
  .pointsfor-content-list3-center1{
    width:10%;text-align: center;font-size: 16px;margin-top: 15px;
  }
  .pointsfor-content-list3-center2{
    width:10%;text-align: center;font-size: 16px;margin-top: 15px;
  }
  .pointsfor-content-list3-right{
    width: 15%;cursor: pointer;
  }
  .pointsfor-content-list3-right-p{
    line-height: 70px;margin: 34px 20px;border: 1px solid #ddd;border-radius: 7px;background: #F08619;color: white;font-size: 16px;text-align: center;
  }
</style>

<template>
  <section class="container">
    <div class="pointsfor">
      <div class="pointsfor-title"><p>Membership Exchange</p></div>
      <div class="pointsfor-content">
        <div class="pointsfor-content-list1">
          <img class="pointsfor-content-list1-img" src="../../assets/img/usertouxiang.png"/>
          <div class="pointsfor-content-list1-text">
            <div class="pointsfor-content-list1-textitem1"><p>UserAccount: <span>{{users.nickname}}</span></p></div>
            <div class="pointsfor-content-list1-textitem2">
              <span class="pointsfor-content-list1-textitem2-span">{{users.email}}</span>
              <div class="pointsfor-content-list1-textitem2-span">
                <span class="pointsfor-content-list1-textitem2-spaninner">Lv5</span>
                <el-progress class="points-progress" :percentage="10" color="#4B3F91"></el-progress>
              </div>
              <span class="pointsfor-content-list1-textitem2-span2"><i class="icon iconfont icon-xingxing"></i> My points : {{users.score}}</span>
            </div>
          </div>
        </div>
        <div class="pointsfor-content-list2">
          <p class="pointsfor-content-list2-p">
            Ongiong Exchange Service
          </p>
          <p class="pointsfor-content-list2-p1">
            LV
          </p>
          <p class="pointsfor-content-list2-p2">
           points
          </p>
        </div>
        <div class="pointsfor-content-list3">
            <div class="pointsfor-content-list3-left">
              <div class="pointsfor-content-list3-left-imgouter">
                <img class="pointsfor-content-list3-left-img" src="../../assets/img/listproduct_03.jpg"/>
              </div>
              <div class="pointsfor-content-list3-left-textouter">
                <p class="pointsfor-content-list3-left-text1">SUPOR rice cooker electric rice cooker 5L large capacity spherical tank CFXB50FC8055-75</p>
                <p class="pointsfor-content-list3-left-text2">SUPOR rice cooker electric rice cooker 5L large capacity spherical</p>
              </div>
            </div>
            <div class="pointsfor-content-list3-center1"><p>LV:5</p></div>
            <div class="pointsfor-content-list3-center2"><p>3888</p></div>
            <div class="pointsfor-content-list3-right">
              <p class="pointsfor-content-list3-right-p">Exchange</p>
            </div>
        </div>
        <div class="pointsfor-content-list3">
          <div class="pointsfor-content-list3-left">
            <div class="pointsfor-content-list3-left-imgouter">
              <img class="pointsfor-content-list3-left-img" src="../../assets/img/listproduct_03.jpg"/>
            </div>
            <div class="pointsfor-content-list3-left-textouter">
              <p class="pointsfor-content-list3-left-text1">SUPOR rice cooker electric rice cooker 5L large capacity spherical tank CFXB50FC8055-75</p>
              <p class="pointsfor-content-list3-left-text2">SUPOR rice cooker electric rice cooker 5L large capacity spherical</p>
            </div>
          </div>
          <div class="pointsfor-content-list3-center1"><p>LV:5</p></div>
          <div class="pointsfor-content-list3-center2"><p>3888</p></div>
          <div class="pointsfor-content-list3-right">
            <p class="pointsfor-content-list3-right-p">Exchange</p>
          </div>
        </div>
        <div class="pointsfor-content-list3">
          <div class="pointsfor-content-list3-left">
            <div class="pointsfor-content-list3-left-imgouter">
              <img class="pointsfor-content-list3-left-img" src="../../assets/img/listproduct_03.jpg"/>
            </div>
            <div class="pointsfor-content-list3-left-textouter">
              <p class="pointsfor-content-list3-left-text1">SUPOR rice cooker electric rice cooker 5L large capacity spherical tank CFXB50FC8055-75</p>
              <p class="pointsfor-content-list3-left-text2">SUPOR rice cooker electric rice cooker 5L large capacity spherical</p>
            </div>
          </div>
          <div class="pointsfor-content-list3-center1"><p>LV:5</p></div>
          <div class="pointsfor-content-list3-center2"><p>3888</p></div>
          <div class="pointsfor-content-list3-right">
            <p class="pointsfor-content-list3-right-p">Exchange</p>
          </div>
        </div>
      </div>
      <changeuserInfobar></changeuserInfobar>
    </div>
  </section>
</template>
<script>
  import changeuserInfobar from '../../components/ordercommon/changeuserInfobar.vue'
  export default {
    components: {
      'changeuserInfobar': changeuserInfobar,
    },
    name:'pointsfor',
    data(){
      return{
        users:this.$store.state.users,
      }
    },
    methods:{
      back(){
        this.$router.push('/one')
      }
    },
    mounted(){
      if(localStorage.getItem("users")){
      this.$store.state.users = JSON.parse(localStorage.getItem('users'));
      this.users =  this.$store.state.users;
    }
     
    }
  }
</script>

