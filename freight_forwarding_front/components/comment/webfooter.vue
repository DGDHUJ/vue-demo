<style scoped lang="scss">
  .footer-outer{
    .line{
      background: #4A3F91;
      height: 5px;
    }
    .footer{
      background: black;
      color: white;
      .content{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .item1{
          width: 19%;
          padding: 10px 20px 40px 20px;
          .title{
            font-size: 1.1rem;
            font-weight: 600;
            padding: 30px 0 20px 0;
          }
          .link{
            .p1{
              display: inline-block;
              width:30%;
              cursor: pointer;
              padding:3px 0;
              font-size: 0.93rem;
            }
            .p2{
              display: inline-block;
              width:70%;
              cursor: pointer;
              padding:3px 0;
              font-size: 0.93rem;
            }
          }
        }
        .item2{
          width: 19%;
          padding: 10px 20px 40px 00px;
          .title{
            font-size: 1.1rem;
            font-weight: 600;
            padding: 30px 0 20px 0;
          }
          .link{
            .p1{
              display: inline-block;
              width:50%;
              cursor: pointer;
              padding:3px 3px 3px 0;
              font-size: 0.93rem;
            }
          }
        }
        .item3{
          width: 29%;
          padding: 10px 20px 40px 0px;
          .title{
            font-size: 1.1rem;
            font-weight: 600;
            padding: 30px 0 20px 0;
          }
          .link{
            position: relative;
            overflow: hidden;
            .code{
              float: left;
              width: 26.5%;
              img{
                width: 100%;
              }
            }
            .text{
              position: absolute;
              margin-left: 31%;
              transform: translate(0,50%);
              font-size: 0.93rem;
            }
          }
        }
        .item4{
          padding: 10px 0px 40px 0px;
          width: 33%;
          .title{
            font-size: 1.1rem;
            font-weight: 600;
            padding: 30px 0 20px 0;
          }
          .link{
            p:first-of-type{
              font-size: 0.93rem;
              padding:5px 0;
            }
            .p1{
              display: inline-block;
              width:33.33%;
              cursor: pointer;
              padding:3px 3px 3px 0;
              font-size: 0.93rem;
            }
          }
        }
      }
      .banquan{
        text-align: center;
        margin:0 10%;
        padding:30px 0  60px 0 ;
        border-top:1px solid #ddd;
      }

    }
  }

</style>
<template>
  <div class="footer-outer">
    <div class="line"></div>
    <div class="footer ">
      <!-- <div class="pageouter"></div> -->
      <div class=" layout">
        <div class="content">
          <div class="item item1">
            <div class="title">网站导航</div>
            <div class="link">
              <p class="p1">首页</p>
              <p class="p2">合作伙伴</p>
              <p class="p1">订舱</p>
              <p class="p2">资讯中心</p>
              <p class="p1">拖车</p>
              <p class="p2">关于纳信</p>
              <p class="p1">报关</p>
              <p class="p2">服务协议</p>
            </div>
          </div>
          <div class="item item2">
            <div class="title">服务帮助</div>
            <div class="link">
              <p class="p1">订舱服务</p>
              <p class="p1">问题解答</p>
              <p class="p1">拖车服务</p>
              <p class="p1">问题解答</p>
              <p class="p1">报关服务</p>
              <p class="p1">问题解答</p>
            </div>
          </div>
          <div class="item item3">
            <div class="title">诚邀合作</div>
            <div class="link">
              <div class="code">
                <img src="../../assets/img/code.png"/>
              </div>
              <div class="text">
                <p>0757-82581931</p>
                <p>24小时 x 7 响应您的呼叫</p>
              </div>
            </div>
          </div>
          <div class="item item4">
            <div class="title">客户服务</div>
            <div class="link">
              <p>0757-82581931</p>
              <p class="p1">询单客服 1</p>
              <p class="p1">询单客服 1</p>
              <p class="p1">询单客服 1</p>
              <p class="p1">询单客服 1</p>
              <p class="p1">询单客服 1</p>
              <p class="p1">询单客服 1</p>
            </div>
          </div>
        </div>
        <div class="banquan">
          <p>Copyright © 2004 - 2018  nasotrading.com 版权所有|消费者维权热线：0757-82581931 经营证照</p>
        </div>

      </div>
      <!-- <div class="pageouter"></div> -->
    </div>
  </div>

</template>
<script>
  export default {
    name:'webfooter',
    data(){
      return{

      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>
