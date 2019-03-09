<style scoped lang="scss">
  .homeservice{
    .homeservice-content{
      background:#4A3F91 ;
      .content{
        margin:0 0 30px 0;
        .title{
          text-align: center;
          line-height: 140px;
          .title-content{
            display: inline-block;font-size: 1.2rem;margin: 0 20px;    width: 60%;position: relative;
            .left-hr{
              height: 3px;width:20%;display: inline-block;background:white;position: absolute;top: 48%;left: 0;
            }
            span{
              color: white;
              font-size: 2rem;
              font-weight: 600;
            }
            .right-hr{
              height: 3px;width: 20%;display: inline-block;background: white;position: absolute;top: 48%;right: 0;
            }
          }
        }
        .content{
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
            background: white;
            margin:0 0  10px 0 ;
            .items{
              padding:20px 0 20px 20px;
              .item-title{
                height:40px;
                line-height: 40px;
                font-size: 1rem;
                font-weight: 600;
                color:#4A3F91 ;
              }
              .text{
                padding: 5px 0 10px 0;
                p{
                  font-size: 0.93rem;
                }
              }
              .item-btn{
                font-size: 1rem;
                padding: 0 0 20px 0;
                .elbtn{
                  background: #F08619;
                  border-radius: 5px;
                  color: white;
                }
                .elbtn1{
                  border:1px solid #F08619;
                  border-radius: 5px;
                  color: #F08619;
                }
              }
            }
            .item1{
              background:url('../../assets/img/home003.png');
              -moz-background-size:100% 100%; /* 老版本的 Firefox */
              background-size:100% 100%;
              background-repeat:no-repeat;

            }
            .item2{
              background:url('../../assets/img/home002.png');
              -moz-background-size:100% 100%; /* 老版本的 Firefox */
              background-size:100% 100%;
              background-repeat:no-repeat;
            }
            .item3{
              background:url('../../assets/img/home001.png');
              -moz-background-size:100% 100%; /* 老版本的 Firefox */
              background-size:100% 100%;
              background-repeat:no-repeat;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="homeservice">
    <div class="homeservice-content">
      <div class="layout">
        <div class=" content">
          <div class="title">
            <div class="title-content">
              <hr class="left-hr">
              <span >一站式为您搞定国际物流</span>
              <hr class="right-hr">
            </div>
          </div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="8" ><div class="grid-content bg-purple">
                <div class="item1 items">
                  <div class="item-title">订舱</div>
                  <div class="text">
                    <p>在线一步下单订舱</p>
                    <p>覆盖全球90%的港口</p>
                  </div>
                  <div class="item-btn">
                    <nuxt-link :to="{name:'cabinOffer'}">
                      <el-button class="elbtn">订舱从这里开始</el-button>
                    </nuxt-link>
                  </div>
                </div>
              </div></el-col>
              <el-col :span="8" ><div class="grid-content bg-purple">
                <div class="item2 items">
                  <div class="item-title">拖车</div>
                  <div class="text">
                    <p>高运力，低延误</p>
                    <p>保障出运高峰期顺利出车</p>
                  </div>
                  <div class="item-btn">
                    <el-button class="elbtn1" @click="service('trailer')">拖车从这里开始</el-button>
                  </div>
                </div>
              </div></el-col>
              <el-col :span="8" ><div class="grid-content bg-purple">
                <div class="item3 items">
                  <div class="item-title">报关</div>
                  <div class="text">
                    <p>自有报关资质和团队</p>
                    <p>实时了解报关进度</p>
                  </div>
                  <div class="item-btn">
                    <el-button class="elbtn1" @click="service('customs')">好服务从这里开始</el-button>
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
  export default {
    name:'homeservice',
    data(){
      return{

      }
    },
    methods:{
      service(name){
        this.$router.push({name:name})
      }

    },
    mounted(){

    }
  }
</script>
