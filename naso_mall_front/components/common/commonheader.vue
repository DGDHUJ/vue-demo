<style lang="scss" scoped>
  .el-dropdown{
    cursor: pointer;
  }
  .el-dropdown-menu{
    padding: 10px;
    .unlisted{
      text-align: center;
      .el-button{
        width: 100%;
      }
      p{
        margin-top: 10px;
        span{
          color: #4B3F91;
        }
      }
    }
    z-index: 99;
  }
  .commonheader{
    /*margin: 20px 0;*/
    margin: 0px auto;
    padding: 20px 0;
    min-width: 1000px;
    .mainpage-content-header{
       display: flex;
       text-align: center;
       margin: 0 10%;
       flex-direction: row;
       flex-wrap: nowrap;
       line-height: 50px;
       padding-top: 20px;
     }
    .mainpage-content-header-imgouter{
      text-align: left;
      cursor: pointer;
    }
    .mainpage-content-header-img{
      width: 70%;
    }
    .mainpage-content-header-btn{
      background: #4B3F91;
      font-size: 1rem;
      color: white;
      a{
        color: white;
      }
    }
    .mainpage-content-header-link{
      text-align: right;
      margin-right: 10px;
      padding-top: 10px;
      .el-dropdown-menu .el-popper{
        z-index: 99;
      }
    }
    .el-button{
      border-radius: 0;
    }
    .mainpage-content-header-link i{
      color:#4A3F91;
    }
    .mainpage-content-header-link a{
      font-size: 10px;
      color: #60627D;
      text-decoration: none;
      outline: none;
    }
    .marginL15p{
      margin-left:15px;
    }
    .el-row {
      margin-bottom: 20px;

    }
    .el-row:last-child {
      margin-bottom: 0;
    }
    .bg-purple-dark {
      background: white;
    }
    .bg-purple {
      background: white;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      height: 50px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
    .headerbarinput{
        padding-top: 4px;
      .el-input-group__append{
        padding:0;
      }
    }
  }
</style>
<style lang="scss">
  
    .mainpage-content-header-link .el-button{
        background: #fff;
        border:0px;
        padding: 0;
      }
    .mainpage-content-header-link .el-button:hover{
        color: #4b3f91;
        border-color: #fff;
        background-color: #fff;
      }
      
    .headerbarinput{
      .el-input-group__append{
        border:0;
      }
    }
</style>
<template>
  <div>
    <div class="commonheader layout">
      <el-row :gutter="0">
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="mainpage-content-header-imgouter">
            <router-link tag='a' to="/">
              <img class="mainpage-content-header-img" src="../../assets/img/naxinlogo.png" alt="">
            </router-link>
          </div>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div class="headerbarinput">
            <el-input placeholder="" v-model="search_key" class="input-with-select" @keyup.enter.native="enter(token,search_key)">
              <nuxt-link slot="append" v-if="isindex" :to="{name: 'product-list-cate',query:{'limit':30,'page':1,'keyword':search_key}}">
                <el-button   class="mainpage-content-header-btn">
                    <div>
                      Search
                    </div>
                </el-button>
              </nuxt-link>
              <el-button v-if="!isindex" slot="append" class="mainpage-content-header-btn" @click="goproductList"> Search </el-button>
            </el-input>
          </div>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <div class="mainpage-content-header-link">
            <div>
              <!-- <el-dropdown split-button @click="gomember">
                  <i class="iconfont icon-ren"></i>Member
                <el-dropdown-menu  slot="dropdown">
                  <div v-if="!islogin" class="unlisted">
                    <nuxt-link :to="{name: 'login'}"><el-button style="width: 60%;">Login</el-button></nuxt-link>
                    <p>New User?<span class="cursor">Join Free Now</span></p>
                  </div>
                  <div v-if="islogin" class="listed">
                    <a class="colorblack" href="/member/membercentre"><el-dropdown-item><i class="iconfont icon-order1"></i>My Order</el-dropdown-item></a>
                    <a class="colorblack" href="/member/allorder"><el-dropdown-item><i class="iconfont icon-shezhi"></i>After-sale Service</el-dropdown-item></a>
                    <a class="colorblack" href="/shoppingcart/cartlist"><el-dropdown-item><i class="iconfont icon-gouwuche"></i> Cart</el-dropdown-item></a>
                    <a class="colorblack" href="/orderpage"> <el-dropdown-item><i class="iconfont icon-add-wish"></i> Wish List</el-dropdown-item></a>
                    <a class="colorblack" href="/member/infoList"> <el-dropdown-item><i class="iconfont icon-add-wish"></i> Message</el-dropdown-item></a>
                  </div>
                </el-dropdown-menu>
              </el-dropdown> -->
              <el-dropdown :show-timeout="0">
                <span class="el-dropdown-link" @click="gomember">
                  <i class="iconfont icon-ren"></i>Member
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu  slot="dropdown">
                  <div v-if="!islogin" class="unlisted">
                    <nuxt-link :to="{name: 'login'}"><el-button style="width: 60%;">Login</el-button></nuxt-link>
                    <p>New User?<span class="cursor">Join Free Now</span></p>
                  </div>
                  <div v-if="islogin" class="listed">
                    <a class="colorblack" href="/member/allorder?page=1"><el-dropdown-item><i class="iconfont icon-order1"></i>My Order</el-dropdown-item></a>
                    <a class="colorblack" href="/member/dateModification"><el-dropdown-item><i class="iconfont icon-shezhi"></i>After-sale Service</el-dropdown-item></a>
                    <a class="colorblack" href="/shoppingcart/cartlist"><el-dropdown-item><i class="iconfont icon-gouwuche"></i> Cart</el-dropdown-item></a>
                    <a class="colorblack" href="/orderpage"> <el-dropdown-item><i class="iconfont icon-shoucang"></i> Purchase List</el-dropdown-item></a>
                    <a class="colorblack" href="/member/infoList"> <el-dropdown-item><i class="iconfont el-icon-message"></i> Message</el-dropdown-item></a>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
              <span class="marginL15p"><a class="colorblack" href="/shoppingcart/cartlist"><i class="iconfont  icon-gouwuche"></i> Cart</a> </span>
              <span class="marginL15p"><a class="colorblack" href="/member/allorder"><i class="iconfont icon-dingdan"></i> Order</a> </span>
              <span class="marginL15p" ><a class="colorblack" href="/member/infoList"><i class="iconfont el-icon-message"></i>  Message</a></span>
            </div>
          </div>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    name:'commonheader',
    props:['searchkeyword'],
    data(){
      return{
        search_key:this.searchkeyword,
        isindex:true,
        token:'',
        islogin:false,
      }
    },
    methods:{
      gomember(){
        if (this.islogin) {
          this.$router.push('/member/membercentre')
        }else{
          this.$router.push('/login')
        }
      },
      goindex(){
        this.$router.push('/')
      },
      goproductList() {
        this.$emit('upup', this.search_key);
      },
      enter(token,searchkeyword){
        this.$router.push({name: 'product-list-cate',query:{'limit':30,'page':1,'keyword':searchkeyword}})
      }
    },
    mounted(){

      if(localStorage.getItem('users')){
        this.token = JSON.parse(localStorage.getItem('users')).token;
      }
      if(window.location.pathname === '/productList'){
        this.isindex = false;
      }
      if(localStorage.getItem('users')){
        this.islogin = true;
      }else{
        this.islogin = false;
      }
    },
    watch: {
      //监听路由变化，刷新页面
      searchkeyword:function(val, oldVal){
        if(window.location.pathname === '/'){
          this.$emit('upup',val);
        }
      }
    },
  }
</script>
