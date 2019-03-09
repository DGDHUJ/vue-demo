<style scoped lang="scss">
._main {
  padding: 30px 0;
  margin: 30px auto;
  background-color: #fff;
  text-align: center;
}
.img1 {
  background: url("../../assets/img/home-pic1.jpg") no-repeat;
}
.img2 {
  background: url("../../assets/img/home-pic2.jpg") no-repeat;
}
.img3 {
  background: url("../../assets/img/home-pic3.jpg") no-repeat;
}
.img4 {
  background: url("../../assets/img/home-pic4.jpg") no-repeat;
}

.server_item {
  display: inline-block;
  position: relative;
  width: 260px;
  height: 420px;
  overflow: hidden;
  margin-right: 36px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px #ddd;
  &-mask {
    width: 100%;
    height: 100%;
    background: -webkit-radial-gradient(
      rgba(67, 37, 121, 0.5),
      rgba(67, 37, 121, 0.8)
    ); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(
      rgba(67, 37, 121, 0.5),
      rgba(67, 37, 121, 0.8)
    ); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(
      rgba(67, 37, 121, 0.5),
      rgba(67, 37, 121, 0.8)
    ); /* Firefox 3.6 - 15 */
    background: radial-gradient(
      rgba(67, 37, 121, 0.5),
      rgba(67, 37, 121, 0.8)
    ); /* 标准的语法 */
    transition: background-color 0.5s ease;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4a3f91', endColorstr='#4a3f91', GradientType=0.5);
  }
  &-bg {
    width: 275px;
    display: inline-block;
    height: 278px;
  }
  &-text {
    position: absolute;
    bottom: 6px;
    padding-left: 12px;
    text-align: left;
    z-index: 1;
    p {
      padding: 8px 0;
      font-size: 20px;
      font-weight: bold;
    }
    span {
      font-size: 18px;
    }
    .text-mover {
      position: relative;
      transition: top 0.2s;
      transition: color 0.5s;
      top: -150px;
      color: #fff;
      text-shadow: 0px 0px 2px #000;
    }
    .text-btn {
      margin: 10px 0 4px;
      padding: 6px 10px;
      width: 116px;
      font-size: 16px;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      user-select: none;
      span {
        display: inline-block;
        font-size: 14px;
      }
    }
  }
  background-position: 0 0px;
  transition: background-position 0.5s;
}
.server_item:hover {
  background-position: 0 -170px;
  .text-mover {
    color: #333;
    text-shadow: none;
    position: relative;
    top: 0px;
  }
  .icon-triangle {
    display: none;
  }
  .text-btn {
    background-color: #4a3f91;
    width: 90px;
    span {
      display: none;
    }
  }
  .server_item-mask {
    background: rgba(0, 0, 0, 0);
  }
}
.icon-triangle {
  display: inline-block;
  margin-top: -2px;
  width: 8px;
  height: 10px;
  border-style: solid;
  border-width: 6px 10px 6px 0px;
  border-color: transparent #ff6600 transparent transparent;
  transform: rotate(180deg); /*顺时针旋转90°*/
  &:nth-of-type(1) {
    margin-left: 10px;
  }
}
</style>
<template>
  <section class="container">
    <div class="layout-1200 _main">
      <div class="content-title">
        <h2>
          <i class="left-icon icon_line"></i>纳运通能为您提供什么服务
          <i class="right-icon icon_line"></i>
        </h2>
        <p>为您提供订舱、拖车、报关、保险等一系列服务</p>
      </div>
      <div>
        <div class="server_item img1">
          <div class="server_item-mask"></div>
          <!-- <div class="server_item-bg img1"></div> -->
          <div class="server_item-text">
            <div class="text-mover">
              <p>
                订舱服务
                <i class="icon-triangle"></i>
                <i class="icon-triangle"></i>
              </p>
              <span>在线一步下单
                <br>覆盖全球90%的港口
              </span>
            </div>
            <nuxt-link :to="{name:'cabinOffer'}">
              <div class="text-btn">
                了解更多
                <span>>></span>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="server_item img2">
          <div class="server_item-mask"></div>
          <!-- <div class="server_item-bg img1"></div> -->
          <div class="server_item-text">
            <div class="text-mover">
              <p>
                拖车服务
                <i class="icon-triangle"></i>
                <i class="icon-triangle"></i>
              </p>
              <span>高运力，低延误
                <br>保障出运高峰期顺利出车
              </span>
            </div>
            <nuxt-link :to="{name:'trailer'}">
              <div class="text-btn">
                了解更多
                <span>>></span>
              </div>
            </nuxt-link>
          </div>
          <!-- <div class="server_item-bg img2"></div> -->
        </div>
        <div class="server_item img3">
          <div class="server_item-mask"></div>
          <!-- <div class="server_item-bg img1"></div> -->
          <div class="server_item-text">
            <div class="text-mover">
              <p>
                报关报检
                <i class="icon-triangle"></i>
                <i class="icon-triangle"></i>
              </p>
              <span>专业报关报验服务
                <br>一站式高效通关
              </span>
            </div>
            <nuxt-link :to="{name:'customs'}">
              <div class="text-btn">
                了解更多
                <span>>></span>
              </div>
            </nuxt-link>
          </div>
          <!-- <div class="server_item-bg img3"></div> -->
        </div>
        <div class="server_item img4">
          <div class="server_item-mask"></div>
          <!-- <div class="server_item-bg img1"></div> -->
          <div class="server_item-text">
            <div class="text-mover">
              <p>
                出口代理
                <i class="icon-triangle"></i>
                <i class="icon-triangle"></i>
              </p>
              <span>管家式出口代理服务
                <br>外贸出口省心省力
              </span>
            </div>
            <a href="http://f.getnaso.com/zly/a.html">
              <div class="text-btn">
                了解更多
                <span>>></span>
              </div>
            </a>
          </div>
          <!-- <div class="server_item-bg img4"></div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

