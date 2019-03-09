<style lang="scss" scoped>
  .topheader{
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    background: white;
    .content{
      position: relative;
      overflow: hidden;
      .tabspan{
        float: right;
        padding:2px 10px;
        cursor: pointer;
        line-height: 40px;
      }
      .tabspan1{
        float: right;
        padding:2px 10px;
        line-height: 40px;
      }
      .tabspan2{
            padding-top: 10px;
    line-height: 10px;
     float: right;
     img{
        width:30px;height:30px;border-radius: 50%;
     }
      }
      .tabspan:last-child{
        color: #F08419;
      }
      .el-dropdown{
        margin-left:10px;
      }
    }
  }
</style>
<template>
  <div class=" topheader">
    <!-- <div class="pageouter"></div> -->
    <div class="layout content">
        <i class="icon iconfont icon-hulianwang"></i>
        <el-dropdown class="pagecursor">
          <span class="el-dropdown-link">
            English<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="tabspan"  ><a >帮助中心</a></span>
        <span v-show="!islogin" class="tabspan"> <nuxt-link to="/register/registering">免费注册</nuxt-link></span>
        <span v-show="!islogin" class="tabspan"><nuxt-link to="/login">登录</nuxt-link></span>
        <span v-show="islogin" class="tabspan"><nuxt-link to="/member/menberHome">用户中心</nuxt-link></span>
        <span v-show="islogin" class="tabspan" @click="signout()"> <nuxt-link to="/login">退出</nuxt-link></span>
        <span class="tabspan" v-if="!islogin" ><a >欢迎您，尊敬的纬远纳信用户！</a></span>
        <span class="tabspan1" v-if="islogin&&users.nickname!==null&&users.nickname!==''" >{{users.nickname}}</span>
        <span class="tabspan1" v-if="islogin&&(users.nickname===null||users.nickname==='')" >{{users.email}}</span>
        <span class="tabspan2" v-if="islogin&&users.avatar!==null&&users.avatar!==''&&users.avatar!==undefined" ><img :src="users.avatar" ></span> 
        <span class="tabspan2" v-if="islogin&&(users.avatar===null||users.avatar===''||users.avatar===undefined)" ><img src="../../assets/img/touxiang.png" ></span> 
    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  export default {
    name:'topheader',
    props:['title','meta_description','meta_keywords'],
    data() {
      return{
        islogin:false,
        users:{},
      }
    },
    head () {
      if(this.$route.path !== '/information'){
        return {
          title: this.$store.state.title,
        }
      }else{
        return {
          title:this.title,
          meta: [
            { hid: 'description', name: 'keywords', content: this.meta_keywords },
            { hid: 'description', name: 'description', content: this.meta_description }
          ]
        }
      }
    },
    methods:{
      gotab(path){
        if(path === 'logout'){
          localStorage.removeItem('token');
          this.islogin = false;
        }else{
          this.$router.push({name:path});
        }
      },
      signout(){
        this.$store.dispatch("_signOut");
        this.islogin = false;
      }
    },
    mounted(){
      let that = this;
      // debugger
      // alert(JSON.stringify(Cookies));
      //  alert(JSON.stringify(localStorage));
      if(Cookies.get('userInfo')){
         let tempuser = JSON.parse(Cookies.get('userInfo'))
        localStorage.setItem('token',tempuser.token);
        that.users = tempuser;
      }else{
        // localStorage.removeItem('token')
      }
      if(localStorage.getItem('token')){
        that.islogin = true;
      }else{
        that.islogin = false;
      }
      // alert(that.islogin)
      //清除订舱下单的缓存
      // if(that.$route.name !=='cabinOrder'){
      //  localStorage.removeItem("")
      // }
    },
    watch:{

    }
  }
</script>
