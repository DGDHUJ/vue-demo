<style scoped lang="scss">
  .partner{
    min-width: 1001px;
   .img-ground{
     margin: 0 0 40px 0;
     .grid-content{
       font-size: 0.875rem;
       img{
         width: 100%;
         cursor: pointer;
         background: white;
       }
       .items-content{
         background:#DDD;height: 100%;padding:0.6rem;text-align: center;
         .item-subcontent{
           background: white;padding:36px;height: 100%;
           p:nth-of-type(1){
             font-size: 1.25rem;
             color: #4A3F91;
             font-weight: bolder;
           }
           p:nth-of-type(2){
             font-size: 0.875rem;
             color: #727272;
           }
         }
       }
       .el-input{
         height: 2.5rem;margin: 5px 0;
       }
       .el-input:nth-of-type(3){
         width: 60%;
       }
       .getcode{
         display: inline-block;width: 40%;
         height: 2.5rem;
         line-height: 2.5rem;
         background:#4A3F91 ;
         cursor: pointer;
         color: white;
       }
       .el-input__inner{
         height: 2.5rem;
       }
       .el-button{
         font-size: 0.875rem;
         height: 2.5rem;margin: 10px 0;
         line-height: 2.5rem;
         padding:0 20px;
         width: 100%;
         background: #F08519;
         color: white;
       }
     }
   }
  }
  .notimgdata{
    width: 445px;
    margin-left: 90%;
  }
</style>
<style lang="scss">
  .partner{
    .img-ground{
      .grid-content{
        .el-input__inner{
          height: 2.5rem;line-height: 2.5rem;font-size: 0.875rem;
        }
      }
    }
  }
</style>
<template>
  <section class="container">
    <div class="partner">
      <topheader/>
      <contentheader/>
      <tabbar :items="tabitems"/>
      <div>
        <!-- <div class="pageouter"></div> -->
        <div  class="layout">
          <div class="img-ground">
            <el-row :gutter="4">
              <el-col  :span="4" v-for="(item,index,key) in partner.list" :key="key" v-if="index<6"><div class="grid-content bg-purple">
                <nuxt-link :to="{path:'/'}">
                  <img  :src="item.img_url" />
                </nuxt-link>
              </div></el-col>
            </el-row>
            <el-row :gutter="4" style="position: relative;display: table;">
              <el-col  :span="8"  ><div class="grid-content bg-purple">
                <el-row :gutter="4">
                  <el-col  :span="12" v-for="(item,index,key) in partner.list" :key="key" v-if="index<14&&index>5"><div class="grid-content bg-purple">
                    <nuxt-link :to="{path:'/'}">
                      <img  :src="item.img_url" />
                    </nuxt-link>
                  </div></el-col>
                </el-row>
              </div></el-col>
              <el-col  :span="8" style="height: 337px;" :class="{'notimgdata':partner.list.length === 0}" ><div class="grid-content bg-purple" style="height: 100%">
                <div class="items-content">
                  <div class="item-subcontent">
                    <p>体验纳信非凡服务</p>
                    <p>期待你成为我们的长期合作伙伴</p>
                    <el-input  v-model="name" placeholder="您的姓名"></el-input>
                    <el-input  v-model="phone" placeholder="您的手机号码"></el-input>
                    <el-input  v-model="code" placeholder="输入验证码"></el-input>
                    <div class="getcode" >获取验证码</div>
                    <el-button>发送</el-button>
                  </div>
                </div>
              </div></el-col>
              <el-col  :span="8" ><div class="grid-content bg-purple">
                <el-row :gutter="4">
                  <el-col  :span="12" v-for="(item,index,key) in partner.list" :key="key" v-if="index<22&&index>13" ><div class="grid-content bg-purple">
                    <nuxt-link :to="{path:'/'}">
                      <img  :src="item.img_url"/>
                    </nuxt-link>
                  </div></el-col>
                </el-row>
              </div></el-col>
            </el-row>
            <el-row :gutter="4">
              <el-col  :span="4" v-for="(item,index,key) in partner.list" :key="key" v-if="index<28&&index>21"><div class="grid-content bg-purple">
                <nuxt-link :to="{path:'/'}">
                  <img  :src="item.img_url"/>
                </nuxt-link>
              </div></el-col>
            </el-row>
          </div>
        </div>

        <!-- <div class="pageouter"></div> -->
      </div>
      <homeguarantees/>
      <webfooter/>
      <righttab/>
    </div>
  </section>
</template>

<script>
  import topheader from '../components/comment/topheader.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import tabbar from '../components/comment/tab-bar.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import righttab from '../components/comment/righttab.vue'
  import axios from 'axios'
  import NuxtLink from "../.nuxt/components/nuxt-link";
  export default {
    name:'partner',
    async asyncData({ app, params, query }) {
      //获取文章数据
      let partnerUrl = app.store.state.headerUrl + 'cms/link';
      let paramsData = {
        limit:28,
        page:1,
        module_id:5,
        type:2
      }
      let partner  =  await axios.post(partnerUrl,paramsData).then(function(resp) {
        return resp.data.data;
      }).catch(function(error) {

      });

      function culLength() {
        if(partner.list.length<28){
          partner.list =  partner.list.concat(partner.list);
          culLength (partner.list);
        }
      }
      if(partner.list!== null){
        culLength();
      }else{
        partner.list =[]
      }
      return {
        partner:partner
      };
    },
    components: {
      NuxtLink,
      topheader,
      contentheader,
      tabbar,
      homeguarantees,
      webfooter,
      righttab,
    },
    data(){
      return{
        tabitems:[
          {name:'首页',path:'/'},
          {name:'合作伙伴',path:'/partner'}
        ],
        name:'',
        phone:'',
        code:'',
      }
    },
    methods:{},
    mounted(){

    }
  }
</script>
