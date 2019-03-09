<style lang="scss" scoped>
.showline1 {
  position: absolute;
  top: 50px;
}
.datanum {
  position: relative;
  width: 100%;
}
.datanum-backgroundimg {
  width: 100%;
  height: 267px;
}
.numshow-content {
  background-color: white;
  overflow: hidden;
}
.numshow {
  float: left;
  width: calc(25%-5px);
  padding-left: 40px;
  overflow: hidden;
}
.numshow-img {
  float: left;
  width: 89px;
  height: 89px;
}
.numshow-hr {
  float: left;
  height: 60px;
  margin-top: 20px;
  width: 2px;
  background: black;
}
.numshow-num {
  font-size: 40px;
  margin-top: 30px;
  float: left;
  padding-left: 10px;
}
.numshow-text {
  font-family: PingFang-SC-ExtraLight;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #333333;
  padding: 20px 0 30px 0;
}
</style>
<template>
  <div>
    <div class="datanum">
      <img class="datanum-backgroundimg" src="../../assets/img/BgColor.png" alt>
      <div class="layout-1200">
        <div class="showline1">
          <div class="pageouter"></div>
          <div class="pagecontent numshow-content">
            <div class="numshow">
              <img class="numshow-img" src="../../assets/img/num1_07.png" alt>
              <countTo
                ref="val0"
                :startVal="startVal0"
                :endVal="endVal0"
                :duration="4000"
                class="numshow-num"
              ></countTo>
            </div>
            <hr class="numshow-hr">
            <div class="numshow">
              <img class="numshow-img" src="../../assets/img/num2_07.png" alt>
              <countTo
                ref="val1"
                :startVal="startVal1"
                :endVal="endVal1"
                :duration="4000"
                class="numshow-num"
              ></countTo>
            </div>
            <hr class="numshow-hr">
            <div class="numshow">
              <img class="numshow-img" src="../../assets/img/num3_07.png" alt>
              <countTo
                ref="val2"
                :startVal="startVal2"
                :endVal="endVal2"
                :duration="4000"
                class="numshow-num"
              ></countTo>
            </div>
            <hr class="numshow-hr">
            <div class="numshow">
              <img class="numshow-img" src="../../assets/img/num4_07.png" alt>
              <countTo
                ref="val3"
                :startVal="startVal3"
                :endVal="endVal3"
                :duration="4000"
                :autoplay="false"
                class="numshow-num"
              ></countTo>
            </div>
            <!-- 以下是文字行 -->
            <div class="numshow">
              <p class="numshow-text">全国港口一线驻点报关</p>
            </div>
            <div class="numshow">
              <p class="numshow-text">专业出口代理团队</p>
            </div>
            <div class="numshow">
              <p class="numshow-text">成功案例见证</p>
            </div>
            <div class="numshow">
              <p class="numshow-text">出口专家组</p>
            </div>
          </div>
          <div class="pageouter"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  name: "homedatanum",
  data() {
    return {
      startVal0: 0,
      endVal0: 8,
      startVal1: 0,
      endVal1: 20,
      startVal2: 0,
      endVal2: 3000,
      startVal3: 0,
      endVal3: 5,
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      playVal: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 1500 && this.playVal === false) {
        this.playVal = true;
        this.$refs.val0.start();
        this.$refs.val1.start();
        this.$refs.val2.start();
        this.$refs.val3.start();
      }
    });


    function random(upper) {
      return Math.floor(Math.random() * (upper - 0)) + 1;
    }
    let tempnum1 = 8;
    let tempnum2 = 20;
    let tempnum3 = 3000;
    let tempnum4 = 5;
    let tempnum1fc = setInterval(() => {
      let tempvalue = tempnum1 - this.num1;
      this.num1 = this.num1 + random(tempvalue);
      if (this.num1 === tempnum1) {
        clearInterval(tempnum1fc);
      }
    }, 1500);
    let tempnum2fc = setInterval(() => {
      let tempvalue = tempnum2 - this.num2;
      this.num2 = this.num2 + random(tempvalue);
      if (this.num2 === tempnum2) {
        clearInterval(tempnum2fc);
      }
    }, 1500);
    let tempnum3fc = setInterval(() => {
      let tempvalue = tempnum3 - this.num3;
      this.num3 = this.num3 + random(tempvalue);
      if (this.num3 === tempnum3) {
        clearInterval(tempnum3fc);
      }
    }, 1500);
    let tempnum4fc = setInterval(() => {
      let tempvalue = tempnum4 - this.num4;
      this.num4 = this.num4 + random(tempvalue);
      if (this.num4 === tempnum4) {
        clearInterval(tempnum4fc);
      }
    }, 1500);
  }
};
</script>


