<style scoped lang="scss">
  .information{
    .imgbackground{
      width: 100%;
      img{
        width: 100%;
        height: 360px;
      }
    }
    .infocontent{
      margin:0 0 40px 0;
      .title{
        height: 60px;
        line-height: 60px;
        color: #4A3F91;
        font-size: 1.4rem;
        font-weight: bold;
      }
      .content{
        overflow: hidden;
        // display: flex;
        .left{
          float: left;
          width: 16%;
          font-size: 1rem;
          div{
            border:1px solid #ddd;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin:0 0 3px 0;
            cursor: pointer;
          }
          a{
            background-color: #f4f4f4;
            div{
              margin-bottom: 10px;
              background: white;
            }
          }
          .is-active{
            background:#4A3F91 !important;
            color: white;
          }

        }
        .right{
          float: left;
          width: 82%;
          margin:0 0 0 20px;
          .items{
            background: white;
            min-height: 200px;
            padding: 20px;
            margin-bottom: 20px;
            .right-title{
              height: 40px;
              line-height: 40px;
              color: #4A3F91;
              font-size: 1.2rem;
              font-weight: bold;
            }
            .right-content{
              .grid-content{
                padding:0 20px 0 0 ;
                .information-content{
                  overflow: hidden;
                  margin-top: 20px;
                  .content-img{
                    float: left;
                    width: 45%;
                    img{
                      width: 100%;
                    }
                  }
                  .content-text{
                    float: left;
                    width: 55%;
                    height: 100%;
                    padding-left: 15px;
                    .text-title{
                      font-size: 1rem;
                      height: 30px;
                      line-height: 30px;
                      display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;
                    }
                    .text-date{
                      font-size: 0.875rem;
                      height: 20px;
                      line-height: 20px;
                    }
                    .text-line{
                      margin-bottom: 10px;
                      color: #4A3F91;
                      font-weight: bold;;

                    }
                    .text-content{
                      font-size: 0.875rem;
                      color:#ABABAB;
                      padding:3px 0;
                      display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;
                    }
                    .more{
                      color: #F08619;
                      font-size: 1rem;
                      cursor: pointer;
                    }

                  }
                }
                .gundongouter{
                  position: relative;overflow: hidden;margin: 10px 0 0 0;
                  .gundongcomemt{
                    /*height:120px;*/
                    .swiper-wrapper{
                      height: 40px;
                      line-height: 40px;
                      font-size: 0.875rem;
                      P:nth-of-type(1){
                        display: inline-block;
                        width: 270px;
                        overflow: hidden;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                      P:nth-of-type(2){
                        float: right;
                        margin-right: 8%;
                        color: #ABABAB;
                      }
                    }
                  }
                }
              }

            }
          }
        }
      }
    }
  }
</style>
<template>
  <section class="container">
    <div class="information">
      <topheader :title="title" :meta_description="meta_description" :meta_keywords="meta_keywords"/>
      <contentheader/>
      <div class="imgbackground">
        <img src="../assets/img/zixun.png"/>
      </div>
      <div class="layout">
        <!-- <div class="pageouter"></div> -->
        <div class="infocontent">
          <div class="title">资讯中心</div>
          <div class="content">
            <div class="left">
              <!--<el-menu :default-active="tabactive" class="el-menu-vertical-demo" @select="handleSelect">-->
              <nuxt-link  v-for="(item,index,key) in domlist" :key="key"  :index="(index).toString()" :to="{path:$route.path,query:{tabactive:index}}" >
                <div :class="{'is-active':index == tabactive}">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </div>
              </nuxt-link>
              <!--</el-menu>-->
            </div>
            <div class="right">
              <div class="items" v-show="show1" >
                <div v-if="tabactive === '0'" class="right-title">公司资讯</div>
                <div v-if="tabactive === '1'" class="right-title">行业动态</div>
                <div v-if="tabactive === '2'" class="right-title">相关政策</div>
                <div class="right-content" v-for="(item1,index,key) in listData" :key="key"  v-if="item1!==null&&item1!==undefined" v-show="index === domlist[Number(tabactive)].id">
                  <!--<p>{{index}}</p>-->
                  <el-row>
                    <el-col :span="12" v-for="(item,index,key) in item1" :key="key"  v-if="item!==null&&item!==undefined">
                      <nuxt-link :to="{path:$route.path,query:{tabactive:tabactive,detailid:item.id,detailindex:index}}">
                      <div class="grid-content bg-purple"  style="cursor: pointer">
                        <div class="information-content">
                          <div class="content-img">
                            <img :src="item.img_url"/>
                          </div>
                          <div class="content-text">
                            <p class="text-title">{{item.title}}</p>
                            <p class="text-date">{{comment.formate('yyyy/MM/dd',new Date(Number(item.create_time)*1000))}}</p>
                            <div class="text-line">__</div>
                            <p class="text-content">{{item.shorttitle}}</p>
                          </div>
                        </div>
                        <div class="gundongouter">
                          <div class="gundong gundongcomemt">
                            <div class="swiper-wrapper">
                              <div class="swiper-slide" >
                                <p>{{item.title}}</p>
                                <p>{{comment.formate('yyyy/MM/dd',new Date(Number(item.update_time)*1000))}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </nuxt-link>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="items" v-for="(item,index,key) in listData" :key="key"  v-if="item!==null&&item!==undefined" v-show="show2&&index === domlist[Number(tabactive)].id">
                <div style="font-size: 14px" v-for="(item1,index,key) in item" :key="key" v-if="item1!==null&&item1!==undefined" v-show="Number(item1.id) === detailid">
                  <div style="font-size: 16px; text-align: center;padding: 10px 0;font-weight: bold;" v-if="item1.detail!==null&&item1.detail!==undefined">{{item1.detail.title}}</div>
                  <div v-if="item1.detail!==null&&item1.detail!==undefined" v-html="item1.detail.content"></div>
                </div>
              </div>
            </div>
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
  import homeguarantees from '../components/home/homeguarantees.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import righttab from '../components/comment/righttab.vue'
  // import Swiper from 'swiper/dist/js/swiper.min'
  import axios from 'axios'
  import NuxtLink from "../.nuxt/components/nuxt-link";
  export default {
    name:'information',
    async asyncData({ app, params, query }) {
      //获取文章数据
      let listUrl = app.store.state.headerUrl + 'cms/column/2';
      let domlist   =  await axios.get(listUrl).then(function(resp) {
        return resp.data.data;
      }).catch(function(error) {
        
      });
      let showtabid = null;
      if(query.cms){
        showtabid = query.cms;
      }else{
        showtabid = domlist[0].id;
      }
      //获取所有的文章内容
      let Cmsurl = app.store.state.headerUrl + 'cms';
      let listData = [];
      for( let i= 0;i<domlist.length;i++){
        
        let paramsData ={
          limit:10,
          page:1,
          cid:Number(domlist[i].id),
        }
        let templsitData =  await axios.post(Cmsurl,paramsData).then(function(resp) {
          let temparr = null;
          if(resp.data.code === 0){
            if(resp.data.data.list === null){
              temparr = null;
            }else{
              temparr = resp.data.data.list;
            }
          }
          return temparr;
        }).catch(function(error) {
          
        });
        if(templsitData !== null){
          for(var j = 0;j< templsitData.length; j++){
            let detailUrl = app.store.state.headerUrl + '/cms/' + templsitData[j].id;
            let conentData = await axios.get(detailUrl).then(function(resp) {
              return  resp.data.data;
            }).catch(function(error) {
              
            });
            templsitData[j].detail = conentData;
          }
        }
        listData[domlist[i].id] = templsitData;
      }
      let initUrl =  app.store.state.headerUrl + 'freight/init';
      let initData =  await axios.get(initUrl).then(function(resp) {
        return resp.data.data;
      }).catch(function(error) {
        
      });
      app.store.commit('SET_TITLE',initData.freight.freight_name);
      let title = '';
      let meta_description = '';
      let meta_keywords = '';
      let show1 = true;
      let show2 = false;
      if(query.detailid){
        title = listData[domlist[Number(query.tabactive)].id][Number(query.detailindex)].detail.title;
        meta_description = listData[domlist[Number(query.tabactive)].id][Number(query.detailindex)].detail.meta_description;
        meta_keywords = listData[domlist[Number(query.tabactive)].id][Number(query.detailindex)].detail.meta_keywords;
        show1 = false;
        show2 = true;
      }else{
        title = initData.freight.freight_name;
        show1 = true;
        show2 = false;
      }
      return {
        domlist:domlist,
        listData:listData,
        title:title,
        meta_description:meta_description,
        meta_keywords:meta_keywords,
        show1:show1,
        show2:show2,
      };
    },
    components: {
      NuxtLink,
      topheader,
      contentheader,
      homeguarantees,
      webfooter,
      righttab,
    },
    data(){
      return{
        list:{},
        limit:3,
        page:1,
        cid:null,
        detailid:null,
        tabactive:'0',
      }
    },

    methods:{
    },
    mounted(){
      if(this.$route.query.detailid){
        this.detailid = Number(this.$route.query.detailid)
      }else if(this.$route.query.tabactive){
        this.tabactive = this.$route.query.tabactive;
      }
    },
    watch:{
      '$route':function () {
        this.$router.go(0)
      }

    }
  }
</script>
