<style scoped lang="scss">
  .homehotline{
    position: relative;
    .homehotline-content{
      background:url('../../assets/img/shipping-containers.png');
      -moz-background-size:100% 100%; /* 老版本的 Firefox */
      background-size:100% 100%;
      background-repeat:no-repeat;
      /*position: absolute;*/
      width: 100%;
      /*top: 0;*/
      .title{
        text-align: center;
        line-height: 140px;
        .title-content{
          display: inline-block;font-size: 1.2rem;margin: 0 20px;    width: 30%;position: relative;
          .left-hr{
            height: 3px;width:28%;display: inline-block;background: #B8BABD;position: absolute;top: 50%;left: 0;
          }
          .hot{
            font-size:2rem ;
            font-weight: 600;
            color: #4A3F91;
          }
          .line{
            font-size:2rem ;
            font-weight: 600;
            color: #F08619;
          }
          .right-hr{
            height: 3px;width: 28%;display: inline-block;background: #B8BABD;position: absolute;top: 50%;right: 0;
          }
        }
      }
      .content{
        margin-bottom: 40px;
        .grid-content {
          border-radius: 4px;
          min-height: 36px;
          background: white;
          margin:0 0  10px 0 ;
          .items{
            cursor: pointer;
            width: 100%;
            border-left:5px solid #4A3F91;
            padding: 20px 10px 30px 20px;
            .item-title{
              padding: 10px;
              font-weight: 600;
              font-size: 1.1rem;
            }
            .item-price{
              padding: 0 0 10px 10px;
              font-size: 0.875rem;
              color: #6C6C6C;
              P{
                display: inline-block;
              }
            }
            .item-member-price{
              padding: 0 0 10px 10px;
              font-size: 0.93rem;
              color: #818181;
              font-weight: 500;
              span:last-of-type{
                color: #F08619;
                font-weight: 600;
                font-size: 1rem;
              }
            }
            .item-detail{
              padding: 0 0 10px 10px;
              font-size: 0.93rem;
              color: #818181;
              font-weight: 500;
            }
          }
          .items-active{
            border-left:5px solid #F08619;
            .item-title{
              color: #F08619;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="homehotline">
    <div class="homehotline-content">
      <div class="">
        <div class="layout content">
          <div class="title">
            <div class="title-content">
              <hr class="left-hr">
              <span class="hot">热门</span> <span class="line">路线</span>
              <hr class="right-hr">
            </div>
          </div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="6" v-for="(item,index,key) in hot_shipping_goods" :key="key"><div class="grid-content bg-purple">
                <div class="items" :class="{'items-active': index === 0}">
                  <div class="item-title">
                    {{item.pol_cn_name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{item.pod_cn_name}}
                  </div>
                  <div class="item-price">
                    <p>{{(Number(item.gp20_price)*1.5).toFixed(2)}}&nbsp;&nbsp;</p>
                    <p>/{{(Number(item.gp40_price)*1.5).toFixed(2)}}&nbsp;&nbsp;</p>
                    <p>/{{(Number(item.hq40_price)*1.5).toFixed(2)}}&nbsp;&nbsp;</p>
                  </div>
                  <div class="item-member-price item-price">
                    <span v-if="!islogin">会员价：&nbsp;&nbsp;</span>
                    <span v-if="!islogin" @click="login">登录查看</span>
                    <p v-if="islogin">{{item.gp20_price}}&nbsp;&nbsp;</p>
                    <p v-if="islogin">/{{item.gp40_price}}&nbsp;&nbsp;</p>
                    <p v-if="islogin">/{{item.hq40_price}}&nbsp;&nbsp;</p>
                  </div>
                  <div class="item-detail">
                    <span>直达;&nbsp;&nbsp;</span>
                    <span>{{item.days}}天;&nbsp;&nbsp;</span>
                    <span>截/开:&nbsp;&nbsp;{{item.sail_week_day}}/6</span>
                  </div>
                </div>
              </div></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import jq from 'jquery'
  export default {
    name:'homehotline',
    props:['hot_shipping_goods'],
    data(){
      return{
        islogin:false,
      }
    },
    methods:{
      login(){
        this.$router.push({name:'login'});
      }
    },
    mounted(){
      let that = this;
      if(localStorage.getItem('token')){
        that.islogin = true;
      }else{
        that.islogin = false;
      }
    }
  }
</script>
