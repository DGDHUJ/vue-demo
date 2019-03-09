

<style lang="scss" scoped>

  .inquiryRegister{
    overflow: hidden;
    background: white;
    .inquiryRegister-content{
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      background: white;
      height: 73%;
      width: 100%;
      .inquiryRegistercontent{
        position: relative;overflow: hidden;height: 477px;
        .showitem{
          -webkit-box-shadow: #ccc 0px 10px 10px;
          -moz-box-shadow: #ccc 0px 10px 10px;
          box-shadow: #ccc 0px 10px 10px;
          background: white;
          padding: 10px 20px;
          width: 320px;
          font-size: 16px;
          border: 1px solid rgb(221, 221, 221);
          position: absolute;
          top: 50%;left: 50%;
          transform: translate(-50%,-50%);
          .showitems1{
            border-left: 2px solid #E77B1E;padding: 0  0 0 10px;font-weight: bold;margin-bottom: 10px;
          }
          .showitems2{
            margin-bottom: 10px;font-size: 14px;color: #c3bebe;
            .itemstar{
              float: left;color: #E77B1E;margin-bottom: 10px;
            }
          }
          .showitems3{
            margin-bottom: 10px;font-weight: bold;
          }
          .showitemsinput{
            margin-bottom: 10px;
          }
          .showitemsbtn{
            background: #4B3F91;
            color: white;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
            cursor: pointer;
          }
        }

      }
    }
    .footline{
      height: 6px;
      background: #4B3F91;
      background: #4B3F91;
    }
  }


</style>
<style lang="scss">
  .inquiryRegister{
    .showitemsinput{
      .el-input__inner{
        background: #ddd;
      }

      .el-input__inner::-webkit-input-placeholder { /* WebKit browsers */
        color:#9C9C9C;
      }
      .el-input__inner:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:#9C9C9C;
      }

      .el-input__inner::-moz-placeholder { /* Mozilla Firefox 19+ */

        color:#9C9C9C;
      }
      .el-input__inner:-ms-input-placeholder { /* Internet Explorer 10+ */
        color:#9C9C9C;
      }
    }
  }

</style>
<template>
  <section class="container">
    <div class="inquiryRegister">
      <headerbar></headerbar>
      <div class="inquiryRegister-content">
        <commonheader></commonheader>
        <commonheaderbar :category="category"></commonheaderbar>
        <div class="__main layout inquiryRegistercontent">
          <div class="showitem">
            <div class="showitems1">New Account registration</div>
            <div class="showitems2"> <span class="itemstar">*</span><p>Please complete your account info to proceed to quote.</p></div>
            <div class="showitems3">Email:  aaaaa@bbb.com</div>
            <el-input class="showitemsinput" type="password" v-model="password" placeholder="Enter your password"></el-input>
            <el-input class="showitemsinput" type="password" v-model="repassword" placeholder="Enter your password again"></el-input>
            <div class="showitemsbtn">Submit</div>
          </div>
        </div>
        <div class="footline"></div>
        <footerbar></footerbar>
        <righttab></righttab>
      </div>
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
    name:'inquiryRegister',
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
        password:null,
        repassword:null,
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>
