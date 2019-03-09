<style scoped lang="scss">
  .homeCustommade{
    .homeCustommade-content{
      margin-bottom: 20px;
      .content{
        overflow: hidden;
        .header{
          padding: 30px 0 20px 0;
          .title{
            display: inline-block;
            font-size: 1.1rem;
            font-weight: 600;
            width: 140px;
            color: #4A3F91;
          }
          .tabs{
            display: inline-block;
            font-size: 0.93rem;
            .tab{
              cursor: pointer;
              display: inline-block;
              width: 125px;
              text-align: center;
              margin-right: 10px;
              border: 1px solid #4A3F91;
              padding: 2px 10px;
              border-radius: 5px;
              color: #4A3F91;
            }
            .tab-active{
              background: #4A3F91;
              color: white;

            }
            .tab:last-of-type{
              margin-right: 0px;
            }
          }
          .more{
            cursor: pointer;
            display: inline-block;
            font-size: 0.7rem;
            float: right;
            color: #F08619;
          }
        }
        .mainconten{
          overflow: hidden;
          .left{
            float: left;
            width: 40%;
            overflow: hidden;
            .title{
              overflow: hidden;
              padding:20px 0 0 0;
              .text{
                float: left;
                font-size: 1rem;
                font-weight: 600;
                color: #4A3F91;
              }
              .more{
                float: right;
                font-size: 0.7rem;
                color: #F08619;
              }
            }
            .items{
              overflow: hidden;
              margin-top:10px;
              .items-img{
                float: left;
                border:1px solid #ddd;
                width: 26%;
                height: 117px;
                img{
                  width:100%;
                }
              }
              .items-text{
                float: right;
                width: 74%;
                padding: 10px 0 0 20px;
                .title{
                  font-size: 1rem;
                  padding: 0 0 10px 0;
                }
                .sub-title{
                  font-size: 0.93rem;
                  color: #949494;
                  padding: 0 0 5px 0;
                }
                .num{
                  font-size: 0.93rem;
                  color: #949494;
                  padding: 0 0 5px 0;
                }
              }
            }

          }
          .right{
            float: right;
            width: 58%;
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
          }
        }

      }
    }
  }
</style>
<template>
  <div class="homeCustommade">
    <div class="homeCustommade-content">
      <div >
        <!-- <div class="pageouter"></div> -->
        <div class="layout content">
          <div class="header">
            <div class="title">纬远纳信定制采购</div>
            <div class="tabs">
              <div class="tab" :class="{'tab-active':showtab === 0}" @click="choosecity(0)"> 厨房小家电</div>
              <div class="tab" :class="{'tab-active':showtab === 1}" @click="choosecity(1)"> 居家小家电</div>
              <div class="tab" :class="{'tab-active':showtab === 2}" @click="choosecity(2)"> 个人护理小家电</div>
            </div>
            <div class="more">查看更多</div>
          </div>
          <div class="mainconten">
            <div class="left">
              <el-card shadow="always">
                <div class="title" style="padding: 0;">
                  <p class="text">拼单预定</p>
                  <p class="more">查看更多</p>
                </div>
                <!--<div class="items" v-for="item in 4" :key="item">-->
                <div class="items">
                  <div class="items-img">
                    <img src="http://img.nasotrading.com/ca16e35a3beefedf417888fbca332a35.png?v=196334" height="115" width="111"/>
                  </div>
                  <div class="items-text">
                    <p class="title">Plastic dust collector 1800W & 3.0L dust cup</p>
                    <p class="sub-title">3.0L dust cu</p>
                    <p class="num">已预约：8888人</p>
                  </div>
                </div>

                <div class="items">
                  <div class="items-img">
                    <img src="http://img.nasotrading.com/a2fae3f24afef08c233e661910406c07.jpg?v=873047" height="115" width="111"/>
                  </div>
                  <div class="items-text">
                    <p class="title">2000W Hair dryer with DC power</p>
                    <p class="sub-title">2000W Hair dryer with DC power</p>
                    <p class="num">已预约：4524人</p>
                  </div>
                </div>

                <div class="items">
                  <div class="items-img">
                    <img src="http://img.nasotrading.com/a9d228f1f30aea2700df808c60d34efe.jpg" height="115" width="111"/>
                  </div>
                  <div class="items-text">
                    <p class="title">Portable travel UV toothbrush </p>
                    <p class="sub-title">sanitizer case UVC light toothbrush Sterilize</p>
                    <p class="num">已预约：65846人</p>
                  </div>
                </div>

                <div class="items">
                  <div class="items-img">
                    <img src="http://img.nasotrading.com/f50082d452134240fa6d6891d5e616ab.jpg" height="115" width="111"/>
                  </div>
                  <div class="items-text">
                    <p class="title">Steam face device hot spray moisturizer </p>
                    <p class="sub-title">nano sprayer household face </p>
                    <p class="num">已预约：4126人</p>
                  </div>
                </div>





              </el-card>
            </div>
            <div class="right">
              <el-row :gutter="20">
                <el-col :span="8" v-for="item in 6" :key="item"><div class="grid-content bg-purple">
                  <div class="items" style="border: 1px solid #ddd;padding: 10px;margin-bottom: 35px;">
                    <div class="items-img" style="text-align:center;padding: 10px 15px;">
                      <img v-if="item === 1" style="width: 100%" src="http://img.nasotrading.com/40792e90c3ce168e0f172bf2a2ffe3e2.png" height="166"/>
                      <img v-if="item === 2" style="width: 100%" src="http://img.nasotrading.com/1e6d796a88d9e04f12a00dc5d68c4528.jpg" height="166"/>
                      <img v-if="item === 3" style="width: 100%" src="http://img.nasotrading.com/c2a9c4284656be21565b06a98387b9f3.jpg" height="166"/>
                      <img v-if="item === 4" style="width: 100%" src="http://img.nasotrading.com/7267333c51cd80d02094b6967d5b5999.jpg" height="166"/>
                      <img v-if="item === 5" style="width: 100%" src="http://img.nasotrading.com/d9e8bcd9903ccf8a5ce989ddd92b2ade.jpg" height="166"/>
                      <img v-if="item === 6" style="width: 100%" src="http://img.nasotrading.com/a4fb6037ab1334c88e4b3ae2f5b8e95d.jpg" height="166"/>
                    </div>
                    <div v-if="item === 1" class="items-text" style="padding: 5px 0;">
                      <p style="font-size: 1.2rem;color: red;">$43.00元</p>
                      <p style="font-size: 0.79rem;">Portable clothes dryer 900W</p>
                    </div>
                    <div v-if="item === 2" class="items-text" style="padding: 5px 0;">
                      <p style="font-size: 1.2rem;color: red;">$67.00元</p>
                      <p style="font-size: 0.79rem;">Robotic cleaner</p>
                    </div>
                    <div v-if="item === 3" class="items-text" style="padding: 5px 0;">
                      <p style="font-size: 1.2rem;color: red;">$63.00元</p>
                      <p style="font-size: 0.79rem;">Robotic vacuum cleaner</p>
                    </div>
                    <div v-if="item === 4" class="items-text" style="padding: 5px 0;">
                      <p style="font-size: 1.2rem;color: red;">$63.00元</p>
                      <p style="font-size: 0.79rem;">Anion Air Purifier 90W</p>
                    </div>
                    <div v-if="item === 5" class="items-text" style="padding: 5px 0;">
                      <p style="font-size: 1.2rem;color: red;">$148.00元</p>
                      <p style="font-size: 0.79rem;">Household odor eliminator</p>
                    </div>
                    <div v-if="item === 6" class="items-text" style="padding: 5px 0;">
                      <p style="font-size: 1.2rem;color: red;">$148.00元</p>
                      <p style="font-size: 0.79rem;">Anion Air Purifier</p>
                    </div>
                  </div>
                </div></el-col>
              </el-row>
            </div>
          </div>
        </div>
        <!-- <div class="pageouter"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import jq from 'jquery'
  export default {
    name:'homeCustommade',
    data(){
      return{
        showtab:0,
      }
    },
    methods:{
      choosecity(index){
        this.showtab = index;
       /* jq('.tab-active').removeClass('tab-active');
        jq('.tab').eq(index).addClass('tab-active')*/
      },
    },
    mounted(){
//      jq('.tab').eq(0).addClass('tab-active')
    }
  }
</script>
