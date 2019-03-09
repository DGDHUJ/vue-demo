<style lang="scss" scoped>
.mpcontent2 {
  margin: 10px 0 0 0;
  position: relative;
  .mpcontent2-left {
    background: white;
    padding: 16px 22px;
    line-height: 60px;
    font-size: 15px;
    min-height: 264px;
    .mpcontent2-left-btn1 {
      margin-bottom: 20px;
      background: #4b3f91;
      color: white;
      cursor: pointer;
      padding-left: 10px;
    }
    .mpcontent2-left-btn2 {
      margin-bottom: 10px;
      background: #f08619;
      color: white;
      cursor: pointer;
      padding-left: 10px;
    }
    .mpcontent2-left-btn3 {
      margin-bottom: 10px;
      cursor: pointer;
      .mpcontent2-left-btn3-i {
        float: left;
        margin-top: 3px;
        margin-right: 5px;
        font-size: 29px;
        line-height: 2rem;
        color: #f08519;
      }
      .mpcontent2-left-btn3-p1 {
        margin-top: 2.2rem;
        font-size: 0.5rem;
        letter-spacing: -0.4px;
        line-height: 1.2rem;
      }

      .mpcontent2-left-btn3-p2 {
        margin-top: 0.2rem;
        color: #f08519;
        text-align: left;
        font-weight: 600;
        line-height: 1.2rem;
      }
    }
  }
  .mpcontent2-center {
    background: white;
    margin: 0px 10px;
    padding: 2px 5px;
    min-height: 264px;
    height: 100%;
    .mpcontent2-center-title {
      line-height: 30px;
      padding-top: 10px;
      padding-left: 10px;
      font-size: 1.2rem;
      overflow: hidden;
      cursor: pointer;
      .mpcontent2-center-title-p {
        float: right;
        margin: 0 15px 0 0;
      }
    }
    .mpcontent2-center-content {
      // display: flex;
      // -ms-flex-direction: row;
      // flex-wrap: wrap;
      padding-top: 1.2rem;
      .mpcontent2-center-content-list {
        display: inline-block;
        width: 48%;
        margin: 5px 4px;
        cursor: pointer;
        .mpcontent2-center-content-listimg {
          float: left;
          width: 25%;
          height: auto;
        }
        .mpcontent2-center-content-listbody {
          float: left;
          position: relative;
          padding-left: 10px;
          height: 80px;
          width: 75%;
          .mpcontent2-center-content-listbody-p1 {
            font-size: 13px;
            color: #666666;
          }
          .mpcontent2-center-content-listbody-p2 {
            position: absolute;
            left: 10px;
            bottom: 4px;
            span {
              color: #f08519;
            }
          }
        }
      }
    }
  }
  .mpcontent2-right {
    background: white;
    padding: 2px 10px;
    min-height: 264px;
    height: 100%;
    .mpcontent2-right-title {
      line-height: 30px;
      padding-top: 10px;
      padding-left: 10px;
      font-size: 1.2rem;
      cursor: pointer;
      .mpcontent2-center-title-p {
        float: right;
        margin: 0 15px 0 0;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .mpcontent2-left {
    .mpcontent2-left-btn3 {
      .mpcontent2-left-btn3-p1 {
        margin-top: 2rem;
        font-size: 0.9rem;
        font-weight: bold;
        color: #555;
        line-height: 1.2rem;
      }
    }
  }
  .mpcontent2-right {
    background: white;
    padding: 2px 10px;
    min-height: 264px;
    height: 100%;
    .mpcontent2-right-title {
      line-height: 30px;
      padding-top: 10px;
      padding-left: 10px;
      font-size: 1.2rem;
      cursor: pointer;
      .mpcontent2-center-title-p {
        float: right;
        margin: 0 15px 0 0;
      }
    }
  }
}



</style>
<style lang="scss">
  .rightlunbo {
  .elcarouselitem {
    height: 100%;
  }
  .el-carousel {
    width: 100%;
  }
  .el-carousel__container {
    height: 220px !important;
    text-align: center;
    .mp2lunbo {
      margin-top: 1rem;
      cursor: pointer;
      width: 60%;
      height: auto;
    }
    @media screen and (min-width: 1200px) {
      .mp2lunbo {
        margin-top: 0rem;
      }
    }
    .mp2lunbotitle {
      margin-top: 12px;
    }
  }

  .el-carousel__indicators {

    //bottom: 30px !important;
    .el-carousel__button {
      background: #4B3F91;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      /*opacity: 1;*/
    }
  }

  .el-carousel__indicator.is-active button {
    opacity: 1;
    background: #4B3F91;
  }
}

</style>

<template>
  <div  class="mpcontent2">
    <el-row class="__main">
      <el-col :span="5">
          <div class="mpcontent2-left">
            <a href="http://www.getnaso.com/inquiry" target="_blank" >
            <div class="mpcontent2-left-btn1" >
              <i class="el-icon-message"></i> Post Buying Leads
            </div>
            </a>
           
            <div class="mpcontent2-left-btn2" >
              <i class="el-icon-message"></i> Products Release
            </div>
            <div class="mpcontent2-left-btn3">
              <div>
                <i class="mpcontent2-left-btn3-i el-icon-phone-outline"></i>
                <p class="mpcontent2-left-btn3-p1">GETnaso Service Hotline</p>
                <p class="mpcontent2-left-btn3-p2">+86 0757 82581931</p>
              </div>
            </div>
          </div>
      </el-col>
      <el-col :span="14">
          <div class="mpcontent2-center">
            <div class="mpcontent2-center-title">
              Discount on Group-buying & Shared Order
              <p class="mpcontent2-center-title-p">
                <nuxt-link :to="{name: 'product-list-cate',query:{'order_by':'time','asc_or_desc':1}}"> &rsaquo;&rsaquo;&rsaquo; </nuxt-link>
              </p>
            </div>
            <div class="mpcontent2-center-content">
              <div class="mpcontent2-center-content-list" :key="key" v-for="(item,index,key) in pin_dan_goods">
                <nuxt-link :to="{name: 'product-id',params:{id:item.id}}" target="_blank">
                  <img class="mpcontent2-center-content-listimg" :src="item.img_url | imgCompress(80,80)" />
                  <div class="mpcontent2-center-content-listbody">
                    <span></span>
                    <p class="mpcontent2-center-content-listbody-p1">
                      {{item.title | ellipsis(90,item.title)}}</p>
                    <p class="mpcontent2-center-content-listbody-p2">Quantity booked: <span style="font-weight:bold;">{{item.people}}</span><span> Qua</span></p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
      </el-col>
      <el-col :span="5">
          <div class="mpcontent2-right">
            <div class="mpcontent2-right-title">Latest Products
              <p class="mpcontent2-center-title-p">
                <span>
                  <nuxt-link :to="{name: 'product-list-cate',query:{'order_by':'time','asc_or_desc':1}}"> &rsaquo;&rsaquo;&rsaquo; </nuxt-link>
                </span>
              </p>
            </div>
            <div class="rightlunbo">
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item class="elcarouselitem"  v-for="item in latest_goods" :key="item.id">
                  <nuxt-link :to="{name: 'product-id',params:{id:item.id}}" target="_blank">
                    <img class="mp2lunbo"  :src="item.img_url | imgCompress(138,138)"/>
                    <div class="mp2lunbotitle">{{item.title | ellipsis(52,item.title)}}</div>
                  </nuxt-link>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {imgCompress} from '~/plugins/filters.js';
export default {
  name: "mpcontent2",
  props: ["latest_goods", "pin_dan_goods"],
  data() {
    return {
      token: ""
    };
  },
  methods: {
    goproductdetail() {
      this.$router.push("/productdetail");
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
  }
};
</script>

