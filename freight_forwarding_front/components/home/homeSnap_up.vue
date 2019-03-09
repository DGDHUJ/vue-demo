<style scoped lang="scss">
._main {
  padding: 30px 0;
  margin: 30px auto;
  background-color: #fff;
  text-align: center;
}
.content-title{
  width: 364px;
}
.ticket {
  background: url("../../assets/img/snap_up.png") no-repeat;
  width: 280px;
  height: 242px;
  position: relative;
  text-align: center;
  display: inline-block;
  overflow: hidden;
  margin-right: 10px;
  .feature {
    margin-left: -34px;
    padding-top: 20px;
    font-size: 46px;
    color: #fff;
    font-weight: bold;
    p {
      margin-top: -10px;
      font-size: 18px;
    }
  }
  .feature-right {
    position: absolute;
    display: table-cell;
    width: 36px;
    height: 150px;
    vertical-align: middle;
    text-align: center;
    right: 0;
    top: 0;
    margin-right: 16px;
    border-left: 1px dashed #fff;
    writing-mode: vertical-rl;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }
  .deadline {
    margin-top: 3px;
    padding-top: 2px;
    height: 34px;
    line-height: 1.2;
    font-size: 9px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.ticket:last-child {
  margin-right: 0;
}
.time {
  position: absolute;
  right: 0;
  width: 136px;
  height: 24px;
  background-color: #ccc;
  border-radius: 0 0 6px 6px;
  color: #333;
  font-size: 16px;
  z-index: 1;
}
.item {
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: #f0f0f0;
  border-radius: 0 0 6px 6px;
  font-size: 17px;
  .lane {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #999;
  }
  .price {
    width: 33.3%;
    float: left;
    color: #333333;
    p {
      margin-top: -2px;
      color: #f57908;
    }
  }
}
</style>
<template>
  <section class="container">
    <div class="layout-1200 _main">
      <div class="content-title">
        <h2>
          <i class="left-icon icon_line"></i>优惠航线
          <i class="right-icon icon_line"></i>
        </h2>
        <p>超低价进行时，限时秒杀！</p>
      </div>
      <div class="ticket">
        <div class="time">0天 15:42:44</div>
        <div>
          <div class="feature">
            <h3>特价舱位</h3>
            <p>时间有限，赶快行动</p>
          </div>
          <div class="feature-right">立即订舱</div>
        </div>
        <div class="deadline">
          截关/开船：5/7
          <span>航程：8天</span>
          <p>有效期：2019.1.24-2019.1.24</p>
        </div>
        <div class="item">
          <div class="lane">广东—曼谷</div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="time">0天 15:42:44</div>
        <div>
          <div class="feature">
            <h3>特价舱位</h3>
            <p>时间有限，赶快行动</p>
          </div>
          <div class="feature-right">立即订舱</div>
        </div>
        <div class="deadline">
          截关/开船：5/7
          <span>航程：8天</span>
          <p>有效期：2019.1.24-2019.1.24</p>
        </div>
        <div class="item">
          <div class="lane">广东—曼谷</div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="time">0天 15:42:44</div>
        <div>
          <div class="feature">
            <h3>特价舱位</h3>
            <p>时间有限，赶快行动</p>
          </div>
          <div class="feature-right">立即订舱</div>
        </div>
        <div class="deadline">
          截关/开船：5/7
          <span>航程：8天</span>
          <p>有效期：2019.1.24-2019.1.24</p>
        </div>
        <div class="item">
          <div class="lane">广东—曼谷</div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="time">0天 15:42:44</div>
        <div>
          <div class="feature">
            <h3>特价舱位</h3>
            <p>时间有限，赶快行动</p>
          </div>
          <div class="feature-right">立即订舱</div>
        </div>
        <div class="deadline">
          截关/开船：5/7
          <span>航程：8天</span>
          <p>有效期：2019.1.24-2019.1.24</p>
        </div>
        <div class="item">
          <div class="lane">广东—曼谷</div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
          <div class="price">20GP
            <p>$4580</p>
          </div>
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

