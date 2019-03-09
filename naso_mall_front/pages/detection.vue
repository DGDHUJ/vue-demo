<style lang="scss" scoped>
  .detection{
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    background: white;
    .headercontent{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
    }
    .title-outer{
      width: 100%;
      .el-row {
        /*margin-bottom: 20px;*/
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: white;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        min-height: 40px;
        line-height: 40px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
      .bg-purple {
        background: white;
        line-height: 40px;
        .tabcontent{
          line-height: 40px;
        }
        .tabcontent .el-breadcrumb{
          line-height: 40px;
        }
        .title1{
          font-size: 1.25rem;
          font-weight: 600;
          color: #4B3F91;
        }
        .title2{
          border-bottom: 1px solid #ddd;
          .title2-img{
            display: inline-block;
          }
          .title2-content{
            display: inline-block;
            font-size: 1.125rem;
            margin-left: 10px;
            font-weight: 600;
            color: #EF8953;
          }
        }
        .title3{
          padding-left: 28px;
          font-size: 1rem;
          color: #4B3F91;
          font-weight: 600;
        }
        .photos{
          .col-1-5{
            width: 20%;
            text-align: center;
            margin-bottom:15px;
            .bg-purple1{
              border:1px solid #ddd;
              position: relative;
              .items{
                .itemsimg{
                  position: relative;
                  width:100%;
                  .items-img{
                    width: 100%;
                    height: 168px;
                  }
                  .itemswenjian{
                    font-size: 96px;
                    line-height: 168px;
                    color: #EEEEEE;
                  }
                }

                .title{
                  font-size: 0.95rem;
                  text-align: -webkit-auto;
                  line-height: 20px;
                  padding-left:10px;
                  .title-p{

                  }
                }
                .download{
                  color: #EF8953;
                  font-size:0.95rem;
                  font-weight: 600;
                  .download-img{
                    display: inline-block;
                  }
                  .download-content{
                    display: inline-block;
                  }
                }
              }

            }
          }
        }
        .title4{
          padding-left: 28px;
          font-size: 1rem;
          color: #4B3F91;
          font-weight: 600;
        }
        .solid-hr{
          height: 1px;margin: 20px 0;border:none;border-top:1px solid #ddd;
        }
        .video{
          margin: 20px 0 40px 0;
          .col-1-5{
            width: 20%;
            text-align: center;
            margin-bottom:15px;
            .bg-purple2{
              border:1px solid #ddd;
              position: relative;
              .items{
                width: 100%;
                .videos{
                  width: 100%;
                  position: relative;
                  .video{
                    width: 100%;
                    margin:0;
                  }
                }

                .title{
                  font-size: 0.95rem;
                  text-align: -webkit-auto;
                  line-height: 20px;
                  .title-p{

                  }
                }
                .download{
                  color: #EF8953;
                  font-size:0.95rem;
                  font-weight: 600;
                  .download-img{
                    display: inline-block;
                  }
                  .download-content{
                    display: inline-block;
                  }
                }
              }

            }
          }
        }

      }

    }
    .footline{
      height: 6px;
      background: #4B3F91;
    }
  }
</style>
<template>
  <section  class="container">
    <div class="detection">
      <headerbar></headerbar>
      <div class="headercontent">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
      </div>
      <div class="title-outer">
        <el-row :gutter="0">
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <div class="tabcontent">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>Home</el-breadcrumb-item>
                  <el-breadcrumb-item>Cooking equipment</el-breadcrumb-item>
                  <el-breadcrumb-item>Member</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="title1">
                <p>Quality control monitoring</p>
              </div>
              <div class="title2">
                <img class="title2-img" src="../assets/img/supervision_title2.png" height="16" width="18"/>
                <p class="title2-content">Download Quality control test report</p>
              </div>
              <div class="photos file">
                <el-row :gutter="20">
                  <el-col class="col-1-5" :key="key" v-for="(item,index,key) in file">
                    <div class="grid-content bg-purple1" >
                      <div class="items">
                        <div class="itemsimg">
                          <i class="icon iconfont icon-wenjian1 itemswenjian"></i>
                          <!--<img  class="items-img" :src="item.url"/>-->
                          <!--<img v-if="item%5 === 1"  class="items-img" src="../assets/img/supervision_list1.png"/>
                          <img v-if="item%5 === 2" class="items-img" src="../assets/img/supervision_list2.png"/>
                          <img v-if="item%5 === 3" class="items-img" src="../assets/img/supervision_list3.png"/>
                          <img v-if="item%5 === 4" class="items-img" src="../assets/img/supervision_list4.png"/>
                          <img v-if="item%5 === 0" class="items-img" src="../assets/img/supervision_list5.png"/>-->
                        </div>
                        <div class="title">
                          <p class="title-p">
                            {{item.title}}
                          </p>
                        </div>
                        <div class="download cursor" @click="download">
                          <img class="download-img" src="../assets/img/supervision_title2.png" height="16" width="18"/>
                          <p class="download-content">Download</p>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="title3">
                <p>Detection of photos</p>
              </div>
              <div class="photos">
                <el-row :gutter="20">
                  <el-col class="col-1-5" :key="key" v-for="(item,index,key) in photo">
                    <div class="grid-content bg-purple1" >
                      <div class="items">
                        <div class="itemsimg">
                          <img  class="items-img" :src="item.url"/>
                         <!-- <img v-if="item%5 === 1"  class="items-img" src="../assets/img/supervision_list1.png"/>
                          <img v-if="item%5 === 2" class="items-img" src="../assets/img/supervision_list2.png"/>
                          <img v-if="item%5 === 3" class="items-img" src="../assets/img/supervision_list3.png"/>
                          <img v-if="item%5 === 4" class="items-img" src="../assets/img/supervision_list4.png"/>
                          <img v-if="item%5 === 0" class="items-img" src="../assets/img/supervision_list5.png"/>-->
                        </div>
                        <div class="title">
                          <p class="title-p">
                            {{item.title}}
                          </p>
                        </div>
                        <div class="download cursor" @click="download">
                          <img class="download-img" src="../assets/img/supervision_title2.png" height="16" width="18"/>
                          <p class="download-content">Download</p>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <hr class="solid-hr" >
              <div class="title4">
                <p>Detection of video</p>
              </div>
              <div class="video">
                <el-row :gutter="20">
                  <el-col class="col-1-5" :key="key" v-for="(item,index,key) in video">
                    <div class="grid-content bg-purple2" >
                      <div class="items">
                        <div class="videos">
                          <video   :id="item.id" class="video" controls>
                            <source :src="item.url" type="video/mp4">
                            <source :src="item.url" type="video/ogg">
                            您的浏览器不支持 HTML5 video 标签。
                          </video>
                        </div>
                        <div class="title">
                          <p class="title-p">
                            {{item.title}}
                          </p>
                        </div>
                        <div class="download cursor" @click="download">
                          <img class="download-img" src="../assets/img/supervision_title2.png" height="16" width="18"/>
                          <p class="download-content" >Download</p>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
  </section>
</template>
<script>
  import headerbar from '../components/common/headerbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import $ from 'jquery/dist/jquery.slim.min'
  export default {
    name:'detection',
    async asyncData({store}) {
      //菜单
      let category = []
      await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{store}).then(res => {
        category = res.data
      })
      return {category};
    },
    data(){
      return{
        photo:[],
        file:[],
        video:[],
        tempid:this.$route.query.id,
      }
    },
    methods:{
      //获取监测数据并分类
      getdata(){
        let that = this;
        let dataUrl = that.$store.state.headerUrl + 'member/order/'+that.tempid +'/report/1';
        let tempalert = that.$alert;
        that.comment.axiosGet(dataUrl,that.$axios,that.$store).then(function (resp) {
          if(resp.data.code === 0){
            for(var i = 0; i < resp.data.data.length;i++){
              if(resp.data.data[i].url_type === 'file'){
                that.file.push(resp.data.data[i]);
              }else if(resp.data.data[i].url_type === 'photo'){
                that.photo.push(resp.data.data[i]);
              }else if(resp.data.data[i].url_type === 'video'){
                that.video.push(resp.data.data[i]);
              }
            }
          }
      //    console.log(resp.data.data);
        })
      },
      //下载数据
      download(){
    //    console.log("download....")
      }
    },
    mounted(){
      this.getdata();
    },
    components: {
      'headerbar':headerbar,
      'footerbar':footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
    },
  }
</script>
