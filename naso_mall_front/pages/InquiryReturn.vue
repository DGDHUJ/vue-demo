<style lang="scss" scoped>
  .successful{
    overflow: hidden;
    background: white;
    .successful-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      height: 73%;
      /*position: absolute;*/
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
      .bg-purple {
        background: white;
        .el-breadcrumb{
          line-height: 3;
        }
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
      .detail{
        text-align: center;margin-top:4rem;
        .p1{
          line-height: 20px;
        }
        .p2{
          line-height: 20px;
          span{
            color:#4B3F91;font-size: 1rem;font-weight: 600;
          }
        }
      }
    }
    .footline{
      height: 6px;
      background: #4B3F91;
      margin-top: 11rem;
    }
    .footerbar{
      position: relative;
      padding: 18px 0;
    }
  }
</style>
<template>
  <section class="container">
    <div class="successful">
      <headerbar></headerbar>
      <div class="successful-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout" style="padding: 40px 0 0 0 ;">
          <div style="text-align: center;">
            <img src="../assets/img/back_03.jpg" width="140px"/>
            <img src="../assets/img/back_01.jpg" />
            <img src="../assets/img/back_04.jpg" width="140px"/>
            <img src="../assets/img/back_02.jpg"  />
            <img src="../assets/img/back_05.jpg" width="140px"/>
            <img src="../assets/img/back_02.jpg"/>
            <img src="../assets/img/back_06.jpg" width="140px"/>
          </div>
          <div style="font-size: 18px;font-weight: bold;color: #666666;">
            <p style="display: inline-block;padding: 0 0 0 150px;">Submit inquiry</p>
            <p style="display: inline-block;padding: 0 0 0 100px;">Wait for response</p>
            <p style="display: inline-block;padding: 0 0 0 80px;">Negotiate with supplier</p>
            <p style="display: inline-block;padding: 0 0 0 60px;">Start online order</p>
          </div>
          <div style="font-size: 16px;padding: 60px 0 0 0;">
            <div style="width: 50%;display: inline-block;padding: 0 0 0 150px;">
              <div style="height: 24px;">
                <img style="float: left" src="../assets/img/back_gou.png" height="27" width="34"/>
                <p style="display: inline-block;margin: 5px 0 0 0 ;">Inquiry sent successfully.</p>
              </div>
              <nuxt-link :to="{path:'member/infoList'}">
                <div style="height: 40px;margin-top: 10px;width: 200px;background:#FF9200;line-height: 40px;border-radius: 5px;text-align: center;color:white;cursor: pointer ">
                  Go to member center
                </div>
              </nuxt-link>
            </div>
            <div style="width: 50%;display: inline-block;">
              <div style="height: 48px;width: 415px;margin-left: 25px;"><span style="color: red">*</span>Don't you want to find your ideal products quickly？
                Just tell us what you want.
              </div>
              <nuxt-link :to="{path:'inquiry'}">
                <div style="height: 40px;margin-left: 25px;margin-top: 10px;width: 200px;background:#FF9200;line-height: 40px;border-radius: 5px;text-align: center;color:white;cursor: pointer ">
                  Go to post buying leads
                </div>
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
      <righttab></righttab>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery/dist/jquery.slim.min'
  import headerbar from '../components/common/headerbar.vue'
  import footerbar from '../components/common/footbar.vue'
  import commonheader from '../components/common/commonheader.vue'
  import commonheaderbar from '../components/common/commonheaderbar.vue'
  import righttab from '../components/common/righttab.vue'
  export default {
    name:'InquiryReturn',
    async asyncData({store}) {
      //菜单
      let category = []
      await store.dispatch("GET_CATEGORY",'http://www.getnaso.com/api/category',{store}).then(res => {
        category = res.data
      })
      return {category};
    },
    components: {
      'headerbar':headerbar,
      'footerbar':footerbar,
      'commonheader': commonheader,
      'commonheaderbar': commonheaderbar,
      'righttab': righttab,
    },
    data(){
      return{

      }
    },
    methods:{

    },
    mounted() {
      /*window.setInterval(() => {
        this.times--;
        if (this.times === 0) {
          this.$router.push('/member/allorder');
        }
      }, 1000)*/
    }
  }
</script>

<style>

</style>
