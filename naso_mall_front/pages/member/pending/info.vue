<style lang="scss" scoped>
.wait-main {
  margin-left: 20px;
  color: #4a3f91;
}

.wait-2 .wait_content {
  & > div {
    line-height: 40px;
  }
  & > p {
    color: #333;
  }
}
.wait-type {
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
  &:last-child{
    border-bottom:0;
  }
  &_title {
    font-size: 14px;
    line-height: 50px;
  }
}
.wait-item {
  float: left;
  margin-right: 60px;
  p {
    margin-top: 20px;
    text-align: center;
    line-height: 16px;
    color: #333;
  }
}
.wait-item:last-child {
  margin-right: 0;
}

.wait_content {
  padding-bottom: 30px;
  min-height: 400px;
  font-size: 14px;
}
.wait_title {
  margin-bottom: 15px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #dcdcdc;
}
.wait_content {
  margin-bottom: 80px;
  padding: 10px 20px;
  border: 1px solid #dcdcdc;
}
.wait_img {
  width: 100px;
  height: 100px;
  line-height: 100px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.wait-item-video {
  display: inline-block;
  position: relative;
  width: 192px;
  height: 108px;
  background-color: #222;
  cursor: pointer;
  &-btn {
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 24px solid #fff;
  }
}
.dialog_video{
  text-align: center;
}
</style>

<template>
  <section class="wait-main container">
    <div>


      <!-- 验厂报告 -->
      <section class="wait-1" v-if="type === 1">
        <div class="wait_title">Factory Inspection Report</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Factory Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.factory_inspection_file"
              v-for="(item,index) in initData.factory_inspection_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.factory_inspection_photo"
              v-for="(item,index) in initData.factory_inspection_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.factory_inspection_video"
              v-for="(item,index) in initData.factory_inspection_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>
      <!-- 包装方案 -->
      <section class="wait-2" v-if="type === 2">
        <div class="wait_title">Packaging Plan</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Packaging Plan</p>
            <div
              class="wait-item"
              v-if="initData.template_confirm_file"
              v-for="(item,index) in initData.template_confirm_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.template_photo"
              v-for="(item,index) in initData.template_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.template_video"
              v-for="(item,index) in initData.template_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>
      <!-- 样板确认书 -->
      <section class="wait-3" v-if="type === 3">
        <div class="wait_title">Sample Confirmation</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Sample Confirmation</p>
            <div
              class="wait-item"
              v-if="initData.template_confirm_file"
              v-for="(item,index) in initData.template_confirm_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.template_photo"
              v-for="(item,index) in initData.template_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.template_video"
              v-for="(item,index) in initData.template_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>



      <!-- 重要零部件检验报告 -->
      <section class="wait-4" v-if="type === 4">
        <div class="wait_title">Key Components Inspection Report</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Key Components Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.important_inspection_file"
              v-for="(item,index) in initData.important_inspection_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.important_inspection_photo"
              v-for="(item,index) in initData.important_inspection_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.important_inspection_video"
              v-for="(item,index) in initData.important_inspection_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>
      <!-- 首检报告 -->
      <section class="wait-5" v-if="type === 5">
        <div class="wait_title">First Inspection Report</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">First Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.first_inspection_report"
              v-for="(item,index) in initData.first_inspection_report"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.first_inspection_photo"
              v-for="(item,index) in initData.first_inspection_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.first_inspection_video"
              v-for="(item,index) in initData.first_inspection_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>
      <!-- 生产过程检测报告 -->
      <section class="wait-6" v-if="type === 6">
        <div class="wait_title">Manufacturing Process Inspection Report</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Manufacturing Process Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.routing_inspection_file"
              v-for="(item,index) in initData.routing_inspection_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.routing_inspection_photo"
              v-for="(item,index) in initData.routing_inspection_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.routing_inspection_video"
              v-for="(item,index) in initData.routing_inspection_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>


      <!-- 第三方检测报告 -->
      <section class="wait-7" v-if="type === 7">
        <div class="wait_title">Third Party Inspection Report</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Third Party Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.test_report"
              v-for="(item,index) in initData.test_report"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.test_photo"
              v-for="(item,index) in initData.test_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.test_video"
              v-for="(item,index) in initData.test_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>
      <!-- 成品检验报告 -->
      <section class="wait-8" v-if="type === 8">
        <div class="wait_title">Finished Products Inspection Report</div>
        <div class="wait_content">
          <div class="wait-type clearfix">
            <p class="wait-type_title">Finished Products Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.acceptance_file"
              v-for="(item,index) in initData.acceptance_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.acceptance_photo"
              v-for="(item,index) in initData.acceptance_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.acceptance_video"
              v-for="(item,index) in initData.acceptance_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>
      <!-- 监装报告 -->
      <section class="wait-9" v-if="type === 9">
        <div class="wait_title">Loading Supervision Report</div>
        <div class="wait_content">
          <div class="wait-type clearfix">
            <p class="wait-type_title">Loading Supervision Report</p>
            <div
              class="wait-item"
              v-if="initData.loading_supervision_file"
              v-for="(item,index) in initData.loading_supervision_file"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.loading_supervision_photo"
              v-for="(item,index) in initData.loading_supervision_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.loading_supervision_video"
              v-for="(item,index) in initData.loading_supervision_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>



      <!-- 第三方检测报告 -->
      <section class="wait-9" v-if="type === 9">
        <div class="wait_title">Third Party Inspection Report</div>
        <div class="wait_content">


          <div class="wait-type clearfix">
            <p class="wait-type_title">Third Party Inspection Report</p>
            <div
              class="wait-item"
              v-if="initData.test_report"
              v-for="(item,index) in initData.test_report"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>


          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Photos</p>
            <div
              class="wait-item"
              v-if="initData.test_photo"
              v-for="(item,index) in initData.test_photo"
              :key="index"
            >
              <div
                class="wait_img"
                v-viewer="{navbar: false,title:false,zoomable:true,scalable:false,fullscreen:true}"
              >
                <img :src="item.path">
              </div>
              <p>{{item.name}}</p>
            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>

          <div class="wait-type clearfix">
            <p class="wait-type_title">Inspection Videos</p>
            <div
              class="wait-item wait_video"
              v-if="initData.test_video"
              v-for="(item,index) in initData.test_video"
              :key="index"
            >
              <div class="wait-item-video" @click="playVideo(item)">
                <i class="wait-item-video-btn"></i>
              </div>
              <p>{{item.name}}</p>

            </div>
            <div v-else style="color:#aaa;">None</div>
          </div>
        </div>
      </section>

      
      <!-- 模态框 -->
      <el-dialog :visible.sync="detialPlayVideo" width="600px"  class="dialog_video">
        <video :src="videoUrl" controls="controls" width="100%" height="100%"></video>
      </el-dialog>
    </div>
    <changeuserInfobar></changeuserInfobar>
  </section>
</template>

<script>
import changeuserInfobar from "../../../components/ordercommon/changeuserInfobar.vue";
import { _fastsort } from "../../../utils/methods";
export default {
  components: {
    changeuserInfobar: changeuserInfobar
  },
  name: "Pending-info",
  // async asyncData({app,store,query}) {
  //   let url = store.state.headerUrl + "member/order_qa_report/" + query.id;
  //   let initData = {}
  //   initData = await app.$axios.get(url,{headers:{token:query.token}}).then(res=>{
  //     if (res.data.code === 0) {
  //       return res.data.data
  //     }
  //   })
  //   return {initData};
  // },
  data() {
    return {
      initData:{},
      Data: {
        bom_table: [], // bom表
        cdf_table: [], // cdf表
        technical_param_file: [], // 技术参数表文件id
        receiving_standard: [], // 收货标准
        first_inspection_report: [], // 首检报告
        first_inspection_photo: [], // 首检报告图片
        first_inspection_video: [], // 首检报告视频
        test_standard_file: [], // 检验标准文件
        factory_inspection_file: [], // 验厂报告 -
        supplier_qualification: [], // 供应商资质
        factory_inspection_photo: [], // 验厂照片
        factory_inspection_video: [], // 验厂视频
        template_confirm_file: [], // 样板确认书
        template_photo: [], // 样板照片 - 
        template_video: [], // 样板视频
        packaging_scheme_file: [], // 包装方案 -
        packaging_photo: [], // 包装照片
        packaging_video: [], // 包装视频
        supplier_inspection_plan: [], // 供应商验货计划报告
        important_inspection_file: [], // 重要零件检验报告
        important_inspection_photo: [], // 重要零件检验照片
        important_inspection_video: [], // 重要零件检验视频
        routing_inspection_file: [], // 巡检报告 (生产过程检测报告) -
        routing_inspection_photo: [], // 巡检照片
        routing_inspection_video: [], // 巡检视频
        acceptance_file: [], // 验货报告
        acceptance_photo: [], // 验货照片
        acceptance_video: [], // 验货视频
        test_report: [], // 检测报告文档 (第三方) -
        test_photo: [], // 检测图片
        test_video: [], // 检测视频 
        loading_supervision_file: [], // 监装报告 --
        loading_supervision_photo: [], // 监装照片
        loading_supervision_video: [] // 监装视频
      },

      //视频模态框
      detialPlayVideo: false,
      videoUrl: "",
      type:Number(this.$route.query.type)
    };
  },
  methods: {
    playVideo(e) {
      this.detialPlayVideo = true;
      this.videoUrl = e.path
    },
    getData(){
      let url = this.$store.state.headerUrl + "member/order_qa_report/" + this.$route.query.id;
      let tempalert = this.$alert;
      this.comment.axiosGet(url,this.$axios,this.$store).then((resp)=>{
          if(resp.data.code === 0){
            this.initData = res.data.data;
          }else{
tempalert(resp.data.msg, {
            confirmButtonText: 'ok',
            center: true,
            callback: action => {
            this.$router.push({
          path:'/member/pending/pendingorder'
        });
          }
          });
          }
      }).catch(function (error) {
          tempalert("error", {
            confirmButtonText: 'ok',
            center: true,
            callback: action => {
            this.$router.push({
          path:'/member/pending/pendingorder'
        });
          }
          });
        })
    }
  },
  mounted() {
    if(localStorage.getItem("users")){
        this.getData();
    }
    // console.log(this.$route.query.type);
  },
  watch: {

  }
};
</script>

